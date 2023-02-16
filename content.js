function coverScreen() {
  var div = document.createElement("div");
  div.classList.add('loader');
  div.innerHTML = "Loading...";
  document.body.appendChild(div);
}
window.addEventListener("hashchange", function () {
  if (window.location.href.includes("https://smtexas.myschoolapp.com/app/student#login")) {
    coverScreen();
  }
});

window.addEventListener("unload", function () {
  if (window.location.href.includes("https://app.blackbaud.com/signin")) {
    coverScreen();
  }
});

if (window.location.href.includes("https://app.blackbaud.com/signin")) {
  coverScreen();
}

if (
  window.location.href.includes("https://app.blackbaud.com/signin/?sessionClear=true") || //doesn't quite work)
  window.location.href.includes("https://app.blackbaud.com/signin/?svcid=edu") ||
  window.location.href.includes("https://app.blackbaud.com/signin/?redirecturl")
) {
  coverScreen();
  window.location.href = "https://smtexas.myschoolapp.com/app/student#studentmyday/assignment-center";
  //wait 4 seconds, then go to https://smtexas.myschoolapp.com/app/student#login
  setTimeout(() => {
    window.location.href = "https://smtexas.myschoolapp.com/app/student#login";
  }, 4000);
}

function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    } else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs) return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}

waitForElementToDisplay(
  "#site-login-input",
  function () {
    setTimeout(() => {
      var u;
      var p;
      chrome.storage.local.get(["u", "p"], function (result) {
        u = result.u;
        p = result.p;
        if (u == "undefined" || u == undefined) {
          u = prompt("(First time setup) What is your username?");
          chrome.storage.local.set({ u: u });

          p = prompt("(First time setup) What is your username?");
          chrome.storage.local.set({ p: p });
        }
        setTimeout(() => {
          document.getElementById("Username").value = u;
          document.getElementById("nextBtn").click();
          setTimeout(() => {
            document.getElementById("Password").value = p;
            document.getElementById("loginBtn").click();
          }, 200);
        }, 100);
      });
    }, 500);
  },
  100,
  9000
);

waitForElementToDisplay(
  "#to-pwd",
  function () {
    chrome.storage.local.get(["u", "p"], function (result) {
      u = result.u;
      p = result.p;
      if (u == "undefined" || u == undefined) {
        u = prompt("(First time setup) What is your username?");
        chrome.storage.local.set({ u: u });

        p = prompt("(First time setup) What is your username?");
        chrome.storage.local.set({ p: p });
      }
      setTimeout(() => {
        document.getElementById("to-pwd").value = p;
        document.getElementById("to-signin").click();
      }, 100);
    });
  },
  5000,
  90000000000
);

function waitForThing(thing, callback) {
  const observer = new MutationObserver((mutations, obs) => {
    const hello = document.getElementById(thing);
    if (hello) {
      callback();
      obs.disconnect();
      return;
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true,
  });
}

async function clickOnThing(thing) {
  waitForThing(thing, () => {
    document.getElementById(thing).click();
  });
}


function clickOnThingClass(thing) {
  const observer = new MutationObserver((mutations, obs) => {
    const hello = document.getElementsByClassName(thing)[0];
    if (hello) {
      hello.click();
      obs.disconnect();
      return;
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true,
  });
}
let prevHash = "";

clickOnThing("btnConfirm");

function good_view() {
  if (window.location.hash === "#studentmyday/assignment-center" && prevHash !== "#studentmyday/assignment-center") {
    clickOnThing("week-view").then(() => clickOnThing("status2").then(clickOnThingClass("btn btn-sm btn-default pull-right assignment-calendar-view")));
    
  } else if (window.location.hash === "#studentmyday/progress") {
    waitForThing("coursesContainer", () => {
      document.getElementById("coursesContainer").remove();
    });
  }
}

window.addEventListener("hashchange", function () {
  good_view();
  prevHash = window.location.hash;
});

good_view();
