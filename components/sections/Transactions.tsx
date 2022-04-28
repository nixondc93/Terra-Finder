import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { transactionsUrl } from "../../utils/urls";
import TransactionTableRow from "../TransactionTableRow";

interface ITransactions {
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
          value: {
            from_address: string;
            to_address: string;
            amount: [
              {
                dnom: string;
                amount: string;
              }
            ];
          };
        }
      ];
    };
  };
}

interface TransactionResponse {
  next: number;
  txs: ITransactions[];
}

const Transactions = () => {
  const router = useRouter();
  const { accountKey } = router.query;
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const fetchTransactions = async (
    account: string,
    offset: number
  ): Promise<AxiosResponse<TransactionResponse>> =>
    axios.get(transactionsUrl(account, offset));

  useEffect(() => {
    (async () => {
      if (accountKey) {
        const account = accountKey as string;
        const {
          data: { next, txs },
        } = await fetchTransactions(account, offset);

        setOffset(next);
        setTransactions(txs);
      }
    })();
  }, [accountKey]);

  const loadMoreHandler = async () => {
    const account = accountKey as string;
    const {
      data: { next, txs },
    } = await fetchTransactions(account, offset);

    setOffset(next);
    setTransactions((prevState) => [...prevState, ...txs]);
  };

  return (
    <Card>
      <CardHeader title="Transactions" />
      <CardContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Tx hash</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Block</TableCell>
                <TableCell>Amount(out)</TableCell>
                <TableCell>Amount(in)</TableCell>
                <TableCell>Timestamp</TableCell>
                <TableCell>Fee</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((tx) => (
                <TransactionTableRow key={tx.id} tx_data={tx} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button onClick={loadMoreHandler}>Load More</Button>
      </CardContent>
    </Card>
  );
};

export default Transactions;
