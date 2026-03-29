import React from "react";
import Card from "./Card";

import i1 from "./asset/1.jpg";
import i2 from "./asset/2.jpg";
import i3 from "./asset/3.jpg";
import i4 from "./asset/4.jpg"; 
import i5 from "./asset/5.jpg"; 
import i6 from "./asset/6.jpg"; 
import i7 from "./asset/7.jpg"; 
import i8 from "./asset/8.jpg"; 
import i9 from "./asset/9.jpg"; 
import i10 from "./asset/10.jpg"; 
import i11 from "./asset/11.jpg"; 
import i12 from "./asset/12.jpg"; 
import i13 from "./asset/13.jpg"; 
import i14 from "./asset/14.jpg"; 
import i15 from "./asset/15.jpg"; 
import i16 from "./asset/16.jpg"; 
import i17 from "./asset/17.jpg"; 
import i18 from "./asset/18.jpg"; 
import i19 from "./asset/19.jpg"; 
import i20 from "./asset/20.jpg";

const galleryData = [
  { id: 1, title: "Sleepy Whiskers", image: i1 },
  { id: 2, title: "Curious Kitty", image: i2 },
  { id: 3, title: "Tiny Paws", image: i3 },
  { id: 4, title: "Fluffy Cloud", image: i4 },
  { id: 5, title: "Golden Eyes", image: i5 },
  { id: 6, title: "Lazy Afternoon", image: i6 },
  { id: 7, title: "Playful Mood", image: i7 },
  { id: 8, title: "Sneaky Hunter", image: i8 },
  { id: 9, title: "Nap Time", image: i9 },
  { id: 10, title: "Cute Stare", image: i10 },
  { id: 11, title: "Jumping Joy", image: i11 },
  { id: 12, title: "Soft Fur", image: i12 },
  { id: 13, title: "Window Watcher", image: i13 },
  { id: 14, title: "Silent Walker", image: i14 },
  { id: 15, title: "Little Explorer", image: i15 },
  { id: 16, title: "Cozy Corner", image: i16 },
  { id: 17, title: "Morning Stretch", image: i17 },
  { id: 18, title: "Happy Tail", image: i18 },
  { id: 19, title: "Dreamy Eyes", image: i19 },
  { id: 20, title: "Purr Machine", image: i20 }
];

function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
  <h2 className="section-title" style={{ textAlign: "center" }}>
    Gallery
  </h2>

  <div className="gallery">
    {galleryData.map((img) => (
      <Card key={img.id} title={img.title} imglink={img.image} />
    ))}
  </div>
</section>
  );
}

export default Gallery;