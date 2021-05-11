import Axios from 'axios';
import { Tabletojson } from 'tabletojson';
import { InvestingCountryType, InvestingListingData } from './types';

export const getInvestingListAsync = async (country: InvestingCountryType): Promise<string> => {
  const res = await Axios.get(`https://kr.investing.com/etfs/${country}-etfs`, {
    responseType: 'arraybuffer',
  });

  const tablesAsJson = Tabletojson.convert(res.data);

  // NOTE: There are 2 tables in uppon url
  // tablesAsJson[0] = valid stock list
  // tablesAsJson[1] = Stock Price Index (0: 코스피지수, 1: 코스피200 선물, 2: S&P 500, 3: 나스닥 100, 4: DAX, 5: 닛케이, 6: 미국 달러 지수)
  const trueResult: InvestingListingData[] = tablesAsJson[0];

  return JSON.stringify(trueResult);
};
