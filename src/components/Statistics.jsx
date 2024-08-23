// // import React from 'react';
// // import CountUp from 'react-countup';
// // import { useInView } from 'react-intersection-observer';

// // const Statistics = () => {
// //   // Use the `useInView` hook to detect when the component is in view
// //   const { ref, inView } = useInView({
// //     triggerOnce: true, // Trigger the animation only once
// //     threshold: 0.1,    // Trigger when 10% of the component is visible
// //   });

// //   return (
// //     <section ref={ref} className="py-16 bg-gray-100">
// //       <div className="max-w-6xl mx-auto px-4 text-center">
// //         <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
// //           <div className="p-8 bg-white rounded-lg shadow-lg">
// //             <h3 className="text-4xl font-bold text-blue-500">
// //               {inView && <CountUp start={0} end={4000} duration={2.5} separator="," prefix="+" />}
// //             </h3>
// //             <p className="mt-2 text-xl">Subscribers</p>
// //           </div>

// //           <div className="p-8 bg-white rounded-lg shadow-lg">
// //             <h3 className="text-4xl font-bold text-green-500">
// //               {inView && <CountUp start={0} end={20} duration={2.5} separator="," prefix="+" />}
// //             </h3>
// //             <p className="mt-2 text-xl">States</p>
// //           </div>

// //           <div className="p-8 bg-white rounded-lg shadow-lg">
// //             <h3 className="text-4xl font-bold text-red-500">
// //               {inView && <CountUp start={0} end={60} duration={2.5} separator="," prefix="+" />}
// //             </h3>
// //             <p className="mt-2 text-xl">Cities</p>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Statistics;


// import React from 'react';
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';

// const Statistics = () => {
//   // Use the `useInView` hook to detect when the component is in view
//   const { ref, inView } = useInView({
//     triggerOnce: true, // Trigger the animation only once
//     threshold: 0.1,    // Trigger when 10% of the component is visible
//   });

//   return (
//     <section ref={ref} className="py-16 bg-gradient-to-r from-yellow-100 via-orange-100 to-purple-100">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-4xl font-extrabold text-orange-600 mb-12">Our Achievements</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
//           <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-yellow-500">
//             <h3 className="text-5xl font-bold text-yellow-600">
//               {inView && <CountUp start={0} end={4000} duration={2.5} separator="," prefix="+" />}
//             </h3>
//             <p className="mt-2 text-xl text-gray-600">Subscribers</p>
//           </div>

//           <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-orange-500">
//             <h3 className="text-5xl font-bold text-orange-600">
//               {inView && <CountUp start={0} end={20} duration={2.5} separator="," prefix="+" />}
//             </h3>
//             <p className="mt-2 text-xl text-gray-600">States</p>
//           </div>

//           <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-purple-500">
//             <h3 className="text-5xl font-bold text-purple-600">
//               {inView && <CountUp start={0} end={60} duration={2.5} separator="," prefix="+" />}
//             </h3>
//             <p className="mt-2 text-xl text-gray-600">Cities</p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Statistics;


import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Statistics = () => {
  // Use the `useInView` hook to detect when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-yellow-700 mb-12">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-yellow-500">
            <h3 className="text-5xl font-bold text-yellow-600">
              {inView && <CountUp start={0} end={4000} duration={2.5} separator="," prefix="+" />}
            </h3>
            <p className="mt-2 text-xl text-gray-600">Subscribers</p>
          </div>

          <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-yellow-400">
            <h3 className="text-5xl font-bold text-yellow-500">
              {inView && <CountUp start={0} end={20} duration={2.5} separator="," prefix="+" />}
            </h3>
            <p className="mt-2 text-xl text-gray-600">States</p>
          </div>

          <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-yellow-300">
            <h3 className="text-5xl font-bold text-yellow-400">
              {inView && <CountUp start={0} end={60} duration={2.5} separator="," prefix="+" />}
            </h3>
            <p className="mt-2 text-xl text-gray-600">Cities</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Statistics;
