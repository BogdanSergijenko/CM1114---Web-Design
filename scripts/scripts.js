//Assigns basic variable for car clowns
let clownwidth = 0;
let clownheight = 0;

function car() {
    //Checks if clown limit has been reached
    if (clownheight < 100){
        //Creates an elements and assigns it an image
        let img = document.createElement("img");
        img.src = "images/ClownCarClowns.gif";

        //Sets the CSS for the element
        img.setAttribute("class", "carclowns");
        img.style.left = clownwidth + "%";
        img.style.bottom = clownheight + "%";
        document.body.appendChild(img);

        //Alters the position of the next clown
        if (clownwidth < 90){
            clownwidth += 10;
        } else {
            clownwidth = 0;
            clownheight += 10;
        }
    }
}


//Plays a honk sound
function honk(){
    var x = document.getElementById("honksound");
    x.play();
}


//Updates text for contact us form
function send_form(id,text){
    document.getElementById(id).innerHTML=text;
}


//Variable for login function
logincounter = 0;

function login(){
    //Gets username and password from the login form
    var username = document.forms["login"]["username"].value;
    var password = document.forms["login"]["password"].value;

    //Validates if the username and password are entered
    if (username == "") {
        alert( "Must enter username!");
    } else {
        if (password.length == 0) {
            alert("Must enter password");
        } else {
            logincounter++;

            //Sends and alternating message if validation successful
            if (logincounter%2 == 1){
                alert("You have been logged in!");
            } else {
                alert("You have been logged out!");
            }
        }
    }
}


//Unblurs and gives a border to an image
function highlight(image) {
    image.style="border: solid blue 2px; filter: none;";
}

//Resets the border of an image
function delight(image) {
    image.style="border: none;";
}


function submit_event() {
    //Gets username and password from the event form
    var title = document.forms["eventForm"]["event_title"].value;
    var date = document.forms["eventForm"]["event_date"].value;

    //Validates if title and date have been entered
    if (title == "") {
        alert( "An event must have a title!");
    } else {
        if (date.length == 0) {
            alert("An event must have a date!");
        } else {
            alert("Event submitted! The society will contact you soon!");
        }
    }
}   
