var ScrollFX = ScrollFX || {};

ScrollFX.Control = (function () {

    var _el = [],
        _currentBG,
        _w;

    function init(w) {
        changeWidth(w);
        preloadImages();
        checkPos();
    }

    function preloadImages() {
        for (var i = 0; i < _el.length; i++) {
            var _i = new Image();
            _i.src = _el[i].bg;
        }
    }

    function changeBG(el) {
        _currentBG = el.bg;

        $('body').css({
            'background-attachment': 'fixed',
            'background-image': 'url(' + _currentBG + ')',
            'background-size': _w + 'px',
            'background-repeat': 'no-repeat',
            'background-position': 'top center'
        })
    }

    function changeWidth(w) {
        _w = w;

        $('body').css({
            'background-size': _w + 'px'
        });
    }

    function add(el) {
        _el.push(el);
    }

    // check to see which bg we should have
    $(window).scroll(function () {
        checkPos();
    });

    function checkPos() {
        var _topEl;

        // see who is on top
        for (var i = 0; i < _el.length; i++) {
            var _padding = String(_el[i].$el.css('margin-top')).replace('px', '');

            var $el = _el[i].$el,
                _o = $el.offset(),
                _y = _o.top - _padding,
                _win = window.innerHeight,
                _o2 = window.pageYOffset;

            if (_y <= _win + _o2) {
                _topEl = _el[i];
            }
        }

        // new bg?
        if (_topEl) {
            if (_currentBG != _topEl.bg) {
                changeBG(_topEl);
            }
        }

    }

    return {
        ready: init,
        add: add,
        width: changeWidth
    }

})();

ScrollFX.BGImage = function (el, padding, bg) {
    this.$el = $(el);
    this.bg = bg;
    this.$el.css('margin-top', padding + 'px');

    ScrollFX.Control.add(this);
};

/*---- SAMPLE SETUP -------*/
// specify an ID, a height above the element, and the bg image
new ScrollFX.BGImage('#box2', 300, 'bg2.jpg');

// specify the width of the bg image
ScrollFX.Control.ready(800);

window.onresize = function() {
    ScrollFX.Control.width($('#wrapper').width());
};
