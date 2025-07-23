let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")


function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lan="en-in"
    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning sir")
    }
    else if(hours>=12 && hours<4){
        speak("Good Afternoon sir")
    }else{
        speak("Good Evening sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript;
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello") || message.includes("hi")){
        speak("hello sir ,my name is Ritika, created by vaibhav sonar, what can i help you?")
    }else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by vaibhav sonar")
    }else if(message.includes("open youtube")){
        speak("ok sir, opening youtube...")
        window.open("https://www.youtube.com","_blank")
    }else if(message.includes("chat gpt")){
        speak("ok sir, chat gpt...")
        window.open("https://chatgpt.com","_blank")
    }else if(message.includes("calculato")){
        speak("ok sir, calculator...")
        window.open("calculator://","_blank")
    }else if(message.includes("whatsapp")){
        speak("ok sir, whatsapp...")
        window.open("whatsapp://C:\Program Files\Google\Chrome\Application","_blank")
    }else if(message.includes("vs code")){
        speak("ok sir, vs code...")
        window.open("vscode://file/C:/Users/PC/OneDrive/Desktop","_blank")
    }else if(message.includes("open youtube")){
        speak("ok sir, google...")
        window.open("","_blank")
    }else if(message.includes("git hub")){
        speak("ok sir, git hub...")
        window.open("https://github.com/","_blank")
    }else if(message.includes("password file")){
        speak("ok sir, password file...")
        window.open("file:///C:/Users/PC/OneDrive/Desktop/Basic%20important%20files/password%20file.txt","_blank")
    }
    else{
    let finalText="this is what found on internet regarding" +message.replace("shipra","") || message.replace
    ("shifra","")
    speak(finalText)
    window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`, "_blank");}
}




//https://www.google.com/search?q=what+is+javascript&oq=whatis+java&gs_lcrp=EgZjaHJvbWUqDAgCEAAYChixAxiABDIGCAAQRRg5MgwIARAAGAoYsQMYgAQyDAgCEAAYChixAxiABDIJCAMQABgKGIAEMgkIBBAAGAoYgAQyCQgFEAAYChiABDIJCAYQABgKGIAEMgkIBxAAGAoYgAQyCQgIEAAYChiABDIJCAkQABgKGIAE0gELMTE3MzE0ajFqMTWoAgywAgHxBdT5Yp0o_-tE&sourceid=chrome&ie=UTF-8








//let speechIndex=event.resultIndex
   // let transcript=event.result[currentIndex][0].transcript