'use strict';

var processData = require('../../js/modules/process-data'),
    customData = {"test": "betty","item1": "pop"};

var tests = function() {
    describe(
        'PROCESS-DATA',
        function() {
            it('Returns an object',
                function() {
                    assert.isObject(processData());
                }
            );

            it('Returns custom data file',
                function() {
                    assert.isObject(processData(customData));
                }
            );

            it('Object\'s value for key \'test\' is \'betty\'', function() {
                    var response = processData(customData)
                    assert.deepEqual(response.test, 'betty');
                }
            );

            it('Returns default data file if \'undefined\' is passed',
                function() {
                    var response = processData(undefined)
                    assert.isObject(response);
                    assert.property(response, 'deluxe');
                }
            );

            it('Returns default data file if \'null\' is passed',
                function() {
                    var response = processData(null);
                    assert.isObject(response);
                    assert.property(response, 'deluxe');
                }
            );
    });
};

tests();
