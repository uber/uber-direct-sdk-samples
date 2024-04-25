import React, { useState } from 'react';
import { styled } from 'baseui';
import { Tab } from 'baseui/tabs';

import Card from 'src/components/card';
import Column from 'src/components/column';
import Form from './form';
import Loading from 'src/components/loading';
import Tabs from 'src/components/tabs';
import DeliveryCard from 'src/components/delivery-card';
import Pre from 'src/components/pre';

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  width: '100%',
});

const GetDeliveryDetailed: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [delivery, setDelivery] = useState(null);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const deliveryId = e.currentTarget['delivery_id'].value;
    try {
      const response = await fetch(
        `/api/uber-direct/get-delivery/${deliveryId}`,
        {
          method: 'GET',
        }
      );
      const responseData = await response.json();
      setDelivery(responseData.delivery);
      setResponse(JSON.stringify(responseData, null, 2));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setDelivery(`Error: ${error.message}`);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Column>
        <h2>Get Delivery Detailed</h2>
        <Card>
          {loading ? (
            <Loading size="large" />
          ) : (
            <Form handleSubmit={handleSubmit} />
          )}
        </Card>
      </Column>
      <Column>
        <Tabs>
          <Tab title="Example">
            <DeliveryCard delivery={delivery} />
          </Tab>
          <Tab title="Response">
            <h2>Response</h2>
            {response && (
              <Card>
                <Pre>{response}</Pre>
              </Card>
            )}
          </Tab>
        </Tabs>
      </Column>
    </Container>
  );
};

export default GetDeliveryDetailed;
