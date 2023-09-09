// Media Endpoint
function fetchMediaData() {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/media/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            displayData(data, 'media-result');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Media): ' + errorThrown);
        }
    });
}

function fetchMediaById(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/media/' + id + '/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Media ID ile çekildi:', data);
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Media - ID ile Çekme): ' + errorThrown);
        }
    });
}

function deleteMedia(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/media/' + id + '/',
        type: 'DELETE',
        dataType: 'json',
        success: function() {
            console.log('Media başarıyla silindi');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Media - Silme): ' + errorThrown);
        }
    });
}