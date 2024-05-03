//just a quick function to see how jQuery works !!!
// console.log($('p'))
// $('p').mouseover(function () {
//     $('p').fadeOut();    
// });

var picker = $('#picker')[0]
console.log(picker)

var mybtn = $('#btn')
console.log(mybtn)

var ShowColor = $('#ShowColor')[0]
console.log(ShowColor)

var AllText = $('.tx')
console.log(AllText)

mybtn.click(function () { 
    MyColor = picker.value
    for(var i=0; i<AllText.length; i++){
        AllText[i].style.color=MyColor
    }
    ShowColor.textContent=MyColor
});

