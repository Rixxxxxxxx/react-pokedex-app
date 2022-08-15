import { Link, useParams } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Typography, CardActions, Box, Grid } from '@mui/material';
import { useContext, useEffect } from 'react';
import PokemonContext from './PokemonContext';

const PokeDetails = () => {

    const { getPokemon, pokemon } = useContext(PokemonContext);
    const params = useParams();
    const { id, name, height, sprites, types, weight, abilities, stats } = pokemon;

    useEffect(() => {
        getPokemon(params.pokeName)
    }, [])

    return (
        <Box sx={{ m: 5 }}>
            < Grid container spacing={2} >
                <Grid item xs={5}>
                    <Card>
                        <CardMedia
                            component="img"
                            image={sprites?.other.dream_world.front_default}
                            alt={name}
                            style={{
                                width: '350px',
                                height: '350px',
                            }}
                        />

                        <CardContent>
                            <Typography gutterBottom variant="small" component="div">
                                #{id}
                            </Typography>

                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>

                            {/* {types?.map((type) => {
                                <Typography gutterBottom variant="h5" component="div">
                                    {type}
                                </Typography>
                            })} */}


                            {/* {abilities.map((ability) => {
                                <Typography gutterBottom variant="h5" component="div">
                                    {ability?.name}
                                </Typography>
                            })} */}

                            <Typography variant="body2" color="text.secondary">
                                Height: {height},
                                Weight: {weight}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Link to="/">
                                <Button
                                    color="primary"
                                    size="small"
                                    variant="contained"
                                >
                                    Pokedex
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Base Stats
                            </Typography>

                            {/* {stats.map((stat) => {
                                <Typography variant="body2" color="text.secondary">
                                    {stat?.name}
                                </Typography>
                            })} */}
                        </CardContent>

                    </Card>
                </Grid>
            </Grid >
        </Box>
    )

}

export default PokeDetails
