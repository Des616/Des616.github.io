"use strict";

 var myFrame =document.getElementById("photoGallery");
 var myButton = document.getElementById('GalleryButton');
 myButton.onclick = onButtonClick;
 console.log(myButton);

 function onButtonClick(){
    console.log("Button was clicked");
 }