import type { PageServerLoad } from './$types';
import type { Standings } from "../types/standings";
import { APIKEY, TEAMID, TOURNAMENTID } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
    // TODO: parametrize fetching last season
    const url = `https://sofascore.p.rapidapi.com/tournaments/get-standings?tournamentId=${TOURNAMENTID}&seasonId=65066&type=total`
    const urlNext = `https://sofascore.p.rapidapi.com/teams/get-next-matches?teamId=${TEAMID}&pageIndex=0`;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': APIKEY,
			'x-rapidapi-host': 'sofascore.p.rapidapi.com'
		}
	};

	try {
		const standings = await fetch(url, options);
        const nextMatch = await fetch(urlNext, options)

		const standingsResult: Standings = await standings.json();
        const nextMatchResult = await nextMatch.json()
		return { standingsResult, nextMatchResult};
	} catch (error) {
		console.error(error);
	}
};
