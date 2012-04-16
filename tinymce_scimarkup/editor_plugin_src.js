/* 
 * this src file has to be compressed (eg. using http://javascriptcompressor.com/) 
 * and the compressed version saved as editor_plugin.js in order for the plugin 
 * to work. 
 */

(function() {
        tinymce.create('tinymce.plugins.ScienceMarkup', {
				/** Initializes the plugin, this will be executed after the
				 * plugin has been created.  This call is done before the
				 * editor instance has finished it's initialization so use the
				 * onInit event of the editor instance to intercept that event.
                 *
				 * @param {tinymce.Editor} ed Editor instance that the plugin
				 * is initialized in.
				 * @param {string} url Absolute URL to where the plugin is
				 * located.
                 */
                init : function(ed, url) {
			// Register the command so that it can be invoked by
			// using tinyMCE.activeEditor.execCommand('mceQuestionMarkup');
                        ed.addCommand('mceQuestionMarkup', function() {
                                ed.windowManager.open({
					// "file" is the core of the plugin. make sure the path 
					// reflects the path to the plugin on your server. 
                                        file : '/tinymce_scimarkup/question-dialog.html',
                                        width : 400 + ed.getLang('sciencemarkup.delta_width', 0),
                                        height : 300 + ed.getLang('sciencemarkup.delta_height', 0),
                                        inline : 1
                                }, {
					// Plugin absolute URL
                                        plugin_url : '/tinymce_markup', 
					inline: 1,
					// USER CUSTOM ARGS! access in plugin via 
					// tinyMCEPopup.getWindowArg('some_custom_arg');
					default_author: "Jessy Kate Schingler",
					default_license: "CC-BY-SA-NC"
                                });
                        });

			// Register a button for the question markup to show up
			// in the tinymce editor. cmd argument corresponds to 
			// ed.addCommand above. 
                        ed.addButton('questionmarkup', {
                                title : 'Question Markup',
                                cmd : 'mceQuestionMarkup',
                                image : url + '/img/question-icon.png'
                        });
                },

                /**
                 * Returns information about the plugin as a name/value array.
                 * The current keys are longname, author, authorurl, infourl and version.
                 *
                 * @return {Object} Name/value array containing information about the plugin.
                 */
                getInfo : function() {
                        return {
                                longname : 'Science Markup Plugin',
                                author : 'Jessy Kate Schingler',
                                authorurl: 'http://sciencemarkup.com',
                                infourl : 'http://sciencemarkup.com',
                                version : "0.1"
                        };
                }
        });

        // Register plugin
        tinymce.PluginManager.add('sciencemarkup', tinymce.plugins.ScienceMarkup);
})();
