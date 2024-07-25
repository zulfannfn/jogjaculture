import { FaArrowRightLong } from "react-icons/fa6";
import { Fragment } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { MdTempleHindu } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

export default function Header() {
  return (
    <Fragment>
      <div className='bg-gradient-to-t from-indigo-500 to-[#2b088a]  pb-[120px] text-white rounded-br-[80px] rounded-bl-[80px]'>
        <div className='HeadTop  flex md:flex-row p-[68px] md:gap-[58px] md:items-center'>
          <div className=' w-[50%]'>
            <h1 className='md:text-[80px] text-right font-bold'>
              A JOURNEY OF JOGJA
            </h1>
          </div>
          <div className=' w-[50%]'>
            <p className='md:mb-2 font-semibold'>
              Jogja, pusat budaya dan seni Indonesia, menawarkan pesona warisan
              sejarah, kuliner lezat, serta keindahan alam yang memikat banyak
              wisatawan. Sebagai kota yang kaya akan tradisi, Jogja menjadi
              tujuan utama bagi mereka yang ingin mengalami kekayaan budaya
              Nusantara.
            </p>
            <div className='w-full'>
              <div className='w-full flex'>
                <Link
                  href='/'
                  className='flex flex-row gap-4 items-center hover:bg-white hover:text-slate-900 transition-colors duration-100 ease-in-out px-4 py-3 rounded-xl'
                >
                  <p className='font-bold'>Jelajahi Jogja Sekarang</p>
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='HeadCenter w-full flex justify-center'>
          <div className='w-[80%]'>
            <img
              src='/image.png'
              alt=''
              className='object-cover h-[348px] w-full rounded-2xl'
            />
          </div>
        </div>
        <div>
          <div className='relative '>
            <div className=' absolute left-1/2 transform -translate-x-1/2 top-[-114px] bg-slate-900 w-[70%] flex flex-row justify-between items-center rounded-xl p-6 gap-8'>
              <div className='w-full '>
                <div>
                  <div className='space-y-1'>
                    <h4 className='text-sm font-medium leading-none'>
                      Yogyakarta Hadiningrat
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Jumlah wisata di Yogyakarta bisa mencapai 700-900 bahkan
                      lebih.
                    </p>
                  </div>
                  <Separator className='my-4' />
                  <div className='flex h-5 items-center space-x-4 text-sm'>
                    <div>Sejarah</div>
                    <Separator orientation='vertical' />
                    <div>Wisata</div>
                    <Separator orientation='vertical' />
                    <div>Budaya</div>
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <div className='flex flex-row items-center gap-2 mb-2'>
                  <MdTempleHindu className='text-3xl' />
                  <Separator orientation='vertical' />
                  <p>Candi dan Situs :</p>
                </div>
                <div>
                  <p className='text-sm'>
                    Diperkirakan ada sekitar 75-100 candi dan situs sejarah di
                    Yogyakarta.
                  </p>
                </div>
              </div>
              <div className='w-full'>
                <div className='flex flex-row items-center gap-2 mb-2'>
                  <FaLocationArrow className='text-3xl' />
                  <Separator orientation='vertical' />
                  <p>Tempat Wisata Alam:</p>
                </div>
                <div>
                  <p className='text-sm'>
                    Diperkirakan ada sekitar 50-75 tempat wisata alam di
                    Yogyakarta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
