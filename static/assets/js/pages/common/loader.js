function runLoader() {
  $.blockUI({
    message: '<img src="/static/assets/img/others/Loader-Data.gif" width="50"/>',
    fadeIn: 800,
    overlayCSS: {
      backgroundColor: '#ffffff',
      opacity: 0.8,
      zIndex: 1200,
      cursor: 'wait'
    },
    css: {
      border: 0,
      color: '#fff',
      zIndex: 1201,
      padding: 20,
      backgroundColor: 'transparent'
    }
  })
};

function clearLoader() {
  $.unblockUI();
}