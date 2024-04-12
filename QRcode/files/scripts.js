var container=document.querySelector(".container")
var qrcodeinput=document.querySelector(".input")
var button=document.querySelector(".button")
var qrcodeimg=document.querySelector(".qrcode-img")
var qrdownload=document.querySelector(".download a")
     
button.addEventListener("click", function the()
{
    container.classList.add("active");
    var qrvalue=qrcodeinput.value
    qrcodeimg.innerHTML=""
     let qrcode = new QRCode(qrcodeimg,{
        text : qrvalue,
        width : 280,
        height : 280,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
     });

})
button.addEventListener("click", function ()
{
    qrcodeinput.value=""
})

qrdownload.addEventListener("click",()=>
{
    var qrvalue=qrcodeinput.value
    let imgsrc=qrcodeimg.querySelector("img").src;
    qrdownload.href=imgsrc;
    qrdownload.download="QR CODE";

})