import Grid from "@mui/material/Grid";
import Card1 from "./card";

// export default Cards;

function CardGrid(props) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {props.cardData.map((card) => {
        return (
          <Grid item key={card.id}>
            <Card1
              id={card.id}
              title={card.title}
              name={card.name}
              description={card.description}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CardGrid;
