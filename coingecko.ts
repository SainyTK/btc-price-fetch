import axios from "axios";
import { CoinGeckoRes } from "./types/CoinGecko";
import { delay } from "./utils/delay";

const main = async () => {
  for (let i = 1; i <= 31; i++) {
    const url = `https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${i}-07-2022`;

    const data: CoinGeckoRes = await axios.get(url).then((res) => res.data);

    console.log(`${data.market_data.current_price.thb}`);
    await delay(2000);
  }
};

main();
