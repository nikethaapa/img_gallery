# img_gallery
🖼️ React Image Gallery App (My Project)

A responsive Image Gallery Application built using React JS. This project demonstrates Components, Props, and the map() function with a clean and well-structured folder setup.

🚀 Live & Repository

🔗 GitHub Repository:
https://github.com/nikethaapa/img_gallery

🌐 Live Demo:
https://nikethaapa.github.io/img_gallery/

📸 Features

✨ Beautiful image gallery using local assets
🔁 Dynamic rendering with map()
🧩 Reusable and modular components
📂 Organized folder structure
⚡ Simple, fast, and clean UI

🛠️ Tech Stack
React JS
JavaScript (ES6)
HTML5
CSS3
📂 Project Structure
src/
│── assets/
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── ...
│   └── 24.jpg
│
│── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Gallery.js
│   ├── ImageCard.js
│   └── About.js
│
│── App.js
│── index.js
│── style.css
🧠 Concepts Used
🔹 Components

The project is divided into reusable components:

App → Main container
Gallery → Displays list of images
ImageCard → Individual image display
Navbar & Footer → Layout components
About → Additional information section
🔹 Props

Props are used to pass image data between components:

<ImageCard title={item.title} image={item.image} />
🔹 map() Function

Used to dynamically render multiple images:

data.map((item) => (
  <ImageCard key={item.id} {...item} />
))
▶️ How to Run
git clone https://github.com/nikethaapa/img_gallery.git
cd img_gallery
npm install
npm start
🌟 Future Improvements

🔍 Add search functionality
🖼️ Image modal popup view
🌙 Dark mode support
📱 Fully responsive design
