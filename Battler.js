//Battler - Battles with MSN, inspired by Pokemon.
//Created by Apotah, <apotah@hotmail.com>.
//Version 5.02, <2012 October 22>.
// http://apotah.zxq.net/battler/

function OnEvent_ChatWndReceiveMessage(ChatWnd, Origin, Message, MsgKind) {

	if (obConf.Pref.enabled === "false") {return;}

	Message = Message.toLowerCase();

	//determine which chat window is being used for the battle; diff chat wnds = diff battles
	for (i = 0; i <= bWnd.length + 1; i++) {
		//if there's a battle in the window that just received a msg, iWnd = that battle's pos. in bWnd
		if (bWnd[i] !== undefined && bWnd[i].Wnd.id === ChatWnd.id) {
			iWnd = i;
			if (Message.substr(0,5) === "ichal" || Message.substr(0, obCmds.Fight.length) === obCmds.Fight) {
				sendMsg(obTrans.GetMessages().GetString("IChalFail"));
				return;
			}
			break;
		}
		//if there's no battle, i = the last empty pos. in bWnd
		else if (bWnd[i] === undefined) {
			iWnd = i;
			//check if the sender actually wanted to start a battle
			if (Message.substr(0,5) === "ichal" || Message.substr(0, obCmds.Fight.length) === obCmds.Fight) {
				bWnd[iWnd] = {
					"Wnd": ChatWnd,
					"Turn": 0,
					"Return": 0,
					Player: [null, {"Name": Origin}, {}]
				};
				sendMsg(obTrans.GetMessages().GetString("IChalSuccess").replace(/PLAYER_NAME/g, Origin));
			}
			return;
		}
	}

	if (Message === "bhelp" || Message === obCmds.Help) {
		sendMsg(obTrans.GetMessages().GetString("BHelp").replace(/SCRIPT_VERSION/g, obConf.Version.current));
	}

	else if ((Message === "qq" || Message === obCmds.Quit) && (bWnd[iWnd].Player[1].Name === Origin || bWnd[iWnd].Player[2].Name === Origin)) {
		if (obConf.Pref.quitOn === "false") {
			sendMsg(obTrans.GetMessages().GetString("QuitDisabled"));
		}
		else {
			sendMsg(obTrans.GetMessages().GetString("Quit").replace(/PLAYER_NAME/g, Origin));
			bWnd.splice(iWnd, 1);
//			if (Origin === Messenger.MyName) {
//				settings.UpdateRecord("quit");
//			}
		}
	}

	else if ((Message.substr(0,2) === "go" && Message.substr(0, obCmds.Go.length) !== obCmds.Go) || Message.substr(0, obCmds.Go.length) === obCmds.Go) {

		var extractStrFrom = 3;
		var	isCustomMon = false;
		if(Message.substr(0, obCmds.Go.length) === obCmds.Go){
			extractStrFrom = obCmds.Go.length + 1;
			if(Message.charAt(obCmds.Go.length) === "!"){
				extractStrFrom += 1;
				isCustomMon = true;
			}
		}
		else if(Message.charAt(2) === "!"){
			extractStrFrom = 4;
			isCustomMon = true;
		}
		strName = Message.substr(extractStrFrom);
		// Debug.Trace(strName);

		if (obConf.Pref.mustBePokemonOn === "true" && PokemonTypes(strName.toUpperCase()) === -1) {
			//MustBePokemon overrides AllowCustomMons
			sendMsg(obTrans.GetMessages().GetString("GoMustBePokemon"));
		}
		else {
			if (bWnd[iWnd].Player[1].Name !== Origin && bWnd[iWnd].Player[2].Name === undefined) {
				bWnd[iWnd].Player[2].Name = Origin;
			}
			for (i = 1; i <= 2; i++) {
				if (bWnd[iWnd].Player[i].Mon !== undefined && bWnd[iWnd].Player[i].Name === Origin) {
					sendMsg(obTrans.GetMessages().GetString("GoAlreadySent").replace(/PLAYER_NAME/, Origin).replace(/MON_NAME/, bWnd[iWnd].Player[i].Mon.Name));
					break;
				}
				else if (bWnd[iWnd].Player[i].Name === Origin && bWnd[iWnd].Player[i].Mon === undefined) {
					if (isCustomMon === true) {
						if (obConf.Pref.customGoOn === "true") {
							if(obMonParty[strName] !== undefined){
								if (obMonParty[strName].Enabled === true) {
									bWnd[iWnd].Player[i].Mon = new LoadMon(obMonParty[strName]);
								}
								else if (obMonParty[strName].Enabled === false) {
									sendMsg(obTrans.GetMessages().GetString("GoCustomMonDisabled"));
									return;
								}
							}
							else {
								sendMsg(obTrans.GetMessages().GetString("GoCustomMonNotExist"));
								return;
							}
						}
						else {
							sendMsg(obTrans.GetMessages().GetString("GoCustomDisabled"));
							return;
						}
					}
					else {
						bWnd[iWnd].Player[i].Mon = new CreateMon(strName);
					}
					Player = bWnd[iWnd].Player[i];
					sendMsg(obTrans.GetMessages().GetString("GoSuccess").replace(/PLAYER_NAME/, Player.Name).replace(/MON_NAME/, Player.Mon.Name) + " " + Player.Mon.HPCur + " HP, " + Player.Mon.Atk + " ATK, " + Player.Mon.Def + " DEF, " + Player.Mon.Spe + " SPE, " + Player.Mon.Spc + " SPC. " + obTrans.GetMessages().GetString("Type") + ": " + displayType(Player.Mon.Type) + ".");
					if (bWnd[iWnd].Return === 0 && ((i === 2 && bWnd[iWnd].Player[1].Mon !== undefined) || (i === 1 && bWnd[iWnd].Player[2].Mon !== undefined))) {
						bWnd[iWnd].Turn = (bWnd[iWnd].Player[1].Mon.Spe >= bWnd[iWnd].Player[2].Mon.Spe) ? 1 : 2;
						sendMsg(obTrans.GetMessages().GetString("GoIsFirst").replace(/MON_NAME/, bWnd[iWnd].Player[bWnd[iWnd].Turn].Mon.Name));
					}
					break;
				}
			}
		}
	}

	else if (Message.substr(0,6) === "return" || Message.substr(0, obCmds.Return.length) === obCmds.Return) {
		if (obConf.Pref.returnOn === "false") {
			sendMsg(obTrans.GetMessages().GetString("ReturnDisabled"));
		}
		else {
			for (i = 1; i <= 2; i++) {
				if (bWnd[iWnd].Player[i].Name === Origin && bWnd[iWnd].Turn === i) {
					sendMsg(obTrans.GetMessages().GetString("Return").replace(/PLAYER_NAME/, Origin).replace(/MON_NAME/, bWnd[iWnd].Player[i].Mon.Name));
					if (bWnd[iWnd].Player[i === 1 ? 2 : 1].Mon.Status.ID === 6) {
						bWnd[iWnd].Player[i === 1 ? 2 : 1].Mon.Status.ID = -1;
					}
					bWnd[iWnd].Player[i].Mon = undefined;
					bWnd[iWnd].Return = i;
					bWnd[iWnd].Turn = bWnd[iWnd].Turn === 1 ? 2 : 1;
					break;
				}
				else if (bWnd[iWnd].Player[i].Name === Origin && bWnd[iWnd].Turn !== i){
					notYourTurn();
				}
			}
		}
	}

	else if((Message.substr(0,3) === "use" && Message.substr(0, obCmds.Attack.length) !== obCmds.Attack) || Message === "heal" || Message.substr(0, obCmds.Attack.length) === obCmds.Attack || Message === obCmds.Heal) {
		if(bWnd[iWnd].Player[bWnd[iWnd].Turn].Name === Origin) {
			var isAttack = true;
			if(Message === "heal" || Message === obCmds.Heal){
				var isAttack = false;
			}
			var offMon = bWnd[iWnd].Player[bWnd[iWnd].Turn].Mon;
			var defMon = bWnd[iWnd].Player[(bWnd[iWnd].Turn === 1 ? 2 : 1)].Mon;
			if(isAttack === true) {
				var atkName = Message.substr(0,3) === "use" ? Message.substr(4) : Message.substr(obCmds.Attack.length + 1);
				var existsInMoveDB = obMoveDB[atkName] === undefined ? false : true;
				if(obConf.Pref.moveDBOnlyOn === "true" && existsInMoveDB === false) {
					sendMsg(obTrans.GetMessages().GetString("UseMoveDBOnly"));
				}
				else {
					attackMon(offMon, defMon, atkName, existsInMoveDB);
				}
			}
			else {
				healMon(offMon);
			}
		}
		else {
			notYourTurn();
		}
	}

	else if ((Message.substr(0,4) === "item" && Message.substr(0, obCmds.Item.length) !== obCmds.Item) || Message.substr(0, obCmds.Item.length) === obCmds.Item) {
		if (obConf.Pref.itemOn === "false") {
			sendMsg(obTrans.GetMessages().GetString("ItemDisabled"));
		}
		else {
			if (bWnd[iWnd].Player[bWnd[iWnd].Turn].Name === Origin) {
				var itemName = Message.substr(0,4) === "item" ? Message.substr(5) :  Message.substr(obCmds.Item.length + 1);
				if(obItemDB[itemName] !== undefined){
					if (obItemDB[itemName].Enabled === true) {
						useItem(bWnd[iWnd].Player[bWnd[iWnd].Turn], itemName, obItemDB[itemName].Eff);
					}
					else if (obItemDB[itemName].Enabled === false) {
						sendMsg(obTrans.GetMessages().GetString("ItemNotAvail"));
					}
				}
				else {
					sendMsg(obTrans.GetMessages().GetString("ItemNotExist"));
				}
			}
			else {
				notYourTurn();
			}
		}
	}
	else if ((Message.substr(0,5) === "equip" && Message.substr(0, obCmds.Equip.length) !== obCmds.Equip) || Message.substring(0, obCmds.Equip.length) === obCmds.Equip) {
		if (obConf.Pref.equipOn === "false") {
			sendMsg(obTrans.GetMessages().GetString("EquipDisabled"));
		}
		else {
			if (bWnd[iWnd].Player[bWnd[iWnd].Turn].Name === Origin) {
				var itemName = Message.substr(0,5) === "equip" ? Message.substr(6) :  Message.substr(obCmds.Equip.length + 1);
				if(obEquipDB[itemName] !== undefined){
					if (obEquipDB[itemName].Enabled === true) {
						equipItem(bWnd[iWnd].Player[bWnd[iWnd].Turn].Mon, itemName, obEquipDB[itemName].Eff, obEquipDB[itemName].Text);
					}
					else {
						sendMsg(obTrans.GetMessages().GetString("ItemNotAvail"));
					}
				}
				else{
					sendMsg(obTrans.GetMessages().GetString("ItemNotExist"));
				}
			}
			else {
				notYourTurn();
			}
		}
	}
	else if (Message === "unequip" || Message === obCmds.Unequip) {
		if (bWnd[iWnd].Player[bWnd[iWnd].Turn].Name === Origin) {
			unequipItem(bWnd[iWnd].Player[bWnd[iWnd].Turn].Mon);
		}
		else {
			notYourTurn();
		}
	}
}

function OnEvent_ChatWndSendMessage(ChatWnd, sMessage) {
	if (sMessage === "\/battler") {
		obConf.Pref.enabled = obConf.Pref.enabled === "true" ? "false" : "true";
		return "";
	}
	else if (sMessage === "\/battlerrecord") {
		var total = (obConf.Record.win + obConf.Record.lose + obConf.Record.quit) / 100;
		if(total === 0){
			total = 1;
		}
		var sMsg = obTrans.GetMessages().GetString("RecordWins") + ": " + obConf.Record.win + " (" + Math.round(obConf.Record.win / total) + "%) " + obTrans.GetMessages().GetString("RecordLosses") + ": " + obConf.Record.lose + " (" + Math.round(obConf.Record.lose / total) + "%) " + obTrans.GetMessages().GetString("RecordQuits") + ": " + obConf.Record.quit + " (" + Math.round(obConf.Record.quit / total) + "%) ";
		ChatWnd.SendMessage(obConf.Pref.msgFormat[0] + "*" + sMsg + obConf.Pref.msgFormat[1]);
		return "";
	}
	else if (sMessage === "\/battleritems") {
		loadShopWnd(shopWnd = MsgPlus.CreateWnd("XMLWindows.xml", "WndShop"));
		return "";
	}
	else if (sMessage === "\/battlerequip") {
		loadEquipWnd(equipWnd = MsgPlus.CreateWnd("XMLWindows.xml", "WndEquip"));
		return "";
	}
	else if (sMessage === "\/battlerprefs") {
		loadPrefsWnd(configWnd = MsgPlus.CreateWnd("XMLWindows.xml", "WndConfig"));
		return "";
	}
	else if (sMessage === "\/battlermons") {
		loadMonWnd(monWnd = MsgPlus.CreateWnd("XMLWindows.xml", "WndMons"));
		return "";
	}
	else if (sMessage === "\/battlermoves") {
		loadMoveWnd(moveWnd = MsgPlus.CreateWnd("XMLWindows.xml", "WndMoves"));
		return "";
	}
	else if (sMessage === "\/battlercmds") {
		loadCmdWnd(cmdWnd = MsgPlus.CreateWnd("XMLWindows.xml", "WndCommands"));
		return "";
	}
	else if (sMessage.substring(0, 5) === "\/dmg ") {
		CHEAT = parseInt(sMessage.substr(5), 10);
		return "";
	}
}
