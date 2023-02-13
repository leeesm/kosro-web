import React, { useEffect, useRef, useState } from 'react'
import Button from '@mui/material/Button';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { DicomViewer } from './DicomViewer';


export const DicomMain = () => {
    const [ isClickedContourWorkbench, setIsClickedContourWorkbench ] = useState(false);

    const openContourWorkbench = () => {
        if( isClickedContourWorkbench) {
            setIsClickedContourWorkbench(false)
        } else {
            setIsClickedContourWorkbench(true)
        }
    }

    return (
        <div className='w-full h-full'>
        <div className='flex flex-col w-full h-full shadow-sm bg-[#193f5f] text-[#e5e7eb] content-center rounded-r-[5px]'>
            <div className='flex justify-between min-h-[64px] px-[15px]'>
                <div className = 'flex text-xl items-center'>
                    {!isClickedContourWorkbench ? 'Viewer' : 'Contour Workbench'}
                </div>
                <div className = 'flex items-center '>
                <Button 
                    variant="outlined" 
                    size="large" 
                    endIcon={<AutorenewIcon/>}
                    onClick={() => openContourWorkbench()}
                    label="Storage"
                    sx={{ color: 'white', backgroundColor: '#173f5f', border: '1px solid white', ":hover": { backgroundColor: '#102c43', border: '1px solid white' }, textTransform: 'capitalize', fontSize: '1rem'}}
                    >
                    {!isClickedContourWorkbench ? 'Contour Workbench' : 'Change Viewer'}
                </Button>
                </div>
            </div>
            {!isClickedContourWorkbench ? <DicomViewer/> : <div className='bg-slate-900 flex w-full h-full'>Contour Workbench</div>}
        </div>
    </div>
    )
}
