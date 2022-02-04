var sorular=[{
    Soru: "Sinekli Bakkal Romanının Yazarı Aşağıdakilerden Hangisidir?",
    Cevap1: "Reşat Nuri Güntekin",
    Cevap2: "Halide Edip Adıvar",
    Cevap3: "Ömer Seyfettin",
    dCevap:"b"

},
{
    Soru: "Aşağıda Verilen İlk Çağ Uygarlıklarından Hangisi Yazıyı İcat Etmiştir?",
    Cevap1: "Hititler ",
    Cevap2: "Sümerler ",
    Cevap3: "Elamlar ",
    dCevap:"b"

},
{
    Soru:"Mustafa Kemal Atatürk’ün Nüfusa Kayıtlı Olduğu İl Hangisidir?",
    Cevap1: "Gaziantep",
    Cevap2: "İstanbul ",
    Cevap3: "Şanlıurfa",
    dCevap:"a"

}];
var Cevaplar=document.getElementsByClassName('cevap');
const SoruText=document.getElementById("txtSoru");
const CevapA=document.getElementById("lblCevap1");
const CevapB=document.getElementById("lblCevap2");
const CevapC=document.getElementById("lblCevap3");
var SoruSayisi=0;
var skor=0;

function Cevapla(){
    if(SecilenCevapId()==sorular[SoruSayisi].dCevap){
        skor=skor+1;
        SoruSayisi=SoruSayisi+1;
        SoruYaz();
        CevabiSil();
    }else{
        alert("Yanlış Cevap Skorunuz:"+skor);
        CevabiSil();
        SoruSayisi=0;
        SoruYaz();
    }
}
function SecilenCevapId(){
    for (const secilenCevap of Cevaplar) {
        if (secilenCevap.checked) {
            return secilenCevap.id;
        }
    }
}
function SoruYaz(){
    if(SoruSayisi<sorular.length){
        SoruText.innerText=sorular[SoruSayisi].Soru;
        CevapA.innerText=sorular[SoruSayisi].Cevap1;
        CevapB.innerText=sorular[SoruSayisi].Cevap2;
        CevapC.innerText=sorular[SoruSayisi].Cevap3;
    }else{
        alert("Sorular Bitti Skorunuz:"+skor);
        SoruSayisi=0;
        SoruYaz();
    }
}
function CevabiSil(){
    for (const secilenCevap of Cevaplar) {
        secilenCevap.checked=false
        
    }
}
window.onload = function () {

    SoruYaz();
        
};