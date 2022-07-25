
let changeLevel = () => {
    let thermo = document.getElementById('putThermo');
    thermo.innerHTML = "&#xf2cb"
    thermo.style.color= "red"

    setTimeout(() => {
        thermo.innerHTML = "&#xf2ca"
        thermo.style.color= "yellow"
    },1000)

    setTimeout(() => {
        thermo.innerHTML= "&#xf2c9"
    },2000)

    setTimeout(() => {
        thermo.innerHTML= "&#xf2c8"
    },3000)

    setTimeout(() => {
        thermo.innerHTML = "&#xf2c7"
        thermo.style.color= "chartreuse"
    },4000)
}
changeLevel();

setInterval(changeLevel,5000)