const container = document.getElementById("heart");
container.innerHTML = '';
for(let i=0; i < 300;i++){
    let span = document.createElement("span");
    span.className = "text";
    span.innerText = " I LOVE YOU";
    let t = Math.PI * 2 *(i / 300);
    let x = 16 * Math.pow(Math.sin(t),3);
    let y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    x *= 15;
    y *=15;
    let z = Math.sin(t * 10)*40;
    span.style.transform=
    `translate(-50%,-50%) translate3d(${x}px, ${y}px, ${z}px)`;
    container.appendChild(span);
}
const starscontainer =document.getElementById("stars");
for(let i=0; i<100;i++){
    let star =document.createElement("div");
    star.className = "star";
    star.style.left=Math.random()*100 +"%";
    star.style.top =Math.random()*100 + "%";
    star.style.position =absolute;
    star.style.width ="2px";
    star.style.height ="2px";
    star.style.background ="white"
    starscontainer.appendChild(star);
}