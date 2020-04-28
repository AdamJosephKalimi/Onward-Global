// Open the navigation buttons on mobile
function openNav() {
    document.getElementById("open").style.display = "none";
    document.getElementById("navbar-mobile").style.width = "100%";
}

// Close the navigation buttons on mobile
function closeNav() {
    document.getElementById("navbar-mobile").style.width = "0";
    document.getElementById("open").style.display = "block";
}