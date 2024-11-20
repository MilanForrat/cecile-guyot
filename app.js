function removeClassOnMobile(){
    var elements = document.querySelectorAll(".two-lines");
    console.log(elements);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("two-lines");
        // console.log(elements[i]);
    }
}
window.onresize = function(event) {
    if(window.matchMedia("(max-width: 992px)").matches){
        // console.log('mobile');
        removeClassOnMobile();
    }else{
        // console.log('pc');
    }    
};
if(window.matchMedia("(max-width: 992px)").matches){
    // console.log('mobile');
    removeClassOnMobile();
}else{
    // console.log('pc');
}    
