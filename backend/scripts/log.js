// Log Endpoint
function fetchLogData() {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/log/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            displayData(data, 'log-result');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Log): ' + errorThrown);
        }
    });
}

function fetchLogById(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/log/' + id + '/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Log ID ile çekildi:', data);
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Log - ID ile Çekme): ' + errorThrown);
        }
    });
}

function deleteLog(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/log/' + id + '/',
        type: 'DELETE',
        dataType: 'json',
        success: function() {
            console.log('Log başarıyla silindi');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Log - Silme): ' + errorThrown);
        }
    });
}