fetch("./monsters.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ok response" + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    const characterList = document.getElementById("catalog");

    data.forEach((character) => {
      const characterDiv = document.createElement("div");
      characterDiv.innerHTML = `
       <h2>${character.name}</h2>
       <p><strong>Speciality:</strong> ${character.speciality}</p>
     `;
      characterList.appendChild(characterDiv);
    });
  })
  .catch((error) => {
    console.log("Problem with the fetch operation", error);
  });
