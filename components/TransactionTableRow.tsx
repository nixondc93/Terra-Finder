import { TableCell, TableRow } from "@mui/material";
import { useRouter } from "next/router";
import { parseDenom, parseDenomInt, parseDateTime } from "../utils/helpers";
import { ITransactions } from "../utils/types";

const TransactionTableRow = ({ tx_data }: { tx_data: ITransactions }) => {
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
          ? `-${parseDenomInt(parseInt(transactionValue.amount))} ${parseDenom(
              transactionValue.denom
            )}`
          : "-"}
      </TableCell>
      <TableCell>
        {isRecievingFunds
          ? `+${parseDenomInt(parseInt(transactionValue.amount))} ${parseDenom(
              transactionValue.denom
            )}`
          : "-"}
      </TableCell>
      <TableCell>{parseDateTime(timestamp)}</TableCell>
      <TableCell>{`${parseDenomInt(parseInt(feeValue.amount))} ${parseDenom(
        feeValue.denom
      )}`}</TableCell>
    </TableRow>
  );
};

export default TransactionTableRow;
