console.log("DOM connected")
console.log(document.head)
console.log(document.body)

var picker = document.getElementById('picker')
console.log(picker)

var mybtn = document.querySelector('#btn')
console.log(mybtn)

ShowColor = document.getElementById('ShowColor')
console.log(ShowColor)

//var AllText = document.querySelectorAll('.tx')
var AllText = document.getElementsByClassName('tx')
console.log(AllText)

mybtn.addEventListener("click",function(){
    MyColor = picker.value
    for(var i=0; i<AllText.length; i++){
        AllText[i].style.color=MyColor
    }
    ShowColor.textContent=MyColor
})
