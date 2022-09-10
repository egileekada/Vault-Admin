import React from "react";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import Login from "./Screens/Login";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}> 
      <Router>
        <Routes> 
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
