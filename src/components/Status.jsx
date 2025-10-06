import React from 'react';
import StatusCard from './StatusCard';

const Status = ({ taskStatusTickets = [], resolvedTickets = [] }) => {

  const inProgressCount = taskStatusTickets.length;
  
  // Count resolved tickets
  const resolvedCount = resolvedTickets.length;

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <StatusCard 
          title="In-Progress" 
          count={inProgressCount} 
          bgImage="bg-[url('/inprogress-bg.svg')] bg-cover bg-center"
        />
        <StatusCard 
          title="Resolved" 
          count={resolvedCount} 
          bgImage="bg-[url('/resolved-bg.svg')] bg-cover bg-center"
        />
      </div>
    </section>
  );
};

export default Status;