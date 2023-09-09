



/* Formatting function for row details - modify as you need */
function format(d) {
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="table table-striped table-bordered mb-0">' +

        '<tr>' +
        '<td>Eklenme Tarihi:</td>' +
        // '<td>' + d.createdDate + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Düzenlenme Tarihi:</td>' +
        // '<td>' + d.createdDate + '</td>' +
        '</tr>' +


        '</table>';
}



$(document).ready(function () {










    // Add event listener for opening and closing details
    $('#example').on('click', 'tbody td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
        }
        else {
            // Open this row
            row.child(format(row.data())).show();
        }
    });

    $('#example').on('requestChild.dt', function (e, row) {
        row.child(format(row.data())).show();
    });

    var table = $('#example').DataTable({
        // fixedHeader: true,
        
        "ajax": "/api/category/",
        "type": "GET",
        "dataSrc": "",
        "columns": [
            // {
            //     "data": null,
            //     orderable: false,
            //     "render": function (data, type, row) {
            //         return '<input type="checkbox" class="form-check-input form-input-table-check" id="check_' + row.id + '">'
            //     }
            // },
            {
                "data": "name"
            },
            {
                "data": "name"
            },
            // {
            //     "data": null,
            //     "render": function (data, type, row) {
            //         return `
            //         <div class="row g-1">
            //             <div class="col-6">
            //                 <button class="btn btn-success w-100"  data-id="${row.id}">Düzenle</button>
            //             </div>
            //             <div class="col-6">
            //                 <button class="btn btn-danger w-100" data-id="${row.id}" data-bs-toggle="modal"
            //                 data-bs-target="#ModalDelete">Sil</button>
            //             </div>
            //         </div>
            //         `;
            //     }
            // },

        ],
        // "order": [[1, 'asc']],
        "language": {
            "url": "/static/_dataTable/language.json"
        },
        // "pageLength": 5,
      

    });


    // $('#btnFilter').click( function() {
    //     var min = new Date($('#minDate').val());
    //     var max = new Date($('#maxDate').val());

    //     if (min > max) {
    //         alert("Başlangıç tarihi bitiş tarihinden büyük olamaz!");
    //     } else {
    //         table.draw();
    //     }
    // });


    // $('.status-dropdown').change(function () {
    //     table.column(3).search($(this).val()).draw();
    // });






    table.on('stateLoaded', (e, settings, data) => {
        for (var i = 0; i < data.childRows.length; i++) {
            var row = table.row(data.childRows[i]);
            row.child(format(row.data())).show();
        }
    });

    // $("#example_filter .form-control").addClass("w-100");


    // Checkboxların değişiklik olayını dinle
    $("#example tbody").on("change", "tr td:first-child input[type='checkbox']", function () {
        var anyChecked = $("#example tbody tr td:first-child input[type='checkbox']:checked").length > 0;

        // Butonların disabled özelliğini güncelle
        // $("#OrderAdd").prop("disabled", !anyChecked);
        // $("#InstructionAdd").prop("disabled", !anyChecked);
        // $("#btnSelectChecked").prop("disabled", !anyChecked);
        $("#btnSelectDelete").prop("disabled", !anyChecked);
    });

    // Sayfa yüklendiğinde butonların durumunu kontrol et
    $(document).ready(function () {
        var anyChecked = $("#example tbody tr td:first-child input[type='checkbox']:checked").length > 0;

        // Butonların disabled özelliğini güncelle
        // $("#OrderAdd").prop("disabled", !anyChecked);
        // $("#InstructionAdd").prop("disabled", !anyChecked);
        // $("#btnSelectChecked").prop("disabled", !anyChecked);
        $("#btnSelectDelete").prop("disabled", !anyChecked);

    });


});