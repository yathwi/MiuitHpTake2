import PageHeader from "@/component/PageHeader"
import Head from "next/head"
import Hero from "@/component/Hero"
import AboutCompany from "@/component/aboutCompany"
import AboutMe from "@/component/aboutMe"
import Footer from "@/component/Footer"

export default function Home(){
  return(
    <>
    <Head><title>株式会社 Miuit</title></Head>
    <PageHeader />
    <Hero />
    <AboutCompany />
    <AboutMe />
    <Footer />
    </>
  )
}
