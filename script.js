let btn=document.querySelector("#btn")
btn.addEventListener("click",()=>{
   
  if(btn.innerHTML==="dark"){
  btn.innerHTML="light"
  document.body.style.backgroundColor="black"
  // document.getElementById("dv").style.color="white"
    }
     
  else if(btn.innerHTML==="light"){
  btn.innerHTML="dark"
  document.body.style.backgroundColor="white"
  // document.getElementById("dv").style.color="black" 
    }
 else{
    btn.innerHTML="white" 
      }
  })
  let hour=document.querySelector("#hours")
let minutes=document.querySelector("#min")
let seco=document.querySelector("#sec")

let displayTime=()=>{

let hrs=new Date().getHours()
let minutes=new Date().getMinutes()
let secs=new Date().getSeconds()
if(hrs>=12){
    am.innerHTML="PM"
}
else{
    am.innerHTML="AM"
}
if(secs<10)
  {
secs="0"+secs
  }
if(minutes<10)
  {
 minutes="0"+minutes   
  }
  if(hrs<10)
    {
      hrs="0"+hrs
    }
 if(hrs>12)
   {
   hrs=hrs-12
  }
hour.innerHTML=hrs
min.innerHTML=minutes
seco.innerHTML=secs
}

setInterval(displayTime,10)
