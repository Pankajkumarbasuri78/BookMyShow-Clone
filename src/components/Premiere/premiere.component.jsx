import React from "react";
import Slider from "react-slick";


//components
import Poster from "../Poster/Poster.component";


export const Premiere = () => {
    //settings
    const settings ={   
        infinite:false,
        autoplay:false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide:0,
        responsive: [{
            breakpoints: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll:2,
                infinite: true,
            },
        },
        {
            breakpoints: 768,
            settings:{
                slidesToShow: 2,
                slidesToScroll:1,
                InitialSlide:1,
            },
        },
        {
            breakpoints: 480,
            settings:{
                slidesToShow: 2,
                slidesToScroll:1,
            },
        },
    ],
    };

    const PremiereImages = [
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/proximity-et00302306-13-05-2021-10-06-47.jpg",
            alt:"image",
            title: "Proximity",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/proximity-et00302306-13-05-2021-10-06-47.jpg",
            alt:"image",
            title: "Proximity",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/proximity-et00302306-13-05-2021-10-06-47.jpg",
            alt:"image",
            title: "Proximity",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/proximity-et00302306-13-05-2021-10-06-47.jpg",
            alt:"image",
            title: "Proximity",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/proximity-et00302306-13-05-2021-10-06-47.jpg",
            alt:"image",
            title: "Proximity",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/proximity-et00302306-13-05-2021-10-06-47.jpg",
            alt:"image",
            title: "Proximity",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/proximity-et00302306-13-05-2021-10-06-47.jpg",
            alt:"image",
            title: "Proximity",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/proximity-et00302306-13-05-2021-10-06-47.jpg",
            alt:"image",
            title: "Proximity",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/proximity-et00302306-13-05-2021-10-06-47.jpg",
            alt:"image",
            title: "Proximity",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/proximity-et00302306-13-05-2021-10-06-47.jpg",
            alt:"image",
            title: "Proximity",
            subtitle: "English",
        },
    ];



    return (
        <>
          <Slider {...settings}>
              {PremiereImages.map((image) => (
                  <Poster {...image}/>
              ))}
         </Slider>  
        </>
    );
};


export default Premiere;
