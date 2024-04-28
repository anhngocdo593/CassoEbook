import { Link } from 'react-router-dom';
import Header from "../assets/component/Header"
import img from "../assets/img/cute.jpg"
export default function About() {
    return(
        <section class="bg-white ">
            <Header></Header>
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-bluevio ">Casso Ebook</h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl">Chào bạn đến với "Bí mật của may mắn" - cuốn sách đặc biệt sẽ là người bạn đồng hành đưa bạn vào hành trình khám phá những bí mật đằng sau sự may mắn trong cuộc sống.</p>
      </div> 
      <div></div>
      <div class="grid gap-8 mb-6 lg:mb-16">
          <div class="items-center bg-blue-50 rounded-lg shadow sm:flex ">
              <a href="/" className='w-1/4'>
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={img} alt="Bonnie Avatar"/>
              </a>
              <div class="p-10">
                  <h3 class="text-xl font-bold tracking-tight text-blue-500 ">
                      <a href="/">Do Ngoc Anh</a>
                  </h3>
                  <span class="text-gray-500 ">Web Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 ">Tôi không chỉ tạo ra các trang web, mà tôi còn tạo ra các trải nghiệm trọn vẹn. </p>
                  <ul class="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="https://web.facebook.com/profile.php?id=100034812375795" class="text-gray-500 hover:text-gray-900 e">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://github.com/anhngocdo593" class="text-gray-500 hover:text-gray-900 ">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="/" class="text-gray-500 hover:text-gray-900">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                  </ul>
              </div>
              
          </div> 
          <div class='text-2xl font-bold text-bluevio pt-4'>Phân phối độc quyền</div>
          <div class="font-light text-blue-500 sm:text-xl text-justify ">Quyển sách được thoả thuận phân phối độc quyền Ebook "Bí mật của may mắn"
tại Việt Nam. Với những chia sẻ chân thành và sâu sắc, "Bí mật của may mắn" sẽ dẫn bạn qua những bí quyết, phương pháp và quan điểm mới về may mắn. Từ việc hiểu rõ bản thân đến cách thức tạo điều kiện thuận lợi cho sự thành công, cuốn sách này sẽ mang đến cho bạn những cảm nhận mới mẻ và sự động viên tinh thần.</div>
        <div  class='text-2xl font-bold text-bluevio'>Tích hợp cổng thanh toán tiện lợi nhanh chóng </div>
       <div class="font-light mb-5 text-blue-500 lg:mb-10 sm:text-xl text-justify">
        Sử dụng cổng thanh toán PayOs. Bằng việc kết nối API chính thức các ngân hàng, không qua các trung gian thanh toán như VISA, paypal,... payOS giúp người dùng tiết kiệm 99% phí thanh toán cho mỗi giao dịch.
       </div>
      </div>  
            <Link to='/'
                type="submit"
                className=" w-1/3 items-center justify-center rounded-md border border-transparent px-8 py-3 text-base bg-bluevio font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Mua sách tại đây
              </Link>
      
  </div>
</section>
    );
}