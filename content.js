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


//to-pwd "session timeout"
