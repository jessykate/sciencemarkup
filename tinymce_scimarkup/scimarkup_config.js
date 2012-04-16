/*
 * Example config for using tiny mce with science markup. the plugin will not
 * work without the correct configuration!
 *
 * Incorporate these settings into your own tinymce configuration, or include
 * the config file using a standard script tag, eg. 
	<script type="text/javascript" src="some/path/scimarkup_config.js"></script>
 *
 * */

tinyMCE.init({
	// will attach to all textareas. configurable by user. 
	mode : "textareas",
	// advanced theme is required for using plugins
	theme: "advanced",
	/* you have to separately include the plugin and its button! the button
	 * name is registered under ed.addButton in the plugin source. */
	theme_advanced_buttons2 : "questionmarkup, code",
	theme_advanced_buttons3 : "",
	plugins: "inlinepopups, sciencemarkup",
	// purely aesthetic - make the default font more readable
	content_css : "tinymce_style.css",
	/* science markup uses non-standard HTML markup, so we need to extend the
	 * set of valid elements otherwise the editor will strip them from the
	 * text. see docs:
	 * http://www.tinymce.com/wiki.php/Configuration:extended_valid_elements 
	 * */
	extended_valid_elements: "@[itemscope|itemtype|itemid|itemprop|content],div,span,time[datetime]",
	// microdata is commonly used with html5 tags, so include support for them. 
	schema: "html5"
});
