About
===

This is an example plugin for tinymce implementing Science Objects markup in
microdata. Currently, only the _Question_ object has been implemented. 

Dependencies:
===

1. jquery
2. tinymce


Install plugin
===

1. clone this repository into your web directory. 

To instal the plugin, here are two options:

1. put this entire directory into the `tinymce/jscripts/tiny_mce/plugins`
directory and rename to `sciencemarkup` (note: it **must** be renamed to the
correct directory name or tinymce will not find the plugin). 

or 

2. create a symlink from tinymce/jscripts/tiny_mce/plugins/ to the plugin
directory (possibly easier for maintenance/upgrading). eg., assuming the plugin
directory is in the root web directory:
` cd tinymce/jscripts/tiny_mce/plugins
ln -s ../../../../tinymce_scimarkup sciencemarkup`

(Plugins reference: http://www.tinymce.com/wiki.php/Configuration:plugins)


