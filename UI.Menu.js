/* Requires jQuery */

var UI = UI || {};

UI.Menu = (function () {

    function init(p, c) {
        var $menuButton = $(p),
            $menuItems = $(c);

        $menuButton.mouseenter(function () {
            showMenu($menuItems);
        });

        $menuItems.mouseleave(function() {
            hideMenu($menuItems);
        });

        $menuItems.css('width', '0');

        window.onscroll = function() {
            hideMenu($menuItems);
        }
    }

    function showMenu($e) {
        $e.stop().animate({width: '50%'}, 300);
    }

    function hideMenu($e) {
        $e.stop().animate({width: '0'}, 300);
    }

    return {
        init: init
    }

})();