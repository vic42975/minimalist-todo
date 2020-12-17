import React, { useState } from 'react';
import { Button, Grid, Typography, TextField } from '@material-ui/core';

import Task from './components/Task';

import styles from './App.module.css';

const MyApp = () => {
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState(['Sample task - Pet the cat - Double click to delete']);

	function inputChange(event) {
		setInput(event.target.value);
	}

	function addTask(event) {
		event.preventDefault();
		setInput('');
		if (input.trim() !== '') {
			setTodos((todos) => {
				return [...todos, input];
			});
		}
	}

	function deleteTask(id) {
		setTodos(todos.filter((todo) => todo !== todos[id]));
	}

	return (
		<Grid container direction="column" spacing={3} alignContent="center" justify="center">
			<Grid item sm={12}>
				<Typography variant="h2" colors="primary" display="block" align="center">
					Minimalistic #TODO
				</Typography>
			</Grid>

			<Grid item>
				<form>
					<TextField
						id="outlined-secondary"
						variant="outlined"
						label="Enter a Task"
						color="secondary"
						type="text"
						fullWidth
						value={input}
						onChange={inputChange}
						// onKeyPress={(event) => {
						// 	if (event.key === 'Enter') {
						// 		return addTask;
						// 	}
						// }}
						onSubmit={addTask}
					/>
					<Button fullWidth variant="outlined" color="primary" type="submit" onClick={addTask}>
						Add
					</Button>
				</form>
			</Grid>
			<Grid item>
				<ul>
					{todos.map((todo, id) => {
						return <Task key={id} id={id} todo={todo} deleteTask={deleteTask} />;
					})}
				</ul>
			</Grid>
		</Grid>
	);
};

export default MyApp;
