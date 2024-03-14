let clownwidth = 0;
let clownheight = 0;

function car() {
    if (clownheight < 100){
        let img = document.createElement("img");
        img.src = "images/ClownCarClowns.gif";

        img.setAttribute("class", "carclowns");
        img.style.left = clownwidth + "%";
        img.style.bottom = clownheight + "%";
        document.body.appendChild(img);

        if (clownwidth < 90){
            clownwidth += 10;
        } else {
            clownwidth = 0;
            clownheight += 10;
        }
    }
}

function honk(){
    var x = document.getElementById("honksound");
    x.play();
}

function send_form(id,text){
    document.getElementById(id).innerHTML=text;
}

logincounter = 0

function login(){
    logincounter++

    if (logincounter%2 == 1){
        alert("You have been logged in!")
    } else {
        alert("You have been logged out!")
    }
}

function highlight(image) {
    image.style="border: solid blue 2px; filter: none;"
}
function delight(image) {
    image.style="border: none;"
}

function unblur(image){
    image.style="filter: none;"
}