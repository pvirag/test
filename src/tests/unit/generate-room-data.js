'use strict';

var generateRoomData = require('../../js/modules/generate-room-data');

var tests = function() {
    describe(
        'GENERATE ROOM DATA',
        function() {
            it('Returns array',
                function() {
                    assert.isArray(generateRoomData());
                }
            );

            it('Array contains objects',
                function() {
                    var data = generateRoomData();
                    assert.isObject(data[0]);
                }
            );

            it('Each object to have \'name\', \'message\' and \'id\' keys',
                function() {
                    var data = generateRoomData(),
                        item = data[0];

                    function verify(item) {
                        assert.property(item, 'name');
                        assert.property(item, 'message');
                        assert.property(item, 'id');
                    }

                    data.forEach(verify);
                }
            );
    });
};

tests();
