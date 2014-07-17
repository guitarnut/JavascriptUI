/* Requires jQuery */

var UI = UI || {};

UI.Isotope = (function() {

    function init(c, f) {

        // setup isotope
        $(c).isotope({
            itemSelector: '.isotopeItem',
            layoutMode: 'fitRows'
        });

        $(f).click(function () {
            var filter = $(this).attr('data-filter');
            $(this).parent().next('.isotopeContainer').isotope({filter: filter});
        })
    }

    return {
        init: init
    }

})();