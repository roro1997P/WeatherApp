
export const getWeather = async (city) => {

    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ea654de70b97198ff373da06eeef738`);
    const data = await resp.json();

    if (data.cod === "404") {
        return false;
    } else {
        return data;
    }

};