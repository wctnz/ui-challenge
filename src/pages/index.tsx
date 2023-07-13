import Card from "@/components/catalog/card";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/header";
import { PageTitle } from "@/components/page-title/page-title";

export default function Home() {
  return (
    <>
      <div className="px-16">
        <Header />
        <PageTitle />
        <Card />
        <Footer />
      </div>
    </>
  )
}
