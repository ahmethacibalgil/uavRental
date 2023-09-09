// Cartmap Endpoint
function fetchCartmapData() {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/cartmap/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            displayData(data, 'cartmap-result');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Cartmap): ' + errorThrown);
        }
    });
}

function fetchCartmapById(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/cartmap/' + id + '/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Cartmap ID ile çekildi:', data);
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Cartmap - ID ile Çekme): ' + errorThrown);
        }
    });
}

function deleteCartmap(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/cartmap/' + id + '/',
        type: 'DELETE',
        dataType: 'json',
        success: function() {
            console.log('Cartmap başarıyla silindi');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Cartmap - Silme): ' + errorThrown);
        }
    });
}