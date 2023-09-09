// User Endpoint

$(document).ready(function() {
    $('#user-form').submit(function(e) {
        e.preventDefault();

        // Form verilerini alın
        var userData = {
            name: $('#name').val(),
            surname: $('#surname').val(),
            mail: $('#mail').val(),
            password: $('#password').val(),
            contactNumber: $('#contactNumber').val(),
            isActive: parseInt($('#isActive').val()), // integer değere çevirin
            adressId: parseInt($('#adressId').val()), // integer değere çevirin
            isTurkish: parseInt($('#isTurkish').val()), // integer değere çevirin
            identityNumber: $('#identityNumber').val(),
            picturePath: $('#picturePath').val()
        };
        

        // Veriyi API'ye gönderin
        $.ajax({
            url: 'http://127.0.0.1:8000/api/user/',
            type: 'POST',
            data: JSON.stringify(userData),
            contentType: 'application/json',
            dataType: 'json',
            success: function(data) {
                console.log('Kullanıcı başarıyla eklendi:', data);
                // Başarı durumunda gerekli işlemleri yapabilirsiniz.
            },
            error: function(xhr, textStatus, errorThrown) {
                console.error('Hata (Kullanıcı Ekleme): ' + errorThrown);
                // Hata durumunda gerekli işlemleri yapabilirsiniz.
            }
        });
    });
});

function fetchUserData() {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/user/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            displayData(data, 'user-result');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (User): ' + errorThrown);
        }
    });
}

function fetchUserById(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/user/' + id + '/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Kullanıcı ID ile çekildi:', data);
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (User - ID ile Çekme): ' + errorThrown);
        }
    });
}

function deleteUser(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/user/' + id + '/',
        type: 'DELETE',
        dataType: 'json',
        success: function() {
            console.log('Kullanıcı başarıyla silindi');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Kullanıcı - Silme): ' + errorThrown);
        }
    });
}