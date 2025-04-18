! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Sweetalert2 = e()
}(this, function() {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function a(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function s() {
        return (s = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function u(t) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function l(t, e, n) {
        return (l = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (t) {
                return !1
            }
        }() ? Reflect.construct : function(t, e, n) {
            var o = [null];
            o.push.apply(o, e);
            var i = new(Function.bind.apply(t, o));
            return n && c(i, n.prototype), i
        }).apply(null, arguments)
    }

    function d(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function p(t, e, n) {
        return (p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var o = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
                return t
            }(t, e);
            if (o) {
                var i = Object.getOwnPropertyDescriptor(o, e);
                return i.get ? i.get.call(n) : i.value
            }
        })(t, e, n || t)
    }

    function f(e) {
        return Object.keys(e).map(function(t) {
            return e[t]
        })
    }

    function m(t) {
        return Array.prototype.slice.call(t)
    }

    function g(t) {
        console.error("".concat(e, " ").concat(t))
    }

    function h(t, e) {
        ! function(t) {
            -1 === n.indexOf(t) && (n.push(t), w(t))
        }('"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.'))
    }

    function v(t) {
        return t && Promise.resolve(t) === t
    }

    function t(t) {
        var e = {};
        for (var n in t) e[t[n]] = "swal2-" + t[n];
        return e
    }

    function b(t, e) {
        return t.classList.contains(e)
    }

    function y(e, t, n) {
        m(e.classList).forEach(function(t) {
            -1 === f(x).indexOf(t) && -1 === f(S).indexOf(t) && e.classList.remove(t)
        }), t && t[n] && rt(e, t[n])
    }
    var e = "SweetAlert2:",
        w = function(t) {
            console.warn("".concat(e, " ").concat(t))
        },
        n = [],
        C = function(t) {
            return "function" == typeof t ? t() : t
        },
        k = Object.freeze({
            cancel: "cancel",
            backdrop: "backdrop",
            close: "close",
            esc: "esc",
            timer: "timer"
        }),
        x = t(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "toast-column", "fade", "show", "hide", "noanimation", "close", "title", "header", "content", "actions", "confirm", "cancel", "footer", "icon", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl"]),
        S = t(["success", "warning", "info", "question", "error"]),
        P = {
            previousBodyPadding: null
        };

    function B(t, e) {
        if (!e) return null;
        switch (e) {
            case "select":
            case "textarea":
            case "file":
                return st(t, x[e]);
            case "checkbox":
                return t.querySelector(".".concat(x.checkbox, " input"));
            case "radio":
                return t.querySelector(".".concat(x.radio, " input:checked")) || t.querySelector(".".concat(x.radio, " input:first-child"));
            case "range":
                return t.querySelector(".".concat(x.range, " input"));
            default:
                return st(t, x.input)
        }
    }

    function A(t) {
        if (t.focus(), "file" !== t.type) {
            var e = t.value;
            t.value = "", t.value = e
        }
    }

    function E(t, e, n) {
        t && e && ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)), e.forEach(function(e) {
            t.forEach ? t.forEach(function(t) {
                n ? t.classList.add(e) : t.classList.remove(e)
            }) : n ? t.classList.add(e) : t.classList.remove(e)
        }))
    }

    function T(t, e, n) {
        n || 0 === parseInt(n) ? t.style[e] = "number" == typeof n ? n + "px" : n : t.style.removeProperty(e)
    }

    function L(t, e) {
        var n = 1 < arguments.length && void 0 !== e ? e : "flex";
        t.style.opacity = "", t.style.display = n
    }

    function O(t) {
        t.style.opacity = "", t.style.display = "none"
    }

    function M(t, e, n) {
        e ? L(t, n) : O(t)
    }

    function V(t) {
        return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length))
    }

    function H(t) {
        var e = window.getComputedStyle(t),
            n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
            o = parseFloat(e.getPropertyValue("transition-duration") || "0");
        return 0 < n || 0 < o
    }

    function j() {
        return document.body.querySelector("." + x.container)
    }

    function I(t) {
        var e = j();
        return e ? e.querySelector(t) : null
    }

    function q(t) {
        return I("." + t)
    }

    function R() {
        return q(x.popup)
    }

    function D() {
        var t = R();
        return m(t.querySelectorAll("." + x.icon))
    }

    function N() {
        var t = D().filter(function(t) {
            return V(t)
        });
        return t.length ? t[0] : null
    }

    function U() {
        return q(x.title)
    }

    function F() {
        return q(x.content)
    }

    function _() {
        return q(x.image)
    }

    function z() {
        return q(x["progress-steps"])
    }

    function W() {
        return q(x["validation-message"])
    }

    function K() {
        return I("." + x.actions + " ." + x.confirm)
    }

    function Z() {
        return I("." + x.actions + " ." + x.cancel)
    }

    function Q() {
        return q(x.actions)
    }

    function Y() {
        return q(x.header)
    }

    function $() {
        return q(x.footer)
    }

    function J() {
        return q(x.close)
    }

    function X() {
        var t = m(R().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t, e) {
                return t = parseInt(t.getAttribute("tabindex")), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0
            }),
            e = m(R().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(t) {
                return "-1" !== t.getAttribute("tabindex")
            });
        return function(t) {
            for (var e = [], n = 0; n < t.length; n++) - 1 === e.indexOf(t[n]) && e.push(t[n]);
            return e
        }(t.concat(e)).filter(function(t) {
            return V(t)
        })
    }

    function G() {
        return !ut() && !document.body.classList.contains(x["no-backdrop"])
    }

    function tt() {
        return "undefined" == typeof window || "undefined" == typeof document
    }

    function et(t) {
        Fe.isVisible() && it !== t.target.value && Fe.resetValidationMessage(), it = t.target.value
    }

    function nt(t, e) {
        t instanceof HTMLElement ? e.appendChild(t) : "object" === r(t) ? dt(e, t) : t && (e.innerHTML = t)
    }

    function ot(t, e) {
        var n = Q(),
            o = K(),
            i = Z();
        e.showConfirmButton || e.showCancelButton || O(n), y(n, e.customClass, "actions"), ft(o, "confirm", e), ft(i, "cancel", e), e.buttonsStyling ? function(t, e, n) {
            rt([t, e], x.styled), n.confirmButtonColor && (t.style.backgroundColor = n.confirmButtonColor);
            n.cancelButtonColor && (e.style.backgroundColor = n.cancelButtonColor);
            var o = window.getComputedStyle(t).getPropertyValue("background-color");
            t.style.borderLeftColor = o, t.style.borderRightColor = o
        }(o, i, e) : (at([o, i], x.styled), o.style.backgroundColor = o.style.borderLeftColor = o.style.borderRightColor = "", i.style.backgroundColor = i.style.borderLeftColor = i.style.borderRightColor = ""), e.reverseButtons && o.parentNode.insertBefore(i, o)
    }
    var it, rt = function(t, e) {
            E(t, e, !0)
        },
        at = function(t, e) {
            E(t, e, !1)
        },
        st = function(t, e) {
            for (var n = 0; n < t.childNodes.length; n++)
                if (b(t.childNodes[n], e)) return t.childNodes[n]
        },
        ut = function() {
            return document.body.classList.contains(x["toast-shown"])
        },
        ct = '\n <div aria-labelledby="'.concat(x.title, '" aria-describedby="').concat(x.content, '" class="').concat(x.popup, '" tabindex="-1">\n   <div class="').concat(x.header, '">\n     <ul class="').concat(x["progress-steps"], '"></ul>\n     <div class="').concat(x.icon, " ").concat(S.error, '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(x.icon, " ").concat(S.question, '"></div>\n     <div class="').concat(x.icon, " ").concat(S.warning, '"></div>\n     <div class="').concat(x.icon, " ").concat(S.info, '"></div>\n     <div class="').concat(x.icon, " ").concat(S.success, '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(x.image, '" />\n     <h2 class="').concat(x.title, '" id="').concat(x.title, '"></h2>\n     <button type="button" class="').concat(x.close, '"></button>\n   </div>\n   <div class="').concat(x.content, '">\n     <div id="').concat(x.content, '"></div>\n     <input class="').concat(x.input, '" />\n     <input type="file" class="').concat(x.file, '" />\n     <div class="').concat(x.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(x.select, '"></select>\n     <div class="').concat(x.radio, '"></div>\n     <label for="').concat(x.checkbox, '" class="').concat(x.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(x.label, '"></span>\n     </label>\n     <textarea class="').concat(x.textarea, '"></textarea>\n     <div class="').concat(x["validation-message"], '" id="').concat(x["validation-message"], '"></div>\n   </div>\n   <div class="').concat(x.actions, '">\n     <button type="button" class="').concat(x.confirm, '">OK</button>\n     <button type="button" class="').concat(x.cancel, '">Cancel</button>\n   </div>\n   <div class="').concat(x.footer, '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        lt = function(t) {
            if (function() {
                    var t = j();
                    t && (t.parentNode.removeChild(t), at([document.documentElement, document.body], [x["no-backdrop"], x["toast-shown"], x["has-column"]]))
                }(), tt()) g("SweetAlert2 requires document to initialize");
            else {
                var e = document.createElement("div");
                e.className = x.container, e.innerHTML = ct;
                var n = function(t) {
                    return "string" == typeof t ? document.querySelector(t) : t
                }(t.target);
                n.appendChild(e),
                    function(t) {
                        var e = R();
                        e.setAttribute("role", t.toast ? "alert" : "dialog"), e.setAttribute("aria-live", t.toast ? "polite" : "assertive"), t.toast || e.setAttribute("aria-modal", "true")
                    }(t),
                    function(t) {
                        "rtl" === window.getComputedStyle(t).direction && rt(j(), x.rtl)
                    }(n),
                    function() {
                        var t = F(),
                            e = st(t, x.input),
                            n = st(t, x.file),
                            o = t.querySelector(".".concat(x.range, " input")),
                            i = t.querySelector(".".concat(x.range, " output")),
                            r = st(t, x.select),
                            a = t.querySelector(".".concat(x.checkbox, " input")),
                            s = st(t, x.textarea);
                        e.oninput = et, n.onchange = et, r.onchange = et, a.onchange = et, s.oninput = et, o.oninput = function(t) {
                            et(t), i.value = o.value
                        }, o.onchange = function(t) {
                            et(t), o.nextSibling.value = o.value
                        }
                    }()
            }
        },
        dt = function(t, e) {
            if (t.innerHTML = "", 0 in e)
                for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
            else t.appendChild(e.cloneNode(!0))
        },
        pt = function() {
            if (tt()) return !1;
            var t = document.createElement("div"),
                e = {
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                };
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n) && void 0 !== t.style[n]) return e[n];
            return !1
        }();

    function ft(t, e, n) {
        M(t, n["showC" + e.substring(1) + "Button"], "inline-block"), t.innerHTML = n[e + "ButtonText"], t.setAttribute("aria-label", n[e + "ButtonAriaLabel"]), t.className = x[e], y(t, n.customClass, e + "Button"), rt(t, n[e + "ButtonClass"])
    }

    function mt(t, e) {
        var n = j();
        n && (function(t, e) {
            "string" == typeof e ? t.style.background = e : e || rt([document.documentElement, document.body], x["no-backdrop"])
        }(n, e.backdrop), !e.backdrop && e.allowOutsideClick && w('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), function(t, e) {
            e in x ? rt(t, x[e]) : (w('The "position" parameter is not valid, defaulting to "center"'), rt(t, x.center))
        }(n, e.position), function(t, e) {
            if (e && "string" == typeof e) {
                var n = "grow-" + e;
                n in x && rt(t, x[n])
            }
        }(n, e.grow), y(n, e.customClass, "container"), e.customContainerClass && rt(n, e.customContainerClass))
    }

    function gt(t, e) {
        t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder)
    }
    var ht = {
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        },
        vt = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
        bt = function(t) {
            if (!Ct[t.input]) return g('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
            var e = Ct[t.input](t);
            L(e), setTimeout(function() {
                A(e)
            })
        },
        yt = function(t, e) {
            var n = B(F(), t);
            if (n)
                for (var o in function(t) {
                        for (var e = 0; e < t.attributes.length; e++) {
                            var n = t.attributes[e].name; - 1 === ["type", "value", "style"].indexOf(n) && t.removeAttribute(n)
                        }
                    }(n), e) "range" === t && "placeholder" === o || n.setAttribute(o, e[o])
        },
        wt = function(t, e, n) {
            t.className = e, n.inputClass && rt(t, n.inputClass), n.customClass && rt(t, n.customClass.input)
        },
        Ct = {};
    Ct.text = Ct.email = Ct.password = Ct.number = Ct.tel = Ct.url = function(t) {
        var e = st(F(), x.input);
        return "string" == typeof t.inputValue || "number" == typeof t.inputValue ? e.value = t.inputValue : v(t.inputValue) || w('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(t.inputValue), '"')), gt(e, t), e.type = t.input, e
    }, Ct.file = function(t) {
        var e = st(F(), x.file);
        return gt(e, t), e.type = t.input, e
    }, Ct.range = function(t) {
        var e = st(F(), x.range),
            n = e.querySelector("input"),
            o = e.querySelector("output");
        return n.value = t.inputValue, n.type = t.input, o.value = t.inputValue, e
    }, Ct.select = function(t) {
        var e = st(F(), x.select);
        if (e.innerHTML = "", t.inputPlaceholder) {
            var n = document.createElement("option");
            n.innerHTML = t.inputPlaceholder, n.value = "", n.disabled = !0, n.selected = !0, e.appendChild(n)
        }
        return e
    }, Ct.radio = function() {
        var t = st(F(), x.radio);
        return t.innerHTML = "", t
    }, Ct.checkbox = function(t) {
        var e = st(F(), x.checkbox),
            n = B(F(), "checkbox");
        return n.type = "checkbox", n.value = 1, n.id = x.checkbox, n.checked = Boolean(t.inputValue), e.querySelector("span").innerHTML = t.inputPlaceholder, e
    }, Ct.textarea = function(t) {
        var e = st(F(), x.textarea);
        if (e.value = t.inputValue, gt(e, t), "MutationObserver" in window) {
            var n = parseInt(window.getComputedStyle(R()).width),
                o = parseInt(window.getComputedStyle(R()).paddingLeft) + parseInt(window.getComputedStyle(R()).paddingRight);
            new MutationObserver(function() {
                var t = e.offsetWidth + o;
                R().style.width = n < t ? t + "px" : null
            }).observe(e, {
                attributes: !0,
                attributeFilter: ["style"]
            })
        }
        return e
    };

    function kt(t, e) {
        var n = F().querySelector("#" + x.content);
        e.html ? (nt(e.html, n), L(n, "block")) : e.text ? (n.textContent = e.text, L(n, "block")) : O(n),
            function(t, o) {
                var i = F(),
                    e = ht.innerParams.get(t),
                    r = !e || o.input !== e.input;
                vt.forEach(function(t) {
                    var e = x[t],
                        n = st(i, e);
                    yt(t, o.inputAttributes), wt(n, e, o), r && O(n)
                }), o.input && r && bt(o)
            }(t, e), y(F(), e.customClass, "content")
    }

    function xt(t, i) {
        var r = z();
        if (!i.progressSteps || 0 === i.progressSteps.length) return O(r);
        L(r), r.innerHTML = "";
        var a = parseInt(null === i.currentProgressStep ? Fe.getQueueStep() : i.currentProgressStep);
        a >= i.progressSteps.length && w("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), i.progressSteps.forEach(function(t, e) {
            var n = function(t) {
                var e = document.createElement("li");
                return rt(e, x["progress-step"]), e.innerHTML = t, e
            }(t);
            if (r.appendChild(n), e === a && rt(n, x["active-progress-step"]), e !== i.progressSteps.length - 1) {
                var o = function(t) {
                    var e = document.createElement("li");
                    return rt(e, x["progress-step-line"]), t.progressStepsDistance && (e.style.width = t.progressStepsDistance), e
                }(t);
                r.appendChild(o)
            }
        })
    }

    function St(t, e) {
        var n = Y();
        y(n, e.customClass, "header"), xt(0, e),
            function(t, e) {
                var n = ht.innerParams.get(t);
                if (n && e.type === n.type && N()) y(N(), e.customClass, "icon");
                else if (At(), e.type)
                    if (Et(), -1 !== Object.keys(S).indexOf(e.type)) {
                        var o = I(".".concat(x.icon, ".").concat(S[e.type]));
                        L(o), y(o, e.customClass, "icon"), E(o, "swal2-animate-".concat(e.type, "-icon"), e.animation)
                    } else g('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type, '"'))
            }(t, e),
            function(t, e) {
                var n = _();
                if (!e.imageUrl) return O(n);
                L(n), n.setAttribute("src", e.imageUrl), n.setAttribute("alt", e.imageAlt), T(n, "width", e.imageWidth), T(n, "height", e.imageHeight), n.className = x.image, y(n, e.customClass, "image"), e.imageClass && rt(n, e.imageClass)
            }(0, e),
            function(t, e) {
                var n = U();
                M(n, e.title || e.titleText), e.title && nt(e.title, n), e.titleText && (n.innerText = e.titleText), y(n, e.customClass, "title")
            }(0, e),
            function(t, e) {
                var n = J();
                n.innerHTML = e.closeButtonHtml, y(n, e.customClass, "closeButton"), M(n, e.showCloseButton), n.setAttribute("aria-label", e.closeButtonAriaLabel)
            }(0, e)
    }

    function Pt(t, e) {
        ! function(t, e) {
            var n = R();
            T(n, "width", e.width), T(n, "padding", e.padding), e.background && (n.style.background = e.background), n.className = x.popup, e.toast ? (rt([document.documentElement, document.body], x["toast-shown"]), rt(n, x.toast)) : rt(n, x.modal), y(n, e.customClass, "popup"), "string" == typeof e.customClass && rt(n, e.customClass), E(n, x.noanimation, !e.animation)
        }(0, e), mt(0, e), St(t, e), kt(t, e), ot(0, e),
            function(t, e) {
                var n = $();
                M(n, e.footer), e.footer && nt(e.footer, n), y(n, e.customClass, "footer")
            }(0, e)
    }

    function Bt() {
        return K() && K().click()
    }
    var At = function() {
            for (var t = D(), e = 0; e < t.length; e++) O(t[e])
        },
        Et = function() {
            for (var t = R(), e = window.getComputedStyle(t).getPropertyValue("background-color"), n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < n.length; o++) n[o].style.backgroundColor = e
        };

    function Tt() {
        var t = R();
        t || Fe.fire(""), t = R();
        var e = Q(),
            n = K(),
            o = Z();
        L(e), L(n), rt([t, e], x.loading), n.disabled = !0, o.disabled = !0, t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus()
    }

    function Lt() {
        return new Promise(function(t) {
            var e = window.scrollX,
                n = window.scrollY;
            Ht.restoreFocusTimeout = setTimeout(function() {
                Ht.previousActiveElement && Ht.previousActiveElement.focus ? (Ht.previousActiveElement.focus(), Ht.previousActiveElement = null) : document.body && document.body.focus(), t()
            }, 100), void 0 !== e && void 0 !== n && window.scrollTo(e, n)
        })
    }

    function Ot(t) {
        return Object.prototype.hasOwnProperty.call(jt, t)
    }

    function Mt(t) {
        return qt[t]
    }
    var Vt = [],
        Ht = {},
        jt = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            type: null,
            toast: !1,
            customClass: "",
            customContainerClass: "",
            target: "body",
            backdrop: !0,
            animation: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showCancelButton: !1,
            preConfirm: null,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: null,
            confirmButtonClass: "",
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: null,
            cancelButtonClass: "",
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusCancel: !1,
            showCloseButton: !1,
            closeButtonHtml: "&times;",
            closeButtonAriaLabel: "Close this dialog",
            showLoaderOnConfirm: !1,
            imageUrl: null,
            imageWidth: null,
            imageHeight: null,
            imageAlt: "",
            imageClass: "",
            timer: null,
            width: null,
            padding: null,
            background: null,
            input: null,
            inputPlaceholder: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputClass: "",
            inputAttributes: {},
            inputValidator: null,
            validationMessage: null,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: null,
            progressStepsDistance: null,
            onBeforeOpen: null,
            onAfterClose: null,
            onOpen: null,
            onClose: null,
            scrollbarPadding: !0
        },
        It = ["title", "titleText", "text", "html", "type", "customClass", "showConfirmButton", "showCancelButton", "confirmButtonText", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonClass", "cancelButtonText", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonClass", "buttonsStyling", "reverseButtons", "imageUrl", "imageWidth", "imageHeigth", "imageAlt", "imageClass", "progressSteps", "currentProgressStep"],
        qt = {
            customContainerClass: "customClass",
            confirmButtonClass: "customClass",
            cancelButtonClass: "customClass",
            imageClass: "customClass",
            inputClass: "customClass"
        },
        Rt = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
        Dt = Object.freeze({
            isValidParameter: Ot,
            isUpdatableParameter: function(t) {
                return -1 !== It.indexOf(t)
            },
            isDeprecatedParameter: Mt,
            argsToParams: function(n) {
                var o = {};
                switch (r(n[0])) {
                    case "object":
                        s(o, n[0]);
                        break;
                    default:
                        ["title", "html", "type"].forEach(function(t, e) {
                            switch (r(n[e])) {
                                case "string":
                                    o[t] = n[e];
                                    break;
                                case "undefined":
                                    break;
                                default:
                                    g("Unexpected type of ".concat(t, '! Expected "string", got ').concat(r(n[e])))
                            }
                        })
                }
                return o
            },
            isVisible: function() {
                return V(R())
            },
            clickConfirm: Bt,
            clickCancel: function() {
                return Z() && Z().click()
            },
            getContainer: j,
            getPopup: R,
            getTitle: U,
            getContent: F,
            getImage: _,
            getIcon: N,
            getIcons: D,
            getCloseButton: J,
            getActions: Q,
            getConfirmButton: K,
            getCancelButton: Z,
            getHeader: Y,
            getFooter: $,
            getFocusableElements: X,
            getValidationMessage: W,
            isLoading: function() {
                return R().hasAttribute("data-loading")
            },
            fire: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return l(this, e)
            },
            mixin: function(n) {
                return function(t) {
                    function e() {
                        return o(this, e), d(this, u(e).apply(this, arguments))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && c(t, e)
                    }(e, t), a(e, [{
                        key: "_main",
                        value: function(t) {
                            return p(u(e.prototype), "_main", this).call(this, s({}, n, t))
                        }
                    }]), e
                }(this)
            },
            queue: function(t) {
                var r = this;
                Vt = t;

                function a(t, e) {
                    Vt = [], document.body.removeAttribute("data-swal2-queue-step"), t(e)
                }
                var s = [];
                return new Promise(function(i) {
                    ! function e(n, o) {
                        n < Vt.length ? (document.body.setAttribute("data-swal2-queue-step", n), r.fire(Vt[n]).then(function(t) {
                            void 0 !== t.value ? (s.push(t.value), e(n + 1, o)) : a(i, {
                                dismiss: t.dismiss
                            })
                        })) : a(i, {
                            value: s
                        })
                    }(0)
                })
            },
            getQueueStep: function() {
                return document.body.getAttribute("data-swal2-queue-step")
            },
            insertQueueStep: function(t, e) {
                return e && e < Vt.length ? Vt.splice(e, 0, t) : Vt.push(t)
            },
            deleteQueueStep: function(t) {
                void 0 !== Vt[t] && Vt.splice(t, 1)
            },
            showLoading: Tt,
            enableLoading: Tt,
            getTimerLeft: function() {
                return Ht.timeout && Ht.timeout.getTimerLeft()
            },
            stopTimer: function() {
                return Ht.timeout && Ht.timeout.stop()
            },
            resumeTimer: function() {
                return Ht.timeout && Ht.timeout.start()
            },
            toggleTimer: function() {
                var t = Ht.timeout;
                return t && (t.running ? t.stop() : t.start())
            },
            increaseTimer: function(t) {
                return Ht.timeout && Ht.timeout.increase(t)
            },
            isTimerRunning: function() {
                return Ht.timeout && Ht.timeout.isRunning()
            }
        });

    function Nt() {
        var t = ht.innerParams.get(this),
            e = ht.domCache.get(this);
        t.showConfirmButton || (O(e.confirmButton), t.showCancelButton || O(e.actions)), at([e.popup, e.actions], x.loading), e.popup.removeAttribute("aria-busy"), e.popup.removeAttribute("data-loading"), e.confirmButton.disabled = !1, e.cancelButton.disabled = !1
    }

    function Ut() {
        null === P.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (P.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = P.previousBodyPadding + function() {
            if ("ontouchstart" in window || navigator.msMaxTouchPoints) return 0;
            var t = document.createElement("div");
            t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t);
            var e = t.offsetWidth - t.clientWidth;
            return document.body.removeChild(t), e
        }() + "px")
    }

    function Ft() {
        return !!window.MSInputMethodContext && !!document.documentMode
    }

    function _t() {
        var t = j(),
            e = R();
        t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start")
    }
    var zt = function() {
            var e, n = j();
            n.ontouchstart = function(t) {
                e = t.target === n || ! function(t) {
                    return !!(t.scrollHeight > t.clientHeight)
                }(n) && "INPUT" !== t.target.tagName
            }, n.ontouchmove = function(t) {
                e && (t.preventDefault(), t.stopPropagation())
            }
        },
        Wt = {
            swalPromiseResolve: new WeakMap
        };

    function Kt(t, e, n, o) {
        n ? $t(t, o) : (Lt().then(function() {
            return $t(t, o)
        }), Ht.keydownTarget.removeEventListener("keydown", Ht.keydownHandler, {
            capture: Ht.keydownListenerCapture
        }), Ht.keydownHandlerAdded = !1), e.parentNode && e.parentNode.removeChild(e), G() && (null !== P.previousBodyPadding && (document.body.style.paddingRight = P.previousBodyPadding + "px", P.previousBodyPadding = null), function() {
            if (b(document.body, x.iosfix)) {
                var t = parseInt(document.body.style.top, 10);
                at(document.body, x.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * t
            }
        }(), "undefined" != typeof window && Ft() && window.removeEventListener("resize", _t), m(document.body.children).forEach(function(t) {
            t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden")
        })), at([document.documentElement, document.body], [x.shown, x["height-auto"], x["no-backdrop"], x["toast-shown"], x["toast-column"]])
    }

    function Zt(t) {
        var e = R();
        if (e && !b(e, x.hide)) {
            var n = ht.innerParams.get(this);
            if (n) {
                var o = Wt.swalPromiseResolve.get(this);
                at(e, x.show), rt(e, x.hide),
                    function(t, e, n) {
                        var o = j(),
                            i = pt && H(e),
                            r = n.onClose,
                            a = n.onAfterClose;
                        if (r !== null && typeof r === "function") {
                            r(e)
                        }
                        if (i) {
                            Yt(t, e, o, a)
                        } else {
                            Kt(t, o, ut(), a)
                        }
                    }(this, e, n), o(t || {})
            }
        }
    }

    function Qt(t) {
        for (var e in t) t[e] = new WeakMap
    }
    var Yt = function(t, e, n, o) {
            Ht.swalCloseEventFinishedCallback = Kt.bind(null, t, n, ut(), o), e.addEventListener(pt, function(t) {
                t.target === e && (Ht.swalCloseEventFinishedCallback(), delete Ht.swalCloseEventFinishedCallback)
            })
        },
        $t = function(t, e) {
            setTimeout(function() {
                null !== e && "function" == typeof e && e(), R() || function(t) {
                    delete t.params, delete Ht.keydownHandler, delete Ht.keydownTarget, Qt(ht), Qt(Wt)
                }(t)
            })
        };

    function Jt(t, e, n) {
        var o = ht.domCache.get(t);
        e.forEach(function(t) {
            o[t].disabled = n
        })
    }

    function Xt(t, e) {
        if (!t) return !1;
        if ("radio" === t.type)
            for (var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < n.length; o++) n[o].disabled = e;
        else t.disabled = e
    }
    var Gt = function() {
            function n(t, e) {
                o(this, n), this.callback = t, this.remaining = e, this.running = !1, this.start()
            }
            return a(n, [{
                key: "start",
                value: function() {
                    return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
                }
            }, {
                key: "stop",
                value: function() {
                    return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date - this.started), this.remaining
                }
            }, {
                key: "increase",
                value: function(t) {
                    var e = this.running;
                    return e && this.stop(), this.remaining += t, e && this.start(), this.remaining
                }
            }, {
                key: "getTimerLeft",
                value: function() {
                    return this.running && (this.stop(), this.start()), this.remaining
                }
            }, {
                key: "isRunning",
                value: function() {
                    return this.running
                }
            }]), n
        }(),
        te = {
            email: function(t, e) {
                return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address")
            },
            url: function(t, e) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL")
            }
        };

    function ee(t) {
        ! function(e) {
            e.inputValidator || Object.keys(te).forEach(function(t) {
                e.input === t && (e.inputValidator = te[t])
            })
        }(t), t.showLoaderOnConfirm && !t.preConfirm && w("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), t.animation = C(t.animation),
            function(t) {
                t.target && ("string" != typeof t.target || document.querySelector(t.target)) && ("string" == typeof t.target || t.target.appendChild) || (w('Target parameter is not valid, defaulting to "body"'), t.target = "body")
            }(t), "string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")), lt(t)
    }

    function ne(t, e) {
        t.removeEventListener(pt, ne), e.style.overflowY = "auto"
    }

    function oe(t) {
        var e = j(),
            n = R();
        "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n), fe(e, n, t), de(e, n), G() && pe(e, t.scrollbarPadding), ut() || Ht.previousActiveElement || (Ht.previousActiveElement = document.activeElement), "function" == typeof t.onOpen && setTimeout(function() {
            return t.onOpen(n)
        })
    }

    function ie(t, e) {
        "select" === e.input || "radio" === e.input ? me(t, e) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(e.input) && v(e.inputValue) && ge(t, e)
    }

    function re(t, e) {
        t.disableButtons(), e.input ? be(t, e) : ye(t, e, !0)
    }

    function ae(t, e) {
        t.disableButtons(), e(k.cancel)
    }

    function se(t, e) {
        t.closePopup({
            value: e
        })
    }

    function ue(e, t, n, o) {
        t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
            capture: t.keydownListenerCapture
        }), t.keydownHandlerAdded = !1), n.toast || (t.keydownHandler = function(t) {
            return Be(e, t, n, o)
        }, t.keydownTarget = n.keydownListenerCapture ? window : R(), t.keydownListenerCapture = n.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
            capture: t.keydownListenerCapture
        }), t.keydownHandlerAdded = !0)
    }

    function ce(t, e, n) {
        for (var o = X(t.focusCancel), i = 0; i < o.length; i++) return (e += n) === o.length ? e = 0 : -1 === e && (e = o.length - 1), o[e].focus();
        R().focus()
    }

    function le(t, e, n) {
        e.toast ? Oe(t, e, n) : (Ve(t), He(t), je(t, e, n))
    }
    var de = function(t, e) {
            pt && H(e) ? (t.style.overflowY = "hidden", e.addEventListener(pt, ne.bind(null, e, t))) : t.style.overflowY = "auto"
        },
        pe = function(t, e) {
            ! function() {
                if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !b(document.body, x.iosfix)) {
                    var t = document.body.scrollTop;
                    document.body.style.top = -1 * t + "px", rt(document.body, x.iosfix), zt()
                }
            }(), "undefined" != typeof window && Ft() && (_t(), window.addEventListener("resize", _t)), m(document.body.children).forEach(function(t) {
                t === j() || function(t, e) {
                    if ("function" == typeof t.contains) return t.contains(e)
                }(t, j()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"))
            }), e && Ut(), setTimeout(function() {
                t.scrollTop = 0
            })
        },
        fe = function(t, e, n) {
            n.animation && (rt(e, x.show), rt(t, x.fade)), L(e), rt([document.documentElement, document.body, t], x.shown), n.heightAuto && n.backdrop && !n.toast && rt([document.documentElement, document.body], x["height-auto"])
        },
        me = function(e, n) {
            function o(t) {
                return he[n.input](i, ve(t), n)
            }
            var i = F();
            v(n.inputOptions) ? (Tt(), n.inputOptions.then(function(t) {
                e.hideLoading(), o(t)
            })) : "object" === r(n.inputOptions) ? o(n.inputOptions) : g("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)))
        },
        ge = function(e, n) {
            var o = e.getInput();
            O(o), n.inputValue.then(function(t) {
                o.value = "number" === n.input ? parseFloat(t) || 0 : t + "", L(o), o.focus(), e.hideLoading()
            }).catch(function(t) {
                g("Error in inputValue promise: " + t), o.value = "", L(o), o.focus(), e.hideLoading()
            })
        },
        he = {
            select: function(t, e, i) {
                var r = st(t, x.select);
                e.forEach(function(t) {
                    var e = t[0],
                        n = t[1],
                        o = document.createElement("option");
                    o.value = e, o.innerHTML = n, i.inputValue.toString() === e.toString() && (o.selected = !0), r.appendChild(o)
                }), r.focus()
            },
            radio: function(t, e, a) {
                var s = st(t, x.radio);
                e.forEach(function(t) {
                    var e = t[0],
                        n = t[1],
                        o = document.createElement("input"),
                        i = document.createElement("label");
                    o.type = "radio", o.name = x.radio, o.value = e, a.inputValue.toString() === e.toString() && (o.checked = !0);
                    var r = document.createElement("span");
                    r.innerHTML = n, r.className = x.label, i.appendChild(o), i.appendChild(r), s.appendChild(i)
                });
                var n = s.querySelectorAll("input");
                n.length && n[0].focus()
            }
        },
        ve = function(e) {
            var n = [];
            return "undefined" != typeof Map && e instanceof Map ? e.forEach(function(t, e) {
                n.push([e, t])
            }) : Object.keys(e).forEach(function(t) {
                n.push([t, e[t]])
            }), n
        },
        be = function(e, n) {
            var o = we(e, n);
            n.inputValidator ? (e.disableInput(), Promise.resolve().then(function() {
                return n.inputValidator(o, n.validationMessage)
            }).then(function(t) {
                e.enableButtons(), e.enableInput(), t ? e.showValidationMessage(t) : ye(e, n, o)
            })) : e.getInput().checkValidity() ? ye(e, n, o) : (e.enableButtons(), e.showValidationMessage(n.validationMessage))
        },
        ye = function(e, t, n) {
            (t.showLoaderOnConfirm && Tt(), t.preConfirm) ? (e.resetValidationMessage(), Promise.resolve().then(function() {
                return t.preConfirm(n, t.validationMessage)
            }).then(function(t) {
                V(W()) || !1 === t ? e.hideLoading() : se(e, void 0 === t ? n : t)
            })) : se(e, n)
        },
        we = function(t, e) {
            var n = t.getInput();
            if (!n) return null;
            switch (e.input) {
                case "checkbox":
                    return Ce(n);
                case "radio":
                    return ke(n);
                case "file":
                    return xe(n);
                default:
                    return e.inputAutoTrim ? n.value.trim() : n.value
            }
        },
        Ce = function(t) {
            return t.checked ? 1 : 0
        },
        ke = function(t) {
            return t.checked ? t.value : null
        },
        xe = function(t) {
            return t.files.length ? t.files[0] : null
        },
        Se = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"],
        Pe = ["Escape", "Esc"],
        Be = function(t, e, n, o) {
            n.stopKeydownPropagation && e.stopPropagation(), "Enter" === e.key ? Ae(t, e, n) : "Tab" === e.key ? Ee(e, n) : -1 !== Se.indexOf(e.key) ? Te() : -1 !== Pe.indexOf(e.key) && Le(e, n, o)
        },
        Ae = function(t, e, n) {
            if (!e.isComposing && e.target && t.getInput() && e.target.outerHTML === t.getInput().outerHTML) {
                if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
                Bt(), e.preventDefault()
            }
        },
        Ee = function(t, e) {
            for (var n = t.target, o = X(e.focusCancel), i = -1, r = 0; r < o.length; r++)
                if (n === o[r]) {
                    i = r;
                    break
                }
            t.shiftKey ? ce(e, i, -1) : ce(e, i, 1), t.stopPropagation(), t.preventDefault()
        },
        Te = function() {
            var t = K(),
                e = Z();
            document.activeElement === t && V(e) ? e.focus() : document.activeElement === e && V(t) && t.focus()
        },
        Le = function(t, e, n) {
            C(e.allowEscapeKey) && (t.preventDefault(), n(k.esc))
        },
        Oe = function(t, e, n) {
            t.popup.onclick = function() {
                e.showConfirmButton || e.showCancelButton || e.showCloseButton || e.input || n(k.close)
            }
        },
        Me = !1,
        Ve = function(e) {
            e.popup.onmousedown = function() {
                e.container.onmouseup = function(t) {
                    e.container.onmouseup = void 0, t.target === e.container && (Me = !0)
                }
            }
        },
        He = function(e) {
            e.container.onmousedown = function() {
                e.popup.onmouseup = function(t) {
                    e.popup.onmouseup = void 0, t.target !== e.popup && !e.popup.contains(t.target) || (Me = !0)
                }
            }
        },
        je = function(e, n, o) {
            e.container.onclick = function(t) {
                Me ? Me = !1 : t.target === e.container && C(n.allowOutsideClick) && o(k.backdrop)
            }
        };
    var Ie = function(t, e, n) {
            e.timer && (t.timeout = new Gt(function() {
                n("timer"), delete t.timeout
            }, e.timer))
        },
        qe = function(t, e) {
            if (!e.toast) return C(e.allowEnterKey) ? e.focusCancel && V(t.cancelButton) ? t.cancelButton.focus() : e.focusConfirm && V(t.confirmButton) ? t.confirmButton.focus() : void ce(e, -1, 1) : Re()
        },
        Re = function() {
            document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
        };
    var De, Ne = Object.freeze({
        hideLoading: Nt,
        disableLoading: Nt,
        getInput: function(t) {
            var e = ht.innerParams.get(t || this),
                n = ht.domCache.get(t || this);
            return n ? B(n.content, e.input) : null
        },
        close: Zt,
        closePopup: Zt,
        closeModal: Zt,
        closeToast: Zt,
        enableButtons: function() {
            Jt(this, ["confirmButton", "cancelButton"], !1)
        },
        disableButtons: function() {
            Jt(this, ["confirmButton", "cancelButton"], !0)
        },
        enableConfirmButton: function() {
            h("Swal.disableConfirmButton()", "Swal.getConfirmButton().removeAttribute('disabled')"), Jt(this, ["confirmButton"], !1)
        },
        disableConfirmButton: function() {
            h("Swal.enableConfirmButton()", "Swal.getConfirmButton().setAttribute('disabled', '')"), Jt(this, ["confirmButton"], !0)
        },
        enableInput: function() {
            return Xt(this.getInput(), !1)
        },
        disableInput: function() {
            return Xt(this.getInput(), !0)
        },
        showValidationMessage: function(t) {
            var e = ht.domCache.get(this);
            e.validationMessage.innerHTML = t;
            var n = window.getComputedStyle(e.popup);
            e.validationMessage.style.marginLeft = "-".concat(n.getPropertyValue("padding-left")), e.validationMessage.style.marginRight = "-".concat(n.getPropertyValue("padding-right")), L(e.validationMessage);
            var o = this.getInput();
            o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", x["validation-message"]), A(o), rt(o, x.inputerror))
        },
        resetValidationMessage: function() {
            var t = ht.domCache.get(this);
            t.validationMessage && O(t.validationMessage);
            var e = this.getInput();
            e && (e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedBy"), at(e, x.inputerror))
        },
        getProgressSteps: function() {
            return h("Swal.getProgressSteps()", "const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps"), ht.innerParams.get(this).progressSteps
        },
        setProgressSteps: function(t) {
            h("Swal.setProgressSteps()", "Swal.update()");
            var e = s({}, ht.innerParams.get(this), {
                progressSteps: t
            });
            xt(0, e), ht.innerParams.set(this, e)
        },
        showProgressSteps: function() {
            var t = ht.domCache.get(this);
            L(t.progressSteps)
        },
        hideProgressSteps: function() {
            var t = ht.domCache.get(this);
            O(t.progressSteps)
        },
        _main: function(t) {
            ! function(t) {
                for (var e in t) Ot(i = e) || w('Unknown parameter "'.concat(i, '"')), t.toast && (o = e, -1 !== Rt.indexOf(o) && w('The parameter "'.concat(o, '" is incompatible with toasts'))), Mt(n = void 0) && h(n, Mt(n));
                var n, o, i
            }(t), R() && Ht.swalCloseEventFinishedCallback && (Ht.swalCloseEventFinishedCallback(), delete Ht.swalCloseEventFinishedCallback), Ht.deferDisposalTimer && (clearTimeout(Ht.deferDisposalTimer), delete Ht.deferDisposalTimer);
            var e = s({}, jt, t);
            ee(e), Object.freeze(e), Ht.timeout && (Ht.timeout.stop(), delete Ht.timeout), clearTimeout(Ht.restoreFocusTimeout);
            var n = function(t) {
                var e = {
                    popup: R(),
                    container: j(),
                    content: F(),
                    actions: Q(),
                    confirmButton: K(),
                    cancelButton: Z(),
                    closeButton: J(),
                    validationMessage: W(),
                    progressSteps: z()
                };
                return ht.domCache.set(t, e), e
            }(this);
            return Pt(this, e), ht.innerParams.set(this, e),
                function(n, o, i) {
                    return new Promise(function(t) {
                        var e = function t(e) {
                            n.closePopup({
                                dismiss: e
                            })
                        };
                        Wt.swalPromiseResolve.set(n, t);
                        Ie(Ht, i, e);
                        o.confirmButton.onclick = function() {
                            return re(n, i)
                        };
                        o.cancelButton.onclick = function() {
                            return ae(n, e)
                        };
                        o.closeButton.onclick = function() {
                            return e(k.close)
                        };
                        le(o, i, e);
                        ue(n, Ht, i, e);
                        if (i.toast && (i.input || i.footer || i.showCloseButton)) {
                            rt(document.body, x["toast-column"])
                        } else {
                            at(document.body, x["toast-column"])
                        }
                        ie(n, i);
                        oe(i);
                        qe(o, i);
                        o.container.scrollTop = 0
                    })
                }(this, n, e)
        },
        update: function(e) {
            var n = {};
            Object.keys(e).forEach(function(t) {
                Fe.isUpdatableParameter(t) ? n[t] = e[t] : w('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))
            });
            var t = s({}, ht.innerParams.get(this), n);
            Pt(this, t), ht.innerParams.set(this, t), Object.defineProperties(this, {
                params: {
                    value: s({}, this.params, e),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
    });

    function Ue() {
        if ("undefined" != typeof window) {
            "undefined" == typeof Promise && g("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), De = this;
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            var o = Object.freeze(this.constructor.argsToParams(e));
            Object.defineProperties(this, {
                params: {
                    value: o,
                    writable: !1,
                    enumerable: !0,
                    configurable: !0
                }
            });
            var i = this._main(this.params);
            ht.promise.set(this, i)
        }
    }
    Ue.prototype.then = function(t) {
        return ht.promise.get(this).then(t)
    }, Ue.prototype.finally = function(t) {
        return ht.promise.get(this).finally(t)
    }, s(Ue.prototype, Ne), s(Ue, Dt), Object.keys(Ne).forEach(function(e) {
        Ue[e] = function() {
            var t;
            if (De) return (t = De)[e].apply(t, arguments)
        }
    }), Ue.DismissReason = k, Ue.version = "8.15.3";
    var Fe = Ue;
    return Fe.default = Fe
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);