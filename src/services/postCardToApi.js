const postCardToApi = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
        method: "POST",
        body: JSON.stringify(formInfo),
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            //codigo con el que manejar/modificar data


        })
};

export default postCardToApi;