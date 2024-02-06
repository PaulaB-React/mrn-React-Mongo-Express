import { useEffect, useState } from "react";
import { fetchContest } from "../api-client";

//components
import Header from "./header";

export default function Contest({ initialContest }) {
	const [contest, setContest] = useState(initialContest );
	
	// useEffect(() => {
	// 	fetchContest(id).then(contest => {
	// 		setContest(contest)
	// 	});
	// }, [id]);
	return (
		<>
			<Header message={contest.contestName} />
			<div className="contest">
				<div className="title">Contest Description</div>
				<div className="description">{contest.description}</div>
			</div>
		</>

	);
}
