import { Chip, Card, CardMedia, CardContent, Typography } from '@mui/material'

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

                <div>
                    <CardContent>
                        <Typography gutterBottom variant="small" component="div">
                            0#{id}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Chip label={type} />
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </>
    )

}

export default PokeCard