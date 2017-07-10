/*hérite d'item*/
function ManaPotion extends Item
{
	constructor
	{
		super([data.nom,data.type,data.price,data.weight]);
		this.restoration = data.restoration;
	}
}