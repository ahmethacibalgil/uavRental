// Cart Endpoint
function fetchCartData() {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/cart/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            displayData(data, 'cart-result');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Cart): ' + errorThrown);
        }
    });
}

function fetchCartById(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/cart/' + id + '/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Cart ID ile çekildi:', data);
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Cart - ID ile Çekme): ' + errorThrown);
        }
    });
}

function deleteCart(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/cart/' + id + '/',
        type: 'DELETE',
        dataType: 'json',
        success: function() {
            console.log('Cart başarıyla silindi');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Cart - Silme): ' + errorThrown);
        }
    });
}