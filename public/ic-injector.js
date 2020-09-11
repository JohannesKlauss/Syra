
import syra_assets from "ic:canisters/syra_assets";

console.log('test');

(async () => {
  const injectJsFiles = [];
  
  injectJsFiles.push(
    await syra_assets.retrieve('static/js/2.919c8c5e.chunk.js'),await syra_assets.retrieve('static/js/main.e4ccfa73.chunk.js'),await syra_assets.retrieve('static/js/runtime-main.47441b4a.js')
  );
  
  injectJsFiles.forEach(content => {
    const s = document.createElement("script");
    s.type = 'text/javascript';
    s.innerHTML = new TextDecoder().decode(new Uint8Array(content));
    
    document.body.appendChild(s);
  });
})();
  