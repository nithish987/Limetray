// import React from 'react';
// import { FaEdit } from 'react-icons/fa';

// const TimeSettings = () => {
//   const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

//   return (
//     <div className="mt-8">
//       <div className="flex justify-between items-center mb-4 border-b pb-2">
//         <h3 className="text-lg font-semibold">Time Settings</h3>
//         <FaEdit className="text-gray-500 cursor-pointer" />
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="border-b">
//               <th className="text-left py-3 font-semibold">ACTIVE HOURS</th>
//               {days.map(day => (
//                 <th key={day} className="text-center py-3 font-semibold">{day}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b">
//               <td className="py-3 text-gray-600">Start Time</td>
//               {days.map(day => (
//                 <td key={day} className="text-center py-3">09:30</td>
//               ))}
//             </tr>
//             <tr className="border-b">
//               <td className="py-3 text-gray-600">End Time</td>
//               {days.map(day => (
//                 <td key={day} className="text-center py-3">24:00</td>
//               ))}
//             </tr>
//           </tbody>
//           <thead>
//             <tr className="border-b">
//               <th className="text-left py-3 font-semibold">INACTIVE HOURS</th>
//               {days.map(day => (
//                 <th key={day} className="text-center py-3"></th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b">
//               <td className="py-3 text-gray-600">Start Time</td>
//               {days.map(day => (
//                 <td key={day} className="text-center py-3">12:00</td>
//               ))}
//             </tr>
//             <tr className="border-b">
//               <td className="py-3 text-gray-600">End Time</td>
//               {days.map(day => (
//                 <td key={day} className="text-center py-3">15:00</td>
//               ))}
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TimeSettings;
import React from 'react';
import { FaEdit } from 'react-icons/fa';

const TimeSettings = () => {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <h3 className="text-lg font-semibold">Time Settings</h3>
        <FaEdit className="text-gray-500 cursor-pointer" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 font-semibold">ACTIVE HOURS</th>
              {days.map(day => (
                <th key={day} className="text-center py-3 font-semibold">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 text-gray-600">Start Time</td>
              {days.map(day => (
                <td key={day} className="text-center py-3">09:30</td>
              ))}
            </tr>
            <tr className="border-b">
              <td className="py-3 text-gray-600">End Time</td>
              {days.map(day => (
                <td key={day} className="text-center py-3">24:00</td>
              ))}
            </tr>
          </tbody>
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 font-semibold">INACTIVE HOURS</th>
              {days.map(day => (
                <th key={day} className="text-center py-3"></th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 text-gray-600">Start Time</td>
              {days.map(day => (
                <td key={day} className="text-center py-3">12:00</td>
              ))}
            </tr>
            <tr className="border-b">
              <td className="py-3 text-gray-600">End Time</td>
              {days.map(day => (
                <td key={day} className="text-center py-3">15:00</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-6 space-x-4">
        <button className="px-6 py-2 bg-gray-300 text-gray-800 font-semibold rounded hover:bg-gray-400">
          Cancel
        </button>
        <button className="px-6 py-2 bg-green-400 text-white font-semibold rounded hover:bg-green-500">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default TimeSettings;
