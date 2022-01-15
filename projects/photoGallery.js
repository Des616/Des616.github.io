"use strict";

 
 var myNextButton = document.getElementById('NextGalleryButton');
 var myPrevButton = document.getElementById('PrevGalleryButton');
 var myGalleryPicture = document.getElementById('myPics');
 myNextButton.onclick = onNextButtonClick;
 myPrevButton.onclick = onPrevButtonClick;

 var myPics = ["rathalos.png","maplay.png","Monster_Cards.png","weaponlance.png","weaponswordnshield.png","weapondual.png","weaponhammer.png","weaponheavybowgun.png","dice.jpg"]
 var path = "../images/monHunImages/";
 var index = 0;
 function onNextButtonClick(){
    if(index >= myPics.length -1){
        index = 0;
    }
    else{
        index ++;
    }   
    myGalleryPicture.src = path+myPics[index];
    
 }
  function onPrevButtonClick(){
    if(index <= 0){
        index = myPics.length -1;
    }
    else{
        index --;
    }   
    myGalleryPicture.src = path+myPics[index];
   
 }
