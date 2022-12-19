import { Input, Button, Flex } from "@mantine/core";

const SearchBar = ({ posts, setSearchResults }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleSearchChange = (event) => {
		if (!event.target.value) return setSearchResults(posts);

		const resultsArray = posts.filter(
			(post) =>
				post.tags.includes(event.target.value)
		);

		return setSearchResults(resultsArray);
	};
	return (
		<form onSubmit={handleSubmit}>
			<Flex justify="center" align="center" gap="xs" mt="sm">
				<Input
					label="Your favorite framework/library"
					placeholder="Pick one"
					onChange={handleSearchChange}
				/>
				<Button type="submit">OK</Button>
			</Flex>
		</form>
	);
};

export default SearchBar;
