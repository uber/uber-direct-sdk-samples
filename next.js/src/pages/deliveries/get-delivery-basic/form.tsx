import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormControl label="Delivery ID">
        <Input id="delivery_id" />
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
