import {Segment, Button, Divider } from "semantic-ui-react";

function CartSummary() {
  const user = true;
  return <>
    <Divider/>
    <Segment clearing size="large">
      <strong>Sub total :</strong> $0.00
      <Button
        icon="cart"
        color="teal"
        floated="right"
        content="Checkout"
      />
    </Segment>
  </>;
}

export default CartSummary;
