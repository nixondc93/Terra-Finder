import { CardHeader, Card, CardContent } from "@mui/material";
import { useRouter } from "next/router";

const Address = () => {
  const router = useRouter();
  const { accountKey } = router.query;

  return (
    <Card variant="outlined">
      <CardHeader title="Address" />
      <CardContent>
        <span>{accountKey}</span>
      </CardContent>
    </Card>
  );
};

export default Address;
