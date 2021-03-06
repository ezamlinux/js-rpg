class Map
{
	constructor(cols, rows, container)
	{
		this.cols 		= cols;
		this.rows 		= rows;
		this.tiles		= new Array();
		this.width		= cols * CASE_WIDTH;
		this.height		= rows * CASE_HEIGHT;
		this.container  = container;
	}

	_getContainer()
	{
		return this.container;
	}

	getTileByRowAndCol(row, col)
	{
		var i = this.tiles.length;
		
		while( --i > -1 )
		{
			if( this.tiles[i].row == row && this.tiles[i].col == col )
				return this.tiles[i];
		}
		
		return null;
	}

	addPersonnage(personnage)
	{
		var mapContainer 	= this._getContainer();
		mapContainer.append( personnage.getHTMLNode() );
	}

	generate(param_data)
	{
		var id 				= null;
		var groundMap 		= param_data.ground;
		var mapContainer 	= this._getContainer();
		var currentTile		= null;
		var row				= 0;
		var col				= 0;
		var groundMapLength = groundMap.length;
		
		for(row = 0; row < groundMapLength; row++) // ROW
		{
			for(col = 0; col < groundMap[row].length; col++) // COL
			{
				id = groundMap[row][col];
				
				currentTile = new Tile(
										row, 
										col, 
										param_data.tabCorrespondance[id].imgUrl,
										param_data.tabCorrespondance[id].walkable
									);
									
				this.tiles.push(currentTile);
									
				mapContainer.append(currentTile.getHTMLNode());
			}
		}
	}
}

