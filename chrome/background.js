chrome.action.onClicked.addListener(async (tab) => {
  const currentUrl = tab.url;
  const redirectUrl = `https://freedium.cfd/${encodeURIComponent(currentUrl)}`;
  await chrome.tabs.update({ url: redirectUrl });
});