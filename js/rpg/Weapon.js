/*hérite d'item*/
function Weapon extends Item
{
	constructor(data)
	{
		super([data]);
		this.power = data.power;
	}
}
	
	