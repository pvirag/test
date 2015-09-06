'use strict';

var getRoomsData = require('./process-data'),
    generateMessage = require('./generate-friends-message'),
    generateId = require('./id-generator'),
    pretifyName = require('./pretify-name'),
    roomsData = getRoomsData();

/**
 * generateRoomData
 * @param  {string} roomName
 * @param  {array} friendsData
 * @return {object}
 */

function generateRoomData(roomName, friendsData) {
    if (!roomName || !friendsData ||
        typeof roomName !== 'string' ||
        !Array.isArray(friendsData)) {

        return;
    }

    var response = {
        name: pretifyName(roomName),
        message: generateMessage(friendsData),
        id: generateId(roomName)
    };

    return response;
}

/**
 * generateRoomsConfig
 * @return {array} array of room data objects
 */

module.exports = function generateRoomsConfig() {
    var room,
        name,
        friends,
        response = [];

    for (room in roomsData) {
        if (roomsData.hasOwnProperty(room)) {
            name = room;

            if (roomsData[room].hasOwnProperty('friends')) {
                friends = roomsData[room].friends;
                response.push(generateRoomData(name, friends));
            }
        }
    }

    return response;
};
