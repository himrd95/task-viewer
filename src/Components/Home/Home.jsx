import React from 'react';
import Creater from '../TaskCreater/Creater';
import './Home.css';
import Preview from '../Preview/Preview';
import { useState } from 'react';
import { getItem, setItem } from '../../utils/helper';
import { TASK } from '../../utils/constants';

const initTasks = getItem(TASK) || [];
const Home = () => {
	const [tasks, setTasks] = useState(initTasks);

	const updateTasks = (payload) => {
		const data = [...tasks, payload];
		setItem(TASK, data);
		setTasks(data);
	};
	return (
		<>
			<h1>Task Viewer</h1>
			<div className='home'>
				<div className='creater'>
					<Creater updateTasks={updateTasks} tasks={tasks} />
				</div>
				<div className='preview'>
					<Preview tasks={tasks} />
				</div>
			</div>
		</>
	);
};

export default Home;
