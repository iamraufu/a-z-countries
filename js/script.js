fetch("https://restcountries.eu/rest/v2/all")
    .then(respond => respond.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries");
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement("div");
        countryDiv.className = 'country';
        // const h3 = document.createElement("h3");
        // h3.innerText = country.name;
        // countryDiv.appendChild(h3);

        // const p = document.createElement("p");
        // p.innerText = country.capital;
        // countryDiv.appendChild(p);

        const countryInfo = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        `

        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    }
}