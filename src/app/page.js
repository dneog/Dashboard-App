import NavLayout from "@/components/layout/NavLayout";
import './Page.scss';
import Header from "@/components/header/Header";
import Banner from "@/components/banner/Banner";
import Card from "@/components/card/Card";
export default function Home() {
  return (
    <NavLayout>
      <div className="mainPage">
        <Header />
        <Banner />
        <Card />
      </div>
    </NavLayout>
  )
}
