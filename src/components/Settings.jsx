import React from 'react';
import { FaCog } from 'react-icons/fa';
import ServiceToggle from './ServiceToggle';
import PrioritySettings from './PrioritySettings';
import TimeSettings from './TimeSettings';

const Settings = () => {
  return (
    <div className="p-6 bg-gray-100 flex-1 overflow-y-auto">
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center gap-2 mb-6 border-b pb-4">
          <FaCog className="text-xl text-gray-600" />
          <h2 className="text-lg font-semibold">GENERAL SETTINGS</h2>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">Request Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 text-center">
              <img src="https://res.cloudinary.com/dbjgczrtr/image/upload/v1733392303/shadowfax_bzchid.png" alt="Shadowfax" className="h-12 mx-auto mb-4" />
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Request Service
              </button>
            </div>
            <div className="border rounded-lg p-4 text-center">
              <img src="https://res.cloudinary.com/dbjgczrtr/image/upload/v1733392383/grab_xljrso.png" alt="Grab" className="h-12 mx-auto mb-4" />
              <p className="text-gray-600">Service Requested</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">Active/Inactive Services</h3>
          <div className="space-y-2">
            <ServiceToggle service="DelhiVery" active={true} />
            <ServiceToggle service="Grab" active={true} />
          </div>
        </div>

        <PrioritySettings />
        <TimeSettings />
      </div>
    </div>
  );
};

export default Settings;
