import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormControl label="Pickup Address">
        <Input id="pickup_address" />
      </FormControl>
      <FormControl label="Pickup Name">
        <Input id="pickup_name" />
      </FormControl>
      <FormControl label="Pickup Phone Number">
        <Input id="pickup_phone_number" />
      </FormControl>
      <FormControl label="Dropoff Address">
        <Input id="dropoff_address" />
      </FormControl>
      <FormControl label="Dropoff Name">
        <Input id="dropoff_name" />
      </FormControl>
      <FormControl label="Dropoff Phone Number">
        <Input id="dropoff_phone_number" />
      </FormControl>
      <FormControl label="Manifest Items">
        <Input id="manifest_items" />
      </FormControl>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
