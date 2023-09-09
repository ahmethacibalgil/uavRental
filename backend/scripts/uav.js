// Uav Endpoint

function createUav(uavData) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/uav/', // API'nizin URL'sini buraya ekleyin
        type: 'POST', // POST kullanarak yeni nesne oluşturma
        data: JSON.stringify(uavData),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            console.log('UAV başarıyla oluşturuldu:', data);
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (UAV Oluşturma): ' + errorThrown);
        }
    });
}

// Kullanım örneği:
var yeniUavVerileri = {
    
};

createUav(yeniUavVerileri);


function fetchUserData() {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/users/userList', // Değişiklik burada
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
        url: 'https://127.0.0.1:8000/api/users/userbyId/' + id + '/', // Değişiklik burada
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

function updateUser(id, userData) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/users/updateUser/' + id + '/', // Değişiklik burada
        type: 'PUT', // PUT kullanarak güncelleme
        data: JSON.stringify(userData),
        contentType: 'application/json',
        dataType: 'json',
        success: function() {
            console.log('Kullanıcı başarıyla güncellendi');
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Hata (Kullanıcı - Güncelleme): ' + errorThrown);
        }
    });
}

function deleteUser(id) {
    $.ajax({
        url: 'https://127.0.0.1:8000/api/users/deleteUser/' + id + '/', // Değişiklik burada
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
