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
