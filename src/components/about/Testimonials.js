import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../../sliderProps";
const testimonialData = [
  {
    id: 1,
    text: "Expertise and dedication to web development exceeded my expectations. Outstanding service and exceptional results!",
    authorImage: "assets/img/testimonials/1.jpg",
    authorName: "Sophia Johnson",
    authorDesignation: "Web Developer",
  },
  {
    id: 2,
    text: "Professionalism and commitment as a marketing specialist were thoroughly impressive. Highly recommended!",
    authorImage: "assets/img/testimonials/2.jpg",
    authorName: "Liam Brown",
    authorDesignation: "Marketing Specialist",
  },
  {
    id: 3,
    text: "Delivered high-quality work and provided invaluable support and guidance for my projects.",
    authorImage: "assets/img/testimonials/3.jpg",
    authorName: "Olivia Martinez",
    authorDesignation: "Project Manager",
  },
  {
    id: 4,
    text: "Creative solutions and attention to detail in graphic design transformed our brand identity.",
    authorImage: "assets/img/testimonials/4.jpg",
    authorName: "Mason White",
    authorDesignation: "Graphic Designer",
  },
  {
    id: 5,
    text: "Strategic approach and marketing insights significantly boosted our online presence and engagement.",
    authorImage: "assets/img/testimonials/5.jpg",
    authorName: "Emma Wilson",
    authorDesignation: "Digital Marketer",
  },
  {
    id: 6,
    text: "Ability to manage complex projects with ease and efficiency was a game-changer for our team.",
    authorImage: "assets/img/testimonials/6.jpg",
    authorName: "Ava Davis",
    authorDesignation: "Operations Manager",
  },
  {
    id: 7,
    text: "Technical skills and innovative thinking in software development were instrumental in our product launch.",
    authorImage: "assets/img/testimonials/7.jpg",
    authorName: "Ethan Brown",
    authorDesignation: "Software Developer",
  },
  {
    id: 8,
    text: "User-centered design approach and creative flair brought our app to life with an exceptional user experience.",
    authorImage: "assets/img/testimonials/8.jpg",
    authorName: "Isabella Moore",
    authorDesignation: "UI/UX Designer",
  },
  {
    id: 9,
    text: "Financial expertise and analytical skills helped us navigate complex financial challenges effortlessly.",
    authorImage: "assets/img/testimonials/9.jpg",
    authorName: "Sophia Taylor",
    authorDesignation: "Financial Analyst",
  },
  {
    id: 10,
    text: "In-depth knowledge and strategic thinking in business consulting propelled our growth trajectory.",
    authorImage: "assets/img/testimonials/10.jpg",
    authorName: "Jackson Anderson",
    authorDesignation: "Business Consultant",
  },
];


const Testimonials = () => {
  return (
    <div className="tokyo_tm_testimonials w-full h-auto clear-both float-left py-[100px] px-0">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Testimonials</h3>
        </div>
        <div className="list w-full h-auto clear-both float-left overflow-hidden">
          <Swiper
            {...sliderProps.testimonial}
            className="m-0 list-none cursor-e-resize"
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="list_inner w-full h-auto clear-both float-left relative">
                  <div className="text w-full h-auto clear-both float-left border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px] relative">
                    <p>{item.text}</p>
                  </div>
                  <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                    <div className="image relative w-[60px] h-[60px]">
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                        data-img-url={item.authorImage}
                        style={{ backgroundImage: `url(${item.authorImage})` }}
                      />
                    </div>
                    <div className="info pl-[20px]">
                      <h3 className="text-[16px] mb-[2px] font-semibold">
                        {item.authorName}
                      </h3>
                      <span className="text-[14px]">
                        {item.authorDesignation}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
