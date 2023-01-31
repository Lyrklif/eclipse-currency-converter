interface ResRatesInterface {
  base: string;
  date: string;
  disclaimer: string;
  timestamp: number;
  rates: {
    [someStrKeyWhichIsDynamic: string]: number;
  };
}

interface ExchangeInterface {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}

interface ResExchangesInterface {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: {
    [someStrKeyWhichIsDynamic: string]: ExchangeInterface;
  };
}

export type { ResRatesInterface, ResExchangesInterface, ExchangeInterface };
