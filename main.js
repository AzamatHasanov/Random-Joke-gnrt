document.addEventListener('DOMContentLoaded', () => {
    const buttongnr = document.getElementById('generate')
    const joke = document.getElementById('joke')

    buttongnr.addEventListener('click', () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then((response) => response.json())
            .then((data) => {

                console.log(data);

                joke.textContent =
                    ` novu: "${data.type}" ${data.setup} `
            })
    })
})


document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search');
    const countryInput = document.getElementById('country');
    const countryInfo = document.getElementById('country-info');

    searchButton.addEventListener('click', () => {
        const country = countryInput.value.trim();
        if (!country) {
            countryInfo.textContent = 'Please enter a country name.';
            return;
        }

        fetch(`https://restcountries.com/v3.1/name/${country}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Country not found');
                }
                return response.json();
            })
            .then(data => {
                const countryData = data[0];
                const { name, capital, population, flags } = countryData;

                countryInfo.innerHTML = `
                    <h2>${name.common}</h2>
                    <p><strong>Capital:</strong> ${capital}</p>
                    <p><strong>Population:</strong> ${population.toLocaleString()}</p>
                    <img src="${flags.png}" alt="Flag of ${name.common}" class="flag">
                `;
            })
            .catch(error => {
                countryInfo.textContent = 'Country not found or there was an error.';
            });
    });
});