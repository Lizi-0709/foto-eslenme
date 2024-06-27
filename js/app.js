let puanText = document.getElementById('puanText');
puan = 0;

puanText.innerHTML = "0"
const kartTemplate = `
    <div class="kart-cerceve">
        <div class="kart-onyuz">
            <img src="https://via.placeholder.com/100x100?text=?">
        </div>

        <div class="kart-arkayuz">
            <img src="">
        </div>
    </div>
`;
 let randomSon = []
    let randomArray = [];
let randomNum = function(){
  
    for (let i = 0; i < 8; i++){
       let randomNumbers = Math.floor(Math.random() * 99);
            randomArray.push( randomNumbers , randomNumbers);
     
        if (randomArray.length > 7) break;
    }  
    let sayi = randomSon.length
    for(i=0; i<8; i++){

  randomIndex= Math.floor(Math.random()* randomArray.length)
    const randomEleman =randomArray[randomIndex]
    randomSon.push(randomArray[randomIndex])
     randomArray.splice(randomIndex , 1)
}

    return randomArray
     
};
randomNum()
console.log(randomArray)
 console.log(randomSon)
/*
Görev 2: Bu numaraları 1-99 arası(1 ve 99 dahil) sayılardan rastgele 4 çift oluşturacak şekilde üreten bir fonksiyon yazarak, kod bloğundaki array değerini bu fonksiyondan dönen array ile değiştiren kodları yazın
*/
const fotoNumaralari = [10, 20, 30, 20, 10, 40, 40, 30, 88, 23, 99 , 33 ,88 , 33 ,99 ,23];



for (fotoNumara of randomSon) {
    const yenikart = document.createElement("div");
    yenikart.innerHTML = kartTemplate;
    yenikart.classList.add("kart");
    yenikart.querySelector(".kart-arkayuz img").src = `https://lipsum.app/id/${fotoNumara}/100x100`;
    document.querySelector("div#oyun-cerceve").append(yenikart);

    yenikart.addEventListener("click", kartTiklama);
}

function kartTiklama(olay) {
    const secilenKart = olay.currentTarget;

    if (secilenKart.classList.contains("eslesti") === true) {
        return;
    }

    if (secilenKart.classList.contains("acik") === true) {
        return;
    }
    const tumAcikKartlar = document.querySelectorAll(".acik");
    if (tumAcikKartlar.length === 2) {
        return;
    }

    const acikKart = document.querySelector(".acik");

    if (acikKart === null) {
        secilenKart.classList.add("acik");

        setTimeout(
            () => {
                secilenKart.classList.remove("acik");
            }, 1500
        );
        return;
    }
    secilenKart.classList.add("acik");

    const acikKartImg = acikKart.querySelector(".kart-arkayuz img");
    const secilenKartImg = secilenKart.querySelector(".kart-arkayuz img");

    if (acikKartImg.src === secilenKartImg.src) {
      acikKart.classList.add("eslesti");
      secilenKart.classList.add("eslesti");

      puan++;

      console.log(puan);

      puanText.innerHTML = puan;


      function openModal (){
        let modal = document.getElementById("myModal")
        modal.style.display = "block";
      }

      function closeModal (){

        let modal = document.getElementById("myModal")
        modal.style.display="none"
      }
      if (puan === 4)
        {
          openModal();
            setTimeout(closeModal, 5000);
        }
      acikKart.classList.remove("acik");
      secilenKart.classList.remove("acik");

      setTimeout(() => {
        acikKart.removeEventListener("click", kartTiklama);
        secilenKart.removeEventListener("click", kartTiklama);
      }, 1000);
    } else {
        
        setTimeout(() => {
            acikKart.classList.remove("acik");
            secilenKart.classList.remove("acik");
        }, 1500);
    }
}