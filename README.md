# Budget Manager Chrome Extension

### Overview
A basic Chrome Extension (CE) that allows users to track their online spending.

### Details
1. Users can use the CE popup to add spending amounts to their current **Total**, up until the preset **Limit** is reached.
2. Adjusting the **Limit** and updating the **Total** can be updated by navigating to the CE's Option's Page.
3. Selecting and right-clicking on an integer value on a webpage will result in the Chrome Context Menu opening. From here, clicking on the 'Budget Manager' title will result in the selected value being added to the current **Total**.
4. The **Total** and **Limit** values persist through Google Chrome's *chrome.storage.sync* API
5. If additional spending would reach or exceed the **Limit**, a Chrome Notification is sent to the User to alert them of having reached their **Limit**.

### Lessons Learned
1. Difference between event pages, background pages and popup.js files
2. How to create Chrome Context Menus
3. How to send Chrome Notifications
4. How to persist data through Google Chrome's *chrome.storage.sync* API
5. How to create an Options Page for a CE

### Installation
1. Clone/download repository
2. Navigate to the Chrome Extensions page: chrome://extensions/
3. Check the 'Developer Mode' checkbox at the top of the screen
4. Select the "Load unpacked extension..." button
5. Select the folder containing the downloaded repository
6. Enjoy!
