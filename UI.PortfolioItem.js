/* Requires jQuery */

var UI = UI || {};

UI.PortfolioItem = (function () {

    function init(c, i) {
        var $item = $(c);

        $item.find(i).hide();

        $item.hover(
            function () {
                $(this).find(i).stop().fadeTo('fast', 0.8);
            },
            function () {
                $(this).find(i).stop().fadeTo('fast', 0);
            }
        );

        $item.click(function () {
            var img = $(this).attr('data-image');
            UI.ImageLightbox.show(img);
        });

        $item.each(function () {
            var $this = $(this),
                img = $this.attr('data-image');

            $this.css({
                'background-image': 'url(' + img + ')',
                'background-position': 'center',
                'background-repeat': 'no-repeat'
            });
        })
    }

    return {
        init: init
    }

})();