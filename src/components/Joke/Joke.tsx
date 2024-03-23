import { JokeType } from "../../types/JokeType";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Joke({ id, text }: JokeType) {
	return (
		<>
			<Card sx={{ maxWidth: "350px", minWidth: "270px" }}>
				<CardContent>
					<div>
						<span>{id}</span>
						<p>{text}</p>
					</div>
				</CardContent>
			</Card>
		</>
	);
}

export default Joke;
