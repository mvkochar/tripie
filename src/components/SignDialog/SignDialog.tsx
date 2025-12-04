import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './SignDialog.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1440,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
};


const SignDialog = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(true), setHaveLogin(false) };
    const handleClose = () => setOpen(false);

    const [haveLogin, setHaveLogin] = React.useState(false)
    const handleLogin = () => {
        setHaveLogin((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [viewPwd, setViewPwd] = React.useState(false)
    const handlePwd = () => {
        setViewPwd((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <div>
            <button className='header-sign' onClick={handleOpen}>
                  Sign up
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="d-f">
                        <div className="sign-pic">
                            <div><img src="/images/sign-logo1.png" alt="sign-logo" /></div>
                        </div>
                        <div className="sign-info">
                            <div className='sign-logo'><img src="/images/sign-logo2.png" alt="sign-logo2" /></div>
                            <h3 className="sign-title">{haveLogin ? "Sign in" : "Sign up"}</h3>
                            <p className="sign-desc">Use Your OpenID to Sign {haveLogin ? 'in' : 'up'}</p>
                            <div className="sign-social d-f">
                                <a href="" className="sign-google">Google</a>
                                <a href="" className="sign-apple">Apple ID</a>
                            </div>
                            <form action="" className='sign-fm'>
                                <label htmlFor="signEmail">Or continue with email</label>
                                <input type="email" name="signEmail" id="signEmail" placeholder='Enter your email' />
                                {
                                    haveLogin ?
                                        <>
                                            <div className="pwd-wr">
                                                <input type={viewPwd ? "text" : "password"} name="signPwd" placeholder='Password' />
                                                <button type='button' className='pwd-btn' onClick={handlePwd}>
                                                    <img src="/images/small.png" alt="small" />
                                                </button>
                                            </div>
                                            <button className='forgot-btn'>Forgot password?</button>
                                        </>
                                        : null
                                }
                                <button type="button">{haveLogin ? "Login" : "Sign up"}</button>
                            </form>
                            {
                                !haveLogin ?
                                    <div className="sign-login d-f">
                                        <p className="sign-login-name">Already have an account?</p>
                                        <button className='sign-login-btn btn-clear d-b' onClick={handleLogin}>
                                            Login
                                        </button>
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default SignDialog