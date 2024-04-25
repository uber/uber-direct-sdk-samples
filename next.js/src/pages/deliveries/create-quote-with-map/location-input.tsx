import React, { useState } from 'react';
import { useStyletron } from 'baseui';
import { Input } from 'baseui/input';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Loading from 'src/components/loading';

type Props = {
  id: string;
  onSelect: (address: string, latLng: { lat: number; lng: number }) => void;
};

const LocationInput = ({ id, onSelect }: Props) => {
  const [address, setAddress] = useState('');
  const [_, theme] = useStyletron();

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    onSelect(value, latLng);
  };
  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <Input
            {...getInputProps({
              id: id,
              placeholder: `Enter ${id.replace(/_/g, ' ')}`,
            })}
          />
          <div>
            {loading ? <Loading /> : null}
            {suggestions.map((suggestion) => {
              const style = {
                ...theme.typography.LabelMedium,
                cursor: 'pointer',
                backgroundColor: suggestion.active
                  ? theme.colors.accent200
                  : '#fff',
                padding: `${theme.sizing.scale300} ${theme.sizing.scale600}`,
              };
              return (
                <div
                  key={suggestion.placeId}
                  {...getSuggestionItemProps(suggestion, { style })}
                >
                  {suggestion.description}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationInput;
