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

    Stored_Planets: [],
    Stored_People: [],
    Stored_Vehicles: [],
  };
};

export  storeReducer = (state, action)=>{
  switch (action.type)  {
    case 'Add_People':

    default:
      throw new Error(`Unknown action type: ${action.type}`);

  }
};
