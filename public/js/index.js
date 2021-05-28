$(document).ready(function () {
    
    let stars = document.getElementById('stars');
    let moon = document.getElementById('moon');
    let mountains_behind = document.getElementById('mountains_behind');
    let text = document.getElementById('text');
    let btn = document.getElementById('main_btn');
    let mountains_front = document.getElementById('mountains_front');
    let header = document.querySelector('header');

    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        stars.style.left = value * 0.75 + 'px';
        moon.style.top = value * 1.05 + 'px';
        mountains_behind.style.top = value * 0.5 + 'px';
        mountains_front.style.top = value * 0 + 'px';
        header.style.top = value * 0.5 + 'px';
    });

    const cursorSpan = document.querySelector(".cursor");
    const typedTextSpan = document.getElementById("text");
    const textArray = ["Hear.", "Howl.", "Hunt."];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) 
                cursorSpan.classList.add("typing");

            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex>=textArray.length) textArrayIndex=0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    type();

    document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
        if(textArray.length) setTimeout(type, newTextDelay + 250);
    });
})
