(async () => {
  const src = chrome.runtime.getURL('main.js');
  const contentMain = await import(src);
})();
