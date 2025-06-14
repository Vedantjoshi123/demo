import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import {AppContext} from '../../context/AppContext'

function Navbar() {
  const { isEducator} = useContext(AppContext)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isCourseListPage = location.pathname.includes('/course-list');
  const { openSignIn } = useClerk();
  const { user } = useUser();


  return (
    <div className={`py-4 px-4 sm:px-10 md:px-14 lg:px-36 
      flex items-center justify-between 
      ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>

      {/* Logo */}
      <img src={assets.logo} alt='Logo' className='w-28 lg:w-32 cursor-pointer' />

      {/* Hamburger Button - mobile only */}
      <button
        className='md:hidden'
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        <div className='flex items-center gap-5'>
          {user && (
            <>
              <Link to='/educator'>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</Link>
              | <Link to='/my-enrollments'>My Enrollments</Link>
            </>
          )}
        </div>
        <ThemeToggle />
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className='bg-blue-600 text-white px-5 py-2 rounded-full'
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`absolute top-18 left-0 w-full z-50 px-4 py-4 flex flex-col gap-3 text-gray-500 md:hidden 
  ${isCourseListPage ? 'bg-white' : 'bg-cyan-100'}`}>

          {user && (
            <div className='flex flex-col gap-2 text-sm'>
              <Link to='/educator'>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</Link>
              <Link to='/my-enrollments' onClick={() => setMobileMenuOpen(false)}>My Enrollments</Link>
            </div>
          )}

          <div className='flex items-center justify-between'>
            <ThemeToggle />
            {user ? (
              <UserButton />
            ) : (
              <button onClick={() => { setMobileMenuOpen(false); openSignIn(); }}>
                <img src={assets.user_icon} alt="User Icon" className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
