'use strict';

/**
 * generateId generate hyphenated lowercase string
 * @param  {string} name
 * @return {string}
 */

module.exports = function generateId(name) {
    if (!name || name === '' || typeof name !== 'string') {
        return;
    }

    var fixedName = name.replace(/\s/, '-');

    return fixedName.toLowerCase();
};
