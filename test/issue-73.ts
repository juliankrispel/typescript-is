import { assertType } from '../index';
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
            assert.throws(() => assertType<{a: number}>({a: null}));
        });
    });

    describe('assertType<{a?: number}>', () => {
        it('should not throw an error if a is not defined', () => {
            assert.doesNotThrow(() => assertType<{a?: number}>({}));
        });
    });

    describe('assertType<{a: number | null}>', () => {
        it('should not throw an error if a is null', () => {
            assert.doesNotThrow(() => assertType<{a: number | null}>({a: null}));
        });
    });
});
