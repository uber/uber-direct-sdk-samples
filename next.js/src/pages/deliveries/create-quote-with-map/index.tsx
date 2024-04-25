import React, { useState } from 'react';
import { styled, useStyletron } from 'baseui';
import { Tab } from 'baseui/tabs';
import { ParagraphMedium } from 'baseui/typography';

import Card from 'src/components/card';
import CodeBlock from 'src/components/code-block';
import Column from 'src/components/column';
import Form from './form';
import Loading from 'src/components/loading';
import Map from 'src/components/map';
import Pre from 'src/components/pre';
import Tabs from 'src/components/tabs';

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  width: '100%',
});

const CreateQuoteBasic: React.FC = () => {
  const [css, theme] = useStyletron();
  const [pickup, setPickup] = useState(null);
  const [dropoff, setDropoff] = useState(null);

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const onUpdatePickup = (address: string, latLng: google.maps.LatLng) => {
    setPickup({ address, latLng });
  };

  const onUpdateDropoff = (address: string, latLng: google.maps.LatLng) => {
    setDropoff({ address, latLng });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const pickup_address = e.currentTarget['pickup_address'].value;
    const dropoff_address = e.currentTarget['dropoff_address'].value;
    try {
      const response = await fetch('/api/uber-direct/create-quote', {
        method: 'POST',
        body: JSON.stringify({
          pickup_address,
          dropoff_address,
        }),
      });
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
        <h2>Create Quote with map</h2>
        <Card>
          {loading ? (
            <Loading size="large" />
          ) : (
            <Form
              handleSubmit={handleSubmit}
              onUpdateDropoff={onUpdateDropoff}
              onUpdatePickup={onUpdatePickup}
            />
          )}
        </Card>
      </Column>
      <Column>
        <Tabs>
          <Tab title="Example">
            <div
              className={css({
                margin: `${theme.sizing.scale800} 0`,
              })}
            >
              <Map pickup={pickup} dropoff={dropoff} />
            </div>
          </Tab>
          <Tab title="Response">
            {response ? (
              <Card>
                <Pre>{response}</Pre>
              </Card>
            ) : (
              <ParagraphMedium>
                Make a request to see the response here.
              </ParagraphMedium>
            )}
          </Tab>
          <Tab title="Code">
            <h3>Next handler</h3>
            <CodeBlock language="javascript">
              {`
import { getAccessToken, createDeliveriesClient } from "@uber-direct";

export default async function handler(req, res) {
  try {
    const token = await getAccessToken();
    const client = createDeliveriesClient(token);
    const quote = await client.createQuote(JSON.parse(req.body));
    res.status(200).json({ quote });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
}
`}
            </CodeBlock>
          </Tab>
        </Tabs>
      </Column>
    </Container>
  );
};

export default CreateQuoteBasic;
