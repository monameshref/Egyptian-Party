"use strict"
/// <reference types="../@types/jquery" />



$("#sideBar .icon button ").on("click" , function(){

    $('#navbar').animate({width:'toggle'} , 1000);
    $('#navbar').removeClass("d-none");
});


$(".close").on('click',function(){
    $('#navbar').animate({width:'toggle'},1000);
});



// navbar scroll links

$("a").on("click" , function(e){

    let aHref = e.target.getAttribute("href");
    let sectionOffset = $(aHref).offset().top;

    $("html").animate({scrollTop:sectionOffset},2000);
});


// details paragragh

$(".text h2").click(function(){
    $(this).next().slideToggle();
    $(".text p").not($(this).next()).slideUp();
})

//counter
const day = document.getElementById('day');
const hour = document.getElementById('hours');
const minutes =  document.getElementById('minute');
const seconds = document.getElementById('second');


let coutDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = coutDownDate - dateNow;


    let days = Math.floor(dateDiff  / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000*60*60*24))/ (1000 * 60 * 60));
    let minute = Math.floor((dateDiff % (1000*60*60))/ (1000 * 60 ));
    let second = Math.floor((dateDiff % (1000*60))/ (1000));


    day.innerHTML= days + " " + 'D'
    hour.innerHTML= hours + " " + 'h'
    minutes.innerHTML= minute<10?`0${minute + " " + 'm'}` : minute + " " + 'm';
    seconds.innerHTML= second<10?`0${second + " " + 's'}` : second + " " + 's';
}, (1000));



// form
const messageInput = document.getElementById("messageInput"); //Message Input
const charCount = document.getElementById("charCount"); //pragragh Input

$("#messageInput").on("input" , function(){

    let maxLength = 100;
    let userInput = messageInput.value;
    let remainingChars = maxLength - userInput.length;

    // 100 - maxLength <= 0 ? charCount.innerHTML = remainingChars : 100 - maxLength

    if (remainingChars > 0) {
        charCount.innerHTML = remainingChars;
        charCount.style.color = "#00b9bf";

    }
    else {
        charCount.innerHTML = "your available character finished";
        charCount.style.color = "#e74343";
    }

});



