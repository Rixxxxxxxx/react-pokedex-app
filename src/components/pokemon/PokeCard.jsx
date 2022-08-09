import { Box, Chip, Card, CardMedia, CardContent, Typography } from '@mui/material'

const PokeCard = ({ id, name, image, type }) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={image}
                    alt="pokemon"
                />
                <Box>
                    <CardContent>
                        <Typography gutterBottom variant="small">
                            #{id}
                        </Typography>
                        <Typography gutterBottom variant="h5">
                            {name}
                        </Typography>

                        <Typography gutterBottom variant="span">
                            <Chip label={type} />
                        </Typography>

                    </CardContent>
                </Box>
            </Card>
        </>
    )

}


export default PokeCard