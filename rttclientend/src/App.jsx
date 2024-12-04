import MainBoth from "./components/body/MainBoth"
import FooterMobile from "./components/footer/mobile/FooterMobile"
import HeaderMobile from "./components/header/mobile/HeaderMobile"
import { useInView } from "react-intersection-observer";

function App() {
    const { inView, ref } = useInView({ threshold: 0, initialInView: true });
    //asdasdasdas
    return (
        <>
            <header ref={ref}>
                <HeaderMobile inView={inView} />
            </header>
         <main>
                <MainBoth />
            </main>
            <footer>
                <FooterMobile />
            </footer>
        </>
    )
}

export default App
