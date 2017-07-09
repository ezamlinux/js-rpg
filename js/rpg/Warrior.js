class Warrior extends Personnage
{
	constructor(data)
	{
		super(data);
	}
	
	setWeaponRight(weapon)
	{
		this._weaponRight = weapon;
	}

	getWeaponRight()
	{
		return this._weaponRight;
	}

	setWeaponLeft(weapon)
	{
		this._weaponLeft = weapon;
	}

	getWeaponLeft()
	{
		return this._weaponLeft;
	}
	
	attack(param_ennemy)
	{	
		if(this._weaponLeft != null)
		{
			console.log(this.nom, "attaque", param_ennemy.nom, "avec", this._weaponLeft.nom);
			param_ennemy.getDamages(this._weaponLeft.power);		
		}
		if(this._weaponRight != null)
		{
			console.log(this.nom, "attaque", param_ennemy.nom, "avec", this._weaponRight.nom);
			param_ennemy.getDamages(this._weaponRight.power);
		}
		else
		{
			console.log(this.nom, "attaque", param_ennemy.nom, "avec ses poings");
			param_ennemy.getDamages(this._degats);
		}
	}
}

