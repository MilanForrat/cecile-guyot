function removeClassOnMobile(){
    var elements = document.querySelectorAll(".two-lines");
    // console.log(elements);
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
var element = document.getElementById("btn-navbar-toggler");
element.addEventListener("click", checkOnNavbarToggler);    
function checkOnNavbarToggler(){
    var rdv=document.getElementById('navbar-rdv');
    console.log(rdv);
    rdv.classList.toggle('navbar-rdv-mobile');
    // console.log(element);

}
