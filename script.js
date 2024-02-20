function getUserData() {
    const userHandle = document.getElementById("user-handle").value;
    // const userHandle="skrsumit250"
    const url = `https://codeforces.com/api/user.info?handles=${userHandle}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
        console.log(data.result)
        const { email, organization, country, city, friendOfCount, titlePhoto,maxRank } = data.result[0];
        document.getElementById("user-email").innerText = `Email: ${email}`;
        document.getElementById("user-organization").innerText = `Organization: ${organization}`;
        document.getElementById("user-country").innerText = `Country: ${country}`;
        document.getElementById("user-city").innerText = `City: ${city}`;
        document.getElementById("user-friends").innerText = `Friends: ${friendOfCount}`;

        const { rating, maxRating, rank } = data.result[0];
        document.getElementById("user-rating").innerText = `Rating: ${rating}`;
        document.getElementById("user-max-rating").innerText = `Max Rating: ${maxRating}`;
        document.getElementById("user-rank").innerText = `Rank: ${rank}`;
        document.getElementById("user-max-rank").innerText = `Max Rank: ${maxRank}`;
        

        document.getElementById("user-avatar").src = titlePhoto; // Set image source
        })
        .catch(error => {
        console.error("Error fetching data:", error);
        alert("Error fetching data. Please try again.");
    });
}