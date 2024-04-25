import React from 'react';
import { styled } from 'baseui';
import { Button } from 'baseui/button';
import Card from 'src/components/card';

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  width: '100%',
});

const Column = styled('div', {
  padding: '1rem',
});

const DeliveryCard = ({ delivery }) => {
  if (!delivery) {
    return null;
  }

  console.log(delivery);

  return (
    <Card>
      <Container>
        <Column>
          <h1>TODO</h1>
        </Column>
        <Column>
          <h2>Delivery</h2>
        </Column>
      </Container>
    </Card>
  );
};

export default DeliveryCard;
