var obje = document.getElementById("objeId"); // "objeId" burada objenin ID'sini temsil eder

// Sayfa kaydırıldığında çalışacak olan bir olay dinleyici ekleyin
window.addEventListener("scroll", function() {
    // Sayfanın yüksekliği ve kaydırma miktarını alın
    var sayfaYuksekligi = document.documentElement.scrollHeight;
    var sayfaKaydirmaMiktari = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
            
    // Kaydırma yüzdesini hesaplayın
    var kaydirmaYuzdesi = (sayfaKaydirmaMiktari / (sayfaYuksekligi - window.innerHeight)) * 100;
            
    // Yüzde 50'yi aştığında objeyi görünür yapın, aksi halde gizleyin
    if (kaydirmaYuzdesi >= 20) {
        obje.style.opacity = "1.0";
        obje.style.pointerEvents = "auto";
    } else {
        obje.style.opacity = "0.0";
        obje.style.pointerEvents = "none";
    }
});

// Objeye tıklandığında sayfanın başına dönme işlemini gerçekleştirin
obje.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function kopyalaMetin() {
    var metinElementi = document.getElementById("metin");
    var metin = metinElementi.innerText;

    navigator.clipboard.writeText(metin)
      .then(function() {
        console.log("Metin kopyalandı: " + metin);
      })
      .catch(function(error) {
        console.error("Metin kopyalanamadı: ", error);
      });
  }