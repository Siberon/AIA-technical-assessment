import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import { Table, Pagination  } from "@mantine/core";

import ListPage from "./ListPage";

const App = () => {
	const [posts, setPosts] = useState([{}]);
	const [searchResults, setSearchResults] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(1);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = searchResults.slice(indexOfFirstPost, indexOfLastPost);

	const url = "http://localhost:5000/api";
	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				setPosts(response.data);
				return response.data;
			})
			.then((data) => {
				setSearchResults(data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<SearchBar posts={posts} setSearchResults={setSearchResults} />
			
			<Table striped mt={35}>
				<thead>
					<tr>
						<th style={{ minWidth: "20vw", maxWidth: "20vw", padding: "0px" }}>
							Title
						</th>
						<th style={{ minWidth: "30vw", maxWidth: "30vw", padding: "0px" }}>
							Image
						</th>
						<th style={{ minWidth: "20vw", maxWidth: "20vw", padding: "0px" }}>
							Date Taken
						</th>
						<th style={{ minWidth: "20vw", maxWidth: "20vw", padding: "0px" }}>
							Author
						</th>
					</tr>
				</thead>
			</Table>
			<ListPage searchResults={currentPosts} />
			<Pagination page={currentPage} onChange={setCurrentPage} total={(searchResults.length / postsPerPage)} />
		</>
	);
};

export default App;
