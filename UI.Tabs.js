/* Requires jQuery */

var UI = UI || {};

UI.Tabs = (function () {

    function init(tabOver) {
        $('[ui-tab-wrapper]').each(function () {
            buildTabs($(this), tabOver);
        })
    }

    function buildTabs($e, tabOver) {
        var $wrapper = $e,
            $tabs = $wrapper.find('[ui-tab-button]');

        $tabs.each(function () {
            var $this = $(this);

            $this.click(function () {
                var index = $this.index();
                showTab($wrapper, index, tabOver);
            })
        });

        showTab($wrapper, 0, tabOver);
    }

    function showTab($parent, index, tabOver) {
        $parent.find('[ui-tab-button]').removeClass(tabOver);
        $parent.find('[ui-tab-button]:eq(' + index + ')').addClass(tabOver);
        $parent.find('[ui-tab]').hide();
        $parent.find('[ui-tab]:eq(' + index + ')').show();
    }

    return {
        init: init
    }

})();