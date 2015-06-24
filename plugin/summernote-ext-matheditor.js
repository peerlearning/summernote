(function (factory) {
  /* global define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals: jQuery
    factory(window.jQuery);
  }
}(function ($) {
  // template
  var tmpl = $.summernote.renderer.getTemplate();

  /**
   * @class plugin.math 
   * 
   * MathEditor Plugin  
   */
  $.summernote.addPlugin({
    /** @property {String} name name of plugin */
    name: 'math',
    /** 
     * @property {Object} buttons 
     * @property {Function} buttons.math   function to make button
     */
    buttons: { // buttons
      math: function () {

        return tmpl.iconButton('fa fa-superscript', {
          event : 'math',
          title: 'math',
          hide: true
        });
      },
    },

    /**
     * @property {Object} events 
     * @property {Function} events.math  run function when button that has a 'math' event name  fires click
     */
    events: { // events
      math: function (event, editor, layoutInfo) {
        var $editable = layoutInfo.editable();
        mathedit = [editor, $editable]
        iframe = document.getElementById('editorFrame')
        iframe.contentWindow.clearValue()
        $('#lightbox').show();
        // Get current editable node
        // Call insertText with 'math'
        // editor.insertText($editable, 'Math ');
      },
    }
  });
}));
