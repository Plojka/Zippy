//newsletter-signup
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Try again");
      return false;
    }
  }

  //map
  function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

    function myFunction() {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }