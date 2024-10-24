import React from 'react'

const products = [
    {
        id: 1,
        name: 'دوره جامع HTML 5 صفر تا صد',
        // href: '#',
        lesen: '204درس',
        time: '14ساعت',
        date: '1آذر1403',
        tname: 'دکتر بحرالعلوم',
        snumber: '254',
        price: '500000',
        imageSrc: 'public/Rectangle 124.png',
        info: 'محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛ برای مسائل واقعی دنیای نرم افزار  محبوب ترین کتابخانه ی جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز.',
    },
    {
        id: 2,
        name: 'دوره جامع HTML 5 صفر تا صد',
        // href: '#',
        lesen: '204درس',
        time: '14ساعت',
        date: '1آذر403',
        tname: 'دکتر بحرالعلوم',
        snumber: '254',
        price: '500000',
        imageSrc: 'public/Rectangle 124.png',
        info: 'محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛ برای مسائل واقعی دنیای نرم افزار  محبوب ترین کتابخانه ی جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز.',
    },
    {
        id: 3,
        name: 'دوره جامع HTML 5 صفر تا صد',
        // href: '#',
        lesen: '204درس',
        time: '14ساعت',
        date: '1آذر403',
        tname: 'دکتر بحرالعلوم',
        snumber: '254',
        price: '500000',
        imageSrc: 'public/Rectangle 124.png',
        info: 'محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛ برای مسائل واقعی دنیای نرم افزار  محبوب ترین کتابخانه ی جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز.',
    },
    {
        id: 4,
        name: 'دوره جامع HTML 5 صفر تا صد',
        // href: '#',
        lesen: '204درس',
        time: '14ساعت',
        date: '1آذر403',
        tname: 'دکتر بحرالعلوم',
        snumber: '254',
        price: '500000',
        imageSrc: 'public/Rectangle 124.png',
        info: 'محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛ برای مسائل واقعی دنیای نرم افزار  محبوب ترین کتابخانه ی جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز.',
    },
]

function Card1() {
    return (
        <div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="py-5">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className=" rounded-lg group">
                            <div className='shadow-lg bg-white rounded-2xl -mt-5 mb-12 flex'>
                                <div className='w-1/2'><img className='py-3 pr-4' src={product.imageSrc} /></div>
                                <div className=''>
                                    <div className='mt-5 mr-5'>{product.name}</div>
                                    <div className='mt-3 text-xs mx-5'>{product.info} </div>
                                    <div className='flex my-4 mx-5'>
                                        <div className='bg-slate-200 rounded-2xl flex'>
                                            <div className='flex py-1'>
                                                <div className='mr-3 my-auto'>
                                                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.70001 1.68669L2.68668 4.30669C1.40001 5.14669 1.40001 7.02669 2.68668 7.86669L6.70001 10.4867C7.42001 10.96 8.60668 10.96 9.32668 10.4867L13.32 7.86669C14.6 7.02669 14.6 5.15336 13.32 4.31336L9.32668 1.69336C8.60668 1.21336 7.42001 1.21336 6.70001 1.68669Z" stroke="#263238" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M3.75337 8.72021L3.7467 11.8469C3.7467 12.6935 4.40004 13.6002 5.20004 13.8669L7.3267 14.5735C7.69337 14.6935 8.30004 14.6935 8.67337 14.5735L10.8 13.8669C11.6 13.6002 12.2534 12.6935 12.2534 11.8469V8.75355" stroke="#263238" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M14.2667 10V6" stroke="#263238" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className='mr-1 text-xs'>{product.tname}</div>
                                            </div>
                                            <div className='flex py-1'>
                                                <div className='mr-2 my-auto'>
                                                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.10671 7.24683C6.04004 7.24016 5.96004 7.24016 5.88671 7.24683C4.30004 7.1935 3.04004 5.8935 3.04004 4.2935C3.04004 2.66016 4.36004 1.3335 6.00004 1.3335C7.63337 1.3335 8.96004 2.66016 8.96004 4.2935C8.95337 5.8935 7.69337 7.1935 6.10671 7.24683Z" stroke="#263238" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.9401 2.6665C12.2334 2.6665 13.2734 3.71317 13.2734 4.99984C13.2734 6.25984 12.2734 7.2865 11.0267 7.33317C10.9734 7.3265 10.9134 7.3265 10.8534 7.33317" stroke="#263238" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M2.77335 9.7065C1.16002 10.7865 1.16002 12.5465 2.77335 13.6198C4.60669 14.8465 7.61335 14.8465 9.44669 13.6198C11.06 12.5398 11.06 10.7798 9.44669 9.7065C7.62002 8.4865 4.61335 8.4865 2.77335 9.7065Z" stroke="#263238" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12.2267 13.3335C12.7067 13.2335 13.16 13.0402 13.5334 12.7535C14.5734 11.9735 14.5734 10.6868 13.5334 9.90683C13.1667 9.62683 12.72 9.44016 12.2467 9.3335" stroke="#263238" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className='mr-1 text-xs'>{product.snumber} دانش آموز</div>
                                            </div>
                                            <div className='flex py-1'>
                                                <div className='mr-2 my-auto'>
                                                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.44 6.95984L13.7867 9.74651C13.2267 12.1532 12.12 13.1265 10.04 12.9265C9.70671 12.8998 9.3467 12.8398 8.96004 12.7465L7.84004 12.4798C5.06004 11.8198 4.20004 10.4465 4.85337 7.65984L5.50671 4.86651C5.64004 4.29984 5.80004 3.80651 6.00004 3.39984C6.78004 1.78651 8.1067 1.35318 10.3334 1.87984L11.4467 2.13984C14.24 2.79318 15.0934 4.17318 14.44 6.95984Z" stroke="#263238" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.04 12.9266C9.62665 13.2066 9.10665 13.4399 8.47332 13.6466L7.41998 13.9932C4.77332 14.8466 3.37998 14.1332 2.51998 11.4866L1.66665 8.85324C0.813317 6.20657 1.51998 4.80657 4.16665 3.95324L5.21998 3.60657C5.49332 3.5199 5.75332 3.44657 5.99998 3.3999C5.79998 3.80657 5.63998 4.2999 5.50665 4.86657L4.85332 7.6599C4.19998 10.4466 5.05998 11.8199 7.83998 12.4799L8.95998 12.7466C9.34665 12.8399 9.70665 12.8999 10.04 12.9266Z" stroke="#263238" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M8.42664 5.68652L11.66 6.50652" stroke="#263238" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M7.77332 8.2666L9.70665 8.75994" stroke="#263238" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className='mr-1 text-xs'>{product.lesen}</div>
                                            </div>
                                            <div className='flex py-1'>
                                                <div className='mr-2 my-auto'>
                                                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.6667 8.00016C14.6667 11.6802 11.68 14.6668 8.00004 14.6668C4.32004 14.6668 1.33337 11.6802 1.33337 8.00016C1.33337 4.32016 4.32004 1.3335 8.00004 1.3335C11.68 1.3335 14.6667 4.32016 14.6667 8.00016Z" stroke="#263238" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.4733 10.1202L8.40663 8.88684C8.04663 8.6735 7.7533 8.16017 7.7533 7.74017V5.00684" stroke="#263238" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className='mr-1 text-xs'>{product.time}</div>
                                            </div>
                                            <div className='flex py-1'>
                                                <div className='mr-2 my-auto'>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.33337 1.3335V3.3335" stroke="#263238" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.6666 1.3335V3.3335" stroke="#263238" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M2.33337 6.06006H13.6667" stroke="#263238" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M14 5.66683V11.3335C14 13.3335 13 14.6668 10.6667 14.6668H5.33333C3 14.6668 2 13.3335 2 11.3335V5.66683C2 3.66683 3 2.3335 5.33333 2.3335H10.6667C13 2.3335 14 3.66683 14 5.66683Z" stroke="#263238" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M7.99703 9.13314H8.00302" stroke="#263238" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M5.5295 9.13314H5.53549" stroke="#263238" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M5.5295 11.1331H5.53549" stroke="#263238" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className='mr-1 ml-3 text-xs'>{product.date}</div>
                                            </div>
                                        </div>
                                        <div className='flex mr-36'>
                                            <div className='text-blue-500 my-auto mr-3 text-sm'> {product.price} </div>
                                            <div className='text-xs my-auto mr-1'> تومان </div></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div></div>
    )
}

export default Card1