$(function(){
  chrome.storage.sync.get(['total', 'limit'], function(budget){
    if (budget.total) {
      $('#total').text(budget.total);
    }
    if (budget.limit) {
      $('#limit').text(budget.limit);
    }
  });

  $('#spendForm').submit(function(e){
    e.preventDefault();
  });

  $('#amount').focus();

  $('#spendAmount').click(function(){
    chrome.storage.sync.get(['total', 'limit'], function(budget){
      var newTotal = 0;
      if (budget.total){
        newTotal += parseInt(budget.total);
      }

      const amount = $('#amount').val();
      if (amount && parseInt(newTotal) + parseInt(amount) < budget.limit){
        newTotal += parseInt(amount);
        chrome.storage.sync.set({'total': newTotal});
      } else if (amount) {
        const notificationOptions = {
          type: 'basic',
          iconUrl: 'icon48.png',
          title: 'Limit reached!',
          message: "Uh oh! Looks like you've reached your limit!"
        };
        chrome.notifications.create('limitNotif', notificationOptions);
        setTimeout(chrome.notifications.clear('limitNotif'), 1000);
      }


      $('#total').text(newTotal);
      $('#amount').val('');
      $('#amount').focus();
    })
  })
})
