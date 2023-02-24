// onsubmit function/save form values in storage
const saveSettings = () => {
  const email = document.getElementById("email").value;
  const darkMode = document.getElementById("dark-mode").checked;
  if (email != null) {
    chrome.storage.sync.set({ email, darkMode }, () => {
      console.log("Settings saved");
    });
  }
};

form = document.getElementById("settings-form");
form.addEventListener("submit", saveSettings);

chrome.storage.sync.get(["email", "darkMode"], (result) => {
  if (email != null) document.getElementById("email").value = result.email;
  document.getElementById("dark-mode").checked = result.darkMode;
});
