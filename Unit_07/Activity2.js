function myFunction() {
  var billValue = document.getElementById("myInputBox").value;
  var pct = billValue / 100;
  var tip = pct * 5;
  console.log("Tip : £" + tip);
  Due.innerHTML = ("Tip to give: £" + tip);
}

function tenPct() {
  var billValue = document.getElementById("myInputBox").value;
  var pct = billValue / 100;
  var tip = pct * 10;
  console.log("Tip : £" + tip);
  Due.innerHTML = ("Tip to give: £" + tip);
}
function tfivePct() {
  var billValue = document.getElementById("myInputBox").value;
  var pct = billValue / 100;
  var tip = pct * 25;
  console.log("Tip : £" + tip);
  Due.innerHTML = ("Tip to give: £" + tip);
}
