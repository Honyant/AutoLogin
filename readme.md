![autologin icon](icon128.png)
# AutoLogin 
This extension is a simple extension for students at St. Mark's School of Texas for automatically logging in to their online learning management system. This was created because the system logs users out after a short time. 

# Usage
1. Clone this repo or download and unzip it
2. Go to chrome://extensions or whatever the equivalent page is for your browser.
3. Turn on developer mode in your extensions page
4. Click "Load unpacked" and select the AutoLogin folder
5. Enter your credentials when prompted and click on the extension icon to change your credentials.
### Notes
- v0.2 Now automatically responds to "session timeout" and link matching is more robust
- If you want the more secure version of this extension (not storing plaintext passwords in local storage and simply relying on browser autofill, switch the names of the files manifest and manifest2)