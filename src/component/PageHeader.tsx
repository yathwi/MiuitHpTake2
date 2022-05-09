import Image from "next/image"

const Items =[
  {name:"Home"},
  {name:"事業内容"},
  {name:"メンバー"},
  {name:""},
]
export default function PageHeader(){
  return(
    <div className=" py-1">
      <div className=" flex items-center justify-between max-w-[90%]  mx-auto">
        <div className=" mt-3"><Image src="/img/Miuit.png" width={224} height={82} /></div>
        <div className="flex">
          {Items.map((items,i)=>{
            return(
              <div key={i}>
                 <p className=" text-lg px-5">{items.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}