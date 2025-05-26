export const initialStore = () => {
  return {
    // message: null,
    PEOPLE_URL: 'https://www.swapi.tech/api/people?page=1&limit=8',
    PLANETS_URL: 'https://www.swapi.tech/api/planets?page=1&limit=8',
    VEHICLES_URL: 'https://www.swapi.tech/api/vehicles?page=1&limit=8',
    PEOPLE_IMGAES_URL:
      'https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people',
    PLANETS_IMAGES_URL:
      'https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planet',
    VEHICLES_IMAGES_URL:
      'https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicle',

    planets: [{}],
    people: [{}],
    vehicles: [{}],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':
      const { id, color } = action.payload;

      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        ),
      };
    default:
      throw Error('Unknown action.');
  }
}
