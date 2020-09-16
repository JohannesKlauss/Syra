const path = require('path');
const fs = require('fs');
const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');
const dfxJson = require('./dfx.json');

// List of all aliases for canisters. This creates the module alias for
// the `import ... from "ic:canisters/xyz"` where xyz is the name of a
// canister.
const aliases = Object.entries(dfxJson.canisters).reduce(
  (acc, [name, _value]) => {
    // Get the network name, or `local` by default.
    const networkName = process.env['DFX_NETWORK'] || 'local';
    const outputRoot = path.join(
      __dirname,
      '.dfx',
      networkName,
      'canisters',
      name,
    );

    return {
      ...acc,
      ['ic:canisters/' + name]: path.join(outputRoot, name + '.js'),
      ['ic:idl/' + name]: path.join(outputRoot, name + '.did.js'),
    };
  },
  {},
);

function generateIcEntryPoint(name, info) {
  const entryPointPath = path.join(__dirname, info.frontend.entrypoint);

  const assets = glob.sync('build/static/js/*.js').sort((a, b) => {
    a = path.basename(a);
    b = path.basename(b);

    if (a.startsWith('runtime')) {
      return -1;
    } else if (a.startsWith('main')) {
      return 1;
    } else {
      return Number(a.substr(0, 1)) - Number(b.substr(0, 1));
    }
  });

  // TODO: REFACTOR THIS.
  const content = `
import ${name} from "ic:canisters/${name}";

console.log('startup');

(async () => {
  function addStyle(styles) { 
    const css = document.createElement('style'); 
    
    css.appendChild(document.createTextNode(styles)); 
      
    document.head.appendChild(css); 
  } 
  
  addStyle('@keyframes heartbeat\\n' +
    '{\\n' +
    '  0%\\n' +
    '  {\\n' +
    '    opacity: 1;\\n' +
    '  }\\n' +
    '  20%\\n' +
    '  {\\n' +
    '    opacity: 0.2;\\n' +
    '  }\\n' +
    '  40%\\n' +
    '  {\\n' +
    '    opacity: 1;\\n' +
    '  }\\n' +
    '  60%\\n' +
    '  {\\n' +
    '    opacity: 0.2;\\n' +
    '  }\\n' +
    '  80%\\n' +
    '  {\\n' +
    '    opacity: 1;\\n' +
    '  }\\n' +
    '  100%\\n' +
    '  {\\n' +
    '    opacity: 1;\\n' +
    '  }\\n' +
    '}');
  
  addStyle('#loader { background-color: #282928; width: 100vw; height: 100vh; position: absolute; display: flex; justify-content: center; align-items: center; }');
  addStyle('body { margin: 0; }');
  addStyle('#loader > img { width: 320px; animation: heartbeat 2.2s infinite; }');
  
  const img = document.createElement('img');
  const loader = document.createElement('div');
  
  loader.setAttribute('id', 'loader');
  img.src = "https://i.ibb.co/980btCf/logo-v1-text.png";
  
  loader.appendChild(img);
  
  document.getElementById('app').appendChild(loader);
})();

(async () => {
  const injectJsFiles = [];
  
  injectJsFiles.push(
    ${assets.map(fileName => `await ${name}.retrieve('static/js/${path.basename(fileName)}')`)}
  );
  
  injectJsFiles.forEach(content => {
    const s = document.createElement("script");
    s.type = 'text/javascript';
    s.innerHTML = new TextDecoder().decode(new Uint8Array(content));
    
    document.body.appendChild(s);
  });
})();
  `;

  fs.writeFileSync(entryPointPath, content);
}

/**
 * Generate a webpack configuration for a canister.
 */
function generateWebpackConfigForCanister(name, info) {
  if (typeof info.frontend !== 'object') {
    return;
  }

  generateIcEntryPoint(name, info);

  const entryPointPath = path.join(__dirname, info.frontend.entrypoint);

  return {
    mode: 'production',
    entry: {
      index: entryPointPath,
    },
    devtool: 'source-map',
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
    resolve: {
      alias: aliases,
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'dist', name),
    },

    // Depending in the language or framework you are using for
    // front-end development, add module loaders to the default
    // webpack configuration. For example, if you are using React
    // modules and CSS as described in the "Adding a stylesheet"
    // tutorial, uncomment the following lines:
    // module: {
    //  rules: [
    //    { test: /\.(js|ts)x?$/, loader: "ts-loader" },
    //    { test: /\.css$/, use: ['style-loader','css-loader'] }
    //  ]
    // },
    plugins: [],
  };
}

// If you have additional webpack configurations you want to build
//  as part of this configuration, add them to the section below.
module.exports = [
  ...Object.entries(dfxJson.canisters)
    .map(([name, info]) => {
      return generateWebpackConfigForCanister(name, info);
    })
    .filter((x) => !!x),
];
