import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Box, Button, Grid } from '@mui/material';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('نام الزامی است'),
    lastName: Yup.string().required('نام خانوادگی الزامی است'),
    nationalCode: Yup.string()
        .required('کد ملی الزامی است')
        .length(10, 'کد ملی باید 10 رقم باشد'),
    email: Yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),
    birthDate: Yup.date().required('تاریخ تولد الزامی است'),
    mobile: Yup.string()
        .required('شماره موبایل الزامی است')
        .matches(/^d{10}$/, 'شماره موبایل باید 10 رقم باشد'),
});

const MyForm = () => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                nationalCode: '',
                email: '',
                birthDate: '',
                mobile: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ handleChange }) => (
                <Form>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <div className='mb-2'>نام</div>
                                <Field
                                    as={TextField}
                                    name="firstName"
                                    placeholder="بیتا"
                                    fullWidth
                                />
                                <ErrorMessage className='text-red-600 text-sm' name="firstName" component="div" />
                            </Grid>
                            <Grid item xs={4}>
                                <div className='mb-2'>نام خانوادگی</div>
                                <Field
                                    as={TextField}
                                    name="lastName"
                                    placeholder="قنبری"
                                    fullWidth
                                />
                                <ErrorMessage className='text-red-600 text-sm' name="lastName" component="div" />
                            </Grid>
                            <Grid item xs={4}>
                                <div className='mb-2'>کد ملی</div>
                                <Field
                                    as={TextField}
                                    name="nationalCode"
                                    placeholder="۱۲۳۴۵۶۷۸۹۰"
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
                                    placeholder="bitaghanbari@gmail.com"
                                    fullWidth
                                />
                                <ErrorMessage className='text-red-600 text-sm' name="email" component="div" />
                            </Grid>
                            <Grid item xs={4}>
                                <div className='mb-2'>تاریخ تولد</div>
                                <Field
                                    as={TextField}
                                    name="birthDate"
                                    type="date"
                                    placeholder="1402/03/26"
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                                <ErrorMessage className='text-red-600 text-sm' name="birthDate" component="div" />
                            </Grid>
                            <Grid item xs={4}>
                                <div className='mb-2'>شماره موبایل</div>
                                <Field
                                    as={TextField}
                                    name="mobile"
                                    placeholder="09031129980"
                                    fullWidth
                                />
                                <ErrorMessage className='text-red-600 text-sm' name="mobile" component="div" />
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
