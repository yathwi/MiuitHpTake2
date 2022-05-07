import Image from "next/image";

export default function AboutCompany(){
  return(
    <div className=" h-96">
      <div className="ml-20">
        <h1 className=" text-xl pt-10">事業内容</h1>
        <div className=" mt-10">
          <p>Miuit(ミウイット)は、「それ、使ってもいいですか？」という言葉を英語にした” May I use it ? ”が由来となっています。</p>
          <p>それは、私たちが既存のモノの価値を最大限発揮できるように支援することを基本理念としているからです。</p>
          <p>私たちのミッションは、”Rethik Revalue”です。</p>
          <p>遊休資産や過小評価されている場所・物・時間などあらゆるモノの価値の再定義を行っていきます。</p>
        </div>
      </div>
    </div>
  )
}