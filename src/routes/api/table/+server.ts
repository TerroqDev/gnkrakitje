import { json } from "@sveltejs/kit";
import { APIKEY, TEAMID, TOURNAMENTID } from "$env/static/private";
import type { Standings } from "../../../types/standings";

export async function GET(event) {
	const url = `https://sofascore.p.rapidapi.com/tournaments/get-standings?tournamentId=${TOURNAMENTID}&seasonId=65066&type=total`;

	const options = {
		method: "GET",
		headers: {
			"x-rapidapi-key": APIKEY,
			"x-rapidapi-host": "sofascore.p.rapidapi.com"
		}
	};
	try {
		const res = await fetch(url, options);
		const leagueTableData: Standings = await res.json();
		return json(leagueTableData);
	} catch (err) {
		console.log(err);
	}
}
