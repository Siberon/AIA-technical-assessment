import React from "react";
import { Table, Image } from "@mantine/core";

const Post = ({ post }) => {
	return (
		<Table striped highlightOnHover withColumnBorders>
			<tbody>
				<tr key={post.author_id}>
					<td
						style={{
							minWidth: "20vw",
							maxWidth: "20vw",
							wordWrap: "break-word",
						}}
					>
						{post.title}
					</td>
					<td
						style={{
							minWidth: "30vw",
							maxWidth: "30vw",
							wordWrap: "break-word",
						}}
					>
						<Image src={post.media.m} alt={post.title} />
					</td>
					<td
						style={{
							minWidth: "20vw",
							maxWidth: "20vw",
							wordWrap: "break-word",
						}}
					>
						{post.date_taken}
					</td>
					<td
						style={{
							minWidth: "20vw",
							maxWidth: "20vw",
							wordWrap: "break-word",
						}}
					>
						{post.author}
					</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default Post;
