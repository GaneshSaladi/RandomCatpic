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
    document.getElementById('dark').className = "darkmode";
    document.getElementById('container').className = "containerdark";
}
