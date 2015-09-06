'use strict';

var data = require('../friends.json');

/**
 * processData
 * @param  {JSON} dataFile as json file dependency
 * @return {JSON}
 */

module.exports = function processData(dataFile) {
    if (!dataFile) {
        return data;
    }
    return dataFile;
};
