import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Box, Button, Grid } from '@mui/material';

const validationSchema = Yup.object().shape({
  oldpassa: Yup.string().required('رمز عبور را وارد کنید'),
  newpassa: Yup.string().required('رمز عبور جدید را وارد کنید'),
  newpassb: Yup.string().required('رمز عبور جدید را وارد کنید'),

});

function CheangePass() {
  return (
    <div>
      <div className="h-12 flex border-b border-b-slate-300">
        <div className="w-1/2">
          <div className="w-1/3 h-full">
            <div className="mt-2 w-max my-auto mr-5 h-min">تغییر رمز عبور</div>
          </div>
        </div>
        <div className="w-1/2" dir="ltr">
          <div className="w-1/3 h-full flex ml-12">
            <div className="h-min my-auto cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
            <div className="h-min my-auto ml-3 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Formik
          initialValues={{
            oldpassa: '',
            newpassa: '',
            newpassb: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange }) => (
            <Form>
              <div className="w-3/5 mx-auto mt-12">
                <Box className="" sx={{ flexGrow: 1 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <div className='mb-2'>رمز عبور فعلی</div>
                      <Field
                        as={TextField}
                        name="oldpassa"
                        placeholder=""
                        fullWidth
                      />
                      <ErrorMessage className='text-red-600 text-sm' name="oldpassa" component="div" />
                    </Grid>
                    <Grid item xs={12}>
                      <div className='mb-2'>رمز عبور جدید</div>
                      <Field
                        as={TextField}
                        name="newpassa"
                        placeholder=""
                        fullWidth
                      />
                      <ErrorMessage className='text-red-600 text-sm' name="newpassa" component="div" />
                    </Grid>
                    <Grid item xs={12}>
                      <div className='mb-2'>تکرار رمز عبور جدید</div>
                      <Field
                        as={TextField}
                        name="newpassb"
                        placeholder=""
                        fullWidth
                      />
                      <ErrorMessage className='text-red-600 text-sm' name="newpassb" component="div" />
                    </Grid>
                  </Grid>
                </Box>
              </div>
              <div className='mt-12 w-1/5 rounded-lg mx-auto'>
                <Button className='w-full' type="submit" variant="contained" color="primary">
                  ثبت اطلاعات
                </Button>
              </div>
            </Form>
          )}
        </Formik>

      </div>
    </div>
  )
}

export default CheangePass;
