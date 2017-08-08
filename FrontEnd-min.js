/*
 * FrontEnd
 * Version: 4.0
 * License: (C) 2015 - 2017 under GNU General Public License Version 2.
 * Download/Clone: https://github.com/krishnaTORQUE/FrontEnd
 */
function $(elms, callback) {var gElms = document.querySelectorAll(elms);var gElms_length = gElms.length;if (gElms_length > 0) {if (gElms_length > 1) {if (typeof callback === 'function') {for (var i = 0; i < gElms_length; i++) {callback(gElms[i]);}} else {return gElms;}} else {if (typeof callback === 'function') {callback(document.querySelector(elms));} else {return document.querySelector(elms);}}} else {return false;}}function is_var(vari) {return (vari !== null && vari !== '' && vari.length > 0);}function is_qstr(field) {var url = window.location.search;if (url.indexOf('?' + field + '=') !== -1) {return true;} else if (url.indexOf('&' + field + '=') !== -1) {return true;}return false;}function qstr(param) {var uris = window.location.search.split('&');var uris_length = uris.length;for (var i = 0; i < uris_length; i++) {var part = uris[i].split('=');if (part[0] === param) {return part[1];break;}}}function rand(min, max) {return Math.floor((Math.random() * max) + min);}function rand_num(length) {if (typeof length === 'undefined') {length = '40';}var value = '';for (var i = 0; i < length; i++) {value += Math.floor((Math.random() * 9) + 0);}return value;}function rand_str(length) {if (typeof length === 'undefined') {length = '40';}var value = '';var letnum = 'abcdefghijklmnopqrstuvwxyz0123456789';for (var i = 0; i < length; i++) {value += letnum.charAt(Math.floor((Math.random() * letnum.length) + 0));}return value;}function uc_words(str) {return (str + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function ($1) {return $1.toUpperCase();});}function uc_first(str) {return str.charAt(0).toUpperCase() + str.slice(1);}function trims(str, charlist) {str = str.trim();charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');var re = new RegExp('[' + charlist + ']+$', 'g');return (str + '').replace(re, '');}function rws(str) {return str.replace(/^\s+|\s+$/g, '');}function parse_html(html) {var content = new DOMParser().parseFromString(html, 'text/html');return content;}function css_prop(elem, prop) {return window.getComputedStyle(elem).getPropertyValue(prop);}function elm_index(elm) {if (elm.parentElement !== null) {return Array.prototype.indexOf.call(elm.parentElement.children, elm);}return 'document';}function scroll_position() {var coordinate = [];coordinate['x'] = window.pageXOffset || document.documentElement.scrollLeft;coordinate['y'] = window.pageYOffset || document.documentElement.scrollTop;return coordinate;}function has_scroll(elem) {if (typeof elem === 'undefined' || elem === null) {return (document.body.scrollHeight > window.innerHeight);}return (elem.scrollHeight > elem.clientHeight);}function is_visible(elem) {if (has_scroll(null)) {if (elem.offsetTop < window.innerHeight) {return true;} else if ((parseInt(elem.offsetTop) - parseInt(window.innerHeight)) <= scroll_position()['y']) {return true;}return false;}return true;}function length_mk(val) {if (val > 1000) {val = (val / 1000).toFixed(1);if (val > 1000) {val = (val / 1000).toFixed(1) + 'M';} else {val = val + 'K';}}return val;}function valid_alpha(alpha, check) {if (typeof check === 'undefined') {check = 'all';}switch (check) {case 'all':return ((/^[a-zA-Z]+$/).test(alpha));break;case 'low':return ((/^[a-z]+$/).test(alpha));break;case 'up':return ((/^[A-Z]+$/).test(alpha));break;}}function valid_num(num) {return ((/^[0-9]+$/).test(num));}function valid_email(email) {var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return (regex.test(email));}function valid_ip(ip) {var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;return (regex.test(ip));}function valid_url(url) {var regex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;return (regex.test(url));}function valid_input(target) {return (target.checkValidity() === true && target.validity.valid === true);}function usr_browser() {var browsers_list = ['Firefox','Opr','Edge','Chrome','Safari','Netscape','Maxthon','Konqueror','MSIE','Trident','UCBrowser','UCWEB'];var browsers_list_length = browsers_list.length;for (var j = 0; j < browsers_list_length; j++) {var the_sbrowser = new RegExp(browsers_list[j], 'gi');if (navigator.userAgent.match(the_sbrowser)) {var get_brow = browsers_list[j];break;}}if (get_brow && get_brow !== 'undefined') {if (get_brow === 'MSIE' || get_brow === 'Trident') {return 'Internet Explorer';} else if (get_brow === 'UCBrowser' || get_brow === 'UCWEB') {return 'UC Browser';} else if (get_brow === 'Opr') {return 'Opera';} else {return get_brow;}} else {return 'Other';}}function usr_os() {var os = 'Other';var os_arr = {'windows nt 10': 'Windows 10','windows nt 6.3': 'Windows 8.1','windows nt 6.2': 'Windows 8','windows nt 6.1': 'Windows 7','windows nt 6.0': 'Windows Vista','windows nt 5.2': 'Windows Server 2003/XP x64','windows nt 5.1': 'Windows XP','windows xp': 'Windows XP','windows nt 5.0': 'Windows 2000','windows me': 'Windows ME','win98': 'Windows 98','win95': 'Windows 95','win16': 'Windows 3.11','macintosh|mac os x': 'Mac OS X','mac_powerpc': 'Mac OS 9','ubuntu': 'Ubuntu','Red Hat': 'Red Hat','linux': 'Linux','iphone': 'iPhone','ipod': 'iPod','ipad': 'iPad','android': 'Android','blackberry': 'BlackBerry','webos': 'Mobile'};var obj_length = Object.keys(os_arr).length;for (var i = 0; i < obj_length; i++) {var regex = new RegExp(Object.keys(os_arr)[i], 'gi');if (navigator.userAgent.match(regex)) {os = os_arr[Object.keys(os_arr)[i]];break;}}return os;}function ajax(param, callback, upload_progress) {if (!param.method) {param.method = 'POST';}if (!param.file) {param.file = false;}if (!param.data) {param.data = null;}if (!param.type) {param.type = 'application/x-www-form-urlencoded; charset=utf-8';}if (!param.x_req_wid) {param.Xreq = true;}var xmlHttpReq = false;var return_data = [];if (window.XMLHttpRequest) {xmlHttpReq = new XMLHttpRequest();} else if (window.ActiveXObject) {try {xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP");} catch (ex) {try {xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");} catch (ex) {xmlHttpReq = false;}}}if (xmlHttpReq) {var data = '';if (param.data !== null) {var mData = Object.keys(param.data);var mData_length = mData.length;for (var i = 0; i < mData_length; i++) {var temp_key = mData[i];if (i > 0) {data += '&' + mData[i] + '=' + param.data[temp_key];} else {data += mData[i] + '=' + param.data[temp_key];}}}if (param.method === 'GET' || param.method === 'HEAD' || param.method === 'PUT' || param.method === 'DELETE') {if (param.data !== null) {param.url += '?' + data;data = null;}xmlHttpReq.open(param.method, param.url, true);} else if (param.method === 'POST') {xmlHttpReq.open(param.method, param.url, true);if (param.type && param.file === false) {xmlHttpReq.setRequestHeader('Content-Type', param.type);}if (param.x_req_wid === true) {xmlHttpReq.setRequestHeader('HTTP_X_REQUESTED_WITH', 'XMLHttpRequest');xmlHttpReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');}} else {param.method = false;}if (param.method) {if (typeof upload_progress === 'function') {xmlHttpReq.upload.addEventListener('progress', upload_progress, false);}xmlHttpReq.addEventListener('load', function () {if (this.status >= 200 && this.status < 400) {return_data = {0: 'success','response': this.responseText.trim()};callback(return_data);} else {return_data = {0: 'error','response': 'HEADER','code': this.status};callback(return_data);}}, false);xmlHttpReq.addEventListener('error', function () {return_data = {0: 'error','response': 'SERVER'};callback(return_data);}, false);xmlHttpReq.addEventListener('abort', function () {return_data = {0: 'error','response': 'ABORT'};callback(return_data);}, false);if (param.file) {xmlHttpReq.send(param.file);} else {xmlHttpReq.send(data);}} else {return_data = {0: 'error','response': 'METHOD'};callback(return_data);}} else {return_data = {0: 'error','response': 'BROWSER'};callback(return_data);}}var animate = {fade: function (elem, inout, time) {if (typeof time === 'undefined') {time = '3';}if (typeof inout === 'undefined') {inout = 'out';}switch (inout) {case 'in':var opa = '0';elem.style.opacity = opa;elem.style.display = 'block';var setInt = setInterval(function () {opa = Number(opa) + Number('0.01');if (opa > 1) {opa = 1;elem.setAttribute('style', 'display: block');clearInterval(setInt);} else {elem.style.opacity = opa;}}, time);break;case 'out':var opa = '1.0';elem.style.opacity = opa;var setInt = setInterval(function () {opa = Number(opa) - Number(0.01);if (opa < 0) {opa = 0;elem.setAttribute('style', 'display: none');clearInterval(setInt);elem.style.display = 'none';} else {elem.style.opacity = opa;}}, time);break;}},slide: function (elem, updown, time) {if (typeof time === 'undefined') {time = '3';}if (typeof updown === 'undefined') {updown = 'up';}elem.style.overflow = 'hidden';switch (updown) {case 'down':var height = css_prop(elem, 'height');height = height.toString().replace(/px/i, '');var hei = 0;elem.style.height = '0px';elem.style.display = 'block';var setInt = setInterval(function () {hei += 2;if (hei > height) {clearInterval(setInt);elem.setAttribute('style', 'display: block');} else {elem.style.height = hei + 'px';}}, time);break;case 'up':elem.style.display = 'block';var height = elem.clientHeight;var hei = elem.clientHeight;var setInt = setInterval(function () {hei -= 2;if (hei < 0) {clearInterval(setInt);elem.setAttribute('style', 'display: none; height: ' + height + 'px');} else {elem.style.height = hei + 'px';}}, time);break;}}};var cookie = {set: function (param) {if (typeof param['extime'] === 'undefined') {param['extime'] = 86400;}if (typeof param['path'] === 'undefined') {param['path'] = '/';}var date = new Date();date.setTime(date.getTime() + (param['extime'] * 24 * 60 * 60 * 1000));var expires = "expires=" + date.toUTCString();document.cookie = param['name'] + '=' + param['value'] + '; ' + expires + '; ' + param['path'];},get: function (name) {var result = false;var s_cookie = document.cookie.trim().split(';');var s_cookie_length = s_cookie.length;for (var i = 0; i < s_cookie_length; i++) {var ss_cookie = s_cookie[i].split('=');if (ss_cookie[0].charAt(0) === ' ') {ss_cookie[0] = ss_cookie[0].substr(1);}if (name === ss_cookie[0]) {result = ss_cookie[1];break;}}return result;},remove: function (name, path) {if (typeof path === 'undefined') {path = '/';}var date = new Date();date.setTime(date.getTime() - (86400 * 24 * 60 * 60 * 1000));var expires = "expires=" + date.toUTCString();document.cookie = name + '=' + '' + '; ' + expires + '; ' + path;},remove_all: function (path) {if (typeof path === 'undefined') {path = '/';}var s_cookie = document.cookie.trim().split(';');var s_cookie_length = s_cookie.length;for (var i = 0; i < s_cookie_length; i++) {var ss_cookie = s_cookie[i].split('=');this.remove(ss_cookie[0], path);}}};function on(type, callback) {if (document.attachEvent) {document.attachEvent('on' + type, function (e) {callback(e.target, e);});} else {document.addEventListener(type, function (e) {callback(e.target, e);}, false);}}function lazy_load_imgs() {$('.lazy-load-imgs', function (lazy_img) {if (is_visible(lazy_img) && lazy_img.hasAttribute('data-lazy-load-imgs')) {var lazy_load_attr = lazy_img.getAttribute('data-lazy-load-imgs');lazy_img.setAttribute('src', lazy_load_attr);lazy_img.removeAttribute('data-lazy-load-imgs');}});}window.addEventListener('load', function () {$('a', function (elm) {elm.addEventListener('click', function (e) {var lastChar = this.href.substr(this.href.length - 1);if (lastChar === "#") {e.preventDefault();}var a_regex = new RegExp('/' + window.location.host + '/');if (!a_regex.test(this.href)) {e.preventDefault();e.stopPropagation();window.open(this.href, '_blank');}}, false);});$('.field_disable', function (elm) {elm.setAttribute('disabled', 'true');});$('.btn_disable', function (elm) {elm.setAttribute('disabled', 'true');});$('.img_click', function (elm) {elm.addEventListener('click', function () {window.open(this.getAttribute('src'), '_blank');}, false);});$('.require_this', function (elm) {elm.addEventListener('blur', function () {var fieldValue = this.value.trim();if (fieldValue === '' || fieldValue === ' ') {this.classList.add('field_require', 'blink');var disElm = this;setTimeout(function () {disElm.classList.remove('blink');}, 2000);} else {this.classList.remove('field_require', 'blink');}}, false);});lazy_load_imgs();window.addEventListener('scroll', lazy_load_imgs, false);}, false);