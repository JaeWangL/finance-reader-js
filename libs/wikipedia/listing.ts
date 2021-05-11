import Axios from 'axios';
import { Tabletojson } from 'tabletojson';
import { WikipediaListData } from './types';

export const getWikipediaListAsync = async (): Promise<string> => {
  const res = await Axios.get('https://en.wikipedia.org/wiki/List_of_S&P_500_companies', {
    responseType: 'arraybuffer',
  });

  const tablesAsJson = Tabletojson.convert(res.data);

  // NOTE: There are 2 tables in uppon url
  // tablesAsJson[0] = S&P 500 component stocks
  // tablesAsJson[1] = Selected changes to the list of S&P 500 components
  const trueResult: WikipediaListData[] = tablesAsJson[0];

  return JSON.stringify(trueResult);
};
