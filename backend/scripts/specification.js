// Specification Endpoint
function fetchSpecificationData() {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/specification/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            displayData(data, 'specification-result');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Specification): ' + errorThrown);
        }
    });
}

function fetchSpecificationById(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/specification/' + id + '/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Specification ID ile çekildi:', data);
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Specification - ID ile Çekme): ' + errorThrown);
        }
    });
}

function deleteSpecification(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/specification/' + id + '/',
        type: 'DELETE',
        dataType: 'json',
        success: function() {
            console.log('Specification başarıyla silindi');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Specification - Silme): ' + errorThrown);
        }
    });
}