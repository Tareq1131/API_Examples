const loadUser = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => display(data));
}

const display = countries=>{
    const countryContainner = document.getElementById('all-countries');
    // countryContainner.innerHTML = user.results[0].gender
    countries.forEach(country =>{
        console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML =`
        <h3>Name:${country.name.common}</h3>
        <p>Capital:${country.capital ? country.capital[0]: 'No Capital'}</p>
        
        ` ;
        countryContainner.appendChild(countryDiv);
    })
    // console.log('data',countries);
}

loadUser();