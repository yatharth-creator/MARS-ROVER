canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add(){
    bg_imgTag=new Image();
    bg_imgTag.onload=uploadBackground();
    bg_imgTag.src=background_image;
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover();
    rover_imgTag.src=rover_image;
    }

    function uploadBackground(){
        ctx.drawImage(bg_imgTag,0,0,canvas.width,canvas.height);
    }

    function uploadrover()
    {
        ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
    }   

    window.addEventListener("keydown",mykeydown);
    function mykeydown(e){
        keypressed=e.keyCode;
        if(keypressed=="38"){
            up();
        }
        if(keypressed=="40"){
            down();
        }
        if(keypressed=="37"){
            left();
        }
        if(keypressed=="39"){
            right();
        }
    }
    function up(){
        if(rover_y>=0){
              rover_y=rover_y-10;
              uploadBackground();
              uploadrover();
        }
    }
    function down(){
        if(rover_y<=500){
              rover_y=rover_y+10;
              uploadBackground();
              uploadrover();
        }
    }
    function left(){
        if(rover_x>=0){
              rover_x=rover_x-10;
              uploadBackground();
              uploadrover();
        }
    }
    function right(){
        if(rover_x<=700){
              rover_x=rover_x+10;
              uploadBackground();
              uploadrover();
        }
    }