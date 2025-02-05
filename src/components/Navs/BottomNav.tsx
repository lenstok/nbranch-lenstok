import Link from 'next/link'
import { IoMdAdd } from 'react-icons/io'
import { useAppStore } from "src/store/app";
import { toast } from "react-hot-toast";
import { useState } from 'react';
import ButtonTest from '../Login/ButtonTest';
import LoginWalletMobile from '../Login/LoginWalletMobile';

const BottomNav: React.FC = () => {
  const currentProfile = useAppStore((state) => state.currentProfile);
  const [homePage, setHomePage] = useState(true);

  return (
    <div>
    <nav className="fixed bottom-0 left-0 right-0 h-[47px] rounded-t-md bg-emerald-700 z-10 flex items-center justify-around px-4 py-3 shadow-md">
     {/* //swap timelines */}
    { homePage ? (
      <Link href='/latest'>
        <button  
        onClick= {() => {
        {setHomePage(false);}
        }} 
       className="text-white hover:text-gray-100 focus:outline-none focus:text-gray-100 border-gray-800">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
      </button>
      </Link>
    ) : (
      <Link href='/'>
        <button  
        onClick= {() => {
        {setHomePage(true);}
        }} 
       className="text-white hover:text-gray-100 focus:outline-none focus:text-gray-100 border-gray-800">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
      </button>
      </Link>
      )}
      {/* //upload */}
      <Link href='/upload'>
       <button 
       className="text-white hover:text-gray-100 focus:outline-none focus:text-gray-100 border-gray-800">
        <IoMdAdd className='text-xl h-8 w-10 border-2 border-white '/>{' '}
        </button>  
        </Link>

        {/* //discover page */}
        <Link href='/discover'>
      <button className="text-white hover:text-gray-100 focus:outline-none focus:text-gray-100 border-gray-800">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>
      </Link>

        {/* //log into lens & profile page */}
      {currentProfile ? (
      <Link href={`/profile/${currentProfile.id}`} key={currentProfile.id}>
      <button className="text-white hover:text-gray-100 focus:outline-none focus:text-gray-100 border-gray-800">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
      </button>
      </Link>
      ) : ( 
        // <LoginWalletMobile />
      <button 
      onClick= {() => {
        {toast.error("Log in to view profile", {duration: 1000});}
       }}
      className="text-white hover:text-gray-100 focus:outline-none focus:text-gray-100 border-gray-800">
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
    </button>
      )}

    </nav>
    </div>
  )
}

export default BottomNav