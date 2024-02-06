import { useEffect, useState } from "react";

import { fetchContestList } from "../api-client";

import ContestPreview from "./contest-preview";
import Header from "./header";


export default function ContestList({ initialContests, onContestClick }) {
	const [contests, setContests] = useState(initialContests);

	useEffect(() => {
		// fetchContests().then((contests) => {
		// 		setContests(contests)
		// 	});
	}, []);

	return (
		<>
			<Header message="Naming Contest" />

			<div className="contests-list">
				{contests.map((contest) => {
					return <ContestPreview key={contest.id} contest={contest} onClick={ onContestClick} />
				})}
			</div>
		</>

	)
}
