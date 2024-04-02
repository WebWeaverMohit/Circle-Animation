var circle = document.querySelector("#circle")
var frames = document.querySelectorAll(".frame")
const lerp = (x, y, a) => x * (1 - a) + y * a;
// const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));

frames.forEach(frame => {
    frame.addEventListener("mousemove", function(dets){

        var dims = frame.getBoundingClientRect();
        var xstart = dims.x;
        var xend = dims.x + dims.width
        var ystart = dims.y;
        var yend = dims.y + dims.height
    
        var zo = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
        var zoy = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);
    
        gsap.to(circle,{
            scale: 10
        })
        gsap.to(frame.children,{
            color: "#fff",
            y: "0px"
        })
        gsap.to(frame.children,{
            x: lerp(-50, 50, zo),
            y: lerp(-50, 50, zoy),
            duration: 0.2
        })
    })
    
    frame.addEventListener("mouseleave", function(dets){
        gsap.to(circle,{
            scale: 1
        })
        gsap.to(frame.children,{
            color: "#000",
            y: "-100px"
        })
        gsap.to(frame.children,{
            x: 0,
            y: 0,
            duration: 0.2
        })
    })
})

window.addEventListener("mousemove", function(dets){
    gsap.to(circle,{
        x:dets.clientX,
        y: dets.clientY,
        duration: 0.2,
        ease: Expo
    })
})
