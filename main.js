
function MavariableverifierTailleFenetre() {
    if (window.innerWidth < 300) {
        alert("La fenêtre est trop petite !");
    }
}

window.addEventListener('resize', MavariableverifierTailleFenetre);


