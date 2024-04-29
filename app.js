
//  var clevertap = {event:[], profile:[], account:[], onUserLogin:[], region:'in1', notifications:[], privacy:[]};
//  // replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
// clevertap.account.push({"id": "Z44-Z4K-K65Z"});
// clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
// clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data
// clevertap.notificationCallback = function () {
//       alert('Custom notification callback called')
//  };
//  (function () {
//          var wzrk = document.createElement('script');
//          wzrk.type = 'text/javascript';
//          wzrk.async = true;
//          wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js';
//         var s = document.getElementsByTagName('script')[0];
//          s.parentNode.insertBefore(wzrk, s);
//   })();


function login() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = new Date(document.getElementById("dob").value);

    if (name && email && phone && dob) {
        var defaultCountryCode = '+1';
        
        // Format the phone number with default country code
        phone = defaultCountryCode + phone;
        
        clevertap.onUserLogin.push({
            "Site": {
                "Name": name,
                "Email": email,
                "Phone": phone,
                "DOB": dob
            }
        });
        showMessage("Login successful!");
    } else {
        showMessage("Please fill in all the fields.");
    }
}

function profilePush() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = new Date(document.getElementById("dob").value);

    if (name && email && phone && dob) {
        var defaultCountryCode = '+91';
        
        // Format the phone number with default country code
        phone = defaultCountryCode + phone;
        
        clevertap.profile.push({
            "Site": {
                "Name": name,
                "Email": email,
                "Phone": phone,
                "DOB": dob
            }
        });
        showMessage("Profile push successful!");
    } else {
        showMessage("Please fill in all the fields.");
    }
}

function viewProduct() {
    clevertap.event.push("Product viewed", {
        "Product name": "Casio Chronograph Watch",
        "Category": "Mens Accessories",
        "Price": 59.99,
        "Date": new Date()
    });
    showMessage("Product viewed event raised!");
}

function askForPush() {
    clevertap.notifications.push({
        "titleText": 'Would you like to receive Push Notifications?',
        "bodyText": 'We promise to only send you relevant content and give you updates on your transactions',
        "okButtonText": 'Sign me up!',
        "rejectButtonText": 'No thanks',
        "askAgainTimeInSeconds": 5,
        "okButtonColor": '#f28046'
    });
    showMessage("Push notification prompt displayed!");
}

function raiseEvent() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = new Date(document.getElementById("dob").value);

    if (name && email && phone && dob) {
        clevertap.event.push("RegistrationEvent", {
            "Name": name,
            "Email": email,
            "Phone": phone,
            "DOB": dob,
            "RegistrationDateTime": new Date(),
            "Score": 85.6,
            "Level": 3
        });
        showMessage("Registration event raised!");
    } else {
        showMessage("Please fill in all the fields.");
    }
}

function chargedEvent() {
    const uniqueChargedId = `${Date.now()}_${Math.floor(Math.random() * 1000000)}`;
    const items = [
      {
        "id": "item1",
        "count": 1,
        "title": "The Millionaire next door",
        "category": "Books"
      },
      {
        "id": "item2",
        "count": 1,
        "title": "Achieving inner zen",
        "category": "Books"
      },
      {
        "id": "item3",
        "count": 5,
        "title": "Chuck it, let's do it",
        "category": "Books"
      }
    ];
  
    clevertap.event.push("Charged", {
      "Amount": 300,
      "Payment Mode": "Credit Card",
      "Charged ID": uniqueChargedId,
      "Items": items
    });
  
    showMessage("Charged event raised!");
  }


function showMessage(message) {
    var messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    setTimeout(function () {
        messageDiv.textContent = "";
    }, 3000); // Clear the message after 3 seconds
}