import ReactLogo from "../../../assets/logo (3).png";

const teamMembers = [
  { name: 'سید عظیم حسینی', role: 'مهندس پزشکی', img: '/src/assets/aziim.png' },
  { name: 'غنچه عطایی', role: 'مهندس کامپیوتر', img: '/src/assets/me.png' },
  { name: 'شایان نوری', role: 'مهندس کامپیوتر', img: '/src/assets/shayan.png' },
];

const index = () => {
  return (
    <div className=" bg-white flex flex-col items-center py-8 px-4 dark:bg-indigo-950">
      <div className="relative mb-8">
        <div>
          <img src={ReactLogo} />
        </div>
      </div>

      <p className="text-center max-w-3xl mb-8 text-base md:text-lg mt-2 text-gray-600 dark:text-white">
        ما به‌عنوان یک تیم همراه، پس از تکمیل پروژه نیز در کنار شما هستیم و با ارائه پشتیبانی فنی و به‌روزرسانی‌های مستمر، تضمین می‌کنیم که وب‌سایت شما همیشه در اوج بماند.
      </p>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 mt-24">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-card flex flex-col items-center border-2 border-gray-300 rounded-2xl w-56 h-80 hover:w-64 hover:h-80 dark:bg-indigo-950 transition-all duration-300 animate-card"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center mt-10">
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 md:w-36 md:h-36 rounded-full mt-4 md:mt-8"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold mt-11 dark:text-white">
              {member.name}
            </h3>
            <p className="text-gray-500 dark:text-white">{member.role}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes cardEntrance {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
      }
        .team-card {
          animation: cardEntrance 0.8s ease-in-out both;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .team-card:hover {
          transform: scale(1.05); 
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
        .team-card img {
          transition: transform 0.3s ease-in-out;
        }
        .team-card:hover img {
          transform: scale(1.08); 
        }
        .animate-card {
          animation: cardEntrance 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default index;
