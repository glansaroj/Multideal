import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import B1 from 'src/assets/B1.jpeg'
import B2 from 'src/assets/B2.jpeg'
import B3 from 'src/assets/B3.jpeg'

const FootBanner = () => {
  return (
    <div className='flex justify-between gap-3 px-12 w-full mt-20 '>
        <div className=''> 

           <Link href={''}>  <Image src={B1}  width={400} height={150}/> </Link>
        </div>

        <div> 
           <Link href={''}> <Image src={B2}  width={400} height={150}/> </Link>
        </div>

        <div> 
           <Link href={''}> <Image src={B3}  width={400} height={150}/> </Link>
        </div>

      
    </div>
  )
}

export default FootBanner;
