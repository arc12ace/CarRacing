var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
var car1_x=10
var car1_y=10
var car2_x=10
var car2_y=120
var car1_width=100
var car1_height=100
var car2_width=100
var car2_height=100
var background="RACE TRACK.jpg"
var car1="CAR 1.jpg"
var car2="CAR 2.png"

function add(){
    canvas_bg=new Image();
    canvas_bg.onload=uploadBackground;
    canvas_bg.src=background;

    car1_img=new Image();
    car1_img.onload=uploadCar1;
    car1_img.src=car1;

    car2_img=new Image();
    car2_img.onload=uploadCar2;
    car2_img.src=car2;
}
function uploadBackground(){
    ctx.drawImage(canvas_bg, 0, 0, canvas.width, canvas.height)
}
function uploadCar1(){
    ctx.drawImage(car1_img, car1_x, car1_y, car1_width, car1_height )
}
function uploadCar2(){
    ctx.drawImage(car2_img, car2_x, car2_y, car2_width, car2_height )
}
window.addEventListener("keydown", keydown);

function keydown(e){
    var keynumber=e.keyCode;
    console.log(keynumber);
    if(keynumber==37){
        left1();
        console.log("left");
    }
    if(keynumber==38){
        up1();
        console.log("up");
    }
    if(keynumber==39){
        right1();
        console.log("right");
    }
    if(keynumber==40){
        down1();
        console.log("down");
    }
    if(keynumber==65){
        left2();
        console.log("left");
    }
    if(keynumber==87){
        up2();
        console.log("up");
    }
    if(keynumber==68){
        right2();
        console.log("right");
    }
    if(keynumber==83){
        down2();
        console.log("down");
    }
    if(car1_x > 700){
        console.log("car1 Won");
        document.getElementById('game_status').innerHTML="Car 1 Won!!";
    }
    if(car2_x > 700){
        console.log("car2 Won");
        document.getElementById('game_status').innerHTML="Car 2 Won!!";
    }
}



function down1(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        console.log("car1_y= ", car1_y)
    }
}
function up1(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        console.log("car1_y= ", car1_y)
    }
}
function left1(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        console.log("car1_x= ", car1_x)
    }
}
function right1(){
    if(car1_x<=700){
        car1_x=car1_x+10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        console.log("car1_x= ", car1_x)
    }
}
function down2(){
    if(car2_y<=500){
        car2_y=car2_y+10;
        uploadBackground();
        uploadCar2();
        uploadCar1();
        console.log("car2_y= ", car2_y)
    }
}
function up2(){
    if(car2_y>=0){
        car2_y=car2_y-10;
        uploadBackground();
        uploadCar2();
        uploadCar1();
        console.log("car2_y= ", car2_y)
    }
}
function left2(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        uploadBackground();
        uploadCar2();
        uploadCar1();
        console.log("car2_x= ", car2_x)
    }
}
function right2(){
    if(car2_x<=700){
        car2_x=car2_x+10;
        uploadBackground();
        uploadCar2();
        uploadCar1();
        console.log("car2_x= ", car2_x)
    }
}
