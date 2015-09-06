'use strict';

var idGenerator = require('../../js/modules/id-generator'),
    singleWord = 'lovely',
    hyphenatedWord = 'very-lovely',
    spacedWord = 'extremely lovely',
    combinedWord = 'very-very lovely';

var tests = function() {
    describe(
        'GENERATE ID',
        function() {
            it('Do not run no string',
                function() {
                    assert.isUndefined(idGenerator());
                }
            );

            it('Do not run if empty an string',
                function() {
                    assert.isUndefined(idGenerator(''));
                }
            );

            it('Do not run if not a string',
               function() {
                    assert.isUndefined(idGenerator(undefined));
                    assert.isUndefined(idGenerator(['a', 'b']));
                    assert.isUndefined(idGenerator({'blah': 'muh'}));
               }
            );

            it('Return captilized \'lovely\'',
                function() {
                    assert.deepEqual(idGenerator(singleWord),
                        'lovely');
                }
            );

            it('Return captilized \'extremely lovely\'',
                function() {
                    assert.deepEqual(idGenerator(hyphenatedWord),
                        'very-lovely');
                }
            );

            it('Return captilized \'very-lovely\', replace hyphen with space',
                function() {
                    assert.deepEqual(idGenerator(spacedWord),
                        'extremely-lovely');
                }
            );

            it('Return captilized \'very-very lovely\', replace hyphen with space',
                function() {
                    assert.deepEqual(idGenerator(combinedWord),
                        'very-very-lovely');
                }
            );
    });
};

tests();
