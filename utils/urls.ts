
export const balancesUrl = (account: string, paginationKey: string | null = null) => `https://lcd.terra.dev/cosmos/bank/v1beta1/balances/${account}${paginationKey ? `pagination.key=${paginationKey}` : ''}`;
export const transactionsUrl = (account: string, offset: number = 0) => `https://fcd.terra.dev/v1/txs?limit=10&account=${account}&offset=${offset}`;
