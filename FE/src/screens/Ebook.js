
import { StarIcon } from '@heroicons/react/20/solid'
import book4 from "../assets/img/book1.jpg"
import book2 from "../assets/img/book2.jpg"
import book3 from "../assets/img/book3.jpg"
import book1 from "../assets/img/book4.png"
import Header from "../assets/component/Header"
import Footer from "../assets/component/Footer"
import React, { useState,useRef} from 'react';

const product = {
  name: 'Bí mật của may mắn',
  price: '10.000 đ',
  href: '#',

  images: [
    {
      src: book1,
      alt: 'Ảnh bìa',
    },
    {
      src: book2,
      alt: 'trích dẫn 1',
    },
    {
      src: book3,
      alt: 'Trích dẫn 2',
    },
    {
      src: book4,
      alt: 'Trích dẫn 3',
    },
  ],
  description:
  'Bí Mật Của May Mắn đã tạo nên một làn sóng tư duy mới trong việc tìm kiếm may mắn, hạnh phúc và thành công trong cuộc sống. Họ đã nhận hàng trăm ngàn thư của độc giả trên khắp thế giới gửi về hoan nghênh và cảm ơn ý tưởng độc đáo từ cuốn sách nhỏ này. Phải nói là Good Luck là cuốn sách độc đáo, sẽ còn được nhắc đến và lan truyền đi khắp thế giới. Cuốn sách không chỉ giúp ích cho cuộc sống con người mà rất nhiều công ty trên thế giới đã ứng dụng những ý tưởng của Good Luck để đạt được thành công trong công việc. Nghiên cứu cuộc sống dưới góc nhìn của tâm lý học Alex Rovira và Fernando Trías de Bes đã phát hiện được “dấu chân của thân may mắn" mà ai cũng có thể tìm gặp. Cuốn sách của hai ông Good Luck - Bí mật của may mắn là tập hợp những câu chuyện là thường hướng đến một bài học vô cùng giá trị về cuộc sống. Sự may mắn không xuất hiện ngẫu nhiên trong hành trình cuộc sống chúng ta; chính chúng ta phải tìm và tạo ra những điều kiện để may mắn tìm đến với mình. Good luck - Bí Mật Của May Mắn là câu chuyện chưa bao giờ là cũ và trở thành một cuốn sách liên tục phá vỡ nhiều kỷ lục trong lịch sử xuất bản thế giới. Trước khi Good Luck - Bí mật của may mắn đến với Việt Nam thì cuốn sách đã có mặt tại 68 quốc gia trên thế giới (với 35 ngôn ngữ) chỉ trong vòng một năm.'
    ,highlights: [
    'Tác giả: Alex Rovira Fernando Trias de Bes',
    'Dịch giả: First News',
    'Nhà xuất bản: NXB Tổng hợp Tp.HCM',
    'Công ty phát hành: First News',
    'Số trang: 154',
    'Ngày xuất bản: 10/2015'
  ],
  details:[
  'Phần 1: Cuộc gặp gỡ kỳ lạ sau bao năm tháng',
  ' Phần 2: Huyền thoại Cây Bốn Lá thần kỳ',
  'Bí mật đầu tiên: Hãy tạo ra những may mắn cho mình',
  
  'Bí mật thứ hai: Biết theo đuổi may mắn',
  
  'Bí mật thứ ba: Dám thay đổi để tạo điều kiện tốt hơn',
  
  'Bí mật thứ tư: Biết chia sẽ, giúp đỡ người khác',
  
  'Bí mật thứ năm: Đừng trì hoãn-Hãy hành động ngay',
  
  'Bí mật thứ sáu: Biết tìm kiếm, để ý những điều nhỏ nhưng cần thiết',
  
  'Bí mật thứ bảy: Hãy dám tin vào điều bạn đã tạo ra',
  
  'Bí mật thứ tám: May mắn không thể mau bán được',
  
  'Bí mật thứ chín: Hãy giữ niềm tin',
  
  'Bí mật thứ mười: Ai cũng có thể gặp may mắn',
  
  'Bí mật thứ mười một: Cội nguồn của sự may mắn',
  
  'Bí mật thứ mười hai: Không bao giờ là quá trễ',]
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Ebook() {
  const [discountCode, setDiscountCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentLink, setPaymentLink] = useState('https://cassoebook.onrender.com/create-payment-link-a');
  const formRef = useRef(null);
  const handlePurchase = async (e) => {
    e.preventDefault();
    try {
      if (discountCode === 'ANHCUTE') {
        setPaymentLink('https://cassoebook.onrender.com/create-payment-link-b');
        
      } else if (discountCode) {
        setErrorMessage('Mã giảm giá không đúng. Vui lòng nhập lại.');
      }
      setTimeout(() => {
        formRef.current.submit();
      }, 200);
      
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu:', error);
    }
  };
  
  return (
    <div className="bg-white">
      
      <Header></Header>
      <div className="pt-10">
        <nav aria-label="Breadcrumb">
          <ol  className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block border border-bluevio">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg border border-bluevio">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg border border-bluevio">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg border border-bluevio">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl text-bluevio font-medium tracking-tight  sm:text-4xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              
              <div className='text-lg font-bold'>
                Hướng dẫn mua sách
              </div>
              <div className='text-sm p-1 text-gray-500'>1. Nhấn nút "Mua ngay"</div>
              <div className='text-sm  p-1 text-gray-500'>2. Chuyển đến trang chứa mã QR để thanh toán</div>
              <div className='text-sm text-gray-500  p-1'> 3. Mở App Ngân hàng bất kỳ để quét mã VietQR hoặc chuyển khoản chính xác số tiền bên dưới</div>
              <div className='text-sm  text-gray-500 p-1'>4. Sau khi thanh toán thành công, tiến trình download sẽ bắt đầu, nhấn "Continue" để tiếp tục tiến trình download</div>
              <div className='text-sm  text-gray-500 p-1'>5. File ebook sẽ tự động download về máy của bạn</div>
              <div className='text-sm  text-blue-500 font-bold p-1'>Từ ngày 24/04/2024 đến hết ngày 25/05/2024. Khi nhập mã ANHCUTE bạn sẽ được ưu đãi mua ebook <span className="text-red-500"> chỉ với giá 2000đ</span></div>
              <div className="mt-6">
            <label htmlFor="discountCode" className="block text-sm font-medium text-gray-700">Mã giảm giá</label>
            <input
              type="text"
              name="discountCode"
              id="discountCode"
              className="mt-1 block p-2 w-full border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            {errorMessage && (
              <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
            )}
          </div>
              <form action={paymentLink} method="post" ref={formRef} style={{ display: 'none' }}>
                {/* Các trường input và các phần khác của form */}
                <input type="hidden" name="field1" value="value1" /> {/* Ví dụ: Thêm các trường ẩn nếu cần */}
              </form>
              <form action={paymentLink} method="post">
              <button
                onClick={handlePurchase}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-bluevio px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Mua ngay
              </button>
              </form>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-justify text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Thông tin</h3>

              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Mục lục</h3>

            <div className="mt-4">
              <ul  className="list-disc space-y-2 pl-4 text-sm">
                {product.details.map((detail) => (
                  <li key={detail} className="text-gray-400">
                    <span className="text-gray-600">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}