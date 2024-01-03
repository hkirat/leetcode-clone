import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSignIn = () => {
        fetch("http://localhost:3000/admin/login", {
            method: "POST",
            headers: {
                username: email,
                password: pass,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    localStorage.setItem("token", data.token);
                    console.log(data);
                    navigate("/");
                    window.location.reload();
                } else {
                    console.log(data.status);
                }
            });
    };

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
                    backgroundColor: 'white',
                }}
            >
                <div>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h6">Sign In</Typography>
                </div>

                <Card
                    variant="outlined"
                    style={{ width: 400, padding: 20 }}
                >
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
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSignIn}
                        >
                            Sign In
                        </Button>
                    </div>
                </Card>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: 20,
                        paddingLeft: 10,
                    }}
                >
                    <Link href="#" variant="body2" style={{ color: 'black' }}>
                        Forgot password?
                    </Link>

                    <Link
                        href="/SignUp"
                        variant="body2"
                        paddingLeft={15}
                        style={{ color: 'black' }}
                    >
                        {"Don't have an account? Sign Up"}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
