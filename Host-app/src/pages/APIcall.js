import React from 'react';
import { useGetPostsQuery } from '../../services/ApiSlice';

const APIcall = () => {
	const { data, isLoading } = useGetPostsQuery;
	console.log(data, isLoading);
	return (
		<div>
			<h1>Testing</h1>
			{isLoading && <p>Loading</p>}
			{data &&
				data.map((item) => {
					return <li key={item.id}>{item.title}</li>;
				})}
		</div>
	);
};

export default APIcall;
