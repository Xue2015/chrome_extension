// chrome.tabs.query(
//     {active:true, currentWindow:true},
//     function(tabs) {
//         var port = chrome.tabs.connect(tabs[0].id, {name : "tunnel"});
//         let alertBtn = document.getElementById('alertBtn');
//         alertBtn.onclick = function () {
//             port.postMessage({rec : "record"});
//         }
//     }
// );


let alertBtn = document.getElementById('alertBtn');
alertBtn.onclick = function () {
    chrome.tabs.query(
        {active: true, currentWindow: true},
        function(tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {greeting: "JAVA" + " " + tabs[0].url},
                function(response) {
                    console.log(response.farewell);
                    var obj = {};
                    chrome.storage.sync.get("employeesGet", function (data) {
                        if (data.employeesGet) {
                            obj.employeesGet = data.employeesGet;
                        } else {
                            obj.employeesGet = [];
                            chrome.storage.sync.set(obj, function () {
                                console.log("obj stored");
                            });
                        }
                    });
                });
        });
}

let changeColor = document.getElementById('changeColor');

  changeColor.onclick = function(element) {
      chrome.tabs.query(
          {active: true, currentWindow: true},
          function(tabs) {
              chrome.tabs.sendMessage(
                  tabs[0].id,
                  {greeting: "WEB" + " " + tabs[0].url},
                  function(response) {
                      console.log(response.farewell);
                      var obj = {};
                      chrome.storage.sync.get("employeesGet", function (data) {
                          if (data.employeesGet) {
                              obj.employeesGet = data.employeesGet;
                          } else {
                              obj.employeesGet = [];
                              chrome.storage.sync.set(obj, function () {
                                  console.log("obj stored");
                              });
                          }
                      });
                  });
          });
  };

let collectDataBtn = document.getElementById('collectDataBtn');
collectDataBtn.onclick = function () {
    chrome.tabs.query(
        {active: true, currentWindow: true},
        function(tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {greeting: "hello02"},
                function(response) {
                    console.log(response.farewell);
                });
        });
}