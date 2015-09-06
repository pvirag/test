'use strict';

var pretifyName = require('../../js/modules/pretify-name'),
    singleWord = 'lovely',
    hyphenatedWord = 'very-lovely',
    spacedWord = 'extremely lovely',
    combinedWord = 'very-very lovely';

var tests = function() {
    describe(
        'PRETIFY NAME',
        function() {
            it('Do not run no string',
                function() {
                    assert.isUndefined(pretifyName());
                }
            );

            it('Do not run if empty an string',
                function() {
                    assert.isUndefined(pretifyName(''));
                }
            );

            it('Do not run if not a string',
               function() {
                    assert.isUndefined(pretifyName(undefined));
                    assert.isUndefined(pretifyName(['a', 'b']));
                    assert.isUndefined(pretifyName({'blah': 'muh'}));
               }
            );

            it('Return captilized \'lovely\'',
                function() {
                    assert.deepEqual(pretifyName(singleWord),
                        'Lovely');
                }
            );

            it('Return captilized \'extremely lovely\'',
                function() {
                    assert.deepEqual(pretifyName(hyphenatedWord),
                        'Very Lovely');
                }
            );

            it('Return captilized \'very-lovely\', replace hyphen with space',
                function() {
                    assert.deepEqual(pretifyName(spacedWord),
                        'Extremely Lovely');
                }
            );

            it('Return captilized \'very-very lovely\', replace hyphen with space',
                function() {
                    assert.deepEqual(pretifyName(combinedWord),
                        'Very Very Lovely');
                }
            );
    });
};

tests();
