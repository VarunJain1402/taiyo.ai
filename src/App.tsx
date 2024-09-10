import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ContactsPage from './pages/ContactsPage';
import CreateContact from './components/Contacts/CreateContact';
import ModifyContact from './components/Contacts/ModifyContact';
import ChartsMapsPage from './pages/ChartsMapsPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorPage from './pages/ErrorPage';
import Sidebar from './components/Sidebar';

function App() {
  const queryClient = new QueryClient();
  const [isSidebarHidden, setSidebarHidden] = useState(true);

  const toggleSidebar = (forceClose = false) => {
    if (forceClose) {
      setSidebarHidden(true); // Close sidebar
    } else {
      setSidebarHidden(!isSidebarHidden); // Toggle sidebar
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-white-600">
        {/* Sidebar Toggle Icon */}
        <span
          className="absolute text-white text-4xl top-1 left-1 cursor-pointer"
          onClick={() => toggleSidebar()}
        >
          <i className="fa-solid fa-bars py-1 px-3 text-2xl text-blue-500 rounded-md"></i>
        </span>

        <div className="flex">
          {/* Sidebar Component */}
          <Sidebar isSidebarHidden={isSidebarHidden} toggleSidebar={toggleSidebar} />

          {/* Main Content */}
          <div className={`flex-1 p-4 ${isSidebarHidden ? '' : 'ml-[300px]'} transition-all duration-300`}>
            <div className="grid place-items-center">
              <Routes>
                {/* Default Redirect to Contacts */}
                <Route path="/" element={<ContactsPage />} />
                <Route path="/contacts/create"element={ <CreateContact /> }/>
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/contacts/edit/:id" element={<ModifyContact />} />
                <Route path="/chartsmaps" element={<ChartsMapsPage />} />
                {/* Error Route */}
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
