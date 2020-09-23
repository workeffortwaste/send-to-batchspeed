function openBatchSpeed(e) {
    chrome.tabs.create({url: "https://batchspeed.com/?url=" + e})
}

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === 'batchspeed') {
        openBatchSpeed(tab.url)
    }
});

chrome.contextMenus.create({
    id: "batchspeed",
    title: "Send to Batch Speed",
    contexts: ["page"]
});
