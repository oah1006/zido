function showMenu() {
    $('#nav-mobile').removeClass('hidden');
}

function hideMenu() {
    $('#nav-mobile').addClass('hidden');
}

$('.btn-menu').click(function() {
    if ($('.btn-menu').attr('show') == '1') {
        showMenu();
        $('.btn-menu').attr('show', '0');
    } else {
        hideMenu();
        $('.btn-menu').attr('show', '1');
    }
});

function showNavbar() {
    $('.subnav-mobile').removeClass('hidden');
}

function hideNavbar() {
    $('.subnav-mobile').addClass('hidden');
}


$('.btn-subnav-mobile').click(function() {
    if ($('.btn-subnav-mobile').attr('show') == '1') {
        showNavbar();
        $('.btn-subnav-mobile').attr('show', '0');
    } else {
        hideNavbar();
        $('.btn-subnav-mobile').attr('show', '1');
    }
});