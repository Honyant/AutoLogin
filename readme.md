![autologin icon](icon128.png)
# AutoLogin 
This extension is a simple extension for students at St. Mark's School of Texas for automatically logging in to their online learning management system. This was created because the system logs users out after a short time. 

# Usage
![Screenshot2021-04-13](https://user-images.githubusercontent.com/32027606/114570186-3ddf9b00-9c3b-11eb-93ff-45b0e170a913.png)
1. Download and unzip this repository
2. Go to chrome://extensions or whatever the equivalent page is for your browser
3. Turn on developer mode in your extensions page
4. Click "Load unpacked" and select the AutoLogin folder
5. Make sure the extension is turned on
6. Enter your credentials when prompted and click on the extension icon to change your credentials
### Notes
- v0.2 Now automatically responds to "session timeout" and link matching is more robust
- If you want the more secure version of this extension (not storing plaintext passwords in local storage and simply relying on browser autofill, switch the names of the files `manifest` and `manifest2`)
