class Tile
{
	constructor(row, col, img, walkable)
	{
		this.row = row;
		this.col = col;
		this.img = img;
		this.walkable = walkable;
		this._elem = document.createElement("div");
		this.draw();
	}

	getHTMLNode()
	{
		return this._elem;
	}

	draw()
	{
		var node = this.getHTMLNode();

		node.setAttribute( "class", "tile" );
		node.setAttribute( "id", "r-" + this.row + "-c-" + this.col );
		node.style.backgroundImage 	= 'url("'+ this.img +'")';
		node.style.left 			= this.col * CASE_WIDTH + "px";
		node.style.top 				= this.row * CASE_HEIGHT + "px";
		node.style.zIndex 			= 10;
	}
}