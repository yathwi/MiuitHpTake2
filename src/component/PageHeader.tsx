import Image from "next/image"

export default function PageHeader(){
  return(
    <div className="  h-20">
      <div className=" flex justify-between max-w-[90%]  mx-auto">
      <div><Image src="/img/kikagaku.png" width={150} height={70}/></div>
      <div>b</div>
      </div>
    </div>
  )
}