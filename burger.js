const burger_product = document.getElementById('menuswitchprod');
const burger_other = document.getElementById('menuswitchable');

if ( typeof burger_product !== 'undefined' ) {
    $(burger_other).click();
} else {
    $(burger_product).click()
}
