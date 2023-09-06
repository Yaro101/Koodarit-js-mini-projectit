// Alusta tyhjä array ystävien nimiä varten - Initialize an empty array to store friends names
const friends = [];

// Funktio ystävän lisäämiseksi arrayyn ja näytön päivittämiseksi - Function to add a friend to the array and update the display
function addFriend() {
    if (friends.length >= 10) {
        alert("Olet saavuttanut maksimimäärän ystäviä (10)!");
        return;
    }

    const friendName = prompt("Kirjoita ystäväsi nimi:");

    if (friendName) {
        friends.push(friendName);
        displayFriends();
    }
}

// Toiminto näyttää ystävien nimet verkkosivulla - Function to display friends names on the web page
function displayFriends() {
    const friendsListDiv = document.getElementById("friendsList");
    friendsListDiv.innerHTML = ""; // Clear the previous content

    for (let i = 0; i < friends.length; i++) {
        const friendElement = document.createElement("p");
        friendElement.textContent = `${i + 1}. ${friends[i]}`;
        friendsListDiv.appendChild(friendElement);
    }
}

// Liitä addFriend-funktio button-click-event:sta. - Attach the addFriend function to the button click event
const addFriendButton = document.getElementById("addFriendButton");
addFriendButton.addEventListener("click", addFriend);
