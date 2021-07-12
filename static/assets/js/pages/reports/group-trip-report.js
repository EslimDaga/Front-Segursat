const htmlExtension = () => {
  $('#html5-extension').DataTable({
    dom: "<'ui grid'" +
      "<'row justify-content-between'" +
      "<'four wide column'l>" +
      "<'center aligned eight wide column'B>" +
      "<'right aligned four wide column'f>" +
      ">" +
      "<'dt-table'" +
      "<'sixteen wide column'tr>" +
      ">" +
      "<'row wide justify-content-between'" +
      "<'seven wide column'i>" +
      "<'right aligned nine wide column'p>" +
      ">" +
      ">",
    buttons: {
      buttons: [
        { extend: 'copy', text: '<i class="fas fa-copy"></i>', className: 'btn rounded-circle' },
        { extend: 'excel', text: '<i class="fas fa-file-excel"></i>', className: 'btn rounded-circle' },
        { extend: 'print', text: '<i class="fas fa-print"></i>', className: 'btn rounded-circle' }
      ]
    },
    "oLanguage": {
      "oPaginate": { "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>', "sNext": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' },
      "sInfo": "Mostrando página _PAGE_ de _PAGES_",
      "sSearch": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
      "sSearchPlaceholder": "Buscar...",
      "sLengthMenu": "Resultados : <select class='form-control'><option value='10'>10</option><option value='15'>15</option><option value='50'>50</option><option value='100'>100</option><option value='1000'>1000</option></select>",
    },
    "stripeClasses": [],
    "pageLength": 15
  });
}

htmlExtension();

$(".placeholder").select2({
  placeholder: "Buscar por Grupo",
  allowClear: true
});