import React from "react"

const products = [
    {
        id: 1,
        name: 'دوره جامع HTML 5 صفر تا صد',
        // href: '#',
        lesen: '204درس',
        time: '14ساعت',
        date: '1آذر403',
        tname: 'دکتر بحرالعلوم',
        snumber: '254',
        price: '500000',
        imageSrc: 'public/Rectangle 124.png',
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
    },


]

const Card = () => {
    return (
        <div className="">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="h-max bg-white rounded-lg group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg mt-2 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.imageSrc}
                                    className="mx-auto object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-3 mx-auto w-max text-sm text-gray-700">{product.name}</h3>
                            <div className='w-5/6 h-6 bg-slate-200 rounded-xl mx-auto mt-2 flex'>
                                <div className='h-full mr-2 flex'>
                                    <div className='my-1'>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6349 6.0898L12.0633 8.52813C11.5733 10.634 10.6049 11.4856 8.78494 11.3106C8.49328 11.2873 8.17828 11.2348 7.83994 11.1531L6.85994 10.9198C4.42744 10.3423 3.67494 9.14063 4.24661 6.7023L4.81828 4.25813C4.93494 3.7623 5.07494 3.33063 5.24994 2.9748C5.93244 1.56313 7.09328 1.18397 9.04161 1.6448L10.0158 1.8723C12.4599 2.44397 13.2066 3.65147 12.6349 6.0898Z" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.78496 11.3109C8.42329 11.5559 7.96829 11.7601 7.41412 11.9409L6.49246 12.2443C4.17662 12.9909 2.95745 12.3668 2.20495 10.0509L1.45829 7.74676C0.711621 5.43093 1.32995 4.20593 3.64579 3.45926L4.56745 3.15593C4.80662 3.0801 5.03412 3.01593 5.24996 2.9751C5.07496 3.33093 4.93496 3.7626 4.81829 4.25843L4.24662 6.7026C3.67496 9.14093 4.42746 10.3426 6.85996 10.9201L7.83996 11.1534C8.17829 11.2351 8.49329 11.2876 8.78496 11.3109Z" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7.37329 4.97607L10.2025 5.69357" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.80164 7.2334L8.4933 7.66507" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='text-[10px] mt-1 mr-1'> {product.lesen} </div>
                                </div>
                                <div className='h-full mr-2 flex'>
                                    <div className='my-1'>
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.8333 7.49984C12.8333 10.7198 10.22 13.3332 6.99996 13.3332C3.77996 13.3332 1.16663 10.7198 1.16663 7.49984C1.16663 4.27984 3.77996 1.6665 6.99996 1.6665C10.22 1.6665 12.8333 4.27984 12.8333 7.49984Z" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.16418 9.35503L7.35585 8.27586C7.04085 8.08919 6.78418 7.64003 6.78418 7.27253V4.88086" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                    <div className='text-[10px] mt-1 mr-1'> {product.time} </div>
                                </div>
                                <div className='h-full mr-2 flex'>
                                    <div className='my-1'>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.66663 1.1665V2.9165" stroke="#263238" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.33337 1.1665V2.9165" stroke="#263238" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M2.04163 5.30273H11.9583" stroke="#263238" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12.25 4.95817V9.9165C12.25 11.6665 11.375 12.8332 9.33333 12.8332H4.66667C2.625 12.8332 1.75 11.6665 1.75 9.9165V4.95817C1.75 3.20817 2.625 2.0415 4.66667 2.0415H9.33333C11.375 2.0415 12.25 3.20817 12.25 4.95817Z" stroke="#263238" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.99732 7.99186H7.00256" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M4.83839 7.99186H4.84363" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M4.83839 9.74186H4.84363" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                    <div className='text-[10px] mt-1 mr-1'> {product.date}  </div>
                                </div>
                            </div>
                            <div className='mx-auto mt-3 w-5/6 h-6 flex'>
                                <div className='font-medium text-xs mt-0.5'> مدرس: </div>
                                <div className='text-xs mr-1 mt-0.5'> {product.tname} </div>
                                <div className='text-xs mr-4 mt-0.5'> {product.snumber} دانش آموز </div>
                            </div>
                            <div className='mt-2 mb-5 mx-auto w-5/6 h-7 flex'>
                                <div className='bg-red-300 rounded-xl h-full w-1/4 flex'>
                                    <div className='py-1.5 pr-1'>
                                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.41337 13.8736C8.18671 13.9536 7.81337 13.9536 7.58671 13.8736C5.65337 13.2136 1.33337 10.4602 1.33337 5.79356C1.33337 3.73356 2.99337 2.06689 5.04004 2.06689C6.25337 2.06689 7.32671 2.65356 8.00004 3.56023C8.67337 2.65356 9.75337 2.06689 10.96 2.06689C13.0067 2.06689 14.6667 3.73356 14.6667 5.79356C14.6667 10.4602 10.3467 13.2136 8.41337 13.8736Z" fill="#F44336" stroke="#F44336" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='mr-1 text-red-600'> 12 </div>
                                </div>
                                <div className='h-full w-3/5 mr-12 flex'>
                                    <div className='text-blue-500 my-auto mr-3 text-sm'> {product.price} </div>
                                    <div className='text-xs my-auto mr-1'> تومان </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card