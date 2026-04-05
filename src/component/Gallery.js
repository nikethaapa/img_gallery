// src/components/Gallery.js
import Card from "./Card";

// Array of image details
const galleryData = Array.from({ length: 20 }, (_, i) => ({
  title: `Cat ${i + 1}`,
  img: `/img_gallery/${i + 1}.jpg`, // public folder path
  description: `Description for Cat ${i + 1}`,  

}));

function Gallery() {
  return (
    <>
      <div className="gallery">
        {galleryData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            img={item.img}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default Gallery;