console.log('Tik-Tak-Toe');
let imageselect = "cross.png";
let arr = [[], [], []];
let result = "Waiting....";
let turn = true;

let box1 = ".col1>.row1";
let box2 = ".col2>.row1";
let box3 = ".col3>.row1";
let strokeType = "diagonal_h";


function change(id) {
    if (turn && document.getElementById(id).attributes.src.value == "") {
        document.getElementById(id).src = imageselect;
        arr[Math.floor((id - 1) / 3)][(id - 1) % 3] = String(imageselect);
        checkresult();
        switching();
    }
}

function switching() {
    if (turn) {
        if (imageselect == "circle.png") {
            cross();
        }
        else {
            circle();
        }
    } else {
        document.getElementById("selected").innerHTML = "Over"
    }
}

function circle() {
    imageselect = "circle.png";
    document.getElementById("selected").innerHTML = "Circle - O";
}
function cross() {
    imageselect = "cross.png";
    document.getElementById("selected").innerHTML = "Cross - X";
}


function checkresult() {
    if (arr[0][0] != undefined && arr[0][1] != undefined && arr[0][2] != undefined && arr[1][0] != undefined && arr[1][1] != undefined && arr[1][2] != undefined && arr[2][0] != undefined & arr[2][1] != undefined && arr[2][2] != undefined) {
        result = "X - O Draw";
        turn = false;
    }


    if (arr[0][0] == arr[0][1] && arr[0][0] == arr[0][2] && arr[0][0] != undefined) {
        result = arr[0][0];
        turn = false;
        box1 = ".col1>.row1";
        box2 = ".col2>.row1";
        box3 = ".col3>.row1";
        strokeType = "diagonal_h"
        addStroke(box1, box2, box3, strokeType);
    }
    if (arr[1][0] == arr[1][1] && arr[1][0] == arr[1][2] && arr[1][0] != undefined) {
        result = arr[1][0];
        turn = false;
        box1 = ".col1>.row2";
        box2 = ".col2>.row2";
        box3 = ".col3>.row2";
        strokeType = "diagonal_h"
        addStroke(box1, box2, box3, strokeType);
    }
    if (arr[2][0] == arr[2][1] && arr[2][0] == arr[2][2] && arr[2][0] != undefined) {
        result = arr[2][0];
        turn = false;
        box1 = ".col1>.row3";
        box2 = ".col2>.row3";
        box3 = ".col3>.row3";
        strokeType = "diagonal_h"
        addStroke(box1, box2, box3, strokeType);
    }


    if (arr[0][0] == arr[1][0] && arr[0][0] == arr[2][0] && arr[0][0] != undefined) {
        result = arr[0][0];
        turn = false;
        box1 = ".col1>.row1";
        box2 = ".col1>.row2";
        box3 = ".col1>.row3";
        strokeType = "diagonal_v"
        addStroke(box1, box2, box3, strokeType);
    }
    if (arr[0][1] == arr[1][1] && arr[0][1] == arr[2][1] && arr[0][1] != undefined) {
        result = arr[0][1];
        turn = false;
        box1 = ".col2>.row1";
        box2 = ".col2>.row2";
        box3 = ".col2>.row3";
        strokeType = "diagonal_v"
        addStroke(box1, box2, box3, strokeType);
    }
    if (arr[0][2] == arr[1][2] && arr[0][2] == arr[2][2] && arr[0][2] != undefined) {
        result = arr[0][2];
        turn = false;
        box1 = ".col3>.row1";
        box2 = ".col3>.row2";
        box3 = ".col3>.row3";
        strokeType = "diagonal_v"
        addStroke(box1, box2, box3, strokeType);
    }


    if (arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2] && arr[0][0] != undefined) {
        result = arr[0][0];
        turn = false;
        box1 = ".col1>.row1";
        box2 = ".col2>.row2";
        box3 = ".col3>.row3";
        strokeType = "diagonal_a"
        addStroke(box1, box2, box3, strokeType);
    }
    if (arr[2][0] == arr[1][1] && arr[2][0] == arr[0][2] && arr[2][0] != undefined) {
        result = arr[2][0];
        turn = false;
        box1 = ".col1>.row3";
        box2 = ".col2>.row2";
        box3 = ".col3>.row1";
        strokeType = "diagonal_b"
        addStroke(box1, box2, box3, strokeType);
    }

    if (result == "cross.png")
        document.getElementById("result").innerText = "X - Won";// result.replace(".png", " Won");
    else if (result == "circle.png")
        document.getElementById("result").innerText = "O - Won";
    else
        document.getElementById("result").innerText = result;

}

function reload() {
    imageselect = "cross.png";
    arr = [[], [], []];
    result = "Waiting....";
    turn = true;
    document.getElementById("selected").innerHTML = "Cross";
    document.getElementById("result").innerText = "Not Started";
    let boxes = Array.from(document.getElementsByClassName("row"));
    (boxes).forEach(box => {
        box.childNodes[0].src = "";
    });
    removeStroke(box1, box2, box3, strokeType)
}

function addStroke(box1, box2, box3, className) {
    document.querySelector(box1).classList.add(className);
    document.querySelector(box2).classList.add(className);
    document.querySelector(box3).classList.add(className);
}

function removeStroke(box1, box2, box3, className) {
    document.querySelector(box1).classList.remove(className);
    document.querySelector(box2).classList.remove(className);
    document.querySelector(box3).classList.remove(className);
}