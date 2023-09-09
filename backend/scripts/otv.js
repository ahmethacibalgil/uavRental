// OTV Endpoint
function fetchOTVData() {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/otv/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            displayData(data, 'otv-result');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (OTV): ' + errorThrown);
        }
    });
}

function fetchOTVById(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/otv/' + id + '/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('OTV ID ile çekildi:', data);
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (OTV - ID ile Çekme): ' + errorThrown);
        }
    });
}

function deleteOTV(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/otv/' + id + '/',
        type: 'DELETE',
        dataType: 'json',
        success: function() {
            console.log('OTV başarıyla silindi');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (OTV - Silme): ' + errorThrown);
        }
    });
}