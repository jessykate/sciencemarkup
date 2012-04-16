tinyMCEPopup.requireLangPack();

var QuestionDialog = {
	init : function() {
		var f = $("#questionmarkupform");
		// Fill in the selected contents from the editor and any configuration
		// defaults. 
		$("#questioncontent").val(tinyMCEPopup.editor.selection.getContent({format : 'text'}));
		$("#questionauthor").val(tinyMCEPopup.getWindowArg('default_author'));
		$("#questionlicense").val(tinyMCEPopup.getWindowArg('default_license'));
	},

	insert : function() {
		// Insert the contents from the input into the document
		// TODO: compute a hash

		var d = new Date();
		var datetime = d.toString();

		var markup = "<span itemscope itemtype=\"http://sciencemarkup.org/microdata/vocab/question\" itemid=\"\">\n";
		markup += "<time itemprop=\"created\" datetime=\""+ datetime +"\"></time>\n";
		if ($("#questionauthor").val() != "") {
			markup += "<meta itemprop=\"author\" content=\"" + $("#questionauthor").val() + "\" />\n";
		}
		if ($("#questiontopic").val() != "") {
			markup += "<meta itemprop=\"topic\" content=\"" + $("#questiontopic").val() + "\" />\n";
		}
		if ($("#questiontags").val() != "") {
			var tags = $("#questiontags").val().split(",");
			for (var i in tags) {
				markup += "<meta itemprop=\"tag\" content=\"" + tags[i] + "\" />\n";
			}
		}
		if ($("#questionrefid").val() != "") {
			markup += "<meta itemprop=\"author\" content=\"" + $("#questionrefid").val() + "\" />\n";
		}
		markup += "<span itemprop=\"content\">" + $("#questioncontent").val() + "</span>\n";
		markup += "</span>"; // end question markup

		// display the raw markup in the DOM
		var parent = tinyMCEPopup.getWin();
		parent.$("#markup").html("<h1>Markup</h1><pre id=\"raw\"></pre>\n");
		parent.$("#raw").text(markup);
		
		// insert the actual markup in to the editor window. 
		tinyMCEPopup.editor.execCommand('mceInsertContent', false, markup);
		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(QuestionDialog.init, QuestionDialog);
