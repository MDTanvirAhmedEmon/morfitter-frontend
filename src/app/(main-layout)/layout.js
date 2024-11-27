import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";

export default function MainLayout({ children }) {
  return (
    <html>
      <body>
        {/* <h2>Header</h2> */}
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
