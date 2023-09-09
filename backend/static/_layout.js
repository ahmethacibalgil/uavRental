// Handlebars şablonunu tanımla
var headerTemplate = Handlebars.compile(`
        <div class="logo-container">
            <a href="/" class="logo">
                <img src="/static/img/logo.svg"  width="210" alt="Porto Admin" />
            </a>
            <div class="d-md-none toggle-sidebar-left" data-toggle-class="sidebar-left-opened" data-target="html"
                data-fire-event="sidebar-left-opened">
                <i class="fa-solid fa-bars" aria-label="Toggle sidebar"></i>
            </div>
        </div>

        <div class="header-right">
            <span class="separator"></span>
            <div id="userbox" class="userbox">
                <a href="#" data-bs-toggle="dropdown">
                    <figure class="profile-picture">
                        <img src="/static/img/!logged-user.jpg" alt="Joseph Doe" class="rounded-circle"
                            data-lock-picture="img/!logged-user.jpg" />
                    </figure>
                    <div class="profile-info" data-lock-name="John Doe" data-lock-email="johndoe@okler.com">
                        <span class="name">Ahmet Hacıbalgil</span>
                        <span class="role" id="role">Admin</span>
                    </div>

                    <i class="fa custom-caret"></i>
                </a>
                <div class="dropdown-menu">
                    <ul class="list-unstyled mb-2">
                        <li class="divider"></li>
                        <li>
                            <a role="menuitem" tabindex="-1" href="#" onclick="alert('henüz tamamlanmadı')">Profil</a>
                        </li>
                        <li>
                            <a role="menuitem" tabindex="-1" href="#" onclick="alert('henüz tamamlanmadı')">Oturumu Kapat</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        `);

var sidebarTemplate = Handlebars.compile(`
        <div class="sidebar-header">
            <div class="sidebar-toggle d-none d-md-block" data-toggle-class="sidebar-left-collapsed"
                data-target="html" data-fire-event="sidebar-left-toggle">
                <i class="fas fa-bars" aria-label="Toggle sidebar"></i>
            </div>
            </div>
            <div class="nano">
            <div class="nano-content">
                <nav id="menu" class="nav-main" role="navigation">
                    <ul class="nav nav-main">
                        <li class="nav-item">
                            <a class="nav-link" href="/panel/categories/">
                                <i class="fa-regular fa-file-signature"></i>
                                <span >Kategoriler</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/panel/users/">
                            <i class="fa-solid fa-users"></i>
                                <span >Kullanıcılar</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/panel/uav/">
                                <i class="fa-solid fa-plane-up"></i>
                                <span >UAV</span>
                            </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/panel/kdv/">
                            <i class="fa-solid fa-percent"></i>
                            <span >Kdv</span>
                        </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/panel/otv/">
                                <i class="fa-solid fa-percent"></i>
                                <span >Ötv</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
`);

// Header'ı oluştur
var headerHtml = headerTemplate();
$('#header').html(headerHtml);

// Footer'ı oluştur
var footerHtml = sidebarTemplate();
$('#sidebar-left').html(footerHtml);



$(document).ready(function () {
    var currentPath = window.location.pathname;
    $(".nav-item .nav-link").each(function () {
        var linkPath = $(this).attr("href");
        if ("/" + linkPath === currentPath) {
            $(this).parent(".nav-item").addClass("nav-expanded nav-active");
        }
    });
});