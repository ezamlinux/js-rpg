class MagicWand extends Item
{
	constructor(data)
	{
		super([data]);
		this.power 		= data.power;
		this.consoMana 	= data.consoMana;
	}
}