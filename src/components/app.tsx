import Header from "./header";
import ContestList from "./contest-list";

const App = ({ initialData }) => {
	return (
		<div className="container" title="Hello header">
			<Header message="Naming Contests" />

			<ContestList initialContests= { initialData.contests } />

		</div>
	);
};

export default App;
