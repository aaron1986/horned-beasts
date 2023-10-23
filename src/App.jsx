import './App.css'
import Header from './Header.jsx'
import Gallery from './Gallery.jsx'
import Footer from './Footer.jsx'



function App() {

  const galleryItems = [
    {
      title: "Title 1",
      imageUrl: "./src/img/image1.jpg",
      description: "Description for image 1",
    },
    {
      title: "Title 2",
      imageUrl: "./src/img/image2.jpg",
      description: "Description for image 2",
    },
    {
      title: "Title 3",
      imageUrl: "./src/img/image3.jpg",
      description: "Description for image 3",
    },
    {
      title: "Title 4",
      imageUrl: "./src/img/image4.jpg",
      description: "Description for image 4",
    },
    {
      title: "Title 5",
      imageUrl: "./src/img/image5.jpg",
      description: "Description for image 5",
    }
  ];
  return (
   <div className='App'>
     <Header />
     <section className="gallery">
        {galleryItems.map((item, index) => (
          <Gallery
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
            description={item.description}
          />
        ))}
      </section>
     <Footer />
   </div>
  );
}

export default App
