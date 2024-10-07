document.getElementById('alertButton').addEventListener('click', function () {
    alert('¡Hola! Has hecho clic en el botón.');
});

function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}