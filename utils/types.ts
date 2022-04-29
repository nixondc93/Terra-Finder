
export interface ITransactions {
  id: number;
  chainId: string;
  timestamp: string;
  txhash: string;
  height: string;
  tx: {
    type: string;
    value: {
      fee: {
        amount: [
          {
            denom: string;
            amount: string;
          }
        ];
      };
      msg: [
        {
          type: string
          value: {
            from_address: string;
            to_address: string;
            amount: [
              {
                denom: string;
                amount: string;
              }
            ];
          };
        }
      ];
    };
  };
}

