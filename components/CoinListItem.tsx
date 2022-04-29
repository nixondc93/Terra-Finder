import { ListItem, ListItemText } from "@mui/material";
import { parseDenom, parseDenomInt } from "../utils/helpers";
const CoinListItem = ({ denom, amount }: { denom: string; amount: string }) => {
  return (
    <ListItem divider alignItems="center">
      <ListItemText primary={parseDenom(denom)} />
      <ListItemText primary={parseDenomInt(parseInt(amount))} />
    </ListItem>
  );
};

export default CoinListItem;
