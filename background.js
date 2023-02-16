chrome.browserAction.onClicked.addListener(function(tab) { 
    var u=prompt("What is your username?")
    // var p=prompt("What is your password?")
    if(u!=null){
        chrome.storage.local.set({'u': u}, function() {
            console.log('username set');
        });
    }
    if(p!=null){
        chrome.storage.local.set({'p': u}, function() {
            console.log('password (same as username) set');
        });
    }
});


