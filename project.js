function displayResult() {
  var curr = document.getElementById("c-sal").value;
  var off = document.getElementById("off-sal").value;
  var bdgt = document.getElementById("bud-get").value;
  if((curr) || (off) || (bdgt)){
    document.getElementsByClassName("hike_amt")[0].innerHTML = "The hike (in value) is ₹" + parseFloat(off - curr);
    document.getElementsByClassName("hike_per")[0].innerHTML = "The hike percentage is " + (parseFloat((off - curr) / curr) * 100).toFixed(2) + "%";
    document.getElementsByClassName("savings_amt")[0].innerHTML = "The savings (in value) is ₹" + parseFloat(bdgt - off);
    document.getElementsByClassName("savings_per")[0].innerHTML = "The savings percentage is " + (parseFloat((bdgt - off)/bdgt) * 100).toFixed(2) + "%";
  }else{
    alert("Please enter in one of the fields!");
  }
}
