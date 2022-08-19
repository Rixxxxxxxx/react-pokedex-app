import { Link, useParams } from 'react-router-dom';
import {
    Button,
    Container,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Box,
    Grid,
    Chip,
    Divider,
    LinearProgress,
    Skeleton
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import PokemonContext from './PokemonContext';

const PokeDetails = () => {

    const { getPokemon, pokemon, skeletonloader } = useContext(PokemonContext);
    const params = useParams();
    const { id, name, height, sprites, types, weight, abilities, stats, base_experience } = pokemon;


    console.log(pokemon)

    useEffect(() => {
        getPokemon(params.pokeName)
    }, [])

    return (
        <Box sx={{ my: 5 }}>
            <Container>
                <Grid container alignItems={'stretch'} spacing={5}>

                    <Grid item xs={12} sm={12} lg={6} xl={6}>

                        <Card>
                            {skeletonloader ?
                                (<CardMedia
                                    component="img"
                                    image={sprites?.other.dream_world.front_default}
                                    alt={name}
                                    title={name}
                                    style={{
                                        alignItems: 'center',
                                        width: '350px',
                                    }}
                                />)
                                :
                                (<Skeleton variant="rectangular" height={350} animation='wave' />)
                            }

                            <CardContent>

                                <Typography gutterBottom variant="small" component="div">
                                    {skeletonloader ? (`#${id}`) : (<Skeleton variant="text" animation='wave' />)}
                                </Typography>


                                <Typography gutterBottom variant="h3" component="div">
                                    {skeletonloader ? (name) : (<Skeleton variant="text" animation='wave' />)}
                                </Typography>

                                {skeletonloader ?
                                    <Box>
                                        {types?.map(({ type }, index) => {
                                            return (
                                                <Typography gutterBottom variant="span">
                                                    <Chip label={type.name} key={index}></Chip>
                                                </Typography>
                                            )
                                        })}
                                    </Box>
                                    :
                                    (<Skeleton variant="text" animation='wave' />)
                                }


                                {/* <Typography gutterBottom variant="h3" component="div">
                                    {description}
                                </Typography> */}

                            </CardContent>

                            <CardActions>
                                <Link to="/" underline="none">
                                    <Button
                                        color="primary"
                                        variant="contained"
                                    >
                                        Pokedex
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={12} lg={6} xl={6}>
                        <Card>
                            <CardContent>

                                <Typography gutterBottom variant="h5" component="div">
                                    Pokemon Info
                                </Typography>

                                <Divider />

                                <Typography gutterBottom variant="h5" component="div">
                                    Basic Info
                                </Typography>

                                <Grid container spacing={2}>
                                    {abilities?.map(({ ability }, index) => {
                                        return (
                                            <Grid item xs={12} sm={12} md={6} key={index}>
                                                <Typography gutterBottom variant="h5" component="span" >
                                                    {skeletonloader ? (ability.name) : (<Skeleton variant="text" animation='wave' />)}
                                                </Typography>
                                            </Grid>
                                        )
                                    })}
                                </Grid>

                                {skeletonloader ?
                                    (
                                        <Typography variant="span" color="text.secondary">
                                            Height: {height},
                                            Weight: {weight},
                                            Base Experience : {base_experience}
                                        </Typography>
                                    )
                                    :
                                    (<Skeleton variant="text" animation='wave' />)
                                }

                                <Divider />

                                <Typography gutterBottom variant="h5" component="div">
                                    Base Stats
                                </Typography>

                                {skeletonloader ?
                                    <Box>
                                        {stats?.map(({ stat, base_stat }, index) => {
                                            return (
                                                <Typography variant="body2" color="text.secondary" key={index}>
                                                    {stat.name}:{base_stat}
                                                    <Box sx={{ flexGrow: 1 }}>
                                                        <br />
                                                        <LinearProgress variant="determinate" value={base_stat} />
                                                    </Box>
                                                </Typography>
                                            )
                                        })}
                                    </Box>

                                    :

                                    (<Skeleton variant="text" animation='wave' />)
                                }
                            </CardContent>

                        </Card>
                    </Grid>
                </Grid >
            </Container>
        </Box >
    )

}

export default PokeDetails
