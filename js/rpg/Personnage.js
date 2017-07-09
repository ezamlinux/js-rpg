class Personnage extends Actor
{
	constructor(obj)
	{
		super(obj);
		this.nom 			= obj.nom;
		this.metier 		= obj.metier;
		this._pv 			= obj.pv;
		this._defMagic 		= obj.defMagic;
		this._defPhy 		= obj.defPhy;
		this._degats 		= obj.degats;
	}

	setPv(value){
		this._pv = value;
	}

	getPv(){
		return this._pv;
	}

	setDefMagic(value){
		this._defMagic = value;
	}

	getDefMagic(){
		return this._defMagic;
	}

	setDefPhy(value){
		this._defPhy = value;
	}

	getDefPhy(){
		return this._defPhy;
	}


	talk(){
		alert("Je parle");
	}

	getDamages(x){
		this._pv -= x;
	}

	isDead(){
		return this._pv <= 0;
	}
}