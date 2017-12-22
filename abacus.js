/* border: 10px solid brown;width: 650px; 650 / 13 = 50 height: 250px;*/
function draw() {
	
	var canvas = document.getElementById('abacus');
	if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
			
		/* vertical bars */
		ctx.beginPath();
		ctx.lineWidth = 2;
		for (var i = 0; i < 14; i++) {
		
			ctx.moveTo(20 + 20 * i, 0);
			ctx.lineTo(20 + 20 * i, 150);
		
		}
		ctx.stroke();
	
		/* beads */
		ctx.beginPath();
		ctx.lineWidth = 1;
		for (var i = 0; i < 14; i++) {
			//ctx.moveTo(20 + 20 * i, 20);
			ctx.arc(60, 25, 5, 0, Math.PI * 2, true); 
			ctx.arc(40, 65, 5, 0, Math.PI * 2, true); 
		}
		ctx.fill();
		
		/* horizontal bar */
		ctx.beginPath();
		ctx.lineWidth = 6;
		ctx.moveTo(0,40);
		ctx.lineTo(650,40);
		ctx.stroke();
		
	}
}

function ball() {

}

