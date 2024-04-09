let turn = 1;
let X = 0;
let O = 0;
let ties = 0;
let turn_img = document.querySelector("#img3");
let btn1_img = document.querySelector("#btn1_img");
let btn2_img = document.querySelector("#btn2_img");
let btn3_img = document.querySelector("#btn3_img");
let btn4_img = document.querySelector("#btn4_img");
let btn5_img = document.querySelector("#btn5_img");
let btn6_img = document.querySelector("#btn6_img");
let btn7_img = document.querySelector("#btn7_img");
let btn8_img = document.querySelector("#btn8_img");
let btn9_img = document.querySelector("#btn9_img");

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");

let p11 = document.querySelector("#p11");
let p12 = document.querySelector("#p12");
let p13 = document.querySelector("#p13");

function turn_image(){
    if(turn%2==0){
        turn_img.src = "./images/o.png";
    }
    else{
        turn_img.src = "./images/x.png";
    }
}

function button1(){
    if(turn%2==0){
        btn1_img.src = "./images/o.png";
        btn1_img.style.visibility = "visible";
        btn1.value = 2;
        btn1.disabled = true;
        logic_O();
    }
    else{
        btn1_img.src = "./images/x.png";
        btn1_img.style.visibility = "visible";
        btn1.value = 1;
        btn1.disabled = true;
        logic_X();
    }
    turn++;
    turn_image();
}

function button2(){
    if(turn%2==0){
        btn2_img.src = "./images/o.png";
        btn2_img.style.visibility = "visible";
        btn2.value = 2;
        btn2.disabled = true;
        logic_O();
    }
    else{
        btn2_img.src = "./images/x.png";
        btn2_img.style.visibility = "visible";
        btn2.value = 1;
        btn2.disabled = true;
        logic_X();
    }
    turn++;
    turn_image();
}

function button3(){
    if(turn%2==0){
        btn3_img.src = "./images/o.png";
        btn3_img.style.visibility = "visible";
        btn3.value = 2;
        btn3.disabled = true;
        logic_O();
    }
    else{
        btn3_img.src = "./images/x.png";
        btn3_img.style.visibility = "visible";
        btn3.value = 1;
        btn3.disabled = true;
        logic_X();
    }
    turn++;
    turn_image();
}

function button4(){
    if(turn%2==0){
        btn4_img.src = "./images/o.png";
        btn4_img.style.visibility = "visible";
        btn4.value = 2;
        btn4.disabled = true;
        logic_O();
    }
    else{
        btn4_img.src = "./images/x.png";
        btn4_img.style.visibility = "visible";
        btn4.value = 1;
        btn4.disabled = true;
        logic_X();
    }
    turn++;
    turn_image();
}

function button5(){
    if(turn%2==0){
        btn5_img.src = "./images/o.png";
        btn5_img.style.visibility = "visible";
        btn5.value = 2;
        btn5.disabled = true;
        logic_O();
    }
    else{
        btn5_img.src = "./images/x.png";
        btn5_img.style.visibility = "visible";
        btn5.value = 1;
        btn5.disabled = true;
        logic_X();
    }
    turn++;
    turn_image();
}

function button6(){
    if(turn%2==0){
        btn6_img.src = "./images/o.png";
        btn6_img.style.visibility = "visible";
        btn6.value = 2;
        btn6.disabled = true;
        logic_O();
    }
    else{
        btn6_img.src = "./images/x.png";
        btn6_img.style.visibility = "visible";
        btn6.value = 1;
        btn6.disabled = true;
        logic_X();
    }
    turn++;
    turn_image();
}

function button7(){
    if(turn%2==0){
        btn7_img.src = "./images/o.png";
        btn7_img.style.visibility = "visible";
        btn7.value = 2;
        btn7.disabled = true;
        logic_O();
    }
    else{
        btn7_img.src = "./images/x.png";
        btn7_img.style.visibility = "visible";
        btn7.value = 1;
        btn7.disabled = true;
        logic_X();
    }
    turn++;
    turn_image();
}

function button8(){
    if(turn%2==0){
        btn8_img.src = "./images/o.png";
        btn8_img.style.visibility = "visible";
        btn8.value = 2;
        btn8.disabled = true;
        logic_O();
    }
    else{
        btn8_img.src = "./images/x.png";
        btn8_img.style.visibility = "visible";
        btn8.value = 1;
        btn8.disabled = true;
        logic_X();
    }
    turn++;
    turn_image();
}

function button9(){
    if(turn%2==0){
        btn9_img.src = "./images/o.png";
        btn9_img.style.visibility = "visible";
        btn9.value = 2;
        btn9.disabled = true;
        logic_O();
    }
    else{
        btn9_img.src = "./images/x.png";
        btn9_img.style.visibility = "visible";
        btn9.value = 1;
        btn9.disabled = true;
        logic_X();
    }
    turn++;
    turn_image();
}

function Player_X_wins(){
    document.querySelector("#heading1").innerHTML = "Player X Wins!!!";
    setTimeout(()=>{
        document.querySelector("#heading1").innerHTML = "Tic Tac Toe";
    },3000)
}

function Player_O_wins(){
    document.querySelector("#heading1").innerHTML = "Player O Wins!!!";
    setTimeout(()=>{
        document.querySelector("#heading1").innerHTML = "Tic Tac Toe";
    },3000)
}

function Ties(){
    document.querySelector("#heading1").innerHTML = "It's a Tie!!!";
    setTimeout(()=>{
        document.querySelector("#heading1").innerHTML = "Tic Tac Toe";
    },3000)
}

function logic_X(){
    if(btn1.value==1 && btn2.value==1 && btn3.value==1){
        btn4.style.filter = "grayscale(100%)";
        btn5.style.filter = "grayscale(100%)";
        btn6.style.filter = "grayscale(100%)";
        btn7.style.filter = "grayscale(100%)";
        btn8.style.filter = "grayscale(100%)";
        btn9.style.filter = "grayscale(100%)";
        X++;
        p11.innerText = "X : "+X;
        Player_X_wins();
    }
    else if(btn4.value==1 && btn5.value==1 && btn6.value==1){
        btn1.style.filter = "grayscale(100%)";
        btn2.style.filter = "grayscale(100%)";
        btn3.style.filter = "grayscale(100%)";
        btn7.style.filter = "grayscale(100%)";
        btn8.style.filter = "grayscale(100%)";
        btn9.style.filter = "grayscale(100%)";
        X++;
        p11.innerText = "X : "+X;
        Player_X_wins();
    }
    else if(btn7.value==1 && btn8.value==1 && btn9.value==1){
        btn4.style.filter = "grayscale(100%)";
        btn5.style.filter = "grayscale(100%)";
        btn6.style.filter = "grayscale(100%)";
        btn1.style.filter = "grayscale(100%)";
        btn2.style.filter = "grayscale(100%)";
        btn3.style.filter = "grayscale(100%)";
        X++;
        p11.innerText = "X : "+X;
        Player_X_wins();
    }
    else if(btn1.value==1 && btn4.value==1 && btn7.value==1){
        btn2.style.filter = "grayscale(100%)";
        btn3.style.filter = "grayscale(100%)";
        btn6.style.filter = "grayscale(100%)";
        btn5.style.filter = "grayscale(100%)";
        btn8.style.filter = "grayscale(100%)";
        btn9.style.filter = "grayscale(100%)";
        X++;
        p11.innerText = "X : "+X;
        Player_X_wins();
    }
    else if(btn2.value==1 && btn5.value==1 && btn8.value==1){
        btn1.style.filter = "grayscale(100%)";
        btn3.style.filter = "grayscale(100%)";
        btn4.style.filter = "grayscale(100%)";
        btn7.style.filter = "grayscale(100%)";
        btn6.style.filter = "grayscale(100%)";
        btn9.style.filter = "grayscale(100%)";
        X++;
        p11.innerText = "X : "+X;
        Player_X_wins();
    }
    else if(btn3.value==1 && btn6.value==1 && btn9.value==1){
        btn1.style.filter = "grayscale(100%)";
        btn2.style.filter = "grayscale(100%)";
        btn4.style.filter = "grayscale(100%)";
        btn7.style.filter = "grayscale(100%)";
        btn8.style.filter = "grayscale(100%)";
        btn5.style.filter = "grayscale(100%)";
        X++;
        p11.innerText = "X : "+X;
        Player_X_wins();
    }
    else if(btn1.value==1 && btn5.value==1 && btn9.value==1){
        btn2.style.filter = "grayscale(100%)";
        btn3.style.filter = "grayscale(100%)";
        btn6.style.filter = "grayscale(100%)";
        btn7.style.filter = "grayscale(100%)";
        btn8.style.filter = "grayscale(100%)";
        btn4.style.filter = "grayscale(100%)";
        X++;
        p11.innerText = "X : "+X;
        Player_X_wins();
    }
    else if(btn3.value==1 && btn5.value==1 && btn7.value==1){
        btn1.style.filter = "grayscale(100%)";
        btn2.style.filter = "grayscale(100%)";
        btn6.style.filter = "grayscale(100%)";
        btn4.style.filter = "grayscale(100%)";
        btn8.style.filter = "grayscale(100%)";
        btn9.style.filter = "grayscale(100%)";
        X++;
        p11.innerText = "X : "+X;
        Player_X_wins();
    }
    else if((btn1.value==1 || btn1.value==2) && (btn2.value==1 || btn2.value==2) && (btn3.value==1 || btn3.value==2)
            && (btn4.value==1 || btn4.value==2) && (btn5.value==1 || btn5.value==2) && (btn6.value==1 || btn6.value==2)
            && (btn7.value==1 || btn7.value==2) && (btn8.value==1 || btn8.value==2) && (btn9.value==1 || btn9.value==2)){
                btn1.style.filter = "grayscale(100%)";
                btn2.style.filter = "grayscale(100%)";
                btn3.style.filter = "grayscale(100%)";
                btn4.style.filter = "grayscale(100%)";
                btn5.style.filter = "grayscale(100%)";
                btn6.style.filter = "grayscale(100%)";
                btn7.style.filter = "grayscale(100%)";
                btn8.style.filter = "grayscale(100%)";
                btn9.style.filter = "grayscale(100%)";
                ties++;
                p12.innerText = "Ties : "+ties;
                Ties();
    }
}

function logic_O(){
    if(btn1.value==2 && btn2.value==2 && btn3.value==2){
        btn4.style.filter = "grayscale(100%)";
        btn5.style.filter = "grayscale(100%)";
        btn6.style.filter = "grayscale(100%)";
        btn7.style.filter = "grayscale(100%)";
        btn8.style.filter = "grayscale(100%)";
        btn9.style.filter = "grayscale(100%)";
        O++;
        p13.innerText = "O : "+O;
        Player_O_wins();
    }
    else if(btn4.value==2 && btn5.value==2 && btn6.value==2){
        btn1.style.filter = "grayscale(100%)";
        btn2.style.filter = "grayscale(100%)";
        btn3.style.filter = "grayscale(100%)";
        btn7.style.filter = "grayscale(100%)";
        btn8.style.filter = "grayscale(100%)";
        btn9.style.filter = "grayscale(100%)";
        O++;
        p13.innerText = "O : "+O;
        Player_O_wins();
    }
    else if(btn7.value==2 && btn8.value==2 && btn9.value==2){
        btn4.style.filter = "grayscale(100%)";
        btn5.style.filter = "grayscale(100%)";
        btn6.style.filter = "grayscale(100%)";
        btn1.style.filter = "grayscale(100%)";
        btn2.style.filter = "grayscale(100%)";
        btn3.style.filter = "grayscale(100%)";
        O++;
        p13.innerText = "O : "+O;
        Player_O_wins();
    }
    else if(btn1.value==2 && btn4.value==2 && btn7.value==2){
        btn2.style.filter = "grayscale(100%)";
        btn3.style.filter = "grayscale(100%)";
        btn6.style.filter = "grayscale(100%)";
        btn5.style.filter = "grayscale(100%)";
        btn8.style.filter = "grayscale(100%)";
        btn9.style.filter = "grayscale(100%)";
        O++;
        p13.innerText = "O : "+O;
        Player_O_wins();
    }
    else if(btn2.value==2 && btn5.value==2 && btn8.value==2){
        btn1.style.filter = "grayscale(100%)";
        btn3.style.filter = "grayscale(100%)";
        btn4.style.filter = "grayscale(100%)";
        btn7.style.filter = "grayscale(100%)";
        btn6.style.filter = "grayscale(100%)";
        btn9.style.filter = "grayscale(100%)";
        O++;
        p13.innerText = "O : "+O;
        Player_O_wins();
    }
    else if(btn3.value==2 && btn6.value==2 && btn9.value==2){
        btn1.style.filter = "grayscale(100%)";
        btn2.style.filter = "grayscale(100%)";
        btn4.style.filter = "grayscale(100%)";
        btn7.style.filter = "grayscale(100%)";
        btn8.style.filter = "grayscale(100%)";
        btn5.style.filter = "grayscale(100%)";
        O++;
        p13.innerText = "O : "+O;
        Player_O_wins();
    }
    else if(btn1.value==2 && btn5.value==2 && btn9.value==2){
        btn2.style.filter = "grayscale(100%)";
        btn3.style.filter = "grayscale(100%)";
        btn6.style.filter = "grayscale(100%)";
        btn7.style.filter = "grayscale(100%)";
        btn8.style.filter = "grayscale(100%)";
        btn4.style.filter = "grayscale(100%)";
        O++;
        p13.innerText = "O : "+O;
        Player_O_wins();
    }
    else if(btn3.value==2 && btn5.value==2 && btn7.value==2){
        btn1.style.filter = "grayscale(100%)";
        btn2.style.filter = "grayscale(100%)";
        btn6.style.filter = "grayscale(100%)";
        btn4.style.filter = "grayscale(100%)";
        btn8.style.filter = "grayscale(100%)";
        btn9.style.filter = "grayscale(100%)";
        O++;
        p13.innerText = "O : "+O;
        Player_O_wins();
    }
    else if((btn1.value==1 || btn1.value==2) && (btn2.value==1 || btn2.value==2) && (btn3.value==1 || btn3.value==2)
            && (btn4.value==1 || btn4.value==2) && (btn5.value==1 || btn5.value==2) && (btn6.value==1 || btn6.value==2)
            && (btn7.value==1 || btn7.value==2) && (btn8.value==1 || btn8.value==2) && (btn9.value==1 || btn9.value==2)){
                btn1.style.filter = "grayscale(100%)";
                btn2.style.filter = "grayscale(100%)";
                btn3.style.filter = "grayscale(100%)";
                btn4.style.filter = "grayscale(100%)";
                btn5.style.filter = "grayscale(100%)";
                btn6.style.filter = "grayscale(100%)";
                btn7.style.filter = "grayscale(100%)";
                btn8.style.filter = "grayscale(100%)";
                btn9.style.filter = "grayscale(100%)";
                ties++;
                p12.innerText = "Ties : "+ties;
                Ties();
    }
}

function Replay(){
    btn1.style.filter = "grayscale(0%)";
    btn2.style.filter = "grayscale(0%)";
    btn3.style.filter = "grayscale(0%)";
    btn4.style.filter = "grayscale(0%)";
    btn5.style.filter = "grayscale(0%)";
    btn6.style.filter = "grayscale(0%)";
    btn7.style.filter = "grayscale(0%)";
    btn8.style.filter = "grayscale(0%)";
    btn9.style.filter = "grayscale(0%)";
    btn1_img.src = "";
    btn1_img.style.visibility = "hidden";
    btn2_img.src = "";
    btn2_img.style.visibility = "hidden";
    btn3_img.src = "";
    btn3_img.style.visibility = "hidden";
    btn4_img.src = "";
    btn4_img.style.visibility = "hidden";
    btn5_img.src = "";
    btn5_img.style.visibility = "hidden";
    btn6_img.src = "";
    btn6_img.style.visibility = "hidden";
    btn6_img.src = "";
    btn6_img.style.visibility = "hidden";
    btn7_img.src = "";
    btn7_img.style.visibility = "hidden";
    btn8_img.src = "";
    btn8_img.style.visibility = "hidden";
    btn9_img.src = "";
    btn9_img.style.visibility = "hidden";
    btn1.value = 0;
    btn1.disabled = false;
    btn2.value = 0;
    btn2.disabled = false;
    btn3.value = 0;
    btn3.disabled = false;
    btn4.value = 0;
    btn4.disabled = false;
    btn5.value = 0;
    btn5.disabled = false;
    btn6.value = 0;
    btn6.disabled = false;
    btn7.value = 0;
    btn7.disabled = false;
    btn8.value = 0;
    btn8.disabled = false;
    btn9.value = 0;
    btn9.disabled = false;
    turn = 1;
    document.querySelector("#img3").src = "./images/x.png";
}