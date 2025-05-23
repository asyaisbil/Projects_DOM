// Challenge 1: dokümandaki tüm resimlerin üzerine mouse ile gelince(mouseenter) üzerine gelinen resme 
// class olarak grayscale eklensin. mouse çıkınca(mouseleave) grayscale classı çıkarılsın.

const imageItems = document.querySelectorAll('img');
imageItems.forEach((i) => {
  i.addEventListener('mouseenter', (event) => {
    event.target = event.target.classList.add('grayscale');
  });
  i.addEventListener('mouseleave', (event) => {
    event.target = event.target.classList.remove('grayscale');
  });
});

/*
Challenge 2: sayfa aktif iken(herhangi bir yerine mouse ile tıklayınca):
- klavyedeki 1 tuşuna basınca body'e theme1, 2'ye basınca theme2, 3'e basınca theme3 classlarını eklesin.
- "Esc" tuşuna basınca classı sıfırlasın
- Not: keyboard eventlerini document'e değil window'a ekleyin. 
*/


const body = document.querySelector("body");
window.addEventListener("keydown", (e) => {
    if(e.key === "1") {
        body.className = "theme1";
    } else if(e.key === "2") {
        body.className = "theme2";
    } else if(e.key === "3") {
        body.className = "theme3";
    } else if(e.key === "Escape") {
        body.className = "";
    }
})



/*
Challenge 3: Input alanına bir şeyler yazınca(input event):
- Büyük harfe dönüştürsün
- 5 karakter'den büyük olduğunda buttonı enabled etsin. küçük ise disabled etsin.
*/

const input = document.querySelector('input');
const button = document.querySelector('button');
input.addEventListener('input', (event) => {
  event.target.value = event.target.value.toUpperCase();

  if (event.target.value.length >= 5) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});




/*
Challenge 4: Form submit edildiğinde;
- input alanındaki metni alıp, id'si submitResult olan paragrafa metin olarak "{value} başarı ile kaydedildi..." yazsın.
- input alanını sıfırlasın.
- kaydet butonunu disabled yapsın.
*/


const form = document.querySelector("form");
const input2 = document.querySelector("input");
const buton = document.querySelector("button");
form.addEventListener("submit", (event) => {
    document.querySelector("#submitResult").textContent = `${input2.value} başarı ile kaydedildi...`;
    input2.value = "";
    buton.disabled = true;
})