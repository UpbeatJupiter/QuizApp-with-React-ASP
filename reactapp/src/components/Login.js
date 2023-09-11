//{
//  // This file allows you to configure ESLint according to your project's needs, so that you
//  // can control the strictness of the linter, the plugins to use, and more.

//  // For more information about configuring ESLint, visit https://eslint.org/docs/user-guide/configuring/

//  "root": true,
//  "extends": "eslint:recommended",
//  "rules": {}
//}

import React from 'react'
import { Button, Card, CardContent, TextField } from '@mui/material'
import { Box } from '@mui/system'


export default function Login() {
    return (
        <Card sx={{width:400}}>
            <CardContent>
                <Box sx={{
                    '&  .MuiTextField-root':
                    {
                        m: 1,
                        width: '90%'
                    }
                }}>
                    <form noValidate autoComplete="off">
                        <TextField
                            label="Email"
                            name="email"
                            variant="outlined" />
                        <TextField
                            label="Name"
                            name="name"
                            variant="outlined" />
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ width: '90%' }}>Start</Button>
                    </form>
                </Box>
            </CardContent>
        </Card>
        
    )
}