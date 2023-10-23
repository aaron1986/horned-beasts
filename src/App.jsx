import './App.css'
import Header from './Header.jsx'
import Gallery from './Gallery.jsx'
import Footer from './Footer.jsx'



function App() {

  const galleryItems = [
    {
      title: "Devil Image 1",
      imageUrl: "./src/img/image1.jpg",
      description: "Description for image 1",
    },
    {
      title: "Devil Image 2",
      imageUrl: "./src/img/image2.jpg",
      description: "Description for image 2",
    },
    {
      title: "Devil Image 3",
      imageUrl: "./src/img/image3.jpg",
      description: "Description for image 3",
    },
    {
      title: "Devil Image 4",
      imageUrl: "./src/img/image4.jpg",
      description: "Description for image 4",
    },
    {
      title: "Devil Image 5",
      imageUrl: "./src/img/image5.jpg",
      description: "Description for image 5",
    }
  ];
  return (
   <div className='App'>
     <Header />
     <div className="grid">
        {galleryItems.map((item, index) => (
          <Gallery
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
            description={item.description}
          />
        ))}
      </div>
     <Footer />
   </div>
  );
}

export default App
