import { ListItem, ListItemText } from "@mui/material";
import { parseDenom } from "../../utils/helpers";
const CoinListItem = ({ denom, amount }: { denom: string; amount: string }) => {
  return (
    <ListItem divider>
      <ListItemText primary={parseDenom(denom)} />
      <ListItemText primary={amount} />
    </ListItem>
  );
};

export default CoinListItem;
