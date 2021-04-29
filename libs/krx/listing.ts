import Axios from 'axios';
import iconv from 'iconv-lite';
import { Tabletojson } from 'tabletojson';

export const getKrxListAsync = async (): Promise<string> => {
  const res = await Axios.get('http://kind.krx.co.kr/corpgeneral/corpList.do?method=download&searchType=13', {
    responseType: 'arraybuffer',
  });

  const utf8Str = iconv.decode(res.data, 'euc-kr');
  const tablesAsJson = Tabletojson.convert(utf8Str);

  return JSON.stringify(tablesAsJson);
};
