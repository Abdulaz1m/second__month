document.getElementById("red").onclick = function redClick() {
    document.getElementById("red").setAttribute("class", "red_click")
    document.getElementById("yellow").setAttribute("class", "yellow")
    document.getElementById("green").setAttribute("class", "green")
    alert("Стоп! Светофор горит красным!")
}
document.getElementById("yellow").onclick = function yellowCLick() {
    document.getElementById("red").setAttribute("class", "red")
    document.getElementById("yellow").setAttribute("class", "yellow_click")
    document.getElementById("green").setAttribute("class", "green")
    alert("Подождите, еще чуть-чуть...")
}
document.getElementById("green").onclick = function greenCLick() {
    document.getElementById("red").setAttribute("class", "red")
    document.getElementById("yellow").setAttribute("class", "yellow")
    document.getElementById("green").setAttribute("class", "green_click")
    alert("Можете идти! ")
}

const svetofor = prompt("Какой свет выберете? Красный - Желтый - Зеленый")
switch (svetofor) {
    case "Красный":
        document.getElementById("red").setAttribute("class", "red_click");
        alert("Стоп! Светофор горит красным!");
        break;
    case "Желтый":
        document.getElementById("yellow").setAttribute("class", "yellow_click");
        alert("Подождите, еще чуть-чуть...");
        break;
    case "Зеленый":
        document.getElementById("green").setAttribute("class", "green_click");
        alert("Можете идти! ");
        break;
    default:
        alert("Куда едем?!")
}




