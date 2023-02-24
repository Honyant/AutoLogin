![autologin icon](icon128.png)

# AutoLogin

This extension is a simple extension for students at St. Mark's School of Texas to automatically log users in to their online learning management system. This was created because the system logs users out after a short time.

# Usage

Make sure that you have logged in to the system manually at least once in the past before using this extension

![Screenshot2021-04-13](https://user-images.githubusercontent.com/32027606/114570186-3ddf9b00-9c3b-11eb-93ff-45b0e170a913.png)

1. Clone this repo: `git clone https://github.com/Honyant/AutoLogin.git`, or download and unzip this repository as shown above
2. Go to chrome://extensions or whatever the equivalent page is for your browser (This extension only works on chromium-based browsers)
3. Turn on developer mode on your extensions page
4. Click "Load unpacked" and select the AutoLogin folder
5. Make sure the extension is turned on
6. Enter your email when prompted and click on the extension icon to change your email

### Notes

- v0.4 Updated UI and removed obsolete code. Upgraded to manifest v3
- v0.3 Updated to work with the new login system. Added a loading screen to hide the useless content behind the loading screen. Also automatically changes to week view on the Assignment Center.
- v0.2 Now automatically responds to "session timeout" and link matching is more robust