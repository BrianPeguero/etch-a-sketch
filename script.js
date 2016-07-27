	function createGrid(numbOfSquares){
		for(var j = 0; j < numbOfSquares; j++){
			var row = $("<div class='row'></div>");
			for (var i = 0; i < numbOfSquares; i++) {
				$(row).append("<div class='square'></div>");
			};
			$("#container").append(row);
		};
	};

	function getRandomColor() {
    	var letters = '0123456789ABCDEF'.split('');
    	var color = '#';
    	for (var i = 0; i < 6; i++ ) {
    	    color += letters[Math.floor(Math.random() * 16)];
    	};
    	return color;
	};

	function updateGrid(){
		var grid = prompt("Enter a new grid size");

		$(".square").remove();
		$(".row").remove();

		return grid;
	};

	function sizeBox(grid){
		var width = 1050/grid;
		var height = 544/grid;
		$(".square").css("width", width + "px");
		$(".square").css("height", height + "px");
	};

$(document).ready(function(){
	createGrid(16);
	sizeBox(16);

	$(".square").hover(function(){
		$(this).css("background-color", getRandomColor());
	});

	$("#clearButton").click(function(){
		$(".square").css("background-color", "#ffffff")
	});

	$("#newGrid").click(function(){
		var grid = updateGrid();
		createGrid(grid);
		sizeBox(grid);

		$(".square").hover(function(){
			$(this).css("background-color", getRandomColor());
		});
		$("#clearButton").click(function(){
			$(".square").css("background-color", "#ffffff")
		});
	});		
});