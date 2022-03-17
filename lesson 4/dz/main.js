
let num = document.getElementById("num");

document.getElementById("Plus").onclick = function() {
  return num.innerHTML++
}

document.getElementById("Minus").onclick = function() {
  if (num.innerHTML > 0){
    return num.innerHTML--
  }
}


