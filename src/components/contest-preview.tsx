import * as React from "react";

//components


const ContestPreview: React.FC<{ contest: object; onClick: any; }> =
({ contest, onClick }) => {
	const handleClick = (event) => {
		event.preventDefault();
		// Navigate to a new view and use a state element to make React re-render the app and render a new view
		onClick(contest.id);
	};
	return (

			<div className="contest-preview link" onClick={handleClick}>
				<div className="category">{contest.categoryName}</div>
				<div className="contest">{contest.contestName}</div>
			</div>

	)
}

export default ContestPreview;
