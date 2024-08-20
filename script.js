let swiper_btn = document.querySelector(".swiper")
let cont = document.querySelector(".conter")


let named = document.querySelector(".holder-name")
let number = document.querySelector(".card-number")


let str = []
let amountImp = document.querySelector(".amount-inp")
let del = document.querySelector(".del")
let clr = document.querySelector(".clr")
let buttons = document.querySelectorAll(".button")
amountImp.innerHTML = 0;
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        if (str.length <= 3) {
            str.push(btn.dataset.num)
            if (str[0] == "0") {
                str = []
                amountImp.innerHTML = 0;
            }
            else {
                amountImp.innerHTML = str.join("");
            }
        }
    })
    btn.addEventListener("touchstart", () => {
        let tl = gsap.timeline()
        tl.to(btn, {
            backgroundColor: `rgba(68,68,68,0.1)`,
            duration: 0.1
        })
        tl.to(btn, {
            backgroundColor: `transparent`,
            duration: 0.1
        })
    })

})




clr.addEventListener("click", (e) => {
    str = []
    amountImp.innerHTML = 0;

})

del.addEventListener("click", (e) => {
    str.pop()
    amountImp.innerHTML = (str.length !== 0) ? str.join("") : "0";

})



















let cord = 0;
let started = false
let payed = false

let left = swiper_btn.getBoundingClientRect().left
let cont_right = cont.getBoundingClientRect().right

swiper_btn.addEventListener("touchstart", (dets) => {
    started = true

})
let go = 0
function hhss() {
    if (navigator.vibrate) {
        window.navigator.vibrate([50, 10, 50]);
    }
}

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
                [a, b] = [named.value, number.value]
                if (a && b && str.length > 0) {
                    let randomString = Math.random().toString(36).substring(2, 10).toUpperCase().replace(/[0-9]/g, (d) => '0123456789'[Math.floor(Math.random() * 10)]);

                    document.querySelector(".name").innerHTML = a
                    document.querySelector(".number").innerHTML = b
                    document.querySelector(".pay-id").innerHTML = randomString
                    document.querySelector(".pay-date").innerHTML = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
                    document.querySelector(".amount-fi").innerHTML = (str.length == 0) ? "0" : str.join("");

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
                        filter: `blur(40px)`,
                        y: `-140`,
                        scale: 0.9,
                        duration: 1.4,
                        opacity: 0,
                        delay: 0.4
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
                else {
                    hhss()
                    started = false
                    let kdl = gsap.timeline()
                    kdl.to(".swiper", {
                        x: 0,
                        duration: 0.4,
                        backgroundColor: `rgb(255,0,0)`
                    })
                    kdl.to(".swiper", {
                        backgroundColor: `rgb(107,114,128)`
                    })
                }
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
        display.classList.add("h-screen", "-mt-14")
        display.classList.remove("h-64")
        document.querySelector(".close").classList.remove("opacity-0")
        document.querySelector(".close").classList.add("opacity-1")
        sts = true
    }
})
document.querySelector(".close").addEventListener("click", (e) => {
    e.stopPropagation()
    if (sts) {
        display.classList.remove("h-screen", "-mt-14")
        display.classList.add("h-64")
        document.querySelector(".close").classList.remove("opacity-1")
        document.querySelector(".close").classList.add("opacity-0")
        sts = false
    }
})

