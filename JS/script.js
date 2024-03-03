document.addEventListener("DOMContentLoaded", function() {
  // Adăugăm întrebarea și butoanele pentru prima întrebare
  document.getElementById("rezultat").innerHTML = '<div class="intrebare">Esti Gay?</div><button class="raspuns" id="da">Da</button><button class="raspuns" id="nu">Nu</button>';
  document.getElementById("rezultat").style.display = "block";
});

document.getElementById("rezultat").addEventListener("click", function(event) {
  if (event.target.id === "da") {
    // Actualizăm rezultatul cu mesajul "Eu tot" și butonul "Okey" după răspunsul "Da"
    document.getElementById("rezultat").innerHTML = '<div class="rezultat-text">Eu tot</div><button class="raspuns" id="okey">Okey</button>';
  } else if (event.target.id === "okey") {
    // Afisam întrebarea a doua și butoanele după ce s-a apăsat butonul "Okey"
    document.getElementById("rezultat").innerHTML = '<div class="intrebare">Ne întâlnim?</div><button class="raspuns" id="da2">Da</button><button class="raspuns" id="nu2">Nu</button>';
  } else if (event.target.id === "da2") {
    // Actualizăm rezultatul după răspunsul "Da" pentru a doua întrebare
    document.getElementById("rezultat").innerHTML = "Scrie-mi în privat ;3 <br> Blackblade4you2";
  } else if (event.target.id === "nu2") {
    // Actualizăm rezultatul după răspunsul "Nu" pentru a doua întrebare
    document.getElementById("rezultat").innerHTML = "Du-te de aici. >-<";
  } else if (event.target.id === "nu") {
    // Generăm o poziție aleatoare pentru butonul "Nu" de la prima întrebare
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    document.getElementById("nu").style.position = "absolute";
    document.getElementById("nu").style.left = randomX + "px";
    document.getElementById("nu").style.top = randomY + "px";
  }
});
