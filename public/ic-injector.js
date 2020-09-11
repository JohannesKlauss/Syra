
import syra_assets from "ic:canisters/syra_assets";

console.log('test');

(async () => {
  const injectJsFiles = [];
  
  injectJsFiles.push(
    await syra_assets.retrieve('static/js/2.f4034113.chunk.js'),await syra_assets.retrieve('static/js/3.ead97288.chunk.js'),await syra_assets.retrieve('static/js/main.68361f04.chunk.js'),await syra_assets.retrieve('static/js/runtime-main.bde1b5db.js')
  );
  
  injectJsFiles.forEach(content => {
    const s = document.createElement("script");
    s.type = 'text/javascript';
    s.innerHTML = new TextDecoder().decode(new Uint8Array(content));
    
    document.body.appendChild(s);
  });
})();
  