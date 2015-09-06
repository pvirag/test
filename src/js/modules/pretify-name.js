'use strict';

/**
 * pretifyName replaces '-' with spaces and capitalize
 * @param  {string} name
 * @return {string}
 */

module.exports = function pretifyName(name) {
    if (!name || name === '' || typeof name !== 'string') {
        return;
    }

    var fixedName = name.replace(/(\-|\s)/, ' '),
        prettyName = fixedName.replace(/(?:^|\s)\S/g , function(part) {
            return part.toUpperCase();
        });

    return prettyName;
};
