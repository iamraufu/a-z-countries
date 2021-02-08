fetch("https://restcountries.eu/rest/v2/all")
    .then(respond => respond.json())
    .then(data => displayCountries(data));

const renderCountryInfo = country => {
    const countryDiv = document.getElementById("countryDetail");
    countryDiv.innerHTML = `
         <h1>${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flag}">
        `
}

const displayCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(respond => respond.json())
        .then(data => renderCountryInfo(data[0]));
}

const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries");
    countries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.className = 'country';
        const countryInfo = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="displayCountryDetails('${country.name}')">Click to See Details</button>
         `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);

    });





    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement("div");
    //     countryDiv.className = 'country';
    //     // const h3 = document.createElement("h3");
    //     // h3.innerText = country.name;
    //     // countryDiv.appendChild(h3);

    //     // const p = document.createElement("p");
    //     // p.innerText = country.capital;
    //     // countryDiv.appendChild(p);

    //     const countryInfo = `
    //     <h3>${country.name}</h3>
    //     <p>${country.capital}</p>
    //     `

    //     countryDiv.innerHTML = countryInfo;
    //     countriesDiv.appendChild(countryDiv);
    // }
}