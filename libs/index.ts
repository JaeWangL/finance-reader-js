import { MarketType } from './enums';
import { readDailyDataAsync } from './naver';

export const readDataAsync = async (
  symbolCode: string,
  startDate: Date = new Date(1970, 1, 1),
  endDate: Date = new Date(),
  market: MarketType = MarketType.KRX,
): Promise<string> => {
  try {
    const res = await readDailyDataAsync(symbolCode);

    return JSON.stringify(res);
  } catch (e) {
    throw new Error(e.toString());
  }
};
