const paywallRemoverUrl = "https://12ft.io/proxy?q=";

const urlUpdater = (tabId, tabUrl) => {
  const removedPaywallUrl = paywallRemoverUrl + tabUrl;
  chrome.tabs.update(tabId, { url: removedPaywallUrl });
};

chrome.action.onClicked.addListener((tab) => {
  urlUpdater(tab.tabId, tab.url);
});

// Automatic redirector may be added later.

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.url === undefined || changeInfo.url === null) return;
//   if (changeInfo.url.startsWith("https://medium.com/")) {
//     urlUpdater(tabId, changeInfo.url);
//   }
// });
