
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const sliderInfo = [
    {
        image: "https://c8.alamy.com/comp/2FNNT4H/people-learn-foreign-languages-online-on-laptop-female-character-studying-profiles-of-teachers-concept-of-online-education-and-languages-courses-ba-2FNNT4H.jpg",
        title: 'Learn a New Language',
        desc: 'Expand your horizons by learning a new language. Enhance your career prospects and connect with people from different cultures.'
    },
    {
        image: "https://img.freepik.com/free-psd/language-learning-banner-template_23-2149116984.jpg?w=2000",
        title: 'Interactive Lessons',
        desc: 'Engage in interactive lessons that make language learning fun and enjoyable. Practice speaking, writing, and listening skills with real-life scenarios.'
    },
    {
        image: "https://img.freepik.com/free-vector/gradient-english-lessons-youtube-channel-art_23-2149294822.jpg?w=2000",
        title: 'Personalized Learning',
        desc: 'Get personalized learning plans tailored to your goals and proficiency level. Track your progress and receive feedback to improve your language skills.'
    },
]

const AwesomeSlider = () => {
    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
        >
            {
                sliderInfo.map((info, ind) => (
                    <div key={ind} className='relative bg-gradient-to-r from-blue-500 to-blue-700'>
                        <img src={info.image} className='max-h-[600px] opacity-70 min-h-[300px]  z-[-1]' alt="Slider Image 1" />
                        <div className="slider-content max-w-[500px] text-gray-200 bg-opacity-50  rounded p-3 bg-gray-500 z-[2] m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <h2 className='text-2xl font-bold'>{info.title}</h2>
                            <p className='italic font-[11px]'>{info.desc}</p>
                        </div>
                    </div>))
            }
        </Carousel>
    );
};

export default AwesomeSlider;
