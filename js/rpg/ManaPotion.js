class ManaPotion extends Item
{
	constructor(data)
	{
		super([data.nom,data.type,data.price,data.weight]);
		this.restoration = data.restoration;
	}
}