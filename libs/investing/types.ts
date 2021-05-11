export enum InvestingCountryType {
  US = 'usa',
  CN = 'china',
  HK = 'hong-kong',
  JP = 'japan',
  UK = 'uk',
  FR = 'france',
}

export interface InvestingListingData {
  종목: string;
  티커: string;
  종가: string;
  '변동 %': string;
  거래량: string;
}
