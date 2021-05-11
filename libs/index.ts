import { MarketType } from './enums';
import { getInvestingListAsync, InvestingCountryType } from './investing';
import { getKrxAdministrativeListAsync } from './krx';
import { getNaverListAsync, readDailyDataAsync } from './naver';
import { getWikipediaListAsync } from './wikipedia';

export const listingStocksAsync = async (): Promise<string> => {
  try {
    const res = await getKrxAdministrativeListAsync();

    return res;
  } catch (e) {
    throw new Error(e.toString());
  }
};

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
