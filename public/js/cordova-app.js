var cordovaApp = {
    f7: null,
    handleSplashscreen: function () {
        var f7 = cordovaApp.f7;
        if (!window.navigator.splashscreen || f7.device.electron)
            return;
        setTimeout(function () {
            window.navigator.splashscreen.hide();
        }, 2000);
    },
    handleAndroidBackButton: function () {
        var f7 = cordovaApp.f7;
        var $ = f7.$;
        if (f7.device.electron)
            return;
        document.addEventListener('backbutton', function (e) {
            if ($('.actions-modal.modal-in').length) {
                f7.actions.close('.actions-modal.modal-in');
                e.preventDefault();
                return false;
            }
            if ($('.dialog.modal-in').length) {
                f7.dialog.close('.dialog.modal-in');
                e.preventDefault();
                return false;
            }
            if ($('.sheet-modal.modal-in').length) {
                f7.sheet.close('.sheet-modal.modal-in');
                e.preventDefault();
                return false;
            }
            if ($('.popover.modal-in').length) {
                f7.popover.close('.popover.modal-in');
                e.preventDefault();
                return false;
            }
            if ($('.popup.modal-in').length) {
                if ($('.popup.modal-in>.view').length) {
                    var currentView_1 = f7.views.get('.popup.modal-in>.view');
                    if (currentView_1 && currentView_1.router && currentView_1.router.history.length > 1) {
                        currentView_1.router.back();
                        e.preventDefault();
                        return false;
                    }
                }
                f7.popup.close('.popup.modal-in');
                e.preventDefault();
                return false;
            }
            if ($('.login-screen.modal-in').length) {
                f7.loginScreen.close('.login-screen.modal-in');
                e.preventDefault();
                return false;
            }
            if ($('.page-current .searchbar-enabled').length) {
                f7.searchbar.disable('.page-current .searchbar-enabled');
                e.preventDefault();
                return false;
            }
            if ($('.page-current .card-expandable.card-opened').length) {
                f7.card.close('.page-current .card-expandable.card-opened');
                e.preventDefault();
                return false;
            }
            var currentView = f7.views.current;
            if (currentView && currentView.router && currentView.router.history.length > 1) {
                currentView.router.back();
                e.preventDefault();
                return false;
            }
            if ($('.panel.panel-in').length) {
                f7.panel.close('.panel.panel-in');
                e.preventDefault();
                return false;
            }
        }, false);
    },
    handleKeyboard: function () {
        var f7 = cordovaApp.f7;
        if (!window.Keyboard || !window.Keyboard.shrinkView || f7.device.electron)
            return;
        var $ = f7.$;
        window.Keyboard.shrinkView(false);
        window.Keyboard.disableScrollingInShrinkView(true);
        window.Keyboard.hideFormAccessoryBar(true);
        window.addEventListener('keyboardWillShow', function () {
            f7.input.scrollIntoView(document.activeElement, 0, true, true);
        });
        window.addEventListener('keyboardDidShow', function () {
            f7.input.scrollIntoView(document.activeElement, 0, true, true);
        });
        window.addEventListener('keyboardDidHide', function () {
            if (document.activeElement && $(document.activeElement).parents('.messagebar').length) {
                return;
            }
            window.Keyboard.hideFormAccessoryBar(false);
        });
        window.addEventListener('keyboardHeightWillChange', function (event) {
            var keyboardHeight = event.keyboardHeight;
            if (keyboardHeight > 0) {
                document.body.style.height = "calc(100% - ".concat(keyboardHeight, "px)");
                $('html').addClass('device-with-keyboard');
            }
            else {
                document.body.style.height = '';
                $('html').removeClass('device-with-keyboard');
            }
        });
        $(document).on('touchstart', 'input, textarea, select', function (e) {
            var nodeName = e.target.nodeName.toLowerCase();
            var type = e.target.type;
            var showForTypes = ['datetime-local', 'time', 'date', 'datetime'];
            if (nodeName === 'select' || showForTypes.indexOf(type) >= 0) {
                window.Keyboard.hideFormAccessoryBar(false);
            }
            else {
                window.Keyboard.hideFormAccessoryBar(true);
            }
        }, true);
    },
    init: function (f7) {
        cordovaApp.f7 = f7;
        cordovaApp.handleAndroidBackButton();
        cordovaApp.handleSplashscreen();
        cordovaApp.handleKeyboard();
    },
};
export default cordovaApp;
//# sourceMappingURL=cordova-app.js.map