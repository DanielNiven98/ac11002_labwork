function mOver(colour1) {
Activity1.addEventListener("mouseover", colour1);
mybox.style.backgroundColor = "pink";
}

Activity2.addEventListener("mouseover", colour2);
function mOver(colour2) {
mybox.style.backgroundColor = "green";
}

document.addEventListener("mouseover", colour3);
function mOver(colour3) {
mybox.style.backgroundColor = "lime";
}

document.addEventListener("mouseover", colour4);
function mOver(colour4){
  mybox.style.backgroundColor = "yellow";
}

function mOut(colour1, colour2, colour3, colour4) {
mybox.style.backgroundColor = "black";
}
