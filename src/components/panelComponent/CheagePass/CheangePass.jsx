import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Box, Button, Grid } from '@mui/material';
import http from "../../../core/services/interceptor"
import toast from "react-hot-toast";

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required('رمز عبور فعلی را وارد کنید'),
  newPassword: Yup.string()
    .required('رمز عبور جدید را وارد کنید')
    .min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد')
});

function ChangePass() {
  const [changePass, setChangePass] = useState([]);

  const changePassApi = async (data) => {
    try {
      const res = await http.post("/SharePanel/ChangePassword", data);
      
      toast.success('رمز عبور با موفقیت تغییر یافت'); 
    } catch (error) {
      toast.error('خطا در تغییر رمز عبور. لطفا دوباره تلاش کنید.'); 
    }
  };

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
              
            </div>
          </div>
        </div>
      </div>
      <div>
        <Formik
          initialValues={{ oldPassword: "", newPassword: "" }}
          validationSchema={validationSchema} 
          onSubmit={(values) => changePassApi(values)}  
        >
          <Form>
            <div className="w-3/5 mx-auto mt-12">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <div className='mb-2'>رمز عبور فعلی</div>
                    <Field
                      as={TextField}
                      name="oldPassword"
                      id="oldPassword"
                      placeholder=""
                      fullWidth
                    />
                    <ErrorMessage className='text-red-600 text-sm' name="oldPassword" component="div" />
                  </Grid>
                  <Grid item xs={12}>
                    <div className='mb-2'>رمز عبور جدید</div>
                    <Field
                      as={TextField}
                      name="newPassword"
                      id="newPassword"
                      placeholder=""
                      fullWidth
                    />
                    <ErrorMessage className='text-red-600 text-sm' name="newPassword" component="div" />
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
        </Formik>
      </div>
    </div>
  );
}

export default ChangePass;
