import React, { useState } from 'react'
import { DicomList } from './DicomList'
import { DicomMain } from './DicomMain'
import './Home.css'
import { UserManagement } from './UserManagement'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const [openManagement, setOpenManagement] = useState(false)
    const navigate = useNavigate();

    const ClickOpenManagement = () => {
        if(!openManagement){
            setOpenManagement(true)
        } else {
            setOpenManagement(false)
        }
    }
    const onLogOut = () => {
        navigate('/');
    }

  return (
    <>
        <div className='flex justify-between items-center w-full h-[5%] px-[24px] bg-[#20639b] text-white drop-shadow-md'>
            <div className='font-medium text-[21px]' >Oncosoft</div>
            <div>
                <button  className="openManagementButton mr-5" onClick={() => ClickOpenManagement()}>{!openManagement ? 'Management' : 'Viewer'}</button>
                <button  className="signOutButton" onClick={() => onLogOut()}>sign out</button>
            </div>
        </div>
        <div className='flex w-screen h-[95%] '>
            {
            !openManagement ?  
            <div className='flex-auto flex w-full max-h-[850px] justify-center m-[35px]'>
                <div className='w-[200px] '>
                    <DicomList/>
                </div>
                <div className='w-full'>
                    <DicomMain/>
                </div>
            </div>
            :
            <div className='flex-auto flex w-full max-h-[850px] justify-center m-[35px]'>
                <UserManagement/>
            </div>
            }
           
        </div>
    </>
  )
}
