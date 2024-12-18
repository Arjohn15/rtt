
import FooterMobile from "./components/footer/mobile/FooterMobile"
import HeaderMobile from "./components/header/mobile/HeaderMobile"
import { useInView } from "react-intersection-observer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./reusable_components/ScrollToTop";
import RequestRescuerInfo from "./reusable_components/RequestRescuerInfo";
import DashBoard from "./pages/dashboard/DashBoard";

fetch("https://localhost:44324/api/RescueTeam") // Replace with your API endpoint
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON data
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error.message); // Handle error
    });


function App() {
    const { inView, ref } = useInView({ threshold: 0, initialInView: true });

    return (
        <BrowserRouter>
            <header ref={ref}>
                <HeaderMobile inView={inView} />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                </Routes>
                <ScrollToTop />
                <RequestRescuerInfo />
            </main>
            <footer>
                <FooterMobile />
            </footer>
        </BrowserRouter>
    )
}

export default App
