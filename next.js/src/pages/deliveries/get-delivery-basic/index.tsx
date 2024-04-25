import React, { useState } from 'react';
import { styled } from 'baseui';
import { Tab } from 'baseui/tabs';

import Card from 'src/components/card';
import Column from 'src/components/column';
import Form from './form';
import Loading from 'src/components/loading';
import Pre from 'src/components/pre';
import Tabs from 'src/components/tabs';

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  width: '100%',
});

const GetDeliveryBasic: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const deliveryId = e.currentTarget['delivery_id'].value;
    console.log({ deliveryId });
    try {
      const response = await fetch(
        `/api/uber-direct/get-delivery/${deliveryId}`,
        {
          method: 'GET',
        }
      );
      const responseData = await response.json();
      setResponse(JSON.stringify(responseData, null, 2));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setResponse(`Error: ${error.message}`);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Column>
        <h2>Get Delivery Basic</h2>
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
          <Tab title="Response">
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

export default GetDeliveryBasic;
