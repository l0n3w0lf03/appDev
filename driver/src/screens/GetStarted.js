/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
/*
The component is child component for location search
the selected location can be stored in state variable
*/

export default class GetStarted extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ paddingTop: 20, flex: 1 }}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={'search'}
          listViewDisplayed="false"
          fetchDetails={true}
          renderDescription={row =>
            row.description || row.formatted_address || row.name
          }
          onPress={(data, details = null) => {
            this.props.handler(data.description);
}}
          getDefaultValue={() => {
            return ''; // text input default value
          }}
          query={{
            key: 'AIzaSyD6hl1nh-mG9scBryWnwx0F0kXiSShqXHQ',
            language: 'en', // language of the results
            types: '(cities)', // default: 'geocode'
          }}
          styles={{
                                    textInput: {
                                    padding: 10,
                                    backgroundColor: '#eee',
                                    },
                                    container: {
                                    position: 'absolute',
                                    top: 5,
                                    left: 5,
                                    right: 5,
                                    },
                                    listView: {
                                    position: 'absolute',
                                    top: 45,
                                    },
                                    separator: {
                                    backgroundColor: '#e0e0e0',
                                    height: 1,
                                    },
          }}
          enablePoweredByContainer={true}
          nearbyPlacesAPI="GoogleReverseGeocoding"
          GooglePlacesSearchQuery={{
            rankby: 'distance',
            types: 'food',
          }}
          filterReverseGeocodingByTypes={[
            'locality',
            'administrative_area_level_3',
          ]}
          debounce={200}
        />
      </View>
    );
  }
}
