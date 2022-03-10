// content.js



function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}

waitForElementToDisplay("#site-login-input",function(){
  setTimeout(() => {
    var u;
    var p;
    chrome.storage.local.get(['u','p'], function(result) {
      u=result.u;
      p=result.p;
      if(u=="undefined"||u==undefined){
        u=prompt("(First time setup) What is your username?")
        chrome.storage.local.set({'u': u});
      
        p=prompt("(First time setup) What is your username?")
        chrome.storage.local.set({'p': p});
      }
      setTimeout(() => {
        document.getElementById('Username').value=u
        document.getElementById('nextBtn').click()
        setTimeout(() => {
          document.getElementById('Password').value=p
          document.getElementById('loginBtn').click()
        }, 200)
      }, 100)
    });
  },500);
},100,9000);

waitForElementToDisplay("#to-pwd",function(){
  chrome.storage.local.get(['u','p'], function(result) {
    u=result.u;
    p=result.p;
    if(u=="undefined"||u==undefined){
      u=prompt("(First time setup) What is your username?")
      chrome.storage.local.set({'u': u});
    
      p=prompt("(First time setup) What is your username?")
      chrome.storage.local.set({'p': p});
    }
    setTimeout(() => {
      document.getElementById('to-pwd').value=p
      document.getElementById('to-signin').click()
    }, 100)
  });
  
},500,90000000000);
//to-pwd "session timeout"
