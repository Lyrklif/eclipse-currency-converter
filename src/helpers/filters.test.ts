import filters from './filters';
import { expect, describe, it } from 'vitest'

describe('filters', () => {
  it('should return a number with the specified number of decimal places', () => {
    const value = 123.4567;
    const decimalPlaces = 2;
    const expectedResult = '123,46';

    const result = filters.number(value, decimalPlaces);

    expect(result).to.equal(expectedResult);
  });

  it('should return the original value if no decimal places are specified', () => {
    const value = 123.4567;
    const expectedResult = '123,4567';

    const result = filters.number(value);

    expect(result).to.equal(expectedResult);
  });

  it('should return undefined if no value is provided', () => {
    const expectedResult = undefined;

    // @ts-ignore
    const result = filters.number();

    expect(result).to.equal(expectedResult);
  });
});
