import { assertType, createAssertType } from '../index';
import * as assert from 'assert'

/* https://github.com/woutervh-/typescript-is/issues/73 */

// Note: this test case is most useful when testing in combiation with "strictNullChecks: true | false"

describe('assertType', () => {
    describe('assertType<string | null>', () => {
        it('should not throw an error for null', () => {
            assertType<string | null>(null)
        });
    });

    describe('assertType<{a: number}>', () => {
        it('should throw an error if a is null', () => {

            const _ass = createAssertType<{a: number}>();
            console.log(_ass.toString());
            assert.throws(() => _ass({a: null}));
        });
    });

    describe('assertType<{a?: number}>', () => {
        it('should not throw an error if a is not defined', () => {
            const _ass = createAssertType<{a?: number}>();
            console.log(_ass.toString());
            assert.doesNotThrow(() => _ass({}));
        });
    });

    describe('assertType<{a: number | null}>', () => {
        it('should not throw an error if a is null', () => {
            const _ass = createAssertType<{a: number | null}>();
            console.log(_ass.toString());
            assert.doesNotThrow(() => _ass({a: null}));
        });
    });
});
