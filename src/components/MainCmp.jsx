import React from 'react'
import Nav from './Nav'

export default function MainCmp({comp}) {
  return (
    <>
    <div className='w-screen h-screen pt-24 '>
                <div className='w-full h-full px-40  '>
                    {comp}
                </div>
        </div>
    </>
  )
}
