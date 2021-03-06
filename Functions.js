//No, none of the filenames make any sense.

function CreateMon(strName) {
	this.Name = strName === "" ? randomPokemon().toUpperCase() : strName.toUpperCase();
	this.Atk = randomStat(obConf.Stat.AtkMin, obConf.Stat.AtkMax);
	this.Def = randomStat(obConf.Stat.DefMin, obConf.Stat.DefMax);
	this.Spe = randomStat(obConf.Stat.SpeMin, obConf.Stat.SpeMax);
	this.Spc = randomStat(obConf.Stat.SpcMin, obConf.Stat.SpcMax);
	this.HPMax = randomStat(obConf.Stat.HPMin, obConf.Stat.HPMax);
	this.HPCur = this.HPMax;
	this.Type = PokemonTypes(this.Name);
	this.Mod = [0, 0, 0, 0];
	this.Status = {
		"ID": -1,
		"Recharge": 0
	};
	this.Equip = {
		"Name": "",
		"Eff": ""
	};
}

function LoadMon(obMon) {
	this.Name = obMon.Name.toUpperCase();;
	this.Atk = parseInt(obMon.Atk);
	this.Def = parseInt(obMon.Def);
	this.Spe = parseInt(obMon.Spe);
	this.Spc = parseInt(obMon.Spc);
	this.HPMax = parseInt(obMon.HPMax);
	if(this.Atk === 0){this.Atk = randomStat(obConf.Stat.AtkMin, obConf.Stat.AtkMax);}
	if(this.Def === 0){this.Def = randomStat(obConf.Stat.DefMin, obConf.Stat.DefMax);}
	if(this.Spe === 0){this.Spe = randomStat(obConf.Stat.SpeMin, obConf.Stat.SpeMax);}
	if(this.Spc === 0){this.Spc = randomStat(obConf.Stat.SpcMin, obConf.Stat.SpcMax);}
	if(this.HPMax === 0){this.HPMax = randomStat(obConf.Stat.HPMin, obConf.Stat.HPMax);}
	//this.HPCur = parseInt(obMon.HPCur,10);
	this.HPCur = this.HPMax;
	this.Type = obMon.Type;
	this.Mod = [0, 0, 0, 0];
	this.Status = {
		"ID": parseInt(obMon.Status),
		"Recharge": 0
	};
	this.Equip = {
		"Name": "",
		"Eff": ""
	};
}

function randomStat(min, max){
	return Math.ceil(rand() * (max - min) + min);
}

function sendMsg(sMsg) {
	bWnd[iWnd].Wnd.SendMessage(obConf.Pref.msgFormat[0] + "*" + sMsg + obConf.Pref.msgFormat[1]);
}

function displayHP(Mon) {
	sendMsg(Mon.Name + ": " + Mon.HPCur + "\/" + Mon.HPMax + " HP");
}

function displayType(aType) {
	if (obConf.Pref.displayTypesOn === "true") {
		return (obTrans.Types().GetString(aType[0]) + (aType[1] !== undefined ? ("," + obTrans.Types().GetString(aType[1])) : "")).toUpperCase();
	}
	else {
		return "???";
	}
}

function changeTurn(Turn, offMon, defMon) {
	//Debug.Trace("mon that just attacked was player "+Turn);
	if (defMon.HPCur > 0 && offMon.HPCur > 0) {
		bWnd[iWnd].Turn = (Turn === 1 ? 2 : 1);
		//Debug.Trace("switching to player "+bWnd[iWnd].Turn);
		if (defMon.Status.Recharge === 1) {
			defMon.Status.Recharge = 0;
			bWnd[iWnd].Turn = (bWnd[iWnd].Turn === 1 ? 2 : 1);
			//Debug.Trace("that player is recharging, switch back to player "+bWnd[iWnd].Turn);
			sendMsg(obTrans.GetMessages().GetString("MustRecharge").replace(/MON_NAME/, defMon.Name));
		}
	}
	else {
		if (offMon.HPCur <= 0) { //check the attackers's HP first, if both are 0, the defender wins
			var loser = bWnd[iWnd].Player[Turn].Name;
			var winner = bWnd[iWnd].Player[Turn === 1 ? 2 : 1].Name;
		}
		else {
			var loser = bWnd[iWnd].Player[Turn === 1 ? 2 : 1].Name;
			var winner = bWnd[iWnd].Player[Turn].Name;
		}
		sendMsg(obTrans.GetMessages().GetString("BattleEnd").replace(/PLAYER1_NAME/, winner).replace(/PLAYER2_NAME/, loser));
		bWnd.splice(iWnd, 1);
//		if (winner === "player1") {
//			settings.UpdateRecord("win");
//		}
//		else if (loser === "player1") {
//			settings.UpdateRecord("lose");
//		}
	}
}

function notYourTurn() {
	sendMsg(obTrans.GetMessages().GetString("NotYourTurn"));
}

function sanitizeStr(str) {
	return str.replace(/\[/g, "").replace(/\]/g, "").replace(/\;/g, "").replace(/\=/g, "");
}
