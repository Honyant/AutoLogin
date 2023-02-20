// Legacy Loader
// function coverScreen() {
//   var div = document.createElement("div");
//   div.classList.add('loadingScreen');
//   div.innerHTML = "Loading...";
//   document.body.appendChild(div);
// }

function coverScreen() {
  var div = document.createElement("div");
  div.classList.add("loading");
  div.innerHTML = `<svg width="300px" height="200px" viewBox="0 0 187.3 93.7" preserveAspectRatio="xMidYMid meet">
  <path id="infinity-outline" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" 
        d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1        c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
  <path id="infinity-bg" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" 
        d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1        c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
  </svg>`;
  document.body.appendChild(div);
}

window.addEventListener("hashchange", function () {
  if (
    window.location.href.includes(
      "https://smtexas.myschoolapp.com/app/student#login"
    )
  ) {
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
  window.location.href.includes(
    "https://app.blackbaud.com/signin/?sessionClear=true"
  ) || //doesn't quite work)
  window.location.href.includes(
    "https://app.blackbaud.com/signin/?svcid=edu"
  ) ||
  window.location.href.includes("https://app.blackbaud.com/signin/?redirecturl")
) {
  coverScreen();
  window.location.href =
    "https://smtexas.myschoolapp.com/app/student#studentmyday/assignment-center";
  //wait 4 seconds, then go to https://smtexas.myschoolapp.com/app/student#login
  setTimeout(() => {
    window.location.href = "https://smtexas.myschoolapp.com/app/student#login";
  }, 4000);
}

function waitForElementToDisplay(
  selector,
  callback,
  checkFrequencyInMs,
  timeoutInMs
) {
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

          // p = prompt("(First time setup) What is your username?");
          chrome.storage.local.set({ p: u });
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

        // p = prompt("(First time setup) What is your username?");
        chrome.storage.local.set({ p: u });
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
  if (
    window.location.hash === "#studentmyday/assignment-center" &&
    prevHash !== "#studentmyday/assignment-center"
  ) {
    clickOnThing("week-view").then(() =>
      clickOnThing("status2").then(
        clickOnThingClass(
          "btn btn-sm btn-default pull-right assignment-calendar-view"
        )
      )
    );
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
