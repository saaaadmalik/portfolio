import React from 'react'
import university from '../assets/university.jpg'

const University = () => {
    return (
        <div className=' pt-20 w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto my-auto px-5 flex flex-col justify-center items-center md:flex-row'>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-4xl font-bold text-white md:text-5xl'>
                        UET TAXILA
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md text-sm text-justify md:text-md lg:text-lg'>
                    With phenomenal increase in students' enrollment in 1970's, a plan to establish additional campuses of the University of Engineering and Technology Lahore was conceived. As a result of that, the University College of Engineering Taxila was established in 1975. In 1978 it was shifted to its permanent location at Taxila. The College continued its working under the administrative control of the University of Engineering and Technology, Lahore till October 1993. During this month it received its charter as an independent university under the University of Engineering and Technology Taxila Ordinance 1993. At present total enrollment of undergraduate and postgraduate students is above 2000.
                    </p>
                    

                </div>
                <div className='mx-auto'>
                    <img src={university} alt="my profile" className='rounded-3xl w-2/4 m-auto  md:w-3/4 '/>
                </div>
            <div>

                </div>
            </div>
        </div>
    )
}

export default University

