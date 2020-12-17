import React from 'react';
import { Typography } from '@material-ui/core';

const Task = ({ id, todo, deleteTask }) => {
	return (
		<div
			onDoubleClick={() => {
				deleteTask(id);
			}}
		>
			<Typography variant="body1" primary="primary" display="block">
				Task: {todo}
			</Typography>
		</div>
	);
};

export default Task;
