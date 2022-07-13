import React from 'react'
import {Box, AppBar, Toolbar, Container, Grid,Stack, Button, Typography} from '@mui/material'

export const Navbar: React.FC<{}> = () => {
    return (
        <Box sx={{ flexGrow:1 }}>
            <AppBar position='fixed'>
                <Toolbar>
                    <Container maxWidth='xl'>
                        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                            <Grid item>
                                <Typography>
                                    KRXNX
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction='row' spacing={2}>
                                    <Button variant='contained' >
                                        login
                                    </Button>
                                    <Button variant='outlined' >
                                        register
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}