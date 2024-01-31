import { fetchContests } from "../api-client";
import ContestPreview from "./contest-preview";
import { useEffect, useState } from "react";




export default function ContestList({ initialContests }) {
	const [contests, setContests] = useState(initialContests);

	useEffect(() => {
		// fetchContests().then((contests) => { 
		// 		setContests(contests)
		// 	});
	}, []);

	return (
		<div className="contests-list">
			{contests.map((contest) => {
				return <ContestPreview key= { contest.id} contest={contest} />
			})}
		</div>
	)
}
