
var img = ['paper.png','stone.png','scissors.png'];
var img2 = ['paper2.png','stone2.png','scissors2.png'];
var result1 = img[Math.floor(Math.random()*img.length)];
var result2 = img2[Math.floor(Math.random()*img2.length)];
document.querySelector(".img1").setAttribute("src", result1);
document.querySelector(".img2").setAttribute("src",result2);

if (result1==='paper.png' && result2==='paper2.png') {
    document.getElementById("heading").innerHTML="DROW Refresh Again";
}else if (result1==='scissors.png' && result2==='scissors2.png') {
    document.getElementById("heading").innerHTML="DROW Refresh Again";
}else if (result1==='stone.png' && result2==='stone2.png') {
    document.getElementById("heading").innerHTML="DROW Refresh Again";
}else if (result1==='scissors.png' && result2==='paper2.png') {
    document.getElementById("heading").innerHTML="Player 1 Win";
}else if (result1==='scissors.png' && result2==='stone2.png') {
    document.getElementById("heading").innerHTML="Player 2 Win";
}else if (result1==='paper.png' && result2==='stone2.png') {
    document.getElementById("heading").innerHTML="Player 1 Win";
}else if (result1==='paper.png' && result2==='scissors2.png') {
    document.getElementById("heading").innerHTML="Player 2 Win";
}else if (result1==='stone.png' && result2==='paper2.png') {
    document.getElementById("heading").innerHTML="Player 2 Win";
}else if (result1==='stone.png' && result2==='scissors2.png') {
    document.getElementById("heading").innerHTML="Player 1 Win";
}
