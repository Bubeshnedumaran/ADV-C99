var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function (event) {
    console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
speak();
}
function speak() {
var synth=window.speechSynthesis;
speakdata=document.getElementById("textbox").innerHTML;
var utterThis= new SpeechSynthesisUtterance(speakdata);
synth.speak(utterThis);
Webcam.attach(camera);
}
Webcam.set({
    width:390,
    height:290,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera").value;