import Header from "../assets/component/Header"
import ebook from "../assets/ebook.pdf"


export default function Finish() {
  
  
  const handleDownload = () => {
    window.location.href='/'
  }
  return (
    
    <h1 className="text-3xl">
      
      <Header></Header>
      <div className="relative pt-16 w-full max-w-md mx-auto">
      <div className="relative p-4 text-center bg-blue-200 rounded-lg shadow  sm:p-5">
        <div className="w-12 h-12 rounded-full bg-green-100  p-2 flex items-center justify-center mx-auto mb-3.5">
          <svg aria-hidden="true" className="w-8 h-8 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
          <span className="sr-only">Success</span>
        </div>
        <p className="mb-4 text-lg font-semibold text-gray-900 ">Đang tiến hành tải file xuống</p>
        
        <a id="yourLinkID" onClick={handleDownload} href={ebook} download="Bí mật của may mắn.pdf"  className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-bluevio hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 " > Continue</a>

      </div>
    </div>
    </h1>
  )
}