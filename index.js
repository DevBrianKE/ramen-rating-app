document.addEventListener("DOMContentLoaded", () => {
    displayRamens();
    addSubmitListener();
});

// Sample ramen data
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "img/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "img/gyukotsu.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "img/kojiro.jpg", rating: 3, comment: "Tasty but salty." },
    { id: 4, name: "Naruto Ramen", restaurant: "Naruto House", image: "img/naruto.jpg", rating: 4, comment: "Perfect balance!" },
    { id: 5, name: "Nirvana Ramen", restaurant: "Ramen Heaven", image: "img/nirvana.jpg", rating: 5, comment: "Heavenly taste!" }
];


// Display all ramen images
function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ""; // Clear existing images

    ramens.forEach((ramen, index) => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);

        // Automatically display details for the first ramen
        if (index === 0) {
            handleClick(ramen);
        }
    });
}

function handleClick(ramen) {
    document.getElementById("detail-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("restaurant-name").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementById("ramen-comment").textContent = ramen.comment;

    // Add a Delete Button dynamically
    const deleteContainer = document.getElementById("delete-container");
    deleteContainer.innerHTML = ""; // Remove any previous delete button

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Ramen";
    deleteBtn.classList.add("delete-btn");

    // Attach event listener to delete the ramen when clicked
    deleteBtn.addEventListener("click", () => removeRamen(ramen));

    // Append the button to the delete container
    deleteContainer.appendChild(deleteBtn);
}


// Handle form submission for adding new ramen
function addSubmitListener() {
    const form = document.getElementById("ramen-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const newRamen = {
            id: ramens.length + 1, // Assign a new unique ID
            name: document.getElementById("new-name").value,
            restaurant: document.getElementById("new-restaurant").value,
            image: document.getElementById("new-image").value.trim(),
            rating: document.getElementById("new-rating").value,
            comment: document.getElementById("new-comment").value
        };

        // Validate Image URL
        if (!newRamen.image.startsWith("http") || (!newRamen.image.endsWith(".jpg") && !newRamen.image.endsWith(".png") && !newRamen.image.endsWith(".jpeg"))) {
            alert("Please enter a valid image URL ending in .jpg, .png, or .jpeg.");
            return;
        }

        // Add new ramen to the array
        ramens.push(newRamen);

        // Create Image Element
        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.onerror = () => {
            alert("Image failed to load. Please check the URL.");
            return;
        };

        img.addEventListener("click", () => handleClick(newRamen));

        // Add to Menu
        document.getElementById("ramen-menu").appendChild(img);

        // Automatically show details of the new ramen
        handleClick(newRamen);

        // Reset Form
        form.reset();
    });
}
