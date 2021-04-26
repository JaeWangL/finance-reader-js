import axios from 'axios';
import dayjs from 'dayjs';
import parser from 'xml-js';
import { NaverDailyData, NaverDailyResult } from './types';

export const readDailyDataAsync = async (itemCode: string): Promise<NaverDailyResult[]> => {
  const res = await axios.get(
    `https://fchart.stock.naver.com/sise.nhn?timeframe=day&count=6000&requestType=0&symbol=${itemCode}`,
    {
      responseType: 'document',
      headers: {
        'Content-Type': 'application/xml;charset=utf-8',
      },
    },
  );
  const convertedJson = parser.xml2json(res.data, { compact: true, spaces: 2 });
  const parsedData: NaverDailyData = JSON.parse(convertedJson);

  return parsedData.protocol.chartdata.item.map((i) => {
    // eslint-disable-next-line no-underscore-dangle
    const splittedItem = i._attributes.data.split('|');

    return {
      date: dayjs(splittedItem[0], 'YYYYMMdd').toDate(),
      open: +splittedItem[1],
      high: +splittedItem[2],
      low: +splittedItem[3],
      close: +splittedItem[4],
      volume: +splittedItem[5],
    } as NaverDailyResult;
  });
};
