let clownwidth = 0;
let clownheight = 0;

function car() {
    if (clownheight < 100){
        let img = document.createElement("img");
        img.src = "clown.gif";

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