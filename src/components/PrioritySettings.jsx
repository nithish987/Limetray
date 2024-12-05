import React from 'react';

const PrioritySettings = () => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Priority Settings</h3>
      <p className="text-sm text-gray-500 mb-4">Drag the service against the priority you want to assign to it</p>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">1</span>
          <img src="https://res.cloudinary.com/dbjgczrtr/image/upload/v1733392709/grab2_spioo8.png" alt="Grab" className="h-8" />
        </div>
        
        <div className="flex items-center gap-4">
          <span className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">2</span>
          <img src="https://res.cloudinary.com/dbjgczrtr/image/upload/v1733392709/delhivery_giltts.png" alt="Delhivery" className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default PrioritySettings;
