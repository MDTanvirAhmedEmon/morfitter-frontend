import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";

export default function MainLayout({ children }) {
  return (
      <div>
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
  );
}
