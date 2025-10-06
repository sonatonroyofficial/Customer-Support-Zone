
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import './App.css';
import './index.css';
import Status from './components/Status';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {

//  const [tickets, setTickets] = useState([]);
//   const [loading, setLoading] = useState()
//   const [taskStatusTickets, setTaskStatusTickets] = useState([])



  // all tickets data
  const [tickets, setTickets] = useState([]);
   
  const [loading, setLoading] = useState(true);

  const [taskStatusTickets, setTaskStatusTickets] = useState([]);

  const [resolvedTickets, setResolvedTickets] = useState([]);

  const [appLoading, setAppLoading] = useState(true);

  // Function to fetch tickets from JSON file

  const fetchTickets = async () => {
    try {
      // Fetch data from public folder

      const response = await fetch('/tickets.json');
      const ticketsData = await response.json();
      setTickets(ticketsData);
      setLoading(false);

      setTimeout(() => {
        setAppLoading(false);
      }, 500);

    } catch (error) {
      console.log('Error fetching tickets:', error);
      setLoading(false);
      setAppLoading(false);
    }
  };

  const selectTicket = (ticket) => {
    const isAlreadyInTaskStatus = taskStatusTickets.some(t => t.id === ticket.id);
    if (isAlreadyInTaskStatus) {
      toast.warn('This ticket is already added to Task Status!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      return;
    }

    // Add to task status list

    setTaskStatusTickets([...taskStatusTickets, ticket]);

    toast.success(`"${ticket.title}" added to Task Status!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

 
  const completeTicket = (ticketId) => {
  
    const ticketToComplete = taskStatusTickets.find(ticket => ticket.id === ticketId);

    if (ticketToComplete) {

      // setResolvedTickets([/resolvedTickets, ticketToComplete]);
      setResolvedTickets([...resolvedTickets, ticketToComplete]);

    
      setTaskStatusTickets(taskStatusTickets.filter(ticket => ticket.id !== ticketId));
     
      setTickets(tickets.filter(ticket => ticket.id !== ticketId));

      
      toast.success(`"${ticketToComplete.title}" completed and moved to Resolved Tasks!`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  
  useEffect(() => {
    fetchTickets();
  }, []);

  // Show preloader while app is loading
  if (appLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          {/* Loading Circle */}
          <div className="inline-block w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Loading Customer Support</h2>
          <p className="text-gray-500">Please wait while we prepare your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className='pt-[100px] md:pt-40 p-5 md:p-10 flex flex-col gap-8'>
        <Status
          taskStatusTickets={taskStatusTickets}
          resolvedTickets={resolvedTickets}
        />
        <Dashboard
          tickets={tickets}
          loading={loading}
          taskStatusTickets={taskStatusTickets}
          resolvedTickets={resolvedTickets}
          onSelectTicket={selectTicket}
          onCompleteTicket={completeTicket}
        />
      </main>
      <Footer />

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
