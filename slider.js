

var slider = document.querySelector(".main");

// slider.style.background="red";
// var pCount = document.querySelector("p");
// var span = document.querySelectorAll(".span");

// var list=[]
// list=span

var images = [
    "'/static/assets/images/MuchaTseBle.jpeg'",
    "'/static/assets/images/ppl.png'",
    "'/static/assets/images/pic1.png'"

   
]



// setInterval(spanCall,3600)
setInterval(call,3600)


// i=0
var i = 0
 var k=0
function auto() {
   console.log(slider.style.backgroundImage="linear-gradient(rgba(0,0,0,.9),rgba(0,0,0,.8)), url(images[i])");
    // slider.style.backgroundImage=images[i];
    // slider.src = images[i]
    // pCount.innerHTML=" Car "+i+" / "+(images.length-1)
    // i++
    
    console.log(images[i])
}
function call() {
    for (let j = images.length-1; j < images.length; j++){
        if (i < images.length) {
            auto()
        }
        else {
            i = 0
        }
    }
}
 

i=0
// function bgcolor() {
    
//     list[k].style.background = "black"
//     k++
  
// }


// function spanCall() {
//         // alert(k)
//         list[2].style.background = "none"
//         list[1].style.background = "none"
//         for (let h = list.length-1; h <list.length; h++){
//         list[0].style.background = "none"
//     if (k < list.length) {
        
//         bgcolor()
//     }
    
//     else {
//         list[2].style.background = "black"
//         k=0
//     }
// }
// }


