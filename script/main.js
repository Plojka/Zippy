//newsletter-signup
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Try again");
      return false;
    }
  }