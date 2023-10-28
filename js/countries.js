const loadUser = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => display(data));
}

const display = countries=>{
    const countryContainner = document.getElementById('all-countries');
    // countryContainner.innerHTML = user.results[0].gender
    countries.forEach(country =>{
        console.log(country.cca2)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML =`
        <h3>Name:${country.name.common}</h3>
        <p>Capital:${country.capital ? country.capital[0]: 'No Capital'}</p>
        <button onClick ="loadCountryDetails('${country.cca2}')">Details</button>
        ` ;
        countryContainner.appendChild(countryDiv);
    })
    // console.log('data',countries);
}

const loadCountryDetails = code =>{
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('details comming soon',code);
    //    console.log(url);
       fetch(url)
       .then(res => res.json())
       .then(data => showCountryDetail(data[0]));
}

const showCountryDetail = country =>{
    const detailContainer = document.getElementById('country-detail')
    detailContainer.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <img src='${country.flags.png}'>

    `
}

loadUser();