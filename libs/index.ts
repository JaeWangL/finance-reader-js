import { ExchangeSymbolType } from './enums';
import { readDailyDataAsync } from './naver';

export const readDataAsync = async (
  itemCode: string,
  startDate: Date = new Date(1970, 1, 1),
  endDate: Date = new Date(),
  exchange: ExchangeSymbolType = ExchangeSymbolType.KRX,
): Promise<string> => {
  try {
    const res = await readDailyDataAsync(itemCode);

    return JSON.stringify(res);
  } catch (e) {
    throw new Error(e.toString());
  }
};
