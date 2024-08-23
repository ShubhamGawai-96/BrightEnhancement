
// import React from 'react';
// import { motion } from 'framer-motion';

// const CardGrid = () => {
//   const cardData = [
//     {
//       imageSrc: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-16 w-16 text-black">
//           <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//         </svg>
//       ),
//       heading: 'Zero Initial Investment',
//       paragraph: 'For just $0 MXN*, you can start enjoying solar energy under a monthly rental scheme.',
//     },
//     {
//       imageSrc: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-9 w-9 text-black "><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg>
//       ),
//       heading: 'Custom Design',
//       paragraph: 'We choose the size and location of your photovoltaic system according to your energy needs, the amount of sun and the size of your roof',
//     },
//     {
//       imageSrc: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-9 w-9 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path></svg>
//       ),
//       heading: 'Warranty',
//       paragraph: 'We have the highest production guarantee on the market: If your system does not produce what was agreed, we will refund you.',
//     },
//     {
//       imageSrc: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-9 w-9 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"></path></svg>
//       ),
//       heading: 'Monitoring',
//       paragraph: 'We monitor 24/7 that the solar system is working and giving you the results you deserve.',
//     },
//     {
//       imageSrc: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-9 w-9 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path></svg>
//       ),
//       heading: 'Procedures before CFE',
//       paragraph: 'From paperwork to permits, we will take care of every aspect of installing your system.',
//     },
//     {
//       imageSrc: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-9 w-9 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"></path></svg>
//       ),
//       heading: 'Maintenance',
//       paragraph: 'Preventive and corrective service to ensure that the equipment always works at 100%. In addition, we have insurance against damages of up to $1,000,000 USD',
//     },
//   ];

//   return (
//     <>
//       <div className="text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
//           Why choose Bright?
//         </h2>
//         <h6 className="text-lg font-medium mb-4 text-gray-700">
//           Enjoy the benefits of purchasing solar panels
//         </h6>
//       </div>
//       <div className="grid grid-cols-3 gap-4 p-4">
//         {cardData.map((card, index) => (
//           <motion.div
//             key={index}
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: -100 }}
//             transition={{ duration: 1.5 }}
//             className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center relative my-20 border"
//           >
//             <div className="w-16 h-16 mb-4 absolute -top-10  justify-center items-center inline-flex  p-4 bg-gray-400 rounded-lg">
//               {card.imageSrc}
//             </div>
//             <h3 className="text-xl font-semibold mb-2 mt-10">{card.heading}</h3>
//             <p className="text-gray-600 text-center text-wrap">{card.paragraph}</p>
//           </motion.div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default CardGrid;


import React from 'react';
import { motion } from 'framer-motion';

const CardGrid = () => {
  const cardData = [
    {
      imageSrc: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-16 w-16 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
      heading: 'Zero Initial Investment',
      paragraph:
        'For just $0 MXN*, you can start enjoying solar energy under a monthly rental scheme.',
    },
    {
      imageSrc: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-9 w-9 text-orange-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          ></path>
        </svg>
      ),
      heading: 'Custom Design',
      paragraph:
        'We choose the size and location of your photovoltaic system according to your energy needs, the amount of sun, and the size of your roof.',
    },
    {
      imageSrc: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-9 w-9 text-purple-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          ></path>
        </svg>
      ),
      heading: 'Warranty',
      paragraph:
        'We have the highest production guarantee on the market: If your system does not produce what was agreed, we will refund you.',
    },
    {
      imageSrc: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-9 w-9 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          ></path>
        </svg>
      ),
      heading: 'Monitoring',
      paragraph:
        'We monitor 24/7 that the solar system is working and giving you the results you deserve.',
    },
    {
      imageSrc: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-9 w-9 text-orange-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          ></path>
        </svg>
      ),
      heading: 'Procedures before CFE',
      paragraph:
        'From paperwork to permits, we will take care of every aspect of installing your system.',
    },
    {
      imageSrc: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-9 w-9 text-purple-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
          ></path>
        </svg>
      ),
      heading: 'Maintenance',
      paragraph:
        'Preventive and corrective service to ensure that the equipment always works at 100%. In addition, we have insurance against damages of up to $1,000,000 USD.',
    },
  ];

  return (
    <>
    <div className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300">
      <div className="text-center  py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-700">
          Why choose Bright?
        </h2>
        <h6 className="text-lg font-medium mb-4 text-orange-600">
          Enjoy the benefits of purchasing solar panels
        </h6>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center relative my-10 border border-gray-200 hover:shadow-2xl hover:bg-yellow-50"
          >
            <div className="w-16 h-16 mb-4 absolute -top-8 flex justify-center items-center bg-yellow-200 rounded-full border-4 border-yellow-500">
              {card.imageSrc}
            </div>
            <h3 className="text-xl font-semibold mb-2 mt-10 text-gray-800">{card.heading}</h3>
            <p className="text-gray-600 text-center">{card.paragraph}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </>
  );
};

export default CardGrid;
