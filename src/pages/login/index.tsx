import React from 'react';
import { Container, Button, Grid, Paper, Box, Typography, TextField } from '@mui/material'


type LoginType = {
  username:string,
  password:string
}

export const LoginPage: React.FC<{}> = () => {
  const [loginData, setLoginData] = React.useState<LoginType>({
    username:'',
    password:''
  })

  const receivedData = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginData({...loginData, [e.target.name]: e.target.value})
  }

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>)=>{
      e.preventDefault()
      console.log(loginData)
    }

    return (
        <div>
          <Container maxWidth='sm'>
            <Grid container 
            direction='column' 
            alignItems='center' 
            justifyContent='center'
            sx={{minHeight:'100vh'}}
            >
              <Grid item>
                    <Paper 
                    sx={{padding:'1.2em',
                    borderRadius:'0.5em'}}
                    >
                          <Typography sx={{mt:1, mb:1}} variant='h5'>
                            Iniciar Sesion 
                          </Typography>
                          <Box component='form' onSubmit={handleSubmit}>
                                <TextField 
                                name='username'
                                margin='normal'
                                type='text'
                                fullWidth
                                label='E-mail'
                                sx={{mt:2, mb:1.5}}
                                required
                                onChange={receivedData}
                                />
                                <TextField 
                                name='password'
                                margin='normal'
                                type='password'
                                fullWidth
                                label='Password'
                                sx={{mt:1.5, mb:1.5}}
                                required
                                onChange={receivedData}
                                />
                                <Button fullWidth type='submit' variant='contained' sx={{mt:1.5, mb:3}} >
                                  Iniciar Sesion
                                </Button>
                          </Box>
                    </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
    )
}