import "./App.css";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { Landing } from "./components/landing/landing";
import { Nav } from "./components/nav/nav";
import { Services } from "./components/services/services";

export const App = () => {
  return (
    <>
      <Nav />
      <Landing />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};
