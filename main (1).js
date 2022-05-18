
var canvas = new fabric.canvas('myCanvas');

ball_y = 0;
ball_x = 0;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		player_object = Img;
	
		hole_obj.scaleToWidth(150);
		hole_obj.scaleToHeight(140);
		hole_obj.set({
		top:hole_y,
		left:hole_x
		});
		canvas.add(hole_obj);
	
		});
	
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("golf-h.png", function(Img) {
		player_object = Img;
	
		ball_obj.scaleToWidth(150);
		ball_obj.scaleToHeight(140);
		ball_obj.set({
		top:ball_y,
		left:ball_x
		});
		canvas.add(hole_obj);
	
		});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ball_x==hole_x)&&(ball_y==hole_y)){
       canvas.remove(ball.obj);
	   document.getElementById("hd3").innerHTML = "Lo lograste";
	   document.getElementById("myCanvas").style.borderColor = "red";
	}
	
	 else {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(player_y >=0)
		{
			player_y = player_y - block_image_height;
			console.log("altura del bloque = " + block_image_height);
			console.log("Cuando se presiona la flecha hacia arriba, X =  " + player_x + " , Y = "+player_y);
			canvas.remove(player_object);
			player_update();
		}
	}

	function down()
	{
		if(ball_y <=450)
	{
		ball_y = ball_y - block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
	}

	function left()
	{
		if(ball_x >5)
		{
		ball_y = ball_y - block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia izquierda, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_obj);
		new_image();
	
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_y = ball_y - block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia la derecha, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_obj);
		new_image();
		}
	}
	
}
 }