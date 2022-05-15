// Elementlerin secilmesi

let btnDOM = document.querySelector("#liveToastBtn");
let listDOM = document.querySelector("#list");
let taskDOM = document.querySelector("#task");
let ulLength = document.getElementsByTagName("li");

// Listedeki verileri silebilmek icin carpının olusturulamasi

for(let i=0; i < ulLength.length;i++){ 
    let closeButton = document.createElement("span"); //close icon'u span etiketi icersinde oldugu icin yeni bir span elemani olusturup ve closeButton degiskenine atadik.
    closeButton.textContent = "\u00D7"; // listede carpi isaretini olusturabilmek icin "\u00D7" kullandik.
    closeButton.classList.add("close"); // bu butona close class'ini ekledik.
    closeButton.onclick = removeButton; // ve carpi isaretine basinca removeButton fonsiyonunu calistirmasi gerektini soyledik.
    ulLength[i].append(closeButton); // closeButton degiskenini ulLength'in 0, 1, 2... indexlerine ekleyerek aslinda for dongusunu kullanarak var olan listeye carpi butonunu ekledik. 
    ulLength[i].onclick = check; // uzerine tiklayinca check fonksiyonunu calistir dedik.
}


// Butonlara event tanimlanmasi

btnDOM.addEventListener('click', yapilacakEkle)  // butona click event i eklenerek butona tiklandiginda yapilacakEkle fonksiyonu calistirilmasi saglandi


//Fonksiyonlar 

function check(){
  this.classList.toggle("checked"); // toggle switch genelde iki secenekli (evet, hayir veya aktif, pasif) gibi durumlari belirtmek icin kullanilir. burda toggle("checked")'i kullanarak tiklanan maddenin ustunu ciz ve yanina tik isareti koy demis olduk.
}

function removeButton(){
  this.parentElement.remove();  // carpiya basinca listedeki o yapilacak elemaninin silinmesi saglandi
}

// Yapilacak eklenmesi
function yapilacakEkle() {
  

  if (taskDOM.value == "" || taskDOM.value.trim(taskDOM.value)=="")  
  { // input degeri bos girildiginde veya girilmediginde 
    $(".error").toast("show"); //error clasini kullanarak 
  } 
  else 
  {
    $(".success").toast("show");

    let liDOM = document.createElement('li') //yeni bir li elementi yaratacagimizi ilan edip yaratacagimiz li elementini liDOM degiskenine atayacagimizi soyledik.
    listDOM.appendChild(liDOM); // Yaratacagimiz liDOM degiskeninin her seferinde mevcut listenin en sonuna eklenmesi gerektigini tanimladik.
    liDOM.innerHTML = task.value; // Burda ise inputID.deger diyerek inputa girilen degerlerin liDOM'a atanmasi gerektigini belirttik.
    taskDOM.value = ""; // atandiktan sonra inputun temizlenmesini sagladik
  
    liDOM.onclick = check;
        
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
        
    liDOM.append(closeButton);
    listDOM.append(liDOM);
    inputElement.value = ("");

  }
}    








 

 






 



