
function simpleCount() {
    var currTime = 10;
    /*  for (initial condition, ending condition - stop when not true, what to after each loop) i++ same as  i = i+1*/
    for (var i = 1; i < 12; i++) {

        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
            currTime = currTime - 1;
        }, 1000 * i);
    }
}
function simpleDo() {
    var currTime = 10;
    var i = 1;
    do {

        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
            currTime = currTime - 1;
        }, 1000 * i);
        i += 1;
    } while (i < 12);
}

function betterCountdown() {
    var currTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than half way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}
function whileCount() {
    var currTime = 10;
    var i = 1;
    while (i < 12) {


        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than half way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }
}

function checkCreds() {
    var eventName = document.getElementById("firstName").value;
    var theme = document.getElementById("lastName").value;
    var peopleCount = document.getElementById("BadgeNumber").value;
    var eventInfo = eventName + " " + theme;
    if (eventInfo.length >20 || eventInfo.length <4) {
    // if (eventInfo.length > 40 || eventInfo.length < 2) 
    document.getElementById("loginStatus").innerHTML = "EventName has invalid number of characters!";
    alert("Invalid characters");
}
    else if (peopleCount > 19999 || peopleCount < 1) {
   document.getElementById("loginStatus").innerHTML = "Number of participants is  an invalid number!";
    alert("Invalid Numbers");
    }
    else {
        alert("Access Granted, Welcome " + eventInfo + "!");
        location.replace("tables.html");
        //take to a new page//
    }
}
