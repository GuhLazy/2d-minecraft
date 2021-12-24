var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
 block_img_width=30;
 block_img_height=30;
var player="";
var bricks="";

function player_update() {
 fabric.Image.fromURL("player.png",function(Img) {
     player=Img;
     player.scaleToWidth(150);
     player.scaleToHeight(150);
     player.set( {
     top: player_y,
     left:player_x
     });
     canvas.add(player)
    });

}


function new_image(get_img) {
    fabric.Image.fromURL(get_img,function(Img) {
        bricks=Img;
        bricks.scaleToWidth(block_img_width);
        bricks.scaleToHeight(block_img_height);
        bricks.set( {
        top: player_y,
        left:player_x
        });
        canvas.add(bricks)
       });
   
   }

   window.addEventListener("keydown" , my_keydown);

   function my_keydown(e)
   {
      keyPressed=e.keyCode;
      console.log(keyPressed)

      if(e.shiftKey == true && keyPressed == '80')
      {
      block_img_width = block_img_width +10;
      block_img_height = block_img_height +10;

      document.getElementById("current_width").innerHTML= block_img_width;
      document.getElementById("current_height").innerHTML= block_img_height;

      }

      if(e.shiftKey == true && keyPressed == '77')
      {
      block_img_width = block_img_width -10;
      block_img_height = block_img_height -10;

      document.getElementById("current_width").innerHTML= block_img_width;
      document.getElementById("current_height").innerHTML= block_img_height;

      }

     if(keyPressed == '37') {
         left();
         console.log("left")
     }
     if(keyPressed == '38') {
         up();
         console.log("up")
     }
     if(keyPressed == '39') {
        right();
        console.log("right")
    }
    if(keyPressed == '40') {
        down();
        console.log("down")
    }
    if(keyPressed=='67'){
        new_image('cloud.jpg');
        console.log("c")
    }
    if(keyPressed=='68'){
        new_image('dark_green.png');
        console.log("d")
    }
    if(keyPressed=='71'){
        new_image('ground.png');
        console.log("g")
    }
    if(keyPressed=='76'){
        new_image('light_green.png');
        console.log("l")
    }
    if(keyPressed=='82'){
        new_image('roof.jpg');
        console.log("r")
    }
    if(keyPressed=='84'){
        new_image('trunk.jpg');
        console.log("t")
    }
    if(keyPressed=='85'){
        new_image('unique.png');
        console.log("u")
    }
    if(keyPressed=='87'){
        new_image('wall.jpg');
        console.log("w")
    }
    if(keyPressed=='89'){
        new_image('yellow_wall.png');
        console.log("y")
    }
   }
   function up(){
       if(player.y>=0){
           player.y=player.y-block_img_height;
           console.log("block_img_height="+block_img_height);
           console.log("The up arrow key has been pressed"+player_x+player_y);
           canvas.remove(player);
           player_update()
       }
       
   }
   function down(){
    if(player.y<=500){
        player.y=player.y+block_img_height;
        console.log("block_img_height="+block_img_height);
        console.log("The down arrow key has been pressed"+player_x+player_y);
        canvas.remove(player);
        player_update()
    }
    
}
function left(){
    if(player.x>=0){
        player.x=player.x-block_img_width;
        console.log("block_img_width="+block_img_width);
        console.log("The left arrow key has been pressed"+player_x+player_y);
        canvas.remove(player);
        player_update()
    }
    
}
function right(){
    if(player.x<=850){
        player.x=player.x-block_img_width;
        console.log("block_img_width="+block_img_width);
        console.log("The right arrow key has been pressed"+player_x+player_y);
        canvas.remove(player);
        player_update()
    }
    
}