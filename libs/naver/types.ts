export interface NaverDailyResult {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface NaverDailyItemAttributes {
  data: string;
}

export interface NaverDailyItem {
  _attributes: NaverDailyItemAttributes;
}

export interface NaverDailyChartdata {
  item: NaverDailyItem[];
}

export interface NaverDailyProtocol {
  chartdata: NaverDailyChartdata;
}

export interface NaverDailyData {
  protocol: NaverDailyProtocol;
}

export interface NaverListingComparedPrice {
  code: string;
  text: string;
  name: string;
}

export interface NaverListingStockExchange {
  code: string;
  zoneId: string;
  nationType: string;
  delayTime: string;
  startTime: string;
  endTime: string;
  closePriceSendTime: string;
  nameKor: string;
  nameEng: string;
  name: string;
}

export interface NaverListingIndustryCode {
  code: string;
  industryGroupKor: string;
  name: string;
}

export interface NaverListingTradeStop {
  code: string;
  text: string;
  name: string;
}

export interface NaverListingStock {
  stockEndType: string;
  compareToPreviousPrice: NaverListingComparedPrice;
  stockExchangeType: NaverListingStockExchange;
  reutersCode: string;
  symbolCode: string;
  stockName: string;
  stockNameEng: string;
  reutersIndustryCode: string;
  industryCodeType: NaverListingIndustryCode;
  openPrice: string;
  closePrice: string;
  compareToPreviousClosePrice: string;
  fluctuationsRatio: string;
  executedVolume?: string;
  accumulatedTradingVolume: string;
  accumulatedTradingValue: string;
  localTradedAt: Date;
  marketValue: string;
  dividend: string;
  dividendPayAt: Date;
  tradeStopType: NaverListingTradeStop;
  stockEndUrl: string;
  delayTime: number;
  marketStatus: string;
  exchangeOperatingTime: boolean;
}

export interface NaverListingData {
  pageSize: number;
  page: number;
  totalCount: number;
  stocks: NaverListingStock[];
}
