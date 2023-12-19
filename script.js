var cursor=document.querySelector("#cursor");
var cursorBlur=document.querySelector("#cursorBlur");
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x-15+"px";
    cursor.style.top = dets.y-15+"px";
    // cursorBlur.style.left=dets.x+"px";
    // cursorBlur.style.top=dets.y+"px";
})

var cursorBlur=document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){
    cursorBlur.style.left=dets.x-150+"px";
    cursorBlur.style.top=dets.y-150+"px";
})

var h4all=document.querySelectorAll("#nav h4")
    h4all.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            cursor.style.scale=3
            cursor.style.border="0.1px solid white"
            cursor.style.backgroundColor="transparent";
        })
    })

var h4all=document.querySelectorAll("#nav h4")
    h4all.forEach(function(elem){
        elem.addEventListener("mouseleave", function(){
            cursor.style.scale=1;
            cursor.style.border="0px solid #95C11E";
            cursor.style.backgroundColor= "#95C11E";
        })
    })


gsap.to("#nav",{
    backgroundColor: "#000",
    duration : 1,
    height : "70px",
    scrollTrigger:{
         trigger:"#nav",
         scroller:"body",
        //  markers:true,
         scrub:2,
         start:"top -10%",
         end: "top 11%"
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger: "#main",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -90%",
        scrub:true
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    // stagger : 0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         // markers:true,
//         start:"top 60%",
//         end:"top 55%",
//         scrub:1
//     }
// })

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 115%",
        end:"top 105%",
        scrub:4
    }
})

gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end: "top 70%",
        scrub:3
    }
})