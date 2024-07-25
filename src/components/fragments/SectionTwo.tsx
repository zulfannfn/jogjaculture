"use client";

import * as React from "react";
import { IoLocationSharp } from "react-icons/io5";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { LuChevronsUpDown } from "react-icons/lu";
import { TbBeach } from "react-icons/tb";
import { PiBowlFoodFill } from "react-icons/pi";
import { FaBagShopping } from "react-icons/fa6";

export default function SectionTwo() {
  const data = [
    {
      id: 1,
      icon: <IoLocationSharp />,
      title: "Wisata Budaya",
      sublist: [
        "Keraton Yogyakarta",
        "Batik",
        "Wayang",
        "Gamelan",
        "Pantai",
        "Pura",
      ],
    },
    {
      id: 2,
      icon: <TbBeach />,
      title: "Wisata Alam",
      sublist: [
        "Candi Borobudur",
        "Candi Prambanan",
        "Gunung Merapi",
        "antai Parangtritis",
      ],
    },
    {
      id: 3,
      icon: <PiBowlFoodFill />,
      title: "Wisata Kuliner",
      sublist: [
        "Sentra Kuliner Malioboro",
        "Pasar Beringharjo",
        "Yogyakarta Street Food Tour",
        "Resto Tradisional Yogyakarta",
      ],
    },
    {
      id: 4,
      icon: <FaBagShopping />,
      title: "Wisata Belanja",
      sublist: [
        "Pasar Tradisional (Pasar Beringharjo, Pasar Kranggan)",
        "Kampung Batik (Wijirejo, Giriloyo)",
        "Pusat Kerajinan Gerabah (Kasongan)",
      ],
    },
  ];

  return (
    <div className='w-full flex justify-center'>
      <div className='w-[90%]'>
        <div className='w-full flex flex-col items-center'>
          <div className='SectionOneTop mt-[30px] text-center mb-4'>
            <p className='font-bold text-white text-base'>Destination</p>
            <p className='text-white'>Jelajahi Wisata Indah Di Jogja</p>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center px-10'>
          <div className='SecLeft w-[50%] p-4'>
            {data.map((item, i) => (
              <div
                key={i}
                className='flex flex-row px-4 py-3 items-center text-white hover:text-slate-200  bg-slate-900 hover:bg-slate-800 rounded-3xl mb-3 gap-2'
              >
                <div>
                  <div className='text-[36px]'>{item.icon}</div>
                </div>
                <div className='flex flex-col'>
                  <Collapsible>
                    <CollapsibleTrigger className='px-3 flex flex-row gap-2 items-center'>
                      <h3 className='font-bold'>{item.title}</h3>
                      <LuChevronsUpDown className='text-[16px]' />
                    </CollapsibleTrigger>
                    <CollapsibleContent className='px-3'>
                      {item.sublist.map((subItem, index) => (
                        <p key={index}>{subItem}</p>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            ))}
          </div>
          <div className='SecRight w-[50%]'>
            <img
              src='/90.jpg'
              alt=''
              className='object-cover w-full h-[280px] rounded-2xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
