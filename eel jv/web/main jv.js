numbtns=document.getElementsByClassName("number")
formula=document.getElementById("formula")
reset=document.getElementById("reset")
addEventListener("click",resetclick)
for b of btns {
    addEventListener("click",numclick)
}

function numclick(evt){
    formula.value+=`${evt.currentTarget.innerHtml}`

}
function reset(){
    formula.value=""
}
