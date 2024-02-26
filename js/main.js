const tacos = document.querySelector("#taco");
const chilaquiles = document.querySelector("#chilaquiles");
const chili = document.querySelector("#chili");


chilaquiles.addEventListener("click", () => {
    document.body.style = "animation: reversa normal 1s;"
    setTimeout(()=>{
        window.location.href="chilaquiles.html";
    }, 650);   
});

tacos.addEventListener("click", () => {
    document.body.style = "animation: reversa normal 1s;"
    setTimeout(()=>{
        window.location.href="tacos.html";
    }, 650);   
});

chili.addEventListener("click", () => {
    document.body.style = "animation: reversa normal 1s;"
    setTimeout(()=>{
        window.location.href="chili.html";
    }, 650);   
});
