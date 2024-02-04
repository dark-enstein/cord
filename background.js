chrome.action.onClicked.addListener((tab) => {
    var newURL = "cuddle.html";
    chrome.tabs.create({
        url: newURL
    });
});