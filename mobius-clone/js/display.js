/* {ts '2025-03-05 07:45:39'} res.helper:SF6_HRIS_SILOAM */
var uag = navigator.userAgent;
var bwtype = (uag.search(/Firefox/i) >= 0 ? "FF" : (uag.search(/MSIE/i) >= 0 ? "IE" : (uag.search(/Chrome/i) >= 0 ? "Chrome" : (uag.search(/Opera/i) >= 0 ? "Opera" : (uag.search(/Safari/i) >= 0 ? "Safari" : "Other")))));
var offsetX = 0;
var offsetY = 0;
var unicodecharsetregex = "[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]+";
var _alreadymsg = false;
if (typeof (pstitle) === "undefined") {
    var pstitle = ""
}
String.prototype.ltrim = function() {
    return this.replace(/^\s+/g, "")
}
;
String.prototype.rtrim = function() {
    return this.replace(/\s+$/g, "")
}
;
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
}
;
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(c) {
        if (this === void 0 || this === null) {
            throw new TypeError()
        }
        var d = Object(this);
        var a = d.length >>> 0;
        if (a === 0) {
            return -1
        }
        var e = 0;
        if (arguments.length > 0) {
            e = Number(arguments[1]);
            if (e !== e) {
                e = 0
            } else {
                if (e !== 0 && e !== (1 / 0) && e !== -(1 / 0)) {
                    e = (e > 0 || -1) * Math.floor(Math.abs(e))
                }
            }
        }
        if (e >= a) {
            return -1
        }
        var b = e >= 0 ? e : Math.max(a - Math.abs(e), 0);
        for (; b < a; b++) {
            if (b in d && d[b] === c) {
                return b
            }
        }
        return -1
    }
}
function typeObj(a) {
    return Object.prototype.toString.call(a).match(/^\[object (.*)\]$/)[1]
}
var dateFormat = function() {
    var a = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g
      , b = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g
      , d = /[^-+\dA-Z]/g
      , c = function(f, e) {
        f = String(f);
        e = e || 2;
        while (f.length < e) {
            f = "0" + f
        }
        return f
    };
    return function(i, v, q) {
        var g = dateFormat;
        if (arguments.length == 1 && Object.prototype.toString.call(i) == "[object String]" && !/\d/.test(i)) {
            v = i;
            i = undefined
        }
        i = i ? new Date(i) : new Date;
        if (isNaN(i)) {
            throw SyntaxError("invalid date")
        }
        v = String(g.masks[v] || v || g.masks["default"]);
        if (v.slice(0, 4) == "UTC:") {
            v = v.slice(4);
            q = true
        }
        var t = q ? "getUTC" : "get"
          , l = i[t + "Date"]()
          , e = i[t + "Day"]()
          , j = i[t + "Month"]()
          , p = i[t + "FullYear"]()
          , r = i[t + "Hours"]()
          , k = i[t + "Minutes"]()
          , u = i[t + "Seconds"]()
          , n = i[t + "Milliseconds"]()
          , f = q ? 0 : i.getTimezoneOffset()
          , h = {
            d: l,
            dd: c(l),
            ddd: g.i18n.dayNames[e],
            dddd: g.i18n.dayNames[e + 7],
            m: j + 1,
            mm: c(j + 1),
            mmm: g.i18n.monthNames[j],
            mmmm: g.i18n.monthNames[j + 12],
            yy: String(p).slice(2),
            yyyy: p,
            h: r % 12 || 12,
            hh: c(r % 12 || 12),
            H: r,
            HH: c(r),
            M: k,
            MM: c(k),
            s: u,
            ss: c(u),
            l: c(n, 3),
            L: c(n > 99 ? Math.round(n / 10) : n),
            t: r < 12 ? "a" : "p",
            tt: r < 12 ? "am" : "pm",
            T: r < 12 ? "A" : "P",
            TT: r < 12 ? "AM" : "PM",
            Z: q ? "UTC" : (String(i).match(b) || [""]).pop().replace(d, ""),
            o: (f > 0 ? "-" : "+") + c(Math.floor(Math.abs(f) / 60) * 100 + Math.abs(f) % 60, 4),
            S: ["th", "st", "nd", "rd"][l % 10 > 3 ? 0 : (l % 100 - l % 10 != 10) * l % 10]
        };
        return v.replace(a, function(m) {
            return m in h ? h[m] : m.slice(1, m.length - 1)
        })
    }
}();
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};
dateFormat.i18n = {
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
Date.prototype.format = function(a, b) {
    return dateFormat(this, a, b)
}
;
Date.prototype.add = function(a, d) {
    d = parseInt(d);
    var e = new Date(this.getTime());
    var f = e.getDate();
    if (!a || d == 0) {
        return e
    }
    var b = a.toLowerCase();
    switch (b) {
    case "ms":
        e.setMilliseconds(e.getMilliseconds() + d);
        break;
    case "s":
        e.setSeconds(e.getSeconds() + d);
        break;
    case "n":
        e.setMinutes(e.getMinutes() + d);
        break;
    case "h":
        e.setHours(e.getHours() + d);
        break;
    case "d":
        e.setDate(e.getDate() + d);
        break;
    case "m":
        e.setMonth(e.getMonth() + d);
        break;
    case "y":
        e.setFullYear(e.getFullYear() + d);
        break
    }
    var c = e.getDate();
    if ((b == "m" || b == "y") && c != f) {
        e.setDate(e.getDate() - (c));
        return e
    } else {
        return e
    }
}
;
function daysInMonth(b, a) {
    return 32 - new Date(a,b,32).getDate()
}
function newStruct(c, d) {
    if (d == null) {
        d = ","
    }
    var c = c.split(d);
    var b = c.length;
    function a() {
        for (var e = 0; e < b; e++) {
            this[c[e]] = arguments[e]
        }
    }
    return a
}
function $sf(d, b, a) {
    var c = null;
    if (a) {
        if (b != null) {
            var c = b.document.getElementsByClassName(d)
        } else {
            var c = document.getElementsByClassName(d)
        }
        if (c == null) {
            c = top.document.getElementsByClassName(d)
        }
    }
    if (c == null) {
        if (b != null) {
            var c = b.document.getElementById(d)
        } else {
            var c = document.getElementById(d)
        }
        if (c == null) {
            c = top.document.getElementById(d)
        }
    }
    return c
}
function arrid(h, f, d) {
    var g = $sf(h, f, d);
    if (g) {
        if (isArray(g)) {
            return g
        } else {
            var a = [g];
            var c = g.parentNode;
            var e = false;
            for (var b = 0; b < c.childNodes.length; b++) {
                if (c.childNodes[b].id) {
                    if (c.childNodes[b].id == h) {
                        if (e) {
                            e = true
                        } else {
                            a.push(c.childNodes[b])
                        }
                    }
                }
            }
            return a
        }
    }
}
function showHide(c, a, b) {
    if (typeof (c) == "string") {
        c = $sf(c)
    }
    if (c == null) {
        return c
    }
    if (a == null) {
        a = (c.style.display == "none")
    }
    c.style.display = (a ? "" : "none");
    if (b) {
        b()
    }
    return c
}
function ltrim(a) {
    return a.replace(/^\s\s*/g, "")
}
function rtrim(a) {
    return a.replace(/\s\s*$/g, "")
}
function trim(a) {
    return ltrim(rtrim(a))
}
function padding(b, a, e, c) {
    if (e == null) {
        e = "0"
    }
    b = "" + b;
    var d = new Array(a - b.length + 1).join(e);
    if (c == 1) {
        d = b + d
    } else {
        d += b
    }
    return d
}
function getLookUp(a, k, b) {
    if (k == "" || k == null) {
        return ""
    }
    if (b == null) {
        b = ","
    }
    var l = new Array();
    var f = k.split(",");
    if (typeof (a) == "string") {
        var g = a.split(b);
        for (var c = 0; c < f.length; c++) {
            var e = "" + f[c];
            for (var d = 0; d < g.length; d++) {
                var h = g[d].split("=");
                if (("" + h[0]).toLowerCase() == e.toLowerCase()) {
                    l.push(h.length == 1 ? e : ("" + h[1]));
                    break
                }
            }
        }
    } else {
        if (a.optvalue) {
            for (var c = 0; c < f.length; c++) {
                var e = "" + f[c];
                for (var d = 0; d < a.optvalue.length; d++) {
                    if (("" + a.optvalue[d]).toLowerCase() == e.toLowerCase()) {
                        l.push(a.opttext[d]);
                        break
                    }
                }
            }
        } else {
            l[0] = k
        }
    }
    return l.join(",")
}
function eschar(a) {
    return a.replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
function isEmpty(a) {
    return (a.trim().length == 0)
}
function isInteger(a) {
    return (a.search(/^\s*(\+|-)?\d+\s*$/) >= 0)
}
function isFloat(a) {
    return (a.search(/^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/) >= 0)
}
function isMoney(a) {
    return (a.search(/^\s*(\+|-)?((\d+(\.\d\d)?)|(\.\d\d))\s*$/) >= 0)
}
function isEmail(a) {
    return (a.search(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/) >= 0)
}
function getDigit(a) {
    return a.replace(/[^\d]/g, "")
}
function validateString(a, c) {
    if (c == null) {
        c = 0
    }
    var b = new RegExp("[^-a-z_0-9/ &.'@()\"[]]","gi");
    if (a == "") {
        return c
    } else {
        return (a.match(b) == null)
    }
}
function validateRange(a, c) {
    if (c == null) {
        c = 0
    }
    var b = new RegExp("[^-<>=0-9., ]","gi");
    if (a == "") {
        return c
    } else {
        return (a.match(b) == null)
    }
}
function validateDateRange(a, c) {
    if (c == null) {
        c = 0
    }
    var b = new RegExp("[^-<>=0-9., /]","gi");
    var d = a.replace(/[^-0-9., \/]/gi, "");
    if (d.length < 8) {
        return c
    } else {
        return (a.match(b) == null)
    }
}
function isArray(a) {
    if (Array.isArray) {
        return Array.isArray(a)
    }
    if (a == null) {
        return false
    } else {
        return a.constructor == Array
    }
}
function isBoolean(a) {
    if (a.constructor == Boolean) {
        return true
    }
    return false
}
function IsValidTime(c) {
    var a = /^(\d{1,2}):(\d{2})(:(\d{2}))?(\s?(AM|am|PM|pm))?$/;
    var b = c.match(a);
    if (b == null) {
        return false
    }
    hour = b[1];
    minute = b[2];
    second = b[4];
    ampm = b[6];
    if (second == "") {
        second = null
    }
    if (ampm == "") {
        ampm = null
    }
    if (hour < 0 || hour > 23) {
        alert("Hour must be between 0 and 23.");
        return false
    }
    if (minute < 0 || minute > 59) {
        alert("Minute must be between 0 and 59.");
        return false
    }
    if (second != null && (second < 0 || second > 59)) {
        alert("Second must be between 0 and 59.");
        return false
    }
    return true
}
function isDate(d, j, b) {
    if (d.length < 8 || d.length > 10) {
        if (d.length > 10 && d.match(/(,|-)/g) == null) {
            alert("Please enter valid date.")
        }
        return false
    }
    var a = /^(\d{1,2})(\/|-|.)(\d{1,2})(\/|-|.)(\d{4})$/;
    var h = d.match(a);
    var e = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]/g
      , c = {
        d: "(?:[1-9]|[12]\\d|3[01])",
        dd: "(?:0[1-9]|[12]\\d|3[01])",
        ddd: "(?:" + dateFormat.i18n.dayNames.slice(0, 7).join("|") + ")",
        dddd: "(?:" + dateFormat.i18n.dayNames.slice(7).join("|") + ")",
        m: "(?:[1-9]|1[0-2])",
        mm: "(?:0[1-9]|1[0-2])",
        mmm: "(?:" + dateFormat.i18n.monthNames.slice(0, 12).join("|") + ")",
        mmmm: "(?:" + dateFormat.i18n.monthNames.slice(12).join("|") + ")",
        yy: "\\d{2}",
        yyyy: "\\d{4}",
        h: "(?:[1-9]|1[0-2])",
        hh: "(?:0[1-9]|1[0-2])",
        H: "(?:[1-9]|1\\d|2[0-4])",
        HH: "(?:0[1-9]|1\\d|2[0-4])",
        M: "(?:\\d|[1-5]\\d|60)",
        MM: "(?:[0-5]\\d|60)",
        s: "(?:\\d|[1-5]\\d|60)",
        ss: "(?:[0-5]\\d|60)",
        l: "\\d{3}",
        L: "\\d{2}",
        t: "[ap]",
        tt: "[ap]m",
        T: "[AP]",
        TT: "[AP]M",
        Z: "(?:[PMCEA][SDP]T|(?:GMT|UTC)(?:[-+]\\d{4})?)",
        o: "[-+]\\d{4}",
        S: "(?:th|st|nd|rd)"
    }
      , i = function(k) {
        return k.replace(/[[\]{}()*+?\\^$|]/g, "\\$&")
    };
    var g = new RegExp("^" + i(j).replace(e, function(k) {
        if (k.search(/d/i) >= 0) {
            day = d.substr(j.indexOf(k), 2)
        } else {
            if (k.search(/m/i) >= 0) {
                month = d.substr(j.indexOf(k), 2)
            } else {
                if (k.search(/y/i) >= 0) {
                    year = d.substr(j.indexOf(k), 4)
                }
            }
        }
        return c[k]
    }) + "$").test(d);
    if (!g) {
        if (b != "validateForm" && !_alreadymsg) {
            alert("Please enter valid date or enter date as " + j + ".");
            _alreadymsg = true
        }
        return false
    } else {}
    if (month < 1 || month > 12) {
        alert("Month must be between 1 and 12.");
        return false
    }
    if (day < 1 || day > 31) {
        alert("Day must be between 1 and 31.");
        return false
    }
    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
        alert("Month " + month + " doesn't have 31 days!");
        return false
    }
    if (month == 2) {
        var f = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day > 29 || (day == 29 && !f)) {
            alert("February " + year + " doesn't have " + day + " days!");
            return false
        }
    }
    if (year < 1753 && !_alreadymsg) {
        alert("Please insert Year more than 1753");
        _alreadymsg = true;
        return false
    }
    return true
}
function dateFormatMask(b, d, c) {
    if (d == null) {
        d = "mm/dd/yyyy"
    }
    if (c == null) {
        c = "mm/dd/yyyy"
    }
    var a = c;
    a = a.replace(/dd/i, b.substr(d.indexOf("dd"), 2));
    a = a.replace(/mm/i, b.substr(d.indexOf("mm"), 2));
    a = a.replace(/yyyy/i, b.substr(d.indexOf("yyyy"), 4));
    if (a != c) {
        return a
    } else {
        return false
    }
}
function stringToDateJS(b, g, h, f, a) {
    if (g == null) {
        g = "mm/dd/yyyy"
    }
    if (h == null) {
        h = "mm/dd/yyyy"
    }
    if (!isDate(b, g, a)) {
        return false
    }
    var e = h;
    var i = b.substr(g.indexOf("dd"), 2);
    var c = b.substr(g.indexOf("mm"), 2);
    var d = b.substr(g.indexOf("yyyy"), 4);
    switch (f) {
    case "gregorian":
        break;
    case "buddhist":
        d = parseInt(d) - 543;
        break
    }
    e = e.replace(/dd/i, i);
    e = e.replace(/mm/i, c);
    e = e.replace(/yyyy/i, d);
    if (e != h) {
        return e
    } else {
        return false
    }
}
function dateToStringJS(c, f, e, d) {
    if (f == null) {
        f = "mm/dd/yyyy"
    }
    if (e == null) {
        e = "mm/dd/yyyy"
    }
    var b = e;
    var a = c.substr(f.indexOf("dd"), 2);
    var g = c.substr(f.indexOf("mm"), 2);
    var h = c.substr(f.indexOf("yyyy"), 4);
    switch (d) {
    case "gregorian":
        break;
    case "buddhist":
        h = parseInt(h) + 543;
        break
    }
    b = b.replace(/dd/i, a);
    b = b.replace(/mm/i, g);
    b = b.replace(/yyyy/i, h);
    if (b != e) {
        return b
    } else {
        return false
    }
}
function date_compare(start, end, notRefresh, caller) {
    var start_date = stringToDateJS(start.value, date_input_mask, null, calendar_format, caller);
    if (start_date == false) {
        return "0"
    }
    var end_date = stringToDateJS(end.value, date_input_mask, null, calendar_format, caller);
    if (end_date == false) {
        return "1"
    }
    start_date = Date.parse(start_date);
    end_date = Date.parse(end_date);
    if (eval(end_date - start_date) < 0) {
        return "2"
    }
    return true
}
function tsformat(a) {
    return "{ts '" + a.format("yyyy-mm-dd HH:MM:ss") + "'}"
}
function setMoneyFormat(f, d, b, h, g) {
    var c = "";
    var i = "0";
    if (f == null) {
        f = window.event
    }
    if (h) {
        var a = 0
    } else {
        if (b != null || b == "") {
            var a = getLookUp(arrMONEY, b, "|")
        } else {
            var a = decimal_count
        }
    }
    try {
        formodified(d)
    } catch (f) {
        ismodif = true
    }
    if (d.value.length >= 17) {
        d.value = d.value.substring(0, 16)
    }
    if (d.value.match(/\D/)) {
        i = d.value.replace(/[^-0-9.]/g, "")
    } else {
        i = d.value
    }
    i = moneyFormat(i, c, a, thousand_separator, decimal_separator);
    if (i == null || i == "" || i == "NaN" || i == "Infinity") {
        i = moneyFormat(0, c, a, thousand_separator, decimal_separator)
    }
    if (d.value.length > 3) {
        showTip(d, i, 1, null, 50)
    } else {
        destroyTip()
    }
}
function setMoneyFormatOnBlur(h, d, i, b, j) {
    var c = "";
    var g = "0";
    if (h == null) {
        h = window.event
    }
    if (i != null || i == "") {
        var a = getLookUp(arrMONEY, i, "|")
    } else {
        var a = decimal_count
    }
    if (b) {
        var a = 0
    }
    if (d.value.length >= 17) {
        d.value = d.value.substring(0, 16)
    }
    if (d.value.match(/\D/)) {
        d.value = d.value.replace(/[^-0-9.]/g, "")
    }
    var k = d.value.split(".");
    var f = 0;
    if (k.length > 1) {
        f = k[1].length
    }
    d.value = moneyFormat(d.value, c, f, ",", ".");
    if (d.value == null || d.value == "" || d.value == "NaN" || d.value == "Infinity") {
        d.value = moneyFormat(0, c, f, "", ".")
    }
    if (j) {
        return d.value
    }
}
function setNumericFormatOnBlur(c, b) {
    if (c == null) {
        c = window.event
    }
    if (b.value.length >= 17) {
        b.value = b.value.substring(0, 16)
    }
    if (b.value.match(/\D/)) {
        b.value = b.value.replace(/[^-0-9.]/g, "")
    }
    var d = b.value.split(".");
    var a = 0;
    if (d.length > 1) {
        a = d[1].length
    }
}
function setTimeFormat(b, a) {
    if (b == null) {
        b = window.event
    }
    if (b.shiftKey || b.ctrlKey || b.keyCode == 16 || b.keyCode == 9) {
        return false
    }
    if (inputDigitsOnly(b)) {
        if (b.type != "keypress") {
            if (a.value.match(/\D/)) {
                a.value = a.value.replace(/\D/g, "")
            }
        }
        if (trim(a.value).length <= 4) {
            if (a.value.search(/:/i) > -1) {
                a.value = a.value.replace(":", "")
            }
        }
        if (trim(a.value).length == 4) {
            if (a.value.search(/:/i) < 0) {
                if (a.value < 2359) {
                    if (a.value.substring(0, 2) <= 23) {
                        if (a.value.substring(2, 3) <= 5) {
                            a.value = a.value.substring(0, 2) + ":" + a.value.substring(2, 4)
                        } else {
                            a.value = a.value.substring(0, 2) + ":00"
                        }
                    } else {
                        if (a.value.substring(2, 3) <= 5) {
                            a.value = "00:" + a.value.substring(2, 4)
                        } else {
                            a.value = "00:00"
                        }
                    }
                } else {
                    if (a.value.substring(0, 2) <= 23) {
                        if (a.value.substring(2, 3) <= 5) {
                            a.value = a.value.substring(0, 2) + ":" + a.value.substring(2, 4)
                        } else {
                            a.value = a.value.substring(0, 2) + ":00"
                        }
                    } else {
                        if (a.value.substring(2, 3) <= 5) {
                            a.value = "00:" + a.value.substring(2, 4)
                        } else {
                            a.value = "00:00"
                        }
                    }
                }
            }
        }
    } else {
        if (b.type != "keypress") {
            if (a.value.match(/\D/)) {
                a.value = a.value.replace(/[^0-9:]/g, "")
            }
            if (trim(a.value).length <= 4) {
                a.value = a.value.replace(/\D/g, "")
            }
            if (b.type == "blur") {
                if (trim(a.value).length == 1) {
                    a.value = "0" + a.value + ":00"
                }
                if (trim(a.value).length == 2) {
                    if (a.value <= 23) {
                        a.value = a.value + ":00"
                    } else {
                        if (a.value <= 59) {
                            a.value = "00:" + a.value
                        } else {
                            a.value = "00:00"
                        }
                    }
                }
                if (trim(a.value).length == 3) {
                    if (a.value <= 959) {
                        if (a.value.substring(1, 2) <= 5) {
                            a.value = "0" + a.value.substring(0, 1) + ":" + a.value.substring(1, 3)
                        } else {
                            a.value = "0" + a.value.substring(0, 1) + ":00"
                        }
                    } else {
                        a.value = "0" + a.value.substring(0, 1) + ":00"
                    }
                }
            }
        }
    }
}
function inputDigitsOnly(d) {
    var b, c = 0, a = d ? d : event;
    c = (a.type == "keypress" ? a.charCode != null ? a.charCode : a.which != null ? a.which : a.keyCode : a.keyCode != null ? a.keyCode : a.which);
    if (c == 0) {
        b = "SPECIAL KEY"
    } else {
        b = String.fromCharCode(c)
    }
    if (b.match(/\d|[\b]|SPECIAL/)) {
        return true
    }
    if (a.altKey || a.ctrlKey || c < 28) {
        return true
    }
    if (a.preventDefault) {
        a.preventDefault()
    }
    a.returnValue = false;
    return false
}
function popForm(g, f, d, e, b, c) {
    if (d == null) {
        d = "popPrint"
    }
    var a = popWindow("", d, e, b, c);
    g.target = a;
    if (f != "") {
        g.action = f
    }
    g.submit()
}
function popPrint(j, f, e, b, l) {
    if (j == null) {
        return
    }
    if (f == null) {
        f = "popPrint"
    }
    if (e == null) {
        e = "760"
    }
    if (b == null) {
        b = "600"
    }
    if (l == null) {
        l = "location=no,scrollbars=yes,status=no,toolbar=no,resizable=yes,menubar=no"
    }
    var c = "";
    if (lastLink != null) {
        if (lastLink != "") {
            var c = lastLink + "&reload=1"
        }
    }
    if (c == "") {
        c = mLink
    }
    var a = j;
    if (c != "") {
        var k = c.split("?");
        var g = k[1].split("&");
        for (var d = 0; d < g.length; d++) {
            if (g[d].split("=")[0] != "ofid") {
                if (!a.indexOf(g[d])) {
                    a += "&" + g[d]
                }
            }
        }
    }
    if (a != "") {
        if (a.substr(0, 1) == "&") {
            a = "?" + a
        }
        var h = popWindow(a, f, e, b, l)
    }
}
function redir(b, a) {
    if (a == null) {
        a = window
    }
    if (b == null) {
        return
    }
    if (pstitle != "" && b != "") {
        if (b.search("&origin=") < 0) {
            b += "&origin=" + encodeURIComponent(pstitle)
        }
    }
    a.location = b
}
function jsnow() {
    var a = new Date();
    return a.getTime()
}
function popWindow(theURL, theName, theWidth, theHeight, theOption) {
    if (theURL == null) {
        return
    }
    if (pstitle != "" && theURL != "") {
        if (theURL.search("&origin=") < 0) {
            theURL += "&origin=" + encodeURIComponent(pstitle)
        }
    }
    if (theURL.search(/&lreqts=/gi) < 0 && theURL != "") {
        theURL += "&lreqts=" + jsnow()
    }
    if (theName == null) {
        theName = "popWin"
    }
    if (theWidth == null) {
        theWidth = "500"
    }
    if (theHeight == null) {
        theHeight = "400"
    }
    if (theWidth.toString().search("%") > 0) {
        theWidth = (screen.width * eval(theWidth.replace("%", "/100")))
    }
    if (theHeight.toString().search("%") > 0) {
        theHeight = (screen.height * eval(theHeight.replace("%", "/100")))
    }
    if (theOption == null) {
        theOption = "location=no,scrollbars=no,status=no,toolbar=no,resizable=yes,menubar=no"
    }
    if (theOption.search("width=") < 0) {
        theOption += ",width=" + theWidth
    }
    if (theOption.search("height=") < 0) {
        theOption += ",height=" + theHeight
    }
    if (theOption.search("left=") < 0) {
        theOption += ",left=" + (screen.width - theWidth) / 2
    }
    if (theOption.search("top=") < 0) {
        theOption += ",top=" + (screen.height - theHeight) / 2
    }
    var mywin = window.open(theURL, theName, theOption);
    if (mywin != null) {
        if (screen.height > theHeight && screen.width > theWidth) {
            mywin.moveTo((screen.width - theWidth) / 2, (screen.height - theHeight) / 2)
        }
        mywin.focus()
    }
    return
}
function moneyFormat(g, f, a, d, c) {
    if (f == null || f == "" || typeof (f) == "undefined") {
        f = ""
    }
    if (a == null || a == "" || typeof (a) == "undefined") {
        g = parseFloat(g).toFixed(0)
    } else {
        mult = Math.pow(10, a);
        g = Math.round(g * mult) / mult;
        g = g.toString();
        g = parseFloat(g).toFixed(a)
    }
    if (d == null || typeof (d) == "undefined") {
        d = ","
    }
    if (c == null || typeof (c) == "undefined") {
        c = "."
    }
    var e = new RegExp("(-?[0-9]+)([0-9]{3})");
    var h = g + "";
    var b = [];
    b = h.split(".");
    h = b[0];
    if (d != "") {
        while (e.test(h)) {
            h = h.replace(e, "$1" + d + "$2")
        }
    }
    if (b.length > 1) {
        h = h + c + b[1]
    }
    return (f + h)
}
function luhn(a) {
    var c = 0;
    var b;
    var d = getDigit(a);
    for (b = d.length - 2; b >= 0; b -= 2) {
        c += Array(0, 2, 4, 6, 8, 1, 3, 5, 7, 9)[parseInt(d.charAt(b), 10)]
    }
    for (b = d.length - 1; b >= 0; b -= 2) {
        c += parseInt(d.charAt(b), 10)
    }
    return (c % 10) == 0
}
function isValid_code(c, b) {
    if (c.length == 0) {
        return false
    }
    var a = new RegExp("[^a-zA-Z_0-9]","g");
    if (b.length > 0) {
        if (b.search("-") > 0) {
            b = "-" + b.replace("-", "")
        }
        a = new RegExp("[^" + unescape(b) + "a-zA-Z_0-9]","g")
    }
    if (unescape(c).search(a) < 0) {
        return true
    }
    return false
}
function isValid_codenumber(c, b) {
    var a = new RegExp("[^- .0-9]","g");
    if (b.length > 0) {
        a = new RegExp("[^- .0-9" + unescape(b) + "]","g")
    }
    if (unescape(c).search(a) < 0) {
        return true
    }
    return false
}
function isValid_codename(c, b) {
    if (c.length == 0) {
        return false
    }
    var a = "- .,()'a-zA-Z_0-9";
    b = b + unicodecharsetregex;
    if (b.length > 0) {
        a = a + unescape(b)
    }
    console.log(a + "|" + c.search(a));
    a = new RegExp("[^" + a + "]","g");
    if (unescape(c).search(a) < 0) {
        return true
    }
    return false
}
function isValid_email(b, a) {
    return isEmail(unescape(b))
}
function isValid_age(f, a) {
    var e = new Date(unescape(f));
    var d = new Date();
    var c = unescape(a);
    var g = c.substr(c.length - 1, 1);
    c = parseInt(c.substr(0, c.length - 1));
    var b = e.add(g, c);
    return (b <= d)
}
var creditCardList = [["amex", "34", 15], ["amex", "37", 15], ["disc", "6011", 16], ["mc", "51", 16], ["mc", "52", 16], ["mc", "53", 16], ["mc", "54", 16], ["mc", "55", 16], ["visa", "4", 13], ["visa", "4", 16]];
function isValidCC(c, b) {
    var d = getDigit(b);
    if (luhn(d)) {
        for (var a in creditCardList) {
            if (creditCardList[a][0] == (c.toLowerCase())) {
                if (d.indexOf(creditCardList[a][1]) == 0) {
                    if (creditCardList[a][2] == d.length) {
                        return true
                    }
                }
            }
        }
    }
    return false
}
function isCreditCard(b) {
    var c = getDigit(b);
    if (c.length > 2) {
        for (var a in creditCardList) {
            if (isValidCC(creditCardList[a][0], c)) {
                return creditCardList[a][0]
            }
        }
        firstdig = c.substring(0, 1);
        seconddig = c.substring(1, 2);
        if ((c.length == 14) && (firstdig == 3) && ((seconddig == 0) || (seconddig == 6) || (seconddig == 8))) {
            return "dclub"
        }
    }
    return false
}
function isCtrlKey(a) {
    return (a == 36 || a == 35 || a == 9 || a == 39 || a == 37 || a == 16 || a == 17 || a == 13 || a == 33 || a == 34 || a == 18 || a == 38 || a == 40)
}
function getElementPos_old(a) {
    var b = curtop = 0;
    if (a.offsetParent) {
        do {
            b += parseInt(a.offsetLeft) - parseInt(a.scrollLeft);
            curtop += parseInt(a.offsetTop) - parseInt(a.scrollTop)
        } while (a = a.offsetParent);
        return [b, curtop]
    } else {
        return null
    }
}
function getElementPos(b) {
    var a = b;
    var c = curtop = 0;
    if (b.offsetParent) {
        if (document.getElementById || document.all) {
            do {
                c += parseInt(b.offsetLeft) - parseInt(b.scrollLeft);
                curtop += parseInt(b.offsetTop) - parseInt(b.scrollTop);
                b = b.offsetParent;
                a = a.parentNode;
                while (a != b) {
                    c -= parseInt(a.scrollLeft);
                    curtop -= parseInt(a.scrollTop);
                    a = a.parentNode
                }
            } while (b.offsetParent)
        } else {
            if (document.layers) {
                curtop += b.y;
                c += b.x
            }
        }
        return [c, curtop]
    } else {
        return null
    }
}
function getParentTag(a, b) {
    if (a.parentNode) {
        b = b.toUpperCase();
        while (a != null && a.tagName && a.tagName.toUpperCase() != b && a.parentNode) {
            a = a.parentNode
        }
        if (a == null) {
            return null
        } else {
            if (a.tagName && a.tagName.toUpperCase() == b) {
                return a
            } else {
                return null
            }
        }
    } else {
        return null
    }
}
function setCookie(g, f, e, b, a, d) {
    var c = escape(g) + "=" + escape(f);
    c += (e ? "; EXPIRES=" + e.toGMTString() : "");
    c += (b ? "; PATH=" + b : "");
    c += (a ? "; DOMAIN=" + a : "");
    c += (d ? "; SECURE" : "");
    document.cookie = c
}
function getCookie(d) {
    var c = null;
    if (document.cookie) {
        var a = document.cookie.split((escape(d) + "="));
        if (a.length >= 2) {
            var b = a[1].split(";");
            c = unescape(encodeURI(b[0]))
        }
    }
    return c
}
function deleteCookie(c, a) {
    var b = getCookie(c);
    if (b) {
        setCookie(c, b, (new Date(1)), a)
    }
}
function printpr() {
    var a = 7;
    var c = 1;
    var b = "<OBJECT ID='WebBrowser1' WIDTH=0 HEIGHT=0 CLASSID='CLSID:8856F961-340A-11D0-A96B-00C04FD705A2'></OBJECT>";
    document.body.insertAdjacentHTML("beforeEnd", b);
    WebBrowser1.ExecWB(a, c);
    WebBrowser1.outerHTML = ""
}
function printpage(a, c) {
    if (a != null) {
        var b = getParentTag(a, "DIV");
        if (b != null) {
            showHide(b);
            setTimeout("showHide('" + b.id + "',true);", 1000)
        }
    }
    if (c == null) {
        c = false
    }
    if (bwtype == "IE" && !c) {
        printpr()
    } else {
        window.print()
    }
}
function expTree(f, m) {
    var l = f.parentNode.parentNode;
    if (l.tagName == "TD") {
        l = l.parentNode
    }
    var a = l.id.split("_");
    a = a[a.length - 1];
    var d = "," + l.lang + "," + a + ",";
    var n = l.parentNode;
    var k = false;
    var j = (f.src.search("exp") >= 0);
    if (j) {
        var h = "";
        f.src = f.src.replace("exp", "clp")
    } else {
        var h = "none";
        f.src = f.src.replace("clp", "exp")
    }
    var b = null;
    for (var e = 0; e < n.childNodes.length; e++) {
        var c = n.childNodes[e];
        if (m) {
            b = $sf(m + "_" + c.id.split("_")[1])
        }
        if (c.id) {
            if (c.id == l.id) {
                k = true
            } else {
                if (k) {
                    if (("," + c.lang + ",").search(d) >= 0) {
                        if ("," + c.lang + "," == d) {
                            c.style.display = h;
                            if (b) {
                                b.style.display = h
                            }
                            if (h == "") {
                                var g = c.childNodes[0].childNodes[0];
                                if (g.tagName == "IMG") {
                                    g.src = g.src.replace("clp", "exp")
                                } else {
                                    if (g.childNodes.length) {
                                        g = g.childNodes[0];
                                        if (g.tagName) {
                                            if (g.tagName == "IMG") {
                                                g.src = g.src.replace("clp", "exp")
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            c.style.display = "none";
                            if (b) {
                                b.style.display = "none"
                            }
                        }
                    } else {
                        if (c.lang != "") {
                            k = false;
                            break
                        } else {
                            c.style.display = (k ? "none" : "");
                            if (b) {
                                b.style.display = (k ? "none" : "")
                            }
                        }
                    }
                }
            }
        }
    }
}
function inpselect(b) {
    var a = b.value;
    if (a != "") {
        if (a.substr(0, 1) == "[" || a.substr(a.length, 1) == "]") {
            b.select()
        }
    }
}
function getInput(frm, theinp, turl, optlink) {
    var alstr = turl;
    var tinp = theinp.split("&");
    for (var n = 0; n < tinp.length; n++) {
        var vstr = "";
        var vinp = tinp[n].split("=");
        var obj = $sf(vinp[1]);
        if (obj.type.toUpperCase() == "CHECKBOX" || obj.type.toUpperCase() == "RADIO") {
            var obj = eval("frm." + obj.id);
            if (obj.length) {
                var arrStr = [];
                for (var i = 0; i < obj.length; i++) {
                    if (obj[i].checked) {
                        arrStr.push(obj[i].value)
                    }
                }
                vstr = arrStr.join(",")
            } else {
                if (obj.checked) {
                    vstr = obj.value
                }
            }
        } else {
            if (obj.type.toUpperCase() == "SELECT-ONE" || obj.type.toUpperCase() == "SELECT") {
                var obj = eval("frm." + obj.id);
                if (obj.length) {
                    var arrStr = [];
                    for (var i = 0; i < obj.length; i++) {
                        if (/^\[object (RadioNodeList|NodeList|HTMLCollection|Object)\]$/.test(Object.prototype.toString.call(obj))) {
                            if (obj[i].selectedIndex && obj[i].selectedIndex > 0) {
                                arrStr.push(obj[i].value)
                            }
                        } else {
                            if (obj.options[i].selected) {
                                arrStr.push(obj.options[i].value)
                            }
                        }
                    }
                    vstr = arrStr.join(",")
                } else {
                    if (obj.selectedIndex) {
                        vstr = obj.value
                    }
                }
            } else {
                if (obj.value) {
                    vstr = obj.value
                }
            }
        }
        if (vstr != "" && optlink && alstr.search("@") >= 0) {
            var vopt = optlink.split(",");
            for (var i = 0; i < vopt.length; i++) {
                dopt = vopt[i].split("=");
                if (dopt[0] == vstr) {
                    alstr = alstr.replace("@", dopt[1].replace(/~/g, "="));
                    break
                }
            }
        }
        alstr += "&" + vinp[0] + "=" + vstr
    }
    location = alstr
}
function getHeight(a) {
    if (typeof (a) === "string") {
        a = $sf(a)
    }
    return a.offsetHeight
}
function getWidth(a) {
    if (typeof (a) === "string") {
        a = $sf(a)
    }
    if (a) {
        return a.offsetWidth
    } else {
        return 0
    }
}
if (!window.console) {
    window.console = ({
        log: function() {},
        debug: function() {},
        info: function() {},
        warn: function() {},
        exception: function() {},
        assert: function() {},
        dir: function() {},
        dirxml: function() {},
        trace: function() {},
        group: function() {},
        groupCollapsed: function() {},
        groupEnd: function() {},
        profile: function() {},
        profileEnd: function() {},
        count: function() {},
        clear: function() {},
        time: function() {},
        timeEnd: function() {},
        timeStamp: function() {},
        table: function() {},
        error: function() {}
    })
}
function logthis() {
    if (console) {
        if (console.log) {
            if (arguments.length > 1) {
                console.log(arguments)
            } else {
                console.log(arguments[0])
            }
        }
    }
}
function tracethis() {
    if (console) {
        if (console.trace) {
            if (arguments.length > 1) {
                console.trace(arguments)
            } else {
                console.trace(arguments[0])
            }
        }
    }
}
function debugthis() {
    if (console) {
        if (console.debug) {
            if (arguments.length > 1) {
                console.debug(arguments)
            } else {
                console.debug(arguments[0])
            }
        }
    }
}
function delConfig(a) {
    location = a
}
function zoomTo(e, c, f) {
    if (bwtype == "FF") {
        if (typeof (e) === "string") {
            e = $sf(e)
        }
        if (e.style.transform == "") {
            e.style.transform = "scale(1)"
        }
        var a = e.style.transform.match(/scale\(([^)]+)\)/)[1];
        if (f == 100) {
            a = 1
        } else {
            a = parseInt(f) / 100
        }
        e.style.transform = "scale(" + a + ")";
        if (c != null) {
            if (typeof (c) === "string") {
                arrExclthis = c.split(",");
                for (var b = arrExclthis.length - 1; b >= 0; b--) {
                    if (arrExclthis[b] == "control") {
                        $sf(arrExclthis[b])
                    } else {
                        if (typeof (arrExclthis[b]) === "string") {
                            c = window.frames[0].$sf(arrExclthis[b])
                        }
                    }
                    if (c.style.transform == "") {
                        c.style.transform = "scale(1)"
                    }
                    var d = c.style.transform.match(/scale\(([^)]+)\)/)[1];
                    if (f == 100) {
                        d = 1
                    } else {
                        d = 100 / parseInt(f)
                    }
                    c.style.transform = "scale(" + d + ")"
                }
            } else {
                if (typeof (c) === "object") {
                    if (c.style.transform == "") {
                        c.style.transform = "scale(1)"
                    }
                    var d = c.style.transform.match(/scale\(([^)]+)\)/)[1];
                    if (f == 100) {
                        d = 1
                    } else {
                        d = 100 / parseInt(f)
                    }
                    c.style.transform = "scale(" + d + ")"
                }
            }
        }
    } else {
        if (bwtype == "IE") {
            if (typeof (e) === "string") {
                e = $sf(e)
            }
            if (e.style.zoom == "") {
                e.style.zoom = "1"
            }
            var a = e.style.zoom;
            if (f == 100) {
                a = 1
            } else {
                a = parseInt(f) / 100
            }
            e.style.zoom = a;
            if (c != null) {
                if (typeof (c) === "string") {
                    arrExclthis = c.split(",");
                    for (var b = arrExclthis.length - 1; b >= 0; b--) {
                        if (arrExclthis[b] == "control") {
                            $sf(arrExclthis[b])
                        } else {
                            if (typeof (arrExclthis[b]) === "string") {
                                c = window.frames[0].$sf(arrExclthis[b])
                            }
                        }
                        if (c.style.zoom == "") {
                            c.style.zoom = "1"
                        }
                        var d = c.style.zoom;
                        if (f == 100) {
                            d = 1
                        } else {
                            d = 100 / parseInt(f)
                        }
                        c.style.zoom = d
                    }
                } else {
                    if (typeof (c) === "object") {
                        if (c.style.zoom == "") {
                            c.style.zoom = "1"
                        }
                        var d = c.style.zoom;
                        if (f == 100) {
                            d = 1
                        } else {
                            d = 100 / parseInt(f)
                        }
                        c.style.zoom = d
                    }
                }
            }
        } else {
            if (bwtype == "Chrome") {
                if (typeof (e) === "string") {
                    e = $sf(e)
                }
                if (e.getAttribute("style") == null || e.getAttribute("style").match(/scale\(([^)]+)\)/) == null) {
                    e.setAttribute("style", "-webkit-transform: scale(1);")
                }
                var a = e.getAttribute("style").match(/scale\(([^)]+)\)/)[1];
                if (f == 100) {
                    a = 1
                } else {
                    a = parseInt(f) / 100
                }
                e.setAttribute("style", e.getAttribute("style").replace(/scale\(([^)]+)\)/, "scale(" + a + ")"));
                if (c != null) {
                    if (typeof (c) === "string") {
                        arrExclthis = c.split(",");
                        for (var b = arrExclthis.length - 1; b >= 0; b--) {
                            if (typeof (arrExclthis[b]) === "string") {
                                c = window.frames[0].$sf(arrExclthis[b])
                            }
                            if (c.getAttribute("style").match(/scale\(([^)]+)\)/) == null) {
                                c.setAttribute("style", c.getAttribute("style") + "-webkit-transform: scale(1)")
                            }
                            var d = c.getAttribute("style").match(/scale\(([^)]+)\)/)[1];
                            if (f == 100) {
                                d = 1
                            } else {
                                d = 100 / parseInt(f)
                            }
                            c.setAttribute("style", c.getAttribute("style").replace(/scale\(([^)]+)\)/, "scale(" + d + ")"))
                        }
                    } else {
                        if (typeof (c) === "object") {
                            if (c.getAttribute("style").match(/scale\(([^)]+)\)/) == null) {
                                c.setAttribute("style", c.getAttribute("style") + "-webkit-transform: scale(1)")
                            }
                            var d = c.getAttribute("style").match(/scale\(([^)]+)\)/)[1];
                            if (f == 100) {
                                d = 1
                            } else {
                                d = 100 / parseInt(f)
                            }
                            c.setAttribute("style", c.getAttribute("style").replace(/scale\(([^)]+)\)/, "scale(" + d + ")"))
                        }
                    }
                }
            }
        }
    }
}
function repositionControl() {
    var a = $sf("control");
    window.body.ctr.style.top = window.body.scrollTop + "px";
    a.style.left = window.body.scrollLeft + "px"
}
function getCaret(a) {
    el = $sf(a);
    if (el.selectionStart) {
        return el.selectionStart
    } else {
        if (document.selection) {
            el.focus();
            var c = document.selection.createRange();
            if (c == null) {
                return 0
            }
            var b = el.createTextRange()
              , d = b.duplicate();
            b.moveToBookmark(c.getBookmark());
            d.setEndPoint("EndToStart", b);
            return d.text.length
        }
    }
    return 0
}
function xinspect(e, b) {
    if (typeof b == "undefined") {
        b = ""
    }
    if (b.length > 50) {
        return "[MAX ITERATIONS]"
    }
    var c = [];
    for (var d in e) {
        var a = typeof e[d];
        c.push(b + '"' + d + '" (' + a + ") => " + (a == "object" ? "object:" + xinspect(e[d], b + " ") : e[d] + ""))
    }
    return c.join(b + "\n")
}
function setTextFocus(b, a) {
    if (typeof (b) === "string") {
        b = $sf(b)
    }
    if (b.value == a) {
        b.value = "";
        b.style.color = "black"
    }
}
function setTextBlur(b, a) {
    if (typeof (b) === "string") {
        b = $sf(b)
    }
    if (b.value == "") {
        b.value = a;
        b.style.color = ""
    }
}
function addBGColor(b) {
    var c = document.getElementsByTagName("div");
    for (var a = 0; a < c.length; a++) {
        if (c[a].className == b) {
            c[a].style.backgroundColor = "#ffffaa"
        }
    }
}
function clearBGColor(b) {
    var c = document.getElementsByTagName("div");
    for (var a = 0; a < c.length; a++) {
        if (c[a].className == b) {
            c[a].style.backgroundColor = ""
        }
    }
}
function checkEmpty(a) {
    var b = document.getElementById(a);
    if (b.value == "") {
        alert("The field cannot be empty.");
        b.select();
        b.focus();
        return false
    } else {
        return true
    }
}
function checkEmpStatus(d) {
    var c = document.getElementsByName(d);
    var b = 0;
    for (var a = 0; a < c.length; a++) {
        if (c[a].checked == true) {
            b++
        }
    }
    if (b < 1) {
        alert("Please choose at least one of Employment Status available.");
        return false
    } else {
        return true
    }
}
function checkRadio(d) {
    var a = document.getElementsByName(d);
    var c = 0;
    for (var b = 0; b < a.length; b++) {
        if (a[b].checked) {
            c++
        }
    }
    if (c < 1) {
        alert("Please choose one of the choice.");
        return false
    } else {
        return true
    }
}
function getElementsByFilter(tagname, querystring) {
    arrobjs = document.getElementsByTagName(tagname);
    arrobjret = new Array();
    if (querystring != null) {
        arrquerystring = querystring.split(";");
        arrquery = new Array();
        for (var i = arrquerystring.length - 1; i >= 0; i--) {
            arrtemp = new Array();
            arrtemp[0] = arrquerystring[i].split("=")[0];
            arrtemp[1] = arrquerystring[i].split("=")[1];
            arrquery.push(arrtemp)
        }
        looping: for (var i = arrobjs.length - 1; i >= 0; i--) {
            for (var q = arrquery.length - 1; q >= 0; q--) {
                attrquery = arrquery[q][0];
                attrvalue = arrquery[q][1];
                if (eval("arrobjs[i]." + attrquery) != attrvalue) {
                    continue looping
                }
            }
            arrobjret.push(arrobjs[i])
        }
    } else {
        arrobjret = arrobjs
    }
    return arrobjret
}
/*!
* accounting.js v0.3.2
* Copyright 2011, Joss Crowcroft
*
* Freely distributable under the MIT license.
* Portions of accounting.js are inspired or borrowed from underscore.js
*
* Full details and documentation:
* http://josscrowcroft.github.com/accounting.js/
*/
(function(o, g) {
    var n = {};
    n.version = "0.3.2";
    n.settings = {
        currency: {
            symbol: "$",
            format: "%s%v",
            decimal: ".",
            thousand: ",",
            precision: 2,
            grouping: 3
        },
        number: {
            precision: 0,
            grouping: 3,
            thousand: ",",
            decimal: "."
        }
    };
    var p = Array.prototype.map
      , j = Array.isArray
      , f = Object.prototype.toString;
    function c(r) {
        return !!(r === "" || (r && r.charCodeAt && r.substr))
    }
    function k(r) {
        return j ? j(r) : f.call(r) === "[object Array]"
    }
    function q(r) {
        return r && f.call(r) === "[object Object]"
    }
    function h(s, r) {
        var t;
        s = s || {};
        r = r || {};
        for (t in r) {
            if (r.hasOwnProperty(t)) {
                if (s[t] == null) {
                    s[t] = r[t]
                }
            }
        }
        return s
    }
    function a(w, v, u) {
        var t = [], s, r;
        if (!w) {
            return t
        }
        if (p && w.map === p) {
            return w.map(v, u)
        }
        for (s = 0,
        r = w.length; s < r; s++) {
            t[s] = v.call(u, w[s], s, w)
        }
        return t
    }
    function l(s, r) {
        s = Math.round(Math.abs(s));
        return isNaN(s) ? r : s
    }
    function e(s) {
        var r = n.settings.currency.format;
        if (typeof s === "function") {
            s = s()
        }
        if (c(s) && s.match("%v")) {
            return {
                pos: s,
                neg: s.replace("-", "").replace("%v", "-%v"),
                zero: s
            }
        } else {
            if (!s || !s.pos || !s.pos.match("%v")) {
                return (!c(r)) ? r : n.settings.currency.format = {
                    pos: r,
                    neg: r.replace("%v", "-%v"),
                    zero: r
                }
            }
        }
        return s
    }
    var i = n.unformat = n.parse = function(u, r) {
        if (k(u)) {
            return a(u, function(v) {
                return i(v, r)
            })
        }
        u = u || 0;
        if (typeof u === "number") {
            return u
        }
        r = r || n.settings.number.decimal;
        var t = new RegExp("[^0-9-" + r + "]",["g"])
          , s = parseFloat(("" + u).replace(/\((.*)\)/, "-$1").replace(t, "").replace(r, "."));
        return !isNaN(s) ? s : 0
    }
    ;
    var b = n.toFixed = function(t, r) {
        r = l(r, n.settings.number.precision);
        var s = Math.pow(10, r);
        return (Math.round(n.unformat(t) * s) / s).toFixed(r)
    }
    ;
    var d = n.formatNumber = function(t, w, z, v) {
        if (k(t)) {
            return a(t, function(A) {
                return d(A, w, z, v)
            })
        }
        t = i(t);
        var r = h((q(w) ? w : {
            precision: w,
            thousand: z,
            decimal: v
        }), n.settings.number)
          , x = l(r.precision)
          , u = t < 0 ? "-" : ""
          , s = parseInt(b(Math.abs(t || 0), x), 10) + ""
          , y = s.length > 3 ? s.length % 3 : 0;
        return u + (y ? s.substr(0, y) + r.thousand : "") + s.substr(y).replace(/(\d{3})(?=\d)/g, "$1" + r.thousand) + (x ? r.decimal + b(Math.abs(t), x).split(".")[1] : "")
    }
    ;
    var m = n.formatMoney = function(t, s, v, z, u, y) {
        if (k(t)) {
            return a(t, function(A) {
                return m(A, s, v, z, u, y)
            })
        }
        t = i(t);
        var r = h((q(s) ? s : {
            symbol: s,
            precision: v,
            thousand: z,
            decimal: u,
            format: y
        }), n.settings.currency)
          , x = e(r.format)
          , w = t > 0 ? x.pos : t < 0 ? x.neg : x.zero;
        return w.replace("%s", r.symbol).replace("%v", d(Math.abs(t), l(r.precision), r.thousand, r.decimal))
    }
    ;
    n.formatColumn = function(y, t, w, B, v, A) {
        if (!y) {
            return []
        }
        var r = h((q(t) ? t : {
            symbol: t,
            precision: w,
            thousand: B,
            decimal: v,
            format: A
        }), n.settings.currency)
          , z = e(r.format)
          , x = z.pos.indexOf("%s") < z.pos.indexOf("%v") ? true : false
          , s = 0
          , u = a(y, function(F, D) {
            if (k(F)) {
                return n.formatColumn(F, r)
            } else {
                F = i(F);
                var C = F > 0 ? z.pos : F < 0 ? z.neg : z.zero
                  , E = C.replace("%s", r.symbol).replace("%v", d(Math.abs(F), l(r.precision), r.thousand, r.decimal));
                if (E.length > s) {
                    s = E.length
                }
                return E
            }
        });
        return a(u, function(D, C) {
            if (c(D) && D.length < s) {
                return x ? D.replace(r.symbol, r.symbol + (new Array(s - D.length + 1).join(" "))) : (new Array(s - D.length + 1).join(" ")) + D
            }
            return D
        })
    }
    ;
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = n
        }
        exports.accounting = n
    } else {
        if (typeof define === "function" && define.amd) {
            define([], function() {
                return n
            })
        } else {
            n.noConflict = (function(r) {
                return function() {
                    o.accounting = r;
                    n.noConflict = g;
                    return n
                }
            }
            )(o.accounting);
            o.accounting = n
        }
    }
}(this));
function autoEval(d, b, a) {
    if (d) {
        try {
            if (b == null || typeof (b) == "undefined") {
                b = ","
            }
            if (a == null || typeof (a) == "undefined") {
                a = "."
            }
            str = removeNumberFormat(d.value, b, a);
            if (str == "" || isNaN(str) || str < 0) {
                d.value = 0
            } else {
                if (str % 1 == 0) {
                    d.value = moneyFormatERP(str, "", 0, b, a)
                } else {
                    d.value = moneyFormatERP(str, "", 10, b, a)
                }
            }
        } catch (c) {
            alert(c)
        }
    }
}
function removeNumberFormat(c, b, a) {
    var d = String(c).replace(String.fromCharCode(160), " ");
    if (b != "") {
        d = d.split(b).join("")
    }
    if (a != ".") {
        d = d.replace(a, ".")
    }
    if (d == "" || isNaN(d)) {
        return 0
    } else {
        return d
    }
}
function applyDecimalFormat(b, a) {
    var c = String(b);
    if (isNaN(c)) {
        return 0
    } else {
        if (a != ".") {
            c = c.replace(".", a)
        }
        return c
    }
}
function isIntOnly(b) {
    if (b.which) {
        var a = b.which
    } else {
        if (document.all && event.keyCode) {
            var a = event.keyCode
        } else {
            return true
        }
    }
    return ((a == 47) || (a == 32) || (a == 39) || (a == 44) || (a == 45) || (a == 46) || (a == 8) || (a >= 48) && (a <= 57))
}
function setdecimal(obj, format) {
    if (obj) {
        try {
            if (obj.value == "") {
                obj.value = 0
            }
            obj.value = accounting.formatNumber(parseFloat(eval(obj.value.split(",").join(""))), format)
        } catch (e) {
            alert(e)
        }
    }
}
function RoundNDecimal(d, c) {
    var a, b = new String(Math.round(d * Number("1e" + c)));
    while (b.length <= c) {
        b = "0" + b
    }
    return b.substr(0, a = (b.length - c)) + "." + b.substr(a, c)
}
function stripURL(h, k) {
    if (h == null || k == null || k == "") {
        return [h, 0]
    }
    var g = h.split("&");
    var f = k.split(",");
    var a = [];
    var b = 0;
    for (var e = 0; e < g.length; e++) {
        var d = g[e].split("=");
        for (var c = 0; c < f.length; c++) {
            if (d[0] != f[c]) {
                a.push(g[e])
            } else {
                b = 1
            }
        }
    }
    return [a.join("&"), b]
}
function moneyFormatERP(g, f, a, d, c) {
    if (f == null || f == "" || typeof (f) == "undefined") {
        f = ""
    }
    if (a == null || a == "" || typeof (a) == "undefined") {
        g = parseFloat(g).toFixed(0)
    } else {
        g = roundX(g, -a);
        if (!isNaN(g)) {
            word = g.toString();
            if (word.indexOf("e") > 0) {
                digit = word.substr(word.indexOf("e") + 1, word.length - 1);
                if (digit < 0) {
                    g = g.toFixed(a)
                }
            }
            b = g.toString().split(".");
            if (b.length == 1) {
                b[1] = "";
                for (cntDigit = 0; cntDigit < a; cntDigit++) {
                    b[1] = b[1] + "0"
                }
                if (b[1] != "") {
                    g = b[0] + "." + b[1]
                } else {
                    g = b[0]
                }
            } else {
                if (b.length == 2) {
                    currDigit = b[1].length;
                    if (currDigit < a) {
                        for (cntDigit = 0; cntDigit < a - currDigit; cntDigit++) {
                            b[1] = b[1] + "0"
                        }
                    }
                    if (b[1] != "") {
                        g = b[0] + "." + b[1]
                    } else {
                        g = b[0]
                    }
                }
            }
        }
    }
    if (d == null || typeof (d) == "undefined") {
        d = ","
    }
    if (c == null || typeof (c) == "undefined") {
        c = "."
    }
    var e = new RegExp("(-?[0-9]+)([0-9]{3})");
    var h = g + "";
    var b = [];
    b = h.split(".");
    h = b[0];
    if (d != "") {
        while (e.test(h)) {
            h = h.replace(e, "$1" + d + "$2")
        }
    }
    if (b.length > 1) {
        h = h + c + b[1]
    }
    return (f + h)
}
function roundX(a, b) {
    if (typeof b === "undefined" || +b === 0) {
        return Math.round(a)
    }
    a = +a;
    b = +b;
    if (isNaN(a) || !(typeof b === "number" && b % 1 === 0)) {
        return NaN
    }
    a = a.toString().split("e");
    a = Math.round(+(a[0] + "e" + (a[1] ? (+a[1] - b) : -b)));
    a = a.toString().split("e");
    return +(a[0] + "e" + (a[1] ? (+a[1] + b) : b))
}
function disableKeyPress(c, b) {
    var a = b.split(",").indexOf((c.keyCode ? c.keyCode : c.which).toString()) == -1;
    if (a == false) {
        c.preventDefault();
        return false
    }
}
function QtyFormatERP(f, a, d, c) {
    if (a == null || a == "" || typeof (a) == "undefined") {
        f = parseFloat(f).toFixed(0)
    } else {
        f = roundX(f, -a);
        if (!isNaN(f)) {
            word = f.toString();
            if (word.indexOf("e") > 0) {
                digit = word.substr(word.indexOf("e") + 1, word.length - 1);
                if (digit < 0) {
                    f = f.toFixed(a)
                }
            }
            b = f.toString().split(".");
            if (b.length == 1) {
                b[1] = "";
                for (cntDigit = 0; cntDigit < a; cntDigit++) {
                    b[1] = b[1] + "0"
                }
                if (b[1] != "") {
                    f = b[0] + "." + b[1]
                } else {
                    f = b[0]
                }
            } else {
                if (b.length == 2) {
                    currDigit = b[1].length;
                    if (currDigit < a) {
                        for (cntDigit = 0; cntDigit < a - currDigit; cntDigit++) {
                            b[1] = b[1] + "0"
                        }
                    }
                    if (b[1] != "") {
                        f = b[0] + "." + b[1]
                    } else {
                        f = b[0]
                    }
                }
            }
        }
    }
    if (d == null || typeof (d) == "undefined") {
        d = ","
    }
    if (c == null || typeof (c) == "undefined") {
        c = "."
    }
    var e = new RegExp("(-?[0-9]+)([0-9]{3})");
    var g = f + "";
    var b = [];
    b = g.split(".");
    g = b[0];
    if (d != "") {
        while (e.test(g)) {
            g = g.replace(e, "$1" + d + "$2")
        }
    }
    if (b.length > 1) {
        g = g + c + b[1]
    }
    return (g)
}
function FormatNonRound(e, c, b) {
    if (c == null || typeof (c) == "undefined") {
        c = ","
    }
    if (b == null || typeof (b) == "undefined") {
        b = "."
    }
    var d = new RegExp("(-?[0-9]+)([0-9]{3})");
    var f = e + "";
    var a = [];
    a = f.split(".");
    f = a[0];
    if (c != "") {
        while (d.test(f)) {
            f = f.replace(d, "$1" + c + "$2")
        }
    }
    if (a.length > 1) {
        f = f + b + a[1]
    }
    return (f)
}
function arrayDiff(b, a) {
    if (!isArray(b) || !isArray(a)) {
        return ""
    }
    if (b.length < a.length) {
        var e = a;
        a = b;
        b = e
    }
    var d = [];
    var c = 0;
    jQuery.grep(b, function(f) {
        if (jQuery.inArray(f, a) == -1) {
            d.push(f)
        }
        c++
    });
    return d
}
function arrayCommon(b, a) {
    if (!isArray(b) || !isArray(a)) {
        return ""
    }
    if (b.length < a.length) {
        var e = a;
        a = b;
        b = e
    }
    var d = [];
    var c = 0;
    jQuery.grep(b, function(f) {
        if (jQuery.inArray(f, a) != -1) {
            d.push(f)
        }
        c++
    });
    return d
}
function arrayUnique(a) {
    if (!isArray(a)) {
        return ""
    }
    var b = [];
    $.each(a, function(c, d) {
        if ($.inArray(d, b) == -1) {
            b.push(d)
        }
    });
    return b
}
function loadScripts(c, b) {
    var a = document.getElementsByTagName("head")[0];
    if (b === undefined) {
        b = "text/javascript"
    }
    c.forEach(function(e) {
        var d = document.createElement("script");
        d.type = b;
        d.src = e;
        a.appendChild(d)
    })
}
function loadStyles(b) {
    var c = "sfcss-";
    var a = document.getElementsByTagName("head")[0];
    b.forEach(function(e, d) {
        var f = document.createElement("link");
        f.id = c + d;
        f.rel = "stylesheet";
        f.type = "text/css";
        f.href = e;
        f.media = "all";
        a.appendChild(f)
    })
}
function togglePassInput(a, b) {
    togglePassword = document.querySelector("#" + a);
    password = document.querySelector("#" + b);
    itype = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", itype)
}
;/* {ts '2025-03-05 07:45:39'} res.ajax:SF6_HRIS_SILOAM */
if (typeof syserrmsg == "undefined") {
    var syserrmsg = "We're sorry\n\nThe system is having trouble processing some requests\nPlease wait for a while or refresh your browser to reload the system\n\nShould the problem persist please contact system administrator"
}
var imgcpath = "images/";
function isJson(a) {
    a = typeof a !== "string" ? JSON.stringify(a) : a;
    try {
        a = JSON.parse(a)
    } catch (b) {
        return false
    }
    if (typeof a === "object" && a !== null) {
        return true
    }
    return false
}
function runScriptsJSX(b, g, j) {
    if (g === undefined) {
        g = "text/babel"
    }
    if (j === undefined) {
        j = "utf-8"
    }
    var f = document.getElementsByTagName("head")[0]
      , e = document.createElement("script");
    e.charset = j;
    e.innerHTML = Babel.transform(b, {
        presets: ["es2015", "stage-2", "react"],
        plugins: ["transform-es2015-destructuring", "transform-es2015-arrow-functions", "transform-jscript", "transform-object-set-prototype-of-to-assign", "transform-object-rest-spread"]
    }).code;
    f.appendChild(e)
}
function loadScriptsJSX(g, c, h, f) {
    var d, e;
    var b = document.getElementsByTagName("head")[0];
    var a = document.getElementsByTagName("script");
    if (c === undefined) {
        c = "text/babel"
    }
    if (h === undefined) {
        h = "utf-8"
    }
    if (window.XMLHttpRequest) {
        d = new XMLHttpRequest()
    } else {
        d = new ActiveXObject("Microsoft.XMLHTTP")
    }
    g.forEach(function(l) {
        var k = "";
        var j = 0;
        d.onreadystatechange = function() {
            if (d.readyState == 4 && d.status == 200) {
                k = d.responseText;
                var m = document.createElement("script");
                m.text = Babel.transform(k, {
                    presets: ["es2015", "stage-3", "react"],
                    plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
                }).code;
                m.charset = h;
                b.appendChild(m)
            }
        }
        ;
        d.open("GET", l, true);
        d.setRequestHeader("Content-Type", "application/javascript; utf-8");
        d.send()
    })
}
function sethtml(c, j, l) {
    if (c == null) {
        return j
    }
    if (l == null) {
        l = true
    }
    var n = j;
    var g = j;
    var k;
    var m = "";
    if (l) {
        var f = j.replace(/<script[^>]*>[^<]*<\/script>/gi, "");
        try {
            c.innerHTML = j
        } catch (h) {
            try {
                if (typeof (jQuery) != "undefined") {
                    $("#" + c.id).html(j)
                } else {
                    throw (h)
                }
            } catch (h) {
                try {
                    c.innerHTML = f
                } catch (h) {
                    if (typeof (jQuery) != "undefined") {
                        $("#" + c.id).html(f)
                    }
                }
            }
        }
        c.title = "";
        c.onclick = null;
        c.style.cursor = "default"
    }
    while (k = n.match(/(<script[^>]*>\s*(<!--)?)/i)) {
        n = n.substr(n.indexOf(RegExp.$1) + RegExp.$1.length);
        if (!(endscript = n.match(/((-->)?\s*<\/script>)/i))) {
            break
        }
        block = n.substr(0, n.indexOf(RegExp.$1));
        n = n.substring(block.length + RegExp.$1.length);
        var b = document.createElement("script");
        if (block.substr(0, 14).toUpperCase() == "CF_RUNCONTENT(") {
            m += block.substr(15, block.length - 18);
            block = ""
        }
        if (block != "") {
            b.text = block;
            var a = getParentTag(c, "BODY");
            if (a != null) {
                a = a.parentNode
            } else {
                a = document
            }
            var d = a.getElementsByTagName("head");
            if (d) {
                if (d.item) {
                    if (bwtype == "IE") {
                        if (d.item(0)) {
                            d.item(0).appendChild(b)
                        }
                    } else {
                        d.item(0).appendChild(b)
                    }
                }
            }
        }
    }
    if (m != "") {
        c.insertAdjacentHTML("beforeEnd", m)
    }
    return f
}
function GetXmlHttpObject() {
    var a = null;
    try {
        a = new XMLHttpRequest()
    } catch (b) {
        try {
            a = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (b) {
            a = new ActiveXObject("Microsoft.XMLHTTP")
        }
    }
    return a
}
var inprefix = "";
function urlencode(b, a) {
    if (a) {
        return b
    } else {
        return encodeURIComponent(b)
    }
}
function form2query(theform, prefix, istruct) {
    if (prefix == null) {
        prefix = inprefix
    }
    if (istruct == null) {
        istruct = false
    }
    var arrParam = new Array();
    var arrValue = new Array();
    var selm = new Array();
    var lselm = "";
    for (var i = 0; i < theform.elements.length; i++) {
        var velm = theform.elements[i];
        if (velm.type != null && velm.type != "fieldset") {
            var vname = (velm.name != "" ? velm.name : velm.id).replace(prefix, "");
            if (velm.type == "checkbox") {
                var vinp = eval("theform." + velm.name);
                var arrlselm = lselm.split(",");
                if (!vinp) {
                    continue
                } else {
                    if (arrlselm.indexOf(vname) >= 0) {
                        continue
                    }
                }
            }
            try {
                selm.push(vname + "=" + velm.value)
            } catch (e) {}
            var ohdn = $sf("hdn_" + vname);
            if (ohdn) {
                if (velm.id != ohdn.id) {
                    ohdn = null
                }
            }
            if (ohdn == null) {
                switch (velm.type) {
                case "hidden":
                case "text":
                case "password":
                case "textarea":
                case "select-one":
                    if (velm.value != null && vname != "") {
                        if (theform.enctype == "multipart/form-data" && velm.type == "textarea") {
                            arrParam[arrParam.length] = vname + "=" + urlencode(velm.value, istruct) + "=" + velm.type;
                            arrValue[arrValue.length] = velm.value
                        } else {
                            arrParam[arrParam.length] = vname + "=" + urlencode(velm.value, istruct);
                            arrValue[arrValue.length] = velm.value
                        }
                    }
                    break;
                case "checkbox":
                    if (vinp.length) {
                        lselm += "," + vname;
                        var vval = "";
                        var vtxt = "";
                        for (var j = 0; j < vinp.length; j++) {
                            if (vinp[j].checked && vinp[j].value != "") {
                                vval += "," + vinp[j].value;
                                vtxt += "," + vinp[j].title
                            }
                        }
                        arrParam[arrParam.length] = vname + "=" + urlencode(vval.substr(1), istruct);
                        arrValue[arrValue.length] = vtxt.substr(1);
                        break
                    } else {
                        if (vname != "") {
                            if (velm.checked) {
                                if ((velm.value != null && velm.value != "") || (velm.lang != null && velm.lang != "")) {
                                    var mvalue = (velm.value != null && velm.value != "" ? velm.value : velm.lang);
                                    arrParam[arrParam.length] = vname + "=" + urlencode(mvalue, istruct);
                                    arrValue[arrValue.length] = velm.title
                                }
                            } else {
                                var odefa = $sf("defa_" + vinp.id);
                                if (odefa) {
                                    var mvalue = odefa.value;
                                    arrParam[arrParam.length] = vname + "=" + mvalue;
                                    arrValue[arrValue.length] = velm.title
                                }
                            }
                        }
                    }
                    break;
                case "radio":
                    if (velm.checked && ((velm.value != null && velm.value != "") || (velm.lang != null && velm.lang != "")) && vname != "") {
                        var mvalue = (velm.value != null && velm.value != "" ? velm.value : velm.lang);
                        arrParam[arrParam.length] = vname + "=" + urlencode(mvalue, istruct);
                        arrValue[arrValue.length] = velm.title
                    }
                    break;
                case "select-multiple":
                    var vval = "";
                    var vtxt = "";
                    for (var j = 0; j < velm.options.length; j++) {
                        if (velm.options[j].selected && velm.options[j].value != "") {
                            vval += "," + velm.options[j].value;
                            vtxt += "," + velm.options[j].text
                        }
                    }
                    arrParam[arrParam.length] = vname + "=" + urlencode(vval.substr(1), istruct);
                    arrValue[arrValue.length] = vtxt.substr(1);
                    break
                }
            }
        }
    }
    if (istruct) {
        return [arrValue, arrParam]
    } else {
        return arrParam.join("&")
    }
}
function doesFileExist(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, false);
    b.send();
    if (b.status == "404") {
        return false
    } else {
        return true
    }
}
function getAJAXContent(x, C, j, a, t, f) {
    if (x == null) {
        return ""
    }
    var m = x;
    if (top.innerPop && j == null) {
        if (top.divBlockSpace) {
            if (top.divBlockSpace.style.display == "none") {
                top.innerPop("")
            }
        } else {
            top.innerPop("")
        }
    }
    var l = null;
    try {
        $(".loading div table img").removeAttr("onclick")
    } catch (A) {}
    try {
        $(t).find("#inp_companyparameterguide").remove();
        var y = $("<input>").attr({
            type: "hidden",
            name: "inp_companyparameterguide",
            id: "inp_companyparameterguide",
            value: companyparamtid
        }).appendTo(t)
    } catch (A) {}
    if (typeof (t) == "string") {
        if (t == "error") {
            if (bwtype == "IE") {
                var g = -1;
                var w = navigator.userAgent;
                var u = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                if (u.exec(w) != null) {
                    g = parseFloat(RegExp.$1)
                }
                if (g > -1 && g < 9) {
                    var l = document.createElement("form")
                }
            }
            if (l == null) {
                var l = document.createElement("form")
            }
            var B = document.getElementsByTagName("body")[0];
            B.appendChild(l);
            t = l;
            var v = document.createElement("input");
            v.name = "sferr";
            v.type = "hidden";
            v.value = f;
            t.appendChild(v);
            f = null
        }
    }
    if (t != null && t.enctype == "multipart/form-data") {
        if (m.length == 0) {
            return ""
        }
        if (m.search(/&isajax=/gi) < 0) {
            m += "&isajax=yes"
        }
        if (m.search(/&lreqts=/gi) < 0) {
            m += "&lreqts=" + jsnow()
        }
        var k = (function() {
            var e = document.createElement("div");
            return function(E) {
                e.innerHTML = E;
                var F = e.firstChild;
                return e.removeChild(F)
            }
        }
        )();
        var b = document.getElementById("frameAjax");
        if (b == null) {
            b = k('<iframe src="javascript:false;" name="frameAjax" />');
            b.id = "frameAjax";
            b.name = "frameAjax";
            b.style.display = "none";
            var B = document.getElementsByTagName("body")[0];
            B.appendChild(b)
        }
        var p = null;
        if (bwtype == "IE") {
            var g = -1;
            var w = navigator.userAgent;
            var u = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
            if (u.exec(w) != null) {
                g = parseFloat(RegExp.$1)
            }
            if (g > -1 && g < 9) {
                var p = document.createElement('<form method="post" enctype="multipart/form-data" target="frameAjax" action="?"/>')
            }
        }
        if (p == null) {
            var p = document.createElement("form");
            p.target = "frameAjax";
            p.method = "post";
            p.enctype = "multipart/form-data"
        }
        p.action = m + "&cbfunc=parent.innerClose(function(){maskButton(false)});";
        var B = document.getElementsByTagName("body")[0];
        B.appendChild(p);
        var c = form2query(t);
        var s = c.split("&");
        for (i = 0; i < s.length; i++) {
            var o = s[i].split("=");
            var v = document.createElement("input");
            if (o.length > 2) {
                if (o[2] == "textarea") {
                    v = document.createElement("textarea")
                }
            }
            v.name = o[0];
            v.value = decodeURIComponent(o[1]);
            p.appendChild(v)
        }
        var z = new Array();
        for (i = 0; i < t.length; i++) {
            if (t[i].type == "file") {
                var r = new Array();
                r[0] = t[i];
                r[1] = t[i].name;
                r[2] = t[i].parentNode;
                z[z.length] = r
            }
        }
        for (i = 0; i < z.length; i++) {
            p.appendChild(z[i][0]);
            z[i][0].name = z[i][1].substr(4)
        }
        p.submit();
        p.target = "";
        for (i = 0; i < z.length; i++) {
            z[i][2].appendChild(z[i][0]);
            z[i][0].name = z[i][1]
        }
        B.removeChild(p);
        if (l != null) {
            B.removeChild(l)
        }
    } else {
        if (C == null || C == "undefined") {
            var n = null
        } else {
            if (typeof (C) == "string") {
                var n = $sf(C)
            } else {
                var n = C
            }
        }
        var h = n;
        if (m.length == 0) {
            if (n != null) {
                n.innerHTML = ""
            } else {
                return ""
            }
        }
        if (m.search(/&isajax=/gi) < 0) {
            m += "&isajax=yes"
        }
        if (m.search(/&lreqts=/gi) < 0) {
            m += "&lreqts=" + jsnow()
        }
        var d = GetXmlHttpObject();
        if (d == null) {
            alert("Your browser does not support AJAX");
            return ""
        }
        try {
            if (m.search(/&cpts=/gi) < 0) {
                m += "&cpts=" + companyparamtid
            }
        } catch (A) {}
        if (t != null) {
            var D = "POST";
            var q = form2query(t)
        } else {
            var D = "GET";
            var q = ""
        }
        d.open(D, m, true);
        if (D == "POST") {
            if (f == null) {
                f = "application/x-www-form-urlencoded"
            }
            d.setRequestHeader("Content-type", f + "; charset=UTF-8")
        }
        d.onreadystatechange = function() {
            if (d.readyState == 4) {
                objLoading = document.getElementById("divLoading");
                if (objLoading != null) {
                    objLoading.style.display = "none"
                }
                if (top.innerClose && top.divPopup) {
                    if (top.divPopup.innerHTML.search("loading.gif") >= 0) {
                        if (n) {
                            if (n.id != "divPopup") {
                                top.innerClose()
                            }
                        } else {
                            top.innerClose()
                        }
                    }
                }
                var E = d.responseText;
                if (top.divBlockSpace) {
                    var I = '<img src="' + imgcpath + 'icon/close-bg.png" title="Click to close block layer." alt="Click to close block layer." width="155" height="25" onclickx="unBlock();top.divBlockSpace.innerHTML=null;" style="position:absolute;left:' + top.divBlock.style.left + ";top:" + top.divBlock.style.top + ';">'
                } else {
                    var I = ""
                }
                if ((E.search("rror Occurred While Processing Request</title>") >= 0) || (E.search("<title>500 - Internal server erro") >= 0)) {
                    var e = E;
                    var H = Math.floor(Math.random() * 1000000);
                    E = E.replace(/<[^>]*>/gi, "");
                    E = E.replace(/[\s]+/g, "");
                    var G = E.indexOf("<body");
                    if (G) {
                        E = E.substring(G, E.length - G)
                    }
                    if (bwtype != "Opera" && m.search("sys.sec.logerr") < 0) {
                        setCookie("CKSFERR", H + E.substr(0, 1500), null, "/");
                        getAJAXContent("?sfid=sys.sec.logerr&inum=" + H + "&surl=" + m + "&serr=" + encodeURI(E), n, true, null, "error", e);
                        if (typeof (sfalert) == "function") {
                            sfalert(syserrmsg)
                        } else {
                            alert(syserrmsg)
                        }
                        if (top.divBlockSpace) {
                            top.divBlockSpace.style.textAlign = "center";
                            top.divBlockSpace.style.verticalAlign = "middle";
                            top.divBlockSpace.innerHTML = I
                        }
                        E = ""
                    }
                } else {
                    if (E.search('class="Error"') >= 0) {
                        var e = E;
                        var H = Math.floor(Math.random() * 1000000);
                        E = E.replace(/<[^>]*>/gi, "_");
                        E = E.replace(/[\s]+/g, "=");
                        var G = E.indexOf("<body");
                        if (G) {
                            E = E.substring(G, E.length - G)
                        }
                        if (bwtype != "Opera" && m.search("sys.sec.logerr") < 0) {
                            setCookie("CKSFERR", H + E.substr(0, 1500), null, "/");
                            getAJAXContent("?sfid=sys.sec.logerr&inum=" + H + "&surl=" + m + "&serr=" + encodeURI(E), n, true, null, "error", e);
                            E = "";
                            sfalert(syserrmsg);
                            if (top.divBlockSpace) {
                                top.divBlockSpace.style.textAlign = "center";
                                top.divBlockSpace.style.verticalAlign = "middle";
                                top.divBlockSpace.innerHTML = I
                            }
                        }
                    }
                }
                if (n != null) {
                    var F = sethtml(n, E);
                    if (j == null) {
                        document.body.style.cursor = "default"
                    }
                    if (n.innerHTML != "" && j != false && n.id != "spAjax") {
                        if (F != "") {
                            n.style.display = ""
                        } else {
                            n.style.display = "none"
                        }
                    } else {
                        if (j != false) {
                            n.style.display = "none"
                        }
                    }
                    if (a != null) {
                        a(F, t)
                    }
                } else {
                    if (a != null) {
                        a(E, t)
                    } else {
                        return E
                    }
                }
            } else {
                objLoading = document.getElementById("divLoading");
                if (objLoading != null) {
                    objLoading.style.left = ((document.body.clientWidth - objLoading.clientWidth) / 2) + "px";
                    objLoading.style.top = ((document.body.clientHeight - objLoading.clientHeight) / 2) + "px";
                    objLoading.style.display = ""
                }
            }
        }
        ;
        d.send(q);
        if (j == null) {
            document.body.style.cursor = "wait"
        }
    }
}
function SFFetchContent(C, H, m, a, w, h) {
    if (C == null) {
        return ""
    }
    var p = C;
    if (top.innerPop && m == null) {
        if (top.divBlockSpace) {
            if (top.divBlockSpace.style.display == "none") {
                top.innerPop("")
            }
        } else {
            top.innerPop("")
        }
    }
    var o = null;
    try {
        $(".loading div table img").removeAttr("onclick")
    } catch (F) {}
    try {
        $(w).find("#inp_companyparameterguide").remove();
        var D = $("<input>").attr({
            type: "hidden",
            name: "inp_companyparameterguide",
            id: "inp_companyparameterguide",
            value: companyparamtid
        }).appendTo(w)
    } catch (F) {}
    if (typeof (w) == "string") {
        if (w == "error") {
            if (bwtype == "IE") {
                var k = -1;
                var B = navigator.userAgent;
                var x = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                if (x.exec(B) != null) {
                    k = parseFloat(RegExp.$1)
                }
                if (k > -1 && k < 9) {
                    var o = document.createElement("form")
                }
            }
            if (o == null) {
                var o = document.createElement("form")
            }
            var G = document.getElementsByTagName("body")[0];
            G.appendChild(o);
            w = o;
            var y = document.createElement("input");
            y.name = "sferr";
            y.type = "hidden";
            y.value = h;
            w.appendChild(y);
            h = null
        }
    }
    if (w != null && w.enctype == "multipart/form-data") {
        if (p.length == 0) {
            return ""
        }
        if (p.search(/&isajax=/gi) < 0) {
            p += "&isajax=yes"
        }
        if (p.search(/&lreqts=/gi) < 0) {
            p += "&lreqts=" + jsnow()
        }
        var n = (function() {
            var e = document.createElement("div");
            return function(J) {
                e.innerHTML = J;
                var K = e.firstChild;
                return e.removeChild(K)
            }
        }
        )();
        var c = document.getElementById("frameAjax");
        if (c == null) {
            c = n('<iframe src="javascript:false;" name="frameAjax" />');
            c.id = "frameAjax";
            c.name = "frameAjax";
            c.style.display = "none";
            var G = document.getElementsByTagName("body")[0];
            G.appendChild(c)
        }
        var s = null;
        if (bwtype == "IE") {
            var k = -1;
            var B = navigator.userAgent;
            var x = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
            if (x.exec(B) != null) {
                k = parseFloat(RegExp.$1)
            }
            if (k > -1 && k < 9) {
                var s = document.createElement('<form method="post" enctype="multipart/form-data" target="frameAjax" action="?"/>')
            }
        }
        if (s == null) {
            var s = document.createElement("form");
            s.target = "frameAjax";
            s.method = "post";
            s.enctype = "multipart/form-data"
        }
        s.action = p + "&cbfunc=parent.innerClose(function(){maskButton(false)});";
        var G = document.getElementsByTagName("body")[0];
        G.appendChild(s);
        var f = form2query(w);
        var v = f.split("&");
        for (A = 0; A < v.length; A++) {
            var r = v[A].split("=");
            var y = document.createElement("input");
            if (r.length > 2) {
                if (r[2] == "textarea") {
                    y = document.createElement("textarea")
                }
            }
            y.name = r[0];
            y.value = decodeURIComponent(r[1]);
            s.appendChild(y)
        }
        var E = new Array();
        for (A = 0; A < w.length; A++) {
            if (w[A].type == "file") {
                var u = new Array();
                u[0] = w[A];
                u[1] = w[A].name;
                u[2] = w[A].parentNode;
                E[E.length] = u
            }
        }
        for (A = 0; A < E.length; A++) {
            s.appendChild(E[A][0]);
            E[A][0].name = E[A][1].substr(4)
        }
        var d = new Headers();
        var j = [0, ""];
        if (s.method == "post") {
            d.set("Accept", "application/json, application/xml, text/plain, text/html, *.*");
            d.set("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
            var z = new FormData();
            for (var A = 0; A < s.length; ++A) {
                z.append(s[A].name, s[A].value)
            }
        } else {
            var z = JSON.stringify({
                Form: s
            })
        }
        var g = new Request(s.action,{
            method: s.method,
            mode: "cors",
            credentials: "include",
            body: z
        });
        fetch(g).then(function(e) {
            if (e.ok) {
                if (isJson(e)) {
                    return e
                } else {
                    return e.json()
                }
            } else {
                j = ["danger", "Server Response Error"];
                throw new Error("Server response was not OK")
            }
        }).then(function(e) {
            if (e.statusText.toUpperCase() === "OK") {
                e.text().then(function(O) {
                    var J = O;
                    if (J.match(/<script[^>]*>[^<]*<\/script>/gi)) {
                        var L = J.match(/<script[^>]*>[^<]*<\/script>/gi);
                        for (A = 0; A < L.length; A++) {
                            var M = L[A];
                            var K = document.createElement("script");
                            K.text = M.match(/<script[^>]*>([^<]*(?:(?!<\/?script)<[^<]*)*)<\/script\s*>/i)[1];
                            document.getElementsByTagName("head")[0].appendChild(K)
                        }
                    } else {
                        var N = document.getElementById("frameAjax").contentDocument ? document.getElementById("frameAjax").contentDocument : document.getElementById("frameAjax").contentWindow.document;
                        N.body.innerHTML = J
                    }
                })
            } else {
                j = ["danger", e.errmsg];
                throw new Error("Unexpected Server response")
            }
        });
        s.target = "";
        for (A = 0; A < E.length; A++) {
            E[A][2].appendChild(E[A][0]);
            E[A][0].name = E[A][1]
        }
        G.removeChild(s);
        if (o != null) {
            G.removeChild(o)
        }
    } else {
        if (H == null || H == "undefined") {
            var q = null
        } else {
            if (typeof (H) == "string") {
                var q = $sf(H)
            } else {
                var q = H
            }
        }
        var l = q;
        if (p.length == 0) {
            if (q != null) {
                q.innerHTML = ""
            } else {
                return ""
            }
        }
        if (p.search(/&isajax=/gi) < 0) {
            p += "&isajax=yes"
        }
        if (p.search(/&lreqts=/gi) < 0) {
            p += "&lreqts=" + jsnow()
        }
        try {
            if (p.search(/&cpts=/gi) < 0) {
                p += "&cpts=" + companyparamtid
            }
        } catch (F) {}
        if (w != null) {
            var I = "POST";
            var t = form2query(w)
        } else {
            var I = "GET";
            var t = ""
        }
        var d = new Headers();
        if (I == "POST") {
            if (h == null) {
                h = "application/x-www-form-urlencoded"
            }
            d.set("Content-type", h + "; charset=UTF-8");
            d.set("Accept", "application/json, application/xml, text/plain, text/html, *.*");
            var b = new FormData();
            for (var A = 0; A < t.length; ++A) {
                b.append(t[A].name, t[A].value)
            }
        } else {
            var b = JSON.stringify({
                Form: t
            })
        }
        var g = new Request(p,{
            method: I,
            mode: "cors",
            credentials: "include",
            body: b
        });
        fetch(g).then(function(e) {
            if (e.ok) {
                if (isJson(e)) {
                    return e
                } else {
                    return e.json()
                }
            } else {
                j = ["danger", "Server Response Error"];
                throw new Error("Server response was not OK")
            }
        }).then(function(e) {
            if (e.statusText.toUpperCase() === "OK") {
                e.text().then(function(P) {
                    var K = P;
                    objLoading = document.getElementById("divLoading");
                    if (objLoading != null) {
                        objLoading.style.display = "none"
                    }
                    if (top.innerClose && top.divPopup) {
                        if (top.divPopup.innerHTML.search("loading.gif") >= 0) {
                            if (q) {
                                if (q.id != "divPopup") {
                                    top.innerClose()
                                }
                            } else {
                                top.innerClose()
                            }
                        }
                    }
                    if (top.divBlockSpace) {
                        var O = '<img src="' + imgcpath + 'icon/close-bg.png" title="Click to close block layer." alt="Click to close block layer." width="155" height="25" onclickx="unBlock();top.divBlockSpace.innerHTML=null;" style="position:absolute;left:' + top.divBlock.style.left + ";top:" + top.divBlock.style.top + ';">'
                    } else {
                        var O = ""
                    }
                    if ((K.search("rror Occurred While Processing Request</title>") >= 0) || (K.search("<title>500 - Internal server erro") >= 0)) {
                        var J = K;
                        var N = Math.floor(Math.random() * 1000000);
                        K = K.replace(/<[^>]*>/gi, "");
                        K = K.replace(/[\s]+/g, "");
                        var M = K.indexOf("<body");
                        if (M) {
                            K = K.substring(M, K.length - M)
                        }
                        if (bwtype != "Opera" && p.search("sys.sec.logerr") < 0) {
                            setCookie("CKSFERR", N + K.substr(0, 1500), null, "/");
                            SFFetchContent("?sfid=sys.sec.logerr&inum=" + N + "&surl=" + p + "&serr=" + encodeURI(K), q, true, null, "error", J);
                            if (typeof (sfalert) == "function") {
                                sfalert(syserrmsg)
                            } else {
                                alert(syserrmsg)
                            }
                            if (top.divBlockSpace) {
                                top.divBlockSpace.style.textAlign = "center";
                                top.divBlockSpace.style.verticalAlign = "middle";
                                top.divBlockSpace.innerHTML = O
                            }
                            K = ""
                        }
                    } else {
                        if (K.search('class="Error"') >= 0) {
                            var J = K;
                            var N = Math.floor(Math.random() * 1000000);
                            K = K.replace(/<[^>]*>/gi, "_");
                            K = K.replace(/[\s]+/g, "=");
                            var M = K.indexOf("<body");
                            if (M) {
                                K = K.substring(M, K.length - M)
                            }
                            if (bwtype != "Opera" && p.search("sys.sec.logerr") < 0) {
                                setCookie("CKSFERR", N + K.substr(0, 1500), null, "/");
                                getAJAXContent("?sfid=sys.sec.logerr&inum=" + N + "&surl=" + p + "&serr=" + encodeURI(K), q, true, null, "error", J);
                                K = "";
                                sfalert(syserrmsg);
                                if (top.divBlockSpace) {
                                    top.divBlockSpace.style.textAlign = "center";
                                    top.divBlockSpace.style.verticalAlign = "middle";
                                    top.divBlockSpace.innerHTML = O
                                }
                            }
                        }
                    }
                    if (q != null) {
                        var L = sethtml(q, K);
                        if (m == null) {
                            document.body.style.cursor = "default"
                        }
                        if (q.innerHTML != "" && m != false && q.id != "spAjax") {
                            if (L != "") {
                                q.style.display = ""
                            } else {
                                q.style.display = "none"
                            }
                        } else {
                            if (m != false) {
                                q.style.display = "none"
                            }
                        }
                        if (a != null) {
                            a(L, w)
                        }
                    } else {
                        if (a != null) {
                            a(K, w)
                        } else {
                            return K
                        }
                    }
                })
            } else {
                j = ["danger", e.errmsg];
                throw new Error("Unexpected Server response")
            }
        });
        if (m == null) {
            document.body.style.cursor = "wait"
        }
    }
}
function jsnow() {
    var a = new Date();
    return a.getTime()
}
function logResponse(e, h, d, l, j, n, m, a) {
    if (j == null) {
        j = false
    }
    var c = new Date();
    var b = c.getTime();
    var f = (b - l);
    var g = "";
    var k = "";
    if (!j && a) {
        n = 100 - f;
        m = a - n
    }
    g = n + f;
    k = b - m;
    getAJAXContent("?sfid=sys.sec.func.logresponse&laid=" + e + "&lbid=" + h + "&lcid=" + d + "&rsp=" + l + "&dntime=" + b + "&dnrate=" + f + "&udrate=" + g + "&ldtime=" + k, "spAjax", false)
}
;/* {ts '2025-03-05 07:45:39'} res.login:SF6_HRIS_SILOAM */
var libpath = "/scripts";
var isinit = 0;
var jsfid = "";
var tmidLogin = null;
var theform = null;
var flpwd = false;
var dtGap = 0;
function loadScript(b, e, d) {
    if (e == null) {
        e = "head"
    }
    var c = document.getElementsByTagName(e)[0];
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = b;
    a.onreadystatechange = d;
    a.onload = d;
    c.appendChild(a)
}
var cbinit = function() {
    if ((bwtype != "IE" && isinit == 0) || (bwtype == "IE" && isinit == 1)) {
        try {
            var a = (document.frmLogin ? 1 : 0);
            getAJAXContent("?sfid=sys.sec._initlogin&jsfid=" + jsfid + "&hfo=" + a, "spAjax", null, checkLoginForm)
        } catch (b) {
            if (confirm("Error Initiate Login Page\n\nDo you want to try to reload the page ?\n\nIf this error is persistent, try closing all browser and then try again")) {
                top.location.reload()
            } else {
                var c = new Date();
                top.location = "?acstype=0&sfid=sys.sec.acclogin&mdt=" + encodeURIComponent(c)
            }
        }
    }
    isinit = 1
};
var cbvoid = function() {};
function checkLoginForm() {
    var a = document.frmLogin;
    if (tmidLogin) {
        clearTimeout(tmidLogin)
    }
    if (a) {
        if (a.txtUserName) {
            if (a.txtUserName.disabled) {
                if (confirm("Error Initiate the Login Page\n\nDo you want to try to reload the page ?\n\nIf this error is persistent, try closing all browser and then try again")) {
                    location.reload()
                } else {
                    if (a.txtUserName.disabled) {
                        var b = new Date();
                        top.location = "?acstype=1&sfid=sys.sec.acclogin&mdt=" + encodeURIComponent(b)
                    }
                }
            }
        }
    }
}
function resetLogin() {
    var a = document.frmLogin;
    flpwd = true;
    if (a && a.hdnts && a.txtPassword) {
        if (a.txtPassword.value.length == 1) {
            var b = new Date();
            if (dtGap != 0) {
                b = b.add("ms", dtGap)
            }
            var c = new Date(a.hdnts.value);
            if (c < b || !isNaN(c) || c == "Invalid Date") {
                a.hdnts.value = tsformat(b)
            }
        }
    }
}
function resetPwd() {
    var a = document.frmLogin;
    if (a && a.txtPassword) {
        if (a.txtPassword.value != "") {
            a.txtPassword.value = ""
        }
    }
}
function loadLogin(b, a) {
    jsfid = a;
    tmidLogin = setTimeout("checkLoginForm()", 15000);
    loadScript("?rcid=js/secrypt,display", null, cbinit)
}
var jsfid = "";
var logurl = "";
var logplc = null;
var vFunc = null;
var ssoloading = false;
var msglogin = {
    invaliduser: "Please Enter Valid User Name",
    invalidpwd: "Please Enter Valid Password",
    explogin: "Expired Login",
    formreload: "You need to reload the Login Page",
    failedlogin: "Login Attempt Failed"
};
var redirURL = "";
var tmpRedir = "";
var isprsclear = true;
function switchLang(b, a, d, e) {
    if (d == null) {
        d = "/"
    }
    setCookie("LANG", b.toLowerCase(), null, d, null, e);
    var c = "?clang=" + getCookie("LANG") + (jsfid != "" ? "&sfid=" + jsfid : "");
    location = c
}
function checkLogin(r, m, n, l, p, t) {
    console.log(arguments);
    if (r.action.search("&ssosf6") >= 0) {
        var a = r;
        var h = {
            action: a.action,
            txtUserName: {
                value: ssotoken[2]
            },
            txtPassword: {
                value: "ssosf6"
            },
            hdnts: {
                value: a.hdnts.value
            }
        };
        h.txtAccount = {
            value: ssotoken[0]
        };
        if (a.chkRemember) {
            h.chkRemember = {
                checked: r.chkRemember.checked
            }
        }
        r = h
    }
    var j = false;
    if (m == null) {
        m = true
    }
    if (r.txtUserName.value == "") {
        alert(msglogin.invaliduser);
        r.txtUserName.focus()
    } else {
        if (r.txtPassword.value == "") {
            alert(msglogin.invalidpwd);
            r.txtPassword.focus()
        } else {
            var f = "";
            var c = "spAjax";
            var s = isValidLogin;
            if (r.txtAccount && m && r.txtAccount.value != "") {
                var f = "&c=" + r.txtAccount.value;
                c = "spAjax";
                s = null
            }
            j = true;
            if (l == null) {
                var g = Sha1.getHash(r.txtPassword.value, r.txtUserName.value);
                var d = Sha1.getHash(r.txtPassword.value, r.txtUserName.value, 0);
                try {
                    var b = Base64.encryptldap(r.txtPassword.value)
                } catch (q) {}
            } else {
                var g = l;
                var d = t;
                var b = p
            }
            f += "&b=" + urlencode(b);
            var k = new Date();
            r.txtPassword.value = k.toString();
            var o = r.action + "&q=" + g.toUpperCase() + "&hq=" + d.toUpperCase() + "&t=" + r.txtUserName.value + "&r=" + r.hdnts.value.toString() + f;
            if (r.chkRemember) {
                if (r.chkRemember.checked) {
                    o += "&m=true"
                }
            }
            if (r.action.search("&ssosf6") >= 0) {
                if (!ssoloading) {
                    innerPop("?sfid=sys.sec._initsso&act=loading");
                    ssoloading = true
                }
            } else {
                innerPop("")
            }
            logurl = o;
            logplc = c;
            vFunc = s;
            if (n === true) {
                tmpRedir = "ATTENTRY";
                o += "&prs=true"
            } else {
                if (n === false) {
                    tmpRedir = ""
                }
            }
            getAJAXContent(o, c, 1, s);
            var i = new Date(r.hdnts.value);
            if (i < k) {
                r.hdnts.value = tsformat(k)
            }
            return false
        }
    }
    return j
}
function cleanText(a) {
    var e = a.search("<");
    var c = a.split("").reverse().join("").search(">");
    if (c > 0) {
        c = a.length - c
    }
    var d = "";
    var b = false;
    if (e > 0) {
        d += a.slice(0, e);
        b = true
    }
    if (c > 0 && c < a.length) {
        d += a.slice(c, a.length);
        b = true
    }
    if (!b) {
        d = a
    }
    return d
}
function isValidLogin(a) {
    var b = document.frmLogin;
    a = trim(a.replace(/<BR>/gi, "\n"));
    if (a.length > 255) {
        a = cleanText(a)
    } else {
        a = trim(a.replace(/<[^>]*>/gi, ""))
    }
    if (a.substr(0, 3) == "Yes" || a == "") {
        if (tmpRedir == "ATTENTRY") {
            isprsclear = false;
            attEntryUrl = "?sfid=hrm.attendance.attentryform.attproc";
            if (a.length > 4 && a.substr(0, 3) === "Yes" && a.substr(3, 1) === "_") {
                clearPresent();
                location.reload()
            } else {
                getAJAXContent(attEntryUrl, "spAjax", 1, clearPresent)
            }
        } else {
            location = redirURL
        }
    } else {
        if (a.substr(0, 6) == "reload" && logurl != null) {
            nurl = logurl + "&resetSess=1&relogincustom=1";
            if (tmpRedir == "ATTENTRY") {
                nurl += "&prs=true"
            }
            getAJAXContent(nurl, logplc, 1, vFunc)
        } else {
            if (trim(a) == "TwoFactorAuth") {
                innerPop("?sfid=sys.sec._cekpin")
            } else {
                a = trim(a.replace(/\\n/gi, "\n"));
                if (a == msglogin.explogin) {
                    b.txtUserName.value = "";
                    b.txtPassword.value = "";
                    b.txtUserName.focus();
                    alert(a + "\n\n" + msglogin.formreload)
                } else {
                    if (a.substring(a.length - 1) == "?" && logurl != null) {
                        if (confirm(a)) {
                            getAJAXContent(logurl + "", logplc, 1, vFunc)
                        }
                    } else {
                        alert(msglogin.failedlogin + "\n\n" + a);
                        b.txtPassword.focus();
                        b.txtPassword.select()
                    }
                }
            }
        }
    }
}
function clearPresent() {
    if (!isprsclear) {
        getAJAXContent("?sfid=sys.sec.logout", null, 1)
    }
}
function switchScheme(e, c, d) {
    var a = ["def", "blue", "dark"];
    var b = "";
    if (e >= 1 && e <= a.length) {
        b = a[e - 1]
    }
    setCookie("SFCOLORSCHEME", b, null, c, null, d);
    location.reload()
}
function switchAppMode(f, d, e) {
    var b = ["MAIN", "DEVELOPMENT", "TESTING"];
    var a = "MAIN";
    if (f >= 1 && f <= b.length) {
        a = b[f - 1]
    }
    if (a != "MAIN") {
        setCookie("APCSMODE", a, null, d, null, e)
    } else {
        deleteCookie("APCSMODE", d)
    }
    var c = stripURL(window.location.search.substring(1), "appacsmode");
    if (c[1] == 1) {
        location = "?" + c[0]
    } else {
        location.reload()
    }
}
function switchLanguage() {
    if ($sf("divLang").style.display == "none") {
        $sf("divLang").style.display = ""
    } else {
        $sf("divLang").style.display = "none"
    }
}
function initLogin(c) {
    var d = $sf("tid_loginform");
    var k = $sf("p_loginform");
    if (k) {
        if (d) {
            d.appendChild(k)
        } else {
            for (var h = 0; h < k.childNodes.length; h++) {
                k.removeChild(k.childNodes[0])
            }
            k.innerHTML = "xXx";
            k.parentNode.removeChild(k)
        }
    }
    theform = document.frmLogin;
    if (theform) {
        theform.action = "?sfid=sys.sec.proclogin";
        theform.method = "post";
        theform.setAttribute("autocomplete", "off");
        theform.onsubmit = function() {
            return checkLogin(this, null, false, null, null, null)
        }
        ;
        if (theform.txtUserName) {
            theform.txtUserName.disabled = false;
            theform.txtUserName.setAttribute("autocomplete", "off");
            theform.txtUserName.onchange = resetPwd;
            theform.txtUserName.focus()
        }
        if (theform.txtAccount) {
            theform.txtAccount.disabled = false;
            theform.txtAccount.focus()
        }
        if (theform.txtPassword) {
            theform.txtPassword.disabled = false;
            theform.txtPassword.onkeypress = resetLogin
        }
        if (!theform.hdnts) {
            if (bwtype == "IE") {
                var m = document.createElement("<INPUT name='hdnts' type='Hidden'>");
                m.value = c;
                theform.appendChild(m)
            } else {
                var m = document.createElement("INPUT");
                m.name = "hdnts";
                m.type = "Hidden";
                m.value = c;
                theform.appendChild(m)
            }
        }
    }
    var j = $sf("tid_loginlink");
    var o = $sf("p_loginlink");
    if (o) {
        if (j) {
            j.appendChild(o);
            o.style.display = "block"
        } else {
            o.parentNode.removeChild(o)
        }
    }
    var a = $sf("tid_loginsaas");
    var g = $sf("p_loginsaas");
    if (g) {
        if (a) {
            a.appendChild(g);
            g.style.display = "";
            var r = $sf("txtUserName");
            var l = $sf("txtAccount")
        } else {
            g.parentNode.removeChild(g)
        }
    }
    var q = $sf("tid_selanguage");
    var e = $sf("p_langlist");
    if (e) {
        if (q) {
            q.appendChild(e);
            e.style.display = "block"
        } else {
            e.parentNode.removeChild(e)
        }
    }
    var n = $sf("tid_copyright");
    var b = $sf("p_copyright");
    if (b) {
        if (n) {
            n.appendChild(b);
            b.style.display = "block"
        } else {
            b.parentNode.removeChild(b)
        }
    }
    var p = $sf("tid_themelist");
    var f = $sf("p_themelist");
    if (f) {
        if (p) {
            p.appendChild(f)
        } else {
            f.parentNode.removeChild(f)
        }
    }
    if ($("#login-logo").css("background-image").search("/client/") == -1 && $sf("login-bg").style.backgroundImage.search("/client/") == -1) {
        $("#copyright_text").attr("style", "")
    } else {
        $sf("copyright_logo").style.display = "";
        $sf("copyright_text").style.textAlign = "left"
    }
}
;/* {ts '2025-03-05 07:45:39'} res.dragndrop:SF6_HRIS_SILOAM */
var dragElm = null;
shiftElm = null;
shLeft = null;
shRight = null;
vtemp = "";
_startX = null;
_startY = null;
_offsetX = 0;
_offsetY = 0;
_posX = 0;
function disableSelection(element, flag) {
    element.onselectstart = function() {
        return flag
    }
    ;
    if (flag) {
        element.unselectable = "off";
        element.style.MozUserSelect = "";
        element.style.cursor = ""
    } else {
        element.unselectable = "on";
        element.style.MozUserSelect = "none";
        element.style.cursor = "default"
    }
}
function InitDragDrop(e, cbdn, cbup) {
    document.onmousedown = function(e) {
        OnMouseDown(e, cbdn)
    }
    ;
    document.onmouseup = function(e) {
        OnMouseUp(e, cbup)
    }
}
function OnMouseDown(e, cb) {
    if (e == null)
        e = window.event;
    var target = e.target != null ? e.target : e.srcElement;
    if (target.lang != null)
        if (target.lang == "dragable") {
            dragElm = getObject(target);
            disableSelection(document.body, false);
            startDrag(e)
        } else if (target.lang == "resizable") {
            shiftElm = getObject(target);
            disableSelection(document.body, false);
            startShift(e)
        }
    if (cb)
        ;if (!evtcal)
        hideCalendar()
}
function OnMouseUp(e) {
    dragElm = null;
    disableSelection(document.body, true);
    document.onmousemove = null;
    if (shiftElm != null) {
        if (e == null)
            e = window.event;
        var target = e.target != null ? e.target : e.srcElement;
        var vid = "none";
        if (target.lang == "resizeTarget" && shLeft != null && shRight != null) {
            var objresize = getObject(target);
            vid = objresize.id;
            var shiftX = 0;
            if (objresize.id == shLeft.id)
                var shiftX = e.clientX - _startX;
            else if (objresize.id == shRight.id)
                var shiftX = e.clientX - _startX;
            if (shiftX != 0) {
                var nwidth = parseInt(shLeft.offsetWidth) + shiftX;
                if (nwidth < 50) {
                    nwidth = 50;
                    shiftX = nwidth - parseInt(shLeft.offsetWidth)
                }
            }
            if (shiftX != 0) {
                shLeft.style.width = parseInt(shLeft.offsetWidth) + shiftX + "px";
                shiftElm.style.left = parseInt(shiftElm.offsetLeft) + shiftX + "px";
                shRight.style.left = parseInt(shRight.offsetLeft) + shiftX + "px";
                var shnb = shRight.id.split("_");
                shnb = parseInt(shnb[shnb.length - 1]);
                var oheader = shRight.parentNode;
                var vshift = false;
                var isc = null;
                var mspan = 0;
                var temphbar = 0;
                for (var i = 0; i < oheader.childNodes.length; i++) {
                    var vheader = oheader.childNodes[i];
                    var chnb = vheader.id.split("_");
                    chnb = chnb[chnb.length - 1];
                    if (chnb == "hbar") {
                        chnb = pscroller - 1;
                        temphbar = 1
                    } else {
                        chnb = parseInt(chnb);
                        temphbar = 0
                    }
                    if (vshift) {
                        if (chnb >= shnb && vheader.lang != "scroller" && vheader.lang != "splitter" && !temphbar) {
                            vheader.style.left = parseInt(vheader.offsetLeft) + shiftX + "px";
                            if (vheader.id.substr(0, 14) == "data_" + areaid + "_") {
                                var scobj = $sf("s_" + areaid + "_" + chnb);
                                if (scobj != null && scobj.style.display != "none")
                                    scobj.style.left = parseInt(vheader.offsetLeft) + 7 + "px"
                            } else
                                ;
                        } else if (chnb == shnb - 1 && !temphbar) {
                            vheader.style.width = parseInt(vheader.offsetWidth) + shiftX + "px";
                            if (vheader.id.substr(0, 14) == "data_" + areaid + "_") {
                                var scobj = $sf("s_" + areaid + "_" + chnb);
                                var scobjspace = $sf("space_" + areaid + "_" + chnb);
                                if (scobj != null && scobj.style.display != "none") {
                                    scobj.style.width = Math.max(70, parseInt(scobjspace.offsetLeft) - parseInt(vheader.offsetLeft) + 3) + "px";
                                    scobj.style.left = parseInt(vheader.offsetLeft) + 7 + "px";
                                    scobj.childNodes[1].style.width = parseInt(scobj.offsetWidth) + "px";
                                    scobj.childNodes[1].childNodes[0].style.width = parseInt(scobj.offsetWidth) + "px"
                                }
                            }
                        } else if (oheader.id == "wnd_data" && vheader.id.substr(0, 14) == "data_" + areaid + "_" && !temphbar) {
                            var vheadertemp = $sf("data_" + areaid + "_" + (chnb - 1));
                            var scobjspace = $sf("space_" + areaid + "_" + (chnb - 1));
                            vheadertemp.style.width = parseInt(vheadertemp.offsetWidth) + shiftX + "px";
                            if (vheadertemp.id.substr(0, 14) == "data_" + areaid + "_") {
                                var scobj = $sf("s_" + areaid + "_" + (chnb - 1));
                                if (scobj != null && scobj.style.display != "none") {
                                    scobj.style.width = Math.max(70, parseInt(scobjspace.offsetLeft) - parseInt(vheadertemp.offsetLeft) + 3) + "px";
                                    scobj.style.left = parseInt(vheadertemp.offsetLeft) + 7 + "px";
                                    scobj.childNodes[1].style.width = parseInt(scobj.offsetWidth) + "px";
                                    scobj.childNodes[1].childNodes[0].style.width = parseInt(scobj.offsetWidth) + "px"
                                }
                            }
                        } else
                            ;if (isc == null)
                            if (vheader.lang == "scroller")
                                isc = chnb;
                            else if (vheader.lang != "splitter")
                                mspan = Math.max(mspan, parseInt(vheader.offsetLeft) + parseInt(vheader.offsetWidth))
                    }
                    if (vheader.id == shRight.id)
                        vshift = true
                }
                var hbar = $sf(areaid + "_hbar");
                if (hbar != null) {
                    var dhbar = hbar.childNodes[0];
                    if (dhbar != null)
                        dhbar.style.width = parseInt(dhbar.offsetWidth) + shiftX + "px"
                }
                reposScroller()
            }
        }
        shiftElm = null;
        if (shLeft != null) {
            shLeft.style.cursor = "";
            shLeft.childNodes[0].style.cursor = "";
            shLeft.lang = "";
            shLeft = null
        }
        if (shRight != null) {
            shRight.style.cursor = "";
            if (shRight.childNodes.length)
                shRight.childNodes[0].style.cursor = "";
            shRight.lang = vtemp;
            shRight = null
        }
        if (divsplitter != null)
            divsplitter.style.display = "none"
    }
}
var areaid = "ardata_";
function startDrag(e) {
    if (dragElm == null)
        return;
    document.onmousemove = OnMouseMove;
    _offsetX = document.body.scrollLeft;
    _offsetY = document.body.scrollTop;
    _startX = e.clientX;
    _startY = e.clientY
}
function startShift(e) {
    if (shiftElm == null)
        return;
    document.onmousemove = OnResizeCol;
    _offsetX = document.body.scrollLeft;
    _offsetY = document.body.scrollTop;
    var hbar = $sf(areaid + "_hbar");
    var hoffset = 0;
    if (hbar != null)
        if (hbar.style.display == "")
            hoffset = hbar.scrollLeft;
    _startX = e.clientX;
    _startY = e.clientY;
    _posX = _startX - 3 + hoffset;
    var nb = shiftElm.id.split("_");
    nb = parseInt(nb[nb.length - 1]);
    shLeft = $sf(areaid + "_" + nb);
    shRight = $sf(areaid + "_" + (nb + 1));
    if (shLeft != null && shRight != null) {
        shLeft.lang = "resizeTarget";
        shLeft.style.cursor = "e-resize";
        shLeft.childNodes[0].lang = "resizeTarget";
        shLeft.childNodes[0].style.cursor = "e-resize";
        vtemp = shRight.lang;
        shRight.lang = "resizeTarget";
        shRight.style.cursor = "e-resize";
        if (shRight.childNodes.length) {
            shRight.childNodes[0].lang = "resizeTarget";
            shRight.childNodes[0].style.cursor = "e-resize"
        }
        if (divsplitter != null) {
            var odata = $sf("data_" + areaid + "_" + (nb + 1));
            if (odata != null) {
                divsplitter.style.display = "";
                divsplitter.style.left = parseInt(shRight.offsetLeft) - 2 + "px";
                divsplitter.style.top = parseInt(shRight.offsetTop) + parseInt(shRight.offsetHeight) + "px";
                divsplitter.style.height = parseInt(shRight.parentNode.offsetHeight) - parseInt(shRight.offsetHeight) + "px"
            }
        }
    }
}
function OnMouseMove(e) {
    if (e == null)
        var e = window.event;
    if (dragElm != null) {
        dragElm.style.left = parseInt(dragElm.offsetLeft) + e.clientX - _startX + "px";
        dragElm.style.top = parseInt(dragElm.offsetTop) + e.clientY - _startY + "px";
        _startX = e.clientX;
        _startY = e.clientY
    }
}
function OnResizeCol(e) {
    if (shiftElm == null || divsplitter == null)
        return;
    if (e == null)
        e = window.event;
    var shiftX = e.clientX - _startX;
    divsplitter.style.left = _posX + shiftX - 3 + "px"
}
function getObject(obj, tag) {
    if (tag == null)
        tag = "DIV";
    var found = obj.tagName == tag;
    while (!found) {
        obj = obj.parentNode;
        if (obj == null)
            break;
        else
            found = obj.tagName == tag
    }
    if (found)
        return obj;
    else
        return null
}
var eftype = 1;
var tmr = 30;
function effectClose(id, dw, dh, cfunc) {
    var obj = $sf(id);
    var vwnd = obj.childNodes[0];
    if (obj.offsetWidth < 30)
        obj.style.display = "none";
    if (obj.offsetHeight < 30)
        obj.style.display = "none";
    if (obj.style.display == "") {
        if (eftype == 1 || eftype == 3 || eftype == 5 || eftype == 7) {
            obj.style.width = Math.max(0, parseInt(obj.offsetWidth) - dw) + "px";
            if (eftype != 5) {
                if (eftype != 7)
                    obj.style.left = parseInt(obj.offsetLeft) + dw / 2 + "px";
                vwnd.style.left = parseInt(vwnd.offsetLeft) - dw / 2 + "px"
            }
        }
        if (eftype == 1 || eftype == 2 || eftype == 4 || eftype == 6) {
            obj.style.height = Math.max(0, parseInt(obj.offsetHeight) - dh) + "px";
            if (eftype != 4) {
                if (eftype != 6)
                    obj.style.top = parseInt(obj.offsetTop) + dh / 2 + "px";
                vwnd.style.top = parseInt(vwnd.offsetTop) - dh / 2 + "px"
            }
        }
        setTimeout("effectClose('" + id + "'," + dw + "," + dh + "," + cfunc + ")", tmr)
    } else if (cfunc)
        cfunc()
}
var opencnt = 0;
function effectOpen(id, dw, dh, cnt) {
    opencnt++;
    var obj = $sf(id);
    if (obj == null)
        return;
    else
        var vwnd = obj.childNodes[0];
    if (opencnt > 1E3) {
        opencnt = 0;
        return
    }
    if (obj.offsetWidth < vwnd.offsetWidth || obj.offsetHeight < vwnd.offsetHeight) {
        if (obj.offsetWidth < vwnd.offsetWidth && (eftype == 1 || eftype == 3 || eftype == 5 || eftype == 7)) {
            var nwidth = Math.max(0, parseInt(obj.offsetWidth) + dw);
            obj.style.width = Math.max(0, parseInt(obj.offsetWidth) + dw) + "px";
            if (eftype != 5) {
                if (eftype != 7)
                    obj.style.left = parseInt(obj.offsetLeft) - dw / 2 + "px";
                vwnd.style.left = parseInt(vwnd.offsetLeft) + dw / 2 + "px"
            }
        }
        if (obj.offsetHeight < vwnd.offsetHeight && (eftype == 1 || eftype == 2 || eftype == 4 || eftype == 6)) {
            obj.style.height = Math.max(0, parseInt(obj.offsetHeight) + dh) + "px";
            if (eftype != 4) {
                if (eftype != 6)
                    obj.style.top = parseInt(obj.offsetTop) - dh / 2 + "px";
                vwnd.style.top = parseInt(vwnd.offsetTop) + dh / 2 + "px"
            }
        }
        setTimeout("effectOpen('" + id + "'," + dw + "," + dh + "," + (cnt + 1) + ")", tmr)
    } else {
        var gapw = parseInt(vwnd.offsetLeft);
        var gaph = parseInt(vwnd.offsetTop);
        obj.style.left = Math.max(0, parseInt(obj.offsetLeft) + gapw) + "px";
        obj.style.top = Math.max(0, parseInt(obj.offsetTop) + gaph) + "px";
        vwnd.style.left = 0;
        vwnd.style.top = 0;
        obj.style.width = parseInt(vwnd.offsetWidth) + "px";
        obj.style.height = parseInt(vwnd.offsetHeight) + "px";
        if (typeof isFinishedPop !== "undefined")
            isFinishedPop = true
    }
}
function centralView(id) {
    var ownd = $sf(id);
    ownd.style.left = parseInt(document.body.scrollLeft) + (parseInt(document.body.clientWidth) - parseInt(ownd.offsetWidth)) / 2 + "px";
    ownd.style.top = parseInt(document.body.scrollTop) + (parseInt(document.body.clientHeight) - parseInt(ownd.offsetHeight)) / 2 + "px"
}
function closeWindow(id, cfunc) {
    var ownd = $sf(id);
    var vwnd = ownd.childNodes[0];
    var dw = Math.ceil(parseInt(vwnd.offsetWidth) / 10);
    var dh = Math.ceil(parseInt(vwnd.offsetHeight) / 10);
    effectClose(id, dw, dh, cfunc)
}
function openWindow(id) {
    var ownd = $sf(id);
    ownd.style.display = "";
    var vwnd = ownd.childNodes[0];
    var dw = Math.ceil(parseInt(vwnd.offsetWidth) / 10);
    var dh = Math.ceil(parseInt(vwnd.offsetHeight) / 10);
    effectOpen(id, dw, dh, 1)
}
var ae_cb = null;
function ae$(a) {
    return document.getElementById(a)
}
function ae_prompt(cb, q, a, t) {
    ae_cb = cb;
    if (t != null)
        ae$("aep_t").innerHTML = t;
    ae$("aep_prompt").innerHTML = q;
    ae$("aep_text").value = a;
    ae$("aep_ovrl").style.display = ae$("aep_ww").style.display = "";
    ae$("aep_text").focus();
    ae$("aep_text").select()
}
function ae_clk(m) {
    ae$("aep_ovrl").style.display = ae$("aep_ww").style.display = "none";
    if (ae_cb != null)
        if (!m)
            ae_cb(null);
        else
            ae_cb(ae$("aep_text").value)
}
;/* {ts '2025-03-05 07:45:39'} res.lib/secrypt:SF6_HRIS_SILOAM */
var Sha1 = {};
Sha1.hash = function(h, z, H) {
    z = (typeof z == "undefined") ? true : z;
    if (H == null) {
        H = 2
    }
    if (z) {
        h = Utf8.encode(h)
    }
    var n = [1518500249, 1859775393, 2400959708, 3395469782];
    h += String.fromCharCode(128);
    var x = h.length / 4 + 2;
    var k = Math.ceil(x / 16);
    var m = new Array(k);
    for (var A = 0; A < k; A++) {
        m[A] = new Array(16);
        for (var y = 0; y < 16; y++) {
            m[A][y] = (h.charCodeAt(A * 64 + y * 4) << 24) | (h.charCodeAt(A * 64 + y * 4 + 1) << 16) | (h.charCodeAt(A * 64 + y * 4 + 2) << 8) | (h.charCodeAt(A * 64 + y * 4 + 3))
        }
    }
    m[k - 1][14] = ((h.length - 1) * 8) / Math.pow(2, 32);
    m[k - 1][14] = Math.floor(m[k - 1][14]);
    m[k - 1][15] = ((h.length - 1) * 8) & 4294967295;
    var u = 1732584193;
    var r = 4023233417;
    var q = 2562383102;
    var p = 271733878;
    var o = 3285377520;
    var f = new Array(80);
    var G, F, E, C, B;
    for (var A = 0; A < k; A++) {
        for (var v = 0; v < 16; v++) {
            f[v] = m[A][v]
        }
        for (var v = 16; v < 80; v++) {
            f[v] = Sha1.ROTL(f[v - 3] ^ f[v - 8] ^ f[v - 14] ^ f[v - 16], 1)
        }
        G = u;
        F = r;
        E = q;
        C = p;
        B = o;
        for (var v = 0; v < 80; v++) {
            var w = Math.floor(v / 20);
            var g = (Sha1.ROTL(G, 5) + Sha1.f(w, F, E, C) + B + n[w] + f[v]) & 4294967295;
            B = C;
            C = E;
            E = Sha1.ROTL(F, 30);
            F = G;
            G = g
        }
        u = (u + G) & 4294967295;
        r = (r + F) & 4294967295;
        q = (q + E) & 4294967295;
        p = (p + C) & 4294967295;
        o = (o + B) & 4294967295
    }
    var D = Sha1.toHexStr(u) + Sha1.toHexStr(r) + Sha1.toHexStr(q) + Sha1.toHexStr(p) + Sha1.toHexStr(o);
    if (H == 1) {
        D = D.toLowerCase()
    } else {
        if (H == 2) {
            D = D.toUpperCase()
        }
    }
    return D
}
;
Sha1.f = function(b, a, d, c) {
    switch (b) {
    case 0:
        return (a & d) ^ (~a & c);
    case 1:
        return a ^ d ^ c;
    case 2:
        return (a & d) ^ (a & c) ^ (d & c);
    case 3:
        return a ^ d ^ c
    }
}
;
Sha1.ROTL = function(a, b) {
    return (a << b) | (a >>> (32 - b))
}
;
Sha1.toHexStr = function(d) {
    var c = "", a;
    for (var b = 7; b >= 0; b--) {
        a = (d >>> (b * 4)) & 15;
        c += a.toString(16)
    }
    return c
}
;
Sha1.getHash = function(f, c, d) {
    if (d == null) {
        d = 7
    } else {
        if (d == 0) {
            var e = Sha1.hash(f, true);
            var a = [e.substr(0, 4), e.substr(4, e.length - 8), e.substr(e.length - 4, 4)];
            e = a[0].split("").reverse().join("") + a[1].split("").reverse().join("") + a[2].split("").reverse().join("");
            return e
        }
    }
    if (c == null) {
        c = f
    } else {
        if (c.search(":") > 0) {
            c = c.split(":")[0]
        }
    }
    c = "5unf15h" + c + "D4740N";
    c = c.split("").reverse().join("");
    var e = Sha1.hash(f + c, true);
    for (var b = 1; b < d; b++) {
        e = Sha1.hash(e + c, true)
    }
    return e
}
;
var Utf8 = {};
Utf8.encode = function(a) {
    var b = a.replace(/[\u0080-\u07ff]/g, function(e) {
        var d = e.charCodeAt(0);
        return String.fromCharCode(192 | d >> 6, 128 | d & 63)
    });
    b = b.replace(/[\u0800-\uffff]/g, function(e) {
        var d = e.charCodeAt(0);
        return String.fromCharCode(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63)
    });
    return b
}
;
Utf8.decode = function(b) {
    var a = b.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(e) {
        var d = ((e.charCodeAt(0) & 15) << 12) | ((e.charCodeAt(1) & 63) << 6) | (e.charCodeAt(2) & 63);
        return String.fromCharCode(d)
    });
    a = a.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(e) {
        var d = (e.charCodeAt(0) & 31) << 6 | e.charCodeAt(1) & 63;
        return String.fromCharCode(d)
    });
    return a
}
;
/* {ts '2025-03-05 07:45:39'} res.lib/base64:SF6_HRIS_SILOAM */
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = Base64._utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = (chr1 & 3) << 4 | chr2 >> 4;
            enc3 = (chr2 & 15) << 2 | chr3 >> 6;
            enc4 = chr3 & 63;
            if (isNaN(chr2))
                enc3 = enc4 = 64;
            else if (isNaN(chr3))
                enc4 = 64;
            output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4)
        }
        return output
    },
    decode: function(input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = enc1 << 2 | enc2 >> 4;
            chr2 = (enc2 & 15) << 4 | enc3 >> 2;
            chr3 = (enc3 & 3) << 6 | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64)
                output = output + String.fromCharCode(chr2);
            if (enc4 != 64)
                output = output + String.fromCharCode(chr3)
        }
        output = Base64._utf8_decode(output);
        return output
    },
    _utf8_encode: function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128)
                utftext += String.fromCharCode(c);
            else if (c > 127 && c < 2048) {
                utftext += String.fromCharCode(c >> 6 | 192);
                utftext += String.fromCharCode(c & 63 | 128)
            } else {
                utftext += String.fromCharCode(c >> 12 | 224);
                utftext += String.fromCharCode(c >> 6 & 63 | 128);
                utftext += String.fromCharCode(c & 63 | 128)
            }
        }
        return utftext
    },
    _utf8_decode: function(utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++
            } else if (c > 191 && c < 224) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode((c & 31) << 6 | c2 & 63);
                i += 2
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                i += 3
            }
        }
        return string
    },
    encryptldap: function(pass) {
        var li_panjang, li_char;
        var li_encrypt = new Array;
        var ls_encrypt = "";
        var lc_char = new Array;
        var lc_encrypt = new Array;
        var ls_temp = "";
        li_panjang = pass.length;
        for (li_char = 0; li_char < li_panjang; li_char++) {
            lc_char[li_char] = pass.substr(li_char, 1);
            li_encrypt[li_char] = lc_char[li_char].charCodeAt() + 128;
            lc_encrypt[li_char] = String.fromCharCode(li_encrypt[li_char])
        }
        for (li_char = 0; li_char < li_panjang; li_char++)
            ls_encrypt = ls_encrypt + lc_encrypt[li_char];
        ls_temp = Base64.encode(ls_encrypt);
        return ls_temp
    },
    decryptldap: function(passtemp) {
        var li_panjang, li_char;
        var li_encrypt = new Array;
        var ls_encrypt = "";
        var lc_char = new Array;
        var lc_encrypt = new Array;
        var pass = Base64.decode(passtemp);
        li_panjang = pass.length;
        for (li_char = 0; li_char < li_panjang; li_char++) {
            lc_char[li_char] = pass.substr(li_char, 1);
            li_encrypt[li_char] = lc_char[li_char].charCodeAt() - 128;
            lc_encrypt[li_char] = String.fromCharCode(li_encrypt[li_char])
        }
        for (li_char = 0; li_char < li_panjang; li_char++)
            ls_encrypt = ls_encrypt + lc_encrypt[li_char];
        return ls_encrypt
    }
};
/* {ts '2025-03-05 07:45:39'} res.jquery:SF6_HRIS_SILOAM */
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
(function(a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    function cv(a) {
        if (!ck[a]) {
            var b = c.body
              , d = f("<" + a + ">").appendTo(b)
              , e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                cl || (cl = c.createElement("iframe"),
                cl.frameBorder = cl.width = cl.height = 0),
                b.appendChild(cl);
                if (!cm || !cl.createElement)
                    cm = (cl.contentWindow || cl.contentDocument).document,
                    cm.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"),
                    cm.close();
                d = cm.createElement(a),
                cm.body.appendChild(d),
                e = f.css(d, "display"),
                b.removeChild(cl)
            }
            ck[a] = e
        }
        return ck[a]
    }
    function cu(a, b) {
        var c = {};
        f.each(cq.concat.apply([], cq.slice(0, b)), function() {
            c[this] = a
        });
        return c
    }
    function ct() {
        cr = b
    }
    function cs() {
        setTimeout(ct, 0);
        return cr = f.now()
    }
    function cj() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function ci() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function cc(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)
                for (h in a.converters)
                    typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k,
            k = d[g];
            if (k === "*")
                k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k,
                n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o],
                                o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }
                !n && !p && f.error("No conversion from " + m.replace(" ", " to ")),
                n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }
    function cb(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g)
            i in d && (c[g[i]] = d[i]);
        while (f[0] === "*")
            f.shift(),
            h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
        if (f[0]in d)
            j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }
    function ca(a, b, c, d) {
        if (f.isArray(b))
            f.each(b, function(b, e) {
                c || bE.test(a) ? d(a, e) : ca(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
            });
        else if (!c && b != null && typeof b == "object")
            for (var e in b)
                ca(a + "[" + e + "]", b[e], c, d);
        else
            d(a, b)
    }
    function b_(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c)
            c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }
    function b$(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
        g = g || {},
        g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === bT, l;
        for (; i < j && (k || !l); i++)
            l = h[i](c, d, e),
            typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l),
            l = b$(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = b$(a, c, d, e, "*", g));
        return l
    }
    function bZ(a) {
        return function(b, c) {
            typeof b != "string" && (c = b,
            b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bP), e = 0, g = d.length, h, i, j;
                for (; e < g; e++)
                    h = d[e],
                    j = /^\+/.test(h),
                    j && (h = h.substr(1) || "*"),
                    i = a[h] = a[h] || [],
                    i[j ? "unshift" : "push"](c)
            }
        }
    }
    function bC(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight
          , e = b === "width" ? bx : by
          , g = 0
          , h = e.length;
        if (d > 0) {
            if (c !== "border")
                for (; g < h; g++)
                    c || (d -= parseFloat(f.css(a, "padding" + e[g])) || 0),
                    c === "margin" ? d += parseFloat(f.css(a, c + e[g])) || 0 : d -= parseFloat(f.css(a, "border" + e[g] + "Width")) || 0;
            return d + "px"
        }
        d = bz(a, b, b);
        if (d < 0 || d == null)
            d = a.style[b] || 0;
        d = parseFloat(d) || 0;
        if (c)
            for (; g < h; g++)
                d += parseFloat(f.css(a, "padding" + e[g])) || 0,
                c !== "padding" && (d += parseFloat(f.css(a, "border" + e[g] + "Width")) || 0),
                c === "margin" && (d += parseFloat(f.css(a, c + e[g])) || 0);
        return d + "px"
    }
    function bp(a, b) {
        b.src ? f.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")),
        b.parentNode && b.parentNode.removeChild(b)
    }
    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b),
        b.innerHTML = a.outerHTML;
        return b.firstChild
    }
    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }
    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio")
            a.defaultChecked = a.checked
    }
    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function bk(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(),
            b.mergeAttributes && b.mergeAttributes(a),
            c = b.nodeName.toLowerCase();
            if (c === "object")
                b.outerHTML = a.outerHTML;
            else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                if (c === "option")
                    b.selected = a.defaultSelected;
                else if (c === "input" || c === "textarea")
                    b.defaultValue = a.defaultValue
            } else
                a.checked && (b.defaultChecked = b.checked = a.checked),
                b.value !== a.value && (b.value = a.value);
            b.removeAttribute(f.expando)
        }
    }
    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
            if (i) {
                delete h.handle,
                h.events = {};
                for (c in i)
                    for (d = 0,
                    e = i[c].length; d < e; d++)
                        f.event.add(b, c + (i[c][d].namespace ? "." : "") + i[c][d].namespace, i[c][d], i[c][d].data)
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }
    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function U(a) {
        var b = V.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b))
            return f.grep(a, function(a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            });
        if (b.nodeType)
            return f.grep(a, function(a, d) {
                return a === b === c
            });
        if (typeof b == "string") {
            var d = f.grep(a, function(a) {
                return a.nodeType === 1
            });
            if (O.test(b))
                return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function(a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }
    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function K() {
        return !0
    }
    function J() {
        return !1
    }
    function n(a, b, c) {
        var d = b + "defer"
          , e = b + "queue"
          , g = b + "mark"
          , h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0),
            h.fire())
        }, 0)
    }
    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b]))
                continue;
            if (b !== "toJSON")
                return !1
        }
        return !0
    }
    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? parseFloat(d) : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {}
                f.data(a, c, d)
            } else
                d = b
        }
        return d
    }
    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0,
        d = a.length; c < d; c++)
            b[a[c]] = !0;
        return b
    }
    var c = a.document
      , d = a.navigator
      , e = a.location
      , f = function() {
        function J() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }
        }
        var e = function(a, b) {
            return new e.fn.init(a,b,h)
        }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g, r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function(a, b) {
            return (b + "").toUpperCase()
        }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {};
        e.fn = e.prototype = {
            constructor: e,
            init: function(a, d, f) {
                var g, h, j, k;
                if (!a)
                    return this;
                if (a.nodeType) {
                    this.context = this[0] = a,
                    this.length = 1;
                    return this
                }
                if (a === "body" && !d && c.body) {
                    this.context = c,
                    this[0] = c.body,
                    this.selector = a,
                    this.length = 1;
                    return this
                }
                if (typeof a == "string") {
                    a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                    if (g && (g[1] || !d)) {
                        if (g[1]) {
                            d = d instanceof e ? d[0] : d,
                            k = d ? d.ownerDocument || d : c,
                            j = m.exec(a),
                            j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])],
                            e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]),
                            a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                            return e.merge(this, a)
                        }
                        h = c.getElementById(g[2]);
                        if (h && h.parentNode) {
                            if (h.id !== g[2])
                                return f.find(a);
                            this.length = 1,
                            this[0] = h
                        }
                        this.context = c,
                        this.selector = a;
                        return this
                    }
                    return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                }
                if (e.isFunction(a))
                    return f.ready(a);
                a.selector !== b && (this.selector = a.selector,
                this.context = a.context);
                return e.makeArray(a, this)
            },
            selector: "",
            jquery: "3.6.0",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return F.call(this, 0)
            },
            get: function(a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            },
            pushStack: function(a, b, c) {
                var d = this.constructor();
                e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
                d.prevObject = this,
                d.context = this.context,
                b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                return d
            },
            each: function(a, b) {
                return e.each(this, a, b)
            },
            ready: function(a) {
                e.bindReady(),
                A.add(a);
                return this
            },
            eq: function(a) {
                a = +a;
                return a === -1 ? this.slice(a) : this.slice(a, a + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
            },
            map: function(a) {
                return this.pushStack(e.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: E,
            sort: [].sort,
            splice: [].splice
        },
        e.fn.init.prototype = e.fn,
        e.extend = e.fn.extend = function() {
            var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
            typeof i == "boolean" && (l = i,
            i = arguments[1] || {},
            j = 2),
            typeof i != "object" && !e.isFunction(i) && (i = {}),
            k === j && (i = this,
            --j);
            for (; j < k; j++)
                if ((a = arguments[j]) != null)
                    for (c in a) {
                        d = i[c],
                        f = a[c];
                        if (i === f)
                            continue;
                        l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1,
                        h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {},
                        i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                    }
            return i
        }
        ,
        e.extend({
            noConflict: function(b) {
                a.$ === e && (a.$ = g),
                b && a.jQuery === e && (a.jQuery = f);
                return e
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? e.readyWait++ : e.ready(!0)
            },
            ready: function(a) {
                if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                    if (!c.body)
                        return setTimeout(e.ready, 1);
                    e.isReady = !0;
                    if (a !== !0 && --e.readyWait > 0)
                        return;
                    A.fireWith(c, [e]),
                    e.fn.trigger && e(c).trigger("ready").off("ready")
                }
            },
            bindReady: function() {
                if (!A) {
                    A = e.Callbacks("once memory");
                    if (c.readyState === "complete")
                        return setTimeout(e.ready, 1);
                    if (c.addEventListener)
                        c.addEventListener("DOMContentLoaded", B, !1),
                        a.addEventListener("load", e.ready, !1);
                    else if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", B),
                        a.attachEvent("onload", e.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null
                        } catch (d) {}
                        c.documentElement.doScroll && b && J()
                    }
                }
            },
            isFunction: function(a) {
                return e.type(a) === "function"
            },
            isArray: Array.isArray || function(a) {
                return e.type(a) === "array"
            }
            ,
            isWindow: function(a) {
                return a && typeof a == "object" && "setInterval"in a
            },
            isNumeric: function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            type: function(a) {
                return a == null ? String(a) : I[C.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a))
                    return !1;
                try {
                    if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (c) {
                    return !1
                }
                var d;
                for (d in a)
                    ;
                return d === b || D.call(a, d)
            },
            isEmptyObject: function(a) {
                for (var b in a)
                    return !1;
                return !0
            },
            error: function(a) {
                throw new Error(a)
            },
            parseJSON: function(b) {
                if (typeof b != "string" || !b)
                    return null;
                b = e.trim(b);
                if (a.JSON && a.JSON.parse)
                    return a.JSON.parse(b);
                if (n.test(b.replace(o, "@").replace(p, "]").replace(q, "")))
                    return (new Function("return " + b))();
                e.error("Invalid JSON: " + b)
            },
            parseXML: function(c) {
                var d, f;
                try {
                    a.DOMParser ? (f = new DOMParser,
                    d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"),
                    d.async = "false",
                    d.loadXML(c))
                } catch (g) {
                    d = b
                }
                (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                return d
            },
            noop: function() {},
            globalEval: function(b) {
                b && j.test(b) && (a.execScript || function(b) {
                    a.eval.call(a, b)
                }
                )(b)
            },
            camelCase: function(a) {
                return a.replace(w, "ms-").replace(v, x)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },
            each: function(a, c, d) {
                var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
                if (d) {
                    if (i) {
                        for (f in a)
                            if (c.apply(a[f], d) === !1)
                                break
                    } else
                        for (; g < h; )
                            if (c.apply(a[g++], d) === !1)
                                break
                } else if (i) {
                    for (f in a)
                        if (c.call(a[f], f, a[f]) === !1)
                            break
                } else
                    for (; g < h; )
                        if (c.call(a[g], g, a[g++]) === !1)
                            break;
                return a
            },
            trim: G ? function(a) {
                return a == null ? "" : G.call(a)
            }
            : function(a) {
                return a == null ? "" : (a + "").replace(k, "").replace(l, "")
            }
            ,
            makeArray: function(a, b) {
                var c = b || [];
                if (a != null) {
                    var d = e.type(a);
                    a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                }
                return c
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (H)
                        return H.call(b, a, c);
                    d = b.length,
                    c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                    for (; c < d; c++)
                        if (c in b && b[c] === a)
                            return c
                }
                return -1
            },
            merge: function(a, c) {
                var d = a.length
                  , e = 0;
                if (typeof c.length == "number")
                    for (var f = c.length; e < f; e++)
                        a[d++] = c[e];
                else
                    while (c[e] !== b)
                        a[d++] = c[e++];
                a.length = d;
                return a
            },
            grep: function(a, b, c) {
                var d = [], e;
                c = !!c;
                for (var f = 0, g = a.length; f < g; f++)
                    e = !!b(a[f], f),
                    c !== e && d.push(a[f]);
                return d
            },
            map: function(a, c, d) {
                var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                if (k)
                    for (; i < j; i++)
                        f = c(a[i], i, d),
                        f != null && (h[h.length] = f);
                else
                    for (g in a)
                        f = c(a[g], g, d),
                        f != null && (h[h.length] = f);
                return h.concat.apply([], h)
            },
            guid: 1,
            proxy: function(a, c) {
                if (typeof c == "string") {
                    var d = a[c];
                    c = a,
                    a = d
                }
                if (!e.isFunction(a))
                    return b;
                var f = F.call(arguments, 2)
                  , g = function() {
                    return a.apply(c, f.concat(F.call(arguments)))
                };
                g.guid = a.guid = a.guid || g.guid || e.guid++;
                return g
            },
            access: function(a, c, d, f, g, h) {
                var i = a.length;
                if (typeof c == "object") {
                    for (var j in c)
                        e.access(a, j, c[j], f, g, d);
                    return a
                }
                if (d !== b) {
                    f = !h && f && e.isFunction(d);
                    for (var k = 0; k < i; k++)
                        g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                    return a
                }
                return i ? g(a[0], c) : b
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(a) {
                a = a.toLowerCase();
                var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            },
            sub: function() {
                function a(b, c) {
                    return new a.fn.init(b,c)
                }
                e.extend(!0, a, this),
                a.superclass = this,
                a.fn = a.prototype = this(),
                a.fn.constructor = a,
                a.sub = this.sub,
                a.fn.init = function(d, f) {
                    f && f instanceof e && !(f instanceof a) && (f = a(f));
                    return e.fn.init.call(this, d, f, b)
                }
                ,
                a.fn.init.prototype = a.fn;
                var b = a(c);
                return a
            },
            browser: {}
        }),
        e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
            I["[object " + b + "]"] = b.toLowerCase()
        }),
        z = e.uaMatch(y),
        z.browser && (e.browser[z.browser] = !0,
        e.browser.version = z.version),
        e.browser.webkit && (e.browser.safari = !0),
        j.test(" ") && (k = /^[\s\xA0]+/,
        l = /[\s\xA0]+$/),
        h = e(c),
        c.addEventListener ? B = function() {
            c.removeEventListener("DOMContentLoaded", B, !1),
            e.ready()
        }
        : c.attachEvent && (B = function() {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", B),
            e.ready())
        }
        );
        return e
    }()
      , g = {};
    f.Callbacks = function(a) {
        a = a ? g[a] || h(a) : {};
        var c = [], d = [], e, i, j, k, l, m = function(b) {
            var d, e, g, h, i;
            for (d = 0,
            e = b.length; d < e; d++)
                g = b[d],
                h = f.type(g),
                h === "array" ? m(g) : h === "function" && (!a.unique || !o.has(g)) && c.push(g)
        }, n = function(b, f) {
            f = f || [],
            e = !a.memory || [b, f],
            i = !0,
            l = j || 0,
            j = 0,
            k = c.length;
            for (; c && l < k; l++)
                if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
                    e = !0;
                    break
                }
            i = !1,
            c && (a.once ? e === !0 ? o.disable() : c = [] : d && d.length && (e = d.shift(),
            o.fireWith(e[0], e[1])))
        }, o = {
            add: function() {
                if (c) {
                    var a = c.length;
                    m(arguments),
                    i ? k = c.length : e && e !== !0 && (j = a,
                    n(e[0], e[1]))
                }
                return this
            },
            remove: function() {
                if (c) {
                    var b = arguments
                      , d = 0
                      , e = b.length;
                    for (; d < e; d++)
                        for (var f = 0; f < c.length; f++)
                            if (b[d] === c[f]) {
                                i && f <= k && (k--,
                                f <= l && l--),
                                c.splice(f--, 1);
                                if (a.unique)
                                    break
                            }
                }
                return this
            },
            has: function(a) {
                if (c) {
                    var b = 0
                      , d = c.length;
                    for (; b < d; b++)
                        if (a === c[b])
                            return !0
                }
                return !1
            },
            empty: function() {
                c = [];
                return this
            },
            disable: function() {
                c = d = e = b;
                return this
            },
            disabled: function() {
                return !c
            },
            lock: function() {
                d = b,
                (!e || e === !0) && o.disable();
                return this
            },
            locked: function() {
                return !d
            },
            fireWith: function(b, c) {
                d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c));
                return this
            },
            fire: function() {
                o.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !!e
            }
        };
        return o
    }
    ;
    var i = [].slice;
    f.extend({
        Deferred: function(a) {
            var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"), e = "pending", g = {
                resolve: b,
                reject: c,
                notify: d
            }, h = {
                done: b.add,
                fail: c.add,
                progress: d.add,
                state: function() {
                    return e
                },
                isResolved: b.fired,
                isRejected: c.fired,
                then: function(a, b, c) {
                    i.done(a).fail(b).progress(c);
                    return this
                },
                always: function() {
                    i.done.apply(i, arguments).fail.apply(i, arguments);
                    return this
                },
                pipe: function(a, b, c) {
                    return f.Deferred(function(d) {
                        f.each({
                            done: [a, "resolve"],
                            fail: [b, "reject"],
                            progress: [c, "notify"]
                        }, function(a, b) {
                            var c = b[0], e = b[1], g;
                            f.isFunction(c) ? i[a](function() {
                                g = c.apply(this, arguments),
                                g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                            }) : i[a](d[e])
                        })
                    }).promise()
                },
                promise: function(a) {
                    if (a == null)
                        a = h;
                    else
                        for (var b in h)
                            a[b] = h[b];
                    return a
                }
            }, i = h.promise({}), j;
            for (j in g)
                i[j] = g[j].fire,
                i[j + "With"] = g[j].fireWith;
            i.done(function() {
                e = "resolved"
            }, c.disable, d.lock).fail(function() {
                e = "rejected"
            }, b.disable, d.lock),
            a && a.call(i, i);
            return i
        },
        when: function(a) {
            function m(a) {
                return function(b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b,
                    j.notifyWith(k, e)
                }
            }
            function l(a) {
                return function(c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c,
                    --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0)
              , c = 0
              , d = b.length
              , e = Array(d)
              , g = d
              , h = d
              , j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred()
              , k = j.promise();
            if (d > 1) {
                for (; c < d; c++)
                    b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else
                j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }),
    f.support = function() {
        var b, d, e, g, h, i, j, k, l, m, n, o, p, q = c.createElement("div"), r = c.documentElement;
        q.setAttribute("className", "t"),
        q.innerHTML = " <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
        d = q.getElementsByTagName("*"),
        e = q.getElementsByTagName("a")[0];
        if (!d || !d.length || !e)
            return {};
        g = c.createElement("select"),
        h = g.appendChild(c.createElement("option")),
        i = q.getElementsByTagName("input")[0],
        b = {
            leadingWhitespace: q.firstChild.nodeType === 3,
            tbody: !q.getElementsByTagName("tbody").length,
            htmlSerialize: !!q.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: q.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        },
        i.checked = !0,
        b.noCloneChecked = i.cloneNode(!0).checked,
        g.disabled = !0,
        b.optDisabled = !h.disabled;
        try {
            delete q.test
        } catch (s) {
            b.deleteExpando = !1
        }
        !q.addEventListener && q.attachEvent && q.fireEvent && (q.attachEvent("onclick", function() {
            b.noCloneEvent = !1
        }),
        q.cloneNode(!0).fireEvent("onclick")),
        i = c.createElement("input"),
        i.value = "t",
        i.setAttribute("type", "radio"),
        b.radioValue = i.value === "t",
        i.setAttribute("checked", "checked"),
        q.appendChild(i),
        k = c.createDocumentFragment(),
        k.appendChild(q.lastChild),
        b.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.appendChecked = i.checked,
        k.removeChild(i),
        k.appendChild(q),
        q.innerHTML = "",
        a.getComputedStyle && (j = c.createElement("div"),
        j.style.width = "0",
        j.style.marginRight = "0",
        q.style.width = "2px",
        q.appendChild(j),
        b.reliableMarginRight = (parseInt((a.getComputedStyle(j, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0);
        if (q.attachEvent)
            for (o in {
                submit: 1,
                change: 1,
                focusin: 1
            })
                n = "on" + o,
                p = n in q,
                p || (q.setAttribute(n, "return;"),
                p = typeof q[n] == "function"),
                b[o + "Bubbles"] = p;
        k.removeChild(q),
        k = g = h = j = q = i = null,
        f(function() {
            var a, d, e, g, h, i, j, k, m, n, o, r = c.getElementsByTagName("body")[0];
            !r || (j = 1,
            k = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",
            m = "visibility:hidden;border:0;",
            n = "style='" + k + "border:5px solid #000;padding:0;'",
            o = "<div " + n + "><div></div></div>" + "<table " + n + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>",
            a = c.createElement("div"),
            a.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + j + "px",
            r.insertBefore(a, r.firstChild),
            q = c.createElement("div"),
            a.appendChild(q),
            q.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",
            l = q.getElementsByTagName("td"),
            p = l[0].offsetHeight === 0,
            l[0].style.display = "",
            l[1].style.display = "none",
            b.reliableHiddenOffsets = p && l[0].offsetHeight === 0,
            q.innerHTML = "",
            q.style.width = q.style.paddingLeft = "1px",
            f.boxModel = b.boxModel = q.offsetWidth === 2,
            typeof q.style.zoom != "undefined" && (q.style.display = "inline",
            q.style.zoom = 1,
            b.inlineBlockNeedsLayout = q.offsetWidth === 2,
            q.style.display = "",
            q.innerHTML = "<div style='width:4px;'></div>",
            b.shrinkWrapBlocks = q.offsetWidth !== 2),
            q.style.cssText = k + m,
            q.innerHTML = o,
            d = q.firstChild,
            e = d.firstChild,
            h = d.nextSibling.firstChild.firstChild,
            i = {
                doesNotAddBorder: e.offsetTop !== 5,
                doesAddBorderForTableAndCells: h.offsetTop === 5
            },
            e.style.position = "fixed",
            e.style.top = "20px",
            i.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15,
            e.style.position = e.style.top = "",
            d.style.overflow = "hidden",
            d.style.position = "relative",
            i.subtractsBorderForOverflowNotVisible = e.offsetTop === -5,
            i.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j,
            r.removeChild(a),
            q = a = null,
            f.extend(b, i))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/
      , k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function(a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a, n = l ? a[j] : a[j] && j, o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b)
                    return;
                n || (l ? a[j] = n = ++f.uuid : n = j),
                m[n] || (m[n] = {},
                l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function")
                    e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n],
                e || (h.data || (h.data = {}),
                h = h.data),
                d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c])
                    return g.events;
                k ? (i = h[c],
                i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function(a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h;
                if (!j[k])
                    return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b),
                        b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0,
                        g = b.length; e < g; e++)
                            delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d))
                            return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k]))
                        return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null,
                i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function(a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b)
                    return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }),
    f.fn.extend({
        data: function(a, c) {
            var d, e, g, h = null;
            if (typeof a == "undefined") {
                if (this.length) {
                    h = f.data(this[0]);
                    if (this[0].nodeType === 1 && !f._data(this[0], "parsedAttrs")) {
                        e = this[0].attributes;
                        for (var i = 0, j = e.length; i < j; i++)
                            g = e[i].name,
                            g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)),
                            l(this[0], g, h[g]));
                        f._data(this[0], "parsedAttrs", !0)
                    }
                }
                return h
            }
            if (typeof a == "object")
                return this.each(function() {
                    f.data(this, a)
                });
            d = a.split("."),
            d[1] = d[1] ? "." + d[1] : "";
            if (c === b) {
                h = this.triggerHandler("getData" + d[1] + "!", [d[0]]),
                h === b && this.length && (h = f.data(this[0], a),
                h = l(this[0], a, h));
                return h === b && d[1] ? this.data(d[0]) : h
            }
            return this.each(function() {
                var b = f(this)
                  , e = [d[0], c];
                b.triggerHandler("setData" + d[1] + "!", e),
                f.data(this, a, c),
                b.triggerHandler("changeData" + d[1] + "!", e)
            })
        },
        removeData: function(a) {
            return this.each(function() {
                f.removeData(this, a)
            })
        }
    }),
    f.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark",
            f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, c) {
            a !== !0 && (c = b,
            b = a,
            a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark"
                  , e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0),
                n(b, c, "mark"))
            }
        },
        queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue",
                d = f._data(a, b),
                c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = f.queue(a, b)
              , d = c.shift()
              , e = {};
            d === "inprogress" && (d = c.shift()),
            d && (b === "fx" && c.unshift("inprogress"),
            f._data(a, b + ".run", e),
            d.call(a, function() {
                f.dequeue(a, b)
            }, e)),
            c.length || (f.removeData(a, b + "queue " + b + ".run", !0),
            n(a, b, "queue"))
        }
    }),
    f.fn.extend({
        queue: function(a, c) {
            typeof a != "string" && (c = a,
            a = "fx");
            if (c === b)
                return f.queue(this[0], a);
            return this.each(function() {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                f.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a,
            b = b || "fx";
            return this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a,
            a = b),
            a = a || "fx";
            var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
            while (g--)
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0))
                    h++,
                    l.add(m);
            m();
            return d.promise()
        }
    });
    var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y;
    f.fn.extend({
        attr: function(a, b) {
            return f.access(this, a, b, !0, f.attr)
        },
        removeAttr: function(a) {
            return this.each(function() {
                f.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return f.access(this, a, b, !0, f.prop)
        },
        removeProp: function(a) {
            a = f.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = b,
                    delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a))
                return this.each(function(b) {
                    f(this).addClass(a.call(this, b, this.className))
                });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0,
                d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1)
                            e.className = a;
                        else {
                            g = " " + e.className + " ";
                            for (h = 0,
                            i = b.length; h < i; h++)
                                ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                            e.className = f.trim(g)
                        }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a))
                return this.each(function(b) {
                    f(this).removeClass(a.call(this, b, this.className))
                });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0,
                e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)
                        if (a) {
                            h = (" " + g.className + " ").replace(o, " ");
                            for (i = 0,
                            j = c.length; i < j; i++)
                                h = h.replace(" " + c[i] + " ", " ");
                            g.className = f.trim(h)
                        } else
                            g.className = ""
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a
              , d = typeof b == "boolean";
            if (f.isFunction(a))
                return this.each(function(c) {
                    f(this).toggleClass(a.call(this, c, this.className, b), b)
                });
            return this.each(function() {
                if (c === "string") {
                    var e, g = 0, h = f(this), i = b, j = a.split(p);
                    while (e = j[g++])
                        i = d ? i : !h.hasClass(e),
                        h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean")
                    this.className && f._data(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            var b = " " + a + " "
              , c = 0
              , d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1)
                    return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, g = this[0];
            {
                if (!!arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function(d) {
                        var g = f(this), h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) : h = a,
                            h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function(a) {
                                return a == null ? "" : a + ""
                            })),
                            c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                            if (!c || !("set"in c) || c.set(this, h, "value") === b)
                                this.value = h
                        }
                    })
                }
                if (g) {
                    c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
                    if (c && "get"in c && (d = c.get(g, "value")) !== b)
                        return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
                }
            }
        }
    }),
    f.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one";
                    if (g < 0)
                        return null;
                    c = j ? g : 0,
                    d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j)
                                return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length)
                        return f(i[g]).val();
                    return h
                },
                set: function(a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function() {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }),
                    c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn)
                    return f(a)[c](d);
                if (typeof a.getAttribute == "undefined")
                    return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a),
                i && (c = c.toLowerCase(),
                h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set"in h && i && (g = h.set(a, d, c)) !== b)
                        return g;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get"in h && i && (g = h.get(a, c)) !== null)
                    return g;
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },
        removeAttr: function(a, b) {
            var c, d, e, g, h = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p),
                g = d.length;
                for (; h < g; h++)
                    e = d[h],
                    e && (c = f.propFix[e] || e,
                    f.attr(a, e, ""),
                    a.removeAttribute(v ? e : c),
                    u.test(e) && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (r.test(a.nodeName) && a.parentNode)
                        f.error("type property can't be changed");
                    else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b),
                        c && (a.value = c);
                        return b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    if (w && f.nodeName(a, "button"))
                        return w.get(a, b);
                    return b in a ? a.value : null
                },
                set: function(a, b, c) {
                    if (w && f.nodeName(a, "button"))
                        return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a),
                h && (c = f.propFix[c] || c,
                g = f.propHooks[c]);
                return d !== b ? g && "set"in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get"in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }),
    f.attrHooks.tabindex = f.propHooks.tabIndex,
    x = {
        get: function(a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c,
            d in a && (a[d] = !0),
            a.setAttribute(c, c.toLowerCase()));
            return c
        }
    },
    v || (y = {
        name: !0,
        id: !0
    },
    w = f.valHooks.button = {
        get: function(a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        },
        set: function(a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d),
            a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    },
    f.attrHooks.tabindex.set = w.set,
    f.each(["width", "height"], function(a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function(a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }),
    f.attrHooks.contenteditable = {
        get: w.get,
        set: function(a, b, c) {
            b === "" && (b = "false"),
            w.set(a, b, c)
        }
    }),
    f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }),
    f.support.style || (f.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    }),
    f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })),
    f.support.enctype || (f.propFix.enctype = "encoding"),
    f.support.checkOn || f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            get: function(a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }),
    f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(a, b) {
                if (f.isArray(b))
                    return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i
      , A = /^([^\.]*)?(?:\.(.+))?$/
      , B = /\bhover(\.\S+)?\b/
      , C = /^key/
      , D = /^(?:mouse|contextmenu)|click/
      , E = /^(?:focusinfocus|focusoutblur)$/
      , F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/
      , G = function(a) {
        var b = F.exec(a);
        b && (b[1] = (b[1] || "").toLowerCase(),
        b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
        return b
    }
      , H = function(a, b) {
        var c = a.attributes || {};
        return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
    }
      , I = function(a) {
        return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
    };
    f.event = {
        add: function(a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d,
                d = p.handler),
                d.guid || (d.guid = f.guid++),
                j = h.events,
                j || (h.events = j = {}),
                i = h.handle,
                i || (h.handle = i = function(a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                }
                ,
                i.elem = a),
                c = f.trim(I(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [],
                    m = l[1],
                    n = (l[2] || "").split(".").sort(),
                    s = f.event.special[m] || {},
                    m = (g ? s.delegateType : s.bindType) || m,
                    s = f.event.special[m] || {},
                    o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: G(g),
                        namespace: n.join(".")
                    }, p),
                    r = j[m];
                    if (!r) {
                        r = j[m] = [],
                        r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1)
                            a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a, o),
                    o.handler.guid || (o.handler.guid = d.guid)),
                    g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
                    f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s;
            if (!!g && !!(o = g.events)) {
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [],
                    j = k = i[1],
                    l = i[2];
                    if (!j) {
                        for (j in o)
                            f.event.remove(a, j + b[h], c, d, !0);
                        continue
                    }
                    p = f.event.special[j] || {},
                    j = (d ? p.delegateType : p.bindType) || j,
                    r = o[j] || [],
                    m = r.length,
                    l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++)
                        s = r[n],
                        (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1),
                        s.selector && r.delegateCount--,
                        p.remove && p.remove.call(a, s));
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle),
                    delete o[j])
                }
                f.isEmptyObject(o) && (q = g.handle,
                q && (q.elem = null),
                f.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
                if (E.test(h + f.event.triggered))
                    return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1),
                k = !0),
                h.indexOf(".") >= 0 && (i = h.split("."),
                h = i.shift(),
                i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h])
                    return;
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h,c) : new f.Event(h),
                c.type = h,
                c.isTrigger = !0,
                c.exclusive = k,
                c.namespace = i.join("."),
                c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                o = h.indexOf(":") < 0 ? "on" + h : "";
                if (!e) {
                    j = f.cache;
                    for (l in j)
                        j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b,
                c.target || (c.target = e),
                d = d != null ? f.makeArray(d) : [],
                d.unshift(c),
                p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1)
                    return;
                r = [[e, p.bindType || h]];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h,
                    m = E.test(s + h) ? e : e.parentNode,
                    n = null;
                    for (; m; m = m.parentNode)
                        r.push([m, s]),
                        n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++)
                    m = r[l][0],
                    c.type = r[l][1],
                    q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"),
                    q && q.apply(m, d),
                    q = o && m[o],
                    q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                c.type = h,
                !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o],
                n && (e[o] = null),
                f.event.triggered = h,
                e[h](),
                f.event.triggered = b,
                n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function(c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = [], j, k, l, m, n, o, p, q, r, s, t;
            g[0] = c,
            c.delegateTarget = this;
            if (e && !c.target.disabled && (!c.button || c.type !== "click")) {
                m = f(this),
                m.context = this.ownerDocument || this;
                for (l = c.target; l != this; l = l.parentNode || this) {
                    o = {},
                    q = [],
                    m[0] = l;
                    for (j = 0; j < e; j++)
                        r = d[j],
                        s = r.selector,
                        o[s] === b && (o[s] = r.quick ? H(l, r.quick) : m.is(s)),
                        o[s] && q.push(r);
                    q.length && i.push({
                        elem: l,
                        matches: q
                    })
                }
            }
            d.length > e && i.push({
                elem: this,
                matches: d.slice(e)
            });
            for (j = 0; j < i.length && !c.isPropagationStopped(); j++) {
                p = i[j],
                c.currentTarget = p.elem;
                for (k = 0; k < p.matches.length && !c.isImmediatePropagationStopped(); k++) {
                    r = p.matches[k];
                    if (h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace))
                        c.data = r.data,
                        c.handleObj = r,
                        n = ((f.event.special[r.origType] || {}).handle || r.handler).apply(p.elem, g),
                        n !== b && (c.result = n,
                        n === !1 && (c.preventDefault(),
                        c.stopPropagation()))
                }
            }
            return c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, d) {
                var e, f, g, h = d.button, i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c,
                f = e.documentElement,
                g = e.body,
                a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0),
                a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)),
                !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i),
                !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function(a) {
            if (a[f.expando])
                return a;
            var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d; )
                e = i[--d],
                a[e] = g[e];
            a.target || (a.target = g.srcElement || c),
            a.target.nodeType === 3 && (a.target = a.target.parentNode),
            a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {
                setup: f.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    f.event.handle = f.event.dispatch,
    f.removeEvent = c.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    : function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }
    ,
    f.Event = function(a, b) {
        if (!(this instanceof f.Event))
            return new f.Event(a,b);
        a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a,
        b && f.extend(this, b),
        this.timeStamp = a && a.timeStamp || f.now(),
        this[f.expando] = !0
    }
    ,
    f.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = K;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = K;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = K,
            this.stopPropagation()
        },
        isDefaultPrevented: J,
        isPropagationStopped: J,
        isImmediatePropagationStopped: J
    },
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        f.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h;
                if (!d || d !== c && !f.contains(c, d))
                    a.type = e.origType,
                    h = e.handler.apply(this, arguments),
                    a.type = b;
                return h
            }
        }
    }),
    f.support.submitBubbles || (f.event.special.submit = {
        setup: function() {
            if (f.nodeName(this, "form"))
                return !1;
            f.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target
                  , d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function(a) {
                    this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0)
                }),
                d._submit_attached = !0)
            })
        },
        teardown: function() {
            if (f.nodeName(this, "form"))
                return !1;
            f.event.remove(this, "._submit")
        }
    }),
    f.support.changeBubbles || (f.event.special.change = {
        setup: function() {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio")
                    f.event.add(this, "propertychange._change", function(a) {
                        a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }),
                    f.event.add(this, "click._change", function(a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1,
                        f.event.simulate("change", this, a, !0))
                    });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function(a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                }),
                b._change_attached = !0)
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox")
                return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            f.event.remove(this, "._change");
            return z.test(this.nodeName)
        }
    }),
    f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var d = 0
          , e = function(a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0)
        };
        f.event.special[b] = {
            setup: function() {
                d++ === 0 && c.addEventListener(a, e, !0)
            },
            teardown: function() {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }),
    f.fn.extend({
        on: function(a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = c,
                c = b);
                for (i in a)
                    this.on(i, c, d, a[i], g);
                return this
            }
            d == null && e == null ? (e = c,
            d = c = b) : e == null && (typeof c == "string" ? (e = d,
            d = b) : (e = d,
            d = c,
            c = b));
            if (e === !1)
                e = J;
            else if (!e)
                return this;
            g === 1 && (h = e,
            e = function(a) {
                f().off(a);
                return h.apply(this, arguments)
            }
            ,
            e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function() {
                f.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on.call(this, a, b, c, d, 1)
        },
        off: function(a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a)
                    this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function")
                d = c,
                c = b;
            d === !1 && (d = J);
            return this.each(function() {
                f.event.remove(this, a, d, c)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        live: function(a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this
        },
        die: function(a, b) {
            f(this.context).off(a, this.selector || "**", b);
            return this
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0])
                return f.event.trigger(a, b, this[0], !0)
        },
        toggle: function(a) {
            var b = arguments
              , c = a.guid || f.guid++
              , d = 0
              , e = function(c) {
                var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                f._data(this, "lastToggle" + a.guid, e + 1),
                c.preventDefault();
                return b[e].apply(this, arguments) || !1
            };
            e.guid = c;
            while (d < b.length)
                b[d++].guid = c;
            return this.click(e)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        f.fn[b] = function(a, c) {
            c == null && (c = a,
            a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
        ,
        f.attrFn && (f.attrFn[b] = !0),
        C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
        D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }),
    function() {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c,
                            j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c,
                        j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
          , d = "sizcache" + (Math.random() + "").replace(".", "")
          , e = 0
          , g = Object.prototype.toString
          , h = !1
          , i = !0
          , j = /\\/g
          , k = /\r\n/g
          , l = /\W/;
        [0, 0].sort(function() {
            i = !1;
            return 0
        });
        var m = function(b, d, e, f) {
            e = e || [],
            d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9)
                return [];
            if (!b || typeof b != "string")
                return e;
            var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
            do {
                a.exec(""),
                i = a.exec(x);
                if (i) {
                    x = i[3],
                    w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b))
                if (w.length === 2 && o.relative[w[0]])
                    j = y(w[0] + w[1], d, f);
                else {
                    j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                    while (w.length)
                        b = w.shift(),
                        o.relative[b] && (b += w.shift()),
                        j = y(b, j, f)
                }
            else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v),
                d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {
                        expr: w.pop(),
                        set: s(f)
                    } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v),
                    j = n.expr ? m.filter(n.expr, n.set) : n.set,
                    w.length > 0 ? k = s(j) : u = !1;
                    while (w.length)
                        q = w.pop(),
                        r = q,
                        o.relative[q] ? r = w.pop() : q = "",
                        r == null && (r = d),
                        o.relative[q](k, r, v)
                } else
                    k = w = []
            }
            k || (k = j),
            k || m.error(q || b);
            if (g.call(k) === "[object Array]")
                if (!u)
                    e.push.apply(e, k);
                else if (d && d.nodeType === 1)
                    for (t = 0; k[t] != null; t++)
                        k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
                else
                    for (t = 0; k[t] != null; t++)
                        k[t] && k[t].nodeType === 1 && e.push(j[t]);
            else
                s(k, e);
            l && (m(l, h, e, f),
            m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function(a) {
            if (u) {
                h = i,
                a.sort(u);
                if (h)
                    for (var b = 1; b < a.length; b++)
                        a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }
        ,
        m.matches = function(a, b) {
            return m(a, null, null, b)
        }
        ,
        m.matchesSelector = function(a, b) {
            return m(b, null, null, [a]).length > 0
        }
        ,
        m.find = function(a, b, c) {
            var d, e, f, g, h, i;
            if (!a)
                return [];
            for (e = 0,
            f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1],
                    g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""),
                        d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        }
        ,
        m.filter = function(a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter)
                    if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                        k = o.filter[h],
                        l = f[1],
                        g = !1,
                        f.splice(1, 1);
                        if (l.substr(l.length - 1) === "\\")
                            continue;
                        s === r && (r = []);
                        if (o.preFilter[h]) {
                            f = o.preFilter[h](f, s, d, r, e, t);
                            if (!f)
                                g = i = !0;
                            else if (f === !0)
                                continue
                        }
                        if (f)
                            for (n = 0; (j = s[n]) != null; n++)
                                j && (i = k(j, f, n, s),
                                p = e ^ i,
                                d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j),
                                g = !0));
                        if (i !== b) {
                            d || (s = r),
                            a = a.replace(o.match[h], "");
                            if (!g)
                                return [];
                            break
                        }
                    }
                if (a === q)
                    if (g == null)
                        m.error(a);
                    else
                        break;
                q = a
            }
            return s
        }
        ,
        m.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ;
        var n = m.getText = function(a) {
            var b, c, d = a.nodeType, e = "";
            if (d) {
                if (d === 1 || d === 9) {
                    if (typeof a.textContent == "string")
                        return a.textContent;
                    if (typeof a.innerText == "string")
                        return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling)
                        e += n(a)
                } else if (d === 3 || d === 4)
                    return a.nodeValue
            } else
                for (b = 0; c = a[b]; b++)
                    c.nodeType !== 8 && (e += n(c));
            return e
        }
          , o = m.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(a) {
                    return a.getAttribute("href")
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function(a, b) {
                    var c = typeof b == "string"
                      , d = c && !l.test(b)
                      , e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0, g = a.length, h; f < g; f++)
                        if (h = a[f]) {
                            while ((h = h.previousSibling) && h.nodeType !== 1)
                                ;
                            a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                        }
                    e && m.filter(b, a, !0)
                },
                ">": function(a, b) {
                    var c, d = typeof b == "string", e = 0, f = a.length;
                    if (d && !l.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g : !1
                            }
                        }
                    } else {
                        for (; e < f; e++)
                            c = a[e],
                            c && (a[e] = d ? c.parentNode : c.parentNode === b);
                        d && m.filter(b, a, !0)
                    }
                },
                "": function(a, b, c) {
                    var d, f = e++, g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(),
                    d = b,
                    g = w),
                    g("parentNode", b, f, a, d, c)
                },
                "~": function(a, b, c) {
                    var d, f = e++, g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(),
                    d = b,
                    g = w),
                    g("previousSibling", b, f, a, d, c)
                }
            },
            find: {
                ID: function(a, b, c) {
                    if (typeof b.getElementById != "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                },
                NAME: function(a, b) {
                    if (typeof b.getElementsByName != "undefined") {
                        var c = []
                          , d = b.getElementsByName(a[1]);
                        for (var e = 0, f = d.length; e < f; e++)
                            d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return c.length === 0 ? null : c
                    }
                },
                TAG: function(a, b) {
                    if (typeof b.getElementsByTagName != "undefined")
                        return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function(a, b, c, d, e, f) {
                    a = " " + a[1].replace(j, "") + " ";
                    if (f)
                        return a;
                    for (var g = 0, h; (h = b[g]) != null; g++)
                        h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                    return !1
                },
                ID: function(a) {
                    return a[1].replace(j, "")
                },
                TAG: function(a, b) {
                    return a[1].replace(j, "").toLowerCase()
                },
                CHILD: function(a) {
                    if (a[1] === "nth") {
                        a[2] || m.error(a[0]),
                        a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0,
                        a[3] = b[3] - 0
                    } else
                        a[2] && m.error(a[0]);
                    a[0] = e++;
                    return a
                },
                ATTR: function(a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(j, "");
                    !f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                    a[4] = (a[4] || a[5] || "").replace(j, ""),
                    a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                },
                PSEUDO: function(b, c, d, e, f) {
                    if (b[1] === "not")
                        if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))
                            b[3] = m(b[3], null, null, c);
                        else {
                            var g = m.filter(b[3], c, d, !0 ^ f);
                            d || e.push.apply(e, g);
                            return !1
                        }
                    else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0]))
                        return !0;
                    return b
                },
                POS: function(a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function(a) {
                    return a.disabled === !1 && a.type !== "hidden"
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    return a.checked === !0
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                },
                parent: function(a) {
                    return !!a.firstChild
                },
                empty: function(a) {
                    return !a.firstChild
                },
                has: function(a, b, c) {
                    return !!m(c[3], a).length
                },
                header: function(a) {
                    return /h\d/i.test(a.nodeName)
                },
                text: function(a) {
                    var b = a.getAttribute("type")
                      , c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                },
                radio: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                },
                checkbox: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                },
                file: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                },
                password: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                },
                submit: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "submit" === a.type
                },
                image: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                },
                reset: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "reset" === a.type
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                },
                input: function(a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                },
                focus: function(a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(a, b) {
                    return b === 0
                },
                last: function(a, b, c, d) {
                    return b === d.length - 1
                },
                even: function(a, b) {
                    return b % 2 === 0
                },
                odd: function(a, b) {
                    return b % 2 === 1
                },
                lt: function(a, b, c) {
                    return b < c[3] - 0
                },
                gt: function(a, b, c) {
                    return b > c[3] - 0
                },
                nth: function(a, b, c) {
                    return c[3] - 0 === b
                },
                eq: function(a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function(a, b, c, d) {
                    var e = b[1]
                      , f = o.filters[e];
                    if (f)
                        return f(a, c, b, d);
                    if (e === "contains")
                        return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0, i = g.length; h < i; h++)
                            if (g[h] === a)
                                return !1;
                        return !0
                    }
                    m.error(e)
                },
                CHILD: function(a, b) {
                    var c, e, f, g, h, i, j, k = b[1], l = a;
                    switch (k) {
                    case "only":
                    case "first":
                        while (l = l.previousSibling)
                            if (l.nodeType === 1)
                                return !1;
                        if (k === "first")
                            return !0;
                        l = a;
                    case "last":
                        while (l = l.nextSibling)
                            if (l.nodeType === 1)
                                return !1;
                        return !0;
                    case "nth":
                        c = b[2],
                        e = b[3];
                        if (c === 1 && e === 0)
                            return !0;
                        f = b[0],
                        g = a.parentNode;
                        if (g && (g[d] !== f || !a.nodeIndex)) {
                            i = 0;
                            for (l = g.firstChild; l; l = l.nextSibling)
                                l.nodeType === 1 && (l.nodeIndex = ++i);
                            g[d] = f
                        }
                        j = a.nodeIndex - e;
                        return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                    }
                },
                ID: function(a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                },
                TAG: function(a, b) {
                    return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                },
                CLASS: function(a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                },
                ATTR: function(a, b) {
                    var c = b[1]
                      , d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c)
                      , e = d + ""
                      , f = b[2]
                      , g = b[4];
                    return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                },
                POS: function(a, b, c, d) {
                    var e = b[2]
                      , f = o.setFilters[e];
                    if (f)
                        return f(a, c, b, d)
                }
            }
        }
          , p = o.match.POS
          , q = function(a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var r in o.match)
            o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source),
            o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        var s = function(a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function(a, b) {
                var c = 0
                  , d = b || [];
                if (g.call(a) === "[object Array]")
                    Array.prototype.push.apply(d, a);
                else if (typeof a.length == "number")
                    for (var e = a.length; c < e; c++)
                        d.push(a[c]);
                else
                    for (; a[c]; c++)
                        d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function(a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition)
                return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        }
        : (u = function(a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex)
                return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
            if (g === i)
                return v(a, b);
            if (!g)
                return -1;
            if (!i)
                return 1;
            while (j)
                e.unshift(j),
                j = j.parentNode;
            j = i;
            while (j)
                f.unshift(j),
                j = j.parentNode;
            c = e.length,
            d = f.length;
            for (var k = 0; k < c && k < d; k++)
                if (e[k] !== f[k])
                    return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }
        ,
        v = function(a, b, c) {
            if (a === b)
                return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b)
                    return -1;
                d = d.nextSibling
            }
            return 1
        }
        ),
        function() {
            var a = c.createElement("div")
              , d = "script" + (new Date).getTime()
              , e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>",
            e.insertBefore(a, e.firstChild),
            c.getElementById(d) && (o.find.ID = function(a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }
            ,
            o.filter.ID = function(a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }
            ),
            e.removeChild(a),
            e = a = null
        }(),
        function() {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")),
            a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++)
                        c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }
            ),
            a.innerHTML = "<a href='#'></a>",
            a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
                return a.getAttribute("href", 2)
            }
            ),
            a = null
        }(),
        c.querySelectorAll && function() {
            var a = m
              , b = c.createElement("div")
              , d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function(b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1])
                                return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName)
                                return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body)
                                return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode)
                                    return s([], f);
                                if (i.id === h[3])
                                    return s([i], f)
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch (j) {}
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e
                              , l = e.getAttribute("id")
                              , n = l || d
                              , p = e.parentNode
                              , q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n),
                            q && p && (e = e.parentNode);
                            try {
                                if (!q || p)
                                    return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            } catch (r) {} finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                }
                ;
                for (var e in a)
                    m[e] = a[e];
                b = null
            }
        }(),
        function() {
            var a = c.documentElement
              , b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div")
                  , e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function(a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a))
                        try {
                            if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                var f = b.call(a, c);
                                if (f || !d || a.document && a.document.nodeType !== 11)
                                    return f
                            }
                        } catch (g) {}
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(),
        function() {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1)
                    return;
                o.order.splice(1, 0, "CLASS"),
                o.find.CLASS = function(a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c)
                        return b.getElementsByClassName(a[1])
                }
                ,
                a = null
            }
        }(),
        c.documentElement.contains ? m.contains = function(a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        }
        : c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        }
        : m.contains = function() {
            return !1
        }
        ,
        m.isXML = function(a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        }
        ;
        var y = function(a, b, c) {
            var d, e = [], f = "", g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a))
                f += d[0],
                a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++)
                m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr,
        m.selectors.attrMap = {},
        f.find = m,
        f.expr = m.selectors,
        f.expr[":"] = f.expr.filters,
        f.unique = m.uniqueSort,
        f.text = m.getText,
        f.isXMLDoc = m.isXML,
        f.contains = m.contains
    }();
    var L = /Until$/
      , M = /^(?:parents|prevUntil|prevAll)/
      , N = /,/
      , O = /^.[^:#\[\.,]*$/
      , P = Array.prototype.slice
      , Q = f.expr.match.POS
      , R = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    f.fn.extend({
        find: function(a) {
            var b = this, c, d;
            if (typeof a != "string")
                return f(a).filter(function() {
                    for (c = 0,
                    d = b.length; c < d; c++)
                        if (f.contains(b[c], this))
                            return !0
                });
            var e = this.pushStack("", "find", a), g, h, i;
            for (c = 0,
            d = this.length; c < d; c++) {
                g = e.length,
                f.find(a, this[c], e);
                if (c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; i < g; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
            }
            return e
        },
        has: function(a) {
            var b = f(a);
            return this.filter(function() {
                for (var a = 0, c = b.length; a < c; a++)
                    if (f.contains(this, b[a]))
                        return !0
            })
        },
        not: function(a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c = [], d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++)
                        f(g).is(a[d]) && c.push({
                            selector: a[d],
                            elem: g,
                            level: h
                        });
                    g = g.parentNode,
                    h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0,
            e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11)
                        break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function(a) {
            if (!a)
                return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string")
                return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a)
              , d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }),
    f.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function(a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function(a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return f.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return f.sibling(a.firstChild)
        },
        contents: function(a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function(a, b) {
        f.fn[a] = function(c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c),
            d && typeof d == "string" && (e = f.filter(d, e)),
            e = this.length > 1 && !R[a] ? f.unique(e) : e,
            (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }),
    f.extend({
        filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = []
              , g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d)))
                g.nodeType === 1 && e.push(g),
                g = g[c];
            return e
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c])
                if (a.nodeType === 1 && ++e === b)
                    break;
            return a
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling)
                a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , W = / jQuery\d+="(?:\d+|null)"/g
      , X = /^\s+/
      , Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
      , Z = /<([\w:]+)/
      , $ = /<tbody/i
      , _ = /<|&#?\w+;/
      , ba = /<(?:script|style)/i
      , bb = /<(?:script|object|embed|option|style)/i
      , bc = new RegExp("<(?:" + V + ")","i")
      , bd = /checked\s*(?:[^=]|=\s*.checked.)/i
      , be = /\/(java|ecma)script/i
      , bf = /^\s*<!(?:\[CDATA\[|\-\-)/
      , bg = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , bh = U(c);
    bg.optgroup = bg.option,
    bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead,
    bg.th = bg.td,
    f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]),
    f.fn.extend({
        text: function(a) {
            if (f.isFunction(a))
                return this.each(function(b) {
                    var c = f(this);
                    c.text(a.call(this, b, c.text()))
                });
            if (typeof a != "object" && a !== b)
                return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
            return f.text(this)
        },
        wrapAll: function(a) {
            if (f.isFunction(a))
                return this.each(function(b) {
                    f(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1)
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            if (f.isFunction(a))
                return this.each(function(b) {
                    f(this).wrapInner(a.call(this, b))
                });
            return this.each(function() {
                var b = f(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = f.isFunction(a);
            return this.each(function(c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this)
                });
            if (arguments.length) {
                var a = f.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        },
        remove: function(a, b) {
            for (var c = 0, d; (d = this[c]) != null; c++)
                if (!a || f.filter(a, [d]).length)
                    !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")),
                    f.cleanData([d])),
                    d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var a = 0, b; (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild)
                    b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function(a, b) {
            a = a == null ? !1 : a,
            b = b == null ? a : b;
            return this.map(function() {
                return f.clone(this, a, b)
            })
        },
        html: function(a) {
            if (a === b)
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null;
            if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Y, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++)
                        this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")),
                        this[c].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
            } else
                f.isFunction(a) ? this.each(function(b) {
                    var c = f(this);
                    c.html(a.call(this, b, c.html()))
                }) : this.empty().append(a);
            return this
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a))
                    return this.each(function(b) {
                        var c = f(this)
                          , d = c.html();
                        c.replaceWith(a.call(this, b, d))
                    });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function() {
                    var b = this.nextSibling
                      , c = this.parentNode;
                    f(this).remove(),
                    b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            var e, g, h, i, j = a[0], k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j))
                return this.each(function() {
                    f(this).domManip(a, c, d, !0)
                });
            if (f.isFunction(j))
                return this.each(function(e) {
                    var g = f(this);
                    a[0] = j.call(this, e, c ? g.html() : b),
                    g.domManip(a, c, d)
                });
            if (this[0]) {
                i = j && j.parentNode,
                f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k),
                h = e.fragment,
                h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++)
                        d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, bp)
            }
            return this
        }
    }),
    f.buildFragment = function(a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]),
        i.createDocumentFragment || (i = c),
        a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0,
        h = f.fragments[j],
        h && h !== 1 && (e = h)),
        e || (e = i.createDocumentFragment(),
        f.clean(a, i, e, d)),
        g && (f.fragments[j] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        }
    }
    ,
    f.fragments = {},
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        f.fn[a] = function(c) {
            var d = []
              , e = f(c)
              , g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j),
                d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }),
    f.extend({
        clone: function(a, b, c) {
            var d, e, g, h = f.support.html5Clone || !bc.test("<" + a.nodeName) ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h),
                d = bl(a),
                e = bl(h);
                for (g = 0; d[g]; ++g)
                    e[g] && bk(d[g], e[g])
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a),
                    e = bl(h);
                    for (g = 0; d[g]; ++g)
                        bj(d[g], e[g])
                }
            }
            d = e = null;
            return h
        },
        clean: function(a, b, d, e) {
            var g;
            b = b || c,
            typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            var h = [], i;
            for (var j = 0, k; (k = a[j]) != null; j++) {
                typeof k == "number" && (k += "");
                if (!k)
                    continue;
                if (typeof k == "string")
                    if (!_.test(k))
                        k = b.createTextNode(k);
                    else {
                        k = k.replace(Y, "<$1></$2>");
                        var l = (Z.exec(k) || ["", ""])[1].toLowerCase()
                          , m = bg[l] || bg._default
                          , n = m[0]
                          , o = b.createElement("div");
                        b === c ? bh.appendChild(o) : U(b).appendChild(o),
                        o.innerHTML = m[1] + k + m[2];
                        while (n--)
                            o = o.lastChild;
                        if (!f.support.tbody) {
                            var p = $.test(k)
                              , q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                            for (i = q.length - 1; i >= 0; --i)
                                f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                        }
                        !f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild),
                        k = o.childNodes
                    }
                var r;
                if (!f.support.appendChecked)
                    if (k[0] && typeof (r = k.length) == "number")
                        for (i = 0; i < r; i++)
                            bn(k[i]);
                    else
                        bn(k);
                k.nodeType ? h.push(k) : h = f.merge(h, k)
            }
            if (d) {
                g = function(a) {
                    return !a.type || be.test(a.type)
                }
                ;
                for (j = 0; h[j]; j++)
                    if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript"))
                        e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
                    else {
                        if (h[j].nodeType === 1) {
                            var s = f.grep(h[j].getElementsByTagName("script"), g);
                            h.splice.apply(h, [j + 1, 0].concat(s))
                        }
                        d.appendChild(h[j])
                    }
            }
            return h
        },
        cleanData: function(a) {
            var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
            for (var h = 0, i; (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()])
                    continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events)
                            e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando),
                    delete d[c]
                }
            }
        }
    });
    var bq = /alpha\([^)]*\)/i, br = /opacity=([^)]*)/, bs = /([A-Z]|^ms)/g, bt = /^-?\d+(?:px)?$/i, bu = /^-?\d/, bv = /^([\-+])=([\-+.\de]+)/, bw = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, bx = ["Left", "Right"], by = ["Top", "Bottom"], bz, bA, bB;
    f.fn.css = function(a, c) {
        if (arguments.length === 2 && c === b)
            return this;
        return f.access(this, a, c, !0, function(a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }
    ,
    f.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bz(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get"in k && (g = k.get(a, !1, e)) !== b)
                        return g;
                    return j[c]
                }
                h = typeof d,
                h === "string" && (g = bv.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)),
                h = "number");
                if (d == null || h === "number" && isNaN(d))
                    return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set"in k) || (d = k.set(a, d)) !== b)
                    try {
                        j[c] = d
                    } catch (l) {}
            }
        },
        css: function(a, c, d) {
            var e, g;
            c = f.camelCase(c),
            g = f.cssHooks[c],
            c = f.cssProps[c] || c,
            c === "cssFloat" && (c = "float");
            if (g && "get"in g && (e = g.get(a, !0, d)) !== b)
                return e;
            if (bz)
                return bz(a, c)
        },
        swap: function(a, b, c) {
            var d = {};
            for (var e in b)
                d[e] = a.style[e],
                a.style[e] = b[e];
            c.call(a);
            for (e in b)
                a.style[e] = d[e]
        }
    }),
    f.curCSS = f.css,
    f.each(["height", "width"], function(a, b) {
        f.cssHooks[b] = {
            get: function(a, c, d) {
                var e;
                if (c) {
                    if (a.offsetWidth !== 0)
                        return bC(a, b, d);
                    f.swap(a, bw, function() {
                        e = bC(a, b, d)
                    });
                    return e
                }
            },
            set: function(a, b) {
                if (!bt.test(b))
                    return b;
                b = parseFloat(b);
                if (b >= 0)
                    return b + "px"
            }
        }
    }),
    f.support.opacity || (f.cssHooks.opacity = {
        get: function(a, b) {
            return br.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : ""
              , g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bq, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter)
                    return
            }
            c.filter = bq.test(g) ? g.replace(bq, e) : g + " " + e
        }
    }),
    f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(a, b) {
                var c;
                f.swap(a, {
                    display: "inline-block"
                }, function() {
                    b ? c = bz(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }),
    c.defaultView && c.defaultView.getComputedStyle && (bA = function(a, b) {
        var c, d, e;
        b = b.replace(bs, "-$1").toLowerCase(),
        (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b),
        c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b)));
        return c
    }
    ),
    c.documentElement.currentStyle && (bB = function(a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
        f === null && g && (e = g[b]) && (f = e),
        !bt.test(f) && bu.test(f) && (c = g.left,
        d = a.runtimeStyle && a.runtimeStyle.left,
        d && (a.runtimeStyle.left = a.currentStyle.left),
        g.left = b === "fontSize" ? "1em" : f || 0,
        f = g.pixelLeft + "px",
        g.left = c,
        d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }
    ),
    bz = bA || bB,
    f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }
    ,
    f.expr.filters.visible = function(a) {
        return !f.expr.filters.hidden(a)
    }
    );
    var bD = /%20/g, bE = /\[\]$/, bF = /\r?\n/g, bG = /#.*$/, bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bI = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bK = /^(?:GET|HEAD)$/, bL = /^\/\//, bM = /\?/, bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bO = /^(?:select|textarea)/i, bP = /\s+/, bQ = /([?&])_=[^&]*/, bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bS = f.fn.load, bT = {}, bU = {}, bV, bW, bX = ["*/"] + ["*"];
    try {
        bV = e.href
    } catch (bY) {
        bV = c.createElement("a"),
        bV.href = "",
        bV = bV.href
    }
    bW = bR.exec(bV.toLowerCase()) || [],
    f.fn.extend({
        load: function(a, c, d) {
            if (typeof a != "string" && bS)
                return bS.apply(this, arguments);
            if (!this.length)
                return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c,
            c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional),
            h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText,
                    a.isResolved() && (a.done(function(a) {
                        c = a
                    }),
                    i.html(g ? f("<div>").append(c.replace(bN, "")).find(g) : c)),
                    d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || bO.test(this.nodeName) || bI.test(this.type))
            }).map(function(a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bF, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bF, "\r\n")
                }
            }).get()
        }
    }),
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        f.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    f.each(["get", "post"], function(a, c) {
        f[c] = function(a, d, e, g) {
            f.isFunction(d) && (g = g || e,
            e = d,
            d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }),
    f.extend({
        getScript: function(a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            b ? b_(a, f.ajaxSettings) : (b = a,
            a = f.ajaxSettings),
            b_(a, b);
            return a
        },
        ajaxSettings: {
            url: bV,
            isLocal: bJ.test(bW[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bX
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bZ(bT),
        ajaxTransport: bZ(bU),
        ajax: function(a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2,
                    q && clearTimeout(q),
                    p = b,
                    n = m || "",
                    v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c, x = l ? cb(d, v, l) : b, y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified"))
                                f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag"))
                                f.etag[k] = z
                        }
                        if (a === 304)
                            w = "notmodified",
                            o = !0;
                        else
                            try {
                                r = cc(d, x),
                                w = "success",
                                o = !0
                            } catch (A) {
                                w = "parsererror",
                                u = A
                            }
                    } else {
                        u = w;
                        if (!w || a)
                            w = "error",
                            a < 0 && (a = 0)
                    }
                    v.status = a,
                    v.statusText = "" + (c || w),
                    o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
                    v.statusCode(j),
                    j = b,
                    t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]),
                    i.fireWith(e, [v, w]),
                    t && (g.trigger("ajaxComplete", [v, d]),
                    --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a,
            a = b),
            c = c || {};
            var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {
                readyState: 0,
                setRequestHeader: function(a, b) {
                    if (!s) {
                        var c = a.toLowerCase();
                        a = m[c] = m[c] || a,
                        l[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return s === 2 ? n : null
                },
                getResponseHeader: function(a) {
                    var c;
                    if (s === 2) {
                        if (!o) {
                            o = {};
                            while (c = bH.exec(n))
                                o[c[1].toLowerCase()] = c[2]
                        }
                        c = o[a.toLowerCase()]
                    }
                    return c === b ? null : c
                },
                overrideMimeType: function(a) {
                    s || (d.mimeType = a);
                    return this
                },
                abort: function(a) {
                    a = a || "abort",
                    p && p.abort(a),
                    w(0, a);
                    return this
                }
            };
            h.promise(v),
            v.success = v.done,
            v.error = v.fail,
            v.complete = i.add,
            v.statusCode = function(a) {
                if (a) {
                    var b;
                    if (s < 2)
                        for (b in a)
                            j[b] = [j[b], a[b]];
                    else
                        b = a[v.status],
                        v.then(b, b)
                }
                return this
            }
            ,
            d.url = ((a || d.url) + "").replace(bG, "").replace(bL, bW[1] + "//"),
            d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bP),
            d.crossDomain == null && (r = bR.exec(d.url.toLowerCase()),
            d.crossDomain = !(!r || r[1] == bW[1] && r[2] == bW[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bW[3] || (bW[1] === "http:" ? 80 : 443)))),
            d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)),
            b$(bT, d, c, v);
            if (s === 2)
                return !1;
            t = d.global,
            d.type = d.type.toUpperCase(),
            d.hasContent = !bK.test(d.type),
            t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bM.test(d.url) ? "&" : "?") + d.data,
                delete d.data),
                k = d.url;
                if (d.cache === !1) {
                    var x = f.now()
                      , y = d.url.replace(bQ, "$1_=" + x);
                    d.url = y + (y === d.url ? (bM.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }
            (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType),
            d.ifModified && (k = k || d.url,
            f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]),
            f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])),
            v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bX + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers)
                v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[u](d[u]);
            p = b$(bU, d, c, v);
            if (!p)
                w(-1, "No Transport");
            else {
                v.readyState = 1,
                t && g.trigger("ajaxSend", [v, d]),
                d.async && d.timeout > 0 && (q = setTimeout(function() {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1,
                    p.send(l, w)
                } catch (z) {
                    if (s < 2)
                        w(-1, z);
                    else
                        throw z
                }
            }
            return v
        },
        param: function(a, c) {
            var d = []
              , e = function(a, b) {
                b = f.isFunction(b) ? b() : b,
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a))
                f.each(a, function() {
                    e(this.name, this.value)
                });
            else
                for (var g in a)
                    ca(g, a[g], c, e);
            return d.join("&").replace(bD, "+")
        }
    }),
    f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cd = f.now()
      , ce = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return f.expando + "_" + cd++
        }
    }),
    f.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ce.test(b.url) || e && ce.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(ce, l),
            b.url === j && (e && (k = k.replace(ce, l)),
            b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))),
            b.url = j,
            b.data = k,
            a[h] = function(a) {
                g = [a]
            }
            ,
            d.always(function() {
                a[h] = i,
                g && f.isFunction(i) && a[h](g[0])
            }),
            b.converters["script json"] = function() {
                g || f.error(h + " was not called");
                return g[0]
            }
            ,
            b.dataTypes[0] = "json";
            return "script"
        }
    }),
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                f.globalEval(a);
                return a
            }
        }
    }),
    f.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    f.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function(f, g) {
                    d = c.createElement("script"),
                    d.async = "async",
                    a.scriptCharset && (d.charset = a.scriptCharset),
                    d.src = a.url,
                    d.onload = d.onreadystatechange = function(a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState))
                            d.onload = d.onreadystatechange = null,
                            e && d.parentNode && e.removeChild(d),
                            d = b,
                            c || g(200, "success")
                    }
                    ,
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var cf = a.ActiveXObject ? function() {
        for (var a in ch)
            ch[a](0, 1)
    }
    : !1, cg = 0, ch;
    f.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && ci() || cj()
    }
    : ci,
    function(a) {
        f.extend(f.support, {
            ajax: !!a,
            cors: !!a && "withCredentials"in a
        })
    }(f.ajaxSettings.xhr()),
    f.support.ajax && f.ajaxTransport(function(c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function(e, g) {
                    var h = c.xhr(), i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields)
                        for (j in c.xhrFields)
                            h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),
                    !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e)
                            h.setRequestHeader(j, e[j])
                    } catch (k) {}
                    h.send(c.hasContent && c.data || null),
                    d = function(a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b,
                                i && (h.onreadystatechange = f.noop,
                                cf && delete ch[i]);
                                if (e)
                                    h.readyState !== 4 && h.abort();
                                else {
                                    j = h.status,
                                    l = h.getAllResponseHeaders(),
                                    m = {},
                                    n = h.responseXML,
                                    n && n.documentElement && (m.xml = n),
                                    m.text = h.responseText;
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }
                                    !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }
                    ,
                    !c.async || h.readyState === 4 ? d() : (i = ++cg,
                    cf && (ch || (ch = {},
                    f(a).unload(cf)),
                    ch[i] = d),
                    h.onreadystatechange = d)
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    });
    var ck = {}, cl, cm, cn = /^(?:toggle|show|hide)$/, co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, cp, cq = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], cr;
    f.fn.extend({
        show: function(a, b, c) {
            var d, e;
            if (a || a === 0)
                return this.animate(cu("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++)
                d = this[g],
                d.style && (e = d.style.display,
                !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""),
                e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cv(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none")
                        d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function(a, b, c) {
            if (a || a === 0)
                return this.animate(cu("hide", 3), a, b, c);
            var d, e, g = 0, h = this.length;
            for (; g < h; g++)
                d = this[g],
                d.style && (e = f.css(d, "display"),
                e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++)
                this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function(a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(cu("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i),
                    i !== g && (a[g] = a[i],
                    delete a[i]),
                    h = a[g],
                    f.isArray(h) ? (b.animatedProperties[g] = h[1],
                    h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d)
                        return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
                    f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cv(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a)
                    j = new f.fx(this,b,i),
                    h = a[i],
                    cn.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0),
                    o ? (f._data(this, "toggle" + i, o === "show" ? "hide" : "show"),
                    j[o]()) : j[h]()) : (k = co.exec(h),
                    l = j.cur(),
                    k ? (m = parseFloat(k[2]),
                    n = k[3] || (f.cssNumber[i] ? "" : "px"),
                    n !== "px" && (f.style(this, i, (m || 1) + n),
                    l = (m || 1) / j.cur() * l,
                    f.style(this, i, l + n)),
                    k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l),
                    j.custom(l, m, n)) : j.custom(l, h, ""));
                return !0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a))
                return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function(a, c, d) {
            typeof a != "string" && (d = c,
            c = a,
            a = b),
            c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function() {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0),
                    e.stop(d)
                }
                var b, c = !1, e = f.timers, g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null)
                    for (b in g)
                        g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                else
                    g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--; )
                    e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(),
                    c = !0,
                    e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }),
    f.each({
        slideDown: cu("show", 1),
        slideUp: cu("hide", 1),
        slideToggle: cu("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        f.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    f.extend({
        speed: function(a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0)
                d.queue = "fx";
            d.old = d.complete,
            d.complete = function(a) {
                f.isFunction(d.old) && d.old.call(this),
                d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            }
            ;
            return d
        },
        easing: {
            linear: function(a, b, c, d) {
                return c + d * a
            },
            swing: function(a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b,
            this.elem = a,
            this.prop = c,
            b.orig = b.orig || {}
        }
    }),
    f.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
                return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function(a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this
              , g = f.fx;
            this.startTime = cr || cs(),
            this.end = c,
            this.now = this.start = a,
            this.pos = this.state = 0,
            this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"),
            h.queue = this.options.queue,
            h.elem = this.elem,
            h.saveState = function() {
                e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start)
            }
            ,
            h() && f.timers.push(h) && !cp && (cp = setInterval(g.tick, g.interval))
        },
        show: function() {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop),
            this.options.show = !0,
            a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
            f(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop),
            this.options.hide = !0,
            this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b, c, d, e = cr || cs(), g = !0, h = this.elem, i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end,
                this.pos = this.state = 1,
                this.update(),
                i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties)
                    i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function(a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }),
                    i.hide && f(h).hide();
                    if (i.hide || i.show)
                        for (b in i.animatedProperties)
                            f.style(h, b, i.orig[b]),
                            f.removeData(h, "fxshow" + b, !0),
                            f.removeData(h, "toggle" + b, !0);
                    d = i.complete,
                    d && (i.complete = !1,
                    d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime,
            this.state = c / i.duration,
            this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration),
            this.now = this.start + (this.end - this.start) * this.pos),
            this.update();
            return !0
        }
    },
    f.extend(f.fx, {
        tick: function() {
            var a, b = f.timers, c = 0;
            for (; c < b.length; c++)
                a = b[c],
                !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(cp),
            cp = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }),
    f.each(["width", "height"], function(a, b) {
        f.fx.step[b] = function(a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        }
    }),
    f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
        return f.grep(f.timers, function(b) {
            return a === b.elem
        }).length
    }
    );
    var cw = /^t(?:able|d|h)$/i
      , cx = /^(?:body|html)$/i;
    "getBoundingClientRect"in c.documentElement ? f.fn.offset = function(a) {
        var b = this[0], c;
        if (a)
            return this.each(function(b) {
                f.offset.setOffset(this, a, b)
            });
        if (!b || !b.ownerDocument)
            return null;
        if (b === b.ownerDocument.body)
            return f.offset.bodyOffset(b);
        try {
            c = b.getBoundingClientRect()
        } catch (d) {}
        var e = b.ownerDocument
          , g = e.documentElement;
        if (!c || !f.contains(g, b))
            return c ? {
                top: c.top,
                left: c.left
            } : {
                top: 0,
                left: 0
            };
        var h = e.body
          , i = cy(e)
          , j = g.clientTop || h.clientTop || 0
          , k = g.clientLeft || h.clientLeft || 0
          , l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop
          , m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft
          , n = c.top + l - j
          , o = c.left + m - k;
        return {
            top: n,
            left: o
        }
    }
    : f.fn.offset = function(a) {
        var b = this[0];
        if (a)
            return this.each(function(b) {
                f.offset.setOffset(this, a, b)
            });
        if (!b || !b.ownerDocument)
            return null;
        if (b === b.ownerDocument.body)
            return f.offset.bodyOffset(b);
        var c, d = b.offsetParent, e = b, g = b.ownerDocument, h = g.documentElement, i = g.body, j = g.defaultView, k = j ? j.getComputedStyle(b, null) : b.currentStyle, l = b.offsetTop, m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (f.support.fixedPosition && k.position === "fixed")
                break;
            c = j ? j.getComputedStyle(b, null) : b.currentStyle,
            l -= b.scrollTop,
            m -= b.scrollLeft,
            b === d && (l += b.offsetTop,
            m += b.offsetLeft,
            f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0,
            m += parseFloat(c.borderLeftWidth) || 0),
            e = d,
            d = b.offsetParent),
            f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0,
            m += parseFloat(c.borderLeftWidth) || 0),
            k = c
        }
        if (k.position === "relative" || k.position === "static")
            l += i.offsetTop,
            m += i.offsetLeft;
        f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop),
        m += Math.max(h.scrollLeft, i.scrollLeft));
        return {
            top: l,
            left: m
        }
    }
    ,
    f.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop
              , c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0,
            c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
            j ? (l = e.position(),
            m = l.top,
            n = l.left) : (m = parseFloat(h) || 0,
            n = parseFloat(i) || 0),
            f.isFunction(b) && (b = b.call(a, c, g)),
            b.top != null && (k.top = b.top - g.top + m),
            b.left != null && (k.left = b.left - g.left + n),
            "using"in b ? b.using.call(a, k) : e.css(k)
        }
    },
    f.fn.extend({
        position: function() {
            if (!this[0])
                return null;
            var a = this[0]
              , b = this.offsetParent()
              , c = this.offset()
              , d = cx.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0,
            c.left -= parseFloat(f.css(a, "marginLeft")) || 0,
            d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0,
            d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static")
                    a = a.offsetParent;
                return a
            })
        }
    }),
    f.each(["Left", "Top"], function(a, c) {
        var d = "scroll" + c;
        f.fn[d] = function(c) {
            var e, g;
            if (c === b) {
                e = this[0];
                if (!e)
                    return null;
                g = cy(e);
                return g ? "pageXOffset"in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
            }
            return this.each(function() {
                g = cy(this),
                g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
            })
        }
    }),
    f.each(["Height", "Width"], function(a, c) {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null
        }
        ,
        f.fn["outer" + c] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : this[d]() : null
        }
        ,
        f.fn[d] = function(a) {
            var e = this[0];
            if (!e)
                return a == null ? null : this;
            if (f.isFunction(a))
                return this.each(function(b) {
                    var c = f(this);
                    c[d](a.call(this, b, c[d]()))
                });
            if (f.isWindow(e)) {
                var g = e.document.documentElement["client" + c]
                  , h = e.document.body;
                return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
            }
            if (e.nodeType === 9)
                return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var i = f.css(e, d)
                  , j = parseFloat(i);
                return f.isNumeric(j) ? j : i
            }
            return this.css(d, typeof a == "string" ? a : a + "px")
        }
    }),
    a.jQuery = a.$ = f,
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return f
    })
}
)(window);
/* {ts '2025-03-05 07:45:39'} res.display:SF6_HRIS_SILOAM */
if (typeof (ismodif) === "undefined") {
    var ismodif = false
}
if (typeof (pstitle) === "undefined") {
    var pstitle = ""
}
if (typeof (jsMsgMLang) === "undefined") {
    var jsMsgMLang = []
}
jsMsgMLang.JSCONFIRMMODIFIEDPAGE = "Data has been modified, You may loose your changes if you proceed\n\nContinue action ?";
jsMsgMLang.CLICKTOCLOSE = "Click to close";
if (typeof (NOTIFLANGTEXT) === "undefined") {
    var NOTIFLANGTEXT = []
}
NOTIFLANGTEXT.JSnotification = "Notification";
NOTIFLANGTEXT.JSshowagaintomorrow = "Show again tomorrow";
NOTIFLANGTEXT.JSshowwhenlogin = "Show when login";
NOTIFLANGTEXT.JSdonotshowanymore = "Do not show any more";
if (typeof (hasfilter) === "undefined") {
    var hasfilter = false
}
if (typeof (hassearch) === "undefined") {
    var hassearch = false
}
function SFdestroyReactElement(d) {
    try {
        var c = $sf("SFRootPage");
        if (d === undefined) {
            var d = $sf("sfreact-elm-id")
        }
        if (top.obj != null && typeof top.obj == "object") {
            try {
                top.ReactDOM.unmountComponentAtNode(top.document.getElementById(c.parentNode.id));
                top.ReactDOM.unmountComponentAtNode(top.document.getElementById(d.parentNode.id))
            } catch (b) {}
        } else {
            if (parent.obj != null && typeof parent.obj == "object") {
                console.log("parent:" + parent.obj.parentNode.id);
                try {
                    parent.ReactDOM.unmountComponentAtNode(parent.document.getElementById(c.parentNode.id));
                    parent.ReactDOM.unmountComponentAtNode(parent.document.getElementById(d.parentNode.id))
                } catch (b) {}
            } else {
                if (window.frames[0] && (window.frames[0].obj != null && typeof window.frames[0].obj == "object")) {
                    try {
                        window.frames[0].ReactDOM.unmountComponentAtNode(window.frames[0].document.getElementById(c.parentNode.id));
                        window.frames[0].ReactDOM.unmountComponentAtNode(window.frames[0].document.getElementById(d.parentNode.id))
                    } catch (b) {}
                } else {
                    if (window.opener && (window.opener.obj != null && typeof window.opener.obj == "object")) {
                        try {
                            window.opener.ReactDOM.unmountComponentAtNode(window.opener.document.getElementById(d.parentNode.id))
                        } catch (b) {}
                    } else {
                        if (d != null && typeof d == "object") {
                            try {
                                ReactDOM.unmountComponentAtNode(document.getElementById(d.parentNode.id))
                            } catch (b) {
                                try {
                                    top.ReactDOM.unmountComponentAtNode(top.document.getElementById(c.parentNode.id));
                                    top.ReactDOM.unmountComponentAtNode(top.document.getElementById(d.parentNode.id))
                                } catch (a) {
                                    console.log("errObjTop:" + a)
                                }
                            }
                        } else {}
                    }
                }
            }
        }
    } catch (b) {}
}
function changePrintFilter(b, l) {
    var n = $("#" + l);
    var m = n[0].outerHTML;
    var a = (m.match(/popPrint\([^\)]*\)/gi)[0]);
    var d = a.match(/\([^\)]+\)/gi)[0];
    d = d.substring(0, d.length - 2).substr(2);
    var e = d.split("&amp;");
    var f = b.split("&");
    for (var h = e.length - 1; h >= 0; h--) {
        var k = e[h].split("=")[0];
        if (arrCol.indexOf(k) >= 0) {
            e.splice(h, 1)
        } else {
            if (f.length) {
                for (var g = f.length - 1; g >= 0; g--) {
                    var c = f[g].split("=")[0];
                    if (c == k) {
                        e.splice(h, 1);
                        f.splice(g, 1);
                        break
                    }
                }
            }
        }
    }
    d = e.join("&") + "&" + b;
    m = m.replace(/popPrint\([^\)]*\)/gi, "popPrint('" + d + "')");
    n.replaceWith(m)
}
function changePrintOrder(b, g) {
    var k = $("#" + g);
    var h = k[0].outerHTML;
    var a = (h.match(/popPrint\([^\)]*\)/gi)[0]);
    var c = a.match(/\([^\)]+\)/gi)[0];
    c = c.substring(0, c.length - 2).substr(2);
    var d = c.split("&amp;");
    for (var e = d.length - 1; e >= 0; e--) {
        var f = d[e].split("=")[0];
        if (f == b.split("=")[0]) {
            d.splice(e, 1)
        }
    }
    c = d.join("&") + "&" + b;
    h = h.replace(/popPrint\([^\)]*\)/gi, "popPrint('" + c + "')");
    k.replaceWith(h)
}
function searchStringinArray(a, c) {
    for (var b = 0; b < a.length; b++) {
        if (a[b].match(c)) {
            return b
        }
    }
    return -1
}
function getElementByAttribute(b, a, f) {
    var e;
    var d = new Array();
    function c(g) {
        if (g == null || g == undefined) {
            return
        }
        if (e(g)) {
            d[d.length] = g
        }
        c(g.firstChild);
        c(g.nextSibling)
    }
    if (f == undefined) {
        f = document.body
    }
    str = "if(Element." + b + "=='" + a + "'){return true;}else{return false}";
    e = function(h) {
        Element = h;
        if (h.nodeName == "#text") {
            return false
        }
        var g = new Function(str);
        if (g()) {
            return true
        } else {
            return false
        }
    }
    ;
    c(f);
    return d
}
var arcounter = 0;
var area = null;
var arrCol = null;
var areaid = "ardata_";
var popsearch = null;
var opensearch = null;
var prevrow = null;
var maxwidth = 2000;
var imgpath = "images/";
if (imgcpath == null) {
    var imgcpath = "images/"
}
var isubmit = false;
var timer = null;
var submitinterval = 2;
var popmlink = null;
var divsplitter = null;
var spwidth = 10;
var scrollerwidth = 17;
var vpage = 1;
var pgid = null;
var pscroller = null;
var divBlockSpace = null;
var divBlock = null;
var divPopup = null;
var iscomplete = true;
var arrScroller = new Array();
var arrSearch = new Array();
var arrFilter = new Array();
var arrFootNote = new Array();
var filopr = 1;
var mLink = "";
var lastLink = "";
var gridFields = null;
var jsNoField = "No.";
var ftIs = "is";
var ftAre = "are";
var ftNote = "Showing_of_record(s)".split("_");
var vmoremsg = "View More";
var msgSoA = "Sort Ascending";
var msgSoD = "Sort Descending";
var fsearch = false;
arrFootNote.counter = "";
arrFootNote.filter = "";
arrFootNote.selection = "";
var time_format = "HH:MM";
var calendar_format = "gregorian";
var date_output_mask = "d mmm yyyy";
var pageurl = "";
var reloadFunc = null;
var isreload = false;
var enrow = 20;
var nbrec = 100;
function initPage() {
    InitDragDrop();
    if (typeof (formFields) === "undefined" || formFields == null) {
        getAJAXContent("?ofid=LookUp.tipHoliday&fgrid=1", "spAjax")
    }
}
function horizScroll(g, f) {
    var e = $sf(f);
    e.style.left = -parseInt(g.scrollLeft);
    for (var c = 0; c < e.childNodes.length; c++) {
        var b = e.childNodes[c];
        var a = b.id.split("_");
        a = a[a.length - 1];
        if (a == "hbar") {
            a = pscroller - 1;
            temphbar = 1
        } else {
            a = parseInt(a);
            temphbar = 0
        }
        if (!temphbar) {
            if (b.id.substr(0, 14) == "data_" + areaid + "_") {
                var d = $sf("s_" + areaid + "_" + a);
                if (d != null && d.style.display != "none") {
                    d.style.left = (parseInt(b.offsetLeft) + parseInt(e.offsetLeft) + 7) + "px"
                }
            }
        }
    }
}
function removeFields(c, a) {
    if (typeof (a) != "undefined") {
        c.splice(a, 1)
    }
    for (var b = 0; b < c.length - 1; b++) {
        if (c[b]["MEDIA"]) {
            if (c[b]["MEDIA"].search("Grid") == -1) {
                removeFields(c, b)
            }
        }
    }
    return c
}
function displayData(arrData, strow, enrow, nbrec, lscol, lsheader, idblock, lswidth, lstype, lslink) {
    if (arrData == null) {
        return
    }
    popsearch = $sf("_popsearch");
    if (idblock != null) {
        area = $sf(idblock)
    }
    if (area == null) {
        area = document.body
    }
    gridFields = removeFields(gridFields);
    iscomplete = (enrow == nbrec);
    arcounter++;
    areaid = "ardata_" + arcounter;
    arrCol = lscol.toLowerCase().split(",");
    var arrHeader = lsheader.split(",");
    var arrWidth = lswidth.split(",");
    var arrType = lstype.toLowerCase().split(",");
    var arrTypeExt = lstype.split(",");
    var arrLink = lslink.split("|");
    var cntColw = 0;
    var cnew = true;
    var dnew = true;
    var podiv = $sf(areaid);
    if (podiv == null) {
        var podiv = document.createElement("DIV");
        area.appendChild(podiv);
        with (podiv) {
            id = "p" + areaid;
            className = "area"
        }
        var odiv = document.createElement("DIV");
        with (odiv) {
            id = areaid;
            className = "darea"
        }
        podiv.appendChild(odiv);
        var colpos = 0;
        var prevheader = null;
        for (var i = 0; i <= arrHeader.length; i++) {
            var cdiv = document.createElement("DIV");
            var colid = areaid + "_" + i;
            odiv.appendChild(cdiv);
            prevheader = cdiv;
            var vsort = "";
            if (i) {
                vsort += '<img id="sortup_' + colid + '" src="' + imgcpath + 'temp/sortup.png" title="' + msgSoA + '" align="absmiddle" hspace="0" border="0" style="cursor:pointer;margin-left:10px;" onclick="sortData(' + i + ',0)">';
                vsort += '<img id="sortdn_' + colid + '" src="' + imgcpath + 'temp/sortdn.png" title="' + msgSoD + '" align="absmiddle" hspace="0" border="0" style="cursor:pointer;" onclick="sortData(' + i + ',1)">';
                if (gridFields != null && i > 0) {
                    if (typeof (gridFields[i - 1]["SORTABLE"]) !== "undefined") {
                        if (gridFields[i - 1]["SORTABLE"] === true) {} else {
                            if (gridFields[i - 1]["SORTABLE"] === false) {
                                vsort = "&nbsp;"
                            } else {
                                vsort = "&nbsp;"
                            }
                        }
                    }
                }
            }
            with (cdiv) {
                id = colid;
                className = "colheader";
                if (arrHeader[i - 1] && arrHeader[i - 1].toLowerCase() == "req_flag") {
                    arrHeader[i - 1] = '<img src="' + imgcpath + 'temp/request.png" align="absmiddle" hspace="0" border="0">';
                    vsort = "";
                    var vHTML = '<span class="header" id="header_' + colid + '">' + (i == 0 ? jsNoField : arrHeader[i - 1]) + '</span><span id="spinq_' + colid + '" onclick="viewSearch();"></span>' + vsort + ""
                } else {
                    var sSearch = 'onclick="showSearch(this.parentNode,' + i + ');"';
                    if (gridFields != null && i > 0) {
                        if (typeof (gridFields[i - 1]["SEARCHABLE"]) !== "undefined") {
                            var isearch = "" + (gridFields[i - 1]["SEARCHABLE"]);
                            isearch = isearch.toLowerCase();
                            if (isearch == "true" || isearch == "yes" || isearch == "1") {
                                isearch = true
                            } else {
                                if (isearch == "false" || isearch == "no" || isearch == "0") {
                                    isearch = false
                                }
                            }
                            if (isearch === true) {} else {
                                if (isearch === false) {
                                    sSearch = ""
                                } else {
                                    sSearch = ""
                                }
                            }
                        }
                    }
                    var vHTML = '<span class="header" id="header_' + colid + '" ' + sSearch + ">" + (i == 0 ? jsNoField : arrHeader[i - 1]) + '</span><span id="spinq_' + colid + '" onclick="viewSearch();"></span>' + vsort + ""
                }
                if (gridFields != null && i > 0) {
                    if (gridFields[i - 1]["LABEL"] || gridFields[i - 1]["ICON"]) {
                        var vHTML = '<span class="header" id="header_' + colid + '" >' + (i == 0 ? jsNoField : arrHeader[i - 1]) + "</span>";
                        if (typeof (gridFields[i - 1]["SORTABLE"]) !== "undefined") {
                            if (gridFields[i - 1]["SORTABLE"] === true) {
                                vHTML += '<img id="sortup_' + colid + '" src="' + imgcpath + 'temp/sortup.png" title="' + msgSoA + '" align="absmiddle" hspace="0" border="0" style="cursor:pointer;margin-left:10px;" onclick="sortData(' + i + ',0)">';
                                vHTML += '<img id="sortdn_' + colid + '" src="' + imgcpath + 'temp/sortdn.png" title="' + msgSoD + '" align="absmiddle" hspace="0" border="0" style="cursor:pointer;" onclick="sortData(' + i + ',1)">'
                            }
                        }
                    }
                }
                innerHTML = vHTML;
                with (style) {
                    left = colpos + "px";
                    if (arrWidth.length > 0) {
                        var nw = "" + arrWidth[i - 1];
                        if (nw != "" && !isNaN(nw)) {
                            width = (i == 0 ? offsetWidth + (arrData.req_status ? 0 : 0) : Math.max(parseInt(nw), parseInt(offsetWidth))) + (bwtype.toLowerCase() == "safari" || bwtype.toLowerCase() == "chrome" ? 15 : 0) + "px"
                        } else {
                            width = (offsetWidth + (i == 0 && arrData.req_status ? 0 : 0) + (bwtype.toLowerCase() == "safari" || bwtype.toLowerCase() == "chrome" ? 15 + (i > 1 ? 10 : 0) : 0)) + "px"
                        }
                    }
                    if (prevheader != null) {}
                    if (arrHeader.length) {
                        zIndex = 1
                    }
                }
            }
            if (i && popsearch != null) {
                var sdiv = document.createElement("DIV");
                area.appendChild(sdiv);
                with (sdiv) {
                    id = "s_" + areaid + "_" + i;
                    className = "popsearch";
                    innerHTML = "<BR>" + (popsearch.innerHTML.replace(/\[IDTEXT\]/gi, "txtSearch_" + i).replace(/\[IDCOL\]/gi, i));
                    with (style) {
                        display = "none"
                    }
                    if (arrType.length >= i) {
                        if (arrType[i - 1].substring(0, 4) == "date" || arrType[i - 1].substring(0, 5) == "sdate") {
                            onmousedown = function() {
                                evtcal = true
                            }
                            ;
                            onmouseup = function() {
                                evtcal = false
                            }
                            ;
                            var vinp = $sf("txtSearch_" + i);
                            if (vinp != null) {
                                vinp.onfocus = function(event) {
                                    popCalendar(event, this.id)
                                }
                                ;
                                vinp.onmouseover = function(event) {
                                    popCalendar(event, this.id)
                                }
                            }
                        } else {
                            if (arrType[i - 1].substring(0, 6) == "lookup") {
                                var vinp = $sf("txtSearch_" + i);
                                if (vinp != null) {
                                    var bfunc = arrType[i - 1].replace(/;/gi, ",").split("~");
                                    var lufunc = null;
                                    var vclick = "";
                                    try {
                                        lufunc = eval(bfunc[1])
                                    } catch (e) {}
                                    if (lufunc != null) {
                                        vclick = bfunc[1] + "(event,this" + (bfunc.length > 1 ? "," + bfunc[2] : "") + ");"
                                    } else {
                                        var sfunc = new Array();
                                        switch (bfunc[1]) {
                                        case "employstatus":
                                            sfunc = ("tipLookUp|?ofid=LookUp.tipEmpStatus|" + (bfunc.length > 2 ? "," + bfunc[2] : "")).split("|");
                                            break;
                                        case "gradecat":
                                            sfunc = ("tipLookUp|?ofid=LookUp.tipJobGrade|" + (bfunc.length > 2 ? "," + bfunc[2] : "")).split("|");
                                            break;
                                        case "department":
                                            sfunc = ("tipLookUp|?ofid=LookUp.tipDepartment|" + (bfunc.length > 2 ? "," + bfunc[2] : "")).split("|");
                                            break;
                                        default:
                                            sfunc = ("tipLookUp|?ofid=LookUp.tip" + bfunc[1] + "|" + (bfunc.length > 2 ? "," + bfunc[2] : "")).split("|");
                                            break
                                        }
                                        if (sfunc.length) {
                                            vclick = sfunc[0] + "(event,'" + sfunc[1] + "',this" + sfunc[2] + ");"
                                        }
                                    }
                                    if (vclick.length) {
                                        vinp.mclick = vclick;
                                        vinp.ondblclick = function(event) {
                                            try {
                                                eval(this.mclick)
                                            } catch (e) {}
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            colpos += parseInt(cdiv.offsetWidth);
            var cdiv = document.createElement("DIV");
            var colid = "space_" + areaid + "_" + i;
            with (cdiv) {
                id = colid;
                className = "colspt";
                if (vsort != "") {
                    lang = "resizable"
                } else {
                    style.cursor = "default"
                }
                innerHTML = "&nbsp;";
                with (style) {
                    left = colpos + "px";
                    paddingLeft = "0px";
                    paddingRight = "0px";
                    width = spwidth;
                    if (arrHeader.length) {
                        zIndex = 1
                    }
                }
            }
            odiv.appendChild(cdiv);
            colpos += parseInt(cdiv.offsetWidth)
        }
        var totwidth = colpos;
        if (arrHeader.length) {
            var cdiv = document.createElement("DIV");
            area.appendChild(cdiv);
            var colid = areaid + "_" + (i);
            pscroller = i;
            with (cdiv) {
                id = colid;
                className = "colheader";
                lang = "scroller";
                with (style) {
                    colpos = Math.min(colpos, parseInt(odiv.offsetWidth) - scrollerwidth);
                    var mtbl = document.body.childNodes[0];
                    if (mtbl.tagName == null) {
                        mtbl = document.body.childNodes[1]
                    }
                    var mleft = (mtbl.tagName.toUpperCase() == "TABLE" ? parseInt(mtbl.cellPadding) : "0");
                    var mtop = mleft;
                    left = colpos + mleft + 1 - (bwtype.toLowerCase() == "chrome" ? 1 : 0);
                    width = parseInt(odiv.offsetWidth) - colpos - (bwtype == "IE" ? 1 : 3);
                    borderRight = "0px";
                    zIndex = arrHeader.length - i + 1;
                    top = (bwtype == "IE" ? 30 + mtop : odiv.offsetTop) + (bwtype.toLowerCase() == "chrome" ? 15 : 1)
                }
            }
            popmlink = document.createElement("DIV");
            with (popmlink) {
                id = "popmorelink";
                className = "divmlink";
                innerHTML = '<div id="divmlink" class="morelink" style="position:absolute; display:none;"><table height="100%" width"100%" border="0" align="center"><tr><td class="mlink" onclick="viewMore();">' + vmoremsg + "</td></tr></table></div>";
                with (style) {
                    display = "none";
                    zIndex = "10"
                }
            }
            area.appendChild(popmlink);
            divsplitter = document.createElement("DIV");
            with (divsplitter) {
                id = "divsplitter";
                className = "splitter";
                lang = "splitter";
                innerHTML = '<img src="' + imgcpath + 'layout/spacer.gif" width="2" border="0">';
                with (style) {
                    display = "none"
                }
            }
            odiv.appendChild(divsplitter)
        }
    } else {
        cnew = false;
        var odiv = podiv.childNodes[0]
    }
    var vhead = $sf(areaid + "_0");
    var dataHeight = parseInt(area.offsetHeight) - parseInt(vhead.offsetHeight);
    if (cnew) {
        var hdiv = document.createElement("DIV");
        with (hdiv) {
            id = areaid + "_hbar";
            className = "coldata";
            with (style) {
                var mleft = 0;
                var mtop = mleft;
                left = odiv.offsetLeft + (bwtype == "IE" ? mleft : 0);
                width = parseInt(cdiv.offsetLeft);
                height = 17;
                top = parseInt(area.offsetTop) + parseInt(area.offsetHeight) - (bwtype.toLowerCase() == "chrome" ? 37 : 7) + mtop;
                border = "0px inset yellow";
                zIndex = "1";
                position = "absolute";
                overflowX = "scroll";
                overflowY = "hidden"
            }
            onscroll = function(elm, id) {
                horizScroll(this, areaid)
            }
        }
        var dhdiv = document.createElement("DIV");
        with (dhdiv) {
            id = areaid + "_dhbar";
            with (style) {
                height = "10";
                width = totwidth - 17;
                position = "relative";
                border = "0px inset red"
            }
        }
        hdiv.appendChild(dhdiv);
        area.appendChild(hdiv);
        if (dhdiv.offsetWidth < hdiv.offsetWidth) {
            hdiv.style.visibility = "hidden"
        }
    }
    var cdiv = null;
    if (arrData[arrCol[0]]) {
        arrFootNote.counter = ftNote[0] + " " + arrData[arrCol[0]].length + " " + ftNote[1] + " " + (nbrec != null ? nbrec : arrData[arrCol[0]].length) + " " + ftNote[2]
    }
    var vstr = "";
    for (var i = 0; i < arrSearch.length; i++) {
        if (arrSearch[i][4] == 1 && arrSearch[i][1] != "") {
            if (vstr != "") {
                vstr += (filopr ? ", " : " or ")
            }
            if (arrSearch[i][2] == "sdate" && arrSearch[i][6].match(/[,]/gi) != null) {
                vstr += arrSearch[i][5] + " " + ftAre + " " + arrSearch[i][6]
            } else {
                vstr += arrSearch[i][5] + " " + ftIs + " " + arrSearch[i][6]
            }
            var spinq = $sf("spinq_" + areaid + "_" + (i + 1));
            if (spinq != null) {
                spinq.innerHTML = '<img src="' + imgcpath + 'temp/inquiry.png" height="13" hspace="2" border="0" align="absbottom">';
                spinq.title = arrSearch[i][6]
            }
        } else {
            var spinq = $sf("spinq_" + areaid + "_" + (i + 1));
            if (spinq != null) {
                spinq.innerHTML = "";
                spinq.title = ""
            }
        }
        sortImg(i + 1, " asc", false);
        sortImg(i + 1, " desc", false);
        if (arrSearch[i][3] != "") {
            sortImg(i + 1, arrSearch[i][3], true)
        }
    }
    if (vstr != "") {
        arrFootNote.filter = "Filter: " + vstr.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    var invalidColumn = ",";
    for (var i = 0; i <= arrCol.length; i++) {
        var colid = "data_" + areaid + "_" + i;
        var cdiv = $sf(colid);
        if (arrSearch.length <= i && i < arrCol.length) {
            arrSearch[i] = new Array();
            arrSearch[i][0] = arrCol[i];
            arrSearch[i][1] = "";
            arrSearch[i][2] = arrType[i].split("~")[0];
            arrSearch[i][3] = "";
            arrSearch[i][4] = 0;
            arrSearch[i][5] = arrHeader[i];
            arrSearch[i][6] = ""
        }
        if (cdiv == null) {
            var cdiv = document.createElement("DIV");
            var vhead = $sf(areaid + "_" + i);
            with (cdiv) {
                id = colid;
                className = "coldata";
                with (style) {
                    if (i > 0) {
                        left = parseInt(vhead.offsetLeft)
                    } else {
                        left = parseInt(vhead.offsetLeft)
                    }
                    width = parseInt(vhead.offsetWidth) + spwidth;
                    top = parseInt(vhead.offsetHeight);
                    height = dataHeight
                }
            }
        } else {
            dnew = false
        }
        cntColw = cntColw + parseInt(cdiv.style.width);
        var dolid = "cdata_" + areaid + "_" + i;
        var ddiv = $sf(dolid);
        var bnew = true;
        if (ddiv == null) {
            var ddiv = document.createElement("DIV")
        } else {
            bnew = false
        }
        with (ddiv) {
            id = dolid;
            className = "ddata";
            style.width = "100%";
            var strDataCol = "";
            if (i == 0) {
                for (j = strow - 1; j < enrow; j++) {
                    strDataCol += '<tr><td class="' + (j % 2 == 0 ? "oddrow" : "evenrow") + '" id="td_' + dolid + "_" + j + '" onmouseover="hover(' + j + ',1)" onmouseout="hover(' + j + ',0)" align="center" nowrap>';
                    strDataCol += "" + (j + 1);
                    strDataCol += "</td></tr>"
                }
            } else {
                var dstyle = "";
                for (j = strow - 1; j < enrow; j++) {
                    talign = "left";
                    var sdata = "";
                    var nonval = false;
                    var pretext = "";
                    if (invalidColumn.search("," + arrCol[i - 1] + ",") >= 0) {
                        sdata = " - ";
                        talign = "center"
                    } else {
                        try {
                            var vdata = arrData[arrCol[i - 1]][j];
                            if (isArray(vdata)) {
                                if (vdata.length > 1) {
                                    if (vdata[1].search("~") >= 0) {
                                        pretext = vdata[1].split("~");
                                        if (pretext.length == 2) {
                                            pretext[1] = pretext[1].replace(/\\/gi, "");
                                            pretext = '<img src="' + imgcpath + "temp/" + pretext[0] + '" height="16" hspace="2" title="' + pretext[1] + '" align="absmiddle">'
                                        } else {
                                            pretext = pretext[0]
                                        }
                                    } else {
                                        pretext = vdata[1];
                                        pretext = '<img src="' + imgcpath + "temp/" + pretext + '" height="16" hspace="2" align="absmiddle">'
                                    }
                                } else {
                                    pretext = vdata[1]
                                }
                                vdata = vdata[0]
                            }
                            if (arrCol[i - 1] && arrCol[i - 1].toLowerCase() == "req_flag") {
                                if (vdata != 1) {
                                    vdata = '<img src="' + imgcpath + "temp/datasts_" + vdata + '.png" align="absmiddle" hspace="2" border="0">'
                                } else {
                                    vdata = ""
                                }
                                nonval = true
                            }
                            sdata = vdata
                        } catch (e) {
                            sdata = " - ";
                            talign = "center";
                            if (gridFields != null) {
                                if (gridFields[i - 1]["LABEL"]) {
                                    sdata = gridFields[i - 1]["LABEL"];
                                    nonval = true
                                } else {
                                    if (gridFields[i - 1]["ICON"]) {
                                        sdata = '<img src="' + imgcpath + "temp/" + gridFields[i - 1]["ICON"] + '" class="button">';
                                        dstyle = 'style="padding:0px;"';
                                        nonval = true
                                    }
                                }
                            }
                            if (sdata == " - ") {
                                invalidColumn += arrCol[i - 1] + ","
                            }
                        }
                    }
                    if (sdata != " - ") {
                        if (!nonval) {
                            sdata = eschar("" + vdata)
                        }
                        if (gridFields != null) {
                            if (gridFields[i - 1]["LOOKUP"]) {
                                var splitpipe = gridFields[i - 1]["LOOKUP"].split("|");
                                for (var ks = 0; ks < splitpipe.length; ks++) {
                                    var splitequal = splitpipe[ks].split("=");
                                    if (splitequal[1] == sdata) {
                                        sdata = "" + ks
                                    }
                                }
                                ddata = getLookUp(gridFields[i - 1]["LOOKUP"], sdata, "|");
                                ddata = ddata.replace(/\\/gi, "");
                                if (gridFields[i - 1]["LOOKUPICON"]) {
                                    sicon = getLookUp(gridFields[i - 1]["LOOKUPICON"], sdata, "|");
                                    if (gridFields[i - 1]["ALIGN"]) {
                                        talign = gridFields[i - 1]["ALIGN"]
                                    } else {
                                        talign = "center"
                                    }
                                    if (sicon != "") {
                                        sdata = '<img src="' + imgcpath + "temp/" + sicon + '" class="" title="' + ddata + '" hspace="2" alt="' + ddata + '">';
                                        dstyle = 'style="padding:0px;"';
                                        nonval = true
                                    } else {
                                        sdata = ddata;
                                        dstyle = ""
                                    }
                                } else {
                                    sdata = ddata
                                }
                            } else {
                                if (gridFields[i - 1]["LISTSOURCE"]) {
                                    try {
                                        var ardata = eval("arr" + (gridFields[i - 1]["LISTSOURCE"].replace(/[.]/gi, "")).toUpperCase());
                                        sdata = getLookUp(ardata, sdata, "|")
                                    } catch (e) {}
                                } else {
                                    if (gridFields[i - 1]["CONDITION"]) {
                                        if (gridFields[i - 1]["ICON"]) {
                                            nonval = true;
                                            if (vdata !== "") {
                                                sdata = '<img src="' + imgcpath + "temp/" + gridFields[i - 1]["ICON"] + '" class="button">';
                                                dstyle = 'style="padding:0px;"';
                                                talign = "center"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (vdata == "****") {
                            vdata = vdata
                        } else {
                            if (arrType.length) {
                                if (arrType[i - 1].substring(0, 8) == "datetime" || arrType[i - 1].substring(0, 9) == "sdatetime") {
                                    if (vdata != null) {
                                        var fdate = arrTypeExt[i - 1].split("~");
                                        try {
                                            sdata = vdata.format(fdate.length == 3 ? fdate[1] + "" + fdate[2] : String(date_output_mask) + " " + String(time_format))
                                        } catch (err) {
                                            sdata = vdata
                                        }
                                    } else {
                                        sdata = ""
                                    }
                                    talign = "center"
                                } else {
                                    if (arrType[i - 1].substring(0, 4) == "date" || arrType[i - 1].substring(0, 5) == "sdate" || arrType[i - 1].substring(0, 4) == "time") {
                                        var fdate = arrTypeExt[i - 1].split("~");
                                        var dformat = (fdate.length == 2 ? fdate[1].replace(/;/gi, ",") : (arrType[i - 1].substring(0, 4) == "time" ? time_format : date_output_mask));
                                        if (dformat == "" && fdate.length == 2) {
                                            dformat = (arrType[i - 1].substring(0, 4) == "time" ? time_format : date_output_mask)
                                        }
                                        if (vdata != null && vdata != "") {
                                            if (!isNaN(vdata)) {
                                                if (arrType[i - 1].substring(0, 4) != "time") {
                                                    vdata = new Date(dateToStringJS(vdata.format("mm/dd/yyyy"), null, null, calendar_format))
                                                }
                                                sdata = vdata.format(dformat)
                                            } else {
                                                sdata = vdata
                                            }
                                        } else {
                                            sdata = ""
                                        }
                                        talign = "center"
                                    } else {
                                        if (arrType[i - 1].substring(0, 5) == "money" || arrType[i - 1].substring(0, 6) == "smoney") {
                                            if (vdata != null && vdata !== "") {
                                                symbol = "";
                                                var decimalcount = 0;
                                                var moneyvar = arrType[i - 1].split("~");
                                                var moneytemp = arrType[i - 1].split(":");
                                                if (moneyvar.length > 1) {
                                                    for (var z = 0; z < gridFields.length; z++) {
                                                        if (gridFields[z].FIELD == moneyvar[1]) {
                                                            break
                                                        }
                                                    }
                                                    decimalcount = getLookUp(arrMONEY, arrData[arrCol[z]][j], "|");
                                                    sdata = moneyFormat(sdata, symbol, decimalcount, thousand_separator, decimal_separator);
                                                    talign = "right"
                                                } else {
                                                    if (moneytemp.length > 1) {
                                                        decimalcount = getLookUp(arrMONEY, moneytemp[1], "|");
                                                        sdata = moneyFormat(sdata, symbol, decimalcount, thousand_separator, decimal_separator);
                                                        talign = "right"
                                                    } else {
                                                        if (moneytemp.length == 1 && default_currency != "") {
                                                            moneytemp.push(default_currency);
                                                            decimalcount = getLookUp(arrMONEY, moneytemp[1], "|");
                                                            sdata = moneyFormat(sdata, symbol, decimalcount, thousand_separator, decimal_separator);
                                                            talign = "right"
                                                        } else {
                                                            arrType[i - 1] = "numeric"
                                                        }
                                                    }
                                                }
                                            } else {
                                                sdata = (sdata.length > 0 ? sdata : "");
                                                talign = "right"
                                            }
                                        } else {
                                            if (arrType[i - 1].substring(0, 7) == "numeric" || arrType[i - 1].substring(0, 8) == "snumeric") {
                                                if (vdata != null) {
                                                    symbol = "";
                                                    var numbervar = arrType[i - 1].split("~");
                                                    if (numbervar.length > 1) {
                                                        var numbertemp = numbervar[1].search(/\./i);
                                                        if (numbertemp != -1) {
                                                            decimalcount = numbervar[1].length - numbertemp - 1
                                                        }
                                                    } else {
                                                        var numbertemp = numeric_format.search(/\./i);
                                                        if (numbertemp != -1) {
                                                            decimalcount = numeric_format.length - numbertemp - 1
                                                        }
                                                    }
                                                    sdata = moneyFormat(sdata, symbol, decimalcount, thousand_separator, decimal_separator);
                                                    talign = "right"
                                                }
                                            } else {
                                                if (arrType[i - 1].substring(0, 7) == "integer" || arrType[i - 1].substring(0, 8) == "sinteger") {
                                                    if (vdata != null) {
                                                        symbol = "";
                                                        var decimalcount = 0;
                                                        sdata = moneyFormat(sdata, symbol, decimalcount, thousand_separator, decimal_separator);
                                                        talign = "right"
                                                    }
                                                } else {
                                                    if (arrType[i - 1] == "email" || arrType[i - 1] == "semail") {
                                                        if (vdata != null) {
                                                            sdata = '<a href="mailto:' + sdata + '">' + sdata + "</a>"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (typeObj(vdata) == "Date") {
                                    if (vdata != null) {
                                        sdata = new Date(dateToStringJS(vdata.format("mm/dd/yyyy"), null, null, calendar_format))
                                    } else {
                                        sdata = ""
                                    }
                                    talign = "center"
                                } else {
                                    if (!isNaN(vdata)) {
                                        sdata = moneyFormat(sdata);
                                        talign = "right"
                                    }
                                }
                            }
                        }
                        if (vdata == "****") {
                            vdata = vdata
                        } else {
                            if (arrLink.length >= i) {
                                if (arrLink[i - 1] != "") {
                                    var vlink = arrLink[i - 1].split(":");
                                    if (vlink.length >= 2) {
                                        var linkdata = getDataInfo(vlink[1], arrData, j);
                                        var itheName = "popWin";
                                        var itheWidth = "500";
                                        var itheHeight = "400";
                                        var itheProp = null;
                                        var arrlinkdata = linkdata.split("~");
                                        if (arrlinkdata.length > 1) {
                                            if (arrlinkdata[1]) {
                                                itheName = arrlinkdata[1]
                                            }
                                            if (arrlinkdata[2]) {
                                                itheWidth = arrlinkdata[2]
                                            }
                                            if (arrlinkdata[3]) {
                                                itheHeight = arrlinkdata[3]
                                            }
                                            if (arrlinkdata[4]) {
                                                itheProp = "'" + arrlinkdata[4] + "'"
                                            }
                                        }
                                        linkdata = arrlinkdata[0];
                                        linkdata = linkdata.replace(/%26lt%3B/g, "<").replace(/%26gt%3B/g, ">").replace(/%26amp%3B/g, "%26");
                                        linkdata = linkdata.replace(/%/g, "%25").replace(/%2526nbsp%253B/g, " ");
                                        var linktitle = (vlink.length >= 3 ? getDataInfo(vlink[2], arrData, j, false).replace("&colon;", ":") : "");
                                        if (linkdata == "nolink" || sdata.split("!!!")[1] == "@nolink@") {
                                            arrSdata = sdata.split("!!!");
                                            arrSdata.splice(-1, 1);
                                            sdata = arrSdata.join("!!!")
                                        } else {
                                            if (vlink[0].toLowerCase() == "link") {
                                                if (linkdata.search("javascript") < 0) {
                                                    linkdata = "javascript:redir('" + linkdata + "');"
                                                }
                                                sdata = '<a href="' + linkdata + '" class="alink" title="' + linktitle + '">' + sdata + "</a>"
                                            } else {
                                                if (vlink[0].toLowerCase() == "pop") {
                                                    sdata = "<a href=\"javascript:popWindow('" + linkdata + "','" + itheName + "'," + itheWidth + "," + itheHeight + "," + itheProp + ');" class="alink" title="' + linktitle + '">' + sdata + "</a>"
                                                } else {
                                                    if (vlink[0].toLowerCase() == "innerpop") {
                                                        sdata = "<a href=\"javascript:innerPop('" + linkdata + '\',reposBlock);" class="alink" title="' + linktitle + '">' + sdata + "</a>"
                                                    } else {
                                                        if (vlink[0].toLowerCase() == "print") {
                                                            sdata = "<a href=\"javascript:popPrint('" + linkdata + '\');" class="alink" title="' + linktitle + '">' + sdata + "</a>"
                                                        } else {
                                                            if (vlink[0].toLowerCase() == "js") {
                                                                sdata = '<a href="javascript:' + linkdata + '" class="alink" title="' + linktitle + '">' + sdata + "</a>"
                                                            } else {
                                                                if (vlink[0].toLowerCase() == "ajax") {
                                                                    sdata = "<a href=\"javascript:getAJAXContent('" + linkdata + '\',\'spAjax\');" class="alink" title="' + linktitle + '">' + sdata + "</a>"
                                                                } else {
                                                                    if (vlink[0].toLowerCase() == "tipinfo") {
                                                                        strInfoTip = " onmousedown=\"cInfoTip('ach_" + dolid + "_" + j + "'," + j + ",'" + gridFields[i - 1]["INFOTIP"] + "');\" ";
                                                                        achid = "ach_" + dolid + "_" + j;
                                                                        sdata = '<a href="javascript:void(0);" ' + strInfoTip + ' class="alink" id="' + achid + '" title="' + linktitle + '">' + sdata + "</a>"
                                                                    } else {
                                                                        if (vlink[0].toLowerCase() == "mobileinfo") {
                                                                            strInfoTip = " onmousedown=\"cInfoTip('ach_" + dolid + "_" + j + "'," + j + ",'" + gridFields[i - 1]["SHOWMOBILE"] + "');\" ";
                                                                            achid = "ach_" + dolid + "_" + j;
                                                                            sdata = '<a href="javascript:void(0);" ' + strInfoTip + ' class="alink" id="' + achid + '" title="' + linktitle + '">' + sdata + "</a>"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (typeof gridFields[i - 1]["TIP"] === "undefined") {
                            var tipp = ""
                        } else {
                            var tipp = gridFields[i - 1]["TIP"]
                        }
                        strDataCol += '<tr><td class="' + (j % 2 == 0 ? "oddrow" : "evenrow") + '" id="td_' + dolid + "_" + j + '" align="' + talign + '" ' + dstyle + ' onmouseover="hover(' + j + ',1)" onmouseout="hover(' + j + ',0)" title="' + tipp + '" nowrap="nowrap">' + pretext + sdata + "</td></tr>"
                    }
                }
            }
            if (bnew || strow == 1) {
                if (strDataCol != "") {
                    strDataCol = '<table cellpadding="0" cellspacing="0" width="100%"><tbody id="tbody_' + dolid + '">' + strDataCol + "</tbody></table>"
                }
                innerHTML = strDataCol
            } else {
                if (strDataCol != "") {
                    if (bwtype == "IE") {
                        strDataCol = '<table cellpadding="0" cellspacing="0" width="100%"><tbody id="tbody_' + dolid + '">' + ddiv.childNodes[0].childNodes[0].innerHTML + strDataCol + "</tbody></table>";
                        innerHTML = strDataCol
                    } else {
                        ddiv.childNodes[0].childNodes[0].innerHTML = ddiv.childNodes[0].childNodes[0].innerHTML + strDataCol
                    }
                }
            }
        }
        if (dnew) {
            cdiv.appendChild(ddiv)
        }
        if (cnew) {
            odiv.appendChild(cdiv)
        }
    }
    if (arrCol.length) {
        var cheight = (ddiv != null ? ddiv.offsetHeight : dateHeight);
        var colid = "data_" + areaid + "_" + (i);
        var cdiv = $sf(colid);
        var cnew = true;
        if (cdiv == null) {
            var cdiv = document.createElement("DIV");
            area.appendChild(cdiv);
            var vhead = $sf(areaid + "_" + (i));
            with (cdiv) {
                id = colid;
                className = "colscroll";
                vscroller = new Array();
                vscroller.push(colid);
                vscroller.push("cdata_" + areaid);
                vscroller.push(i);
                arrScroller.push(vscroller);
                lang = "scroller";
                with (style) {
                    var mtbl = document.body.childNodes[0];
                    if (mtbl.tagName == null) {
                        mtbl = document.body.childNodes[1]
                    }
                    var mleft = (mtbl.tagName.toUpperCase() == "TABLE" ? parseInt(mtbl.cellPadding) : "0");
                    var mtop = mleft;
                    left = parseInt(odiv.offsetLeft) + parseInt(vhead.offsetLeft) + (bwtype == "IE" ? -2 : -5);
                    width = parseInt(vhead.offsetWidth) + (bwtype == "IE" ? 2 : 0);
                    top = parseInt(odiv.offsetTop) + parseInt(vhead.offsetHeight) + (bwtype == "IE" ? 31 + mtop : 1) + (bwtype.toLowerCase() == "chrome" ? 15 : 0);
                    height = dataHeight - (bwtype.toLowerCase() == "chrome" ? 46 : 1)
                }
                onscroll = function(elm, id, nb) {
                    dataScroll(this, "cdata_" + areaid, i)
                }
            }
        } else {
            cnew = false
        }
        var dolid = "cdata_" + areaid + "_" + (i);
        var ddiv = $sf(dolid);
        var dnew = true;
        if (ddiv == null) {
            var ddiv = document.createElement("DIV");
            cdiv.appendChild(ddiv);
            with (ddiv) {
                id = dolid;
                className = "coldatascroll";
                innerHTML = "&nbsp;";
                var hbar = $sf(areaid + "_hbar");
                style.height = cheight + (hbar.style.visibility == "hidden" ? 0 : 17)
            }
        } else {
            dnew = false
        }
    }
    if (iscomplete && popmlink != null) {
        if (popmlink.style.display == "") {
            animateShow(popmlink.childNodes[0].id, 1, 1, 0)
        }
    }
    resizeScroller();
    if (pscroller != null) {
        var vsc = $sf("data_" + areaid + "_" + pscroller);
        if (parseInt(vsc.scrollTop) > 0) {
            dataScroll(vsc, "cdata_" + areaid, pscroller)
        }
    }
    arrFilter = arrSearch.slice();
    writeFootNote();
    var dvcon1 = $sf("content");
    var dvcon2 = $sf("header");
    var dvcon3 = $sf("nav");
    var dvcon4 = $sf("wrapper");
    var viewportheight = document.documentElement.clientHeight;
    if (dvcon1 !== null && dvcon2 !== null && dvcon3 !== null && dvcon4 !== null) {
        var oheight = parseInt(dvcon2.offsetHeight) + parseInt(dvcon3.offsetHeight)
    }
    reposScroller(enrow, nbrec);
    window.enrow = enrow;
    window.nbrec = nbrec;
    cntColw = cntColw + (10 * arrCol.length) - 40;
    if (cntColw <= 980) {
        cntColw = 980
    }
    cntColwi = cntColw - 10;
    lastColw = arrCol.length + 1;
    scevert = cntColw - 24;
    cntRowh = 29 + 22 + (25 * (enrow + 2));
    cntRowhi = 25 * (enrow + 2);
    if (cntRowh <= 590) {
        cntRowh = 590
    }
    if (/Android|iPhone|iPod|iPad/.test(navigator.userAgent)) {
        top.$("#wrapper").css("width", cntColw + "px");
        $("#content-title-bc").css("width", cntColwi + "px");
        $("#touch").children()[0].width = cntColwi + "px";
        top.$("#frmSFBody").css("width", cntColw + "px");
        $("#data_ardata_1_" + lastColw).css("width", "24px");
        $("#data_ardata_1_" + lastColw).css("left", scevert + "px");
        top.$("#content").css("height", cntRowh + "px");
        for (var i = 0; i <= arrCol.length; i++) {
            $("#data_ardata_1_" + i).css("height", cntRowhi + "px")
        }
        reposScroller(enrow, nbrec)
    }
}
function getDataInfo(f, e, g, d) {
    var h = f;
    var k = /\[[a-zA-Z0-9_]+\]/gi;
    var b = /[^-a-zA-Z0-9_/' ,.\(\)\[\];&]/gi;
    var a = null;
    var c = 0;
    if (d == null) {
        d = true
    }
    while (true) {
        a = k.exec(h);
        c++;
        if (a == null || c > 1000) {
            break
        }
        var i = "" + a;
        i = i.substr(1, i.length - 2).toLowerCase();
        if (e[i] != null) {
            i = ("" + e[i][g]).replace(a, "");
            arrMdata = i.split("!!!");
            if (arrMdata.length > 1 && arrMdata[arrMdata.length - 1] == "@nolink@") {
                h = "nolink"
            }
            if (d) {
                i = encodeURI(i)
            } else {
                i = i.replace(b, "")
            }
            h = h.replace(a, i)
        } else {
            h = h.replace(a, "")
        }
        k.lastIndex = 0
    }
    return h
}
function dataScroll(d, b, a) {
    var e = $sf(b + "_" + 1);
    for (var c = 0; c < a; c++) {
        var e = $sf(b + "_" + c);
        if (e != null) {
            e.style.top = -(d.scrollTop)
        }
    }
    if (popmlink != null) {
        if (parseInt(d.scrollTop) + parseInt(d.offsetHeight) >= (parseInt(d.scrollHeight) - 1)) {
            if (!iscomplete) {
                popmlink.style.display = "";
                popmlink.style.top = parseInt(d.parentNode.offsetHeight) - parseInt(popmlink.offsetHeight) + 34;
                popmlink.style.left = parseInt(d.parentNode.offsetWidth) - parseInt(popmlink.offsetWidth) - 15;
                animateShow(popmlink.childNodes[0].id, 0, 1, 0)
            }
        } else {
            if (popmlink.style.display == "" && timer == null) {
                animateShow(popmlink.childNodes[0].id, 1, 1, 0)
            }
        }
    }
}
function reposScroller(a, s) {
    if (pscroller == null) {
        return
    }
    var h = $sf(areaid + "_" + pscroller);
    var q = $sf("data_" + areaid + "_" + pscroller);
    var t = $sf("cdata_" + areaid + "_" + pscroller);
    var d = $sf("space_" + areaid + "_" + (pscroller - 1));
    var u = $sf("data_" + areaid + "_" + (pscroller - 1));
    var g = $sf("cdata_" + areaid + "_" + (pscroller - 1));
    var o = $sf(areaid + "_hbar");
    var b = $sf(areaid);
    var n = $sf("content");
    var m = $sf("nav");
    var l = $sf("header");
    if (h == null || q == null || t == null || d == null || u == null || g == null) {
        return
    }
    var e = parseInt(d.offsetLeft) + parseInt(d.offsetWidth);
    var p = parseInt(u.offsetHeight);
    var v = parseInt(g.offsetHeight);
    var k = document.body.childNodes[0];
    if (k.tagName == null) {
        k = document.body.childNodes[1]
    }
    var i = (k.tagName.toUpperCase() == "TABLE" ? parseInt(k.cellPadding) : 0);
    var r = i;
    if (e < parseInt(h.parentNode.offsetWidth) - scrollerwidth) {
        h.style.left = (e + i + (bwtype == "IE" ? 1 : 1)) + "px";
        h.style.width = (parseInt(h.parentNode.offsetWidth) - e) + "px";
        if (opener != null) {
            h.style.top = "30px"
        } else {
            h.style.top = ((bwtype == "IE" ? 30 : (b != null && bwtype == "FF") ? b.offsetTop : area.offsetTop) + r + 1) + "px"
        }
        q.style.left = (parseInt(h.offsetLeft) + (bwtype == "IE" ? -10 : bwtype == "Safari" ? -10 : -5)) + "px";
        q.style.width = (parseInt(h.offsetWidth) + (bwtype == "FF" || bwtype == "Chrome" ? -10 : 0) + 10) + "px";
        q.style.top = (parseInt(h.offsetTop) + parseInt(h.offsetHeight) + (bwtype == "IE" ? 0 : 0)) + "px";
        q.style.height = (area.offsetHeight - h.offsetHeight - 2 + (bwtype == "IE" ? 1 : 1)) + "px"
    } else {
        if (parseInt(h.offsetLeft) != parseInt(h.parentNode.offsetWidth) - scrollerwidth || parseInt(h.offsetWidth) != scrollerwidth) {
            h.style.left = (parseInt(h.parentNode.offsetWidth) - scrollerwidth + 5) + "px";
            q.style.left = (parseInt(h.offsetLeft) + (bwtype == "IE" ? -10 : bwtype == "Safari" ? -10 : -5)) + "px";
            q.style.width = (parseInt(h.offsetWidth) + (bwtype == "IE" ? 5 : -10) + 10) + "px"
        }
        if (bwtype.toLowerCase() == "chrome") {
            q.style.top = (parseInt(q.style.top) - 100) + "px";
            q.style.height = (parseInt(q.style.height)) + "px";
            h.style.top = (parseInt(h.style.top)) + "px";
            o.style.width = (parseInt(q.offsetLeft)) + "px"
        }
        if (bwtype.toLowerCase() == "ie") {
            q.style.top = (parseInt(q.style.top) - 100) + "px";
            q.style.height = (parseInt(q.style.height)) + "px";
            h.style.top = (parseInt(h.style.top)) + "px";
            o.style.width = (parseInt(q.offsetLeft)) + "px";
            h.style.width = scrollerwidth + "px"
        }
    }
    if (n && e < parseInt(n.offsetWidth)) {
        if (bwtype.toLowerCase() == "chrome") {
            h.style.left = e + "px";
            q.style.left = e + "px";
            q.style.top = (parseInt(q.style.top) + 32) + "px";
            h.style.top = (parseInt(h.style.top) + 29) + "px"
        } else {
            h.style.left = e + "px";
            q.style.left = e + "px";
            if (b != null && bwtype.toLowerCase() == "ff") {
                q.style.top = parseInt(q.style.top) + "px";
                h.style.top = parseInt(b.offsetTop) + "px"
            } else {
                q.style.top = (parseInt(q.style.top) + 29) + "px";
                h.style.top = (parseInt(h.style.top) + 29) + "px"
            }
        }
    }
    if (o != null && q != null && h != null) {
        o.style.width = parseInt(q.style.left) + "px";
        if (bwtype.toLowerCase() == "chrome") {
            if (m) {
                h.style.top = (parseInt(m.offsetHeight) - 4) + "px"
            } else {
                h.style.top = "30px"
            }
            q.style.top = (parseInt(h.style.top) + parseInt(h.offsetHeight)) + "px";
            q.style.height = (parseInt(area.offsetHeight) - 30) + "px";
            q.style.width = "17px";
            o.style.top = (parseInt(area.offsetHeight) + 12) + "px";
            o.style.width = (parseInt(q.style.left)) + "px"
        } else {
            if (bwtype.toLowerCase() == "ie") {
                if (m) {
                    h.style.top = (parseInt(m.offsetHeight) - 4) + "px"
                } else {
                    h.style.top = "30px"
                }
                q.style.top = (parseInt(h.style.top) + parseInt(h.offsetHeight)) + "px";
                q.style.width = "17px";
                q.style.left = (parseInt(area.offsetWidth) - 17) + "px";
                o.style.top = (parseInt(area.offsetHeight) + 12) + "px";
                o.style.width = (parseInt(q.style.left)) + "px"
            } else {
                o.style.top = (parseInt(q.offsetTop) + parseInt(q.offsetHeight) - 17) + "px"
            }
        }
        o.scrollLeft = 0;
        var w = o.childNodes[0];
        var c = q.childNodes[0];
        w.style.width = (parseInt(d.offsetWidth) + parseInt(d.offsetLeft) + 1) + "px";
        if (w.offsetWidth > parseInt(q.offsetLeft)) {
            if (o.style.visibility == "hidden") {
                c.style.height = (parseInt(c.offsetHeight) + 17) + "px"
            }
            o.style.visibility = "visible";
            if (parseInt(o.offsetLeft) + parseInt(o.offsetWidth) < parseInt(area.offsetWidth) - 18) {
                h.style.left = (parseInt(o.offsetLeft) + parseInt(o.offsetWidth)) + "px";
                q.style.left = (parseInt(area.offsetWidth) - 17) + "px";
                q.style.width = "17px";
                o.style.width = (parseInt(q.style.left)) + "px"
            } else {
                h.style.left = (parseInt(area.offsetWidth) - 17) + "px";
                if (m) {
                    h.style.top = (parseInt(m.offsetHeight) - 4) + "px"
                }
                if (b != null && bwtype == "FF") {
                    h.style.top = (parseInt(b.offsetTop)) + "px"
                } else {
                    h.style.top = "30px"
                }
                q.style.top = (parseInt(h.style.top) + parseInt(h.offsetHeight)) + "px";
                q.style.left = (parseInt(area.offsetWidth) - 17) + "px";
                q.style.width = "17px";
                o.style.width = (parseInt(q.style.left)) + "px"
            }
            h.style.zIndex = 0
        } else {
            if (o.style.visibility == "visible") {
                o.style.visibility = "hidden";
                b.style.left = "0px";
                c.style.height = (parseInt(c.offsetHeight) - 17) + "px";
                h.style.zIndex = 1
            }
        }
    }
    if (e < parseInt(area.offsetWidth)) {
        o.style.visibility = "hidden"
    } else {
        o.style.visibility = "visible"
    }
    var f = document.getElementById("popmorelink");
    if ((a * 25 < parseInt(q.style.height)) && (a < s)) {
        f.style.display = "block";
        f.style.top = parseInt(area.offsetHeight) - parseInt(f.offsetHeight) + 34;
        f.style.left = parseInt(area.offsetWidth) - parseInt(f.offsetWidth) - 17;
        document.getElementById("divmlink").style.display = "block";
        animateShow(f.childNodes[0].id, 0, 1, 0)
    } else {
        if (((parseInt(q.style.height) < parseInt(t.style.height)) || a == s) && f.style.display == "block") {
            animateShow(f.childNodes[0].id, 1, 1, 0)
        }
    }
}
function hover(a, d) {
    var e = "";
    for (var b = 0; b <= arrCol.length; b++) {
        var c = $sf("td_cdata_" + areaid + "_" + b + "_" + a);
        if (c != null) {
            if (d) {
                c.lang = c.className;
                c.className = "selrow";
                e += "," + b
            } else {
                c.className = c.lang
            }
        }
    }
    prevrow = a
}
function hidemore() {
    if (popmlink != null) {
        if (popmlink.style.display == "") {
            popmlink.style.display = "none"
        }
    }
}
function resizeWindow() {
    var d = $sf(areaid + "_0");
    var a = parseInt(area.offsetHeight) - parseInt(d.offsetHeight);
    var c = null;
    var f = 0;
    timer = null;
    if (popmlink != null) {
        if (popmlink.style.display == "") {
            popmlink.style.display = "none";
            timer = setTimeout("resizeWindow();", 1000);
            return
        }
    }
    for (var b = 0; b <= 100; b++) {
        var e = $sf("data_" + areaid + "_" + b);
        if (e != null) {
            e.style.height = a;
            if (parseInt(e.childNodes[0].offsetTop) + parseInt(e.childNodes[0].offsetHeight) < a) {
                e.childNodes[0].style.top = Math.min(0, a - parseInt(e.childNodes[0].offsetHeight))
            }
            if (c != null) {
                f = parseInt(c.offsetLeft) + parseInt(c.offsetWidth)
            }
            c = e
        } else {
            break
        }
    }
    reposScroller(enrow, nbrec);
    if (divBlockSpace != null) {}
}
function adjustPopScroll(d, c, f, g, b) {
    if (d == 2 && c != null) {
        var e = Math.min(c, parseInt(f.offsetHeight) + parseInt(f.offsetTop));
        if (e > parseInt(f.parentNode.offsetHeight) || b) {
            f.parentNode.style.height = e + (bwtype == "IE" ? 4 : 0);
            if (g != null) {
                var a = $sf(g);
                if (a != null) {
                    if (a.style.display == "none") {
                        a.style.width = parseInt(f.parentNode.offsetWidth);
                        a.style.right = 45
                    }
                    a.style.display = "";
                    a.style.top = parseInt(f.parentNode.offsetTop) + parseInt(f.parentNode.offsetHeight)
                }
            }
        }
    }
}
function animateShow(c, a, e, d, k, h, g, b) {
    var f = $sf(c);
    if (k == null) {
        k = 10
    }
    if (h == null) {
        h = 100
    }
    if (d == null) {
        d = 1
    }
    if (e == null) {
        e = 0
    }
    timer = null;
    if (f == null) {
        return
    }
    if (a) {
        if (f.style.display == "none" || e) {
            f.style.display = "";
            f.style.top = (d ? -parseInt(f.offsetHeight) : 0);
            f.style.width = parseInt(f.parentNode.offsetWidth);
            adjustPopScroll(d, g, f, b, true);
            timer = setTimeout("animateShow('" + c + "'," + a + ",null," + d + "," + k + "," + h + "," + g + ",'" + b + "')", h)
        } else {
            if (d) {
                if (parseInt(f.offsetTop) < 0) {
                    k = Math.min(k, -parseInt(f.offsetTop));
                    f.childNodes[0].style.width = parseInt(f.parentNode.offsetWidth);
                    f.style.top = parseInt(f.offsetTop) + k;
                    adjustPopScroll(d, g, f, b);
                    timer = setTimeout("animateShow('" + c + "'," + a + ",null," + d + "," + k + "," + h + "," + g + ",'" + b + "')", h)
                } else {
                    f.style.top = 0;
                    var l = c.split("_");
                    l = l[l.length - 1];
                    var i = $sf("txtSearch_" + l);
                    if (i != null) {
                        if (bwtype == "IE") {
                            i.style.width = "10px";
                            f.style.width = parseInt(f.parentNode.offsetWidth);
                            i.style.width = parseInt(i.parentNode.offsetWidth)
                        } else {
                            i.style.width = "100%"
                        }
                        i.focus();
                        i.select()
                    }
                }
            } else {
                if (parseInt(f.offsetTop) + k < parseInt(f.offsetHeight)) {
                    f.style.top = parseInt(f.offsetTop) + k;
                    timer = setTimeout("animateShow('" + c + "'," + a + ",null," + d + "," + k + "," + h + "," + g + ",'" + b + "')", h)
                } else {
                    f.style.top = parseInt(f.offsetHeight);
                    f.style.display = "none";
                    f.parentNode.style.display = "none"
                }
            }
        }
    } else {
        if (f.style.display == "none" || e) {
            f.style.display = "";
            f.style.top = (d ? 0 : parseInt(f.parentNode.offsetHeight));
            f.style.width = parseInt(f.parentNode.offsetWidth);
            adjustPopScroll(d, g, f, b, true);
            timer = setTimeout("animateShow('" + c + "'," + a + ",null," + d + "," + k + "," + h + "," + g + ",'" + b + "')", h)
        } else {
            if (d) {
                if (parseInt(f.offsetTop) + parseInt(f.offsetHeight) - k > 0) {
                    f.style.top = parseInt(f.offsetTop) - k;
                    adjustPopScroll(d, g, f, b, true);
                    timer = setTimeout("animateShow('" + c + "'," + a + ",null," + d + "," + k + "," + h + "," + g + ",'" + b + "')", h)
                } else {
                    f.style.top = -parseInt(f.offsetHeight);
                    f.style.display = "none";
                    f.parentNode.style.display = "none";
                    if (b != null) {
                        var m = $sf(b);
                        if (m != null) {
                            m.style.display = "none"
                        }
                    }
                }
            } else {
                if (parseInt(f.offsetTop) - k > 0) {
                    f.style.top = parseInt(f.offsetTop) - k;
                    timer = setTimeout("animateShow('" + c + "'," + a + ",null," + d + "," + k + "," + h + "," + g + ",'" + b + "')", h)
                } else {
                    f.style.top = 0
                }
            }
        }
    }
}
function resizeScroller() {
    if (pscroller == null) {
        return
    }
    var d = null;
    var b = $sf("cdata_" + areaid + "_" + (pscroller - 1));
    var c = $sf(areaid + "_hbar");
    if (b != null) {
        d = parseInt(b.offsetHeight)
    }
    var a = $sf("cdata_" + areaid + "_" + pscroller);
    if (d != null && d != parseInt(a.offsetHeight)) {
        if (parseInt(b.offsetTop) + d < parseInt(b.parentNode.offsetHeight)) {
            for (var e = 0; e < pscroller; e++) {
                var f = $sf("cdata_" + areaid + "_" + e);
                if (f != null) {
                    f.style.top = "0"
                }
            }
        }
        a.style.height = d + (c.style.visibility == "hidden" ? 0 : 17)
    }
}
function showSearch(b, h, f) {
    var c = $sf("s_" + areaid + "_" + h);
    var k = $sf("space_" + areaid + "_" + h);
    var i = $sf(areaid);
    if (c != null) {
        var d = (f == null ? (c.style.display == "" ? "none" : "") : (f ? "" : "none"));
        if (f == null && opensearch != null && d == "") {
            if (opensearch.id != c.id) {
                var e = opensearch.childNodes[1].id;
                var a = opensearch.id.split("_");
                a = a[a.length - 1];
                var g = $sf("txtSearch_" + a);
                if (g.value == "") {
                    arrSearch[a - 1][4] = 1;
                    animateShow(e, 0, 1)
                }
            }
        }
        var e = c.childNodes[1].id;
        if (d == "") {
            if (c.style.display != d) {
                c.style.display = d;
                c.style.top = parseInt(b.offsetTop) + (bwtype == "FF" ? 60 : (bwtype == "IE" ? 57 : 61));
                c.style.width = (Math.max(70, parseInt(k.offsetLeft) - parseInt(b.offsetLeft) + 3)) + "px";
                c.style.left = (parseInt(b.offsetLeft) + parseInt(i.offsetLeft) + 7) + "px";
                c.style.height = "100px";
                opensearch = c;
                animateShow(e, 1, 1)
            }
            arrSearch[h - 1][4] = 1
        } else {
            if (arrFilter[h - 1][4] == 1) {
                fsearch = false
            }
            arrSearch[h - 1][4] = 0;
            animateShow(e, 0, 1)
        }
    }
}
function validateInput(b, a) {
    switch (a) {
    case "smoney":
        return validateRange(b);
        break;
    case "money":
        return isMoney(b);
        break;
    case "sdate":
        return validateDateRange(b);
        break;
    case "date":
        return isDate(b);
        break;
    default:
        return validateString(b)
    }
}
function parseForm(frm, vdoc, arrF) {
    var vsearch = "";
    if (vdoc == null) {
        vdoc = document
    }
    if (arrF == null) {
        arrF = vdoc.arrSearch
    }
    for (var i = 0; i < arrF.length; i++) {
        var velm = eval("frm.inp_" + arrF[i][0]);
        if (velm != null) {
            if (velm.length != null) {
                var stype = velm[0].type
            } else {
                var stype = velm.type
            }
            switch (stype) {
            case "text":
            case "hidden":
            case "password":
            case "textarea":
            case "select-one":
            case "file":
                if (velm.value != "") {
                    arrF[i][1] = velm.value;
                    if (arrF[i][2] == "sdate" || arrF[i][2] == "date") {
                        arrF[i][1] = dateToStringJS(arrF[i][1], null, date_output_mask, calendar_format)
                    }
                    arrF[i][4] = 1;
                    vsearch += "&" + arrF[i][0] + "=" + arrF[i][1];
                    var vsch = $sf("txtSearch_" + (i + 1), vdoc);
                    if (vsch != null) {
                        vsch.value = arrF[i][1]
                    }
                } else {
                    arrF[i][1] = "";
                    arrF[i][4] = 0;
                    var vsch = $sf("txtSearch_" + (i + 1), vdoc);
                    if (vsch != null) {
                        vsch.value = ""
                    }
                }
                break;
            case "checkbox":
                var vval = "";
                if (velm.length == null) {
                    velm[0] = velm
                }
                for (var j = 0; j < velm.length; j++) {
                    if (velm[j].checked && velm[j].value != "") {
                        vval += "," + velm[j].value
                    }
                }
                if (vval != "") {
                    vval = vval.substr(1);
                    arrF[i][1] = vval;
                    arrF[i][4] = 1;
                    vsearch += "&" + arrF[i][0] + "=" + arrF[i][1];
                    var vsch = $sf("txtSearch_" + (i + 1), vdoc);
                    if (vsch != null) {
                        vsch.value = arrF[i][1]
                    }
                } else {
                    arrF[i][1] = "";
                    arrF[i][4] = 0;
                    var vsch = $sf("txtSearch_" + (i + 1), vdoc);
                    if (vsch != null) {
                        vsch.value = ""
                    }
                }
                break;
            case "radio":
                if (velm.length == null) {
                    velm[0] = velm
                }
                arrF[i][1] = "";
                for (var j = 0; j < velm.length; j++) {
                    if (velm[j].checked && (velm[j].value != "" || velm[j].lang != "")) {
                        arrF[i][1] = (velm[j].value != "" ? velm[j].value : velm[j].lang);
                        arrF[i][4] = 1;
                        vsearch += "&" + arrF[i][0] + "=" + arrF[i][1];
                        var vsch = $sf("txtSearch_" + (i + 1), vdoc);
                        if (vsch != null) {
                            vsch.value = arrF[i][1]
                        }
                        break
                    }
                }
                if (arrF[i][1] == "") {
                    arrF[i][4] = 0;
                    var vsch = $sf("txtSearch_" + (i + 1), vdoc);
                    if (vsch != null) {
                        vsch.value = ""
                    }
                }
                break;
            case "select-multiple":
                var vval = "";
                for (var j = 0; j < velm.options.length; j++) {
                    if (velm.options[j].selected && velm.options[j].value != "") {
                        vval += "," + velm.options[j].value
                    }
                }
                if (vval != "") {
                    vval = vval.substr(1);
                    arrF[i][1] = vval;
                    arrF[i][4] = 1;
                    vsearch += "&" + arrF[i][0] + "=" + arrF[i][1];
                    var vsch = $sf("txtSearch_" + (i + 1), vdoc);
                    if (vsch != null) {
                        vsch.value = arrF[i][1]
                    }
                } else {
                    arrF[i][1] = "";
                    arrF[i][4] = 0;
                    var vsch = $sf("txtSearch_" + (i + 1), vdoc);
                    if (vsch != null) {
                        vsch.value = ""
                    }
                }
            }
        }
        if (arrF[i][3] != "" && frm.fsort != null) {
            frm.fsort.value = arrF[i][0] + arrF[i][3]
        }
    }
    return vsearch
}
function filterSubmit(k) {
    hasfilter = false;
    var e = 0;
    for (var d = 0; d < arrSearch.length; d++) {
        if (arrSearch[d][3] == "filter") {
            hasfilter = true;
            break
        }
    }
    if (!hasfilter) {
        var d = arrSearch.length
    }
    var l = form2query(k, "input_", true);
    var b = null;
    var g = null;
    for (var c = 0; c < l[0].length; c++) {
        var a = l[1][c].split("=")[0];
        var f = $sf(a);
        if (!f) {
            continue
        }
        if (a.substr(0, 4) == "cal_") {
            b = l[0][c]
        } else {
            if (a.substr(0, 4) == "inp_") {
                g = (b ? b : l[0][c]);
                if (!hasfilter) {
                    arrSearch[d] = new Array();
                    arrSearch[d][0] = a;
                    arrSearch[d][2] = "";
                    arrSearch[d][3] = "filter";
                    var h = f.parentNode.parentNode.childNodes[0].childNodes[0].innerHTML;
                    arrSearch[d][5] = h
                }
                arrSearch[d][1] = l[1][c].split("=")[1];
                arrSearch[d][6] = g;
                if (arrSearch[d][1] != "") {
                    arrSearch[d][4] = 1;
                    selm = f;
                    e = d
                } else {
                    arrSearch[d][4] = 0
                }
                b = null;
                d++
            }
        }
    }
    arrFilter = arrSearch.slice();
    if (selm) {
        checkSubmit(null, selm, e + 1, false)
    }
}
function checkSubmit(A, l, g, c) {
    if (isubmit) {
        window.status = "Still waiting from submission";
        return
    }
    if (c == null) {
        c = true
    }
    var a = null;
    var b = false;
    if (!c) {
        a = l
    } else {
        if (l.type == "text") {
            var A = window.event ? event : A;
            var m = A.charCode ? A.charCode : A.keyCode;
            if (arrSearch.length >= g) {
                arrSearch[g - 1][1] = l.value;
                arrSearch[g - 1][6] = arrSearch[g - 1][1];
                if (m == 13) {
                    a = l;
                    if (a.value == "") {
                        for (var y = 0; y < arrFilter.length; y++) {
                            if (arrFilter[y][1] != "") {
                                b = true;
                                break
                            }
                        }
                    }
                }
            }
        } else {
            if (l.id != null) {
                var a = $sf(l.id.substring(4))
            }
        }
    }
    if (a != null) {
        if (arrSearch.length >= g) {
            if (arrSearch[g - 1][3] != "filter") {
                arrSearch[g - 1][1] = a.value;
                arrSearch[g - 1][6] = arrSearch[g - 1][1]
            }
            if (a.value != "" || hassearch) {
                var r = validateInput(a.value, arrSearch[g - 1][2]);
                if (r || hassearch) {
                    isubmit = true;
                    if (arrSearch[g - 1][2] == "date") {
                        var x = stringToDateJS(arrSearch[g - 1][1], date_input_mask, "mm/dd/yyyy", calendar_format);
                        if (!x) {
                            isubmit = false
                        }
                        var f = arrSearch[g - 1][0] + "=" + encodeURIComponent(x)
                    } else {
                        if (arrSearch[g - 1][2] == "datetime") {
                            var x = stringToDateJS(arrSearch[g - 1][1], date_input_mask, "mm/dd/yyyy", calendar_format);
                            if (!x) {
                                isubmit = false
                            }
                            var f = arrSearch[g - 1][0] + "=" + encodeURIComponent(x)
                        } else {
                            if (arrSearch[g - 1][2] == "sdate") {
                                var B = "";
                                if (arrSearch[g - 1][1].match(/[,]/gi) != null) {
                                    var h = new Array();
                                    var C = new Array();
                                    var h = arrSearch[g - 1][1].split(",");
                                    for (var y = 0; y < h.length; y++) {
                                        h[y] = h[y].replace(/[^-0-9., \/]/gi, "");
                                        C[y] = stringToDateJS(h[y], date_input_mask, "mm/dd/yyyy", calendar_format);
                                        if (!C[y]) {
                                            isubmit = false
                                        }
                                        B += C[y];
                                        if (y != h.length - 1) {
                                            B += ","
                                        }
                                    }
                                    var f = arrSearch[g - 1][0] + "=" + encodeURIComponent(B)
                                } else {
                                    var h = new Array();
                                    var C = new Array();
                                    var h = arrSearch[g - 1][1].split("-");
                                    for (var y = 0; y < h.length; y++) {
                                        h[y] = h[y].replace(/[^-0-9., \/]/gi, "");
                                        C[y] = stringToDateJS(h[y], date_input_mask, "mm/dd/yyyy", calendar_format);
                                        if (!C[y]) {
                                            isubmit = false
                                        }
                                        if (y > 0) {
                                            if (C[y - 1] > C[y]) {
                                                var o = stringToDateJS(h[y - 1], date_input_mask, date_input_mask, calendar_format);
                                                var n = stringToDateJS(h[y], date_input_mask, date_input_mask, calendar_format);
                                                alert("startdate(" + o + ") can not greate then enddate(" + n + ")");
                                                isubmit = false
                                            }
                                        }
                                        B += C[y];
                                        if (y != h.length - 1) {
                                            B += "-"
                                        }
                                    }
                                    var f = arrSearch[g - 1][0] + "=" + encodeURIComponent(B)
                                }
                            } else {
                                var f = arrSearch[g - 1][0] + "=" + encodeURIComponent(arrSearch[g - 1][1])
                            }
                        }
                    }
                    var q = "";
                    for (var y = 0; y < arrSearch.length && isubmit; y++) {
                        if (arrSearch[y][4] == 0) {
                            arrSearch[y][1] = "";
                            arrSearch[y][6] = ""
                        }
                        if (arrSearch[y][4] == 1 && arrSearch[y][1] != "" && y != g - 1) {
                            if (!validateInput(arrSearch[y][1], arrSearch[y][2])) {
                                var d = $sf("s_" + areaid + "_" + (y + 1));
                                if (d != null) {
                                    isubmit = false;
                                    alert("Please input valid criteria");
                                    if (d.style.display == "") {
                                        var d = $sf("txtSearch_" + (y + 1));
                                        if (d != null) {
                                            d.focus();
                                            d.select()
                                        }
                                    } else {
                                        showSearch($sf(areaid + "_" + (y + 1)), y + 1)
                                    }
                                    break
                                }
                            } else {
                                if (arrSearch[y][2] == "date") {
                                    var x = stringToDateJS(arrSearch[y][1], date_input_mask, "mm/dd/yyyy", calendar_format);
                                    if (!x) {
                                        isubmit = false;
                                        break
                                    }
                                    f += "&" + arrSearch[y][0] + "=" + encodeURIComponent(x)
                                } else {
                                    if (arrSearch[y][2] == "sdate" || arrSearch[y][2] == "date") {
                                        var B = "";
                                        if (arrSearch[y][1].match(/[,]/gi) != null) {
                                            var h = new Array();
                                            var C = new Array();
                                            var h = arrSearch[y][1].split(",");
                                            for (var u = 0; u < h.length; u++) {
                                                h[u] = h[u].replace(/[^-0-9., \/]/gi, "");
                                                C[u] = stringToDateJS(h[u], date_input_mask, "mm/dd/yyyy", calendar_format);
                                                if (!C[u]) {
                                                    isubmit = false;
                                                    break
                                                }
                                                B += C[u];
                                                if (u != h.length - 1) {
                                                    B += ","
                                                }
                                            }
                                            f += "&" + arrSearch[y][0] + "=" + encodeURIComponent(B)
                                        } else {
                                            var h = new Array();
                                            var C = new Array();
                                            var h = arrSearch[y][1].split("-");
                                            for (var u = 0; u < h.length; u++) {
                                                h[u] = h[u].replace(/[^-0-9., \/]/gi, "");
                                                C[u] = stringToDateJS(h[u], date_input_mask, "mm/dd/yyyy", calendar_format);
                                                if (!C[u]) {
                                                    isubmit = false;
                                                    break
                                                }
                                                if (u > 0) {
                                                    if (C[u - 1] > C[u]) {
                                                        var o = stringToDateJS(h[u - 1], date_input_mask, date_input_mask, calendar_format);
                                                        var n = stringToDateJS(h[u], date_input_mask, date_input_mask, calendar_format);
                                                        alert("startdate(" + o + ") can not greate then enddate(" + n + ")");
                                                        isubmit = false;
                                                        break
                                                    }
                                                }
                                                B += C[u];
                                                if (u != h.length - 1) {
                                                    B += "-"
                                                }
                                            }
                                            f += "&" + arrSearch[y][0] + "=" + encodeURIComponent(B)
                                        }
                                    } else {
                                        f += "&" + arrSearch[y][0] + "=" + encodeURIComponent(arrSearch[y][1])
                                    }
                                }
                            }
                        }
                        if (arrFilter[y][3] != "" && arrFilter[y][3] != "filter") {
                            q = "&fsort=" + arrCol[y] + arrFilter[y][3]
                        }
                    }
                    if (isubmit) {
                        hassearch = (b ? b : r);
                        timer = setTimeout("resetSubmit()", submitinterval * 1000);
                        hideCalendar();
                        sendURL(mLink + "&" + f + q + "&filopr=" + filopr + "&arid=" + arcounter);
                        if (document.getElementById("divGF") != null) {
                            if (document.getElementById("keywords") != null) {
                                var z = document.getElementById("divGF");
                                var t = document.getElementById("keywords");
                                z.removeChild(t)
                            }
                            var s = document.createElement("input");
                            s.type = "hidden";
                            s.id = "keywords";
                            s.name = "keywords";
                            s.value = f;
                            document.getElementById("divGF").appendChild(s)
                        }
                        vsearch2 = f.toString().split("&");
                        vsearch3 = [];
                        for (var k = 0; k < vsearch2.length; k++) {
                            var p = vsearch2[k];
                            var w = p.split("=")[1];
                            if (w.search(/[']/g) == -1) {
                                vsearch3.push(p)
                            } else {
                                vsearch3.push(p.replace(/[']/g, "%22"))
                            }
                        }
                        vsearch3 = vsearch3.join("&");
                        changePrintFilter(vsearch3, "PRINT");
                        changePrintFilter(vsearch3, "PDF");
                        changePrintFilter(vsearch3, "EXCEL");
                        changePrintFilter(vsearch3, "OPENOFFICE")
                    }
                } else {
                    alert("Please input valid criteria");
                    if (bwtype != "IE") {
                        isubmit = true;
                        timer = setTimeout("resetSubmit()", submitinterval * 100)
                    }
                    a.focus();
                    a.select()
                }
            }
        }
    }
}
function resetSubmit() {
    isubmit = false;
    timer = null
}
function writeFootNote() {
    var a = $sf("spFooter");
    if (a == null) {
        return
    }
    var b = "";
    if (arrFootNote.counter != "") {
        b += arrFootNote.counter
    }
    if (arrFootNote.filter != "") {
        b += (b != "" ? "&nbsp;&nbsp;|&nbsp;&nbsp;" : "");
        b += arrFootNote.filter
    }
    if (arrFootNote.selection != "") {
        b += (b != "" ? " | " : "");
        b += arrFootNote.selection
    }
    a.innerHTML = b
}
function viewMore() {
    var g = "page=" + (vpage + 1);
    var f = "";
    for (var d = 0; d < arrFilter.length; d++) {
        if (arrFilter[d][1] != "") {
            var a = arrFilter[d][1];
            if (arrFilter[d][2] == "sdate" || arrFilter[d][2] == "date") {
                a = "";
                if (arrFilter[d][1].match(/[,]/gi) != null) {
                    var c = new Array();
                    var e = new Array();
                    var c = arrFilter[d][1].split(",");
                    for (var b = 0; b < c.length; b++) {
                        c[b] = c[b].replace(/[^-0-9., \/]/gi, "");
                        e[b] = stringToDateJS(c[b], date_input_mask, "mm/dd/yyyy", calendar_format);
                        a += e[b];
                        if (b != c.length - 1) {
                            a += ","
                        }
                    }
                } else {
                    var c = new Array();
                    var e = new Array();
                    var c = arrFilter[d][1].split("-");
                    for (var b = 0; b < c.length; b++) {
                        c[b] = c[b].replace(/[^-0-9., \/]/gi, "");
                        e[b] = stringToDateJS(c[b], date_input_mask, "mm/dd/yyyy", calendar_format);
                        a += e[b];
                        if (b != c.length - 1) {
                            a += "-"
                        }
                    }
                }
            }
            g += "&" + arrFilter[d][0] + "=" + encodeURIComponent(a);
            arrFilter[d][4] = 1
        }
        if (arrFilter[d][3] != "" && arrFilter[d][3] != "filter") {
            f = "&fsort=" + arrFilter[d][0] + arrFilter[d][3]
        }
    }
    arrSearch = arrFilter.slice();
    isubmit = true;
    timer = setTimeout("resetSubmit()", submitinterval * 1000);
    hideCalendar();
    sendURL(mLink + "&" + g + f + "&filopr=" + filopr + "&arid=" + arcounter)
}
function sendURL(b) {
    var a = "";
    if (b != null) {
        if (b == "1") {
            if (lastLink != "") {
                a = lastLink + "&reload=1"
            }
        } else {
            lastLink = b;
            a = lastLink
        }
    }
    if (a == "") {
        a = mLink
    }
    if (a == "") {
        reloadPage()
    } else {
        getAJAXContent(a, "spAjax")
    }
}
function sortImg(e, d, c) {
    var g = "";
    if (d == " asc") {
        g = "sortup_" + areaid + "_" + e;
        var f = (c ? "up." : "up_.");
        var b = (c ? "up_." : "up.")
    } else {
        if (d == " desc") {
            g = "sortdn_" + areaid + "_" + e;
            var f = (c ? "dn." : "dn_.");
            var b = (c ? "dn_." : "dn.")
        }
    }
    if (g == "") {
        return
    }
    var a = $sf(g);
    if (a != null) {
        a.src = a.src.replace(f, b)
    }
}
function setFSort(d, b) {
    var e = d.split(" ");
    if (e.length == 2) {
        for (var a = 0; a < arrSearch.length; a++) {
            if (arrSearch[a][0] == e[0]) {
                var c = arrSearch[a][3];
                arrSearch[a][3] = " " + e[1];
                if (b) {
                    sortImg(a + 1, arrSearch[a][3], true);
                    if (c != "" && c != arrSearch[a][3]) {
                        sortImg(a + 1, c, false)
                    }
                }
            } else {
                if (b) {
                    sortImg(a + 1, arrSearch[a][3], false)
                }
                if (arrSearch[a][3] != "filter") {
                    arrSearch[a][3] = ""
                }
            }
        }
    }
}
function sortData(l, k) {
    var e = arrFilter[l - 1][3];
    arrFilter[l - 1][3] = (k ? " desc" : " asc");
    if (e == arrFilter[l - 1][3]) {
        return
    }
    var d = "fsort=" + arrFilter[l - 1][0] + arrFilter[l - 1][3];
    var a = "";
    for (var h = 0; h < arrFilter.length; h++) {
        if (arrFilter[h][1] != "") {
            if (arrFilter[h][2] == "sdate" || arrFilter[h][2] == "date") {
                var b = "";
                if (arrFilter[h][1].match(/[,]/gi) != null) {
                    var f = new Array();
                    var c = new Array();
                    var f = arrFilter[h][1].split(",");
                    for (var g = 0; g < f.length; g++) {
                        f[g] = f[g].replace(/[^-0-9., \/]/gi, "");
                        c[g] = stringToDateJS(f[g], date_input_mask, "mm/dd/yyyy", calendar_format);
                        b += c[g];
                        if (g != f.length - 1) {
                            b += ","
                        }
                    }
                    a += "&" + arrFilter[h][0] + "=" + encodeURIComponent(b)
                } else {
                    var f = new Array();
                    var c = new Array();
                    var f = arrFilter[h][1].split("-");
                    for (var g = 0; g < f.length; g++) {
                        f[g] = f[g].replace(/[^-0-9., \/]/gi, "");
                        c[g] = stringToDateJS(f[g], date_input_mask, "mm/dd/yyyy", calendar_format);
                        b += c[g];
                        if (g != f.length - 1) {
                            b += "-"
                        }
                    }
                    a += "&" + arrFilter[h][0] + "=" + encodeURIComponent(b)
                }
            } else {
                a += "&" + arrFilter[h][0] + "=" + arrFilter[h][1]
            }
            arrFilter[h][4] = 1
        }
        if (h != l - 1) {
            sortImg(h + 1, arrFilter[h][3], false);
            if (arrFilter[h][3] != "filter") {
                arrFilter[h][3] = ""
            }
        } else {
            sortImg(h + 1, arrFilter[h][3], true);
            if (e != "" && e != arrFilter[h][3]) {
                sortImg(h + 1, e, false)
            }
        }
    }
    arrSearch = arrFilter.slice();
    if (d != null) {
        isubmit = true;
        timer = setTimeout("resetSubmit()", submitinterval * 1000);
        hideCalendar();
        sendURL(mLink + a + "&" + d + "&filopr=" + filopr + "&arid=" + arcounter);
        arrvsearch = d.split("&");
        vorder = arrvsearch[0];
        changePrintOrder(vorder, "PRINT");
        changePrintOrder(vorder, "PDF");
        changePrintOrder(vorder, "EXCEL");
        changePrintOrder(vorder, "OPENOFFICE")
    }
}
function viewSearch(a) {
    if (a == null) {
        a = !fsearch
    }
    fsearch = a;
    for (var b = 0; b < arrFilter.length; b++) {
        var c = $sf("spinq_" + areaid + "_" + (b + 1)).childNodes[0];
        if (c != null) {
            if (arrFilter[b][1] != "" && arrFilter[b][4] == !a) {
                showSearch($sf(areaid + "_" + (b + 1)), (b + 1), a)
            } else {
                if (arrFilter[b][1] != "" && arrFilter[b][4] == a) {} else {
                    showSearch($sf(areaid + "_" + (b + 1)), (b + 1), false)
                }
            }
        } else {
            if (!a) {
                showSearch($sf(areaid + "_" + (b + 1)), (b + 1), false)
            }
        }
    }
}
function addButton(w, b, r, m) {
    if (typeof (w) == "string") {
        var y = $sf(w)
    } else {
        var y = w;
        w = (y.id ? y.id : y.name)
    }
    var q = b.split("|");
    var l = "";
    var g = false;
    for (var u = 0; u < q.length; u++) {
        var p = q[u].split(":");
        var z = "";
        var s = "";
        var c = "";
        if (p.length >= 2) {
            if (p[1].toLowerCase() == "close") {
                c = "popClose(); return false;";
                s = '<img src="' + imgcpath + 'temp/cross.png" style="margin-right:4px;" align="absmiddle" hspace="0" border="0">'
            } else {
                if (p[1].toLowerCase() == "back") {
                    c = "history.back();";
                    s = '<img src="' + imgcpath + 'icons/cross.png" style="margin-right:4px;" align="absmiddle" hspace="0" border="0">'
                } else {
                    if (p[1].toLowerCase() == "delete") {
                        if (p.length >= 3) {
                            var h = (m ? "top.document." : "document.") + w;
                            var n = "null";
                            c = p[2];
                            if (c.substr(0, 1) == "?") {
                                n = "'" + c + "'"
                            } else {
                                if (c.split(".").length >= 2) {
                                    n = "'?ofid=" + c + "'"
                                }
                            }
                            var x = (p.length >= 4 ? p[3] : "");
                            c = "confirmDelete(" + h + "," + n + ",'" + x + "');"
                        }
                    } else {
                        if (y != null && p[1].toLowerCase() == "submit") {
                            if (y.onsubmit == null) {
                                if (m) {
                                    c = "top.document." + w + ".submit();"
                                } else {
                                    c = "document." + w + ".submit();"
                                }
                            } else {
                                var c = y.onsubmit.toString();
                                var k = c.indexOf("{");
                                c = c.substr(k + 1, c.length - k - 2);
                                if (m) {
                                    c = c.replace(/this/gi, "top.document." + w)
                                } else {
                                    c = c.replace(/this/gi, "document." + w)
                                }
                            }
                            s = '<img src="' + imgcpath + 'icons/tick.png" style="margin-right:4px;" align="absmiddle" hspace="0" border="0">'
                        } else {
                            if (y != null && p[1].toLowerCase() == "draft") {
                                var h = (m ? "top.document." : "document.") + w;
                                c = "strLinkOld=sLink;sLink=sLink+'&action=draft';validateForm(" + h + ");sLink=strLinkOld;"
                            } else {
                                if (y != null && p[1].toLowerCase() == "edit draft") {
                                    c = "return false;"
                                } else {
                                    if (y != null && p[1].toLowerCase() == "send to approver") {
                                        var h = (m ? "top.document." : "document.") + w;
                                        c = "strLinkOld=sLink;sLink=sLink+'&action=sendtoapprover';validateForm(" + h + ");sLink=strLinkOld;"
                                    } else {
                                        if (y != null && p[1].toLowerCase() == "preview approver") {
                                            c = "return false;";
                                            if (p.length >= 3) {
                                                var h = (m ? "top.document." : "document.") + w;
                                                var e = "null";
                                                c = p[2];
                                                if (c.substr(0, 1) == "?") {
                                                    e = "'" + c + "'";
                                                    c = "strLinkOld=sLink;sLink=" + e + ";strtargetOld=" + h + ".target;" + h + ".target='popWinViewAppr';validateForm(" + h + ",'',false);sLink=strLinkOld;" + h + ".target=strtargetOld;"
                                                }
                                            }
                                        } else {
                                            if (y != null && p[1].toLowerCase() == "reject") {
                                                var h = (m ? "top.document." : "document.") + w;
                                                c = "procFormRequest(" + h + ",0,1);"
                                            } else {
                                                if (y != null && p[1].toLowerCase() == "accept") {
                                                    var h = (m ? "top.document." : "document.") + w;
                                                    c = "procFormRequest(" + h + ",1,1);"
                                                } else {
                                                    if (y != null && p[1].toLowerCase() == "close request") {
                                                        var h = (m ? "top.document." : "document.") + w;
                                                        c = "procFormRequest(" + h + ",2,1);"
                                                    } else {
                                                        if (y != null && p[1].toLowerCase() == "revise") {
                                                            var h = (m ? "top.document." : "document.") + w;
                                                            c = "procFormRequest(" + h + ",3,1);"
                                                        } else {
                                                            if (y != null && p[1].toLowerCase() == "cancel request") {
                                                                var h = (m ? "top.document." : "document.") + w;
                                                                c = "procFormRequest(" + h + ",4,1);"
                                                            } else {
                                                                if (p[1].toLowerCase() == "action" && p.length >= 3) {
                                                                    c = p[2];
                                                                    if (c.substr(0, 1) == "?") {
                                                                        c = "location='" + c + "'"
                                                                    }
                                                                } else {
                                                                    if (p[1].toLowerCase() == "auditlog") {
                                                                        if (p.length >= 4) {
                                                                            var h = (m ? "top.document." : "document.") + w;
                                                                            var n = "null";
                                                                            var o = p[3].split(",");
                                                                            var v = [];
                                                                            var a = [];
                                                                            var f = [];
                                                                            for (var t = 0; t < o.length; t++) {
                                                                                f = o[t].split("=");
                                                                                v.push(f[0]);
                                                                                a.push(f.length >= 2 ? f[1] : "")
                                                                            }
                                                                            c = "popLog('" + p[2] + "','" + p[3] + "');"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (c != "") {
                s = "";
                z = '<a id="btn_a_' + u + '" href="#" class="button" onclick="this.blur(); ' + c + '"><span>' + s + p[0] + "</span></a>";
                l += z
            }
        }
    }
    if (l != "") {
        if (r == null) {
            top.document.write(l)
        } else {
            l = '<div id="load_' + r + '" class="loading" style="display:none;"><div style="position:absolute;background-color:white;opacity:0.7;width:100%;height:100%;"></div><div style="position:absolute;width:100%;height:100%;text-align:center;"><table height="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td><img src="' + imgcpath + 'temp/loader.gif" border="0" onclick="maskButton(false);"></td></tr></table></div></div>' + l;
            var d = $sf(r);
            if (d != null) {
                d.innerHTML = l
            }
            if (g) {
                $('<div class="buttons">Add Request Decision Notes : <input type="checkbox" onclick="javascript:this.checked?$(\'#inp_request_notes\').show():$(\'#inp_request_notes\').hide();" name="chk_request_notes" id="chk_request_notes"><br><textarea style="display:none;height: 80px; width: 330px;" name="inp_request_notes" id="inp_request_notes"></textarea></div>').insertBefore($(d));
                $(d).css("clear", "both")
            }
        }
    }
    if (typeof (y) != "object") {}
}
function procFormRequest(o, m, h) {
    var l = "";
    var b = $("#inp_request_no").val();
    var d = $("#inp_request_notes").val();
    if (typeof (b) === "undefined") {
        b = $("#inp_requestno").val()
    }
    if (typeof (b) === "undefined") {
        b = $("#inp_reqno").val()
    }
    if (typeof (b) === "undefined") {
        b = ""
    }
    if (b.length < 1) {
        alert("Invalid Request Number!");
        return false
    }
    if (typeof (h) === "undefined") {
        var h = 0
    }
    if (m == 0) {
        l = "Are You Sure You Want to Reject this Request?"
    } else {
        if (m == 1) {
            l = "Are You Sure You Want to Approve this Request?"
        } else {
            if (m == 2) {
                l = "Are You Sure You Want to Close this Request?"
            } else {
                if (m == 3) {
                    l = "Are You Sure You Want to Revise this Request?"
                } else {
                    if (m == 4) {
                        l = "Are You Sure You Want to Cancel this Request?"
                    }
                }
            }
        }
    }
    if (confirm(l)) {
        var g = ({
            hdnReqNo: b,
            hdnAction: m,
            txtNotes: d
        });
        if (m == 3 || m == 0) {
            if (d.length < 1) {
                alert("Note Cant Be Empty!");
                $("#chk_request_notes").attr("checked", true);
                $("#inp_request_notes").show().get(0).focus();
                return false
            }
        }
        if (h != 1) {
            $.post("?ofid=RequestInbox.ProcessRequest", g, function(p) {
                try {
                    $("#spAjax").html(p)
                } catch (e) {}
            })
        } else {
            try {
                var a = (top == self ? (opener ? self : (frmSFBody ? frmSFBody : self)) : self)
            } catch (k) {
                var a = self
            }
            var n = a.$sf("spAjax");
            var c = document.createElement("input");
            c.name = "hdnReqNo";
            c.type = "hidden";
            c.value = b;
            o.appendChild(c);
            var f = document.createElement("input");
            f.name = "hdnAction";
            f.type = "hidden";
            f.value = m;
            o.appendChild(f);
            var i = document.createElement("input");
            i.name = "txtNotes";
            i.type = "hidden";
            i.value = d;
            o.appendChild(i);
            getAJAXContent("?ofid=RequestInbox.ProcessRequest&isformreq=" + h, n, null, function() {
                maskButton(false);
                refreshPage(false);
                popClose();
                try {
                    opener.refreshPage()
                } catch (p) {}
            }, o)
        }
    }
}
function popLog(c, f) {
    var d = f.split("$");
    var a = [];
    var g = [];
    var b = [];
    for (var e = 0; e < d.length; e++) {
        b = d[e].split("=");
        a.push(b[0]);
        g.push(b.length >= 2 ? b[1] : "")
    }
    popPrint("?xfid=sys.setting.log.audit.listing&table_name=" + c + "&pkey=" + a.join(",") + "&sval=" + g.join(","))
}
function innerClose(a) {
    SFdestroyReactElement();
    if (divBlock) {
        divBlock.style.display = "none";
        divBlockSpace.style.display = "none";
        if (a) {
            a
        }
    }
}
function maskButton(flag) {
    if (flag == null) {
        flag = true
    }
    var vloader = $sf("divButton");
    if (vloader && vloader.childNodes && vloader.childNodes.length && vloader.childNodes[0].className && vloader.childNodes[0].className == "loading") {
        if (vloader.childNodes[0] != null) {
            if (vloader.childNodes[0].style.display == "none" && flag) {
                with (vloader.childNodes[0].style) {
                    display = "";
                    width = parseInt(vloader.offsetWidth) + "px";
                    height = parseInt(vloader.offsetHeight) + "px"
                }
            } else {
                if (!flag) {
                    vloader.childNodes[0].style.display = "none"
                }
            }
        }
    }
    if (!flag) {
        try {
            parent.$sf("load_divButton").style.display = "none"
        } catch (err) {}
        try {
            $sf("frmSFBody").contentDocument.getElementById("load_divButton").style.display = "none"
        } catch (err) {}
        try {
            $sf("frmSFBody").contentDocument.getElementById("framecontent_1").contentDocument.getElementById("load_divButton").style.display = "none";
            $sf("frmSFBody").contentDocument.getElementById("framecontent_2").contentDocument.getElementById("load_divButton").style.display = "none";
            $sf("frmSFBody").contentDocument.getElementById("framecontent_3").contentDocument.getElementById("load_divButton").style.display = "none";
            $sf("frmSFBody").contentDocument.getElementById("framecontent_4").contentDocument.getElementById("load_divButton").style.display = "none";
            $sf("frmSFBody").contentDocument.getElementById("framecontent_5").contentDocument.getElementById("load_divButton").style.display = "none";
            $sf("frmSFBody").contentDocument.getElementById("framecontent_6").contentDocument.getElementById("load_divButton").style.display = "none"
        } catch (err) {}
    }
}
function innerPop(theURL, cfunc) {
    if (theURL == null) {
        theURL = ""
    }
    isCompletedPop = false;
    setTimeout("isCompletedPop=true", 1000);
    var vparam = window.location.href;
    if (pstitle != "" && theURL != "") {
        if (theURL.search("&origin=") < 0) {
            theURL += "&origin=" + encodeURIComponent(pstitle)
        }
    }
    if (vparam.search(/&intab=/gi) >= 0) {
        popWindow(theURL);
        return
    }
    if (divBlockSpace == null) {
        if (top.divBlockSpace != null) {
            divBlockSpace = top.divBlockSpace
        } else {
            divBlockSpace = $sf("divBlockSpace");
            if (divBlockSpace == null) {
                divBlockSpace = top.document.createElement("DIV");
                top.document.body.appendChild(divBlockSpace);
                top.divBlockSpace = divBlockSpace;
                with (divBlockSpace) {
                    id = "divBlockSpace";
                    className = "divBlockSpace";
                    innerHTML = "";
                    style.display = "none"
                }
            }
        }
    }
    if (divBlock == null) {
        if (top.divBlock != null) {
            divBlock = top.divBlock
        } else {
            divBlock = $sf("divBlock");
            if (divBlock == null) {
                divBlock = top.document.createElement("DIV");
                top.document.body.appendChild(divBlock);
                top.divBlock = divBlock;
                with (divBlock) {
                    id = "divBlock";
                    className = "divBlock";
                    style.display = "";
                    innerHTML = "";
                    style.width = "200px";
                    style.height = "200px"
                }
            }
        }
    }
    if (divPopup == null) {
        if (top.divPopup != null) {
            divPopup = top.divPopup
        } else {
            divPopup = $sf("divPopup");
            if (divPopup == null) {
                divPopup = top.document.createElement("DIV");
                divBlock.appendChild(divPopup);
                top.divPopup = divPopup;
                with (divPopup) {
                    id = "divPopup";
                    className = "divPopup";
                    style.display = "";
                    innerHTML = ""
                }
            }
        }
    }
    if (divBlockSpace.style.display == "none") {
        divPopup.innerHTML = "";
        divBlockSpace.style.display = "";
        var vheight = (bwtype == "IE" ? document.documentElement.offsetHeight : window.innerHeight);
        var vwidth = document.documentElement.offsetWidth;
        with (divBlock.style) {
            display = "";
            width = "100px";
            height = "100px";
            border = "0px solid blue";
            left = ((parseInt(vwidth) - parseInt(divBlock.offsetWidth)) / 2) + "px";
            top = (((parseInt(vheight) - parseInt(divBlock.offsetHeight)) / 2) + 0) + "px";
            divPopup.style.left = 0;
            divPopup.style.top = 0;
            divPopup.innerHTML = '<img src="' + imgcpath + 'icon/loading.gif" border="0" title="' + jsMsgMLang.CLICKTOCLOSE + '" onclick="innerClose();">'
        }
        if (theURL == "") {
            return
        }
    }
    divBlockSpace.style.display = "";
    if (theURL.search("isajax") < 0) {
        theURL += (theURL.search(/\?/) < 0 ? "?" : "&") + "isajax=yes"
    }
    if (bwtype == "IE") {
        theURL += (theURL.search(/\?/) < 0 ? "?" : "&") + "rand=" + Math.floor((Math.random() * 1000))
    }
    try {
        hideCalendar()
    } catch (e) {}
    if (cfunc == null) {
        cfunc = reposBlock
    }
    getAJAXContent(theURL, divPopup, 1, cfunc);
    if (cfunc == reposBlock) {
        cfunc = null
    }
    top.reloadFunc = function() {
        getAJAXContent(theURL, divPopup, 1, cfunc)
    }
}
function pageReload() {
    SFdestroyReactElement();
    isreload = true;
    if (reloadFunc) {
        reloadFunc()
    }
}
function reposBlock() {
    if (isreload) {
        return
    }
    if (divBlock == null || divPopup == null) {
        return
    }
    var vheight = (bwtype == "IE" ? document.documentElement.offsetHeight : window.innerHeight);
    var vwidth = document.documentElement.offsetWidth;
    with (divBlock.style) {
        display = "";
        width = 0;
        height = 0;
        left = ((parseInt(vwidth) - parseInt(divBlock.offsetWidth)) / 2) + "px";
        top = (20 + ((parseInt(vheight) - parseInt(divBlock.offsetHeight)) / 2)) + "px";
        divPopup.style.left = -(parseInt(divPopup.offsetWidth) / 2) + "px";
        divPopup.style.top = -(parseInt(divPopup.offsetHeight) / 2) + "px"
    }
    openWindow("divBlock");
    isreload = false
}
function loadPage(b) {
    var a = b.split(":");
    if (a.length > 1) {}
}
function loadSearch(b, a) {
    innerPop("?xfid=" + b + "&fsearch=false&schid=" + a)
}
function initSearch() {
    reposBlock();
    var frm = document.frmFilter;
    if (arrSearch.length) {
        for (var i = 0; i < arrSearch.length; i++) {
            var spinq = $sf("spinq_" + areaid + "_" + (i + 1)).childNodes[0];
            if (spinq != null) {
                if (frm != null) {
                    var velm = eval("frm.inp_" + arrSearch[i][0])
                } else {
                    var velm = $sf("inp_" + arrSearch[i][0]);
                    if (velm != null) {
                        frm = velm.form
                    }
                }
                if (velm != null) {
                    var vtype = (velm.length ? velm[0].type : velm.type);
                    switch (vtype) {
                    case "text":
                    case "hidden":
                    case "password":
                    case "textarea":
                    case "select-one":
                    case "file":
                        velm.value = arrSearch[i][1];
                        break;
                    case "radio":
                        if (velm.length == null) {
                            var tvelm = velm;
                            velm = new Array();
                            velm[0] = tvelm
                        }
                        for (var j = 0; j < velm.length; j++) {
                            if (velm[j].value.toUpperCase() == arrSearch[i][1].toUpperCase() || velm[j].lang.toUpperCase() == arrSearch[i][1].toUpperCase()) {
                                velm[j].checked = true;
                                break
                            }
                        }
                        break;
                    case "checkbox":
                        if (velm.length == null) {
                            velm[0] = velm
                        }
                        for (var j = 0; j < velm.length; j++) {
                            if (("," + arrSearch[i][1] + ",").search("," + velm[j].value + ",") >= 0 || ("," + arrSearch[i][1] + ",").search("," + velm[j].lang + ",") >= 0) {
                                velm[j].checked = true
                            }
                        }
                        break;
                    case "select-multiple":
                        for (var j = 0; j < velm.options.length; j++) {
                            if (("," + arrSearch[i][1] + ",").search("," + velm.options[j].value + ",") >= 0) {
                                velm.options[j].selected = true
                            }
                        }
                        break
                    }
                }
            }
        }
    }
}
function refreshPage(a) {
    SFdestroyReactElement();
    maskButton(false);
    try {
        if (opener != null) {
            if (a == false) {
                sendURL(1)
            } else {
                opener.sendURL(1)
            }
        } else {
            if (top.actframe != null) {
                top.actframe.sendURL(1)
            } else {
                sendURL(1)
            }
        }
    } catch (b) {}
    try {
        unBlock()
    } catch (b) {}
    reposScroller(enrow, nbrec)
}
function reloadPage() {
    SFdestroyReactElement();
    try {
        if (hasModified()) {
            if (!confirm(jsMsgMLang.JSCONFIRMMODIFIEDPAGE)) {
                return
            } else {
                isconfirm = true
            }
            ismodif = false
        }
    } catch (a) {}
    if (reloadFunc) {
        reloadFunc()
    } else {
        location.reload()
    }
}
function listMobile() {
    location.reload()
}
function popSearch(a) {
    viewSearch(false);
    innerPop("?xfid=" + a + "&fsearch=false&arcounter=" + arcounter, initSearch)
}
function popClose(a) {
    if (a == null) {
        a = true
    }
    try {
        if (hasModified()) {
            if (!confirm(jsMsgMLang.JSCONFIRMMODIFIEDPAGE)) {
                return
            } else {
                isconfirm = true
            }
            ismodif = false;
            if (frames) {
                for (var b = 0; b < frames.length; b++) {
                    if (frames[b].ismodif != null) {
                        if (frames[b].ismodif) {
                            frames[b].ismodif = false
                        }
                    }
                }
            }
        }
    } catch (c) {}
    if (divBlock == null || divBlockSpace == null) {
        if (opener != null) {
            window.close()
        } else {
            if (!a) {
                history.back(1)
            }
        }
        reposScroller(enrow, nbrec);
        return
    } else {
        try {
            hideCalendar()
        } catch (c) {}
        try {
            closeWindow("divBlock", function(d) {
                unBlock();
                if (divBlock.style.display == "none") {
                    if (opener != null) {
                        try {
                            if (opener.imgpath || ddsmoothmenu == null) {
                                window.close()
                            }
                        } catch (f) {}
                    }
                    return
                }
            });
            if ($sf("popbox") || $sf("popmenu")) {
                if (typeof (popMenu) != "undefined") {
                    popMenu(null, false)
                } else {
                    parent.popMenu(null, false)
                }
                if (typeof (popBox) != "undefined") {
                    popBox(false)
                } else {
                    parent.popBox(false)
                }
            }
        } catch (c) {}
    }
    SFdestroyReactElement()
}
function unBlock() {
    divBlockSpace.style.display = "none"
}
var opencnt = 0;
function slideBox(objid, dir, istart, vsp, vtm) {
    var obj = $sf(objid);
    opencnt++;
    if (vsp == null) {
        vsp = 30
    }
    if (vtm == null) {
        vtm = 80
    }
    if (obj == null) {
        return
    }
    if (dir == null) {
        dir = "ns"
    }
    var och = obj.childNodes[0];
    if (obj.style.display == "none") {
        istart = true
    }
    var vloop = true;
    if (opencnt > 100) {
        opencnt = 0;
        return
    }
    if (istart) {
        obj.style.display = "";
        with (och.style) {
            if (dir == "ns") {
                left = 0;
                top = -parseInt(och.offsetHeight) + "px"
            } else {
                if (dir == "sn") {
                    left = 0;
                    top = 0
                }
            }
        }
    } else {
        if (dir == "ns" && parseInt(och.offsetTop) + vsp < 0) {
            och.style.top = (parseInt(och.offsetTop) + vsp) + "px"
        } else {
            if (dir == "sn" && parseInt(och.offsetTop) - vsp > -parseInt(och.offsetHeight)) {
                och.style.top = (parseInt(och.offsetTop) - vsp) + "px"
            } else {
                opencnt = 0;
                vloop = false;
                if (dir == "ns") {
                    och.style.top = 0
                } else {
                    if (dir == "sn") {
                        och.style.top = -parseInt(och.offsetHeight) + "px";
                        obj.style.display = "none"
                    }
                }
            }
        }
    }
    if (vloop) {
        setTimeout("slideBox('" + objid + "','" + dir + "',null," + vsp + "," + vtm + ")", vtm)
    }
}
function validateNumber(c, b) {
    if (b == null) {
        b = 0
    }
    var a = new RegExp("^([0-9]*|\d*.\d{1}?\d*)$","gi");
    if (c.value == "") {
        return b
    } else {
        return (c.value.match(a) != null)
    }
}
function addJavascript(c, d) {
    var b = document.getElementsByTagName(d)[0];
    var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", c);
    b.appendChild(a)
}
function loadScript(b, e, d) {
    if (e == null) {
        e = "head"
    }
    var c = document.getElementsByTagName(e)[0];
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = b;
    a.onreadystatechange = d;
    a.onload = d;
    c.appendChild(a)
}
function startsftour(pgid, ptype) {
    var functiontour = "startsftour_" + ptype + "_" + pgid + "()";
    eval(functiontour)
}
function closenofitywn() {
    excolTourNotify()
}
function excolTourNotify() {
    var a = $(".notif-page").width();
    if (a > 30) {
        $(".notif-page").width("30");
        $(".notif-page > .info").hide();
        $(".notif-page > .cls").hide()
    } else {}
}
var lfunc = function() {};
arrSFNotif = [];
timerNotif = false;
arrNotifTmplt = [];
isGrupNotifContent = true;
var firstloadnotif = true;
var lastnotiftempate = "";
var lmdnotif = 0;
function addNotif(d, f, e, g, a, c) {
    if (typeof (a) == "undefined") {
        var a = {}
    }
    if (typeof (c) == "undefined") {
        var c = true
    }
    var b = arrSFNotif.some(function(h) {
        return h.notifid === e
    });
    if (d.length && !b) {
        arrSFNotif.push({
            text: d,
            notiftype: f,
            notifid: e,
            notifgroup: g,
            objData: a
        })
    }
    if (!isNaN(timerNotif) && c) {
        showSFNotif()
    }
    updateCounter()
}
function followUpNotif(m, n, a, h) {
    if (typeof (n) == "undefined") {
        n = false
    } else {
        if (n == true) {
            m = $(m).parents(".divContent")
        }
    }
    a = (typeof (a) == "undefined" ? false : a);
    h = (typeof (h) == "undefined" ? true : h);
    var o = "";
    var l = "";
    var f = "";
    var p = true;
    var k = (typeof ($(m).data("notiftemplate")) != "undefined" ? $(m).data("notiftemplate") : "");
    k = (k == "" && typeof ($(m).data("group")) != "undefined" ? $(m).data("group") : k);
    if (typeof ($(m).data("isreq")) != "undefined" && $(m).data("isreq") != null && $(m).data("isreq").toString() != "") {
        p = ($(m).data("isreq").toString() == "1" ? true : false)
    } else {
        if (typeof (arrNotifTmplt[k]) != "undefined" && typeof (arrNotifTmplt[k]["isreq"]) != "undefined" && arrNotifTmplt[k]["isreq"] != null) {
            p = (arrNotifTmplt[k]["isreq"].toString() == "1" ? true : false)
        }
    }
    if (typeof ($(m).data("link")) != "undefined" && $(m).data("link") != null && $(m).data("link") != "") {
        o = $(m).data("link")
    } else {
        if (typeof (arrNotifTmplt[k]) != "undefined" && typeof (arrNotifTmplt[k]["link"]) != "undefined" && arrNotifTmplt[k]["link"] != null) {
            o = arrNotifTmplt[k]["link"]
        } else {
            if (p) {
                o = "?sfid=sys.setting.workflow.listrequest&generalibx=1&fButton=true"
            }
        }
    }
    if (typeof ($(m).data("prmlink")) != "undefined" && $(m).data("prmlink") != null && $(m).data("prmlink") != "") {
        f = $(m).data("prmlink")
    } else {
        if (typeof (arrNotifTmplt[k]) != "undefined" && typeof (arrNotifTmplt[k]["prmlink"]) != "undefined" && arrNotifTmplt[k]["prmlink"] != null) {
            f = arrNotifTmplt[k]["prmlink"]
        } else {
            if (p) {
                f = "rid,req_no,company_id,reqtype"
            }
        }
    }
    var b = f.split(",");
    var r = [];
    if (n) {
        var q = [];
        if ($(m).children(".divIsi").children("a") !== undefined) {
            $(m).children(".divIsi").children("a").each(function() {
                if ($(this).data("notifid") !== undefined) {
                    r.push($(this).data("notifid"))
                }
            })
        }
        if (r.length == 0) {
            if ($(m).children(".divIsi") !== undefined) {
                $(m).children(".divIsi").each(function() {
                    if ($(this).data("notifid") !== undefined) {
                        r.push($(this).data("notifid"))
                    }
                })
            }
        }
        if (a) {
            var i = (typeof ($(m).children(".divIsi").children(".notifitem")) != "undefined" ? $(m).children(".divIsi").children(".notifitem") : i = $(m).children(".divIsi"))
        } else {
            var i = $(m).children(".divIsi")
        }
        for (var e = 0; e < b.length; e++) {
            var q = [];
            if (i !== undefined) {
                i.each(function() {
                    if ($(this).data(b[e]) !== undefined) {
                        q.push(trim($(this).data(b[e])))
                    }
                })
            }
            if (q.length > 0) {
                l += "&" + b[e] + "=" + encodeURI(q.join())
            }
        }
        $(m).remove()
    } else {
        if (f != "") {
            for (var e = 0; e < b.length; e++) {
                if (typeof ($(m).data(b[e])) != "undefined") {
                    l += "&" + b[e] + "=" + encodeURI($(m).data(b[e]))
                } else {
                    if (typeof ($(m).parents(".divIsi").data(b[e])) != "undefined") {
                        l += "&" + b[e] + "=" + encodeURI($(m).parents(".divIsi").data(b[e]))
                    }
                }
            }
        }
        if (typeof ($(m).data("notifid")) != "undefined") {
            r.push(encodeURI($(m).data("notifid")))
        } else {
            if (typeof ($(m).parents(".divIsi").data("notifid")) != "undefined") {
                r.push(encodeURI($(m).parents(".divIsi").data("notifid")))
            }
        }
        var d = $(m).parents(".divContent");
        var c = null;
        if ($(m).prev().is(".dlmtritemN")) {
            $(m).prev(".dlmtritemN").remove();
            c = $(m).prev(".notifitem")
        } else {
            if ($(m).next().is(".dlmtritemN")) {
                $(m).next(".dlmtritemN").remove();
                c = $(m).next(".notifitem")
            } else {
                $(m).parents(".divContent").remove()
            }
        }
        $(m).remove();
        if (d.find(".notifitem").length == 1 && c != null) {
            try {
                d.children(".divIsi").attr("data-notifid", c.data("notifid"));
                d.children(".divIsi").attr("data-req_coid", c.data("req_coid"));
                d.children(".divIsi").attr("data-req_no", c.data("req_no"));
                d.children(".divIsi").attr("data-req_id", c.data("req_id"))
            } catch (g) {}
            d.children(".divIsi").html(c.data("text"))
        }
    }
    showSFNotif();
    updateCounter();
    removeCookie();
    if (r.length > 0) {
        $.get("?ofid=Notification.updateStatus&idseq=" + r.join())
    }
    if (o != "" && h) {
        popWindow(o + l + "", "popNotif", 700, 600, "location=no,scrollbars=yes,status=no,toolbar=no,resizable=yes,menubar=no")
    }
}
function skipNotif(c, b) {
    var a = $(c).parents(".divContent");
    var d = [];
    if (a.children(".divIsi").children("a") !== undefined) {
        a.children(".divIsi").children("a").each(function() {
            if ($(this).data("notifid") !== undefined) {
                d.push($(this).data("notifid"))
            }
        })
    }
    if (d.length == 0) {
        if (a.children(".divIsi") !== undefined) {
            a.children(".divIsi").each(function() {
                if ($(this).data("notifid") !== undefined) {
                    d.push($(this).data("notifid"))
                }
            })
        }
    }
    a.remove();
    if (d.length > 0) {
        if (b == 0) {
            $.get("?ofid=Notification.updateStatus&idseq=" + d.join())
        } else {
            $.get("?ofid=Notification.updateNotifOpt&act=" + b + "&idshow=" + d.join())
        }
    }
    if ($(this).children(".divIsi").children("a") !== undefined) {
        $(this).children(".divIsi").children("a").each(function() {
            if ($(this).data("notifid") !== undefined) {
                arrnotifid.push($(this).data("notifid"))
            }
        })
    }
    showSFNotif();
    updateCounter();
    removeCookie()
}
function showSFNotif(R, P) {
    if (typeof (R) == "undefined") {
        R = false
    }
    var r = 5;
    var g = false;
    var D = false;
    var K = $(".divContent").size();
    var d = $(".divIsi").size();
    var q = $(".notifitem").size();
    if ((arrSFNotif.length || (typeof (P) != "undefined" && P != null)) && !isNaN(timerNotif) && ((K < r && d < r) || R) && q < 14) {
        if (R) {
            if (typeof (P) != "undefined" && P != null) {
                var G = P[0];
                if (Object.keys(G.objData).length > 0) {
                    r = 6
                }
            } else {
                return false
            }
        } else {
            var G = arrSFNotif.splice(0, 1)[0]
        }
        var i = G.text;
        var k = G.notiftype;
        var L = G.notifid;
        var A = G.notifgroup;
        var t = "";
        var N = "#";
        var F = $("<div title=''>").addClass("divIsi").attr("data-notifid", L.toString());
        currnotiftempate = "";
        isreqtmp = "";
        if (Object.keys(G.objData).length > 0) {
            currnotiftempate = (typeof (G.objData.notiftemplate) != "undefined" ? G.objData.notiftemplate : G.objData.NOTIFTEMPLATE);
            isreqtmp = (typeof (G.objData.isreq) != "undefined" ? G.objData.isreq.toString() : (typeof (G.objData.ISREQ) != "undefined" ? G.objData.ISREQ.toString() : ""));
            if (typeof (currnotiftempate) != "undefined" && typeof (arrNotifTmplt[currnotiftempate]) != "undefined") {
                if (typeof (arrNotifTmplt[currnotiftempate]["text"]) != "undefined" && arrNotifTmplt[currnotiftempate]["text"] != "" && arrNotifTmplt[currnotiftempate]["text"] != null) {
                    i = arrNotifTmplt[currnotiftempate]["text"]
                } else {
                    if (!R) {
                        arrSFNotif.splice(0, 0, G)
                    }
                    return false
                }
                if (typeof (arrNotifTmplt[currnotiftempate]["linklabel"]) != "undefined" && arrNotifTmplt[currnotiftempate]["linklabel"] != "" && arrNotifTmplt[currnotiftempate]["linklabel"] != null) {
                    t = arrNotifTmplt[currnotiftempate]["linklabel"]
                } else {
                    if (typeof (isreqtmp) != "undefined") {
                        t = (isreqtmp.toString() == "1" ? "req_no" : t)
                    } else {}
                }
            }
            t = (typeof (G.objData[t]) != "undefined" ? (G.objData[t]).toString() : (typeof (G.objData[t.toUpperCase()]) != "undefined" ? (G.objData[t.toUpperCase()]).toString() : ""));
            $.each(G.objData, function(U, T) {
                var W = T.toString();
                var X = T.toString();
                if (U.toLowerCase() == "req_no") {
                    var V = $(T.toString());
                    if (V.is("a")) {
                        W = V.html()
                    } else {
                        X = "<a href='javascript:void(0)' onclick='followUpNotif(this)'>" + W + "</a>"
                    }
                    i = i.replace(new RegExp("##" + U + "##","ig"), X)
                } else {
                    i = i.replace(new RegExp("##" + U + "##","ig"), X)
                }
                F.attr("data-" + U, W)
            });
            D = (t == "" ? false : true);
            g = D;
            A = ((currnotiftempate != "" && D == true) ? currnotiftempate.toString() : A)
        }
        if (!g && (K >= r - 1 || d >= r - 1)) {
            if (!R) {
                arrSFNotif.splice(0, 0, G)
            } else {
                return false
            }
            if (arrSFNotif.length) {
                if ($(".divContent").size() < 5 && $(".divIsi").size() < 5) {}
            }
        } else {}
        if (D == false) {
            F.html(i)
        }
        if (!firstloadnotif) {
            var h = $("<div>").addClass("evenrow").css("background-color");
            F.css("background-color", h)
        }
        F.hover(function() {
            this.style["background-color"] = "unset"
        });
        if (A != "" && $('.divContent[data-group ="' + A + '"]').size() && lastnotiftempate == currnotiftempate && ((R == false && g == false) || (R))) {
            Q = $('.divContent[data-group="' + A + '"]').last();
            var p = "";
            var a = "";
            var m = Q.find(".divIsi");
            if (Q.find(".notifitem").length == 0 && Q.data("isgrouptxt") == true) {
                var E = $("<a href='javascript:void(0)' onclick='followUpNotif(this)'>");
                E.addClass("notifitem").attr("data-notifid", L).attr("data-text", m.html()).attr("href", "javascript:void(0)");
                if (Object.keys(m.data()).length > 0) {
                    if (typeof (m.data("notiftemplate")) != "undefined" && typeof (arrNotifTmplt[m.data("notiftemplate")]) != "undefined") {
                        var x = m.data("notiftemplate").toString();
                        if (typeof (arrNotifTmplt[x]["text"]) != "undefined" && arrNotifTmplt[x]["text"] != "" && arrNotifTmplt[x]["text"] != null) {
                            F.html(arrNotifTmplt[x]["text"])
                        }
                        if (typeof (arrNotifTmplt[x]["linklabel"]) != "undefined" && arrNotifTmplt[x]["linklabel"] != "" && arrNotifTmplt[x]["linklabel"] != null) {
                            p = arrNotifTmplt[x]["linklabel"]
                        } else {
                            if (typeof (m.data("isreq")) != "undefined") {
                                p = isreqtmp == "1" ? "req_no" : p
                            }
                        }
                    }
                    $.each(m.data(), function(U, T) {
                        if (typeof (T) == "string" || typeof (T) == "number" || typeof (T) == "boolean") {
                            E.attr("data-" + U.toString(), T.toString())
                        }
                    })
                }
                p = (typeof (m.data(p)) != "undefined" ? m.data(p).toString() : "");
                E.attr("data-notif", "itmlinktmp");
                if (p != "" && t != "" && isGrupNotifContent == true) {
                    E.html(p);
                    var M = "you have notif group following";
                    var S = "#";
                    var O = "";
                    if (typeof (arrNotifTmplt[A]["group"]) != "undefined") {
                        O = arrNotifTmplt[A]["group"]
                    }
                    if (O != "") {
                        if (typeof (arrNotifTmplt[O]) != "undefined") {
                            if (typeof (arrNotifTmplt[O]["text"]) != "undefined" && arrNotifTmplt[O]["text"] != "" && arrNotifTmplt[O]["text"] != null) {
                                M = arrNotifTmplt[O]["text"]
                            }
                            if (typeof (arrNotifTmplt[O]["link"]) != "undefined" && arrNotifTmplt[O]["link"] != "" && arrNotifTmplt[O]["link"] != null) {
                                S = arrNotifTmplt[O]["link"]
                            } else {
                                if (typeof (m.data("isreq")) != "undefined") {
                                    S = m.data("isreq").toString() == "1" ? "?sfid=sys.setting.workflow.listrequest&generalibx=1&fButton=true" : S
                                }
                            }
                        }
                    }
                    m.html(M + " ");
                    E.appendTo(m)
                } else {
                    Q.attr("data-isgrouptxt", true)
                }
                Q.children(".spTitle").children("#btnflwup").attr("onclick", "").click(new Function("followUpNotif(this,true,true)"))
            } else {
                p = "linkLblTmp"
            }
            if (p != "" && t != "" && Q.data("isgrouptxt") == true) {
                var o = $("<a href='javascript:void(0)' onclick='followUpNotif(this)'>").addClass("notifitem").attr("data-notifid", L).attr("data-text", i);
                $.each(G.objData, function(U, T) {
                    o.attr("data-" + U.toString(), T.toString())
                });
                o.html(t);
                o.attr("data-notif", "itmlink");
                var v = $("<font>").addClass("dlmtritemN").html(", ");
                m.append(v).append(o)
            } else {
                Q.attr("data-isgrouptxt", true);
                F.appendTo($('.divContent[data-group ="' + A + '"]'));
                if (!firstloadnotif) {
                    var h = $("<div>").addClass("evenrow").css("background-color");
                    F.css("background-color", h)
                }
                F.hover(function() {
                    this.style["background-color"] = "unset"
                });
                Q.append(F)
            }
        } else {
            if (!R) {
                var Q = $("<div>").addClass("divContent").addClass(k);
                Q.attr("data-group", A);
                Q.attr("data-isgrouptxt", D);
                var H = $("<div title=''>").text(NOTIFLANGTEXT.JSnotification).addClass("spTitle btn-page portal").css("cursor", "pointer");
                var s = $("<div title='' width='20px' height='20px'>").addClass("boxAct");
                var u = $("<div>").addClass("listAct");
                var C = $("<ul>");
                var B = $("<li style='width:150px' title='' onclick='skipNotif(this,2)'>" + NOTIFLANGTEXT.JSshowagaintomorrow + "</li>").data("notifid", L).appendTo(C);
                var z = $("<li style='width:150px' title='' onclick='skipNotif(this,4)'>" + NOTIFLANGTEXT.JSshowwhenlogin + "</li>").data("notifid", L).appendTo(C);
                var y = $("<li style='width:150px' title='' onclick='skipNotif(this,0)'>" + NOTIFLANGTEXT.JSdonotshowanymore + "</li>").data("notifid", L).appendTo(C);
                var e = $("<div id='btnflwup' title='" + NOTIFLANGTEXT.JSfollowup + "' onclick='followUpNotif(this,true);'>").addClass("boxFlwUp");
                C.appendTo(u);
                u.appendTo(s);
                F.html(i);
                s.appendTo(H);
                e.appendTo(H);
                u.appendTo(s);
                Q.append(H, F);
                Q.hide().appendTo("#divSFNotif");
                Q.show(600)
            } else {
                return false
            }
        }
        if (document.cookie.indexOf("COOKIENOTIF") !== -1 && getCookie("COOKIENOTIF") == "on") {
            $(".divContent").css("display", "none")
        }
        if (arrSFNotif.length) {
            timerNotif = setTimeout(function() {
                showSFNotif()
            }, 1000)
        }
        lastnotiftempate = currnotiftempate;
        if (!R && arrSFNotif.length) {
            var I = (K > d ? K : d);
            var l = 15 - q;
            var b = l;
            var c = 0;
            l = (arrSFNotif.length < l ? arrSFNotif.length : l);
            for (var w = 0; w < l; w++) {
                if (typeof (arrSFNotif[w]) != "undefined") {
                    var n = (typeof (arrSFNotif[w].objData.notiftemplate) != "undefined" ? G.objData.notiftemplate : arrSFNotif[w].objData.NOTIFTEMPLATE);
                    if (n == lastnotiftempate) {
                        var f = arrSFNotif.splice(w, 1);
                        var J = showSFNotif(true, f);
                        if (J) {
                            l -= 1;
                            w -= 1;
                            c += 1;
                            if (c >= b || $(".divContent").size() > 5 || $(".divIsi").size() > 5) {
                                break
                            }
                        } else {
                            arrSFNotif.splice(w, 0, f[0])
                        }
                    } else {}
                } else {
                    break
                }
            }
        } else {
            if (!R && arrSFNotif.length) {
                if ($(".divContent").size() < 5 && $(".divIsi").size() < 5) {
                    showSFNotif()
                }
            }
        }
    } else {
        return false
    }
    return true
}
setTimeout(function() {
    firstloadnotif = false
}, 10000);
function getclick3() {
    $listAct3.click();
    showSFNotif();
    updateCounter()
}
function closeNotif() {
    $(".boxAct.closeNotif").click(function() {
        $(this).parent().parent().remove();
        showSFNotif();
        updateCounter()
    })
}
function updateClosedNotif(a) {
    if ($(a).parents(".divIsi").siblings(".divIsi").size()) {
        $.get("?ofid=Notification.updateStatus&idseq=" + $(a).parents(".divIsi").data("notifid"));
        $(a).parents(".divIsi").remove()
    } else {
        $.get("?ofid=Notification.updateStatus&idseq=" + $(a).parents(".divContent").data("notifid"));
        $(a).parents(".divContent").remove();
        removeCookie()
    }
    showSFNotif();
    updateCounter()
}
function removeCookie() {
    if ($(".divContent").length == 0) {
        $(".nt-exp").remove()
    }
}
function minimizeNotif() {
    if ($(".divContent").size() > 0 && $(".notif-group").length < 1) {
        var c = $("<div>").addClass("nt-exp");
        var a = $("<div>").addClass("notif-group");
        var b = 0;
        $(".divIsi").each(function(f, e) {
            b += ($(e).children(".notifitem").length == 0 ? 1 : $(e).children(".notifitem").length)
        });
        b += arrSFNotif.length;
        var d = $("<div>").addClass("val").text(b);
        c.appendTo("#divSFNotif");
        a.appendTo(c);
        d.appendTo(a);
        c.click(function() {
            $(".divContent").toggle("fade");
            if (document.cookie.indexOf("COOKIENOTIF") == -1) {
                setCookie("COOKIENOTIF", "on")
            } else {
                if (getCookie("COOKIENOTIF") == "off") {
                    setCookie("COOKIENOTIF", "on")
                } else {
                    setCookie("COOKIENOTIF", "off")
                }
            }
        })
    }
}
function updateCounter() {
    var a = 0;
    $(".divIsi").each(function(d, c) {
        a += ($(c).children(".notifitem").length == 0 ? 1 : $(c).children(".notifitem").length)
    });
    a += arrSFNotif.length;
    $(".val").text(a)
}
function removePrompNotif(a) {
    try {
        var c = $("a[data-req_no='" + a.NO + "']");
        if (c.html() == null) {
            c = $("div[data-req_no='" + a.NO + "'][data-tmpltcode=" + a.TMPLPROMP + "] a")
        }
        if (typeof (c) == "undefined" || c == null) {
            var b = -1;
            b = arrSFNotif.findIndex(function(e) {
                return e.objData.REQ_NO == a.NO && e.objData.TMPLTCODE == a.TMPLPROMP
            });
            if (b > -1) {
                arrSFNotif.splice(b, 1)
            }
        } else {
            followUpNotif(c, null, null, false)
        }
    } catch (d) {}
}
function empInfoPopUp(a) {
    popWindow("?sfid=hrm.employee.empinfopop&emp_id=" + a, "popWin", 1000, 700, "scrollbars=yes,resizable=yes")
}
;