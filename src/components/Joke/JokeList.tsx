import Joke from "./Joke";
import { data } from "../../data/data";
import { Box, Stack } from "@mui/material";

function JokeList() {
	return (
		<>
			{" "}
			<Stack
				direction="row"
				spacing={{ xs: 1, sm: 2 }}
				sx={{ maxWidth: "800px", margin: "0 auto" }}
				useFlexGap
				flexWrap={"wrap"}
			>
				{data.map((joke) => (
					<Joke key={joke.id} id={joke.id} text={joke.text} />
				))}
			</Stack>
		</>
	);
}

export default JokeList;
