import DashCard from './DashCard';

const Dashboard = ({ tickets, loading, taskStatusTickets, resolvedTickets, onSelectTicket, onCompleteTicket }) => {
  // Show loading message while data is being fetched
  if (loading) {
    return (
      <section className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-600">Loading tickets...</p>
      </section>
    );
  }
}