// console.log("Events java scripts")

function yellow (){
    document.body.style.backgroundColor = "yellow"
}

document.getElementById("used").addEventListener("click", function(){
    document.body.style.backgroundColor = "black";
    const prea = document.getElementById("pre");
    prea.innerText = "press"
})