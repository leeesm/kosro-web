import React, { useEffect, useRef } from 'react'
import dummyCt from '../sample/ct.vti';
import dummyVtk from '../sample/rt_0.vtk';
import dummyRoi from '../sample/roi';

export const DicomViewer = () => {
    const View3D = () => {
        const viewRef = useRef()
        useEffect(() => {
            viewRef.current.innerHTML = '';
            const renderAvatar = async () => {
                const Avatar3D = window["Avatar3D"]
                const instance = new Avatar3D(viewRef.current);
                instance.initAvatar();
                instance.renderAvatar(dummyCt, [ dummyVtk ]);
            }
            renderAvatar();
        }, [ ])

        return (
            <div id='view' className='flex w-1/2 h-full relative min-w-[200px] min-h-[640px]'>
                <div id='avatar-2d-3d' className='flex w-full h-full absolute' ref={ viewRef }></div>
            </div>
        )
    }
    const View2D = () => {
        const viewRef = useRef()
        useEffect(() => {
            viewRef.current.innerHTML = '';
            const renderAvatar = async () => {
                const Avatar2D = window["Avatar2D"]
                const instance = new Avatar2D(viewRef.current);
                instance.initAvatar();
                instance.renderAvatar(dummyCt, dummyRoi);
            }
            renderAvatar();
        }, [ ])

        return (
            <div id='view' className='flex w-1/2 h-full relative min-w-[200px] min-h-[640px]'>
                <div id='avatar-2d-3d' className='flex w-full h-full absolute' ref={ viewRef }></div>
            </div>
        )
    }
  return (
    <div className='flex h-full w-full bg-[#010101] min-w-[549px]'>
        <View2D/>
        <View3D/>
    </div>
  )
}
