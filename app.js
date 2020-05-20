let totalAmount = document.getElementById('totalAmount');
let each = document.getElementById('each');
totalAmount.style.display = 'none';
each.style.display = 'none';
let totalTip = document.getElementById('totalTip');
totalTip.style.display = 'none';
// (billAmt * serviceQual) / numOfPeople

function showTip () {
  let billAmt = document.getElementById('billamt').value;
  let serviceAmt = document.getElementById('serviceQual').value;
  let peopleAmt = document.getElementById('peopleamt').value;
  
  if (peopleAmt <= 1) {
    alert('Please fill in the form');
    peopleAmt = 1;
    each.style.display = 'none';
    return;
  } else {
    each.style.display = 'inline-block';
  };

  let calculateTip = (billAmt * serviceAmt) / peopleAmt;
  calculateTip = Math.round(calculateTip * 100) / 100;
  calculateTip.toFixed(2);
  totalAmount.innerHTML = calculateTip;


  totalAmount.style.display = 'inline-block';
  each.style.display = 'inline-block';
  totalTip.style.display = 'inline-block'
};

let calBtn = document.getElementById('calculate');
calBtn.addEventListener('click', showTip);