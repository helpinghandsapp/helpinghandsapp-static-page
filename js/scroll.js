! function(t, i, s) {
    t.fn.simplyScroll = function(i) {
        return this.each(function() {
            new t.simplyScroll(this, i)
        })
    };
    var e = {
        customClass: "simply-scroll",
        frameRate: 24,
        speed: 1,
        orientation: "horizontal",
        auto: !0,
        autoMode: "loop",
        manualMode: "end",
        direction: "forwards",
        pauseOnHover: !0,
        pauseOnTouch: !0,
        pauseButton: !1,
        startOnLoad: !1
    };
    t.simplyScroll = function(s, o) {
        var n = this;
        this.o = t.extend({}, e, o || {}), this.isAuto = !1 !== this.o.auto && null !== this.o.autoMode.match(/^loop|bounce$/), this.isRTL = (this.isHorizontal = null !== this.o.orientation.match(/^horizontal|vertical$/) && this.o.orientation == e.orientation) && "rtl" == t("html").attr("dir"), this.isForwards = !this.isAuto || this.isAuto && null !== this.o.direction.match(/^forwards|backwards$/) && this.o.direction == e.direction && !this.isRTL, this.isLoop = this.isAuto && "loop" == this.o.autoMode || !this.isAuto && "loop" == this.o.manualMode, this.events = (this.supportsTouch = "createTouch" in document) ? {
            start: "touchstart MozTouchDown",
            move: "touchmove MozTouchMove",
            end: "touchend touchcancel MozTouchRelease"
        } : {
            start: "mouseenter",
            end: "mouseleave"
        }, this.$list = t(s);
        var r = this.$list.children();
        if (this.$list.addClass("simply-scroll-list").wrap('<div class="simply-scroll-clip"></div>').parent().wrap('<div class="' + this.o.customClass + ' simply-scroll-container"></div>'), this.isAuto ? this.o.pauseButton && (this.$list.parent().parent().prepend('<div class="simply-scroll-btn simply-scroll-btn-pause"></div>'), this.o.pauseOnHover = !1) : this.$list.parent().parent().prepend('<div class="simply-scroll-forward"></div>').prepend('<div class="simply-scroll-back"></div>'), 1 < r.length) {
            var a = !1,
                l = 0;
            this.isHorizontal ? (r.each(function() {
                l += t(this).outerWidth(!0)
            }), a = r.eq(0).outerWidth(!0) * r.length !== l) : (r.each(function() {
                l += t(this).outerHeight(!0)
            }), a = r.eq(0).outerHeight(!0) * r.length !== l), a && (this.$list = this.$list.wrap("<div></div>").parent().addClass("simply-scroll-list"), this.isHorizontal ? this.$list.children().css({
                "float": "left",
                width: l + "px"
            }) : this.$list.children().css({
                height: l + "px"
            }))
        }
        this.o.startOnLoad ? t(i).load(function() {
            n.init()
        }) : this.init()
    }, t.simplyScroll.fn = t.simplyScroll.prototype = {}, t.simplyScroll.fn.extend = t.simplyScroll.extend = t.extend, t.simplyScroll.fn.extend({
        init: function() {
            this.$items = this.$list.children(), this.$clip = this.$list.parent(), this.$container = this.$clip.parent(), this.$btnBack = t(".simply-scroll-back", this.$container), this.$btnForward = t(".simply-scroll-forward", this.$container), this.isHorizontal ? (this.itemMax = this.$items.eq(0).outerWidth(!0), this.clipMax = this.$clip.width(), this.dimension = "width", this.moveBackClass = "simply-scroll-btn-left", this.moveForwardClass = "simply-scroll-btn-right", this.scrollPos = "Left") : (this.itemMax = this.$items.eq(0).outerHeight(!0), this.clipMax = this.$clip.height(), this.dimension = "height", this.moveBackClass = "simply-scroll-btn-up", this.moveForwardClass = "simply-scroll-btn-down", this.scrollPos = "Top"), this.posMin = 0, this.posMax = this.$items.length * this.itemMax;
            var i = Math.ceil(this.clipMax / this.itemMax);
            if (this.isAuto && "loop" == this.o.autoMode) this.$list.css(this.dimension, this.posMax + this.itemMax * i + "px"), this.posMax += this.clipMax - this.o.speed, this.isForwards ? (this.$items.slice(0, i).clone(!0).appendTo(this.$list), this.resetPosition = 0) : (this.$items.slice(-i).clone(!0).prependTo(this.$list), this.resetPosition = this.$items.length * this.itemMax, this.isRTL && (this.$clip[0].dir = "ltr", this.$items.css("float", "right")));
            else if (this.isAuto || "loop" != this.o.manualMode) this.$list.css(this.dimension, this.posMax + "px"), this.isForwards ? this.resetPosition = 0 : (this.resetPosition = this.$items.length * this.itemMax, this.isRTL && (this.$clip[0].dir = "ltr", this.$items.css("float", "right")));
            else {
                this.posMax += this.itemMax * i, this.$list.css(this.dimension, this.posMax + this.itemMax * i + "px"), this.posMax += this.clipMax - this.o.speed, this.$items.slice(0, i).clone(!0).appendTo(this.$list), this.$items.slice(-i).clone(!0).prependTo(this.$list), this.resetPositionForwards = this.resetPosition = i * this.itemMax, this.resetPositionBackwards = this.$items.length * this.itemMax;
                var e = this;
                this.$btnBack.bind(this.events.start, function() {
                    e.isForwards = !1, e.resetPosition = e.resetPositionBackwards
                }), this.$btnForward.bind(this.events.start, function() {
                    e.isForwards = !0, e.resetPosition = e.resetPositionForwards
                })
            }
            if (this.resetPos(), this.interval = null, this.intervalDelay = Math.floor(1e3 / this.o.frameRate), this.isAuto || "end" != this.o.manualMode)
                for (; 0 !== this.itemMax % this.o.speed;)
                    if (this.o.speed--, 0 === this.o.speed) {
                        this.o.speed = 1;
                        break
                    } if (e = this, this.trigger = null, this.funcMoveBack = function(t) {
                    t !== s && t.preventDefault(), e.trigger = e.isAuto || "end" != e.o.manualMode ? null : this, e.isAuto ? e.isForwards ? e.moveBack() : e.moveForward() : e.moveBack()
                }, this.funcMoveForward = function(t) {
                    t !== s && t.preventDefault(), e.trigger = e.isAuto || "end" != e.o.manualMode ? null : this, e.isAuto ? e.isForwards ? e.moveForward() : e.moveBack() : e.moveForward()
                }, this.funcMovePause = function() {
                    e.movePause()
                }, this.funcMoveStop = function() {
                    e.moveStop()
                }, this.funcMoveResume = function() {
                    e.moveResume()
                }, this.isAuto) {
                this.paused = !1;
                var o = function() {
                    return e.paused === !1 ? (e.paused = !0, e.funcMovePause()) : (e.paused = !1, e.funcMoveResume()), e.paused
                };
                if (this.supportsTouch && this.$items.find("a").length && (this.supportsTouch = !1), this.isAuto && this.o.pauseOnHover && !this.supportsTouch) this.$clip.bind(this.events.start, this.funcMovePause).bind(this.events.end, this.funcMoveResume);
                else if (this.isAuto && this.o.pauseOnTouch && !this.o.pauseButton && this.supportsTouch) {
                    var n, r;
                    this.$clip.bind(this.events.start, function(t) {
                        o();
                        var i = t.originalEvent.touches[0];
                        n = e.isHorizontal ? i.pageX : i.pageY, r = e.$clip[0]["scroll" + e.scrollPos], t.stopPropagation(), t.preventDefault()
                    }).bind(this.events.move, function(t) {
                        t.stopPropagation(), t.preventDefault(), t = t.originalEvent.touches[0], t = n - (e.isHorizontal ? t.pageX : t.pageY) + r, 0 > t ? t = 0 : t > e.posMax && (t = e.posMax), e.$clip[0]["scroll" + e.scrollPos] = t, e.funcMovePause(), e.paused = !0
                    })
                } else this.o.pauseButton && (this.$btnPause = t(".simply-scroll-btn-pause", this.$container).bind("click", function(i) {
                    i.preventDefault(), o() ? t(this).addClass("active") : t(this).removeClass("active")
                }));
                this.funcMoveForward()
            } else this.$btnBack.addClass("simply-scroll-btn " + this.moveBackClass).bind(this.events.start, this.funcMoveBack).bind(this.events.end, this.funcMoveStop), this.$btnForward.addClass("simply-scroll-btn " + this.moveForwardClass).bind(this.events.start, this.funcMoveForward).bind(this.events.end, this.funcMoveStop), "end" == this.o.manualMode && (this.isRTL ? this.$btnForward.addClass("disabled") : this.$btnBack.addClass("disabled"))
        },
        moveForward: function() {
            var t = this;
            this.movement = "forward", null !== this.trigger && this.$btnBack.removeClass("disabled"), t.interval = setInterval(function() {
                t.$clip[0]["scroll" + t.scrollPos] < t.posMax - t.clipMax ? t.$clip[0]["scroll" + t.scrollPos] += t.o.speed : t.isLoop ? t.resetPos() : t.moveStop(t.movement)
            }, t.intervalDelay)
        },
        moveBack: function() {
            var t = this;
            this.movement = "back", null !== this.trigger && this.$btnForward.removeClass("disabled"), t.interval = setInterval(function() {
                t.$clip[0]["scroll" + t.scrollPos] > t.posMin ? t.$clip[0]["scroll" + t.scrollPos] -= t.o.speed : t.isLoop ? t.resetPos() : t.moveStop(t.movement)
            }, t.intervalDelay)
        },
        movePause: function() {
            clearInterval(this.interval)
        },
        moveStop: function(i) {
            this.movePause(), null !== this.trigger && ("undefined" != typeof i && t(this.trigger).addClass("disabled"), this.trigger = null), this.isAuto && "bounce" == this.o.autoMode && ("forward" == i ? this.moveBack() : this.moveForward())
        },
        moveResume: function() {
            "forward" == this.movement ? this.moveForward() : this.moveBack()
        },
        resetPos: function() {
            this.$clip[0]["scroll" + this.scrollPos] = this.resetPosition
        }
    })
}(jQuery, window), ! function(t, i) {
    "object" == typeof exports ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : t.Spinner = i()
}(this, function() {
    "use strict";

    function t(t, i) {
        var s, e = document.createElement(t || "div");
        for (s in i) e[s] = i[s];
        return e
    }

    function i(t) {
        for (var i = 1, s = arguments.length; s > i; i++) t.appendChild(arguments[i]);
        return t
    }

    function s(t, i, s, e) {
        var o = ["opacity", i, ~~(100 * t), s, e].join("-"),
            n = .01 + s / e * 100,
            r = Math.max(1 - (1 - t) / i * (100 - n), t),
            a = c.substring(0, c.indexOf("Animation")).toLowerCase(),
            l = a && "-" + a + "-" || "";
        return p[o] || (u.insertRule("@" + l + "keyframes " + o + "{0%{opacity:" + r + "}" + n + "%{opacity:" + t + "}" + (n + .01) + "%{opacity:1}" + (n + i) % 100 + "%{opacity:" + t + "}100%{opacity:" + r + "}}", u.cssRules.length), p[o] = 1), o
    }

    function e(t, i) {
        var s, e, o = t.style;
        for (i = i.charAt(0).toUpperCase() + i.slice(1), e = 0; e < d.length; e++)
            if (s = d[e] + i, void 0 !== o[s]) return s;
        return void 0 !== o[i] ? i : void 0
    }

    function o(t, i) {
        for (var s in i) t.style[e(t, s) || s] = i[s];
        return t
    }

    function n(t) {
        for (var i = 1; i < arguments.length; i++) {
            var s = arguments[i];
            for (var e in s) void 0 === t[e] && (t[e] = s[e])
        }
        return t
    }

    function r(t) {
        for (var i = {
                x: t.offsetLeft,
                y: t.offsetTop
            }; t = t.offsetParent;) i.x += t.offsetLeft, i.y += t.offsetTop;
        return i
    }

    function a(t, i) {
        return "string" == typeof t ? t : t[i % t.length]
    }

    function l(t) {
        return "undefined" == typeof this ? new l(t) : void(this.opts = n(t || {}, l.defaults, f))
    }

    function h() {
        function s(i, s) {
            return t("<" + i + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', s)
        }
        u.addRule(".spin-vml", "behavior:url(#default#VML)"), l.prototype.lines = function(t, e) {
            function n() {
                return o(s("group", {
                    coordsize: c + " " + c,
                    coordorigin: -h + " " + -h
                }), {
                    width: c,
                    height: c
                })
            }

            function r(t, r, l) {
                i(p, i(o(n(), {
                    rotation: 360 / e.lines * t + "deg",
                    left: ~~r
                }), i(o(s("roundrect", {
                    arcsize: e.corners
                }), {
                    width: h,
                    height: e.width,
                    left: e.radius,
                    top: -e.width >> 1,
                    filter: l
                }), s("fill", {
                    color: a(e.color, t),
                    opacity: e.opacity
                }), s("stroke", {
                    opacity: 0
                }))))
            }
            var l, h = e.length + e.width,
                c = 2 * h,
                d = 2 * -(e.width + e.length) + "px",
                p = o(n(), {
                    position: "absolute",
                    top: d,
                    left: d
                });
            if (e.shadow)
                for (l = 1; l <= e.lines; l++) r(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (l = 1; l <= e.lines; l++) r(l);
            return i(t, p)
        }, l.prototype.opacity = function(t, i, s, e) {
            var o = t.firstChild;
            e = e.shadow && e.lines || 0, o && i + e < o.childNodes.length && (o = o.childNodes[i + e], o = o && o.firstChild, o = o && o.firstChild, o && (o.opacity = s))
        }
    }
    var c, d = ["webkit", "Moz", "ms", "O"],
        p = {},
        u = function() {
            var s = t("style", {
                type: "text/css"
            });
            return i(document.getElementsByTagName("head")[0], s), s.sheet || s.styleSheet
        }(),
        f = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            corners: 1,
            color: "#000",
            direction: 1,
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "auto",
            left: "auto",
            position: "relative"
        };
    l.defaults = {}, n(l.prototype, {
        spin: function(i) {
            this.stop();
            var s, e, n = this,
                a = n.opts,
                l = n.el = o(t(0, {
                    className: a.className
                }), {
                    position: a.position,
                    width: 0,
                    zIndex: a.zIndex
                }),
                h = a.radius + a.length + a.width;
            if (i && (i.insertBefore(l, i.firstChild || null), e = r(i), s = r(l), o(l, {
                    left: ("auto" == a.left ? e.x - s.x + (i.offsetWidth >> 1) : parseInt(a.left, 10) + h) + "px",
                    top: ("auto" == a.top ? e.y - s.y + (i.offsetHeight >> 1) : parseInt(a.top, 10) + h) + "px"
                })), l.setAttribute("role", "progressbar"), n.lines(l, n.opts), !c) {
                var d, p = 0,
                    u = (a.lines - 1) * (1 - a.direction) / 2,
                    f = a.fps,
                    m = f / a.speed,
                    v = (1 - a.opacity) / (m * a.trail / 100),
                    g = m / a.lines;
                ! function w() {
                    p++;
                    for (var t = 0; t < a.lines; t++) d = Math.max(1 - (p + (a.lines - t) * g) % m * v, a.opacity), n.opacity(l, t * a.direction + u, d, a);
                    n.timeout = n.el && setTimeout(w, ~~(1e3 / f))
                }()
            }
            return n
        },
        stop: function() {
            var t = this.el;
            return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = void 0), this
        },
        lines: function(e, n) {
            function r(i, s) {
                return o(t(), {
                    position: "absolute",
                    width: n.length + n.width + "px",
                    height: n.width + "px",
                    background: i,
                    boxShadow: s,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / n.lines * h + n.rotate) + "deg) translate(" + n.radius + "px,0)",
                    borderRadius: (n.corners * n.width >> 1) + "px"
                })
            }
            for (var l, h = 0, d = (n.lines - 1) * (1 - n.direction) / 2; h < n.lines; h++) l = o(t(), {
                position: "absolute",
                top: 1 + ~(n.width / 2) + "px",
                transform: n.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: n.opacity,
                animation: c && s(n.opacity, n.trail, d + h * n.direction, n.lines) + " " + 1 / n.speed + "s linear infinite"
            }), n.shadow && i(l, o(r("#000", "0 0 4px #000"), {
                top: "2px"
            })), i(e, i(l, r(a(n.color, h), "0 0 1px rgba(0,0,0,.1)")));
            return e
        },
        opacity: function(t, i, s) {
            i < t.childNodes.length && (t.childNodes[i].style.opacity = s)
        }
    });
    var m = o(t("group"), {
        behavior: "url(#default#VML)"
    });
    return !e(m, "transform") && m.adj ? h() : c = e(m, "animation"), l
}), jQuery(document).ready(function(t) {
    var i, s, e;
    i = {
        lines: 9,
        length: 6,
        width: 3,
        radius: 9,
        corners: 1,
        rotate: 0,
        direction: 1,
        color: "#fff",
        speed: 1,
        trail: 60,
        shadow: !1,
        hwaccel: !1,
        className: "spinner",
        zIndex: 2e9,
        top: "auto",
        left: "auto"
    }, s = document.getElementById("instagram_spinner"), e = new Spinner(i).spin(s), t.getJSON("./assets/instagram.php", function(i) {
        var s = i.data;
        for (var e in s) {
            var o = t('<a href="" title=""><img src=""></a>');
            o.attr("href", s[e].link), o.attr("title", s[e].caption.text), o.find("img").attr("src", s[e].images.low_resolution.url), o.appendTo("#js-instagram-list")
        }
        t("#js-instagram-list").simplyScroll({
            speed: 1,
            frameRate: 20,
            orientation: "horizontal",
            direction: "forwards",
            customClass: "instagram_scroller"
        }), t("#instagram_spinner").remove()
    }), t.getJSON("./assets/dribbble.php", function(i) {
        for (var s in i) {
            var e = t('<a href="" title=""><img src=""></a>');
            e.attr("href", i[s].html_url), e.attr("title", i[s].title), e.find("img").attr("src", i[s].images.normal), e.appendTo("#js-dribbble-projects-list")
        }
    })
});
