import Header from "./assets/component/Header"
import Footer from "./assets/component/Footer"
import Ebook from "./screens/Ebook"
export default function App() {
  return (
    <h1 className="text-3xl">
      <Header></Header>
      <Ebook></Ebook>
      <Footer></Footer>
    </h1>
  )
}