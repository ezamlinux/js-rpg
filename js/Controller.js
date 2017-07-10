class Controller
{
	constructor(param_movelaps, param_timelaps, param_timeOutId, param_map, param_perso)
	{
		this.moveLaps = param_movelaps;
		this.timeLaps = param_timelaps;
		this.timeOutId = param_timeOutId;
		this._perso = param_perso;
		this._map = param_map;
	}
	
	stop()
	{
		window.clearTimeout(this.timeOutId);
	}

	moveRight()
	{	
		var map = this._map;
		var perso = this._perso;
		if(	perso.x <= ( map.width - perso.width - this.moveLaps ) 	&& 
			this.isWalkable(perso.x + this.moveLaps,perso.y, CASE_WIDTH, CASE_HEIGHT)
		) 
		{
			perso.moveRight(this.moveLaps);
			this.stop();
			this.timeOutId = setTimeout(this.moveRight.bind(this), this.timeLaps);
		}
	}

	moveLeft()
	{
		var map = this._map;
		var perso = this._perso;
		if(	( perso.x + this.moveLaps ) >= 0 	&& 
			this.isWalkable(perso.x - this.moveLaps,perso.y, CASE_WIDTH, CASE_HEIGHT)
		) 
		{
			perso.moveLeft(this.moveLaps);
			this.stop();
			this.timeOutId = setTimeout(this.moveLeft.bind(this), this.timeLaps);
		}

	}

	moveTop()
	{
		var map = this._map;
		var perso = this._perso;
		if( ( perso.y - this.moveLaps ) >= 0 && this.isWalkable(perso.x,perso.y - this.moveLaps, CASE_WIDTH, CASE_HEIGHT))
		{
			perso.moveTop(this.moveLaps);
			this.stop();
			this.timeOutId = setTimeout(this.moveTop.bind(this), this.timeLaps );
		}
	}

	moveBottom()
	{
		var map = this._map;
		var perso = this._perso;
		if(
			( perso.y + this.moveLaps + perso.height ) <= map.height  && 
			this.isWalkable(perso.x ,perso.y + this.moveLaps, CASE_WIDTH, CASE_HEIGHT) 
		) 
		{
			perso.moveBottom(this.moveLaps);
			this.stop();
			this.timeOutId = setTimeout(this.moveBottom.bind(this), this.timeLaps);

		}
	}

	getCollideCases(x_perso, 
					y_perso, 
					width_perso, 
					height_perso, 
					width_case, 
					height_case
	)
	{
		var tab = new Array();
		tab.push( 
		
			this._map.getTileByRowAndCol(
				parseInt(y_perso / height_case),
				parseInt(x_perso / width_case)
			),
			this._map.getTileByRowAndCol(
				 parseInt(y_perso / height_case),
				parseInt( (x_perso + width_perso) / width_case)
			),
			this._map.getTileByRowAndCol(
				parseInt( ( y_perso + height_perso) / height_case),
				parseInt(x_perso / width_case)
			),
			this._map.getTileByRowAndCol(
				parseInt( ( y_perso + height_perso ) / height_case),
				parseInt( ( x_perso + width_perso ) / width_case)
			)
		);

		return tab;
	}

	isWalkable(param_x,param_y, param_width, param_height) 
	{
		var	tableau = this.getCollideCases(param_x, param_y, perso.width ,perso.height, CASE_WIDTH, CASE_HEIGHT );
		var currentCase = null;
		var xcase = 0;
		var ycase = 0;
		var x2case = 0;
		var y2case = 0;
		
		for ( var i = 0; i < tableau.length ; i++)
		{
			currentCase = tableau[i];
			
			if( currentCase.walkable == true )
				continue;
			
			xcase = currentCase.col * CASE_WIDTH;
			x2case = xcase + CASE_WIDTH;
			
			ycase = currentCase.row * CASE_HEIGHT;
			y2case = ycase + CASE_HEIGHT;
			
			
			if(	 param_x >= x2case 					|| 
				( param_x + param_width ) <= xcase 	|| 
				param_y >= y2case					|| 
				( param_y + param_height ) <= ycase
			)
			{
				continue;
			}
			
			return false;		
		}
		return true;
	}
}

