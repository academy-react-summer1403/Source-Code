import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Box, Button, Grid } from '@mui/material';

const validationSchema = Yup.object().shape({
    fName: Yup.string().required('نام الزامی است'),
    lName: Yup.string().required('نام خانوادگی الزامی است'),
    nationalCode: Yup.string()
        .required('کد ملی الزامی است')
        .length(10, 'کد ملی باید 10 رقم باشد'),
    email: Yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),
    birthDay: Yup.date().required('تاریخ تولد الزامی است'),
    phoneNumber: Yup.string()
        .required('شماره موبایل الزامی است')
        .matches(/^\d{11}$/, 'شماره موبایل باید 11 رقم باشد'),
        userAbout: Yup.string()
        .required('وارد کردن اطلاعات درباره من الزامی است')
        .min(10, 'درباره من باید حداقل 10 کاراکتر باشد'),
    homeAdderess: Yup.string()
        .required('آدرس الزامی است')
        .min(5, 'آدرس باید حداقل 5 کاراکتر باشد')
        .max(50, 'آدرس نمی‌تواند بیشتر از 50 کاراکتر باشد'),
});

const MyForm = ({ profileData, onSubmit }) => {
    return (
        <Formik
        initialValues={{
            fName: profileData?.fName || '',
            lName: profileData?.lName || '',
            nationalCode: profileData?.nationalCode || '',
            email: profileData?.email || '',
            birthDay: profileData?.birthDay || '',
            phoneNumber: profileData?.phoneNumber || '',
            userAbout: profileData?.userAbout || '',
            homeAdderess: profileData?.homeAdderess || '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            const formattedValues = {
                ...values,
                birthDay: new Date(values.birthDay).toISOString().split('T')[0] + 'T00:00:00',
            };
            console.log('Submitted Values:', formattedValues);
            onSubmit(formattedValues);
        }}
        enableReinitialize
        >
            {() => (
                <Form>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <div className='mb-2'>نام</div>
                                <Field
                                    as={TextField}
                                    name="fName"
                                    fullWidth
                                />
                                <ErrorMessage className='text-red-600 text-sm' name="fName" component="div" />
                            </Grid>
                            <Grid item xs={4}>
                                <div className='mb-2'>نام خانوادگی</div>
                                <Field
                                    as={TextField}
                                    name="lName"
                                    fullWidth
                                />
                                <ErrorMessage className='text-red-600 text-sm' name="lName" component="div" />
                            </Grid>
                            <Grid item xs={4}>
                                <div className='mb-2'>کد ملی</div>
                                <Field
                                    as={TextField}
                                    name="nationalCode"
                                    fullWidth
                                />
                                <ErrorMessage className='text-red-600 text-sm' name="nationalCode" component="div" />
                            </Grid>
                            <Grid item xs={4}>
                                <div className='mb-2'>ایمیل</div>
                                <Field
                                    as={TextField}
                                    name="email"
                                    type="email"
                                    fullWidth
                                />
                                <ErrorMessage className='text-red-600 text-sm' name="email" component="div" />
                            </Grid>
                            <Grid item xs={4}>
                                <div className='mb-2'>تاریخ تولد</div>
                                <Field
                                    as={TextField}
                                    name="birthDay"
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                                <ErrorMessage className='text-red-600 text-sm' name="birthDay" component="div" />
                            </Grid>
                            <Grid item xs={4}>
                                <div className='mb-2'>شماره موبایل</div>
                                <Field
                                    as={TextField}
                                    name="phoneNumber"
                                    fullWidth
                                />
                                <ErrorMessage className='text-red-600 text-sm' name="phoneNumber" component="div" />
                            </Grid>
                            <Grid item xs={6}>
                                <div className='mb-2'> درباره من</div>
                                <Field
                                    as={TextField}
                                    name="userAbout"
                                    fullWidth
                                />
                                <ErrorMessage className='text-red-600 text-sm' name="userAbout" component="div" />
                            </Grid>
                            <Grid item xs={6}>
                                <div className='mb-2'>آدرس</div>
                                <Field
                                    as={TextField}
                                    name="homeAdderess"
                                    fullWidth
                                />
                                <ErrorMessage className='text-red-600 text-sm' name="homeAdderess" component="div" />
                            </Grid>
                        </Grid>
                    </Box>
                    <div className='mt-12 w-1/5 rounded-lg'>
                        <Button className='w-full' type="submit" variant="contained" color="primary">
                            ثبت اطلاعات
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default MyForm;
