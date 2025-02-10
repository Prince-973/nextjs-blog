import { Grid2 } from "@mui/material";
import Card1 from "./card";

// export default Cards;

function CardGrid(props) {
  return (
    <Grid2
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {props.cardData &&
        props.cardData.map((card) => {
          return (
            <Grid2 item key={card.id}>
              <Card1
                id={card.id}
                title={card.title}
                name={card.name}
                description={card.description}
              />
            </Grid2>
          );
        })}
    </Grid2>
  );
}

export default CardGrid;
