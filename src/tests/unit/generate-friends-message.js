'use strict';

var generateMessage = require('../../js/modules/generate-friends-message'),
    noFriends = [],
    oneFriend = ['Jerry Mo'],
    twoFriends = ['Jerry Mo', 'Adam Lo'],
    threeFriends = ['Jerry Mo', 'Adam Lo', 'Hernand Fo'],
    fourFriends = ['Jerry Mo', 'Adam Lo', 'Hernand Fo', 'Abe Ade'],
    manyFriends = ['Jerry Mo', 'Adam Lo', 'Hernand Fo', 'Abe Ade', 'Tu Szu', 'Laszlo Horvath'];

var tests = function() {
    describe(
        'GENERATE FRIENDS MESSAGE',
        function() {
            it('Do not run if no data',
                function() {
                    assert.isUndefined(generateMessage());
                }
            );

            it('Do not run if empty an array',
                function() {
                    assert.isUndefined(generateMessage(noFriends));
                }
            );

            it('Do not run if data is not an array',
                function() {
                    assert.isUndefined(generateMessage({'blah': 2}));
                    assert.isUndefined(generateMessage(true));
                    assert.isUndefined(generateMessage(undefined));
                    assert.isUndefined(generateMessage('betty'));
                }
            );

            it('Returns string if data is correct type ofarray',
                function() {
                    assert.isString(generateMessage(oneFriend));
                }
            );

            it('For single friend return: Jerry Mo has stayed here',
                function() {
                    assert.deepEqual(generateMessage(oneFriend),
                        'Jerry Mo has stayed here');
                }
            );

            it('For 2 friends sort and return: Adam Lo and Jerry Mo have stayed here',
                function() {
                    assert.deepEqual(generateMessage(twoFriends),
                        'Adam Lo and Jerry Mo have stayed here');
                }
            );

            it('For 3 friends sort and return: Adam Lo, Hernand Fo and 1 other friend have stayed here',
                function() {
                    assert.deepEqual(generateMessage(threeFriends),
                        'Adam Lo, Hernand Fo and 1 other friend have stayed here');
                }
            );

            it('For 4 friends sort and return: Abe Ade, Adam Lo and 2 other friends have stayed here',
                function() {
                    assert.deepEqual(generateMessage(fourFriends),
                        'Abe Ade, Adam Lo and 2 other friends have stayed here');
                }
            );

            it('For 6 friends sort and return: Abe Ade, Adam Lo and 4 other friends have stayed here',
                function() {
                    assert.deepEqual(generateMessage(manyFriends),
                        'Abe Ade, Adam Lo and 4 other friends have stayed here');
                }
            );
    });
};

tests();
