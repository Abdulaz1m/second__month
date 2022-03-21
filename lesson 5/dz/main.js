document.getElementById("red").onclick = function() {
    document.getElementById("red").setAttribute("class", "red_click")
    document.getElementById("yellow").setAttribute("class", "yellow")
    document.getElementById("green").setAttribute("class", "green")
    alert("Стоп! Светофор горит красным!")
}
document.getElementById("yellow").onclick = function() {
    document.getElementById("red").setAttribute("class", "red")
    document.getElementById("yellow").setAttribute("class", "yellow_click")
    document.getElementById("green").setAttribute("class", "green")
    alert("Подождите, еще чуть-чуть...")
}
document.getElementById("green").onclick = function() {
    document.getElementById("red").setAttribute("class", "red")
    document.getElementById("yellow").setAttribute("class", "yellow")
    document.getElementById("green").setAttribute("class", "green_click")
    alert("Можете идти! ")
}





