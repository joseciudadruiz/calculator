function calculateTip() {
  var bills = document.getElementById("billAmt").value;
  var services = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleAmt").value;

  if(bills === "" || services == 0) {
    alert("Please enter valid values");
    return;
  }
  if(numOfPeople === "" || numOfPeople <=1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  var total = (bills * services) / numOfPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2)
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
  calculateTip();
};
