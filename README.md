# Ramen Rater

## Live Demo
Check out the live version of the application here: [Ramen Rater](https://devbrianke.github.io/ramen-rating-app/)

## Description
Ramen Rater is a simple web application that allows users to browse, view details, and add their favorite ramen dishes. The application dynamically displays ramen images in a menu, and clicking on an image reveals more details such as the name, restaurant, rating, and a comment. Users can also add new ramen dishes using a form.

## Features
- Display a list of ramen dishes with images
- Click on an image to view detailed information
- Add new ramen dishes through a form
- Input validation for image URLs

## Technologies Used
- HTML
- CSS
- JavaScript (DOM Manipulation, Event Handling)

## Getting Started

### Prerequisites
To run this project locally, you need:
- A web browser (Chrome, Firefox, Edge, etc.)
- A text editor (VS Code, Sublime Text, etc.)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/DevBrianHQ/ramen-rater.git
   ```
2. Navigate to the project folder:
   ```bash
   cd ramen-rater
   ```
3. Open the `index.html` file in your browser:
   - You can double-click the file to open it.
   - Or, if you have a live server extension in VS Code, use it to launch the project.

## Usage

### Viewing Ramen Details
1. The page loads with a list of ramen images.
2. Click on any image to display its details on the right side.

### Adding a New Ramen Dish
1. Fill out the form fields with:
   - Name
   - Restaurant
   - Image URL
   - Rating (1-5)
   - Comment
2. Click the "Add Ramen" button.
3. The new ramen image will be added to the menu.
4. Click on the newly added ramen to view its details.

## Code Structure

### `index.html`
- Contains the HTML structure including the ramen menu, details section, and form.
- Links to the `style.css` file for styling and `index.js` for functionality.

### `style.css`
- Provides styling for the page layout, images, and form elements.

### `index.js`
- Handles displaying ramen images dynamically.
- Listens for click events on ramen images to show details.
- Manages form submissions and appends new ramen items.

## Future Enhancements
- Implement local storage to persist added ramen dishes.
- Improve UI with animations and better styling.
- Add an edit and delete feature for ramen entries.

## Contributing
Contributions are welcome! If you would like to improve this project:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request.

## Author
**Kipchumba Brian**  
GitHub: [DevBrianHQ](https://github.com/DevBrianHQ)  
Twitter: [@bryan_kipchumba](https://twitter.com/bryan_kipchumba)

## License
This project is licensed under the MIT License.

