#AutoLogin
This extension is a simple extension for students at St. Mark's School of Texas for automatically logging in to their online learning management system. This was created because the system logs users out after a short time. 

I originally implemented for this plugin to automatically input username and password into the login page, but decided against it because security concerns about storing credentials in plaintext. (The code for that is still in the extension, just not executed. If you want to try this out, switch the names of manifest and manifest2) Thus, this extention simply presses the buttons to log in and assumes the brower will autofill the login forms.
#Usage
###Note: You will have to have autofill enabled for the login page in order for the extension to work
1. Clone this repo or download and unzip it
2. Go to chrome://extensions or whatever the equivalent page is for your browser.
3. Click "Load unpacked" and select this extension