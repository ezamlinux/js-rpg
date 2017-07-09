class Wizard extends Personnage
{
	constructor(data)
	{
		super(data);
		this._mana = data.mana;		
	}

	setWandstick(wandstick)
	{
		this._wandstick = wandstick;
	}

	getWandstick()
	{
		return this._wandstick;
	}

	getMana()
	{
		return this._mana;
	}

	attack(param_ennemy){
		var booster = Math.round( Math.random() * 10 );
		
		if( this._wandstick != null && this._mana >= this._wandstick.consoMana)
		{
			console.log(this.nom, "attaque", param_ennemy.nom, "avec", this._wandstick.nom);
			param_ennemy.getDamages(this._wandstick.power + booster);
			this._mana -= this._wandstick.consoMana;
		}
		else
		{
			console.log(this.nom, "attaque", param_ennemy.nom, "avec ses poings ");
			param_ennemy.getDamages(this._degats);
		}
	}
}