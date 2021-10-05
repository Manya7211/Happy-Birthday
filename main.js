var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image() {
	fabric.Image.fromURL("BirthdayImage.jpg", function(img) {block_image__object = Img;
    
    block_image__object.scaleToWidth(700);
    block_image__object.scaleToHeight(510);
    block_image__objectset({
    top: 0,
    left: 0
    });
    canvas.add(block_image__object);
    });
}

function playSound() {
	x.play();
}
