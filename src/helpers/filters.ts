
interface MixinsInterface {
  number: (value: number, decimalPlaces?: number) => string | number;
}

const filters: MixinsInterface = {
  number(value, decimalPlaces = 4) {
    if (!value) return value;

    return value.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimalPlaces,
    });
  },
};

export default filters;
export type { MixinsInterface };
