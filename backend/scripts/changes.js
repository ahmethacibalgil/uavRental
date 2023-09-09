// Changes Endpoint
function fetchChangesData() {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/changes/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            displayData(data, 'changes-result');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Changes): ' + errorThrown);
        }
    });
}

function fetchChangesById(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/changes/' + id + '/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Changes ID ile çekildi:', data);
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Changes - ID ile Çekme): ' + errorThrown);
        }
    });
}

function deleteChanges(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/changes/' + id + '/',
        type: 'DELETE',
        dataType: 'json',
        success: function() {
            console.log('Changes başarıyla silindi');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Changes - Silme): ' + errorThrown);
        }
    });
}