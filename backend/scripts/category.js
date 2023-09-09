// Category Endpoint
function fetchCategoryData() {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/category/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            displayData(data, 'category-result');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Category): ' + errorThrown);
        }
    });
}

function fetchCategoryById(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/category/' + id + '/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Category ID ile çekildi:', data);
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Category - ID ile Çekme): ' + errorThrown);
        }
    });
}

function deleteCategory(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/category/' + id + '/',
        type: 'DELETE',
        dataType: 'json',
        success: function() {
            console.log('Category başarıyla silindi');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Category - Silme): ' + errorThrown);
        }
    });
}



$("#contractAddForm").submit(function (e) {

    e.preventDefault();





    var request = {
        pdfName: pdfNameStr,
        contractNo: $("#contractNo").val(),
        companyId: $("#companyId").val(),
        marketId: $("#marketId").val(),
        vendorId: $("#vendorId").val(),
        marketWorkerId: $("#marketWorkerId").val(),
        marketWorkerResponsibleId: $("#marketWorkerResponsibleId").val(),
        check: $("#check").is(":checked"),
    };

    $.ajax({
        type: "POST",
        url: "/Ca/ContractAddJson",
        data: request,
        success: function (response) {






            iziToast.success({ timeout: 4000, icon: 'fas fa-check', title: 'Başarılı!', message: response });
            $("#contractAddForm").trigger("reset");



            // $("#marketWorkerId").multiselect('rebuild');




        },
        error: function (error) {
            console.log("Hata: ", error);
        }
    });

});
