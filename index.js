function clock() {
    let carction=document.getElementsByTagName('h1')
    let hourse=document.getElementById('hours');
    let minites=document.getElementById('minites');
    let second=document.getElementById('seconds');
    let perods=document.getElementById('peride');

    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    

    let ampm= h>=12 ? "PM":"AM"

    if(h>12){
        h=h-12;
    }
    h = h<10 ? "0" + h : h
    m = m<10 ? "0" + m : m
    s = s<10 ? "0" + s : s

    hourse.innerHTML=h;
    minites.innerHTML=m;
    second.innerHTML=s;
    perods.innerHTML=ampm;
    h1.innertext="online-clock";

}
setInterval(clock, 1000);