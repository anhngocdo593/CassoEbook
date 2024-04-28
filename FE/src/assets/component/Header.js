import React, {useState}from 'react';
import logo from "../img/logo.png"
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-10 sm:h-12" alt="Logo" />
                        <span className="self-center text-xl text-bluevio font-semibold whitespace-nowrap">CassoBook</span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <a href="https://payos.vn/" className="text-white bg-bluevio hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outdivne-none">PayOs</a>
                        <button onClick={toggleMenu} type="button" className="indivne-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outdivne-none focus:ring-2 focus:ring-gray-200" aria-expanded={isMenuOpen ? "true" : "false"}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" cdivpRule="evenodd"></path>
                            </svg>
                            {/* <svg className={isMenuOpen ? "hidden w-6 h-6" : "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" cdivpRule="evenodd"></path>
                            </svg> */}
                        </button>
                    </div>
                    <div className={isMenuOpen ? "flex justify-between items-center font-bold w-full lg:flex lg:w-auto lg:order-1" : "hidden "}>
                        <div className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
                            <div>
                                <a href="/" className="block text-sm py-2 pr-4 pl-3 text-gray-400 lg:bg-transparent lg:text-gray-400 lg:p-0 hover:text-gray-600">EBOOK</a>
                            </div>
                            <div>
                                <a href="/about" className="block text-sm py-2 pr-4 pl-3 text-gray-400 lg:bg-transparent lg:text-gray-400 lg:p-0 hover:text-gray-600">VỀ CHÚNG TÔI</a>
                            </div>
                            <div>
                                <a href="https://payos.vn/tin-tuc/" className="block text-sm py-2 pr-4 pl-3 text-gray-400  lg:text-gray-400 lg:p-0 hover:text-gray-600">TIN TỨC</a>
                            </div>
                            <div>
                                <a href="https://payos.vn/docs/" className="block text-sm py-2 pr-4 pl-3 text-gray-400 lg:bg-transparent lg:text-gray-400 lg:p-0 hover:text-gray-600">TÀI LIỆU TÍCH HỢP</a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden justify-between items-center font-bold w-full lg:flex lg:w-auto lg:order-1" >
                        <div className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
                            <div>
                                <a href="/" className="block text-sm py-2 pr-4 pl-3 text-gray-400 lg:bg-transparent lg:text-gray-400 lg:p-0 hover:text-gray-600">EBOOK</a>
                            </div>
                            <div>
                                <a href="/about" className="block text-sm py-2 pr-4 pl-3 text-gray-400 lg:bg-transparent lg:text-gray-400 lg:p-0 hover:text-gray-600">VỀ CHÚNG TÔI</a>
                            </div>
                            <div>
                                <a href="https://payos.vn/tin-tuc/" className="block text-sm py-2 pr-4 pl-3 text-gray-400  lg:text-gray-400 lg:p-0 hover:text-gray-600">TIN TỨC</a>
                            </div>
                            
                            <div>
                                <a href="https://payos.vn/docs/" className="block text-sm py-2 pr-4 pl-3 text-gray-400 lg:bg-transparent lg:text-gray-400 lg:p-0 hover:text-gray-600">TÀI LIỆU TÍCH HỢP</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
