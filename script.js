console.log("Getting a secret, then making a quote");

const out = document.querySelector("div#quote");

console.log(__BEARER_TOKEN__);

const API_BASE_URL = "https://nf-api.onrender.com/";
const api = `${API_BASE_URL}/api/v1/quotes`;

const options = {
    headers: {
        Authorization: `Bearer __BEARER_TOKEN__`,
    },
};

console.log(api, options);

/*
const response = await fetch(api, options);
console.log(response);
const data = await response.json();
console.log(data);
*/