const btnE = document.getElementById("btn");

// Function for getting random images

function myFunction() {
    document.getElementById('img').style.display = "block"
    document.getElementById('img').src = 'https://source.unsplash.com/random/?Cutecat/>';
}

function refreshPage() {
    window.location.reload();
}

//function for darkmode

function darkmode() {

    //old code for dark mode

    // document.getElementById('dark').className = "darkmode";
    // document.getElementById('container').className = "containerdark";


    // new code for dark mode with toggle feature
    const elements = document.getElementById('dark');
    if (elements.className == "body"){
        elements.className = "darkmode"
        document.getElementById('container').className = "containerdark"
    }
    else{
        elements.className = "body"
        document.getElementById('container').className = "container"
    }
}
