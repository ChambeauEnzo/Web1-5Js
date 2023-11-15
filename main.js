var MavariableString = 'toto';

var MavariableNumerique = 100;

var MavariableTabeau = ['Apple', 'Banana'];

var MavariableObjet = window

alert(MavariableString + MavariableNumerique + MavariableTabeau[0]+
    MavariableObjet.location.pathname);

var MavariableTailleFenetre = window.innerWidth;

window.addEventListener('resize', () => {
  
alert((MavariableTailleFenetre = window.innerWidth));

});

