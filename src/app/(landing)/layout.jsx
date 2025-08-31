import { Header } from "@/components/Header";


const Layout = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto min-h-screen border-l border-r border-gray-200">
      <Header />
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;
