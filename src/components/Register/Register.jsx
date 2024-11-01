import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import "./Register";

function Register() {
  // if (!isOpen) return null;
  
  const [mobileNumber, setMobileNumber] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [timer, setTimer] = useState(120); 
  const [code, setCode] = useState(['', '', '', '', '']); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isCodeConfirmed, setIsCodeConfirmed] = useState(false);   

  useEffect(() => {
    let interval = null;
    if (isCodeSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isCodeSent, timer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`https://classapi.sepehracademy.ir/api/Sign/SendVerifyMessage`, {
      phoneNumber: mobileNumber,
    });

    console.log('کد تایید به شماره موبایل ارسال شد.');
    setIsCodeSent(true); 
    setErrorMessage(''); 
  };

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleCodeSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(`https://classapi.sepehracademy.ir/api/Sign/VerifyMessage`, {
            phoneNumber: mobileNumber,
            verifyCode: code.join(''), 
        });

        if (response.status === 200) {
          setIsCodeConfirmed(true);
          setErrorMessage('');
        }
    } catch (error) {
      setErrorMessage('کد تأیید نادرست است.');
        
    };

    

    

    /*if (code.join('') === '12345') {  
      setIsCodeConfirmed(true);
      setErrorMessage('');
    } else {
      setErrorMessage('کد تأیید نادرست است.');
    }*/
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage('ایمیل معتبر نیست.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('رمز عبور و تایید رمز عبور باید یکی باشند.');
      return;
    }

    await axios.post(`https://classapi.sepehracademy.ir/api/Sign/Register`, {
      password,
      gmail: email,
      phoneNumber: mobileNumber,
    });

    console.log('اطلاعات ثبت‌نام ارسال شد.');
    setErrorMessage('');
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <div className="login-container">
      <button className="close-btn" onClick={() => setIsCodeSent(false)}>×</button>
      {isCodeSent ? (
        <>
          {isCodeConfirmed ? ( 
            <div>
              <h2>اطلاعات کاربری</h2>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <form onSubmit={handleRegistrationSubmit}>
                <input
                  type="email"
                  placeholder="ایمیل"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="رمز عبور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="تایید رمز عبور"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button type="submit">ثبت‌نام</button>
              </form>
            </div>
          ) : (
            <div>
              <h2>کد تاییدیه</h2>
              <p>
                کد به شماره {mobileNumber} ارسال شد. <a href="#">تغییر شماره</a>
              </p>
              <form onSubmit={handleCodeSubmit}>
                <div className="code-inputs">
                  {code.map((value, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={value}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      required
                    />
                  ))}
                </div>
                <p>{formatTime(timer)}</p>
                <button type="submit">تایید کد</button>
              </form>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <p>
                کد ارسال نشد؟ <a href="#">ارسال دوباره</a>
              </p>
            </div>
          )}
        </>
      ) : (
        <div>
          <h2>ساخت حساب کاربری</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="شماره موبایل"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
            <button type="submit">دریافت کد تایید</button>
          </form>
          <p>
            حساب کاربری دارید؟ <a href="../login">وارد شوید</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Register;
