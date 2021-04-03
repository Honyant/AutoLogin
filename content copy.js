// content.js
window.addEventListener('load', (event) => {//change to mutationobserver

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
      }, 200); 
    }, 2500);
  });
});

//to-pwd "session timeout"
