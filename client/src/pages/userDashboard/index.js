
import React from 'react'
import Header from '@/components/Header/Header';
import Navbar from '@/components/Header/Navbar';
import UserDashSidebar from '@/components/Dashboard/userDashSide';

const userDashboard  = () => {
        return (
            <>
            <Header />
            <Navbar />
            <div>
              <h1>User Dashboard</h1>
              <UserDashSidebar />


            </div>
            </>
        )
    }

export default userDashboard;


