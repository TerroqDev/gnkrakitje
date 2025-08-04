// import type { PageServerLoad } from './$types';
// import type { Standings } from "../types/standings";
// import { APIKEY, TEAMID, TOURNAMENTID } from '$env/static/private';

// export const load: PageServerLoad = async ({ params }) => {
//     // TODO: parametrize fetching last season
//     const url = `https://sofascore.p.rapidapi.com/tournaments/get-standings?tournamentId=${TOURNAMENTID}&seasonId=65066&type=total`
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'x-rapidapi-key': APIKEY,
// 			'x-rapidapi-host': 'sofascore.p.rapidapi.com'
// 		}
// 	};

// 	try {
//         const standings = await fetch(url, options)

// 		const standingsResult: Standings = await standings.json();
// 		return standingsResult
// 	} catch (error) {
// 		console.error(error);
// 	}
// };
