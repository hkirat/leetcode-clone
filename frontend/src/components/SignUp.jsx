import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '@mui/material/Link';
import axios from 'axios';

function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
            }}
        >
            {/* Left side (30%) */}
            <div
                style={{
                    flex: '0 0 30%',
                    backgroundColor: 'black',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h3" style={{ color: 'white' }}>
                    Code Daily
                </Typography>
            </div>

            {/* Right side (70%) */}
            <div
                style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h6">Sign Up</Typography>
                </div>

                <Card variant="outlined" style={{ width: 400, padding: 20, backgroundColor: 'white' }}>
                    <TextField
                        id="username"
                        label="Email"
                        variant="outlined"
                        fullWidth={true}
                        required={true}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <br />
                    <br />
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        required={true}
                        fullWidth={true}
                        onChange={(e) => {
                            setPass(e.target.value);
                        }}
                    />
                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={async () => {
                                try {
                                    const response = await axios.post('http://localhost:3000/admin/signup', {
                                        username: email,
                                        password: pass,
                                    });

                                    const data = response.data;

                                    if (data.status === 200) {
                                        localStorage.setItem('token', data.token);
                                        console.log(data);
                                        navigate('/');
                                        window.location.reload();
                                    } else {
                                        console.log(data.status);
                                    }
                                } catch (error) {
                                    console.error('Error:', error);
                                }
                            }}
                        >
                            Sign Up
                        </Button>
                    </div>
                </Card>

                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 20, paddingLeft: 10 }}>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>

                    <Link href="/SignIn" variant="body2" paddingLeft={15}>
                        {"Already have an account? Sign In"}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
