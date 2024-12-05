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
    // console.log(rdv);
    rdv.classList.toggle('navbar-rdv-mobile');
    // console.log(element);
}
// var iframe=document.getElementsByTagName("iframe");
// console.log(iframe[0].contentDocument.title);
// iframe.contentDocument.title="GoogleMap carte interactive de Chalamont 01320";


// var btnHypno = document.getElementById('btn-accompagnements-hypnose');
// var btnPNL = document.getElementById('btn-accompagnements-PNL');

// var modalHypno = document.getElementById('Hypnose');
// var modalPNL= document.getElementById('PNLDNR');
// var modalSophro= document.getElementById('Sophrologie');
// var modalEFT= document.getElementById('EFTClinique');

// btnHypno.addEventListener('click', function(){
//     openModalAtNavAnchor(modalHypno);
// });
// btnPNL.addEventListener('click', function(){
//     openModalAtNavAnchor(modalPNL);
// });


// function jump(h){
//     console.log('bravo');
//     location.href = "#"+h.id;                 
// }
// function openModalAtNavAnchor(e){
//     console.log('ouvert : ');
//     console.log(e)
//         jump(e);
// }
