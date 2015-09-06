'use strict';

/**
 * generateMessage
 * @param  {array} friends
 * @return {string} compiled message for nr of friends
 */

module.exports = function generateMessage(friends) {
    if (!friends || !Array.isArray(friends) || !friends.length) {
        return;
    }

    var friendsCount = friends.length,
        messageSuffix = ' stayed here',
        messageOtherFriend = ' other friend',
        message,
        chosenOnes,
        remaining;

    if (friendsCount > 1) {
        friends.sort();
    }

    if (friendsCount === 1) {
        message = friends[0] + ' has' + messageSuffix;

        return message;
    }

    if (friendsCount === 2) {
        message = friends.join(' and ') + ' have' +
            messageSuffix;

        return message;
    }

    if (friendsCount > 2) {
        chosenOnes = friends.slice(0,2);
        remaining = friendsCount - 2;

        message = chosenOnes.join(', ') + ' and ' + remaining +
            messageOtherFriend +
            (remaining > 1 ? 's' : '')  +
            ' have' + messageSuffix;

        return message;
    }
};
