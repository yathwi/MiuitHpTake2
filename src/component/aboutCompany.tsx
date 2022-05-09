import Image from "next/image";

export default function AboutCompany(){
  return(
    <div className=" h-[32rem]">
      <div className="ml-40 py-12">
        <h1 className=" text-xl pt-10 underline decoration-yellow decoration-8">事業内容</h1>
        <div className=" mt-10 leading-7">
          <p>Miuit(ミウイット)は、「それ、使ってもいいですか？」という言葉を英語にした” May I use it ? ”が由来となっています。</p>
          <p>それは、私たちが既存のモノの価値を最大限発揮できるように支援することを基本理念としているからです。</p>
          <p>私たちのミッションは<span className=" text-yellow text-lg font-bold">Rethik Revalue</span>です。</p>
          <p>遊休資産や過小評価されている場所・物・時間などあらゆるモノの価値の再定義を行っていきます。</p>
        </div>
      </div>
    </div>
  )
}