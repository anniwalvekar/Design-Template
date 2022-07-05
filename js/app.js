$(document).ready(function(){
  //hero slider
    $('#silder').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false, 
        items:1,
        smartSpeed:1000,
        navText:['Prev','Next'],
        responsive:{
            0:{
              nav:false,  
            },
            768:{
                nav:true,
            }
        }
    })
}); 
//Project Slider
$('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true, 
    items:1,
    smartSpeed:1000,
    margin:24,
    responsive:{
        0:{
         
        },
        768:{
           
        },
        1140:{
            items:2,
            center:true,
        }
    }
})
//Review
$('#reviews-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true, 
    items:1,
    smartSpeed:800,
    
})
