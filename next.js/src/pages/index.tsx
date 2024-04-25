import * as React from 'react';
import Link from 'next/link';
import { styled, useStyletron } from 'baseui';
import Container from '../components/container';

const Examples = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  width: '100%',
});

const Column = styled('div', {
  padding: '2rem',
});

const List = styled('ul', {
  listStyle: 'circle',
});

const ListItem = styled('li', {
  marginBottom: '0.5rem',
});

const Index: React.FC = () => {
  const [css, theme] = useStyletron();
  return (
    <Container>
      <Examples>
        <Column>
          <h2>Create Quote</h2>
          <List>
            <ListItem>
              <Link href="/deliveries/create-quote-basic">
                Create Quote basic
              </Link>
            </ListItem>
            <Link href="/deliveries/create-quote-with-map">
              <ListItem>Create Quote with map</ListItem>
            </Link>
          </List>
        </Column>
        <Column>
          <h2>Create Delivery</h2>
          <List>
            <ListItem>Coming Soon!</ListItem>
          </List>
        </Column>
        <Column>
          <h2>Cancel Delivery</h2>
          <List>
            <ListItem>Coming Soon!</ListItem>
          </List>
        </Column>
        <Column>
          <h2>Get Delivery</h2>
          <List>
            <ListItem>
              <Link href="/deliveries/get-delivery-basic">
                Get Delivery basic
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/deliveries/get-delivery-detailed">
                Get Delivery detailed
              </Link>
            </ListItem>
            <ListItem>Get Delivery with map</ListItem>
          </List>
        </Column>
        <Column>
          <h2>List Deliveries</h2>
          <List>
            <ListItem>Coming Soon!</ListItem>
          </List>
        </Column>
        <Column>
          <h2>Organizations</h2>
          <List>
            <ListItem>Coming Soon!</ListItem>
          </List>
        </Column>
      </Examples>
    </Container>
  );
};

export default Index;
