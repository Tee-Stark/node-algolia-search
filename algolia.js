const Algolia = require("algoliasearch")

const ALGOLIA_APP_ID = '6D3TY09ETR' || process.env.ALGOLIA_APP_ID
const ALGOLIA_ADMIN_KEY = '9989bdee084372f5af98a4aef0dba893' || process.env.ALGOLIA_ADMIN_KEY

const algoliaClient = Algolia(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);

const carsIndex = algoliaClient.initIndex("cars")

const cars = [
  { objectID: '1', brand: 'Toyota', model: 'Camry', year: '2022', color: 'Silver' },
  { objectID: '2', brand: 'Honda', model: 'Civic', year: '2021', color: 'Red' },
  { objectID: '3', brand: 'Ford', model: 'Mustang', year: '2020', color: 'Black' },
  { objectID: '4', brand: 'Chevrolet', model: 'Corvette', year: '2023', color: 'Yellow' },
  { objectID: '5', brand: 'BMW', model: 'X5', year: '2022', color: 'White' }
];

async function addToCarsIndex(carsList) {
    const data = await carsIndex.saveObjects(carsList)
    console.log(data)
}

// addToCarsIndex(cars)

const searchCar = async (query) => {
    const data = await carsIndex.search(query)
    console.log(data.hits)
}

searchCar('2')
