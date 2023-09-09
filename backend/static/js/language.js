$(document).ready(function() {
    var arrLang = {
        'tr': {
            'home': 'Anasayfa',
            'contracts': 'Sözleşmeler',
            'orders': 'Orderlar',
            'instructions': 'Talimatlar',
            'users': 'Kullanıcılar',
            'companies': 'Şirketler',
            'markets': 'Marketler',
            'vendors': 'Alıcılar',
            'banks': 'Bankalar',
            'countries': 'Ülkeler'
        },
        'en':{
            'home': 'Home',
            'contracts': 'Contracts',
            'orders': 'Orders',
            'instructions': 'Instructions',
            'users': 'Users',
            'companies': 'Companies',
            'markets': 'Markets',
            'vendors': 'Vendors',
            'banks': 'Banks',
            'countries': 'Countries'
        }
    };

    $('.dropdown-item').click(function(){
        var lang = $(this).attr('id');
        changeLanguage(lang);
    });

    var lang = localStorage.getItem('dil');

    if (lang === null) {
        lang = 'en';
        localStorage.setItem('dil', lang);
    }

    changeLanguage(lang);

    function changeLanguage(lang) {
        localStorage.setItem('dil', lang);

        if (lang === 'en') {
            $('#dropdownLanguage').html("<img src='img/blank.gif' class='flag flag-us' id='en' alt='English'/>ENG<i class='fas fa-chevron-down'></i>");
            // Türkçe seçeneğini kaldır
            $('.dropdown-item[id="en"]').hide();
            $('.dropdown-item[id="tr"]').show();
        } else {
            $('#dropdownLanguage').html("<img src='img/blank.gif' class='flag flag-tr' id='tr' alt='Türkçe'/>TR <i class='fas fa-chevron-down'></i>");
            // İngilizce seçeneğini kaldır
            $('.dropdown-item[id="tr"]').hide();
            $('.dropdown-item[id="en"]').show();
        }

        $('a,h5,p,h1,h2,h4,span,li,button,h3,label').each(function(index,element){
            var key = $(this).attr('key');
            if (arrLang[lang][key]) {
                $(this).text(arrLang[lang][key]);
            }
        });
    }
});
