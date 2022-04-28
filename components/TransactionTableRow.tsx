import { TableCell, TableRow } from "@mui/material";
import { useRouter } from "next/router";
import { parseDenom } from "../utils/helpers";

const TransactionTableRow = ({ tx_data }) => {
  const router = useRouter();
  const { accountKey } = router.query;
  const {
    txhash,
    chainId,
    height,
    timestamp,
    tx: {
      value: {
        fee: {
          amount: [feeValue],
        },
        msg: [
          {
            type,
            value: {
              to_address,
              amount: [transactionValue],
            },
          },
        ],
      },
    },
  } = tx_data;

  const isRecievingFunds = to_address === accountKey;

  const truncateTxHash = (txhash: string) =>
    `${txhash.substring(0, 7)}...${txhash.substring(56)}`;
  return (
    <TableRow>
      <TableCell>{truncateTxHash(txhash)}</TableCell>
      <TableCell>{type}</TableCell>
      <TableCell>
        {height}({chainId})
      </TableCell>
      <TableCell>
        {!isRecievingFunds
          ? `-${transactionValue.amount} ${parseDenom(transactionValue.denom)}`
          : "-"}
      </TableCell>
      <TableCell>
        {isRecievingFunds
          ? `+${transactionValue.amount} ${parseDenom(transactionValue.denom)}`
          : "-"}
      </TableCell>
      <TableCell>{timestamp}</TableCell>
      <TableCell>{`${feeValue.amount} ${feeValue.denom}`}</TableCell>
    </TableRow>
  );
};

export default TransactionTableRow;
