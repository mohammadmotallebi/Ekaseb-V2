"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var framework7_react_1 = require("framework7-react");
var fa_1 = __importDefault(require("../lang/fa"));
var framework7_1 = require("framework7");
var store_1 = __importDefault(require("../store/store"));
var DatePicker = function (_a) {
    var rest = __rest(_a, []);
    var _b = (0, react_1.useState)(0), days = _b[0], setDays = _b[1];
    var _c = (0, react_1.useState)({ day: 0 }), day = _c[0], setDay = _c[1];
    var _d = (0, react_1.useState)(), change = _d[0], setChange = _d[1];
    var loading = (0, framework7_react_1.useStore)('loading');
    (0, react_1.useEffect)(function () {
        new Promise(function (resolve, reject) {
            if (rest.hasOwnProperty('start_date')) {
                resolve(true);
            }
        }).then(function (r) {
            if (r) {
                store_1.default.dispatch('setLoading', true);
            }
            else {
                store_1.default.dispatch('setLoading', false);
            }
        });
    }, [loading]);
    if (loading) {
        return true;
    }
    var handleLeftToolbar = (0, react_1.useMemo)(function () { return function (e) {
        var b = [];
        e.value.map(function (item) {
            b.push(parseInt(item, 10));
        });
        var week_day = new framework7_react_1.f7.params.date.moment(b.reverse()).toLocale('fa').format('dddd, DD MMMM YYYY');
        if (e.opened)
            e.$el.find('#left-toolbar').text(week_day);
    }; }, []);
    var memoDate = (0, react_1.useMemo)(function () {
        var daysNumber = { a: [], b: [] }, monthNumber = [], yearsNumber = [];
        if (daysNumber.a.length === 0) {
            for (var i = 1; i <= 31; i++) {
                daysNumber.a.push(i < 10 ? '0' + i : i.toString());
                if (i < 31)
                    daysNumber.b.push(i < 10 ? '0' + i : i.toString());
            }
        }
        for (var i = 1; i <= 12; i++) {
            monthNumber.push(i < 10 ? '0' + i : i.toString());
        }
        for (var i = (rest.minYear > rest.value.split('/').reverse()[2]) ? rest.value.split('/').reverse()[2] : rest.minYear; i <= rest.maxYear; i++) {
            yearsNumber.push(i.toString());
        }
        return { daysNumber: daysNumber, monthNumber: monthNumber, yearsNumber: yearsNumber };
    }, []);
    (0, react_1.useEffect)(function () {
        var node = null;
        if ((0, framework7_1.Dom7)("#".concat(rest.parentId))[0].firstChild === null) {
            node = document.createElement("ul");
            node.className = 'row no-gap';
            node.innerHTML = "<li class=\"".concat(rest.className, "\"><div class=\"item-content item-input ").concat(rest.outline && ' item-input-outline', "\">\n                            <div class=\"item-inner\">\n                            <div class=\"item-title item-label  ").concat(rest.floatingLabel && '  item-floating-label', "\">").concat(rest.label, "</div>\n                            <div class=\"item-input-wrap\">\n                            <input name=\"").concat(rest.name, "\" id=\"").concat(rest.id, "\" type=\"text\" placeholder=\"").concat(rest.placeholder, "\" class=\"text-align-center\" value=\"\" style=\"direction: ltr;\">\n                            <span class=\"input-clear-button ").concat(!rest.clearButton && ' display-none', "\"></span>\n                            </div></div></div></li>");
        }
        else {
            node = document.createElement("li");
            node.innerHTML = "<div class=\"item-content item-input ".concat(rest.outline && ' item-input-outline', "\">\n                            <div class=\"item-inner\">\n                            <div class=\"item-title item-label  ").concat(rest.floatingLabel && '  item-floating-label', "\">").concat(rest.label, "</div>\n                            <div class=\"item-input-wrap\">\n                            <input name=\"").concat(rest.name, "\" id=\"").concat(rest.id, "\" type=\"text\" placeholder=\"").concat(rest.placeholder, "\" class=\"text-align-center\" value=\"\" style=\"direction: ltr;\">\n                            <span class=\"input-clear-button ").concat(!rest.clearButton && ' display-none', "\"></span>\n                            </div></div></div>");
            if (rest.className) {
                node.className = rest.className;
            }
        }
        if ((0, framework7_1.Dom7)("#".concat(rest.parentId))[0].firstChild === null) {
            (0, framework7_1.Dom7)("#".concat(rest.parentId)).append(node);
        }
        else {
            (0, framework7_1.Dom7)("#".concat(rest.parentId, " ul"))[0].childNodes.item(rest.indexAfter).after(node);
        }
    }, []);
    (0, react_1.useEffect)(function () {
        var p = framework7_react_1.f7.picker.create({
            inputEl: "#".concat(rest.id),
            rotateEffect: true,
            renderToolbar: function ($f7) {
                return "<div class=\"toolbar\">\n                    <div class=\"toolbar-inner\">\n                    <div class=\"left\">\n                    <span class=\"badge mr-2\" id=\"left-toolbar\" style=\"background-color: rgba(var(--f7-theme-color-rgb)\"></span>\n                    </div>\n                    <div class=\"right display-flex align-items-center\">\n                    <a href=\"#\" id=\"set_today\" class=\"button button-round button-fill button-small\">".concat(fa_1.default.today, "</a>\n                    <a href=\"#\" class=\"link sheet-close popover-close\">").concat(fa_1.default.close_icon, "</a>\n                    </div>\n                    </div>\n                    </div>");
            },
            toolbarCloseText: fa_1.default.close_icon,
            value: rest.value.split('/').reverse(),
            formatValue: function (values) {
                return values[2] + '/' + values[1] + '/' + values[0];
            },
            cols: [
                {
                    textAlign: 'center',
                    width: '30%',
                    values: (days === 31) ? memoDate.daysNumber.a :
                        memoDate.daysNumber.b,
                    onChange: function (v, e) {
                        setDay({ day: e });
                    },
                },
                {
                    textAlign: 'center',
                    width: '30%',
                    values: memoDate.monthNumber,
                    displayValues: framework7_react_1.f7.params.date.months.reverse(),
                    onChange: function (v, e) {
                        if (e <= 6) {
                            if (v.cols[0].values.length !== 31) {
                                new Promise(function (resolve, reject) {
                                    setDay(function (prevState) {
                                        prevState.day && resolve(prevState);
                                        return Object.assign(Object.assign({}, prevState), { day: !prevState.day });
                                    });
                                }).then(function (r) {
                                    v.cols[0].replaceValues(memoDate.daysNumber.a);
                                    v.cols[0].setValue(r.day);
                                });
                            }
                        }
                        else {
                            if (v.cols[0].values.length !== 30) {
                                new Promise(function (resolve, reject) {
                                    setDay(function (prevState) {
                                        prevState.day && resolve(prevState);
                                        return Object.assign(Object.assign({}, prevState), { day: !prevState.day });
                                    });
                                }).then(function (r) {
                                    v.cols[0].replaceValues(memoDate.daysNumber.b);
                                    v.cols[0].setValue(r.day);
                                });
                            }
                        }
                    }
                },
                {
                    textAlign: 'center',
                    width: '30%',
                    values: memoDate.yearsNumber
                },
            ],
            on: {
                init: function (v) {
                    v.setValue(rest.value.split('/').reverse());
                    if (v.value[1] <= 6) {
                        setDays(31);
                    }
                    else {
                        setDays(30);
                    }
                },
                change: function (v) {
                    handleLeftToolbar(v);
                },
                opened: function (v) {
                    handleLeftToolbar(v);
                    setDay({ day: v.value[0] });
                    v.$el.find('a#set_today').on('click', function (e) {
                        v.setValue(framework7_react_1.f7.params.date.fullDateArray);
                    });
                }
            }
        });
    }, []);
};
exports.default = DatePicker;
//# sourceMappingURL=DatePicker.js.map