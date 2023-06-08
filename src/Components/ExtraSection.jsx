import { Fade } from 'react-awesome-reveal';
const AchievementsSection = () => {
  return (
    <section className=" py-10">
      <div className="container mx-auto px-4">
        <Fade direction="up" triggerOnce>
          <h2 className="text-3xl text-white font-bold text-center mb-8">Our Achievements</h2>
        </Fade>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Fade cascade direction="up" damping={0.2} triggerOnce>
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l cursor-pointer shadow-lg rounded-lg p-6 text-center">
              <div className="text-5xl text-white font-bold mb-4">10K+</div>
              <p className="text-gray-100">Happy Learners</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l cursor-pointer shadow-lg rounded-lg p-6 text-center">
              <div className="text-5xl text-white font-bold mb-4">500+</div>
              <p className="text-gray-100">Courses Offered</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l cursor-pointer shadow-lg rounded-lg p-6 text-center">
              <div className="text-5xl text-white font-bold mb-4">100+</div>
              <p className="text-gray-100">Expert Instructors</p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
