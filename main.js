var canvas = new fabric.Canvas("myCanvas");
playerx = 10;
playery = 10;
blockwidth = 30;
blockheight = 30;
var player_object="";
var block_object="";
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
    player_object= Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:playery,
        left:playerx
    });
    canvas.add(player_object);
});

}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object= Img;
        block_object.scaleToWidth(blockwidth);
        block_object.scaleToHeight(blockheight);
        block_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(block_object);
    });
    
    }
    window.addEventListener("keydown", keydown);
    function keydown(e){
        keyPressed = e.KeyCode;
        console.log(keyPressed);
        if(e.shiftKey == true && keyPressed =='80'){
            console.log("p and shift pressed together");
            blockwidth = blockwidth + 10;
            blockheight = blockheight +10;
            document.getElementById("currentwidth").innerHTML=blockwidth;
            document.getElementById("currentheight").innerHTML=blockheight;
        }
        if(e.shiftKey == true && keyPressed =='77'){
            console.log("m and shift pressed together");
            blockwidth = blockwidth - 10;
            blockheight = blockheight -10;
            document.getElementById("currentwidth").innerHTML=blockwidth;
            document.getElementById("currentheight").innerHTML=blockheight;
        }
        if(keyPressed == '38'){
            Up();
            console.log("Up");
        }
         if(keyPressed == '40'){
            Down();
            console.log("Down");
        }
        if(keyPressed == '37'){
            left();
            console.log("Left");
        }
        if(keyPressed == '39'){
            Right();
            console.log("Right");
        }
        if(keyPressed == '87'){
            new_image('wall.jpg')
            console.log("w");
        }
        if(keyPressed == '71'){
            new_image('ground.png')
            console.log("g");
        }
        if(keyPressed == '76'){
            new_image('light_green.png')
            console.log("l");
        }
        if(keyPressed == '84'){
            new_image('trunk.jpg')
            console.log("t");
        }
        if(keyPressed == '82'){
            new_image('roof.jpg')
            console.log("r");
        }
        if(keyPressed == '89'){
            new_image('yellow_wall.png')
            console.log("y");
        }
        if(keyPressed == '68'){
            new_image('dark_green.png')
            console.log("d");
        }
        if(keyPressed == '85'){
            new_image('unique.png')
            console.log("u");
        }
        if(keyPressed == '67'){
            new_image('cloud.jpg')
            console.log("c");
        }
    }
