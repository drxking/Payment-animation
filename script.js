let swiper_btn = document.querySelector(".swiper")
let cont = document.querySelector(".conter")

let cord = 0;
let started = false
let payed = false

let left = swiper_btn.getBoundingClientRect().left
let cont_right = cont.getBoundingClientRect().right

swiper_btn.addEventListener("touchstart", (dets) => {
    started = true
})
let go = 0
window.addEventListener("touchmove", (dets) => {
    cord = dets.touches[0].clientX;
    go = cord - left - 40
    if (!payed) {
        if (started) {
            if (go >= 0 && (go + 40) <= cont_right - 80 + 8) {
                gsap.to(".swiper", {
                    x: go,
                    duration: 0.1
                })

            }
            if ((go + 40) >= cont_right - 80 + 8) {
                payed = true
                started = false
                go = 0
                gsap.to(".hello", {
                    opacity: 0,
                    duration: 0.1
                })
                gsap.to(".swiper", {
                    x: go,
                    duration: 0.4,
                })
                gsap.to(".yyy", {
                    filter: `blur(20px)`,
                    y: `-140`,
                    scale: 0.9,
                    duration: 0.7,
                    opacity: 0
                })
                gsap.to(".ttt", {
                    filter: `blur(20px)`,
                    y: `-140`,
                    // scale: 1.1,
                    duration: 0.4,
                    opacity: 0
                })
                let tl = gsap.timeline()
                tl.to(cont, {
                    height: `100px`,
                    width: `100px`,
                    padding: 8,
                    justifyContent: `center`,
                    duration: 0.4,
                })
                tl.to(cont, {
                    duration: 0.6,
                    y: `-450%`,
                    scale: 1.7
                }, "a")

                tl.to(".swiper", {
                    backgroundColor: `rgb(114, 190, 0)`,
                    duration: 0.6,

                }, "a")
                tl.to(".payed", {
                    opacity: 1
                }, "c")
                tl.to(".init", {
                    opacity: 0
                }, "a")
                tl.to(".details", {
                    bottom: `0%`
                }, "a")
                tl.to(".details", {
                    duration: 0.6,
                    filter: `blur(0px)`,
                    opacity: 1,
                    bottom: `15%`
                }, "c")
            }
        }
    }


})

swiper_btn.addEventListener("touchend", (dets) => {
    started = false
    if (go + 40 < cont_right - 8) {
        gsap.to(".swiper", {
            x: 0,
            duration: 0.4
        })
    }

})





let display = document.querySelector(".display")
let sts = false
display.addEventListener("click", () => {
    if (!sts) {
        display.classList.add("h-screen","-mt-14")
        display.classList.remove("h-64")
        document.querySelector(".close").classList.remove("opacity-0")
        document.querySelector(".close").classList.add("opacity-1")
        sts = true
    }
})
document.querySelector(".close").addEventListener("click", (e) => {
    e.stopPropagation()
    if (sts) {
        display.classList.remove("h-screen","-mt-14")
        display.classList.add("h-64")
        document.querySelector(".close").classList.remove("opacity-1")
        document.querySelector(".close").classList.add("opacity-0")
        sts = false
    }
})