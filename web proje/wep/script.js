/*Değerlendirme*/
let userRating = 0;

function rateProduct(rating) {
    userRating = rating;
    displayRatingMessage();
}

function displayRatingMessage() {
    const messageElement = document.getElementById("rating-message");

    if (userRating === 0) {
        messageElement.textContent = "Lütfen bir puan seçin.";
    } else {
        messageElement.textContent = `Teşekkür ederiz! Ürüne verdiğiniz puan: ${userRating}/5`;
    }
}







