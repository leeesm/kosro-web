import React from 'react'
import './DicomList.css'

export const DicomList = () => {
    const dumdata = [
        {dicomID : 'a', dicomName : 'aaa' },
        {dicomID : 'b', dicomName : 'aaa' },
        {dicomID : 'c', dicomName : 'aaa' },
        {dicomID : 'd', dicomName : 'aaa' },
        {dicomID : 'e', dicomName : 'aaa' },
        {dicomID : 'f', dicomName : 'aaa' },
        {dicomID : 'g', dicomName : 'aaa' },
        {dicomID : 'h', dicomName : 'aaa' },
        // {dicomID : 'i', dicomName : 'aaa' },
        // {dicomID : 'j', dicomName : 'aaa' },
        // {dicomID : 'k', dicomName : 'aaa' }
    ]

  return (
    <div className='w-full h-full'>
        <div className='w-full h-full rounded-l-[5px] shadow-sm overflow-scroll patient-bg'>
            {
                dumdata.map(dumdata => {
                    return (
                        <div key={ dumdata.dicomID } className='h-[80px]'>
                            <div className='w-full h-full p-[6px]'>
                                <button className='w-full h-full rounded-[8px] shadow-sm flex flex-col justify-center items-center patient-unit'>
                                    <div className='text-[14px] text-[#e5e7eb]'>{ dumdata.dicomID }</div>
                                    <div className=' text-[11px] text-[#e5e7eb]'>{ dumdata.dicomName }</div>
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
