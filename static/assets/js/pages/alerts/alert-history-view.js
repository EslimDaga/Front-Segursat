class AlertHistory {
  getAlertSearch = async (alertDate, unitName) => {
    const url = `/web/api/alerts/alert-search/${alertDate}/${unitName}/`
    const response = await fetch(url);
    const alerts = await response.json();
    console.log(alerts);
    $('#html5-extension').DataTable().clear().destroy();
    const alertsArray = alerts.map(alert => {
      const table = document.getElementById("html5-extension").getElementsByTagName('tbody')[0];
      const row = table.insertRow(0);
      const cell0 = row.insertCell(0);
      const cell1 = row.insertCell(1);
      const cell2 = row.insertCell(2);
      const cell3 = row.insertCell(3);
      const cell4 = row.insertCell(4);
      cell0.className = "text-center";
      cell1.className = "text-center";
      cell2.className = "text-center";
      cell3.className = "text-center";
      cell4.className = "text-center";
      cell0.innerHTML = alert.account;
      cell1.innerHTML = alert.alert_type;
      cell2.innerHTML = alert.alert_priority;
      cell3.innerHTML = alert.datetime;
      cell4.innerHTML = `
          <div class="btn-group">
            <button onclick="this.checkAlert(${alert.id})" type="button" class="btn btn-dark btn-sm"><i class="fas fa-eye"></i></button>
          </div>
        `;
    });

    const table = $('#html5-extension').DataTable({
      destroy: true,
      dom: '<"row"<"col-md-12"<"row"<"col-md-6"B><"col-md-6"f> > ><"col-md-12"rt> <"col-md-12"<"row"<"col-md-5"i><"col-md-7"p>>> >',
      buttons: {
        buttons: [
          { extend: 'copy', className: 'btn' },
          { extend: 'excel', className: 'btn' },
          { extend: 'print', className: 'btn' }
        ]
      },
      "oLanguage": {
        "oPaginate": { "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>', "sNext": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' },
        "sInfo": "Mostrando página _PAGE_ de _PAGES_",
        "sSearch": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
        "sSearchPlaceholder": "Buscar...",
        "sLengthMenu": "Results :  _MENU_",
      },
      "stripeClasses": [],
      "lengthMenu": [7, 10, 20, 50],
      "pageLength": 7
    });
  }

  alertSearch = async () => {
    let alertDate = document.getElementById("basicFlatpickr").value;
    let unitName = document.getElementById("unit_name").value
    if (alertDate === "") {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Seleccione una fecha',
        padding: '2em'
      })
    } else if (unitName === "") {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Seleccione una unidad',
        padding: '2em'
      })
    } else {
      await this.getAlertSearch(alertDate, unitName);
    }
  }

  checkAlert = async (id) => {
    const url = `/web/api/alerts/get-alert/${id}`;
    const response = await fetch(url);
    const alert = await response.json()
    $("#checkAlert").modal("show");
    console.log(alert);
    document.getElementById("unit_name").innerHTML = `${alert.unit_name}s`;
    document.getElementById("speed").innerHTML = `${alert.speed} km/h`;
    document.getElementById("alert_type").innerHTML = `${alert.alert_description}`;
    if (alert.alert_priority === "V") {
      document.getElementById("alert_priority").innerHTML = `<span class="badge badge-danger"> Muy alta </span>`;
    } else if (alert.alert_priority === "H") {
      document.getElementById("alert_priority").innerHTML = `<span class="badge badge-warning"> Alta </span>`;
    } else if (alert.alert_priority === "M") {
      document.getElementById("alert_priority").innerHTML = `<span class="badge badge-info"> Media </span>`;
    } else {
      document.getElementById("alert_priority").innerHTML = `<span class="badge badge-success"> Baja </span>`;
    }
    document.getElementById("datetime").innerHTML = `${alert.datetime}`
    return alert;
  }
}