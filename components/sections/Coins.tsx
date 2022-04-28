import { Button, Card, CardContent, CardHeader, List } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { balancesUrl } from "../../utils/urls";
import CoinListItem from "../listItems/CoinListItem";

interface Balance {
  denom: string;
  amount: string;
}

interface Pagination {
  next_key: string | null;
  total: string | null;
}

interface CoinResponse {
  balances: Balance[];
  pagination: Pagination;
}

const Coins = () => {
  const router = useRouter();
  const { accountKey } = router.query;
  const [coinList, setCoinList] = useState<Balance[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    next_key: null,
    total: null,
  });

  const fetchCoinBalances = async (
    account: string,
    paginationKey?: string
  ): Promise<AxiosResponse<CoinResponse>> =>
    axios.get(balancesUrl(account, paginationKey));

  useEffect(() => {
    (async () => {
      if (accountKey) {
        const account = accountKey as string;
        const {
          data: { balances, pagination },
        } = await fetchCoinBalances(account);
        setCoinList(balances);
        setPagination(pagination);
      }
    })();
  }, [accountKey]);

  const handleLoadMore = async () => {
    const account = accountKey as string;
    const nextKey = pagination.next_key as string;
    const {
      data: { balances: fetchedBalances, pagination: fethedPagination },
    } = await fetchCoinBalances(account, nextKey);
    setCoinList((prevState) => [...prevState, ...fetchedBalances]);
    setPagination(fethedPagination);
  };

  return (
    <Card>
      <CardHeader title="Coins" />
      <CardContent>
        <List>
          {coinList.map(
            ({ denom, amount }: { denom: string; amount: string }) => (
              <CoinListItem key={denom} denom={denom} amount={amount} />
            )
          )}
        </List>
        {pagination.next_key && (
          <Button onClick={handleLoadMore}>Load More</Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Coins;
