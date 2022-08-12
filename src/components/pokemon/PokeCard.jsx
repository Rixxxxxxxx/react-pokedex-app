import { useContext, useEffect, useState } from 'react'
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
// import PokemonContext from './PokemonContext'

const PokeCard = ({ image, id, name }) => {

    // const { pokemons } = useContext(PokemonContext)

    return (
        <>

            <Card sx={{ maxWidth: 345 }}>

                <Link to={`/pokemon/${name}`}>
                    <CardMedia
                        component="img"
                        image={image}
                        alt="pokemon"
                        style={{
                            width: '130px',
                            height: '130px',
                        }}
                    />
                </Link>

                <Box>
                    <CardContent>
                        <Typography gutterBottom variant="small">
                            #{id}
                        </Typography>
                        <Typography gutterBottom variant="h5">
                            {name}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>

        </>
    )

}


export default PokeCard