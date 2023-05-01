window.onload=()=>{
   function buildclock(){
    const date=new Date();
    let hours=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

     hours =hours<10? "0" +hours :hours;
     min =min<10? "0" +min :min;
     sec =sec<10? "0" +sec :sec;
     

    document.querySelector('#clock-hours').innerText=hours;
    document.querySelector('#clock-minutes').innerText=min;
    document.querySelector('#clock-seconds').innerText=sec;
    setTimeout(buildclock,1000);   
}
  
buildclock();

}