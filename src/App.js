import React, { useState } from 'react';
import './App.css';

const App = () => {
	const [ input, setInput ] = useState('');
	const [ items, setitems ] = useState([]);

	const listOfItems = () => {
		setitems((oldItem) => {
			return [ ...oldItem, input ];
		});
		setInput('');
	};

	const deleteItem = (index) => {
		setitems((oldItem) => {
			return oldItem.filter((arrEle, i) => {
				return i !== index;
			});
		});
	};

	return (
		<div className="main_div">
			<div className="center_div">
				<br />
				<h1>Todo list</h1>
				<br />
				<input
					onChange={(e) => setInput(e.target.value)}
					value={input}
					type="text"
					placeholder="Add an items"
				/>
				<button onClick={listOfItems}>+</button>
				<ol>
					{items.map((itemlist, index) => {
						return (
							<div className="todo_style" key={index}>
								<i className="fa fa-times" aria-hidden="true" onClick={() => deleteItem(index)} />
								<li>{itemlist}</li>
							</div>
						);
					})}
				</ol>
			</div>
		</div>
	);
};

export default App;
