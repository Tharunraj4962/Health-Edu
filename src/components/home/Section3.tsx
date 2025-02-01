import React from 'react'
import Icon1 from '../../assets/Group 35584.png';
import Icon2 from '../../assets/Group 35584452.png';
import GirlPng from '../../assets/image 43.png';
import GirlPic from '../../assets/asqaz.png';
import Scape from '../../assets/360.png';

const Section3 = () => {
  return (
    <>
    <section>
        <div className="container mx-auto my-5">
            <div className="text-center text-lg md:text-3xl font-manrope font-normal text-primary">
                Discover New Perks
            </div>
            <div className="my-5 grid grid-cols-10 gap-3">
              <div className="col-span-12 md:col-span-3 bg-[#e6ebff] px-4 pt-4 rounded-3xl md:flex md:flex-col justify-between">
                <div>
                  <h2 className="text-lg md:text-3xl text-[#A5B1E3] font-bold font-manrope">
                    International Exposure
                  </h2>
                  <div className="md:flex my-2">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16" fill="none" className="me-1 mt-1">
                        <path d="M8 0L10.1607 5.83927L16 8L10.1607 10.1607L8 16L5.83927 10.1607L0 8L5.83927 5.83927L8 0Z" fill="#252525"/>
                      </svg>
                    </div>
                    <div className="text-justify">
                      Healthedu provides opportunities for students to engage in global programs, exchange initiatives, and experiences to broaden their horizons.
                    </div>
                  </div>
                </div>
                <img src={GirlPng} alt="" className="mx-auto"/>
                
              </div>
              <div className="col-span-12 md:col-span-7">
                <div className="grid grid-cols-10 gap-3">
                  <div className="col-span-12 md:col-span-6 bg-[#edfcfe] rounded-2xl p-3">
                    <div className="md:flex my-2 w-max bg-white p-1 rounded-full">
                      <div>
                        <img src={Icon1} alt="" />
                      </div>
                      <div className="text-justify my-auto ms-3">
                        Healthedu Scholarships
                      </div>
                    </div>
                    <p className="text-justify">
                      Healthedu aims to empower students pursuing careers in health-related fields by offering scholarships. These scholarships provide essential financial support, enabling students to continue their studies and achieve their professional goals.
                    </p>
                    <div className="bg-white rounded-full p-2 w-max float-right my-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M7.87158 17.0405L17.8716 7.04053" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.87158 7.04053H17.8716V17.0405" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <img src={GirlPic} alt="" className="mx-auto"/>
                  </div>
                </div>
                <div className="grid grid-cols-10 gap-3 mt-3">
                  <div className="col-span-12 md:col-span-4">
                    <img src={Scape} alt="" className="mx-auto"/>
                  </div>
                  <div className="col-span-12 md:col-span-6 bg-[#f6f6f6] p-3 rounded-3xl">
                    <div className="md:flex my-2 w-max bg-white p-1 rounded-full">
                      <div>
                        <img src={Icon2} alt="" />
                      </div>
                      <div className="text-justify my-auto ms-3">
                        Placements
                      </div>
                    </div>
                    <p className="text-justify">
                      Healthedu provides comprehensive career placement assistance, connecting students with internships and job opportunities. These initiatives are designed to equip students with practical experience and help them successfully launch their professional careers.
                    </p>
                    <div className="bg-white rounded-full p-2 w-max float-right my-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M7.87158 17.0405L17.8716 7.04053" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.87158 7.04053H17.8716V17.0405" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Section3
