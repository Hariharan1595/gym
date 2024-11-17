import Slider from "react-slick";
import { rewies } from "../utils/data";

const Reviews = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    slideToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFouse: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10">
      <div className="container">
        <div className="text-left mb-10 max-w-[500px] space-y-2 mr-auto">
          <h1 className="text-3xl font-bold">
            What Are The Customer Saying About Us
          </h1>
        </div>
        <Slider {...setting}>
          {rewies.map((rewie) => (
            <div key={rewie.id} className="my-6">
              <div
                className="flex flex-col gap-4
                    shadow-lg mx-4 bg-primary/10 space-y-4   p-4 rounded-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={rewie.img}
                    alt="img"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-md">
                      {rewie.name}
                    </p>
                    <p className="text-zinc-500">{rewie.country}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-500">{rewie.text}</p>
                  <p>⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
