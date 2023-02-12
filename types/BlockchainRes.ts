export type SpendingOutpoints = {
  n: number;
  tx_index: number;
};

export type PrevOut = {
  addr: string;
  n: number;
  script: string;
  spending_outpoints: SpendingOutpoints[];
  spent: boolean;
  tx_index: number;
  type: number;
  value: number;
};

export type Input = {
  sequence: number;
  witness: string;
  script: string;
  index: number;
  prev_out: PrevOut[];
};

export type Out = {
  type: number;
  spent: boolean;
  value: number;
  spending_outpoints: SpendingOutpoints[];
  n: number;
  tx_index: number;
  script: string;
  addr: string;
};

export type Tx = {
  hash: string;
  ver: number;
  vin_sz: number;
  vout_sz: number;
  size: number;
  weight: number;
  fee: number;
  relayed_by: string;
  lock_time: number;
  tx_index: number;
  double_spend: boolean;
  time: number;
  block_index: number;
  block_height: number;
  inputs: Input[];
  out: Out[];
  result: number;
  balance: number;
};

export type BlockchainResponse = {
  hash160: string;
  address: string;
  n_tx: number;
  n_unredeemed: number;
  total_received: number;
  total_sent: number;
  final_balance: number;
  txs: Tx[];
};
