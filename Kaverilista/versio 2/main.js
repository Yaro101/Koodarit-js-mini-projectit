// Alusta tyhjä array kavereiden nimien tallentamista varten.

const friends = [];

// Toiminto, joka käsittelee lomakkeen lähettämistä kavereiden lisäämistä ja poistamista varten.

function handleFormSubmit(event) {
  event.preventDefault();   // Estä lomakkeen lähettäminen tavallisena HTTP-pyyntönä.

  const friendNameInput = document.getElementById("friendName");
  const friendName = friendNameInput.value.trim();

  if (friendName) {
    if (friends.length >= 10) {
      alert("Olet saavuttanut maksimimäärän Kavereita (10)!");   // Hälytys luettelokohtaisen enimmäismäärän saavuttamisesta
      friendNameInput.value = ""; // Tyhjennä syöttökenttä
    } else {
      // Tarkista, onko kaveri jo olemassa luettelossa
      const friendIndex = friends.indexOf(friendName);
      if (friendIndex !== -1) {
        // Jos kaveri on olemassa, poista se luettelosta
        friends.splice(friendIndex, 1);
        displayFriends(); // Päivitä näytetty luettelo
        alert(`Ystävä "${friendName}" poistettiin.`);
      } else {
        // Jos kaveria ei ole olemassa, lisää se luetteloon.
        friends.push(friendName);
        displayFriends(); // Päivitä näytetty luettelo
      }
    
      friendNameInput.value = ""; // Tyhjennä syöttökenttä
    }
  }
}

// Toiminto lajitella kaverit aakkosjärjestyksessä
function sortFriends() {
  friends.sort(); // Lajittele friends-array aakkosjärjestykseen
  displayFriends(); // Päivitä näytetty luettelo
}

// Toiminto kaverin poistamista varten
function deleteFriend() {
  const friendNameInput = document.getElementById("friendName");
  const friendName = friendNameInput.value.trim();

  if (friendName) {
    // Tarkista, onko kaveri jo olemassa luettelossa
    const friendIndex = friends.indexOf(friendName);
    if (friendIndex !== -1) {
      // Jos kaveri on olemassa, poista se luettelosta
      friends.splice(friendIndex, 1);
      displayFriends(); // Päivitä näytetty luettelo
      alert(`Kaveri "${friendName}" poistettiin.`);
    } else {
      // Jos kaveria ei ole olemassa, näytetään hälytysilmoitus
      alert(`Ystävää "${friendName}" ei löytynyt listasta.`);
    }

    friendNameInput.value = ""; // Tyhjennä syöttökenttä
  }
}

// Toiminto näyttää kavereiden nimet verkkosivulla
function displayFriends() {
    const friendsListDiv = document.getElementById("friendsList");
    friendsListDiv.innerHTML = ""; // Tyhjennä edellinen sisältö
  
    for (let i = 0; i < friends.length; i++) {
      const friendElement = document.createElement("p");
      friendElement.textContent = friends[i];
      friendsListDiv.appendChild(friendElement);
    }
}
  
// Liitä handleFormSubmit-funktio form submission eventiin.
const friendForm = document.getElementById("friendForm");
friendForm.addEventListener("submit", handleFormSubmit);

// Liitä sortFriends-funktio sort-friends-button-click-eventiin
const sortFriendsButton = document.getElementById("sortFriendsButton");
sortFriendsButton.addEventListener("click", sortFriends);

// Liitä deleteFriend-funktio to the delete-friends-button-click-eventiin
const deleteFriendButton = document.getElementById("deleteFriendButton");
deleteFriendButton.addEventListener("click", deleteFriend);
