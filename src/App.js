import React from "react";
function App() {
	const title = "Blog Post";
	const body = "This is my blog post";
	const comments = [
		{ id: 1, text: "Comment One" },
		{ id: 2, text: "Comment two" },
		{ id: 3, text: "Comment three" },
	];
	return (
		<div className="conteiner">
			<h1>{title}</h1>
			<p>{body}</p>
			<div className="comments">
				<h3>Comments ({comments.length})</h3>
				<ul>
					{comments.map((comment, index) => (
						<li key={index}>{comment.text}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
export default App;
