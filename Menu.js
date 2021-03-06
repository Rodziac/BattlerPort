function OnGetScriptMenu(){
	var sMenu="<ScriptMenu>";
	sMenu+="<SubMenu Label=\"Language\">";
	var languages = obTrans.TranslationList();
	for(var i in languages) {
		sMenu+="<MenuEntry Id=\""+languages[i]+"\">"+languages[i]+"</MenuEntry>";
	}
	sMenu+="</SubMenu>";
	obConf.Pref.enabled === "true" ?
		sMenu+="<MenuEntry Id=\"Enabled\">"+obTrans.GetMenu("Menu").GetString("Disable")+"</MenuEntry>" :
		sMenu+="<MenuEntry Id=\"Enabled\">"+obTrans.GetMenu("Menu").GetString("Enable")+"</MenuEntry>";
	sMenu+="<MenuEntry Id=\"Config\">"+obTrans.GetMenu("Menu").GetString("Config")+"</MenuEntry>";
	sMenu+="<MenuEntry Id=\"Shop\">"+obTrans.GetMenu("Menu").GetString("Shop")+"</MenuEntry>";
	sMenu+="<MenuEntry Id=\"Equip\">"+obTrans.GetMenu("Menu").GetString("Equip")+"</MenuEntry>";
	sMenu+="<MenuEntry Id=\"Mons\">"+obTrans.GetMenu("Menu").GetString("Mons")+"</MenuEntry>";
	sMenu+="<MenuEntry Id=\"Moves\">"+obTrans.GetMenu("Menu").GetString("Moves")+"</MenuEntry>";
	sMenu+="<MenuEntry Id=\"Commands\">"+obTrans.GetMenu("Menu").GetString("Commands")+"</MenuEntry>";
	sMenu+="<MenuEntry Id=\"Reload\">"+obTrans.GetMenu("Menu").GetString("Reload")+"</MenuEntry>";
	sMenu+="<MenuEntry Id=\"About\">"+obTrans.GetMenu("Menu").GetString("About")+"</MenuEntry>";
	sMenu+="</ScriptMenu>";
	return sMenu;
}

function OnEvent_MenuClicked(MenuID){
	switch(MenuID){
	case "Enabled": obConf.Pref.enabled = obConf.Pref.enabled === "true" ? "false" : "true"; break;
	case "Reload": settings.LoadScript(); break;
	case "Config": loadPrefsWnd(configWnd = MsgPlus.CreateWnd("XMLWindows.xml","WndConfig")); break;
	case "Shop":  loadShopWnd(shopWnd = MsgPlus.CreateWnd("XMLWindows.xml","WndShop")); break;
	case "Equip":  loadEquipWnd(equipWnd = MsgPlus.CreateWnd("XMLWindows.xml","WndEquip")); break;
	case "Mons":  loadMonWnd(monWnd = MsgPlus.CreateWnd("XMLWindows.xml","WndMons")); break;
	case "Commands":  loadCmdWnd(cmdWnd = MsgPlus.CreateWnd("XMLWindows.xml", "WndCommands")); break;
	case "Moves":  loadMoveWnd(moveWnd = MsgPlus.CreateWnd("XMLWindows.xml","WndMoves")); break;
	case "About": MsgPlus.CreateWnd("XMLWindows.xml","WndAbout"); break;
	default: settings.SetLanguage(MenuID);
	}
}
