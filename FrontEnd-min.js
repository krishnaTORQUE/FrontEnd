/*
 * FrontEnd Version 1.16
 * License: (C) 2015 - 2017 under GNU General Public License Version 2.
 * Develop By Club Coding: http://clubcoding.com/
 * Download/Clone: https://github.com/krishnaTORQUE/FrontEnd
 */
function ajax(param, callback) {if (!param.meth) {param.meth = 'POST';}if (!param.file) {param.file = false;}if (!param.data) {param.data = null;}if (!param.type) {param.type = 'application/x-www-form-urlencoded; charset=utf-8';}if (!param.x_req_wid) {param.x_req_wid = true;}var xmlHttpReq;var create_httpReq = false;if (window.XMLHttpRequest) {xmlHttpReq = new XMLHttpRequest();create_httpReq = true;} else if (window.ActiveXObject) {try {xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP");create_httpReq = true;} catch (ex) {try {xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");create_httpReq = true;} catch (ex) {create_httpReq = false;}}}if (xmlHttpReq && create_httpReq) {var data = '';if (param.data !== null) {var mData = Object.keys(param.data);for (var i = 0; i < mData.length; i++) {var temp_key = mData[i];if (i > 0) {data += '&' + mData[i] + '=' + param.data[temp_key];} else {data += mData[i] + '=' + param.data[temp_key];}}}var url = param.url;if (param.meth === 'GET' && param.data !== null) {url += '?' + data;data = null;}xmlHttpReq.open(param.meth, url, true);if (param.file === false && param.meth === 'POST') {xmlHttpReq.setRequestHeader('Content-Type', param.type);if (param.x_req_wid === true) {xmlHttpReq.setRequestHeader('HTTP_X_REQUESTED_WITH', 'XMLHttpRequest');xmlHttpReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');}}xmlHttpReq.addEventListener('load', function () {if (this.status >= 200 && this.status < 400) {callback(this.responseText.trim());} else {callback('HEADER_ERROR: ' + this.status);}}, false);xmlHttpReq.addEventListener('error', function () {callback('SERVER_ERROR');}, false);xmlHttpReq.addEventListener('abort', function () {callback('USER_ABORT');}, false);xmlHttpReq.send(data);return xmlHttpReq;} else {return false;}}var animate = {fade: function (elem, inout, time) {if (typeof time === 'undefined') {time = '3';}if (typeof inout === 'undefined') {inout = 'out';}switch (inout) {case 'in':var opa = '0';elem.style.opacity = opa;elem.style.display = 'block';var setInt = setInterval(function () {opa = Number(opa) + Number('0.01');if (opa > 1) {opa = 1;elem.setAttribute('style', 'display: block');clearInterval(setInt);} else {elem.style.opacity = opa;}}, time);break;case 'out':var opa = '1.0';elem.style.opacity = opa;var setInt = setInterval(function () {opa = Number(opa) - Number(0.01);if (opa < 0) {opa = 0;elem.setAttribute('style', 'display: none');clearInterval(setInt);elem.style.display = 'none';} else {elem.style.opacity = opa;}}, time);break;}},slide: function (elem, updown, time) {if (typeof time === 'undefined') {time = '3';}if (typeof updown === 'undefined') {updown = 'up';}elem.style.overflow = 'hidden';switch (updown) {case 'down':var height = getParse.cssProp(elem, 'height');height = height.toString().replace(/px/i, '');var hei = 0;elem.style.height = '0px';elem.style.display = 'block';var setInt = setInterval(function () {hei += 2;if (hei > height) {clearInterval(setInt);elem.setAttribute('style', 'display: block');} else {elem.style.height = hei + 'px';}}, time);break;case 'up':elem.style.display = 'block';var height = elem.clientHeight;var hei = elem.clientHeight;var setInt = setInterval(function () {hei -= 2;if (hei < 0) {clearInterval(setInt);elem.setAttribute('style', 'display: none; height: ' + height + 'px');} else {elem.style.height = hei + 'px';}}, time);break;}}};var cf = {qstr: function (param) {var uris = window.location.search.split('&');for (var i = 0; i < uris.length; i++) {var part = uris[i].split('=');if (part[0] === param) {return part[1];break;}}},is_qstr: function (field) {var url = window.location.search;if (url.indexOf('?' + field + '=') !== -1) {return true;} else if (url.indexOf('&' + field + '=') !== -1) {return true;} else {return false;}},ranNum: function (length) {if (typeof length === 'undefined') {length = '40';}var value = '';for (var i = 0; i < length; i++) {value += Math.floor((Math.random() * 9) + 0);}return value;},ranStr: function (length) {if (typeof length === 'undefined') {length = '40';}var value = '';var letnum = 'abcdefghijklmnopqrstuvwxyz0123456789';for (var i = 0; i < length; i++) {value += letnum.charAt(Math.floor((Math.random() * letnum.length) + 0));}return value;},rand: function (min, max) {return Math.floor((Math.random() * max) + min);}};var cookie = {set: function (param) {if (typeof param['extime'] === 'undefined') {param['extime'] = 86400;}if (typeof param['path'] === 'undefined') {param['path'] = '/';}var date = new Date();date.setTime(date.getTime() + (param['extime'] * 24 * 60 * 60 * 1000));var expires = "expires=" + date.toUTCString();document.cookie = param['name'] + '=' + param['value'] + '; ' + expires + '; ' + param['path'];},get: function (name) {var result = false;var s_cookie = document.cookie.trim().split(';');for (var i = 0; i < s_cookie.length; i++) {var ss_cookie = s_cookie[i].split('=');if (ss_cookie[0].charAt(0) === ' ') {ss_cookie[0] = ss_cookie[0].substr(1);}if (name === ss_cookie[0]) {result = ss_cookie[1];break;}}return result;},remove: function (name, path) {if (typeof path === 'undefined') {path = '/';}var date = new Date();date.setTime(date.getTime() - (86400 * 24 * 60 * 60 * 1000));var expires = "expires=" + date.toUTCString();document.cookie = name + '=' + '' + '; ' + expires + '; ' + path;},removeAll: function (path) {if (typeof path === 'undefined') {path = '/';}var s_cookie = document.cookie.trim().split(';');for (var i = 0; i < s_cookie.length; i++) {var ss_cookie = s_cookie[i].split('=');this.remove(ss_cookie[0], path);}}};function getEB(attr_deti, callback) {var attr_deti1 = Object.keys(attr_deti);for (var m = 0; m < attr_deti1.length; m++) {var attr_deti2 = attr_deti[attr_deti1[m]];switch (attr_deti1[m]) {case 'id':callback(document.getElementById(attr_deti2));continue;break;case 'class':var the_clsId = document.getElementsByClassName(attr_deti2);break;case 'name':var the_clsId = document.getElementsByName(attr_deti2);break;case 'tag':var the_clsId = document.getElementsByTagName(attr_deti2);break;}if (the_clsId) {for (var i = 0; i < the_clsId.length; i++) {callback(the_clsId[i]);}}}}function dqs(elms, callback) {var gElms = document.querySelectorAll(elms);for (var i = 0; i < gElms.length; i++) {callback(gElms[i]);}}function _(elms) {return document.querySelectorAll(elms);}var getParse = {parseHTML: function (html) {var content = new DOMParser().parseFromString(html, 'text/html');return content;},cssProp: function (elem, prop) {return window.getComputedStyle(elem).getPropertyValue(prop);},elmIndex: function (elm) {if (elm.parentElement !== null) {return Array.prototype.indexOf.call(elm.parentElement.children, elm);}return 'document';},scrollPosi: function () {var coordinate = [];coordinate['x'] = window.pageXOffset || document.documentElement.scrollLeft;coordinate['y'] = window.pageYOffset || document.documentElement.scrollTop;return coordinate;},hasScroll: function (elem) {if (typeof elem === 'undefined' || elem === null) {return (document.body.scrollHeight > window.innerHeight) ? true : false;} else {return (elem.scrollHeight > elem.clientHeight) ? true : false;}},isVisible: function (elem) {if (this.hasScroll(null)) {if (elem.offsetTop < window.innerHeight) {return true;} else if ((parseInt(elem.offsetTop) - parseInt(window.innerHeight)) <= this.scrollPosi()['y']) {return true;}return false;} else {return true;}},lengthK: function (val) {if (val > 1000) {val = (val / 1000).toFixed(1);if (val > 1000) {val = (val / 1000).toFixed(1) + 'M';} else {val = val + 'K';}}return val;}};function lazy_load_imgs() {var lazy_load_imgs = document.getElementsByClassName('lazy-load-imgs');for (var i = 0; i < lazy_load_imgs.length; i++) {if (getParse.isVisible(lazy_load_imgs[i]) && lazy_load_imgs[i].hasAttribute('data-lazy-load-imgs')) {var lazy_load_attr = lazy_load_imgs[i].getAttribute('data-lazy-load-imgs');lazy_load_imgs[i].setAttribute('src', lazy_load_attr);lazy_load_imgs[i].removeAttribute('data-lazy-load-imgs');}}}window.addEventListener('load', function () {lazy_load_imgs();window.addEventListener('scroll', lazy_load_imgs, false);}, false);function onEvt(type, callback) {//if (typeof elem === 'undefined' || elem === null) {////} else {//if (elem.attachEvent) {//elem.attachEvent("on" + type, function () {//callback(elem);//});//} else {//elem.addEventListener(type, function () {//callback(elem);//}, false);//}//}if (document.attachEvent) {document.attachEvent("on" + type, function (e) {callback(e.target);});} else {document.addEventListener(type, function (e) {callback(e.target);}, false);}}window.addEventListener('load', function () {var requirethis = document.getElementsByClassName('requirethis');for (var i = 0; i < requirethis.length; i++) {requirethis[i].addEventListener('blur', function () {var fieldValue = this.value.trim();if (fieldValue === '' || fieldValue === ' ') {this.classList.add('fieldRequire', 'blink');var disElm = this;setTimeout(function () {disElm.classList.remove('blink');}, 2000);} else {this.classList.remove('fieldRequire');this.classList.remove('blink');}}, false);}}, false);window.addEventListener('load', function () {var select_option_elms = document.getElementsByClassName('select_option');for (var i = 0; i < select_option_elms.length; i++) {var option_selected = false, optlabel = '', option_vals = [], set, inr_htm, options_vl;var option_elms = select_option_elms[i].getElementsByTagName('option');for (var j = option_elms.length; j > 0; j--) {if (option_elms[0].hasAttribute('selected')) {option_selected = option_elms[0].textContent;}if (option_elms[0].hasAttribute('data-optlabel')) {option_vals[j] = '<div class="option optlabel" disabled>' + option_elms[0].textContent + '</div>';} else {option_vals[j] = '<div class="option">' + option_elms[0].textContent + '</div>';}option_elms[0].remove();if (option_elms.length <= 0) {select_option_elms[i].innerHTML = '';}}if (option_selected) {set = '<div class="set btn">' + option_selected + '</div>';} else {set = '<div class="set btn">' + option_vals[option_vals.length - 1] + '</div>';}inr_htm = '<div class="drop_down_box select_option_box">';for (var k = option_vals.length - 1; k > 0; k--) {inr_htm += option_vals[k];}inr_htm += '</div>';select_option_elms[i].innerHTML = set + inr_htm;select_option_elms[i].style.display = 'inline';select_option_elms[i].getElementsByClassName('set')[0].addEventListener('click', function () {select_option_reset();var is_opn = this.parentNode.getElementsByClassName('drop_down_box')[0];if (is_opn.style.display === 'block') {is_opn.style.display = 'none';} else {is_opn.style.display = 'block';}if (this.className.match(/btn_active/)) {this.classList.remove('btn_active');} else {this.classList.add('btn_active');}}, false);options_vl = select_option_elms[i].getElementsByClassName('option');for (var l = 0; l < options_vl.length; l++) {options_vl[l].addEventListener('click', function () {this.parentNode.parentNode.getElementsByClassName('set')[0].textContent = this.textContent;select_option_reset();}, false);}}document.addEventListener('click', function (e) {if (!e.target.className.match(/select_option|set|option/)) {select_option_reset();}}, false);}, false);function select_option_reset() {var select_option_elms = document.getElementsByClassName('select_option');for (var m = 0; m < select_option_elms.length; m++) {select_option_elms[m].getElementsByClassName('set')[0].classList.remove('btn_active');select_option_elms[m].getElementsByClassName('drop_down_box')[0].style.display = 'none';}}window.addEventListener('load', function () {var all_atag = document.getElementsByTagName('a');for (var i = 0; i < all_atag.length; i++) {all_atag[i].addEventListener('click', function (e) {var lastChar = this.href.substr(this.href.length - 1);if (lastChar === "#") {e.preventDefault();}var a_regex = new RegExp('/' + window.location.host + '/');if (!a_regex.test(this.href)) {e.preventDefault();e.stopPropagation();window.open(this.href, '_blank');}}, false);}var fieldDisable = document.getElementsByClassName('fieldDisable');for (var j = 0; j < fieldDisable.length; j++) {fieldDisable[j].setAttribute('disabled', 'disabled');}var btnDisable = document.getElementsByClassName('btnDisable');for (var k = 0; k < btnDisable.length; k++) {btnDisable[k].setAttribute('disabled', 'disabled');}var img_click = document.getElementsByClassName('img_click');for (var l = 0; l < img_click.length; l++) {img_click[l].addEventListener('click', function () {window.open(this.getAttribute('src'), '_blank');}, false);}}, false);var str = {ucWords: function (str) {return (str + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function ($1) {return $1.toUpperCase();});},ucFirst: function (str) {return str.charAt(0).toUpperCase() + str.slice(1);},trims: function (str, charlist) {str = str.trim();charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');var re = new RegExp('[' + charlist + ']+$', 'g');return (str + '').replace(re, '');},rws: function (str) {return str.replace(/^\s+|\s+$/g, '');}};var valid = {alpha: function (alpha, check) {if (typeof check === 'undefined') {check = 'all';}switch (check) {case 'all':return ((/^[a-zA-Z]+$/).test(alpha));break;case 'low':return ((/^[a-z]+$/).test(alpha));break;case 'up':return ((/^[A-Z]+$/).test(alpha));break;}},num: function (num) {return ((/^[0-9]+$/).test(num));},email: function (email) {var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return (regex.test(email));},ip: function (ip) {var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;return (regex.test(ip));},url: function (url) {var regex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;return (regex.test(url));},input: function (target) {return (target.checkValidity() === true && target.validity.valid === true);}};var visitor = {htmCheckOne: function () {var element = document.createElement('input');element.setAttribute('type', 'color');if (element.type === 'color') {return true;} else {return false;}},htmCheckTwo: function () {var element = document.createElement('input');element.setAttribute('type', 'date');if (element.type === 'date') {return true;} else {return false;}},htmCheckThree: function () {var element = document.createElement("canvas");if (element.getContext) {return true;} else {return false;}},html5: function () {return (this.htmCheckOne() || this.htmCheckTwo() || this.htmCheckThree());},css3: function () {var checkOne = 'opacity' in document.body.style;var checkTwo = 'text-shadow' in document.body.style;var checkThree = 'animation' in document.body.style;var checkFour = 'transition' in document.body.style;return (checkOne || checkTwo || checkThree || checkFour);},browser: function () {var browsers_list = ['Firefox','Chrome','Safari','Opera','Netscape','Maxthon','Konqueror','Edge','MSIE','Trident','UCBrowser','UCWEB'];for (var j = 0; j < browsers_list.length; j++) {var the_sbrowser = new RegExp(browsers_list[j], 'i');if (navigator.userAgent.match(the_sbrowser)) {var get_brow = browsers_list[j];break;}}if (get_brow && get_brow !== 'undefined') {if (get_brow === 'MSIE' || get_brow === 'Trident') {return 'Internet Explorer';} else if (get_brow === 'UCBrowser' || get_brow === 'UCWEB') {return 'UC Browser';} else {return get_brow;}} else {return 'Other';}}};