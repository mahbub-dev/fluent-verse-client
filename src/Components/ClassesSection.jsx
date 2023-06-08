const classesData = [
  {
    title: 'English Conversation',
    image: 'https://play-lh.googleusercontent.com/zMX7zvR1642YPRvEpLEPzDrW0TyO6etmNjuNwxJopAmrui2lEuPZj-YowOprA57INkA',
    students: 150,
  },
  {
    title: 'Spanish for Beginners',
    image: 'https://www.blablalang.com/wp-content/uploads/spanish-words-for-beginners.jpg',
    students: 120,
  },
  {
    title: 'French Cuisine',
    image: 'https://us.123rf.com/450wm/golibtolibov/golibtolibov1802/golibtolibov180200029/96771952-human-hand-writing-text-on-blackboard-learn-french.jpg?ver=6',
    students: 100,
  },
  {
    title: 'German Grammar',
    image: 'https://www.expatden.com/wp-content/uploads/2020/04/Basic-German-Grammar-1-700x366.png',
    students: 90,
  },
  {
    title: 'Chinese Calligraphy',
    image: 'https://img.freepik.com/free-photo/top-view-assortment-chinese-symbols-written-with-ink_23-2148826184.jpg',
    students: 80,
  },
  {
    title: 'Japanese Culture',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*5D2eeHnU7PWF5WVfvRmPUQ.png',
    students: 70,
  },
];

const ClassesSection = () => {
  const sortedClasses = classesData.sort((a, b) => b.students - a.students);
  const topClasses = sortedClasses.slice(0, 6);
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Popular Classes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topClasses.map((classItem) => (
            <div className="bg-opacity-40 bg-green-800 shadow-lg rounded-lg p-6 flex flex-col justify-between" key={classItem.title}>
              <div className="mb-4">
                <img src={classItem.image} alt={classItem.title} className="w-full h-48 object-cover rounded-md" />
              </div>
              <div>
                <h3 className="text-xl text-white font-semibold mb-2">{classItem.title}</h3>
                <p className="text-gray-100">{classItem.students} students</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
