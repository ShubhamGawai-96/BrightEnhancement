
// import React from "react";

// export default function Services() {
//   return (
//     <section id="services" className="py-20">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
//           Our Services
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
//           <div className="p-6 bg-slate-100 rounded-lg shadow-md hover:shadow-current transition">
//             <h3 className="text-xl font-bold mb-4 text-gray-700">
//               Enjoy the benefits of purchasing solar panels
//             </h3>
//             <h1 className="text-2xl font-bold mb-4 text-yellow-400 hover:text-green-600">
//               WITHOUT HAVING TO BUY THEM!
//             </h1>
//             <p className="text-gray-600">
//               We invest in the photovoltaic system for you.
//               <br />
//               <br />
//               Reduce your electricity bill{" "}
//               <span className="font-bold">by up to 98%</span> and only pay one
//               monthly fee for the energy you use.
//             </p>
//             <div className="text-center mt-8">
//               <a
//                 href="https://www.thinkbright.mx/cotizar"
//                 className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
//               >
//                 Request a Quote
//               </a>
//             </div>
//           </div>
//           <div className="p-6 bg-slate-100  rounded-lg shadow-md hover:shadow-current transition">
//             <h3 className="text-xl font-bold mb-4 text-gray-700">
//               Save up to 40% on your company's electricity bill
//             </h3>
//             <h1 className="text-2xl font-bold mb-4 text-yellow-400 hover:text-green-600 ">
//               WITH THE BEST FINANCING OPTIONS!
//             </h1>
//             <p className="text-gray-600">
//               At Bright we offer solar energy solutions designed specifically
//               for businesses and industries. We are committed to helping you
//               reduce costs and promote sustainability with the best technology
//               available.
//             </p>
//             <div className="text-center mt-8">
//               <a
//                 href="https://www.thinkbright.mx/cotizar"
//                 className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
//               >
//                 Request a Quote
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// src/components/Services.jsx
import React from "react";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-bold mb-4 text-yellow-700">
              Enjoy the benefits of purchasing solar panels
            </h3>
            <h1 className="text-2xl font-bold mb-4 text-yellow-600 hover:text-yellow-700">
              WITHOUT HAVING TO BUY THEM!
            </h1>
            <p className="text-gray-700">
              We invest in the photovoltaic system for you.
              <br />
              <br />
              Reduce your electricity bill{" "}
              <span className="font-bold">by up to 98%</span> and only pay one
              monthly fee for the energy you use.
            </p>
            <div className="text-center mt-8">
              <a
                href="https://www.thinkbright.mx/cotizar"
                className="inline-block px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75"
              >
                Request a Quote
              </a>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-bold mb-4 text-yellow-700">
              Save up to 40% on your company's electricity bill
            </h3>
            <h1 className="text-2xl font-bold mb-4 text-yellow-600 hover:text-yellow-700">
              WITH THE BEST FINANCING OPTIONS!
            </h1>
            <p className="text-gray-700">
              At Bright we offer solar energy solutions designed specifically
              for businesses and industries. We are committed to helping you
              reduce costs and promote sustainability with the best technology
              available.
            </p>
            <div className="text-center mt-8">
              <a
                href="https://www.thinkbright.mx/cotizar"
                className="inline-block px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
