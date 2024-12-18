window.addeventlistenner('scroll',function()){
    const header =document.querySelector('header');
    header.classList.toggle("stikky",window.scrolly > 0 );

};