import axios from "axios";
import { BlockchainResponse } from "./types/BlockchainRes";
import { delay } from "./utils/delay";

const main = async () => {
  const address = `bc1qwxqe0tgwnk3zr4ysstqprmgfhx6fa0c9wjt4m8`;

  const SIZE = 50;
  let data: BlockchainResponse;
  let i = 0;

  do {
    const offset = i * SIZE;
    const url = `https://blockchain.info/rawaddr/${address}?offset=${offset}`;
    console.log(`Offset: ${offset}`);
    data = await axios.get(url).then((res) => res.data);
    data.txs
      .sort(() => -1)
      .forEach((item) => {
        const d = new Date(item.time * 1000).toISOString();
        const date = d.slice(0, 10);
        const time = d.slice(11, 19);

        console.log(`${date} ${time} ${item.result / Math.pow(10, 8)}`);
      });

    i++;
    await delay(2000);
  } while (data.txs.length);
};

main();
