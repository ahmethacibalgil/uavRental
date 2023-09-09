// KDV Endpoint
function fetchKDVData() {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/kdv/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            displayData(data, 'kdv-result');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (KDV): ' + errorThrown);
        }
    });
}

function fetchKDVById(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/kdv/' + id + '/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('KDV ID ile çekildi:', data);
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (KDV - ID ile Çekme): ' + errorThrown);
        }
    });
}

function deleteKDV(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/kdv/' + id + '/',
        type: 'DELETE',
        dataType: 'json',
        success: function() {
            console.log('KDV başarıyla silindi');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (KDV - Silme): ' + errorThrown);
        }
    });
}