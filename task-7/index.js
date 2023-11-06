const countries = {
    USA: ["New York", "Los Angeles", "Chicago"],
    Ukraine: ["Kyiv", "Lviv", "Donetsk"],
    Germany: ["Berlin", "Hamburg", "Munich"]
};

const selectCountry = document.getElementById("country");
const selectCity = document.getElementById("cities");

selectCountry.addEventListener("change", (event) => {
    const selectedCountry = selectCountry.value;
    const cities = countries[selectedCountry];
    const out = document.getElementById("output");

    selectCity.innerHTML = "";

    cities.forEach(city => {
        const option = document.createElement("option");
        option.text = city;
        option.value = city;
        selectCity.appendChild(option);
    });

    selectCity.addEventListener("change", (event) => {
        selectedCity = selectCity.value;
        out.innerHTML = `${selectedCountry}, ${selectedCity}`;
    });
});





