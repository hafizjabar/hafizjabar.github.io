function getRandomUser() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
        var elFirstName = document.getElementById("firstName");
        var elLastName = document.getElementById("lastName");
        var elJsonResult = document.getElementById("jsonResult");
        var elUserImage = document.getElementById("userImage");
        var elPhone = document.getElementById("phone");
        var elAddress = document.getElementById("address");
        var elEmail = document.getElementById("email");
        
        elFirstName.innerHTML = data.results[0].name.first;
        elLastName.innerHTML = data.results[0].name.last;
        elJsonResult.innerHTML = this.response;
        elUserImage.src = data.results[0].picture.large;
        elUserImage.title = data.results[0].name.first + " " + data.results[0].name.last;
        elPhone.innerHTML = data.results[0].phone;
        elAddress.innerHTML = data.results[0].location.street.number + " " + data.results[0].location.street.nmae + ", " + data.results[0].location.city + ", " + data.results[0].location.postcode + ", " + data.results[0].location.state + ", " + data.results[0].location.country;
        elEmail.innerHTML = data.results[0].email;
      }
    }
    
    xhttp.open("GET","https://randomuser.me/api/",true);
    xhttp.send();
  }
  
  var elGetRandomUser = document.getElementById("getRandomUserBtn");
  elGetRandomUser.addEventListener("click",function() {
    getRandomUser();
  });