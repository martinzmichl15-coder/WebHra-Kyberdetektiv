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
  if (vybranaOdpoved === aktualniPripad.spravnaOdpoved) {
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
    vysvetleni.textContent = aktualniPripad.vysvetleni;
    dalsi.hidden = false;
});
nejisty.addEventListener("click", function(){
    if (vybranaOdpoved === null || vyhodnoceno) {
        return;
    }
    vyhodnoceno = true;
    if (vybranaOdpoved === aktualniPripad.spravnaOdpoved) {
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
    vysvetleni.textContent = aktualniPripad.vysvetleni;
    dalsi.hidden = false;
});

const vysvetleni= document.getElementById("vysvetleni");
const dalsi = document.getElementById("dalsi")

dalsi.addEventListener("click", function(){
    if (!vyhodnoceno) {
        return;
    }
    if (aktualniIndex < pripady.length - 1) {
        aktualniIndex++;
        zobrazPripad();
    }else{
        dalsi.hidden = true;
        vysledek.textContent = "Všechny případy dokončeny.";
    }
});

const pripad1= {
    nazev: "Případ 1: Zablokovaný účet",
    popis: "Uživateli přišla SMS údajně od banky",
    dukaz: "Váš účet byl zablokován. Pro obnovení přístupu se přihlaste na banka-overeni.example.",
    A: "Otevřu odkaz a přihlásím se.",
    B: "Otevřu si samostatně oficiální aplikaci banky a ověřím situaci.",
    C: "Odpovím na SMS a požádám o další informace.",
    spravnaOdpoved: "B",
    vysvetleni: "Správná odpověď je B. Otevři si samostatně oficiální aplikaci banky a ověř situaci. Odkaz v SMS může vést na podvodnou stránku."
};

const pripad2= {
    nazev: "Případ 2: Balík za pár korun",
    popis: "Čekáš na doručení balíku. Přijde ti SMS údajně od dopravce, která požaduje doplatek za doručení.",
    dukaz: "Vaše zásilka byla pozastavena kvůli neuhrazenému poplatku. Pro doručení zaplaťte 29 Kč na doplatek-zasilky.example.",
    A: "Otevřu odkaz a zaplatím 29 Kč platební kartou.",
    B: "Přepošlu zprávu kamarádovi, aby poplatek zaplatil za mě.",
    C: "Otevřu si samostatně oficiální web dopravce a ověřím stav zásilky.",
    spravnaOdpoved: "C",
    vysvetleni: "Správná odpověď je C. Stav zásilky ověř na oficiálním webu nebo v aplikaci dopravce, které otevřeš nezávisle na SMS. Malá částka nezaručuje bezpečnost — podvodný web může zneužít údaje platební karty."
};

const pripady = [pripad1,pripad2];
let aktualniIndex = 0;
let aktualniPripad = pripady[aktualniIndex];


const nazevPripadu = document.getElementById("nazevPripadu");
const popisPripadu = document.getElementById("popisPripadu");
const dukaz = document.getElementById("dukaz");
//nazevPripadu.textContent = aktualniPripad.nazev;
//popisPripadu.textContent = aktualniPripad.popis;
//dukaz.textContent = aktualniPripad.dukaz;
//A.textContent = aktualniPripad.A;
//B.textContent = aktualniPripad.B;
//C.textContent = aktualniPripad.C;
function zobrazPripad() {
    aktualniPripad = pripady[aktualniIndex];
    nazevPripadu.textContent = aktualniPripad.nazev;
    popisPripadu.textContent = aktualniPripad.popis;
    dukaz.textContent = aktualniPripad.dukaz;
    A.textContent = aktualniPripad.A;
    B.textContent = aktualniPripad.B;
    C.textContent = aktualniPripad.C;
    vybranaOdpoved = null;
    vyhodnoceno = false;
    jistota.hidden = true;
    vysledek.textContent = "";
    vysvetleni.textContent = "";
    A.disabled = false;
    B.disabled = false;
    C.disabled = false;
    dalsi.hidden = true;
}

zobrazPripad();

