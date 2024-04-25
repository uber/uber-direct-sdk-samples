import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormControl label="Pickup Address">
        <Input id="pickup_address" />
      </FormControl>
      <FormControl label="Dropoff Address">
        <Input id="dropoff_address" />
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
