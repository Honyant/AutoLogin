chrome.browserAction.onClicked.addListener(function (tab) {
  var u = prompt("What is your email?");
  if (u != null) {
    chrome.storage.local.set({ u: u }, function () {
      console.log("email set");
    });
  }
});
