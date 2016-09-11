/*
 * Some Parse
 */
var getParse = {
    /*
     * Parse HTML
     */
    parseHTML: function (html) {
        var content = new DOMParser().parseFromString(html, 'text/html');
        return content;
    },
    /*
     * Get CSS Value
     */
    cssProp: function (param) {
        return  window.getComputedStyle(param['elem']).getPropertyValue(param['prop']);
    },
    /*
     * Get Format Number Length
     */
    lengthK: function (val) {
        if (val > 1000) {
            val = (val / 1000).toFixed(1);
            if (val > 1000) {
                val = (val / 1000).toFixed(1) + 'M';
            } else {
                val = val + 'K';
            }
        }
        return val;
    }
};