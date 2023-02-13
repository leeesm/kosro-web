import React, { useState } from 'react'
import './Login.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const [ loginId, setLoginId ] = useState('');
    const [ loginPwd, setLoginPwd ] = useState('');
    const [ signUpId, setSignUpId ] = useState('');
    const [ signUpPassword, setSignUpPassword ] = useState('');
    const [ signUpName, setSignUpName ] = useState('');
    const [ signUpMail, setSignUpMail ] = useState('');
    const [openSignUpConfirm, setOpenSignUpConfirm] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const onLogIn = async () => {

    //     let expires = new Date(Date.now());
    //     expires.setDate(expires.getDate() + 10);
    //     if(!loginId) alert('아이디를 입력해주세요');
    //     if(!loginPwd) alert('비밀번호를 입력해주세요');
    //     try {
    //         const res = await axiosOncoServer.post('/signin', {id : loginId, pwd : loginPwd});
    //         if(res.status === 200) {
    //             setUserInfo(JSON.parse(res.data));
    //             return navigate('/');
    //         }
    //     }
    //     catch(e) {
    //         if(e.response.status === 404) return alert('존재하지 않는 아이디거나 비밀번호가 일치하지 않습니다.');
    //         else return alert(e);
    //     }
        navigate('/home');

    }

    const handleClickOpenSignUpConfirm = () => {
      setOpenSignUpConfirm(true);
    };

    const handleCloseSignUpConfirm = () => {
      setSignUpId("")
      setSignUpPassword("")
      setSignUpName("")
      setSignUpMail("")
      setOpenSignUpConfirm(false);
    };

    const signUpAccount = async () => {
      const userIdRegex = /^[A-Za-z0-9+]{5,16}$/;
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
      const emailRegex =/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

      if(!signUpId) alert('ID를 입력해주세요')
      else if(!signUpPassword) alert('password를 입력해주세요')
      else if(!signUpName) alert('name을 입력해주세요')
      else if(!signUpMail) alert('e-mail을 입력해주세요')
      else if(!userIdRegex.test(signUpId)) alert('아이디를 숫자+영문자 조합으로 5~16자리로 입력해주세요')
      else if (!passwordRegex.test(signUpPassword)) alert('비밀번호를 숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요')
      else if (!emailRegex.test(signUpMail)) alert('이메일 형식을 다시 확인해주세요')
      else {
        try {
          console.log(signUpId,signUpPassword,signUpName)
          handleClickOpen()
          
          // const res = await axiosOncoServer.post('/user', {id : signUpId, pwd : signUpPassword, name : signUpName});
          // if(res.status === 200) {
              // return handleClose();
          // }
        } catch (e) {
          return alert(e);
        }
      }
    }

    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      handleCloseSignUpConfirm()
      setOpen(false);
    };

  return (
    <div className="login-page">
        <div className="box">
            <form className="login-form">
                <h1>Login</h1>
                <input type="text" name="id" placeholder="ID" required 
                    onChange={ (e) => {
                    const inputValue = e.target.value.replace(/\s/g, "");
                    e.target.value = inputValue;
                    setLoginId(inputValue);
                    }}/>
                <input type="password" name="password" placeholder="Password" required
                    onChange={ (e) => {
                    const inputValue = e.target.value.replace(/\s/g, "");
                    e.target.value = inputValue;
                    setLoginPwd(inputValue);
                }}/>
                <button id='login-submit-btn' type='button' onClick={() => onLogIn()}>로그인</button>
                <button type='button' id="signUp-submit-btn" variant="outlined" onClick={handleClickOpenSignUpConfirm}>
                    회원가입
                </button>
                <Dialog open={openSignUpConfirm} onClose={handleCloseSignUpConfirm} sx={{ '& .MuiDialog-paper': { width: '380px', height: '600px' } }} maxWidth="xs">
                    <DialogTitle sx={{ color: 'white', backgroundColor: '#20639b', fontWeight: '600' }}>회원가입</DialogTitle>
                    <DialogContent sx={{ color: '#d5d5d5', backgroundColor: '#20639b' }}>
                        <DialogContentText sx={{ color: 'white', backgroundColor: '#20639b', fontWeight: '600'}}>
                            ID
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="LoginID"
                            label="id"
                            type="text"
                            fullWidth
                            variant="standard"
                            placeholder='숫자+영문자 조합으로 5 ~ 16자리'
                            onChange={ (e) => setSignUpId(e.target.value)}
                            sx={{ borderTop: 'none', borderBottom: 'none', padding: '0px'}}
                        />
                        <DialogContentText sx={{ color: 'white', backgroundColor: '#20639b', fontWeight: '600', margin: '35px 0 0 0'}}>
                            Password
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            id="LoginPassword"
                            label="password"
                            type="password"
                            fullWidth
                            variant="standard"
                            placeholder='숫자+영문자+특수문자 조합으로 8 ~ 25자리'
                            onChange={ (e) => setSignUpPassword(e.target.value)}
                            sx={{ borderTop: 'none', borderBottom: 'none', padding: '0px'}}
                        />
                        <DialogContentText sx={{ color: 'white', backgroundColor: '#20639b', fontWeight: '600', margin: '35px 0 0 0'}}>
                            Name
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            id="LoginName"
                            label="name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={ (e) => setSignUpName(e.target.value)}
                            sx={{ borderTop: 'none', borderBottom: 'none', padding: '0px'}}
                        />
                        <DialogContentText sx={{ color: 'white', backgroundColor: '#20639b', fontWeight: '600', margin: '35px 0 0 0'}}>
                            E-Mail
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            id="LoginMail"
                            label="e-mail"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={ (e) => setSignUpMail(e.target.value)}
                            sx={{ borderTop: 'none', borderBottom: 'none', padding: '0px'}}
                        />
                    </DialogContent>
                    <DialogActions sx={{ color: 'white', backgroundColor: '#173f5f', padding: '7px 10px'}}>
                        <Button sx={{ color: 'white', backgroundColor: '#173f5f', padding: '7px 10px', ":hover": { backgroundColor: '#102c43' } }} onClick={handleCloseSignUpConfirm}>Cancel</Button>
                        <Button sx={{ color: 'white', backgroundColor: '#173f5f', padding: '7px 10px', ":hover": { backgroundColor: '#102c43' } }} onClick={signUpAccount}>Sign up</Button>
                    </DialogActions>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        sx={{ '& .MuiDialog-paper': { width: '80%', height: '180px' } }} maxWidth="xs"
                    >
                        <DialogTitle id="alert-dialog-title" sx={{ color: 'white', backgroundColor: '#20639b', fontWeight: '600', paddingBottom: '0px' }}>
                            {"회원가입 완료"}
                        </DialogTitle>
                        <DialogContent sx={{ color: '#d5d5d5', backgroundColor: '#20639b', padding: '15px 24px 0px 24px!important'}}>
                            <DialogContentText id="alert-dialog-description" sx={{ color: 'white', backgroundColor: '#20639b', fontWeight: '600' }}>
                                회원가입이 완료되었습니다.<br/>
                                관리자의 승인을 기다려 주세요.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions sx={{ color: 'white', backgroundColor: '#173f5f', padding: '7px 10px'}}>
                            <Button onClick={handleClose} sx={{ color: 'white', backgroundColor: '#173f5f', padding: '7px 10px', ":hover": { backgroundColor: '#102c43' } }} autoFocus>
                                확인
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Dialog>
            </form>
        </div>
    </div>
  )
}
