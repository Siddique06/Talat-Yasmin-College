
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sldr.css';
// import './../../../public/assests/slider/S1.JPG'


export default function Sldr() {
    const images = [
      "./assests/slider/S0.jpg",
      "./assests/slider/S1.jpg",
      "./assests/slider/S2.jpg",
      "./assests/slider/S3.jpg",
      "./assests/slider/S4.jpg",
      "./assests/slider/S5.jpg",
      "./assests/slider/S6.jpg",
      "./assests/slider/S7.jpg",
      "./assests/slider/S8.jpg",
        // Add more image paths as needed
      ];
    
      const settings = {
        // adaptiveHeight:true,

        centerMode:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        // Enable autoplay
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2, // Show 2 slides at a time on medium screens
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1, // Show 1 slide at a time on small screens
            },
          },
        ],
    
      };
      
    
      return (
        <div>
          
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="custom-slide">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      );
};
