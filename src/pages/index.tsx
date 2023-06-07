import Card from "@/components/catalog/card";
import { Header } from "@/components/header/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-16">
        <Card />
      </div>
    </>
  )
}
