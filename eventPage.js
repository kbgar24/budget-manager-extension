 const contextMenuItem = {
   "id": "spendMoney",
   "title": "SpendMoney",
   "contexts": ["selection"]
 };

 chrome.contextMenus.create(contextMenuItem);

 chrome.contextMenus.onClicked.addListener((clickedData) => {
   if (clickedData.menuItemId === 'spendMoney' && clickedData.selectionText) {
     if (Number.isInteger(parseInt(clickedData.selectionText))){
       chrome.storage.sync.get(['total', 'limit'], (budget) => {
         let newTotal = 0;
         if (budget.total) {
           newTotal += parseInt(budget.total);
         }

         if (newTotal + parseInt(clickedData.selectionText) < budget.limit){
           newTotal += parseInt(clickedData.selectionText);
           chrome.storage.sync.set({'total': newTotal});
         } else if (clickedData.selectionText) {
           const notificationOptions = {
             type: 'basic',
             iconUrl: 'icon48.png',
             title: 'Limit reached!',
             message: "Uh oh! Looks like you've reached your limit!"
           };
           chrome.notifications.create('limitNotif', notificationOptions);
           setTimeout(chrome.notifications.clear('limitNotif'), 1000);
         }

       });
     }
   }
 });

// Adds badge that updates when total updates
 chrome.storage.onChanged.addListener((changes, storageName) => {
   chrome.browserAction.setBadgeText({"text": changes.total.newValue.toString()});
 })
