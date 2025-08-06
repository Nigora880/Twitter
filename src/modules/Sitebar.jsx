import React from 'react'
import { Button, Heading, Input, Text } from '../components'
import { DotsIcon, SettingsIcon } from '../assets/icons'
import { Hero } from '../assets/img'

const Sitebar = () => {
  return (
   <div className="w-[402px] pl-[28px]">
    <div className="flex flex-col py-[20px]">
      <Input classList={"!w-[373px] !h-[55px] !rounded-full bg-[#EFF3F4] !border-[#EFF3F4]"} type={"search"} name={"searchInput"} placeholder={"Search Twitter"}/>
    </div>
    <div className="flex flex-col bg-[#F7F9F9] pl-[15px] py-[20px] ">
      <div className="flex justify-between pr-[20px]">
      <Heading type={"h2"} title={"Trends for you"}/>
      <SettingsIcon/>
      </div>
      <div className="flex justify-between">
      <div className="flex flex-col pt-[10px]">
        <Text title={"Trending in Germany"} extraclass={"opacity-[60%] text-[#393B41]"}/>
          <Heading type={"h3"} title={"Revolution"}/>
          <Text title={"50.4K Tweets"} extraclass={"opacity-[60%] text-[#393B41]"}/>
      </div>
      <div className="pt-[41px] pr-[16px]">
        <DotsIcon/>
        </div>
      </div>
      <div className="flex justify-between">
      <div className="flex flex-col pt-[10px]">
        <Text title={"Trending in Germany"} extraclass={"opacity-[60%] text-[#393B41]"}/>
          <Heading type={"h3"} title={"Revolution"}/>
          <Text title={"50.4K Tweets"} extraclass={"opacity-[60%] text-[#393B41]"}/>
      </div>
      <div className="pt-[41px] pr-[16px]">
        <DotsIcon/>
        </div>
      </div>
      <div className="flex justify-between">
      <div className="flex flex-col pt-[10px]">
        <Text title={"Trending in Germany"} extraclass={"opacity-[60%] text-[#393B41]"}/>
          <Heading type={"h3"} title={"Revolution"}/>
          <Text title={"50.4K Tweets"} extraclass={"opacity-[60%] text-[#393B41]"}/>
      </div>
      <div className="pt-[41px] pr-[16px]">
        <DotsIcon/>
        </div>
      </div>
      <Text extraclass={"text-[#1DA1F2] pt-[30px]"} title={"Show more"}/>
    </div>
    <div className="flex flex-col bg-[#F7F9F9] pl-[15px] py-[20px] ">
    <Heading classList={"p-[20px]"} type={"h2"} title={"You might like"}/>
    <div className="flex justify-between">
   <img className='w-[60px] h-[60px]' src={Hero} alt="avatar img"/>
   <div className="flex flex-col">
   <Heading type={"h3"} title={"Mushtariy"}/>
   <Text title={"@Mushtar565266"}/>
   </div>
   <Button children={"Follow"} classList={"!w-[92px] !h-[38px] !bg-[#000000] !text-white font-bold !mt-[11px]"}/>
    </div>
    <div className="flex justify-between pt-[25px]">
   <img className='w-[60px] h-[60px]' src={Hero} alt="avatar img"/>
   <div className="flex flex-col">
   <Heading type={"h3"} title={"Shuhratbek"}/>
   <Text title={"@mrshukhrat"}/>
   </div>
   <Button children={"Follow"} classList={"!w-[92px] !h-[38px] !bg-[#000000] !text-white font-bold !mt-[11px]"}/>
    </div>
    <Text extraclass={"text-[#1DA1F2] pt-[30px]"} title={"Show more"}/>
  </div>
  <Text title={"Terms of Service Privacy Policy Cookie Policy Imprint Ads Info More ··· © 2021 Twitter, Inc."} extraclass={"w-[334px] opacity-[60%] text-[#393B41] pl-[15px] pt-[30px]"}/>
   </div>
   
  )
}

export default Sitebar
