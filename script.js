function openProfile() {
    document.getElementById("popup").style.display = "flex";
}

function closeProfile() {
    document.getElementById("popup").style.display = "none";
}

window.onclick = function(event) {

    let popup = document.getElementById("popup");

    if (event.target === popup) {
        popup.style.display = "none";
    }
}