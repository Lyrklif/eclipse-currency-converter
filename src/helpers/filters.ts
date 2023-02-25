type TMixins = {
  number: (value: number, decimalPlaces?: number) => string | number;
}

const filters: TMixins = {
  number(value, decimalPlaces = 4) {
    if (!value) return value;

    const options = {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimalPlaces,
    };

    return value.toLocaleString(undefined, options);
  },
};

export default filters;
export type { TMixins };
