function BookNow(guestName,guestRoom,guestPhone,guestCheckIn,guestCheckOut,guestPax,guestRemarks) {
    let url = 'https://api.sheety.co/97e31ebef0e4d68d720f86ea8888f32e/bookingApp/bookings';
    let body = {
      booking: {
        name:guestName,
        room:guestRoom,
        phone:guestPhone,
        cin:guestCheckIn,
        cout:guestCheckOut,
        pax:guestPax,
        remarks:guestRemarks
      }
    }
    
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
      "Content-Type" : "application/json"
      }
    })
    .then((response) => response.json())
    .then(json => {
      // Do something with object
      console.log(json.booking);
      alert(json.booking.name + " successfuly added!");
    });
  }

window.addEventListener("load",function(cin) {
  cin.preventDefault();
    document.getElementById("bookNow").addEventListener("click",function() {
        let name = document.getElementById("guestName").value;
        let room = document.getElementById("guestRoom").value;
        let phone = document.getElementById("guestPhone").value;
        let cin = document.getElementById("guestCheckIn").value;
        let cout = document.getElementById("guestCheckOut").value;
        let pax = document.getElementById("guestPax").value;
        let remarks = document.getElementById("guestRemarks").value;

        BookNow(name,room,phone,cin,cout,pax,remarks);
    });
  });