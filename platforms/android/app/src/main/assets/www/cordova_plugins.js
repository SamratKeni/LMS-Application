cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-document-viewer.SitewaertsDocumentViewer",
      "file": "plugins/cordova-plugin-document-viewer/www/sitewaertsdocumentviewer.js",
      "pluginId": "cordova-plugin-document-viewer",
      "clobbers": [
        "cordova.plugins.SitewaertsDocumentViewer",
        "SitewaertsDocumentViewer"
      ]
    },
    {
      "id": "cordova-plugin-file-opener2.FileOpener2",
      "file": "plugins/cordova-plugin-file-opener2/www/plugins.FileOpener2.js",
      "pluginId": "cordova-plugin-file-opener2",
      "clobbers": [
        "cordova.plugins.fileOpener2"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-document-viewer": "0.9.13",
    "cordova-plugin-file-opener2": "3.0.0",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-android-zoom": "0.0.1"
  };
});