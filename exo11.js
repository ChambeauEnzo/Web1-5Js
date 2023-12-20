fetch(
    "https://192.168.65.243",
    { method: `GET`}
).then(
    response => response.json()
).then(
    response2 => console.log(JSON.stringify(response2))
).catch(error => console.log("Erreur :" + error)); 