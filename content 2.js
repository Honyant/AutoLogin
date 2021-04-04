// content.js
//https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists


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
    document.getElementById('nextBtn').click()
    setTimeout(() => {
      document.getElementById('loginBtn').click()
    }, 200); 
  }, 400)
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
  
},2000,900000000);

//to-pwd "session timeout"
