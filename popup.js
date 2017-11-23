$(function(){
  chrome.storage.sync.get('total', function(budget){
    if (budget.total) {
      $('#total').text(budget.total);
    }
  });

  $('#spendForm').submit(function(e){
    e.preventDefault();
  });

  $('#amount').focus();

  $('#spendAmount').click(function(){
    chrome.storage.sync.get('total', function(budget){
      var newTotal = 0;
      if (budget.total){
        newTotal += parseInt(budget.total);
      }

      let amount = $('#amount').val();
      if (amount && !isNaN(amount)){
        newTotal += parseInt(amount);
      }

      chrome.storage.sync.set({'total': newTotal});

      $('#total').text(newTotal);
      $('#amount').val('');
    })
  })
})