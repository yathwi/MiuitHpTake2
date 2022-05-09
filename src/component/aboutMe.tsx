import Image from "next/image"
export default function AboutMe(){
  return(
    <div className=" grid grid-cols-2 h-[32rem] bg-primary-main pt-28">
      <div className="mx-auto">
        <Image src="/img/Me.png" width={300} height={300} alt="pic" />
      </div>
      <div>
        <p className=" text-xl pb-10">代表取締役社長　安井海都</p>
        <p>愛知大学現代中国学部を卒業後、名古屋の繊維専門商社に就職。</p>
        <p>技術力の高い職人さんへの値引きが常態化していることに違和感を覚えたことがきっかけで、</p>
        <p>あらゆるものモノの価値の再定義をすることを決意。</p>
        <p>そこから生まれた利益から生活が少し豊かになることをビジョンとし活動をしています。</p>
      </div>
    </div>
  )
}