import Axios from 'axios';
import iconv from 'iconv-lite';
import { Tabletojson } from 'tabletojson';
import { KrxAdministrativeListData } from './types';

export const getKrxListAsync = async (): Promise<string> => {
  // KRX Listed company
  const res = await Axios.get('http://kind.krx.co.kr/corpgeneral/corpList.do?method=download&searchType=13', {
    responseType: 'arraybuffer',
  });

  const utf8Str = iconv.decode(res.data, 'euc-kr');
  const tablesAsJson = Tabletojson.convert(utf8Str);

  return JSON.stringify(tablesAsJson);
};

export const getKrxAdministrativeListAsync = async (): Promise<string> => {
  // KRX Listed company
  const res = await Axios.get(
    // eslint-disable-next-line max-len
    'http://kind.krx.co.kr/investwarn/adminissue.do?method=searchAdminIssueSub&currentPageSize=5000&forward=adminissue_down',
    {
      responseType: 'arraybuffer',
    },
  );

  const utf8Str = iconv.decode(res.data, 'euc-kr');
  const tablesAsJson = Tabletojson.convert(utf8Str);
  // NOTE: First bracket is dummy, so we have to ignore this
  const trueResult: KrxAdministrativeListData[] = tablesAsJson[0];

  return JSON.stringify(trueResult);
};
