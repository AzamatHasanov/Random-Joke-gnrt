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