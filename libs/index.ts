import { ExchangeSymbolType } from './enums';
import { getKrxListAsync } from './krx';
import { readDailyDataAsync } from './naver';

export const listingStocksAsync = async (): Promise<string> => {
  try {
    const res = await getKrxListAsync();

    return res;
  } catch (e) {
    throw new Error(e.toString());
  }
};

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
