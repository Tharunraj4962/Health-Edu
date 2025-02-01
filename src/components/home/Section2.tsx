import React from 'react'
import RC from '../../assets/Groupsss.png';
import Icon from '../../assets/Group 35246.png';
import Icon2 from '../../assets/Group 3524663.png';
import Icon3 from '../../assets/Group 35247.png';
import Icon4 from '../../assets/Group 35248.png';
const Section2 = () => {
  return (
    <>
      <div className="container mx-auto my-5">
        <div className="my-8">
          <div className="text-center text-lg md:text-3xl font-manrope font-normal text-primary">
            Confused about choosing the right college?
          </div>
          <div className="text-center font-manrope mt-2 text-myfont font-medium">
            We're here to guide you every step of the way on your college journey.
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-4">
            <div className="p-4 bg-[#f1f4ff] rounded-2xl">
              <div className="flex justify-between">
                <h2 className="font-medium my-auto text-[18px]">
                  Find
                </h2>
                <img src={Icon} alt="" />
              </div>
              <div className="text-justify mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing.
              </div>
            </div>
            <div className="p-4 bg-[#f1f4ff] rounded-2xl mt-5">
              <div className="flex justify-between">
                <h2 className="font-medium my-auto text-[18px]">
                  Analyze
                </h2>
                <img src={Icon3} alt="" />
              </div>
              <div className="text-justify mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing.
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 my-auto">
            <img src={RC} alt="" className="mx-auto" />
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="p-4 bg-[#f1f4ff] rounded-2xl">
              <div className="flex justify-between">
                <h2 className="font-medium my-auto text-[18px]">
                  Compare
                </h2>
                <img src={Icon4} alt="" />
              </div>
              <div className="text-justify mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing.
              </div>
            </div>
            <div className="p-4 bg-[#f1f4ff] rounded-2xl mt-5">
              <div className="flex justify-between">
                <h2 className="font-medium my-auto text-[18px]">
                  Apply
                </h2>
                <img src={Icon2} alt="" />
              </div>
              <div className="text-justify mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing.
              </div>
            </div>
          </div>
        </div>
        <hr className="text-[#7a89ff] my-16" />
      </div>

    </>
  )
}

export default Section2
