const residentsBtn = document.querySelector('#residents-btn');

const clickButton = event => {
    console.log("YOU get the residents.")
    axios.get('https://swapi.dev/api/planets/?search=alderaan').then(
        (res) => {
            let residentUrls =res.data.results[0].residents
            for(let i = 0; i < residentUrls.length; i++){
                console.log(residentUrls[i])
                axios.get(residentUrls[i])
                .then(() =>{
                    let residentHeading = document.createElement('h2');
                    let residentHeading = residentUrls[i].content_url
                    body.appendChild(residentHeading)
                })}
        }
    )
}

residentsBtn.addEventListener('click', clickButton())