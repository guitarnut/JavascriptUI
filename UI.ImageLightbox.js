/* Requires jQuery */

var UI = UI || {};

UI.ImageLightbox = (function () {

    var html = '<div id="lightbox" style="display: none; position: fixed; top: 0; left: 0; z-index: 10000; width: 100%; background-color: #000"><p align="center"><img src="" class="lightboxImage" style="margin: 20px auto;"></p></div>',
        $lightbox;

    window.onresize = function () {
        resizeOverlay();
    };

    function show(c) {
        if (!$lightbox) {
            $(html).appendTo('body');
            $lightbox = $('#lightbox');
            $lightbox.click(function () {
                hide();
            });
        }

        resizeOverlay();

        $lightbox.find('img:eq(0)').attr('src', c);
        $lightbox.fadeTo('fast', 0.98);
    }

    function resizeOverlay() {
        if ($lightbox) {
            $lightbox.css('height', window.innerHeight + 'px');
        }
    }

    function hide() {
        $lightbox.fadeTo('fast', 0, function () {
            $(this).hide();
        });
    }


    return {
        show: show,
        hide: hide
    }

})();