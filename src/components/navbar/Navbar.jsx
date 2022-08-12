import { AppBar, Toolbar, IconButton, Typography } from "@mui/material"
import CatchingPokemon from '@mui/icons-material/CatchingPokemon';


const Navbar = () => {

    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton size="large" edge='start' color='inherit' aria-label='logo'>
                        <CatchingPokemon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' }
                        }}
                    >
                        React Pokedex
                    </Typography>



                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar