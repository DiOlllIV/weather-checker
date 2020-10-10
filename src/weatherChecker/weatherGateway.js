const cities = 'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json';

export const fetchCitiesData = async () => {
  
  const country = await fetch(cities)
    .then(response => response.json())
    .then(cities => cities);
 
  return country;
};

export const fetchWeatherData = (arr) =>
  arr.reduce( async(acc, city) => {
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lng}&lang=ru&units=metric&appid=852ddaeea93aa535ad34493613a88e30`)
      .then(response => response.json())
      .then(data => ([{
        country: data.timezone,
        city: city.name,
        curent: data.current, 
        daily: data.daily
      }]));

    return acc.then(data => [...weather, ...data]);
  }, Promise.all([]));
  

