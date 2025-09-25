type CityData = {
    humidity: string;
    windSpeed: string;
    temperature: string;
};
export const data: Record<string, CityData> = {
    London: {
        humidity: "56%",
        windSpeed: "22.5 km/h",
        temperature: "50F",
    },
    Paris: {
        humidity: "79%",
        windSpeed: "19 km/h",
        temperature: "80F",
    },
    Delhi: {
        humidity: "77%",
        windSpeed: "30 km/h",
        temperature: "45F",
    },
};