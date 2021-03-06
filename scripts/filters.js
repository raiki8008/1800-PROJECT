//======================//
// Global Variables     //
//======================//
var favorite = [];
var poolCheck = document.getElementById("pool");
var femaleOnlyCheck = document.getElementById("Female-Only");
var freeParkingCheck = document.getElementById("Free_parking");
var hoursCheck = document.getElementById("24/7");
var trainersCheck = document.getElementById("Trainers");
var multipleLocationCheck = document.getElementById("Multiple_locations");

//======================//
// Functions            //
//======================//

/** Saves selected filters to local storeage. */
function addFilterList() {
    localStorage.setItem("filterList", JSON.stringify(favorite));
}

/** Checks if hasPool filter has been selected */
function checkPool() {
    if (poolCheck.checked && !favorite.includes('Pool')) {
        favorite.push(poolCheck.value);
    } else {
        for (let i = 0; i < favorite.length; i++) {
            if (favorite[i] == poolCheck.value) {
                favorite.splice(i, 1);
            }
        }
    }
}

/** Checks if female-only filter has been selected */
function checkFemaleOnly() {
    if (femaleOnlyCheck.checked && !favorite.includes('Female-Only')) {
        favorite.push(femaleOnlyCheck.value);
    } else {
        for (let i = 0; i < favorite.length; i++) {
            if (favorite[i] == femaleOnlyCheck.value) {
                favorite.splice(i, 1);
            }
        }
    }
}

/** Checks if free-parking filter has been selected */
function checkFreeParking() {
    if (freeParkingCheck.checked && !favorite.includes('Free parking')) {
        favorite.push(freeParkingCheck.value);
    } else {
        for (let i = 0; i < favorite.length; i++) {
            if (favorite[i] == freeParkingCheck.value) {
                favorite.splice(i, 1);
            }
        }
    }
}

/** Checks if 24-hours filter has been selected */
function checkHours() {
    if (hoursCheck.checked && !favorite.includes('24/7')) {
        favorite.push(hoursCheck.value);
    } else {
        for (let i = 0; i < favorite.length; i++) {
            if (favorite[i] == hoursCheck.value) {
                favorite.splice(i, 1);
            }
        }
    }
}

/** Checks if hasTrainers filter has been selected */
function checkTrainers() {
    if (trainersCheck.checked && !favorite.includes('Trainers')) {
        favorite.push(trainersCheck.value);
    } else {
        for (let i = 0; i < favorite.length; i++) {
            if (favorite[i] == trainersCheck.value) {
                favorite.splice(i, 1);
            }
        }
    }
}

/** Checks if multiple-locations filter has been selected */
function checkMultipleLocations() {
    if (multipleLocationCheck.checked && !favorite.includes('Multiple locations')) {
        favorite.push(multipleLocationCheck.value);;
    } else {
        for (let i = 0; i < favorite.length; i++) {
            if (favorite[i] == multipleLocationCheck.value) {
                favorite.splice(i, 1);
            }
        }
    }
}

// Updates the nav bar to reflect correct options for a signed in user
function updateNavBar() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        let profile = document.getElementById("profile");
        profile.innerHTML = "Profile";
        profile.href = "profile.html";
      
        let logOut = document.getElementById("logout");
        logOut.innerHTML = "Log Out";
        logOut.href = "login.html";
        document.getElementById("index_link").onclick = function() {
          document.location.href = "main.html";
        } 
        console.log("Read all lines.");
      } else {
        document.getElementById("index_link").onclick = function() {
          document.location.href = "index.html";
        };
      }
    });
  }

//======================//
// Main                 //
//======================//
updateNavBar();
