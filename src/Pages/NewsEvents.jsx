import React from "react";
import Event1 from './Assets/Evetns1.jpg';
import Event2 from './Assets/Event2.jpg';
import Event3 from './Assets/Event3.jpg';
import Brochure from './Assets/brosher.png'

function NewsEvents() {
  const events = [
    {
      image: Event3,
      date: "18",
      monthYear: "Apr, 22",
      author: "Admin",
      title: "Workshop on Participatory Rural Appraisal",
      description: "Two Days Workshop on Participatory Rural Appraisal ☘ (PRA)& Project Planning for social work students from Kuriakose Elias College Mannanam,  ",
    },
    {
      image: Event2,
      date: "15",
      monthYear: "Jul, 22",
      author: "User",
      title: "Beekeeping Livelihood Entrepreneurship Training",
      description: "Two Days Beekeeping Livelihood Entrepreneurship Training Program at ARS Anakkayam, Malappuram.",
    },
    {
      image: Event1,
      date: "24",
      monthYear: "Feb, 22",
      author: "User",
      title: "Gender Justice and Social Life",
      description: "An awareness class on Gender Justice and Social Life was conducted for the students of Government Tribal Higher Secondary School Sholayur.",
    },
 
  ];

  return (
    <div style={{ overflow: 'hidden' }} className="relative bg-gradient-to-br from-emerald-100 via-white to-yellow-200 py-16  montserrat">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-800 rounded-full -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-400 rounded-full translate-x-16 translate-y-16" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 montserrat inline-block relative">
            News & Events
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-emerald-500 rounded-full transform scale-x-50 transition-transform group-hover:scale-x-100"></div>
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="group shadow bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-200 montserrat">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 montserrat">
                  {event.description}
                </p>
              </div>
            </div>
          ))}



<a
  href="https://drive.google.com/file/d/16t3iaf4JE6Z7pN4GakAvCy5XslCRSIKi/view?usp=drivesdk"
  target="_blank"
  rel="noopener noreferrer"
  className="group bg-green-900 shadow rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
>
  <div  className="relative h-80">
    {/* Image */}
    <img
      src={Brochure}
      alt="FSDHFKJDFHJKD"
      className="w-full h-full object-cover"
    />
    {/* Centered Text */}
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <span className="text-white text-lg font-semibold">Explore Our Brochure</span>
    </div>
  </div>
</a>

















        </div>

        {/* Updates Section */}
        <div className="mt-20">
          <a href="https://www.whatsapp.com/channel/0029VafT8iH7oQha2PP31o14">
            <div className="text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-30" />
              </div>

              <div className="relative">
                <h3 className="text-2xl md:text-1xl font-bold text-black mb-6 montserrat">
                  Click here to stay Connected..!
                </h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsEvents;
