var iniIntf = {
	savedInis: {},
	DeleteHeader: function (filename, header) {
	//The following Read/Write/Del code was taken and modified from a post within the MsgPlus! forums http://www.msghelp.net/showthread.php?tid=83351&pid=904319#pid904319
		Interop.Call("kernel32", "WritePrivateProfileSectionW", header.toString(), 0, MsgPlus.ScriptFilesPath + "\\config\\" + filename + ".ini")
	},
	DeleteKey: function (filename, header, key) {
		Interop.Call("kernel32", "WritePrivateProfileStringW", header.toString(), key.toString(), 0, MsgPlus.ScriptFilesPath + "\\config\\" + filename + ".ini")
	},
	WriteIni: function (filename, header, key, value) {
		this.savedInis[filename][header][key] = value;
	},
	ReadIni: function (filename, header, key, default_value) {
		return this.getIniObject(filename)[header][key] || default_value;
	},
	ToObject: function(filename) {
		return this.getIniObject(filename);
	},
	convertToObject: function (data) {
	//The following ToObject code was taken and modified from http://mpscripts.net/code.php?id=12
		var regex = {
	        section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
	        param: /^\s*([\w\.\-\_]+)\s*=\s*(.*?)\s*$/,
	        comment: /^\s*;.*$/
	    };
	    var value = {};
	    var lines = data.split(/\r\n|\r|\n/);
	    var section = null;
	    lines.forEach(function(line){
	        if(regex.comment.test(line)){
	            return;
	        }else if(regex.param.test(line)){
	            var match = line.match(regex.param);
	            if(section){
	                value[section][match[1]] = match[2];
	            }else{
	                value[match[1]] = match[2];
	            }
	        }else if(regex.section.test(line)){
	            var match = line.match(regex.section);
	            value[match[1]] = {};
	            section = match[1];
	        }else if(line.length == 0 && section){
	            section = null;
	        };
	    });
	    return value;
	},
	getIniObject: function(filename) {
		if (this.savedInis[filename]) {
			return this.savedInis[filename];
		} else {
			this.savedInis[filename] = this.convertToObject(this.getIni(filename));
			return this.savedInis[filename];
		}
	},

	getIni: function(iniName) {
		switch(iniName) {
			case "settings":
				return settingsDb;
			case "equipDB":
				return equipDb;
			case "itemDB":
				return itemDb;
			case "monParty":
				return monPartyDb;
			case "moveDB":
				return moveDb;
			default:
				debugger;
		}
	}
};
