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
   * @class plugin.preview 
   * 
   * Preview Plugin  
   */
  $.summernote.addPlugin({
    /** @property {String} name name of plugin */
    name: 'preview',
    /** 
     * @property {Object} buttons 
     * @property {Function} buttons.preview function to make button
     */
    buttons: { // buttons
      preview: function () {
        return tmpl.iconButton('fa fa-eye', {
          event : 'preview',
          title: 'preview',
          hide: true
        });
      },
    },

    /**
     * @property {Object} events 
     * @property {Function} events.preview  run function when button that has a 'preview' event name  fires click
     */
    events: { // events
      preview: function (event, editor, layoutInfo) {
        var $editable = layoutInfo.editable();
         $('#'+$editable.parent().parent().parent().attr('preview-target')).parent().toggleClass("hide-element unhide-element");
         $('#'+$editable.parent().parent().parent().attr('preview-target')).parent().toggleClass("col-xs-6");
         $('#'+$editable.parent().parent().parent().attr('preview-target')).parent().prev().toggleClass("col-xs-6 col-xs-12");
      },
    }
  });
}));
