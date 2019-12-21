import axios from 'axios';
import apiKeys from '../apiKeys';


const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlanets = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/planets.json`)
    .then((response) => {
      const demPlanets = response.data;
      const planets = [];
      Object.keys(demPlanets).forEach((pId) => {
        demPlanets[pId].id = pId;
        planets.push(demPlanets[pId]);
      });
      resolve(planets);
    })
    .catch((error) => reject(error));
});

export default { getPlanets };
