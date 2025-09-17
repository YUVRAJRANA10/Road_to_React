import React  from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";


function Layout(){
return(
<>
<Header />
<main className="min-h-screen bg-white">
  <div className="container mx-auto px-6 py-8">
    <Outlet />
  </div>
</main>
<Footer />
</>
)
}
export default Layout