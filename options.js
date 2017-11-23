$(function(){
  $('#limit').focus();
  chrome.storage.sync.get('limit', (budget) => {
    if (budget.limit) {
      $('#limit').val(budget.limit);
    }
  });

  $('#resetTotal').click((e) => {
    chrome.storage.sync.set({'total': 0}, () => {
      const notificationOptions = {
          type: 'basic',
          iconUrl: 'icon48.png',
          title: 'Total reset!',
          message: "Total has been reset to 0!"
        };
        chrome.notifications.create('limitNotif', notificationOptions);
        setTimeout(chrome.notifications.clear('limitNotif'), 1000);
    });
  });

  $('#saveLimit').click((e) => {
    const limit = $('#limit').val();
    if (limit) {
      chrome.storage.sync.set({limit}, () => {
        alert(`Limit successfully updated to ${limit}!`)
        close();
      });
    }
  });

});
