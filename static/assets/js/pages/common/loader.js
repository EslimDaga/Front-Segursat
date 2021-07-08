function runLoader() {
  $.blockUI({
    message: '<img src="/static/assets/img/others/Loader-Data.gif" width="70"/>',
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

const runLoaderSidebar = () => {
  $("#reload").block({
    message: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>',
    overlayCSS: {
      backgroundColor: '#FFF',
      opacity: 1,
      cursor: 'wait'
    },
    css: {
      border: 0,
      color: '#000',
      padding: 0,
      backgroundColor: 'transparent'
    }
  });
}

const clearRunLoaderSidebar = () => {
  $("#reload").unblock();
}