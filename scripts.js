


const navigate=(value)=>{
    window.scrollto(document.getElementsByClassName(value))

}



let tl = gsap.timeline()



gsap.from(
    "#Hello-From", {
    x: -400, scaleX: 1, opacity: 0, duration: 1, // delay: 1
    // repeat: 1,
}
)
gsap.from(
    "#sb", {
    x: 400, scaleX: 1, opacity: 0, duration: 1, //delay: 1
    // delay: 0
    // repeat: 1,
}
)

gsap.from(
    "#iam", {
    x: -400, opacity: 0,
    duration: 1, delay: 1// delay: 0
    // repeat: 1,
}
)
gsap.from(
    "#Full-S", {
    x: -400, opacity: 0,
    duration: 1, delay: 1
    // repeat: 1,
}
)
gsap.from(
    "#soft-d", {
    x: 400, scaleX: 1, opacity: 0, duration: 1, delay: 1// delay: 0
    // repeat: 1,

}
)
