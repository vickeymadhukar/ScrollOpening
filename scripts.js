var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        //  markers:true, 
        start: "50% 50%",
        end: "150% 50%",
        scrub: 2,
        pin: true

    }
});
tl
    .to("#top", {
        top: "-50%"
    }, 'a')
    .to("#bottom", {
        bottom: "-50%"

    }, 'a')
    .to("#top-h", {
        top: "80%"
    }, 'a')

    .from(".content h2", {
        y: "100%",  
        opacity: 0, 
        duration: 1,
        scale:0.5 
    }, 'a') 

    .to("#bottom", {
        opacity: 0,
        duration: 1 
    }, 'b');

var tm = gsap.timeline();

tm.from("#list", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    scale: 0.5,
    stagger: 0.3

})