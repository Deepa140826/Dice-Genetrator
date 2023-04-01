var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;


var randomImage1="dice" + randomNumber1 + ".png";

var randomImagesource1="images/"+randomImage1;

var Image1=document.querySelectorAll("img")[0];

Image1.setAttribute("src",randomImagesource1);


var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomImage2="dice" + randomNumber2 +".png";

var randomImagesource2="images/"+randomImage2;

var Image2=document.querySelectorAll("img")[1];

Image2.setAttribute("src",randomImagesource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="✌️Player1 wins!!";
}

else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="✌️Player2 wins!!";
}

else{
    document.querySelector("h1").innerHTML="!😱!";
}
