import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const data = [
  {
    id: 1,
    title: "Keraton Yogyakarta",
    desc: "Keraton Yogyakarta merupakan istana resmi Kesultanan Yogyakarta, dibangun pada 1755 sebagai pusat pemerintahan dan budaya Kerajaan Mataram Islam. Kompleks bangunan ini menyimpan warisan sejarah, seni, dan tradisi Jawa yang terjaga hingga kini. Sebagai ikon Yogyakarta, Keraton menjadi destinasi wajib bagi wisatawan untuk mempelajari budaya dan sejarah Kerajaan Mataram.",
    img: "1.jpg",
  },
  {
    id: 2,
    title: "Batik",
    desc: "Batik Yogyakarta memiliki motif tradisional Jawa yang khas, seperti parang, kawung, dan sido mukti. Proses pembuatannya yang rumit menjadikannya bernilai seni tinggi. Sentra batik di Yogyakarta, seperti Kampung Batik Wijirejo dan Giriloyo, menawarkan pengalaman menyaksikan pembuatannya secara langsung. Batik Yogyakarta tetap menjadi ikon budaya daerah ini.",
    img: "2.jpg",
  },
  {
    id: 3,
    title: "Wayang",
    desc: "Wayang Yogyakarta merupakan salah satu warisan budaya Jawa yang masih lestari. Wayang kulit, dengan karakteristik lokal yang kuat, dipertunjukkan melalui pertunjukan yang khas dengan diiringi gamelan. Dalang-dalang Yogyakarta terkenal akan keahlian dalam memainkan wayang dan menyampaikan filosofi Jawa. Pertunjukan wayang di Yogyakarta menjadi daya tarik bagi wisatawan yang ingin mengenal lebih dalam kebudayaan Jawa.",
    img: "3.jpg",
  },
  {
    id: 4,
    title: "Seni Tari",
    desc: "Tarian tradisional Yogyakarta memiliki kekhasan yang mencerminkan budaya Jawa. Tari Klasik Yogyakarta, seperti Bedhaya dan Serimpi, menampilkan gerakan yang anggun dan penuh makna. Selain itu, tari rakyat seperti Jathilan dan Reog juga menjadi daya tarik bagi wisatawan. Pertunjukan tari di Yogyakarta memberikan pengalaman budaya yang khas bagi pengunjung.",
    img: "4.jpg",
  },
  {
    id: 5,
    title: "Makanan Khas",
    desc: "Yogyakarta memiliki aneka makanan khas yang mencerminkan kuliner Jawa. Nasi Gudeg, dengan campuran nangka muda yang dimasak dengan gula merah, menjadi salah satu kuliner ikonik daerah ini. Selain itu, Sate Klathak, Bakpia, dan Geplak juga menjadi makanan khas Yogyakarta yang populer di kalangan wisatawan. Berbagai sentra kuliner di Yogyakarta menawarkan pengalaman merasakan cita rasa lokal yang autentik.",
    img: "5.jpg",
  },
];

export default function SectionOne() {
  return (
    <div>
      <div className='w-full flex flex-col items-center'>
        <div className='SectionOneTop mt-[30px] text-center mb-4'>
          <p className='font-bold text-white text-base'>Explore</p>
          <p className='text-white'>
            Jelajahi Sekarang Dan Nikmati Keindahan Jogja
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <Carousel
            opts={{
              align: "start",
            }}
            className='w-[80%] '
          >
            <CarouselContent>
              {data.map((item, i) => (
                <CarouselItem key={i} className='md:basis-5/12 mx-1'>
                  <div className='flex flex-col items-center justify-center bg-slate-600 hover:bg-slate-800 rounded-3xl'>
                    <div className='w-full'>
                      <img
                        className='rounded-3xl object-cover w-full h-[248px]'
                        src={item.img}
                        alt=''
                      />
                    </div>
                    <div className='p-6'>
                      <h2 className='font-bold text-white text-3xl'>
                        {item.title}
                      </h2>
                      <p className='text-white'>{item.desc}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
