import React, { useState } from 'react';
import { FormControl } from 'baseui/form-control';
import { Button } from 'baseui/button';
import LocationInput from './location-input';

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onUpdateDropoff: (address: string, latLng: google.maps.LatLng) => void;
  onUpdatePickup: (address: string, latLng: google.maps.LatLng) => void;
};

const Form = ({ handleSubmit, onUpdateDropoff, onUpdatePickup }: Props) => {
  const [address, setAddress] = useState('');
  const [pickup, setPickup] = useState(null);
  const [dropoff, setDropoff] = useState(null);

  const handlePickupSelect = (address, latLng) => {
    setPickup({ address, latLng });
    onUpdatePickup(address, latLng);
  };

  const handleDropoffSelect = (address, latLng) => {
    setDropoff({ address, latLng });
    onUpdateDropoff(address, latLng);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl label="Pickup Address">
        <LocationInput id="pickup_address" onSelect={handlePickupSelect} />
      </FormControl>
      <FormControl label="Dropoff Address">
        <LocationInput id="dropoff_address" onSelect={handleDropoffSelect} />
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
