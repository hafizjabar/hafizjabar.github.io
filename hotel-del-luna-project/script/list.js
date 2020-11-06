window.addEventListener("load", function () {
    GetBookings();
});

function GetBookings() {
    let url = 'https://api.sheety.co/97e31ebef0e4d68d720f86ea8888f32e/bookingApp/bookings';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      //console.log(json.bookings);
      var bookings = document.getElementById("booking-list");
      var bookingIds = [];
      //bookings.innerHTML = "";

      for(var i =0; i < json.bookings.length; i++) {
        var gName = json.bookings[i].name;
        var gRoom = json.bookings[i].room;
        var gPhone = json.bookings[i].phone;
        var gCin = json.bookings[i].cin;
        var gCout = json.bookings[i].cout;
        var gPax = json.bookings[i].pax;
        var gId = json.bookings[i].id;
        var gRemarks = json.bookings[i].remarks;
        var buttonId = "delete" + gId;
        
        let row = bookings.insertRow(bookings.rows.length);
        row.insertCell(0).innerHTML = gId;
        row.insertCell(1).innerHTML = gName;
        row.insertCell(2).innerHTML = gRoom;
        row.insertCell(3).innerHTML = gPhone;
        row.insertCell(4).innerHTML = gCin;
        row.insertCell(5).innerHTML = gCout;
        row.insertCell(6).innerHTML = gPax;
        row.insertCell(7).innerHTML = gRemarks; //Remarks
        row.insertCell(8).innerHTML = "<button id = '" + buttonId +"' class= 'btn btn-danger'>Delete</button><br />"
        
        bookingIds.push(buttonId)
      }
      
      for (let j = 0; j < bookingIds.length; j++) {
        //console.log(bookingIds[j]);    
        let el = document.getElementById(bookingIds[j]);
        el.addEventListener("click",function() {
          let theId = bookingIds[j].replace("delete","");
          DeleteBooking(theId);
        } );
      }
    });
    }

    function DeleteBooking(id) {

      if(confirm("Are you sure you want to delete?")) {
        let url = 'https://api.sheety.co/97e31ebef0e4d68d720f86ea8888f32e/bookingApp/bookings/' + id;
          fetch(url, {
            method: 'DELETE',
          })
          .then((response) => {
            location.reload();
          });
      } else {
        alert("Delete cancelled")
      }
    }