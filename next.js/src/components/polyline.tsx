import { useStyletron } from 'baseui';
import { Polyline as Line } from '@react-google-maps/api';

const Polyline = ({ path }) => {
  const [_, theme] = useStyletron();
  if (path.length === 0) {
    return null;
  }
  return (
    <Line
      path={path}
      options={{ strokeColor: theme.colors.accent, strokeWeight: 5 }}
    />
  );
};

export default Polyline;
