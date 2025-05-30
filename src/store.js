export const initialStore = () => {
  return {
    // message: null,
    PEOPLE_URL:
      'https://www.swapi.tech/api/people?page=2&limit=8&expanded=true',
    PLANETS_URL:
      'https://www.swapi.tech/api/planets?page=1&limit=8&expanded=true',
    VEHICLES_URL:
      'https://www.swapi.tech/api/vehicles?page=1&limit=8&expanded=true',
    PEOPLE_IMGAES_URL:
      'https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people',
    PLANETS_IMAGES_URL:
      'https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planet',
    VEHICLES_IMAGES_URL:
      'https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicle',

    Planets: [],
    People: [],
    Vehicles: [],
  };
};

export const storeReducer = (store, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS_PEOPLE':
      return {
        ...store,
        People: action.payload, // Update the People array in the store
      };
    case 'FETCH_SUCCESS_PLANETS':
      return {
        ...store,
        Planets: action.payload, // Update the Planets array in the store
      };
    case 'FETCH_SUCCESS_VEHICLES':
      return {
        ...store,
        Vehicles: action.payload, // Update the Vehicles array in the store
      };
  }
};
