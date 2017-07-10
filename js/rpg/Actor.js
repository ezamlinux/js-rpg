class Actor
{
	constructor(obj)
	{
		this.img			= obj.img;
		this._frameTime		= parseInt(obj.frameTime);
		this._elem			= document.createElement("div");
		this._states		= obj.states;
		this._animations	= obj.animations;
		this._anim 			= this._animations[obj.anim];
		this.currentState 	= this._anim[1];
		this.x 				= 0;
		this.y 				= 0;
		this.width 			= 1;
		this.height 		= 1;
		this._frame 		= 0;
		this._time 			= 0;
	}
	
	getHTMLNode()
	{
		return this._elem;
	}

	_getStateInfo()
	{
		if( this.currentState == null || 
			this._states[this.currentState] == undefined 
		)
		{
			return null;
		}
		
		return this._states[this.currentState];
	}

	draw()
	{
		var time	= new Date().getTime();
		var state 	= this._getStateInfo();
		var decalX 	= 0;
		var decalY 	= 0;
		var width 	= 0;
		var height 	= 0;
		var node	= this.getHTMLNode();
		
		if( time - this._time > this._frameTime )
		{

			this._frame++;
			
			if( this._frame >= this._anim.length )
			{
				this._frame = 0;
			}
			
			this.currentState = this._anim[this._frame];
			
			this._time = time;
		}
		
		if( state != null )
		{
			decalX 	= -state.x;
			decalY 	= -state.y;
			width	= state.width;
			height	= state.height;
		}
			
		node.style.zIndex 				= 50;
		node.style.width 				= width + 'px';
		node.style.height 				= height + 'px';
		node.style.position				= "absolute";
		node.style.top					= this.y + 'px';
		node.style.left					= this.x + 'px';
		node.style.backgroundImage 		= "url('" + this.img + "')";
		node.style.backgroundPosition 	= decalX + "px " + decalY + "px";
	}
	
	moveLeft(param_value)
	{
		this._anim = this._animations["walk_left"];
		this.x -= param_value;
		this.draw();
	}

	moveRight(param_value)
	{
		this._anim = this._animations["walk_right"];
		this.x += param_value;
		this.draw();
	}

	moveBottom(param_value)
	{
		this._anim = this._animations["walk_bottom"];
		this.y += param_value;
		this.draw();
	}

	moveTop(param_value)
	{
		this._anim = this._animations["walk_up"];
		this.y -= param_value;
		this.draw();
	}
}
