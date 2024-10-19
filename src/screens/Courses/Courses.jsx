import React from 'react'
import Card from '../../components/Card/Card';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Courses = () => {
    return (
        <div className='bg-slate-50'>
            <div className='w-11/12 h-80 mx-auto my-7 flex'>
                <div className='w-1/2 h-max my-auto'>
                    <img className='absolute z-10 h-[11%] right-16 -mt-6' src="public/Rectangle 251.png" />
                    <img className='absolute z-10 h-[22%] -mt-12 right-[45%]' src="public/Dots (1).png" />
                    <img className='absolute z-10 h-[18%] mt-16 right-[7%]' src="public/Dots.png" />
                    <div className='z-50 relative font-normal mr-10 w-max h-max text-lg text-blue-500'>مهمه از کی یاد می گیری!!</div>
                    <div className='z-50 relative font-bold mt-3 mr-10 w-max h-max text-lg'>اموزش برنامه نویسی با بهترین ها</div>
                    <div className='z-50 relative mt-3 mr-10 text-stone-700 h-max text-sm'>آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. </div>
                </div>
                <div className='w-1/2 h/full'><img className='w-[85%] mx-auto h-full' src="public/Asset 1 1.png" /></div>
            </div>
            <div className='w-11/12 mx-auto mb-12 flex'>
                <div className='w-1/6 shadow-2xl h-max rounded-lg ml-5 bg-white '>
                    <div className='bg-gray-400 mx-auto w-1/2 my-2 rounded-lg'> فیلتر </div>
                    <div>   
                    <Accordion>
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            دسته بندی
                        </AccordionSummary>
                        <AccordionDetails>
                        </AccordionDetails>
                    </Accordion>  
                    <Accordion>
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            قیمت
                        </AccordionSummary>
                        <AccordionDetails>
                        </AccordionDetails>
                    </Accordion>  
                    <Accordion>
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            موضوعات
                        </AccordionSummary>
                        <AccordionDetails>
                        </AccordionDetails>
                    </Accordion>  
                    <Accordion>
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            زمان
                        </AccordionSummary>
                        <AccordionDetails>
                        </AccordionDetails>
                    </Accordion>   
                        <Accordion>
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            استاتید
                        </AccordionSummary>
                        <AccordionDetails>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="دکتر بحرالعلوم" />

                        </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    </div>
                </div>
                <div className='w-5/6'>
                    <div className=' h-20 flex'>
                        <div className='h-1/2 w-1/12 my-[1.5%] mr-4 flex bg-slate-200 gap-3 rounded-lg'>
                            <div className='w-1/3 h-3/4 my-auto rounded-lg mr-2 bg-white'><img className='h-[90%] mx-auto my-[1px]' src="public/grid-2.png" /></div>
                            <div className='w-1/3 h-3/4 rounded-lg my-auto'><img className='h-[90%] mx-auto my-[1px]' src="public/grid-1.png" /></div>
                        </div>
                        <div className='h-1/2 my-auto w-1/2 mr-32 flex'><input className='w-full rounded-2xl text-xs py-3 pr-2' type="text" placeholder='چی میخوای یاد بگیری ؟' />
                            <svg className='-mr-7 my-auto' width="19" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z" fill="#2196F3" />
                                <path d="M21.3001 22.5001C21.1201 22.5001 20.9401 22.4301 20.8101 22.3001L18.9501 20.4401C18.6801 20.1701 18.6801 19.7301 18.9501 19.4501C19.2201 19.1801 19.6601 19.1801 19.9401 19.4501L21.8001 21.3101C22.0701 21.5801 22.0701 22.0201 21.8001 22.3001C21.6601 22.4301 21.4801 22.5001 21.3001 22.5001Z" fill="#2196F3" />
                            </svg>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div dir='ltr' className='h-12 w-1/2 mx-auto'>
                        <Pagination className='mx-auto mt-2 w-max' count={10} color="primary" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses