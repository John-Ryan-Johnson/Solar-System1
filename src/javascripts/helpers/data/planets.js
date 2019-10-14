const planets = [{
  name: 'Mercury',
  imageUrl: 'http://bestanimations.com/Earth&Space/Planets/mercury-planet-animation-2.gif',
  description: 'Mercury is the closest planet to the sun and the eighth largest. It has a diameter of 4,880 kilometers. Mercury has the widest temperature extremes in the solar system ranging from 90 degrees Kelvin to 700 degrees Kelvin. Mercury has a thick iron core and a thinner outer crust of rocky material.',
  isGasPlanet: 'false',
  numberOfMoons: '0',
  nameOfLargestMoon: 'N/A',
},
{
  name: 'Venus',
  imageUrl: 'https://media3.giphy.com/media/csUHYurqlupfq/giphy.webp?cid=790b76111e9ecb0426f6390a9fec4bdbfd19a50096a65087&rid=giphy.webp',
  description: 'Venus is the second planet from the Sun and the third brightest object in Earth\'s sky after the Sun and Moon. It is sometimes referred to as the sister planet to Earth, because their size and mass are so similar. Venus is also the closest planet to Earth.',
  isGasPlanet: 'false',
  numberOfMoons: 0,
  nameOfLargestMoon: 'N/A',
},
{
  name: 'Earth',
  imageUrl: 'https://media0.giphy.com/media/kreUUBLQDT5io/giphy.gif',
  description: 'Earth is the third planet from the Sun and largest of the terrestrial planets. Surprisingly, while it is only the fifth largest planet in terms of size and mass, it is the densest (5,513 kg/m3) of all the planets. Earth is the only planet in the solar system not named after a mythological being. Instead, its name is derived from the Old English word "ertha" and the Anglo-Saxon word "erda" which means ground or soil.',
  isGasPlanet: 'false',
  numberOfMoons: 1,
  nameOfLargestMoon: 'Moon',
},
{
  name: 'Mars',
  imageUrl: 'http://bestanimations.com/Earth&Space/Planets/mars-planet-animation-4.gif',
  description: 'Mars is the fourth planet from the Sun and last of the terrestrial planets. Like the rest of the planets in the solar system (except Earth), Mars is named after a mythological figure - the Roman god of war. In addition to its official name, Mars is sometimes called the Red Planet because of the brownish-red color of its surface. Mars is the second smallest planet in the solar system behind Mercury.',
  isGasPlanet: 'false',
  numberOfMoons: 2,
  nameOfLargestMoon: 'Phobos',
},
{
  name: 'Jupiter',
  imageUrl: 'https://media1.giphy.com/media/s2uampOAMWksU/200.webp?cid=790b76111e9ecb0426f6390a9fec4bdbfd19a50096a65087&rid=200.webp',
  description: 'Named after the Roman king of the gods, Jupiter is fitting of its name. With a mass of 1.90 x 1027 kg and a mean diameter of 139,822 km, Jupiter is easily the largest and most massive planet in the Solar System. To put this in perspective, it would take 11 Earths lined up next to each other to stretch from one side of Jupiter to the other and it would take 317 Earths to equal the mass of Jupiter.',
  isGasPlanet: 'true',
  numberOfMoons: 79,
  nameOfLargestMoon: 'Ganymede',
},
{
  name: 'Saturn',
  imageUrl: 'http://bestanimations.com/Earth&Space/Planets/saturn-planet-animation-3.gif',
  description: 'Saturn is the sixth planet from the Sun and second largest planet of the Solar System in terms of diameter and mass. If compared, it is easy to see why Saturn and Jupiter have been designated as relatives. From atmospheric composition to rotation, these two planets are extremely similar. Because of these factors, Saturn was named after the father of the god Jupiter in Roman mythology.',
  isGasPlanet: 'true',
  numberOfMoons: 82,
  nameOfLargestMoon: 'Titan',
},
{
  name: 'Uranus',
  imageUrl: 'https://media.giphy.com/media/peZF8O9PCUGMU/giphy.gif',
  description: 'Uranus, named after the the father of the Roman god Saturn, is the seventh planet in the Solar System and third of the gas giants. It is the third largest planet by diameter, yet fourth most massive.',
  isGasPlanet: 'true',
  numberOfMoons: 27,
  nameOfLargestMoon: 'Titania',
},
{
  name: 'Neptune',
  imageUrl: 'http://bestanimations.com/Earth&Space/Planets/neptune-planet-animation.gif',
  description: 'Neptune is the eighth planet from the Sun and last of the known planets. While it is the third largest planet with respect to mass, it is only the fourth largest in terms of diameter. Due to its blue coloration, Neptune was named after the Roman god of the Sea.',
  isGasPlanet: 'true',
  numberOfMoons: 14,
  nameOfLargestMoon: 'Triton',
}];

const getPlanets = () => planets;

export default { getPlanets };
