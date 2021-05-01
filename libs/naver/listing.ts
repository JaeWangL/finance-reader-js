import Axios from 'axios';
import { MarketType } from '../enums';

export const getNaverListAsync = async (market: MarketType): Promise<string> => {
  /*
  for (let i = 0; i < 100; i++) {
    const res = Axios.get(`http://api.stock.naver.com/stock/exchange/${market}/marketValue?page=${i + 1}&pageSize=60`, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });
  }
  */
  console.log(MarketType[market]);
  // NASDAQ
  try {
    const res = await Axios.get(
      `http://api.stock.naver.com/stock/exchange/${MarketType[market]}/marketValue?page=1&pageSize=60`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0',
        },
      },
    );

    return res.data;
  } catch (e) {
    console.log(e.toString());
  }

  return 'Error';
};
