const intro = document.querySelector(".intro");
var a = document.getElementsByClassName("intro");

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{intro.classList.add('display-none');}, 2000)
});

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0;
    setTimeout(function() { 
        window.location.href = href;
    }, 500);
}

document.addEventListener('DOMContentLoaded',function(event){
    document.querySelector('body').style.opacity = 1;
})
    