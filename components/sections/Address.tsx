import { CardHeader, Card, CardContent } from "@mui/material";
import { useRouter } from "next/router";
import styled from "styled-components";

const CardHeaderWithBackground = styled(CardHeader)`
  background: rgba(84, 147, 247, 0.1);
`;

const Address = () => {
  const router = useRouter();
  const { accountKey } = router.query;

  return (
    <Card variant="outlined">
      <CardHeaderWithBackground title="Address" />
      <CardContent>
        <span>{accountKey}</span>
      </CardContent>
    </Card>
  );
};

export default Address;
