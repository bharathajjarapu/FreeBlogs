async function openMyPage(tab) {
    let result = await browser.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const meta = document.querySelector("meta[content=Medium]");
        return meta !== null;
      }
    });
  
    if (result[0].result) {
      const pageURL = tab.url.toString();
      const freepage = "https://freedium.cfd/" + pageURL;
      browser.tabs.update(tab.id, { url: freepage });
    }
  }
  browser.browserAction.onClicked.addListener(openMyPage);