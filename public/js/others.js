notificationEditSuccess = () => {
    new Noty({
        theme: 'relax',
        timeout: 2000,
        type: 'success',
        layout: 'topRight',
        text: fa.alert.save_ok,
        animation: {
            open: function (promise) {
                var n = this;
                var Timeline = new mojs.Timeline();
                var body = new mojs.Html({
                    el        : n.barDom,
                    x         : {500: 0, delay: 0, duration: 500, easing: 'elastic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                });

                var parent = new mojs.Shape({
                    parent: n.barDom,
                    width      : 200,
                    height     : n.barDom.getBoundingClientRect().height,
                    radius     : 0,
                    x          : {[150]: -150},
                    duration   : 1.2 * 500,
                    isShowStart: true
                });

                n.barDom.style['overflow'] = 'visible';
                parent.el.style['overflow'] = 'hidden';

                var burst = new mojs.Burst({
                    parent  : parent.el,
                    count   : 10,
                    top     : n.barDom.getBoundingClientRect().height + 75,
                    degree  : 90,
                    radius  : 75,
                    angle   : {[-90]: 40},
                    children: {
                        fill     : '#EBD761',
                        delay    : 'stagger(500, -50)',
                        radius   : 'rand(8, 25)',
                        direction: -1,
                        isSwirl  : true
                    }
                });

                var fadeBurst = new mojs.Burst({
                    parent  : parent.el,
                    count   : 2,
                    degree  : 0,
                    angle   : 75,
                    radius  : {0: 100},
                    top     : '90%',
                    children: {
                        fill     : '#EBD761',
                        pathScale: [.65, 1],
                        radius   : 'rand(12, 15)',
                        direction: [-1, 1],
                        delay    : .8 * 500,
                        isSwirl  : true
                    }
                });

                Timeline.add(body, burst, fadeBurst, parent);
                Timeline.play();
            },
            close: function (promise) {
                var n = this;
                new mojs.Html({
                    el        : n.barDom,
                    x         : {0: 500, delay: 10, duration: 500, easing: 'cubic.out'},
                    skewY     : {0: 10, delay: 10, duration: 500, easing: 'cubic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                }).play();
            }
        }
    }).show();
}
notificationEditError = () => {
    new Noty({
        theme: 'relax',
        timeout: 2000,
        type: 'error',
        layout: 'topRight',
        text: fa.alert.save_error,
        animation: {
            open: function (promise) {
                var n = this;
                var Timeline = new mojs.Timeline();
                var body = new mojs.Html({
                    el        : n.barDom,
                    x         : {500: 0, delay: 0, duration: 500, easing: 'elastic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                });

                var parent = new mojs.Shape({
                    parent: n.barDom,
                    width      : 200,
                    height     : n.barDom.getBoundingClientRect().height,
                    radius     : 0,
                    x          : {[150]: -150},
                    duration   : 1.2 * 500,
                    isShowStart: true
                });

                n.barDom.style['overflow'] = 'visible';
                parent.el.style['overflow'] = 'hidden';

                var burst = new mojs.Burst({
                    parent  : parent.el,
                    count   : 10,
                    top     : n.barDom.getBoundingClientRect().height + 75,
                    degree  : 90,
                    radius  : 75,
                    angle   : {[-90]: 40},
                    children: {
                        fill     : '#EBD761',
                        delay    : 'stagger(500, -50)',
                        radius   : 'rand(8, 25)',
                        direction: -1,
                        isSwirl  : true
                    }
                });

                var fadeBurst = new mojs.Burst({
                    parent  : parent.el,
                    count   : 2,
                    degree  : 0,
                    angle   : 75,
                    radius  : {0: 100},
                    top     : '90%',
                    children: {
                        fill     : '#EBD761',
                        pathScale: [.65, 1],
                        radius   : 'rand(12, 15)',
                        direction: [-1, 1],
                        delay    : .8 * 500,
                        isSwirl  : true
                    }
                });

                Timeline.add(body, burst, fadeBurst, parent);
                Timeline.play();
            },
            close: function (promise) {
                var n = this;
                new mojs.Html({
                    el        : n.barDom,
                    x         : {0: 500, delay: 10, duration: 500, easing: 'cubic.out'},
                    skewY     : {0: 10, delay: 10, duration: 500, easing: 'cubic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                }).play();
            }
        }
    }).show();
}
notificationCustomError = (text) => {
    new Noty({
        theme: 'relax',
        timeout: 4000,
        type: 'error',
        layout: 'topRight',
        text: text,
        animation: {
            open: function (promise) {
                var n = this;
                var Timeline = new mojs.Timeline();
                var body = new mojs.Html({
                    el        : n.barDom,
                    x         : {500: 0, delay: 0, duration: 500, easing: 'elastic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                });

                var parent = new mojs.Shape({
                    parent: n.barDom,
                    width      : 200,
                    height     : n.barDom.getBoundingClientRect().height,
                    radius     : 0,
                    x          : {[150]: -150},
                    duration   : 1.2 * 500,
                    isShowStart: true
                });

                n.barDom.style['overflow'] = 'visible';
                parent.el.style['overflow'] = 'hidden';

                var burst = new mojs.Burst({
                    parent  : parent.el,
                    count   : 10,
                    top     : n.barDom.getBoundingClientRect().height + 75,
                    degree  : 90,
                    radius  : 75,
                    angle   : {[-90]: 40},
                    children: {
                        fill     : '#EBD761',
                        delay    : 'stagger(500, -50)',
                        radius   : 'rand(8, 25)',
                        direction: -1,
                        isSwirl  : true
                    }
                });

                var fadeBurst = new mojs.Burst({
                    parent  : parent.el,
                    count   : 2,
                    degree  : 0,
                    angle   : 75,
                    radius  : {0: 100},
                    top     : '90%',
                    children: {
                        fill     : '#EBD761',
                        pathScale: [.65, 1],
                        radius   : 'rand(12, 15)',
                        direction: [-1, 1],
                        delay    : .8 * 500,
                        isSwirl  : true
                    }
                });

                Timeline.add(body, burst, fadeBurst, parent);
                Timeline.play();
            },
            close: function (promise) {
                var n = this;
                new mojs.Html({
                    el        : n.barDom,
                    x         : {0: 500, delay: 10, duration: 500, easing: 'cubic.out'},
                    skewY     : {0: 10, delay: 10, duration: 500, easing: 'cubic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                }).play();
            }
        }
    }).show();
}
notificationAddSuccess = () => {
    new Noty({
        theme: 'relax',
        timeout: 2000,
        type: 'success',
        layout: 'topRight',
        text: fa.alert.add_success,
        animation: {
            open: function (promise) {
                var n = this;
                var Timeline = new mojs.Timeline();
                var body = new mojs.Html({
                    el        : n.barDom,
                    x         : {500: 0, delay: 0, duration: 500, easing: 'elastic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                });

                var parent = new mojs.Shape({
                    parent: n.barDom,
                    width      : 200,
                    height     : n.barDom.getBoundingClientRect().height,
                    radius     : 0,
                    x          : {[150]: -150},
                    duration   : 1.2 * 500,
                    isShowStart: true
                });

                n.barDom.style['overflow'] = 'visible';
                parent.el.style['overflow'] = 'hidden';

                var burst = new mojs.Burst({
                    parent  : parent.el,
                    count   : 10,
                    top     : n.barDom.getBoundingClientRect().height + 75,
                    degree  : 90,
                    radius  : 75,
                    angle   : {[-90]: 40},
                    children: {
                        fill     : '#EBD761',
                        delay    : 'stagger(500, -50)',
                        radius   : 'rand(8, 25)',
                        direction: -1,
                        isSwirl  : true
                    }
                });

                var fadeBurst = new mojs.Burst({
                    parent  : parent.el,
                    count   : 2,
                    degree  : 0,
                    angle   : 75,
                    radius  : {0: 100},
                    top     : '90%',
                    children: {
                        fill     : '#EBD761',
                        pathScale: [.65, 1],
                        radius   : 'rand(12, 15)',
                        direction: [-1, 1],
                        delay    : .8 * 500,
                        isSwirl  : true
                    }
                });

                Timeline.add(body, burst, fadeBurst, parent);
                Timeline.play();
            },
            close: function (promise) {
                var n = this;
                new mojs.Html({
                    el        : n.barDom,
                    x         : {0: 500, delay: 10, duration: 500, easing: 'cubic.out'},
                    skewY     : {0: 10, delay: 10, duration: 500, easing: 'cubic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                }).play();
            }
        }
    }).show();
}
notificationAddError = () => {
    new Noty({
        theme: 'relax',
        timeout: 2000,
        type: 'error',
        layout: 'topRight',
        text: fa.alert.add_error,
        animation: {
            open: function (promise) {
                var n = this;
                var Timeline = new mojs.Timeline();
                var body = new mojs.Html({
                    el        : n.barDom,
                    x         : {500: 0, delay: 0, duration: 500, easing: 'elastic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                });

                var parent = new mojs.Shape({
                    parent: n.barDom,
                    width      : 200,
                    height     : n.barDom.getBoundingClientRect().height,
                    radius     : 0,
                    x          : {[150]: -150},
                    duration   : 1.2 * 500,
                    isShowStart: true
                });

                n.barDom.style['overflow'] = 'visible';
                parent.el.style['overflow'] = 'hidden';

                var burst = new mojs.Burst({
                    parent  : parent.el,
                    count   : 10,
                    top     : n.barDom.getBoundingClientRect().height + 75,
                    degree  : 90,
                    radius  : 75,
                    angle   : {[-90]: 40},
                    children: {
                        fill     : '#EBD761',
                        delay    : 'stagger(500, -50)',
                        radius   : 'rand(8, 25)',
                        direction: -1,
                        isSwirl  : true
                    }
                });

                var fadeBurst = new mojs.Burst({
                    parent  : parent.el,
                    count   : 2,
                    degree  : 0,
                    angle   : 75,
                    radius  : {0: 100},
                    top     : '90%',
                    children: {
                        fill     : '#EBD761',
                        pathScale: [.65, 1],
                        radius   : 'rand(12, 15)',
                        direction: [-1, 1],
                        delay    : .8 * 500,
                        isSwirl  : true
                    }
                });

                Timeline.add(body, burst, fadeBurst, parent);
                Timeline.play();
            },
            close: function (promise) {
                var n = this;
                new mojs.Html({
                    el        : n.barDom,
                    x         : {0: 500, delay: 10, duration: 500, easing: 'cubic.out'},
                    skewY     : {0: 10, delay: 10, duration: 500, easing: 'cubic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                }).play();
            }
        }
    }).show();
}
notificationDeleteSuccess = () => {
    new Noty({
        theme: 'relax',
        timeout: 2000,
        type: 'success',
        layout: 'topRight',
        text: fa.alert.delete_success,
        animation: {
            open: function (promise) {
                var n = this;
                var Timeline = new mojs.Timeline();
                var body = new mojs.Html({
                    el        : n.barDom,
                    x         : {500: 0, delay: 0, duration: 500, easing: 'elastic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                });

                var parent = new mojs.Shape({
                    parent: n.barDom,
                    width      : 200,
                    height     : n.barDom.getBoundingClientRect().height,
                    radius     : 0,
                    x          : {[150]: -150},
                    duration   : 1.2 * 500,
                    isShowStart: true
                });

                n.barDom.style['overflow'] = 'visible';
                parent.el.style['overflow'] = 'hidden';

                var burst = new mojs.Burst({
                    parent  : parent.el,
                    count   : 10,
                    top     : n.barDom.getBoundingClientRect().height + 75,
                    degree  : 90,
                    radius  : 75,
                    angle   : {[-90]: 40},
                    children: {
                        fill     : '#EBD761',
                        delay    : 'stagger(500, -50)',
                        radius   : 'rand(8, 25)',
                        direction: -1,
                        isSwirl  : true
                    }
                });

                var fadeBurst = new mojs.Burst({
                    parent  : parent.el,
                    count   : 2,
                    degree  : 0,
                    angle   : 75,
                    radius  : {0: 100},
                    top     : '90%',
                    children: {
                        fill     : '#EBD761',
                        pathScale: [.65, 1],
                        radius   : 'rand(12, 15)',
                        direction: [-1, 1],
                        delay    : .8 * 500,
                        isSwirl  : true
                    }
                });

                Timeline.add(body, burst, fadeBurst, parent);
                Timeline.play();
            },
            close: function (promise) {
                var n = this;
                new mojs.Html({
                    el        : n.barDom,
                    x         : {0: 500, delay: 10, duration: 500, easing: 'cubic.out'},
                    skewY     : {0: 10, delay: 10, duration: 500, easing: 'cubic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                }).play();
            }
        }
    }).show();
}
notificationDeleteError = () => {
    new Noty({
        theme: 'relax',
        timeout: 2000,
        type: 'error',
        layout: 'topRight',
        text: fa.alert.delete_error,
        animation: {
            open: function (promise) {
                var n = this;
                var Timeline = new mojs.Timeline();
                var body = new mojs.Html({
                    el        : n.barDom,
                    x         : {500: 0, delay: 0, duration: 500, easing: 'elastic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                });

                var parent = new mojs.Shape({
                    parent: n.barDom,
                    width      : 200,
                    height     : n.barDom.getBoundingClientRect().height,
                    radius     : 0,
                    x          : {[150]: -150},
                    duration   : 1.2 * 500,
                    isShowStart: true
                });

                n.barDom.style['overflow'] = 'visible';
                parent.el.style['overflow'] = 'hidden';

                var burst = new mojs.Burst({
                    parent  : parent.el,
                    count   : 10,
                    top     : n.barDom.getBoundingClientRect().height + 75,
                    degree  : 90,
                    radius  : 75,
                    angle   : {[-90]: 40},
                    children: {
                        fill     : '#EBD761',
                        delay    : 'stagger(500, -50)',
                        radius   : 'rand(8, 25)',
                        direction: -1,
                        isSwirl  : true
                    }
                });

                var fadeBurst = new mojs.Burst({
                    parent  : parent.el,
                    count   : 2,
                    degree  : 0,
                    angle   : 75,
                    radius  : {0: 100},
                    top     : '90%',
                    children: {
                        fill     : '#EBD761',
                        pathScale: [.65, 1],
                        radius   : 'rand(12, 15)',
                        direction: [-1, 1],
                        delay    : .8 * 500,
                        isSwirl  : true
                    }
                });

                Timeline.add(body, burst, fadeBurst, parent);
                Timeline.play();
            },
            close: function (promise) {
                var n = this;
                new mojs.Html({
                    el        : n.barDom,
                    x         : {0: 500, delay: 10, duration: 500, easing: 'cubic.out'},
                    skewY     : {0: 10, delay: 10, duration: 500, easing: 'cubic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                }).play();
            }
        }
    }).show();
}
notificationNotSelected = () => {
    new Noty({
        theme: 'relax',
        timeout: 2000,
        type: 'error',
        layout: 'topRight',
        text: fa.alert.not_selected,
        animation: {
            open: function (promise) {
                var n = this;
                var Timeline = new mojs.Timeline();
                var body = new mojs.Html({
                    el        : n.barDom,
                    x         : {500: 0, delay: 0, duration: 500, easing: 'elastic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                });

                var parent = new mojs.Shape({
                    parent: n.barDom,
                    width      : 200,
                    height     : n.barDom.getBoundingClientRect().height,
                    radius     : 0,
                    x          : {[150]: -150},
                    duration   : 1.2 * 500,
                    isShowStart: true
                });

                n.barDom.style['overflow'] = 'visible';
                parent.el.style['overflow'] = 'hidden';

                var burst = new mojs.Burst({
                    parent  : parent.el,
                    count   : 10,
                    top     : n.barDom.getBoundingClientRect().height + 75,
                    degree  : 90,
                    radius  : 75,
                    angle   : {[-90]: 40},
                    children: {
                        fill     : '#EBD761',
                        delay    : 'stagger(500, -50)',
                        radius   : 'rand(8, 25)',
                        direction: -1,
                        isSwirl  : true
                    }
                });

                var fadeBurst = new mojs.Burst({
                    parent  : parent.el,
                    count   : 2,
                    degree  : 0,
                    angle   : 75,
                    radius  : {0: 100},
                    top     : '90%',
                    children: {
                        fill     : '#EBD761',
                        pathScale: [.65, 1],
                        radius   : 'rand(12, 15)',
                        direction: [-1, 1],
                        delay    : .8 * 500,
                        isSwirl  : true
                    }
                });

                Timeline.add(body, burst, fadeBurst, parent);
                Timeline.play();
            },
            close: function (promise) {
                var n = this;
                new mojs.Html({
                    el        : n.barDom,
                    x         : {0: 500, delay: 10, duration: 500, easing: 'cubic.out'},
                    skewY     : {0: 10, delay: 10, duration: 500, easing: 'cubic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                }).play();
            }
        }
    }).show();
}
showErrorsNotification = (data) => {
    for (let key in data.errors) {
        notificationCustomError(`${data.errors[key]}`);
    }
}

const loadingData = function (id) {
    return {
        show: function () {
            $(id).html('<div id="hyjagd8a568abdhkjahbk" class="spinner-grow" role="status">\n' +
                '  <span class="sr-only">Loading...</span>\n' +
                '</div>');
        },
        hide: function () {
            $('#hyjagd8a568abdhkjahbk').hide();
        },
    }
}

const viewcolor = $.confirm({
    title: 'رنگها',
    content: 'url: /ColorsList',
    useBootstrap: false,
    boxWidth: '50%',
    theme: 'modern',
    lazyOpen: true,
    type: 'green',
    typeAnimated: true,
    buttons: {
        cancel: {
            text: 'بستن',
            btnClass: 'btn-red'
        }
    },
    onContentReady: function () {
        viewcolor.$content.find('#colors').bootstrapTable('resetView');
        $colorTable = viewcolor.$content.find('#colors').bootstrapTable({
            url: '/get-Colors-data',
        });
    }
});
$(document).on('click', 'a#colorsModal', function (clickEvent) {

    viewcolor.open();

});


const viewPaymentReason = $.confirm({
    title: 'شرح درآمد',
    content: 'url: /payment-reasons',
    useBootstrap: false,
    boxWidth: '50%',
    theme: 'modern',
    lazyOpen: true,
    type: 'green',
    typeAnimated: true,
    buttons: {
        cancel: {
            text: 'بستن',
            btnClass: 'btn-red'
        }
    },
    onContentReady: function () {
        viewPaymentReason.$content.find('#payment-reason').bootstrapTable('resetView');
        viewPaymentReason.$content.find('#payment-reason').bootstrapTable({
            url: '/get-payment-reasons-data',
        });
    }
});
$(document).on('click', 'a#paymentReasonModal', function (clickEvent) {

    viewPaymentReason.open()

});

const viewCostType = $.confirm({
    title: 'شرح هزینه',
    content: 'url: /cost-types',
    useBootstrap: false,
    boxWidth: '50%',
    theme: 'modern',
    lazyOpen: true,
    type: 'green',
    typeAnimated: true,
    buttons: {
        cancel: {
            text: 'بستن',
            btnClass: 'btn-red'
        }
    },
    onContentReady: function () {
        viewCostType.$content.find('#cost-type').bootstrapTable('resetView');
        viewCostType.$content.find('#cost-type').bootstrapTable({
            url: '/get-cost-types-data',
        });
    }
});
$(document).on('click', 'a#costTypeModal', function (clickEvent) {

    viewCostType.open()

});

const viewgender = $.confirm({
    title: 'جنسیت ها',
    content: 'url: /GendersList',
    useBootstrap: false,
    boxWidth: '50%',
    theme: 'modern',
    lazyOpen: true,
    type: 'green',
    typeAnimated: true,
    buttons: {
        cancel: {
            text: 'بستن',
            btnClass: 'btn-red'
        }
    },
    onContentReady: function () {
        viewgender.$content.find('#genders').bootstrapTable('resetView');
        $genderTable = viewgender.$content.find('#genders').bootstrapTable({
            url: '/get-Genders-data',
        });
    }
});
$(document).on('click', 'a#gendersModal', function (clickEvent) {

    viewgender.open();

});

const viewitemcat = $.confirm({
    title: 'کالاها',
    content: 'url: /ShopItemCategoriesList',
    useBootstrap: false,
    boxWidth: '50%',
    theme: 'modern',
    lazyOpen: true,
    type: 'green',
    typeAnimated: true,
    buttons: {
        cancel: {
            text: 'بستن',
            btnClass: 'btn-red'
        }
    },
    onContentReady: function () {
        viewitemcat.$content.find('#itemCats').bootstrapTable('resetView');
        $itemCatTable = viewitemcat.$content.find('#itemCats').bootstrapTable({
            url: '/get-ShopItemCategories-data',
        });
    }
});
$(document).on('click', 'a#shopItemCategoriesModal', function (clickEvent) {

    viewitemcat.open();

});
function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}
function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
}
const viewpermission = $.confirm({
    title: 'دسته بندی کاربران',
    content: 'url: /RolesList',
    useBootstrap: false,
    boxWidth: '50%',
    theme: 'modern',
    lazyOpen: true,
    type: 'green',
    typeAnimated: true,
    buttons: {
        cancel: {
            text: 'بستن',
            btnClass: 'btn-red'
        }
    },
    onContentReady: function () {

    }
});
$(document).on('click', 'a#permissionModal', function (clickEvent) {

    viewpermission.open();

});

function priceFormatter(value) {
    return Intl.NumberFormat('fa-IR').format(value);
}

Object.size = function (obj) {
    let size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function getIdSelections(table) {
    return $.map(table.bootstrapTable('getSelections'), function (row) {
        return row.id
    })
}

function getSelectionsCount(table) {
    return table.bootstrapTable('getSelections').length;
}

function detailFormatter(index, row) {
    let html = []
    $.each(row, function (key, value) {
        html.push('<p><b>' + key + ':</b> ' + value + '</p>')
    })
    return html.join('')
}

function linkFormatter(value) {
    if (value) {
        return '<a href="http://' + value + '" target="_blank">' + value + '</a>';
    }
}

function statusFormatter(value) {
    if (value == 1) {
        return '<span><i class="fa fa-check-circle text-success"></i></span>';
    } else if (value == 0) {
        return '<span><i class="fa fa-times-circle text-danger"></i></span>'
    }
}

$(document).on('focus', '.select2.select2-container', function (e) {

    let isOriginalEvent = e.originalEvent // don't re-open on closing focus event
    let isSingleSelect = $(this).find(".select2-selection--single").length > 0 // multi-select will pass focus to input

    if (isOriginalEvent && isSingleSelect) {
        $(this).siblings('select:enabled').select2('open');
    }

});
$('form input').keydown(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
});

async function postData(url = '', method = '', fetchData = {}) {
    if(method !== 'GET') {
        return await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'X-CSRF-TOKEN': document.querySelector("[name='csrf-token']").content
            },
            method: method,
            // mode: 'cors',
            // redirect: 'follow',
            // referrerPolicy: 'no-referrer',
            // cache: 'no-cache',
            body: JSON.stringify(fetchData)
        });
    }else {
        return await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'X-CSRF-TOKEN': document.querySelector("[name='csrf-token']").content
            },
            method: method,
        });
    }

}

async function uploadFileAjax(url = '', formId, data) {
    const form = new FormData(document.querySelector(formId));
    form.append('shop', data);
    return await fetch(url, {
        headers: {
            'X-CSRF-TOKEN': document.querySelector("[name='csrf-token']").content
        },
        method: 'POST',
        body: form
    });
}

function getFormData(formId, append = {}) {
    let arr = {};
    let myForm = [document.getElementById(formId)];
    let count = document.getElementById(formId).length;
    myForm.forEach(function (el) {
        for (i = 0; i < count; i++) {
            arr[el[i].name] = el[i].value;
        }
    });
    Object.assign(arr, append);
    return arr;
}

function getCheckboxData(formId) {
    let arr = new Array();
    let myForm = [document.getElementById(formId)];
    let count = document.getElementById(formId).length;
    let check = document.getElementsByClassName('checkbox');
    myForm.forEach(function (el) {
        let y = 0;
        for (i = 0; i < count; i++) {
            if (check[i].checked == true) {
                arr.push(parseInt(el[i].value));
            }
        }
    });
    return arr;
}


modalSettings = () => {
    $("* select.custom-select").select2({
        width: "100%",
        language: "fa",
        dir: "rtl",
        theme: "bootstrap4",
        placeholder: "انتخاب کنید...",
        minimumResultsForSearch: 10
    });

    $(".dataTables_wrapper select.custom-select").select2("destroy");

    $('*[data-MdDateTimePicker="true"]').mask('0000/00/00', {reverse: true});

    $('*[money]').mask("#,##0", {reverse: true});

    $('*[melli]').mask("0000000000", {reverse: true});
    $('*[mobile]').mask("00000000000", {reverse: true});

    $('*[code]').mask("0000000000", {reverse: true});
    $('[data-toggle="tooltip"]').tooltip({
        html: true
    });
}

cityState = () => {
    $('#city').on('change', function (e) {
        $('#state').html('');
        $.ajax({
            url: 'state/' + $(this).val(),
            type: 'get',
            beforeSend: function () {
                $('#state').html('<option class="text-success">در حال بارگذاری...</option>');
            },
            success: function (res) {
                $('#state').html('');
                $("#state").select2({
                    width: "100%",
                    language: "fa",
                    dir: "rtl",
                    theme: "bootstrap4",
                    placeholder: "انتخاب کنید...",
                    minimumresultsforsearch: 10,
                    data: res
                });

            }
        })


    });
}
catTypes = (id) => {
    $('#item_cat_id').on('change', function (e) {
        $('#item_type_id').html('<option></option>');
        $('#item_model_id').html('<option></option>');
        $.ajax({
            url: `get-item-types/${$(this).val()}/${id}`,
            type: 'get',
            beforeSend: function () {
                $('#item_type_id').html('<option class="text-success">در حال بارگذاری...</option>');
            },
            success: function (res) {
                $('#item_type_id').html('<option></option>');
                $("#item_type_id").select2({
                    width: "100%",
                    language: "fa",
                    dir: "rtl",
                    theme: "bootstrap4",
                    placeholder: "انتخاب کنید...",
                    minimumresultsforsearch: 10,
                    data: res
                });

            }
        })


    });
}
typeModels = () => {
    $('#item_type_id').on('change', function (e) {
        if (e.target.value !== "") {
            $('#item_model_id').html('<option>در حال بارگذاری...</option>');
            postData('get-item-models/' + $(this).val(), 'post')
                .then(res => res.json())
                .then(data => {
                    $('#item_model_id').html('<option></option>');
                    if (data.length > 0) {
                        $("#item_model_id").select2({
                            width: "100%",
                            language: "fa",
                            dir: "rtl",
                            theme: "bootstrap4",
                            placeholder: "انتخاب کنید...",
                            minimumresultsforsearch: 10,
                            data: data
                        });
                    }
                })
        }

    });

}
typeSizes = () => {
    $('#item_type_id').on('change', function (e) {
        if (e.target.value !== "") {
            $('#item_size_id').html('<option>در حال بارگذاری...</option>');
            postData('get-item-sizes/' + $(this).val(), 'post')
                .then(res => res.json())
                .then(data => {
                    $('#item_size_id').html('<option></option>');
                    $("#item_size_id").select2({
                        width: "100%",
                        language: "fa",
                        dir: "rtl",
                        theme: "bootstrap4",
                        placeholder: "انتخاب کنید...",
                        minimumresultsforsearch: 10,
                        data: data
                    })
                })
        }

    });
}

function checkboxSetValue(e) {
    if (e.checked == true) {
        e.value = 1;
    } else {
        e.value = 0;
    }

}

function addQuickly(buttonId = '', modalContent = '', storeUrl = '', storeFormId = '', select2Id = '', resultArrayUrl = '0', actionFunctions = function () {
}) {
    document.querySelector(buttonId).addEventListener('click', function (e) {
        const jc_f = $.confirm({
            title: fa.add,
            content: 'url: ' + modalContent,
            theme: 'modern',
            type: 'green',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: 'تایید',
                    btnClass: 'btn-green',
                    keys: ['enter'],
                    action: function () {
                        postData(storeUrl, 'POST', getFormData(storeFormId))
                            .then(res_18723423546712567 => res_18723423546712567.json())
                            .then(data => {
                                if (data === 1) {
                                    if (resultArrayUrl !== '0') {
                                        postData(resultArrayUrl, 'POST')
                                            .then(res_779924792374984 => res_779924792374984.json())
                                            .then(d => {
                                                $(select2Id).select2({
                                                    width: "100%",
                                                    language: "fa",
                                                    dir: "rtl",
                                                    theme: "bootstrap4",
                                                    placeholder: "انتخاب کنید...",
                                                    minimumResultsForSearch: 10,
                                                    data: d
                                                });
                                            })
                                    }
                                    notificationAddSuccess();
                                    jc_f.close();
                                } else {
                                    showErrorsNotification(data)
                                }
                            });
                        return false;
                    }
                },
                cancel: {
                    text: 'بستن',
                    btnClass: 'btn-red'
                }
            },
            onOpenBefore: function () {
                return actionFunctions(jc_f)
            }
        });
    });
}

function editQuickly(buttonId = '', modalContent = '', storeUrl = '', storeFormId = '', select2Id = '', resultArrayUrl = '0', actionFunctions = function () {
}, editUrl = '') {
    document.querySelector(buttonId).addEventListener('click', function (e) {
        if ($(select2Id).val() === '') {
            notificationNotSelected()
            return false;
        }
        const jc_e = $.confirm({
            title: fa.add,
            content: 'url: ' + modalContent + '/' + editUrl,
            columnClass: 'm',
            theme: 'modern',
            type: 'green',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: 'تایید',
                    btnClass: 'btn-green',
                    keys: ['enter'],
                    action: function () {
                        postData(storeUrl, 'PATCH', getFormData(storeFormId, {id: parseInt($(select2Id).val())}))
                            .then(res_18723423546712567 => res_18723423546712567.json())
                            .then(data => {
                                if (data === 1) {
                                    if (resultArrayUrl !== '0') {
                                        $(select2Id).html('<option></option>');
                                        postData(resultArrayUrl, 'POST')
                                            .then(res_779924792374984 => res_779924792374984.json())
                                            .then(d => {
                                                $(select2Id).select2({
                                                    width: "100%",
                                                    language: "fa",
                                                    dir: "rtl",
                                                    theme: "bootstrap4",
                                                    placeholder: "انتخاب کنید...",
                                                    minimumResultsForSearch: 10,
                                                    data: d
                                                });
                                            })
                                    }
                                    notificationAddSuccess();
                                    jc_e.close();
                                } else {
                                    showErrorsNotification(data)
                                }
                            });
                        return false;
                    }
                },
                cancel: {
                    text: 'بستن',
                    btnClass: 'btn-red'
                }
            },
            onOpenBefore: function () {
                return actionFunctions(jc_e)
            }
        });
    });
}


function deleteQuickly(buttonId = '', deleteUrl = '', select2Id = '', resultArrayUrl = '0', actionFunctions = function () {
}) {
    document.querySelector(buttonId).addEventListener('click', function (e) {
        const jc_d = $.confirm({
            title: fa.delete,
            content: fa.alert.delete_confirm,
            buttons: {
                confirm: {
                    text: fa.buttons.yes,
                    btnClass: 'btn-green',
                    theme: 'modern',
                    action: function () {
                        postData(deleteUrl, 'DELETE', {id: $(select2Id).val()})
                            .then(res_18723423546712567 => res_18723423546712567.json())
                            .then(data => {
                                if (data === 1) {
                                    $(select2Id).html('<option></option>');
                                    if (resultArrayUrl !== '0') {
                                        postData(resultArrayUrl, 'POST')
                                            .then(res_779924792374984 => res_779924792374984.json())
                                            .then(d => {
                                                $(select2Id).select2({
                                                    width: "100%",
                                                    language: "fa",
                                                    dir: "rtl",
                                                    theme: "bootstrap4",
                                                    placeholder: "انتخاب کنید...",
                                                    minimumResultsForSearch: 10,
                                                    data: d
                                                }).val('0').trigger('change');
                                            })
                                    }
                                    notificationAddSuccess();
                                    jc_d.close();
                                } else {
                                    showErrorsNotification(data)
                                }
                            });
                        return false;
                    }
                },
                close: {
                    text: fa.buttons.no,
                    btnClass: 'btn-red'
                }
            },
            onOpenBefore: function () {
                return actionFunctions(jc_d)
            }
        })
    });
}


