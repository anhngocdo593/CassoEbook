import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import book1 from "../assets/img/book1.jpg"
import book2 from "../assets/img/book2.jpg"
import book3 from "../assets/img/book3.jpg"
import book4 from "../assets/img/book4.png"
// const express= require('express');
// const PayOS= require('@payos/node');

// const payos= new PayOS('17c3fe41-aa4e-46fe-bff1-6b2ac2747c17','3d5f0b78-c0d7-4878-97bd-4ae195997edf','2f07a4a58e91bf2c76ba48b4c1f9b996a9370dc7496b717a9814573b4f718ba0')
// const app=express();
// app.use(express.static('public'));
// app.use(express.json());

// const your_domain='http://localhost:3000';
// app.post('/create-payment-link',async(req,res)=>{
//   const order={
//     amount:10000,
//     description: "",
//     orderCode:10,
//     returnUrl:``,
//     cancelUrl:``
//   }
//   const paymentLink= await payos.creattePaymentLink(order);
//   res.redirect(303,paymentLink.checkoutUrl);

// })
// app.listen(3000,()=>console.log('running on port 3000'));






const product = {
  name: 'Ebook Bí mật của may mắn',
  price: '10.000 đ',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
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
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
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
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            
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
            <h1 className="text-2xl  text-bluevio font-bold tracking-tight  sm:text-3xl">{product.name}</h1>
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
              <div></div>
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-bluevio px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Mua ngay
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-justify text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Thông tin</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Thông tin</h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
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
    </div>
  )
}