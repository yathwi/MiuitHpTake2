import Image from "next/image"
import Link from "next/link"
export default function Footer(){
  return(
    <div className="">
      <div className=" grid grid-cols-2 py-32 ">
        <div className=" mx-auto">
          <Image src="/img/Miuit.png" width={300} height={100} />
        </div>
        <div>
          <div>
            <Link href="https://hackathon3.vercel.app/">
              <a>
                <p>ミウイット</p>
              </a>
            </Link>
          </div>
          <div className=" flex mt-10">
            <p className=" ">お問い合わせ</p>
            <p className=" ml-10">プライバシーポリシー</p>
          </div>
        </div>
      </div>
    </div>
  )
}