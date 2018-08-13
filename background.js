chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({color: '#3aa757'}, function () {
        console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'ehire.51job.com'},
            }),
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {hostEquals: 'lpt.liepin.com'},
                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.greeting == "hello03") {

            if (request.str) {
                var openWindow = window.open(chrome.runtime.getURL('collectresult.html'));
                var tempStr = request.str;
                openWindow.onload = function () {
                    openWindow.document.getElementById('resultId').innerHTML = tempStr;
                    // openWindow.document.getElementById('resultId').style.font = 18;
                }
            }
        }
        sendResponse({farewell: "goodbye"});

    })