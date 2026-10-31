const tlacitkostart = document.getElementById("start");
tlacitkostart.addEventListener("click", function(){
    uvod.hidden=true;
    hra.hidden=false;
});

const uvod = document.getElementById("uvod");
const hra = document.getElementById("hra");

const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const jistota = document.getElementById("jistota");
let vybranaOdpoved = null;

A.addEventListener("click", function(){
   vybranaOdpoved="A";
   jistota.hidden=false;
});

B.addEventListener("click", function(){
    vybranaOdpoved="B";
    jistota.hidden=false;
});

C.addEventListener("click", function(){
    vybranaOdpoved="C";
    jistota.hidden=false;
});

let skore = 0;
let vyhodnoceno = false;
const skoreText= document.getElementById("skore");
const vysledek= document.getElementById("vysledek");
const jisty= document.getElementById("jisty");
const nejisty= document.getElementById("nejisty");
jisty.addEventListener("click", function(){
  if (vybranaOdpoved === null || vyhodnoceno) {
      return;
    }
    vyhodnoceno = true;
  if (vybranaOdpoved === "B") {
      skore += 3;
      vysledek.textContent = "Správně! Získáváš 3 body.";
  }else{
      skore -= 2;
      vysledek.textContent = "Chybná odpověď. Ztrácíš 2 body.";
  }
    skoreText.textContent = skore;
    jistota.hidden = true;
    A.disabled = true;
    B.disabled = true;
    C.disabled = true;

});
nejisty.addEventListener("click", function(){
    if (vybranaOdpoved === null || vyhodnoceno) {
        return;
    }
    vyhodnoceno = true;
    if (vybranaOdpoved === "B") {
        skore += 1;
        vysledek.textContent = "Správně! Získáváš 1 bod.";
    }else{
        vysledek.textContent = "Chybná odpověď. Žádné body nezískáváš ani neztrácíš.";
    }
    skoreText.textContent = skore;
    jistota.hidden = true;
    A.disabled = true;
    B.disabled = true;
    C.disabled = true;

});