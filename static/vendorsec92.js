! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function (t, i) {
        return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(i), i
    } : e(jQuery)
}(function (e) {
    "use strict";
    var t = e(document),
        i = e(window),
        s = "selectric",
        o = ".sl",
        n = ["a", "e", "i", "o", "u", "n", "c", "y"],
        l = [/[\xE0-\xE5]/g, /[\xE8-\xEB]/g, /[\xEC-\xEF]/g, /[\xF2-\xF6]/g, /[\xF9-\xFC]/g, /[\xF1]/g, /[\xE7]/g, /[\xFD-\xFF]/g],
        r = function (t, i) {
            var s = this;
            s.element = t, s.$element = e(t), s.state = {
                multiple: !!s.$element.attr("multiple"),
                enabled: !1,
                opened: !1,
                currValue: -1,
                selectedIdx: -1,
                highlightedIdx: -1
            }, s.eventTriggers = {
                open: s.open,
                close: s.close,
                destroy: s.destroy,
                refresh: s.refresh,
                init: s.init
            }, s.init(i)
        };
    r.prototype = {
        utils: {
            isMobile: function () {
                return /android|ip(hone|od|ad)/i.test(navigator.userAgent)
            },
            escapeRegExp: function (e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            },
            replaceDiacritics: function (e) {
                for (var t = l.length; t--;) e = e.toLowerCase().replace(l[t], n[t]);
                return e
            },
            format: function (e) {
                var t = arguments;
                return ("" + e).replace(/\{(?:(\d+)|(\w+))\}/g, function (e, i, s) {
                    return s && t[1] ? t[1][s] : t[i]
                })
            },
            nextEnabledItem: function (e, t) {
                for (; e[t = (t + 1) % e.length].disabled;);
                return t
            },
            previousEnabledItem: function (e, t) {
                for (; e[t = (t > 0 ? t : e.length) - 1].disabled;);
                return t
            },
            toDash: function (e) {
                return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
            },
            triggerCallback: function (t, i) {
                var o = i.element,
                    n = i.options["on" + t],
                    l = [o].concat([].slice.call(arguments).slice(1));
                e.isFunction(n) && n.apply(o, l), e(o).trigger(s + "-" + this.toDash(t), l)
            },
            arrayToClassname: function (t) {
                var i = e.grep(t, function (e) {
                    return !!e
                });
                return e.trim(i.join(" "))
            }
        },
        init: function (t) {
            var i = this;
            if (i.options = e.extend(!0, {}, e.fn[s].defaults, i.options, t), i.utils.triggerCallback("BeforeInit", i), i.destroy(!0), i.options.disableOnMobile && i.utils.isMobile()) i.disableOnMobile = !0;
            else {
                i.classes = i.getClassNames();
                var o = e("<input/>", {
                        class: i.classes.input,
                        readonly: i.utils.isMobile()
                    }),
                    n = e("<div/>", {
                        class: i.classes.items,
                        tabindex: -1
                    }),
                    l = e("<div/>", {
                        class: i.classes.scroll
                    }),
                    r = e("<div/>", {
                        class: i.classes.prefix,
                        html: i.options.arrowButtonMarkup
                    }),
                    a = e("<span/>", {
                        class: "label"
                    }),
                    d = i.$element.wrap("<div/>").parent().append(r.prepend(a), n, o),
                    c = e("<div/>", {
                        class: i.classes.hideselect
                    });
                i.elements = {
                    input: o,
                    items: n,
                    itemsScroll: l,
                    wrapper: r,
                    label: a,
                    outerWrapper: d
                }, i.options.nativeOnMobile && i.utils.isMobile() && (i.elements.input = void 0, c.addClass(i.classes.prefix + "-is-native"), i.$element.on("change", function () {
                    i.refresh()
                })), i.$element.on(i.eventTriggers).wrap(c), i.originalTabindex = i.$element.prop("tabindex"), i.$element.prop("tabindex", -1), i.populate(), i.activate(), i.utils.triggerCallback("Init", i)
            }
        },
        activate: function () {
            var e = this,
                t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),
                i = e.$element.width();
            t.removeClass(e.classes.tempshow), e.utils.triggerCallback("BeforeActivate", e), e.elements.outerWrapper.prop("class", e.utils.arrayToClassname([e.classes.wrapper, e.$element.prop("class").replace(/\S+/g, e.classes.prefix + "-$&"), e.options.responsive ? e.classes.responsive : ""])), e.options.inheritOriginalWidth && i > 0 && e.elements.outerWrapper.width(i), e.unbindEvents(), e.$element.prop("disabled") ? (e.elements.outerWrapper.addClass(e.classes.disabled), e.elements.input && e.elements.input.prop("disabled", !0)) : (e.state.enabled = !0, e.elements.outerWrapper.removeClass(e.classes.disabled), e.$li = e.elements.items.removeAttr("style").find("li"), e.bindEvents()), e.utils.triggerCallback("Activate", e)
        },
        getClassNames: function () {
            var t = this,
                i = t.options.customClass,
                s = {};
            return e.each("Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel".split(" "), function (e, o) {
                var n = i.prefix + o;
                s[o.toLowerCase()] = i.camelCase ? n : t.utils.toDash(n)
            }), s.prefix = i.prefix, s
        },
        setLabel: function () {
            var t = this,
                i = t.options.labelBuilder;
            if (t.state.multiple) {
                var s = e.isArray(t.state.currValue) ? t.state.currValue : [t.state.currValue];
                s = 0 === s.length ? [0] : s;
                var o = e.map(s, function (i) {
                    return e.grep(t.lookupItems, function (e) {
                        return e.index === i
                    })[0]
                });
                o = e.grep(o, function (t) {
                    return o.length > 1 || 0 === o.length ? "" !== e.trim(t.value) : t
                }), o = e.map(o, function (s) {
                    return e.isFunction(i) ? i(s) : t.utils.format(i, s)
                }), t.options.multiple.maxLabelEntries && (o.length >= t.options.multiple.maxLabelEntries + 1 ? (o = o.slice(0, t.options.multiple.maxLabelEntries)).push(e.isFunction(i) ? i({
                    text: "..."
                }) : t.utils.format(i, {
                    text: "..."
                })) : o.slice(o.length - 1)), t.elements.label.html(o.join(t.options.multiple.separator))
            } else {
                var n = t.lookupItems[t.state.currValue];
                t.elements.label.html(e.isFunction(i) ? i(n) : t.utils.format(i, n))
            }
        },
        populate: function () {
            var t = this,
                i = t.$element.children(),
                s = t.$element.find("option"),
                o = s.filter(":selected"),
                n = s.index(o),
                l = 0,
                r = t.state.multiple ? [] : 0;
            o.length > 1 && t.state.multiple && (n = [], o.each(function () {
                n.push(e(this).index())
            })), t.state.currValue = ~n ? n : r, t.state.selectedIdx = t.state.currValue, t.state.highlightedIdx = t.state.currValue, t.items = [], t.lookupItems = [], i.length && (i.each(function (i) {
                var s = e(this);
                if (s.is("optgroup")) {
                    var o = {
                        element: s,
                        label: s.prop("label"),
                        groupDisabled: s.prop("disabled"),
                        items: []
                    };
                    s.children().each(function (i) {
                        var s = e(this);
                        o.items[i] = t.getItemData(l, s, o.groupDisabled || s.prop("disabled")), t.lookupItems[l] = o.items[i], l++
                    }), t.items[i] = o
                } else t.items[i] = t.getItemData(l, s, s.prop("disabled")), t.lookupItems[l] = t.items[i], l++
            }), t.setLabel(), t.elements.items.append(t.elements.itemsScroll.html(t.getItemsMarkup(t.items))))
        },
        getItemData: function (t, i, s) {
            return {
                index: t,
                element: i,
                value: i.val(),
                className: i.prop("class"),
                text: i.html(),
                slug: e.trim(this.utils.replaceDiacritics(i.html())),
                alt: i.attr("data-alt"),
                selected: i.prop("selected"),
                disabled: s
            }
        },
        getItemsMarkup: function (t) {
            var i = this,
                s = "<ul>";
            return e.isFunction(i.options.listBuilder) && i.options.listBuilder && (t = i.options.listBuilder(t)), e.each(t, function (t, o) {
                void 0 !== o.label ? (s += i.utils.format('<ul class="{1}"><li class="{2}">{3}</li>', i.utils.arrayToClassname([i.classes.group, o.groupDisabled ? "disabled" : "", o.element.prop("class")]), i.classes.grouplabel, o.element.prop("label")), e.each(o.items, function (e, t) {
                    s += i.getItemMarkup(t.index, t)
                }), s += "</ul>") : s += i.getItemMarkup(o.index, o)
            }), s + "</ul>"
        },
        getItemMarkup: function (t, i) {
            var s = this,
                o = s.options.optionsItemBuilder,
                n = {
                    value: i.value,
                    text: i.text,
                    slug: i.slug,
                    index: i.index
                };
            return s.utils.format('<li data-index="{1}" class="{2}">{3}</li>', t, s.utils.arrayToClassname([i.className, t === s.items.length - 1 ? "last" : "", i.disabled ? "disabled" : "", i.selected ? "selected" : ""]), e.isFunction(o) ? s.utils.format(o(i, this.$element, t), i) : s.utils.format(o, n))
        },
        unbindEvents: function () {
            this.elements.wrapper.add(this.$element).add(this.elements.outerWrapper).add(this.elements.input).off(o)
        },
        bindEvents: function () {
            var t = this;
            t.elements.outerWrapper.on("mouseenter.sl mouseleave" + o, function (i) {
                e(this).toggleClass(t.classes.hover, "mouseenter" === i.type), t.options.openOnHover && (clearTimeout(t.closeTimer), "mouseleave" === i.type ? t.closeTimer = setTimeout(e.proxy(t.close, t), t.options.hoverIntentTimeout) : t.open())
            }), t.elements.wrapper.on("click" + o, function (e) {
                t.state.opened ? t.close() : t.open(e)
            }), t.options.nativeOnMobile && t.utils.isMobile() || (t.$element.on("focus" + o, function () {
                t.elements.input.focus()
            }), t.elements.input.prop({
                tabindex: t.originalTabindex,
                disabled: !1
            }).on("keydown" + o, e.proxy(t.handleKeys, t)).on("focusin" + o, function (e) {
                t.elements.outerWrapper.addClass(t.classes.focus), t.elements.input.one("blur", function () {
                    t.elements.input.blur()
                }), t.options.openOnFocus && !t.state.opened && t.open(e)
            }).on("focusout" + o, function () {
                t.elements.outerWrapper.removeClass(t.classes.focus)
            }).on("input propertychange", function () {
                var i = t.elements.input.val(),
                    s = new RegExp("^" + t.utils.escapeRegExp(i), "i");
                clearTimeout(t.resetStr), t.resetStr = setTimeout(function () {
                    t.elements.input.val("")
                }, t.options.keySearchTimeout), i.length && e.each(t.items, function (e, i) {
                    if (!i.disabled) {
                        if (s.test(i.text) || s.test(i.slug)) return t.highlight(e), !1;
                        if (i.alt)
                            for (var o = i.alt.split("|"), n = 0; n < o.length && o[n]; n++)
                                if (s.test(o[n].trim())) return t.highlight(e), !1
                    }
                })
            })), t.$li.on({
                mousedown: function (e) {
                    e.preventDefault(), e.stopPropagation()
                },
                click: function () {
                    return t.select(e(this).data("index")), !1
                }
            })
        },
        handleKeys: function (t) {
            var i = this,
                s = t.which,
                o = i.options.keys,
                n = e.inArray(s, o.previous) > -1,
                l = e.inArray(s, o.next) > -1,
                r = e.inArray(s, o.select) > -1,
                a = e.inArray(s, o.open) > -1,
                d = i.state.highlightedIdx,
                c = n && 0 === d || l && d + 1 === i.items.length,
                p = 0;
            if (13 !== s && 32 !== s || t.preventDefault(), n || l) {
                if (!i.options.allowWrap && c) return;
                n && (p = i.utils.previousEnabledItem(i.lookupItems, d)), l && (p = i.utils.nextEnabledItem(i.lookupItems, d)), i.highlight(p)
            }
            if (r && i.state.opened) return i.select(d), void(i.state.multiple && i.options.multiple.keepMenuOpen || i.close());
            a && !i.state.opened && i.open()
        },
        refresh: function () {
            this.populate(), this.activate(), this.utils.triggerCallback("Refresh", this)
        },
        setOptionsDimensions: function () {
            var e = this,
                t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),
                i = e.options.maxHeight,
                s = e.elements.items.outerWidth(),
                o = e.elements.wrapper.outerWidth() - (s - e.elements.items.width());
            !e.options.expandToItemText || o > s ? e.finalWidth = o : (e.elements.items.css("overflow", "scroll"), e.elements.outerWrapper.width(9e4), e.finalWidth = e.elements.items.width(), e.elements.items.css("overflow", ""), e.elements.outerWrapper.width("")), e.elements.items.width(e.finalWidth).height() > i && e.elements.items.height(i), t.removeClass(e.classes.tempshow)
        },
        isInViewport: function () {
            var e = this;
            if (!0 === e.options.forceRenderAbove) e.elements.outerWrapper.addClass(e.classes.above);
            else if (!0 === e.options.forceRenderBelow) e.elements.outerWrapper.addClass(e.classes.below);
            else {
                var t = i.scrollTop(),
                    s = i.height(),
                    o = e.elements.outerWrapper.offset().top,
                    n = o + e.elements.outerWrapper.outerHeight() + e.itemsHeight <= t + s,
                    l = o - e.itemsHeight > t,
                    r = !n && l,
                    a = !r;
                e.elements.outerWrapper.toggleClass(e.classes.above, r), e.elements.outerWrapper.toggleClass(e.classes.below, a)
            }
        },
        detectItemVisibility: function (t) {
            var i = this,
                s = i.$li.filter("[data-index]");
            i.state.multiple && (t = e.isArray(t) && 0 === t.length ? 0 : t, t = e.isArray(t) ? Math.min.apply(Math, t) : t);
            var o = s.eq(t).outerHeight(),
                n = s[t].offsetTop,
                l = i.elements.itemsScroll.scrollTop(),
                r = n + 2 * o;
            i.elements.itemsScroll.scrollTop(r > l + i.itemsHeight ? r - i.itemsHeight : n - o < l ? n - o : l)
        },
        open: function (i) {
            var n = this;
            if (n.options.nativeOnMobile && n.utils.isMobile()) return !1;
            n.utils.triggerCallback("BeforeOpen", n), i && (i.preventDefault(), n.options.stopPropagation && i.stopPropagation()), n.state.enabled && (n.setOptionsDimensions(), e("." + n.classes.hideselect, "." + n.classes.open).children()[s]("close"), n.state.opened = !0, n.itemsHeight = n.elements.items.outerHeight(), n.itemsInnerHeight = n.elements.items.height(), n.elements.outerWrapper.addClass(n.classes.open), n.elements.input.val(""), i && "focusin" !== i.type && n.elements.input.focus(), setTimeout(function () {
                t.on("click" + o, e.proxy(n.close, n)).on("scroll" + o, e.proxy(n.isInViewport, n))
            }, 1), n.isInViewport(), n.options.preventWindowScroll && t.on("mousewheel.sl DOMMouseScroll" + o, "." + n.classes.scroll, function (t) {
                var i = t.originalEvent,
                    s = e(this).scrollTop(),
                    o = 0;
                "detail" in i && (o = -1 * i.detail), "wheelDelta" in i && (o = i.wheelDelta), "wheelDeltaY" in i && (o = i.wheelDeltaY), "deltaY" in i && (o = -1 * i.deltaY), (s === this.scrollHeight - n.itemsInnerHeight && o < 0 || 0 === s && o > 0) && t.preventDefault()
            }), n.detectItemVisibility(n.state.selectedIdx), n.highlight(n.state.multiple ? -1 : n.state.selectedIdx), n.utils.triggerCallback("Open", n))
        },
        close: function () {
            var e = this;
            e.utils.triggerCallback("BeforeClose", e), t.off(o), e.elements.outerWrapper.removeClass(e.classes.open), e.state.opened = !1, e.utils.triggerCallback("Close", e)
        },
        change: function () {
            var t = this;
            t.utils.triggerCallback("BeforeChange", t), t.state.multiple ? (e.each(t.lookupItems, function (e) {
                t.lookupItems[e].selected = !1, t.$element.find("option").prop("selected", !1)
            }), e.each(t.state.selectedIdx, function (e, i) {
                t.lookupItems[i].selected = !0, t.$element.find("option").eq(i).prop("selected", !0)
            }), t.state.currValue = t.state.selectedIdx, t.setLabel(), t.utils.triggerCallback("Change", t)) : t.state.currValue !== t.state.selectedIdx && (t.$element.prop("selectedIndex", t.state.currValue = t.state.selectedIdx).data("value", t.lookupItems[t.state.selectedIdx].text), t.setLabel(), t.utils.triggerCallback("Change", t))
        },
        highlight: function (e) {
            var t = this,
                i = t.$li.filter("[data-index]").removeClass("highlighted");
            t.utils.triggerCallback("BeforeHighlight", t), void 0 === e || -1 === e || t.lookupItems[e].disabled || (i.eq(t.state.highlightedIdx = e).addClass("highlighted"), t.detectItemVisibility(e), t.utils.triggerCallback("Highlight", t))
        },
        select: function (t) {
            var i = this,
                s = i.$li.filter("[data-index]");
            if (i.utils.triggerCallback("BeforeSelect", i, t), void 0 !== t && -1 !== t && !i.lookupItems[t].disabled) {
                if (i.state.multiple) {
                    i.state.selectedIdx = e.isArray(i.state.selectedIdx) ? i.state.selectedIdx : [i.state.selectedIdx];
                    var o = e.inArray(t, i.state.selectedIdx); - 1 !== o ? i.state.selectedIdx.splice(o, 1) : i.state.selectedIdx.push(t), s.removeClass("selected").filter(function (t) {
                        return -1 !== e.inArray(t, i.state.selectedIdx)
                    }).addClass("selected")
                } else s.removeClass("selected").eq(i.state.selectedIdx = t).addClass("selected");
                i.state.multiple && i.options.multiple.keepMenuOpen || i.close(), i.change(), i.utils.triggerCallback("Select", i, t)
            }
        },
        destroy: function (e) {
            var t = this;
            t.state && t.state.enabled && (t.elements.items.add(t.elements.wrapper).add(t.elements.input).remove(), e || t.$element.removeData(s).removeData("value"), t.$element.prop("tabindex", t.originalTabindex).off(o).off(t.eventTriggers).unwrap().unwrap(), t.state.enabled = !1)
        }
    }, e.fn[s] = function (t) {
        return this.each(function () {
            var i = e.data(this, s);
            i && !i.disableOnMobile ? "string" == typeof t && i[t] ? i[t]() : i.init(t) : e.data(this, s, new r(this, t))
        })
    }, e.fn[s].defaults = {
        onChange: function (t) {
            e(t).change()
        },
        maxHeight: 300,
        keySearchTimeout: 500,
        arrowButtonMarkup: '<b class="button">&#x25be;</b>',
        disableOnMobile: !1,
        nativeOnMobile: !0,
        openOnFocus: !0,
        openOnHover: !1,
        hoverIntentTimeout: 500,
        expandToItemText: !1,
        responsive: !1,
        preventWindowScroll: !0,
        inheritOriginalWidth: !1,
        allowWrap: !0,
        forceRenderAbove: !1,
        forceRenderBelow: !1,
        stopPropagation: !0,
        optionsItemBuilder: "{text}",
        labelBuilder: "{text}",
        listBuilder: !1,
        keys: {
            previous: [37, 38],
            next: [39, 40],
            select: [9, 13, 27],
            open: [13, 32, 37, 38, 39, 40],
            close: [9, 27]
        },
        customClass: {
            prefix: s,
            camelCase: !1
        },
        multiple: {
            separator: ", ",
            keepMenuOpen: !0,
            maxLabelEntries: !1
        }
    }
}),
function (e) {
    var t, i;
    t = function () {
        function t(t, i) {
            var s;
            this.options = i, this.$element = e(t), this.didInit = !1, s = this, this.$element.on("click.slickLightbox", this.options.itemSelector, function (t) {
                var i, o;
                if (t.preventDefault(), (i = e(this)).blur(), "function" != typeof s.options.shouldOpen || s.options.shouldOpen(s, i, t)) return o = s.filterOutSlickClones(s.$element.find(s.options.itemSelector)), s.init(o.index(i))
            })
        }
        return t.prototype.init = function (e) {
            return this.didInit = !0, this.detectIE(), this.createModal(), this.bindEvents(), this.initSlick(e), this.open()
        }, t.prototype.createModalItems = function () {
            var t, i, s, o, n, l, r;
            return o = this.options.lazyPlaceholder || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", s = function (e, t, i) {
                return '<div class="slick-lightbox-slick-item">\n  <div class="slick-lightbox-slick-item-inner">\n    <img class="slick-lightbox-slick-img" ' + (!0 === i ? ' data-lazy="' + e + '" src="' + o + '" ' : ' src="' + e + '" ') + " />\n    " + t + "\n  </div>\n</div>"
            }, this.options.images ? l = e.map(this.options.images, function (e) {
                return s(e, this.options.lazy)
            }) : (t = this.filterOutSlickClones(this.$element.find(this.options.itemSelector)), n = t.length, r = this, i = function (e, t) {
                var i, o, l;
                return o = {
                    index: t,
                    length: n
                }, i = r.getElementCaption(e, o), l = r.getElementSrc(e), s(l, i, r.options.lazy)
            }, l = e.map(t, i)), l
        }, t.prototype.createModal = function () {
            var t, i;
            return i = this.createModalItems(), t = '<div class="slick-lightbox slick-lightbox-hide-init' + (this.isIE ? " slick-lightbox-ie" : "") + '" style="background: ' + this.options.background + ';">\n  <div class="slick-lightbox-inner">\n    <div class="slick-lightbox-slick slick-caption-' + this.options.captionPosition + '">' + i.join("") + "</div>\n  <div>\n<div>", this.$modalElement = e(t), this.$parts = {}, this.$parts.closeButton = e(this.options.layouts.closeButton), this.$modalElement.find(".slick-lightbox-inner").append(this.$parts.closeButton), e("body").append(this.$modalElement)
        }, t.prototype.initSlick = function (t) {
            var i;
            return i = {
                initialSlide: t
            }, this.options.lazy && (i.lazyLoad = "ondemand"), null != this.options.slick ? "function" == typeof this.options.slick ? this.slick = this.options.slick(this.$modalElement) : this.slick = this.$modalElement.find(".slick-lightbox-slick").slick(e.extend({}, this.options.slick, i)) : this.slick = this.$modalElement.find(".slick-lightbox-slick").slick(i), this.$modalElement.trigger("init.slickLightbox")
        }, t.prototype.open = function () {
            var e;
            return this.options.useHistoryApi && this.writeHistory(), this.$element.trigger("show.slickLightbox"), setTimeout((e = this, function () {
                return e.$element.trigger("shown.slickLightbox")
            }), this.getTransitionDuration()), this.$modalElement.removeClass("slick-lightbox-hide-init")
        }, t.prototype.close = function () {
            var e;
            return this.$element.trigger("hide.slickLightbox"), setTimeout((e = this, function () {
                return e.$element.trigger("hidden.slickLightbox")
            }), this.getTransitionDuration()), this.$modalElement.addClass("slick-lightbox-hide"), this.destroy()
        }, t.prototype.bindEvents = function () {
            var t, i, s, o, n, l, r, a;
            if (i = this, t = function () {
                    var e;
                    return e = i.$modalElement.find(".slick-lightbox-inner").height(), i.$modalElement.find(".slick-lightbox-slick-item").height(e), i.$modalElement.find(".slick-lightbox-slick-img, .slick-lightbox-slick-item-inner").css("max-height", Math.round(i.options.imageMaxHeight * e))
                }, e(window).on("orientationchange.slickLightbox resize.slickLightbox", t), this.options.useHistoryApi && e(window).on("popstate.slickLightbox", (s = this, function () {
                    return s.close()
                })), this.$modalElement.on("init.slickLightbox", t), this.$modalElement.on("destroy.slickLightbox", (o = this, function () {
                    return o.destroy()
                })), this.$element.on("destroy.slickLightbox", (n = this, function () {
                    return n.destroy(!0)
                })), this.$parts.closeButton.on("click.slickLightbox touchstart.slickLightbox", (l = this, function (e) {
                    return e.preventDefault(), l.close()
                })), (this.options.closeOnEscape || this.options.navigateByKeyboard) && e(document).on("keydown.slickLightbox", (r = this, function (e) {
                    var t;
                    if (t = e.keyCode ? e.keyCode : e.which, r.options.navigateByKeyboard && (37 === t ? r.slideSlick("left") : 39 === t && r.slideSlick("right")), r.options.closeOnEscape && 27 === t) return r.close()
                })), this.options.closeOnBackdropClick) return this.$modalElement.on("click.slickLightbox touchstart.slickLightbox", ".slick-lightbox-slick-img", function (e) {
                return e.stopPropagation()
            }), this.$modalElement.on("click.slickLightbox", ".slick-lightbox-slick-item", (a = this, function (e) {
                return e.preventDefault(), a.close()
            }))
        }, t.prototype.slideSlick = function (e) {
            return "left" === e ? this.slick.slick("slickPrev") : this.slick.slick("slickNext")
        }, t.prototype.detectIE = function () {
            if (this.isIE = !1, /MSIE (\d+\.\d+);/.test(navigator.userAgent) && new Number(RegExp.$1) < 9) return this.isIE = !0
        }, t.prototype.getElementCaption = function (t, i) {
            return this.options.caption ? '<span class="slick-lightbox-slick-caption">' + function () {
                switch (typeof this.options.caption) {
                    case "function":
                        return this.options.caption(t, i);
                    case "string":
                        return e(t).data(this.options.caption)
                }
            }.call(this) + "</span>" : ""
        }, t.prototype.getElementSrc = function (t) {
            switch (typeof this.options.src) {
                case "function":
                    return this.options.src(t);
                case "string":
                    return e(t).attr(this.options.src);
                default:
                    return t.href
            }
        }, t.prototype.unbindEvents = function () {
            return e(window).off(".slickLightbox"), e(document).off(".slickLightbox"), this.$modalElement.off(".slickLightbox")
        }, t.prototype.destroy = function (e) {
            var t;
            if (null == e && (e = !1), this.didInit && (this.unbindEvents(), setTimeout((t = this, function () {
                    return t.$modalElement.remove()
                }), this.options.destroyTimeout)), e) return this.$element.off(".slickLightbox"), this.$element.off(".slickLightbox", this.options.itemSelector)
        }, t.prototype.destroyPrevious = function () {
            return e("body").children(".slick-lightbox").trigger("destroy.slickLightbox")
        }, t.prototype.getTransitionDuration = function () {
            var e;
            return this.transitionDuration ? this.transitionDuration : (e = this.$modalElement.css("transition-duration"), this.transitionDuration = void 0 === e ? 500 : e.indexOf("ms") > -1 ? parseFloat(e) : 1e3 * parseFloat(e))
        }, t.prototype.writeHistory = function () {
            return "undefined" != typeof history && null !== history && "function" == typeof history.pushState ? history.pushState(null, null, "") : void 0
        }, t.prototype.filterOutSlickClones = function (t) {
            return this.$element.hasClass("slick-slider") ? t.filter(function () {
                var t;
                return !(t = e(this)).hasClass("slick-cloned") && 0 === t.parents(".slick-cloned").length
            }) : t
        }, t
    }(), i = {
        background: "rgba(0,0,0,.8)",
        closeOnEscape: !0,
        closeOnBackdropClick: !0,
        destroyTimeout: 500,
        itemSelector: "a",
        navigateByKeyboard: !0,
        src: !1,
        caption: !1,
        captionPosition: "dynamic",
        images: !1,
        slick: {},
        useHistoryApi: !1,
        layouts: {
            closeButton: '<button type="button" class="slick-lightbox-close"></button>'
        },
        shouldOpen: null,
        imageMaxHeight: .9,
        lazy: !1
    }, e.fn.slickLightbox = function (s) {
        return s = e.extend({}, i, s), e(this).each(function () {
            return this.slickLightbox = new t(this, s)
        }), this
    }, e.fn.unslickLightbox = function () {
        return e(this).trigger("destroy.slickLightbox").each(function () {
            return this.slickLightbox = null
        })
    }
}(jQuery),
function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    "use strict";
    var t = window.Slick || {};
    (t = function () {
        var t = 0;
        return function (i, s) {
            var o, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(i),
                appendDots: e(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (t, i) {
                    return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = e(i), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, o = e(i).data("slick") || {}, n.options = e.extend({}, n.defaults, s, o), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = e.proxy(n.autoPlay, n), n.autoPlayClear = e.proxy(n.autoPlayClear, n), n.autoPlayIterator = e.proxy(n.autoPlayIterator, n), n.changeSlide = e.proxy(n.changeSlide, n), n.clickHandler = e.proxy(n.clickHandler, n), n.selectHandler = e.proxy(n.selectHandler, n), n.setPosition = e.proxy(n.setPosition, n), n.swipeHandler = e.proxy(n.swipeHandler, n), n.dragHandler = e.proxy(n.dragHandler, n), n.keyHandler = e.proxy(n.keyHandler, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, t.prototype.addSlide = t.prototype.slickAdd = function (t, i, s) {
        var o = this;
        if ("boolean" == typeof i) s = i, i = null;
        else if (i < 0 || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : s ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === s ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, i) {
            e(i).attr("data-slick-index", t)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, t.prototype.animateHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function (t, i) {
        var s = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function (e) {
                e = Math.ceil(e), !1 === o.options.vertical ? (s[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(s)) : (s[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(s))
            },
            complete: function () {
                i && i.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? s[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : s[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(s), i && setTimeout(function () {
            o.disableTransition(), i.call()
        }, o.options.speed))
    }, t.prototype.getNavTarget = function () {
        var t = this.options.asNavFor;
        return t && null !== t && (t = e(t).not(this.$slider)), t
    }, t.prototype.asNavFor = function (t) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function () {
            var i = e(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function (e) {
        var t = this,
            i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function () {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function () {
        var t, i, s = this;
        if (!0 === s.options.dots && s.slideCount > s.options.slidesToShow) {
            for (s.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(s.options.dotsClass), t = 0; t <= s.getDotCount(); t += 1) i.append(e("<li />").append(s.options.customPaging.call(this, s, t)));
            s.$dots = i.appendTo(s.options.appendDots), s.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, t.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, i) {
            e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function () {
        var e, t, i, s, o, n, l, r = this;
        if (s = document.createDocumentFragment(), n = r.$slider.children(), r.options.rows > 1) {
            for (l = r.options.slidesPerRow * r.options.rows, o = Math.ceil(n.length / l), e = 0; e < o; e++) {
                var a = document.createElement("div");
                for (t = 0; t < r.options.rows; t++) {
                    var d = document.createElement("div");
                    for (i = 0; i < r.options.slidesPerRow; i++) {
                        var c = e * l + (t * r.options.slidesPerRow + i);
                        n.get(c) && d.appendChild(n.get(c))
                    }
                    a.appendChild(d)
                }
                s.appendChild(a)
            }
            r.$slider.empty().append(s), r.$slider.children().children().children().css({
                width: 100 / r.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function (t, i) {
        var s, o, n, l = this,
            r = !1,
            a = l.$slider.width(),
            d = window.innerWidth || e(window).width();
        if ("window" === l.respondTo ? n = d : "slider" === l.respondTo ? n = a : "min" === l.respondTo && (n = Math.min(d, a)), l.options.responsive && l.options.responsive.length && null !== l.options.responsive) {
            for (s in o = null, l.breakpoints) l.breakpoints.hasOwnProperty(s) && (!1 === l.originalSettings.mobileFirst ? n < l.breakpoints[s] && (o = l.breakpoints[s]) : n > l.breakpoints[s] && (o = l.breakpoints[s]));
            null !== o ? null !== l.activeBreakpoint ? (o !== l.activeBreakpoint || i) && (l.activeBreakpoint = o, "unslick" === l.breakpointSettings[o] ? l.unslick(o) : (l.options = e.extend({}, l.originalSettings, l.breakpointSettings[o]), !0 === t && (l.currentSlide = l.options.initialSlide), l.refresh(t)), r = o) : (l.activeBreakpoint = o, "unslick" === l.breakpointSettings[o] ? l.unslick(o) : (l.options = e.extend({}, l.originalSettings, l.breakpointSettings[o]), !0 === t && (l.currentSlide = l.options.initialSlide), l.refresh(t)), r = o) : null !== l.activeBreakpoint && (l.activeBreakpoint = null, l.options = l.originalSettings, !0 === t && (l.currentSlide = l.options.initialSlide), l.refresh(t), r = o), t || !1 === r || l.$slider.trigger("breakpoint", [l, r])
        }
    }, t.prototype.changeSlide = function (t, i) {
        var s, o, n = this,
            l = e(t.currentTarget);
        switch (l.is("a") && t.preventDefault(), l.is("li") || (l = l.closest("li")), s = n.slideCount % n.options.slidesToScroll != 0 ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll, t.data.message) {
            case "previous":
                o = 0 === s ? n.options.slidesToScroll : n.options.slidesToShow - s, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - o, !1, i);
                break;
            case "next":
                o = 0 === s ? n.options.slidesToScroll : s, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + o, !1, i);
                break;
            case "index":
                var r = 0 === t.data.index ? 0 : t.data.index || l.index() * n.options.slidesToScroll;
                n.slideHandler(n.checkNavigable(r), !1, i), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function (e) {
        var t, i;
        if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
        else
            for (var s in t) {
                if (e < t[s]) {
                    e = i;
                    break
                }
                i = t[s]
            }
        return e
    }, t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function () {
        var e;
        this.options.rows > 1 && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
    }, t.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function (t) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            e(this).attr("style", e(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
    }, t.prototype.disableTransition = function (e) {
        var t = {};
        t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
    }, t.prototype.fadeSlide = function (e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function () {
            i.disableTransition(e), t.call()
        }, i.options.speed))
    }, t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (i) {
            i.stopImmediatePropagation();
            var s = e(this);
            setTimeout(function () {
                t.options.pauseOnFocus && (t.focussed = s.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, t.prototype.getDotCount = function () {
        var e = this,
            t = 0,
            i = 0,
            s = 0;
        if (!0 === e.options.infinite)
            for (; t < e.slideCount;) ++s, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) s = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++s, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else s = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return s - 1
    }, t.prototype.getLeft = function (e) {
        var t, i, s, o = this,
            n = 0;
        return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, n = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, n = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, n = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, n = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, n = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + n, !0 === o.options.variableWidth && (s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, !0 === o.options.centerMode && (s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, t += (o.$list.width() - s.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
        return this.options[e]
    }, t.prototype.getNavigableIndexes = function () {
        var e, t = this,
            i = 0,
            s = 0,
            o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, s = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) o.push(i), i = s + t.options.slidesToScroll, s += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, t.prototype.getSlick = function () {
        return this
    }, t.prototype.getSlideCount = function () {
        var t, i, s = this;
        return i = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function (o, n) {
            if (n.offsetLeft - i + e(n).outerWidth() / 2 > -1 * s.swipeLeft) return t = n, !1
        }), Math.abs(e(t).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function (t) {
        var i = this;
        e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, t.prototype.initADA = function () {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (i) {
            e(this).attr("role", "option");
            var s = t.options.centerMode ? i : Math.floor(i / t.options.slidesToShow);
            !0 === t.options.dots && e(this).attr("aria-describedby", "slick-slide" + t.instanceUid + s)
        }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function (i) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + i,
                id: "slick-slide" + t.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
    }, t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }, t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).ready(t.setPosition)
    }, t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, t.prototype.lazyLoad = function () {
        var t, i, s, o = this;

        function n(t) {
            e("img[data-lazy]", t).each(function () {
                var t = e(this),
                    i = e(this).attr("data-lazy"),
                    s = e(this).attr("data-srcset"),
                    n = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                    l = document.createElement("img");
                l.onload = function () {
                    t.animate({
                        opacity: 0
                    }, 100, function () {
                        s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", i).animate({
                            opacity: 1
                        }, 200, function () {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), o.$slider.trigger("lazyLoaded", [o, t, i])
                    })
                }, l.onerror = function () {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, i])
                }, l.src = i
            })
        }
        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? s = (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), s = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, s = Math.ceil(i + o.options.slidesToShow), !0 === o.options.fade && (i > 0 && i--, s <= o.slideCount && s++)), t = o.$slider.find(".slick-slide").slice(i, s), "anticipated" === o.options.lazyLoad)
            for (var l = i - 1, r = s, a = o.$slider.find(".slick-slide"), d = 0; d < o.options.slidesToScroll; d++) l < 0 && (l = o.slideCount - 1), t = (t = t.add(a.eq(l))).add(a.eq(r)), l--, r++;
        n(t), o.slideCount <= o.options.slidesToShow ? n(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? n(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && n(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }, t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function () {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function () {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
    }, t.prototype.prev = t.prototype.slickPrev = function () {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function (e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var i, s, o, n, l, r = this,
            a = e("img[data-lazy]", r.$slider);
        a.length ? (i = a.first(), s = i.attr("data-lazy"), o = i.attr("data-srcset"), n = i.attr("data-sizes") || r.$slider.attr("data-sizes"), (l = document.createElement("img")).onload = function () {
            o && (i.attr("srcset", o), n && i.attr("sizes", n)), i.attr("src", s).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, i, s]), r.progressiveLazyLoad()
        }, l.onerror = function () {
            t < 3 ? setTimeout(function () {
                r.progressiveLazyLoad(t + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, s]), r.progressiveLazyLoad())
        }, l.src = s) : r.$slider.trigger("allImagesLoaded", [r])
    }, t.prototype.refresh = function (t) {
        var i, s, o = this;
        s = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > s && (o.currentSlide = s), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
            currentSlide: i
        }), o.init(), t || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function () {
        var t, i, s, o = this,
            n = o.options.responsive || null;
        if ("array" === e.type(n) && n.length) {
            for (t in o.respondTo = o.options.respondTo || "window", n)
                if (s = o.breakpoints.length - 1, n.hasOwnProperty(t)) {
                    for (i = n[t].breakpoint; s >= 0;) o.breakpoints[s] && o.breakpoints[s] === i && o.breakpoints.splice(s, 1), s--;
                    o.breakpoints.push(i), o.breakpointSettings[i] = n[t].settings
                } o.breakpoints.sort(function (e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }, t.prototype.reinit = function () {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, i) {
        var s = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : s.slideCount - 1 : !0 === t ? --e : e, s.slideCount < 1 || e < 0 || e > s.slideCount - 1) return !1;
        s.unload(), !0 === i ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(e).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, s.reinit()
    }, t.prototype.setCSS = function (e) {
        var t, i, s = this,
            o = {};
        !0 === s.options.rtl && (e = -e), t = "left" == s.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == s.positionProp ? Math.ceil(e) + "px" : "0px", o[s.positionProp] = e, !1 === s.transformsEnabled ? s.$slideTrack.css(o) : (o = {}, !1 === s.cssTransitions ? (o[s.animType] = "translate(" + t + ", " + i + ")", s.$slideTrack.css(o)) : (o[s.animType] = "translate3d(" + t + ", " + i + ", 0px)", s.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function () {
        var t, i = this;
        i.$slides.each(function (s, o) {
            t = i.slideWidth * s * -1, !0 === i.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, t.prototype.setHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function () {
        var t, i, s, o, n, l = this,
            r = !1;
        if ("object" === e.type(arguments[0]) ? (s = arguments[0], r = arguments[1], n = "multiple") : "string" === e.type(arguments[0]) && (s = arguments[0], o = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) l.options[s] = o;
        else if ("multiple" === n) e.each(s, function (e, t) {
            l.options[e] = t
        });
        else if ("responsive" === n)
            for (i in o)
                if ("array" !== e.type(l.options.responsive)) l.options.responsive = [o[i]];
                else {
                    for (t = l.options.responsive.length - 1; t >= 0;) l.options.responsive[t].breakpoint === o[i].breakpoint && l.options.responsive.splice(t, 1), t--;
                    l.options.responsive.push(o[i])
                } r && (l.unload(), l.reinit())
    }, t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function () {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function (e) {
        var t, i, s, o, n = this;
        i = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(e).addClass("slick-current"), !0 === n.options.centerMode ? (t = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (e >= t && e <= n.slideCount - 1 - t ? n.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = n.options.slidesToShow + e, i.slice(s - t + 1, s + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - n.options.slidesToShow).addClass("slick-center") : e === n.slideCount - 1 && i.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(e, e + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= n.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = n.slideCount % n.options.slidesToShow, s = !0 === n.options.infinite ? n.options.slidesToShow + e : e, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - e < n.options.slidesToShow ? i.slice(s - (n.options.slidesToShow - o), s + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, t.prototype.setupInfinite = function () {
        var t, i, s, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
            for (s = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - s; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < s; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.interrupt = function (e) {
        e || this.autoPlay(), this.interrupted = e
    }, t.prototype.selectHandler = function (t) {
        var i = this,
            s = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(s.attr("data-slick-index"));
        if (o || (o = 0), i.slideCount <= i.options.slidesToShow) return i.setSlideClasses(o), void i.asNavFor(o);
        i.slideHandler(o)
    }, t.prototype.slideHandler = function (t, i, s) {
        var o, n, l, r, a, d, c = this;
        if (i = i || !1, (!0 !== c.animating || !0 !== c.options.waitForAnimate) && !(!0 === c.options.fade && c.currentSlide === t || c.slideCount <= c.options.slidesToShow))
            if (!1 === i && c.asNavFor(t), o = t, a = c.getLeft(o), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (o = c.currentSlide, !0 !== s ? c.animateSlide(r, function () {
                c.postSlide(o)
            }) : c.postSlide(o));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (o = c.currentSlide, !0 !== s ? c.animateSlide(r, function () {
            c.postSlide(o)
        }) : c.postSlide(o));
        else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), n = o < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + o : o >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : o - c.slideCount : o, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, n]), l = c.currentSlide, c.currentSlide = n, c.setSlideClasses(c.currentSlide), c.options.asNavFor && null !== (d = c.getNavTarget()) && "object" == typeof d && d.each(function () {
                    var t = e(this).slick("getSlick");
                    t.slideCount <= t.options.slidesToShow && t.setSlideClasses(c.currentSlide)
                }), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== s ? (c.fadeSlideOut(l), c.fadeSlide(n, function () {
                c.postSlide(n)
            })) : c.postSlide(n), void c.animateHeight();
            !0 !== s ? c.animateSlide(a, function () {
                c.postSlide(n)
            }) : c.postSlide(n)
        }
    }, t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function () {
        var e, t, i, s, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), (s = Math.round(180 * i / Math.PI)) < 0 && (s = 360 - Math.abs(s)), s <= 45 && s >= 0 ? !1 === o.options.rtl ? "left" : "right" : s <= 360 && s >= 315 ? !1 === o.options.rtl ? "left" : "right" : s >= 135 && s <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? s >= 35 && s <= 135 ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function (e) {
        var t, i, s = this;
        if (s.dragging = !1, s.interrupted = !1, s.shouldClick = !(s.touchObject.swipeLength > 10), s.$list.removeClass("is-dragging"), void 0 === s.touchObject.curX) return !1;
        if (!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe) {
            switch (i = s.swipeDirection()) {
                case "left":
                case "down":
                    t = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), s.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), s.currentDirection = 1
            }
            "vertical" != i && (s.slideHandler(t), s.touchObject = {}, s.$slider.trigger("swipe", [s, i]))
        } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), s.touchObject = {})
    }, t.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function (e) {
        var t, i, s, o, n, l = this;
        return n = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!l.dragging || n && 1 !== n.length) && (t = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : e.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), !0 === l.options.verticalSwiping && (l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2)))), "vertical" !== (i = l.swipeDirection()) ? (void 0 !== e.originalEvent && l.touchObject.swipeLength > 4 && e.preventDefault(), o = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (o = l.touchObject.curY > l.touchObject.startY ? 1 : -1), s = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === i || l.currentSlide >= l.getDotCount() && "left" === i) && (s = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = t + s * o : l.swipeLeft = t + s * (l.$list.height() / l.listWidth) * o, !0 === l.options.verticalSwiping && (l.swipeLeft = t + s * o), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))) : void 0)
    }, t.prototype.swipeStart = function (e) {
        var t, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0, i.$list.addClass("is-dragging")
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function (e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy()
    }, t.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, t.prototype.visibility = function () {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, e.fn.slick = function () {
        var e, i, s = this,
            o = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            l = s.length;
        for (e = 0; e < l; e++)
            if ("object" == typeof o || void 0 === o ? s[e].slick = new t(s[e], o) : i = s[e].slick[o].apply(s[e].slick, n), void 0 !== i) return i;
        return s
    }
}),
function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Pjax = e()
    }
}(function () {
    return function e(t, i, s) {
        function o(l, r) {
            if (!i[l]) {
                if (!t[l]) {
                    var a = "function" == typeof require && require;
                    if (!r && a) return a(l, !0);
                    if (n) return n(l, !0);
                    var d = new Error("Cannot find module '" + l + "'");
                    throw d.code = "MODULE_NOT_FOUND", d
                }
                var c = i[l] = {
                    exports: {}
                };
                t[l][0].call(c.exports, function (e) {
                    var i = t[l][1][e];
                    return o(i || e)
                }, c, c.exports, e, t, i, s)
            }
            return i[l].exports
        }
        for (var n = "function" == typeof require && require, l = 0; l < s.length; l++) o(s[l]);
        return o
    }({
        1: [function (e, t, i) {
            var s = e("./lib/clone.js"),
                o = e("./lib/execute-scripts.js"),
                n = e("./lib/foreach-els.js"),
                l = e("./lib/switches"),
                r = e("./lib/uniqueid.js"),
                a = e("./lib/events/on.js"),
                d = e("./lib/events/trigger.js"),
                c = e("./lib/util/contains.js"),
                p = e("./lib/util/noop"),
                u = function (t) {
                    this.state = {
                        numPendingSwitches: 0,
                        href: null,
                        options: null
                    }, e("./lib/proto/parse-options.js").call(this, t), this.log("Pjax options", this.options), this.options.scrollRestoration && "scrollRestoration" in history && (history.scrollRestoration = "manual"), this.maxUid = this.lastUid = r(), this.parseDOM(document), a(window, "popstate", function (e) {
                        if (e.state) {
                            var t = s(this.options);
                            t.url = e.state.url, t.title = e.state.title, t.history = !1, t.requestOptions = {}, t.scrollPos = e.state.scrollPos, e.state.uid < this.lastUid ? t.backward = !0 : t.forward = !0, this.lastUid = e.state.uid, this.loadUrl(e.state.url, t)
                        }
                    }.bind(this))
                };
            if (u.switches = l, u.prototype = {
                    log: e("./lib/proto/log.js"),
                    getElements: function (e) {
                        return e.querySelectorAll(this.options.elements)
                    },
                    parseDOM: function (t) {
                        var i = e("./lib/proto/parse-element");
                        n(this.getElements(t), i, this)
                    },
                    refresh: function (e) {
                        this.parseDOM(e || document)
                    },
                    reload: function () {
                        window.location.reload()
                    },
                    attachLink: e("./lib/proto/attach-link.js"),
                    attachForm: e("./lib/proto/attach-form.js"),
                    forEachSelectors: function (t, i, s) {
                        return e("./lib/foreach-selectors.js").bind(this)(this.options.selectors, t, i, s)
                    },
                    switchSelectors: function (t, i, s, o) {
                        return e("./lib/switches-selectors.js").bind(this)(this.options.switches, this.options.switchesOptions, t, i, s, o)
                    },
                    latestChance: function (e) {
                        window.location = e
                    },
                    onSwitch: function () {
                        d(window, "resize scroll"), this.state.numPendingSwitches--, 0 === this.state.numPendingSwitches && this.afterAllSwitches()
                    },
                    loadContent: function (e, t) {
                        var i = document.implementation.createHTMLDocument("pjax"),
                            s = e.match(/<html[^>]+>/gi);
                        if (s && s.length && (s = s[0].match(/\s?[a-z:]+(?:\=(?:\'|\")[^\'\">]+(?:\'|\"))*/gi)).length && (s.shift(), s.forEach(function (e) {
                                var t = e.trim().split("=");
                                1 === t.length ? i.documentElement.setAttribute(t[0], !0) : i.documentElement.setAttribute(t[0], t[1].slice(1, -1))
                            })), i.documentElement.innerHTML = e, this.log("load content", i.documentElement.attributes, i.documentElement.innerHTML.length), document.activeElement && c(this.options.selectors, document.activeElement)) try {
                            document.activeElement.blur()
                        } catch (e) {}
                        this.switchSelectors(this.options.selectors, i, document, t)
                    },
                    abortRequest: e("./lib/abort-request.js"),
                    doRequest: e("./lib/send-request.js"),
                    loadUrl: function (e, t) {
                        this.log("load href", e, t), this.abortRequest(this.request), d(document, "pjax:send", t), t.requestOptions.timeout = this.options.timeout, this.request = this.doRequest(e, t.requestOptions, function (i, o) {
                            if (!1 !== i) {
                                var n = window.history.state || {};
                                window.history.replaceState({
                                    url: n.url || window.location.href,
                                    title: n.title || document.title,
                                    uid: n.uid || r(),
                                    scrollPos: [document.documentElement.scrollLeft || document.body.scrollLeft, document.documentElement.scrollTop || document.body.scrollTop]
                                }, document.title, window.location);
                                var l = e;
                                o.responseURL ? e !== o.responseURL && (e = o.responseURL) : o.getResponseHeader("X-PJAX-URL") ? e = o.getResponseHeader("X-PJAX-URL") : o.getResponseHeader("X-XHR-Redirected-To") && (e = o.getResponseHeader("X-XHR-Redirected-To"));
                                var a = document.createElement("a");
                                a.href = l;
                                var c = a.hash;
                                a.href = e, c && !a.hash && (a.hash = c, e = a.href), this.state.href = e, this.state.options = s(t);
                                try {
                                    this.loadContent(i, t)
                                } catch (t) {
                                    if (this.options.debug) throw t;
                                    return console && console.error && console.error("Pjax switch fail: ", t), this.latestChance(e)
                                }
                            } else d(document, "pjax:complete pjax:error", t)
                        }.bind(this))
                    },
                    afterAllSwitches: function () {
                        var e = Array.prototype.slice.call(document.querySelectorAll("[autofocus]")).pop();
                        e && document.activeElement !== e && e.focus(), this.options.selectors.forEach(function (e) {
                            n(document.querySelectorAll(e), function (e) {
                                o(e)
                            })
                        });
                        var t = this.state;
                        if (t.options.history && (window.history.state || (this.lastUid = this.maxUid = r(), window.history.replaceState({
                                url: window.location.href,
                                title: document.title,
                                uid: this.maxUid,
                                scrollPos: [0, 0]
                            }, document.title)), this.lastUid = this.maxUid = r(), window.history.pushState({
                                url: t.href,
                                title: t.options.title,
                                uid: this.maxUid,
                                scrollPos: [0, 0]
                            }, t.options.title, t.href)), this.forEachSelectors(function (e) {
                                this.parseDOM(e)
                            }, this), d(document, "pjax:complete pjax:success", t.options), "function" == typeof t.options.analytics && t.options.analytics(), t.options.history) {
                            var i = document.createElement("a");
                            if (i.href = this.state.href, i.hash) {
                                var s = i.hash.slice(1);
                                s = decodeURIComponent(s);
                                var l = 0,
                                    a = document.getElementById(s) || document.getElementsByName(s)[0];
                                if (a && a.offsetParent)
                                    do {
                                        l += a.offsetTop, a = a.offsetParent
                                    } while (a);
                                window.scrollTo(0, l)
                            } else !1 !== t.options.scrollTo && (t.options.scrollTo.length > 1 ? window.scrollTo(t.options.scrollTo[0], t.options.scrollTo[1]) : window.scrollTo(0, t.options.scrollTo))
                        } else t.options.scrollRestoration && t.options.scrollPos && window.scrollTo(t.options.scrollPos[0], t.options.scrollPos[1]);
                        this.state = {
                            numPendingSwitches: 0,
                            href: null,
                            options: null
                        }
                    }
                }, u.isSupported = e("./lib/is-supported.js"), u.isSupported()) t.exports = u;
            else {
                var h = p;
                for (var f in u.prototype) u.prototype.hasOwnProperty(f) && "function" == typeof u.prototype[f] && (h[f] = p);
                t.exports = h
            }
        }, {
            "./lib/abort-request.js": 2,
            "./lib/clone.js": 3,
            "./lib/events/on.js": 5,
            "./lib/events/trigger.js": 6,
            "./lib/execute-scripts.js": 7,
            "./lib/foreach-els.js": 8,
            "./lib/foreach-selectors.js": 9,
            "./lib/is-supported.js": 10,
            "./lib/proto/attach-form.js": 11,
            "./lib/proto/attach-link.js": 12,
            "./lib/proto/log.js": 13,
            "./lib/proto/parse-element": 14,
            "./lib/proto/parse-options.js": 15,
            "./lib/send-request.js": 16,
            "./lib/switches": 18,
            "./lib/switches-selectors.js": 17,
            "./lib/uniqueid.js": 19,
            "./lib/util/contains.js": 20,
            "./lib/util/noop": 21
        }],
        2: [function (e, t, i) {
            var s = e("./util/noop");
            t.exports = function (e) {
                e && e.readyState < 4 && (e.onreadystatechange = s, e.abort())
            }
        }, {
            "./util/noop": 21
        }],
        3: [function (e, t, i) {
            t.exports = function (e) {
                if (null === e || "object" != typeof e) return e;
                var t = e.constructor();
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                return t
            }
        }, {}],
        4: [function (e, t, i) {
            t.exports = function (e) {
                var t = e.text || e.textContent || e.innerHTML || "",
                    i = e.src || "",
                    s = e.parentNode || document.querySelector("head") || document.documentElement,
                    o = document.createElement("script");
                if (t.match("document.write")) return console && console.log && console.log("Script contains document.write. Can’t be executed correctly. Code skipped ", e), !1;
                if (o.type = "text/javascript", "" !== i && (o.src = i, o.async = !1), "" !== t) try {
                    o.appendChild(document.createTextNode(t))
                } catch (e) {
                    o.text = t
                }
                return s.appendChild(o), ["head", "body"].indexOf(s.tagName.toLowerCase()) > 0 && s.removeChild(o), !0
            }
        }, {}],
        5: [function (e, t, i) {
            var s = e("../foreach-els");
            t.exports = function (e, t, i, o) {
                (t = "string" == typeof t ? t.split(" ") : t).forEach(function (t) {
                    s(e, function (e) {
                        e.addEventListener(t, i, o)
                    })
                })
            }
        }, {
            "../foreach-els": 8
        }],
        6: [function (e, t, i) {
            var s = e("../foreach-els");
            t.exports = function (e, t, i) {
                (t = "string" == typeof t ? t.split(" ") : t).forEach(function (t) {
                    var o;
                    (o = document.createEvent("HTMLEvents")).initEvent(t, !0, !0), o.eventName = t, i && Object.keys(i).forEach(function (e) {
                        o[e] = i[e]
                    }), s(e, function (e) {
                        var t = !1;
                        e.parentNode || e === document || e === window || (t = !0, document.body.appendChild(e)), e.dispatchEvent(o), t && e.parentNode.removeChild(e)
                    })
                })
            }
        }, {
            "../foreach-els": 8
        }],
        7: [function (e, t, i) {
            var s = e("./foreach-els"),
                o = e("./eval-script");
            t.exports = function (e) {
                "script" === e.tagName.toLowerCase() && o(e), s(e.querySelectorAll("script"), function (e) {
                    e.type && "text/javascript" !== e.type.toLowerCase() || (e.parentNode && e.parentNode.removeChild(e), o(e))
                })
            }
        }, {
            "./eval-script": 4,
            "./foreach-els": 8
        }],
        8: [function (e, t, i) {
            t.exports = function (e, t, i) {
                return e instanceof HTMLCollection || e instanceof NodeList || e instanceof Array ? Array.prototype.forEach.call(e, t, i) : t.call(i, e)
            }
        }, {}],
        9: [function (e, t, i) {
            var s = e("./foreach-els");
            t.exports = function (e, t, i, o) {
                o = o || document, e.forEach(function (e) {
                    s(o.querySelectorAll(e), t, i)
                })
            }
        }, {
            "./foreach-els": 8
        }],
        10: [function (e, t, i) {
            t.exports = function () {
                return window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)
            }
        }, {}],
        11: [function (e, t, i) {
            var s = e("../events/on"),
                o = e("../clone"),
                n = "data-pjax-click-state",
                l = function (e, t) {
                    var i = o(this.options);
                    i.requestOptions = {
                        requestUrl: e.getAttribute("action") || window.location.href,
                        requestMethod: e.getAttribute("method") || "GET"
                    };
                    var s = document.createElement("a");
                    if (s.setAttribute("href", i.requestOptions.requestUrl), s.protocol === window.location.protocol && s.host === window.location.host)
                        if (s.pathname === window.location.pathname && s.hash.length > 0) e.setAttribute(n, "anchor-present");
                        else if (s.href !== window.location.href.split("#")[0] + "#")
                        if (i.currentUrlFullReload) e.setAttribute(n, "reload");
                        else {
                            t.preventDefault();
                            var l = [];
                            for (var r in e.elements) {
                                var a = e.elements[r];
                                a.name && void 0 !== a.attributes && "button" !== a.tagName.toLowerCase() && ("checkbox" !== a.attributes.type && "radio" !== a.attributes.type || a.checked) && l.push({
                                    name: encodeURIComponent(a.name),
                                    value: encodeURIComponent(a.value)
                                })
                            }
                            var d = l.map(function (e) {
                                return e.name + "=" + e.value
                            }).join("&");
                            i.requestOptions.requestPayload = l, i.requestOptions.requestPayloadString = d, e.setAttribute(n, "submit"), i.triggerElement = e, this.loadUrl(s.href, i)
                        }
                    else e.setAttribute(n, "anchor-empty");
                    else e.setAttribute(n, "external")
                },
                r = function (e) {
                    return e.defaultPrevented || !1 === e.returnValue
                };
            t.exports = function (e) {
                var t = this;
                s(e, "submit", function (i) {
                    r(i) || l.call(t, e, i)
                }), s(e, "keyup", function (i) {
                    r(i) || 13 === i.keyCode && l.call(t, e, i)
                }.bind(this))
            }
        }, {
            "../clone": 3,
            "../events/on": 5
        }],
        12: [function (e, t, i) {
            var s = e("../events/on"),
                o = e("../clone"),
                n = "data-pjax-click-state",
                l = function (e, t) {
                    var i = o(this.options);
                    if (i.requestOptions = {}, t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) e.setAttribute(n, "modifier");
                    else if (e.protocol === window.location.protocol && e.host === window.location.host)
                        if (e.pathname === window.location.pathname && e.hash.length > 0) e.setAttribute(n, "anchor-present");
                        else if (e.hash && e.href.replace(e.hash, "") === window.location.href.replace(location.hash, "")) e.setAttribute(n, "anchor");
                    else if (e.href !== window.location.href.split("#")[0] + "#") {
                        if (t.preventDefault(), this.options.currentUrlFullReload && e.href === window.location.href.split("#")[0]) return e.setAttribute(n, "reload"), void this.reload();
                        e.setAttribute(n, "load"), i.triggerElement = e, this.loadUrl(e.href, i)
                    } else e.setAttribute(n, "anchor-empty");
                    else e.setAttribute(n, "external")
                },
                r = function (e) {
                    return e.defaultPrevented || !1 === e.returnValue
                };
            t.exports = function (e) {
                var t = this;
                s(e, "click", function (i) {
                    r(i) || l.call(t, e, i)
                }), s(e, "keyup", function (i) {
                    r(i) || (i.which > 1 || i.metaKey || i.ctrlKey || i.shiftKey || i.altKey ? e.setAttribute("data-pjax-keyup-state", "modifier") : 13 === i.keyCode && l.call(t, e, i))
                }.bind(this))
            }
        }, {
            "../clone": 3,
            "../events/on": 5
        }],
        13: [function (e, t, i) {
            t.exports = function () {
                this.options.debug && console && ("function" == typeof console.log ? console.log.apply(console, arguments) : console.log && console.log(arguments))
            }
        }, {}],
        14: [function (e, t, i) {
            t.exports = function (e) {
                switch (e.tagName.toLowerCase()) {
                    case "a":
                        e.hasAttribute("data-pjax-click-state") || this.attachLink(e);
                        break;
                    case "form":
                        e.hasAttribute("data-pjax-click-state") || this.attachForm(e);
                        break;
                    default:
                        throw "Pjax can only be applied on <a> or <form> submit"
                }
            }
        }, {}],
        15: [function (e, t, i) {
            var s = e("../switches");
            t.exports = function (e) {
                (e = e || {}).elements = e.elements || "a[href], form[action]", e.selectors = e.selectors || ["title", ".js-Pjax"], e.switches = e.switches || {}, e.switchesOptions = e.switchesOptions || {}, e.history = e.history || !0, e.analytics = "function" == typeof e.analytics || !1 === e.analytics ? e.analytics : function () {
                    window._gaq && _gaq.push(["_trackPageview"]), window.ga && ga("send", "pageview", {
                        page: location.pathname,
                        title: document.title
                    })
                }, e.scrollTo = void 0 === e.scrollTo ? 0 : e.scrollTo, e.scrollRestoration = void 0 === e.scrollRestoration || e.scrollRestoration, e.cacheBust = void 0 === e.cacheBust || e.cacheBust, e.debug = e.debug || !1, e.timeout = e.timeout || 0, e.currentUrlFullReload = void 0 !== e.currentUrlFullReload && e.currentUrlFullReload, e.switches.head || (e.switches.head = s.switchElementsAlt), e.switches.body || (e.switches.body = s.switchElementsAlt), this.options = e
            }
        }, {
            "../switches": 18
        }],
        16: [function (e, t, i) {
            t.exports = function (e, t, i) {
                var s = (t = t || {}).requestMethod || "GET",
                    o = t.requestPayloadString || null,
                    n = new XMLHttpRequest;
                return n.onreadystatechange = function () {
                    4 === n.readyState && (200 === n.status ? i(n.responseText, n) : i(null, n))
                }, n.onerror = function (e) {
                    console.log(e), i(null, n)
                }, n.ontimeout = function () {
                    i(null, n)
                }, this.options.cacheBust && (e += (/[?&]/.test(e) ? "&" : "?") + (new Date).getTime()), n.open(s.toUpperCase(), e, !0), n.timeout = t.timeout, n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.setRequestHeader("X-PJAX", "true"), void 0 !== t.requestPayloadString && "" !== t.requestPayloadString && n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.send(o), n
            }
        }, {}],
        17: [function (e, t, i) {
            var s = e("./foreach-els"),
                o = e("./switches");
            t.exports = function (e, t, i, n, l, r) {
                var a = [];
                i.forEach(function (i) {
                    var d = n.querySelectorAll(i),
                        c = l.querySelectorAll(i);
                    if (this.log && this.log("Pjax switch", i, d, c), d.length !== c.length) throw "DOM doesn’t look the same on new loaded page: ’" + i + "’ - new " + d.length + ", old " + c.length;
                    s(d, function (s, n) {
                        var l = c[n];
                        this.log && this.log("newEl", s, "oldEl", l);
                        var d = e[i] ? e[i].bind(this, l, s, r, t[i]) : o.outerHTML.bind(this, l, s, r);
                        a.push(d)
                    }, this)
                }, this), this.state.numPendingSwitches = a.length, a.forEach(function (e) {
                    e()
                })
            }
        }, {
            "./foreach-els": 8,
            "./switches": 18
        }],
        18: [function (e, t, i) {
            var s = e("./events/on.js");
            t.exports = {
                outerHTML: function (e, t) {
                    e.outerHTML = t.outerHTML, this.onSwitch()
                },
                innerHTML: function (e, t) {
                    e.innerHTML = t.innerHTML, e.className = t.className, this.onSwitch()
                },
                switchElementsAlt: function (e, t) {
                    if (e.innerHTML = t.innerHTML, t.hasAttributes())
                        for (var i = t.attributes, s = 0; s < i.length; s++) e.attributes.setNamedItem(i[s].cloneNode());
                    this.onSwitch()
                },
                sideBySide: function (e, t, i, o) {
                    var n = Array.prototype.forEach,
                        l = [],
                        r = [],
                        a = document.createDocumentFragment(),
                        d = "animationend webkitAnimationEnd MSAnimationEnd oanimationend",
                        c = 0,
                        p = function (e) {
                            e.target === e.currentTarget && --c <= 0 && l && (l.forEach(function (e) {
                                e.parentNode && e.parentNode.removeChild(e)
                            }), r.forEach(function (e) {
                                e.className = e.className.replace(e.getAttribute("data-pjax-classes"), ""), e.removeAttribute("data-pjax-classes")
                            }), r = null, l = null, this.onSwitch())
                        }.bind(this);
                    o = o || {}, n.call(e.childNodes, function (e) {
                        l.push(e), e.classList && !e.classList.contains("js-Pjax-remove") && (e.hasAttribute("data-pjax-classes") && (e.className = e.className.replace(e.getAttribute("data-pjax-classes"), ""), e.removeAttribute("data-pjax-classes")), e.classList.add("js-Pjax-remove"), o.callbacks && o.callbacks.removeElement && o.callbacks.removeElement(e), o.classNames && (e.className += " " + o.classNames.remove + " " + (i.backward ? o.classNames.backward : o.classNames.forward)), c++, s(e, d, p, !0))
                    }), n.call(t.childNodes, function (e) {
                        if (e.classList) {
                            var t = "";
                            o.classNames && (t = " js-Pjax-add " + o.classNames.add + " " + (i.backward ? o.classNames.forward : o.classNames.backward)), o.callbacks && o.callbacks.addElement && o.callbacks.addElement(e), e.className += t, e.setAttribute("data-pjax-classes", t), r.push(e), a.appendChild(e), c++, s(e, d, p, !0)
                        }
                    }), e.className = t.className, e.appendChild(a)
                }
            }
        }, {
            "./events/on.js": 5
        }],
        19: [function (e, t, i) {
            var s;
            t.exports = (s = 0, function () {
                var e = "pjax" + (new Date).getTime() + "_" + s;
                return s++, e
            })
        }, {}],
        20: [function (e, t, i) {
            t.exports = function (e, t, i) {
                for (var s = 0; s < t.length; s++)
                    for (var o = e.querySelectorAll(t[s]), n = 0; n < o.length; n++)
                        if (o[n].contains(i)) return !0;
                return !1
            }
        }, {}],
        21: [function (e, t, i) {
            t.exports = function () {}
        }, {}]
    }, {}, [1])(1)
}),
function (e, t) {
    "function" == typeof define && define.amd ? define([], function () {
        return e.svg4everybody = t()
    }) : "object" == typeof module && module.exports ? module.exports = t() : e.svg4everybody = t()
}(this, function () {
    function e(e, t, i) {
        if (i) {
            var s = document.createDocumentFragment(),
                o = !t.hasAttribute("viewBox") && i.getAttribute("viewBox");
            o && t.setAttribute("viewBox", o);
            for (var n = i.cloneNode(!0); n.childNodes.length;) s.appendChild(n.firstChild);
            e.appendChild(s)
        }
    }

    function t(t) {
        t.onreadystatechange = function () {
            if (4 === t.readyState) {
                var i = t._cachedDocument;
                i || ((i = t._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = t.responseText, t._cachedTarget = {}), t._embeds.splice(0).map(function (s) {
                    var o = t._cachedTarget[s.id];
                    o || (o = t._cachedTarget[s.id] = i.getElementById(s.id)), e(s.parent, s.svg, o)
                })
            }
        }, t.onreadystatechange()
    }

    function i(e) {
        for (var t = e;
            "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode););
        return t
    }
    return function (s) {
        var o, n = Object(s),
            l = window.top !== window.self;
        o = "polyfill" in n ? n.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && l;
        var r = {},
            a = window.requestAnimationFrame || setTimeout,
            d = document.getElementsByTagName("use"),
            c = 0;
        o && function s() {
            for (var l = 0; l < d.length;) {
                var p = d[l],
                    u = p.parentNode,
                    h = i(u),
                    f = p.getAttribute("xlink:href") || p.getAttribute("href");
                if (!f && n.attributeName && (f = p.getAttribute(n.attributeName)), h && f) {
                    if (o)
                        if (!n.validate || n.validate(f, h, p)) {
                            u.removeChild(p);
                            var m = f.split("#"),
                                g = m.shift(),
                                v = m.join("#");
                            if (g.length) {
                                var b = r[g];
                                b || ((b = r[g] = new XMLHttpRequest).open("GET", g), b.send(), b._embeds = []), b._embeds.push({
                                    parent: u,
                                    svg: h,
                                    id: v
                                }), t(b)
                            } else e(u, h, document.getElementById(v))
                        } else ++l, ++c
                } else ++l
            }(!d.length || d.length - c > 0) && a(s, 67)
        }()
    }
});