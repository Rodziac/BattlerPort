function useItem(Player, itemName, itemEff) {
	var oMon = Player.Mon;
	sendMsg(obTrans.GetMessages().GetString("ItemUsed").replace(/PLAYER_NAME/, Player.Name).replace(/ITEM_NAME/, itemName.toUpperCase()));
	var a = itemEff.match(/([amp]\d[\+\-]\d*)|(h\d*)|c|s\d*/gi);
	for (i = 0; i < a.length; i++) {
		switch (a[i].charAt(0)) {
		case "a":
			statMod.Set.Absolute(oMon, parseInt(a[i].charAt(1), 10), parseInt(a[i].slice(2), 10));
			break;
		case "m":
			statMod.Set.Relative(oMon, parseInt(a[i].charAt(1), 10), parseInt(a[i].slice(2), 10));
			break;
		case "p":
			statMod.Set.Percent(oMon, parseInt(a[i].charAt(1), 10), parseInt(a[i].slice(2), 10));
			break;
		case "h":
			i = a[i].charAt(1) === "0" ? Math.ceil(parseInt(a[i].slice(2), 10) * oMon.HPMax / 100) : parseInt(a[i].slice(2), 10);
			oMon.HPCur + i > oMon.HPMax ? oMon.HPCur = oMon.HPMax : oMon.HPCur += i;
			sendMsg(obTrans.GetMessages().GetString("HealSuccess").replace(/MON_NAME/, oMon.Name).replace(/NUMBER/, i));
			displayHP(oMon);
			break;
		case "c":
			oMon.Status.ID = -1;
			sendMsg(obTrans.GetMessages().GetString("StatusCured").replace(/MON_NAME/, oMon.Name));
			break;
		case "s":
			gameStatus.Set(oMon, parseInt(a[i].charAt(1)));
			break;
		}
	}
	gameStatus.EndCheck(oMon);
	changeTurn(bWnd[iWnd].Turn, oMon, bWnd[iWnd].Player[bWnd[iWnd].Turn === 1 ? 2 : 1].Mon);
}

function equipItem(oMon, itemName, itemEff, itemMsg) {
	if (oMon.Equip.Name === "") {
		oMon.Equip.Name = itemName;
		oMon.Equip.Eff = itemEff;
		sendMsg(obTrans.GetMessages().GetString("ItemEquipped").replace(/MON_NAME/, oMon.Name).replace(/ITEM_NAME/, itemName.toUpperCase()) + " " + itemMsg);
		var a = itemEff.match(/[amp]\d[\+\-]\d*|s\d*/gi);
		if(a !== null){
			for (var i = 0; i < a.length; i++) {
				switch (a[i].charAt(0)) {
				case "a":
					statMod.Set.Absolute(oMon, parseInt(a[i].charAt(1), 10), parseInt(a[i].slice(2), 10));
					break;
				case "m":
					statMod.Set.Relative(oMon, parseInt(a[i].charAt(1), 10), parseInt(a[i].slice(2), 10));
					break;
				case "p":
					statMod.Set.Percent(oMon, parseInt(a[i].charAt(1), 10), parseInt(a[i].slice(2), 10));
					break;
				case "s":
					gameStatus.Set(oMon, parseInt(a[i].charAt(1)));
					break;
				}
			}
		}
		changeTurn(bWnd[iWnd].Turn, oMon, bWnd[iWnd].Player[bWnd[iWnd].Turn === 1 ? 2 : 1].Mon);
	}
	else {
		sendMsg(obTrans.GetMessages().GetString("AlreadyEquipped"));
	}
}

function unequipItem(oMon) {
	if (oMon.Equip.Name !== "") {
		sendMsg(obTrans.GetMessages().GetString("ItemUnequipped").replace(/MON_NAME/, oMon.Name).replace(/ITEM_NAME/, oMon.Equip.Name.toUpperCase()));
		//Reverse stat changes
		a = oMon.Equip.Eff.match(/[amp]\d[\+\-]\d*/gi);
		if(a !== null){
			for (i = 0; i < a.length; i++) {
				switch (a[i].charAt(0)) {
				case "a":
					statMod.Set.Absolute(oMon, parseInt(a[i].charAt(1), 10), - parseInt(a[i].slice(2), 10));
					break;
				case "m":
					statMod.Set.Relative(oMon, parseInt(a[i].charAt(1), 10), - parseInt(a[i].slice(2), 10));
					break;
				case "p":
					statMod.Set.Percent(oMon, parseInt(a[i].charAt(1), 10), - parseInt(a[i].slice(2), 10));
					break;
				}
			}
		}
		oMon.Equip.Name = "";
		oMon.Equip.Eff = "";
	}
	else {
		sendMsg(obTrans.GetMessages().GetString("NoEquip"));
	}
}
