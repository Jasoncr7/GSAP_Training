gsap.from('.header', { duration: '2.5', y: '-1000%', ease: "bounce"})
gsap.from('.link', { duration: '1', opacity: '0', delay: '2.5' })
gsap.from('.bub1', { duration: '2', y: '1000%', delay: '3.6' })
gsap.from('.bub2', { duration: '2', y: '-1000%', delay: '3.7' })
gsap.from('.bub3', { duration: '2', opacity: '0', x: '-1000%', delay: '3.8' })
gsap.from('.one', { duration: '2', opacity: '0', delay: '6' })
gsap.to('.bg-col', { duration: '1', height: '42px', delay: '7.8', ease: "power2.in" })
gsap.from('.who', { duration: '1.5', x: '-1000%', delay: '10', opacity: '0'})
gsap.from('.are', { duration: '1.5', y: '-1000%', delay: '11.6', opacity: '0' })
gsap.from('.you', { duration: '1.5',  x: '1000%', delay: '13.1', opacity: '0'})
gsap.from('.name', { duration: '0.5', opacity: '0', delay: '8'})
gsap.to('.input', {duration: '0.8', width: '25%', opacity: '1', delay: '14'})
gsap.from('.btn', { duration: '1', opacity: '0', y: '1000%', delay: '15' })
let btn = document.querySelector('.btn');
btn.addEventListener('click', (event) => {
    x.style.opacity = '0';
})
var x = document.getElementsByTagName("BODY")[0];