// src/components/Gallery.js

import Card from "./Card";

import img1 from "./asset/1.jpg";
import img2 from "./asset/2.jpg";
import img3 from "./asset/3.jpg";
import img4 from "./asset/4.jpg";
import img5 from "./asset/5.jpg";
import img6 from "./asset/6.jpg";
import img7 from "./asset/7.jpg";
import img8 from "./asset/8.jpg";
import img9 from "./asset/9.jpg";
import img10 from "./asset/10.jpg";
import img11 from "./asset/11.jpg";
import img12 from "./asset/12.jpg";
import img13 from "./asset/13.jpg";
import img14 from "./asset/14.jpg";
import img15 from "./asset/15.jpg";
import img16 from "./asset/16.jpg";
import img17 from "./asset/17.jpg";
import img18 from "./asset/18.jpg";
import img19 from "./asset/19.jpg";
import img20 from "./asset/20.jpg";

// Array of images
const galleryData = [
  { title: "Cat 1", img: img1 },
  { title: "Cat 2", img: img2 },
  { title: "Cat 3", img: img3 },
  { title: "Cat 4", img: img4 },
  { title: "Cat 5", img: img5 },
  { title: "Cat 6", img: img6 },
  { title: "Cat 7", img: img7 },
  { title: "Cat 8", img: img8 },
  { title: "Cat 9", img: img9 },
  { title: "Cat 10", img: img10 },
  { title: "Cat 11", img: img11 },
  { title: "Cat 12", img: img12 },
  { title: "Cat 13", img: img13 },
  { title: "Cat 14", img: img14 },
  { title: "Cat 15", img: img15 },
  { title: "Cat 16", img: img16 },
  { title: "Cat 17", img: img17 },
  { title: "Cat 18", img: img18 },
  { title: "Cat 19", img: img19 },
  { title: "Cat 20", img: img20 },
];

function Gallery() {
  return (
    <div className="gallery">
      {galleryData.map((item, index) => (
        <Card key={index} title={item.title} img={item.img} />
      ))}
    </div>
  );
}

export default Gallery;