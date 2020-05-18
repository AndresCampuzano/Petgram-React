import React, { useState, useEffect } from 'react';

import { Category } from '../Category';
import { List, Item } from './styles';
// import { categories as mockCategories } from '../../../api/db.json';

export const ListOfCategories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		window
			.fetch('https://clongram-api-j2hwstk1d.now.sh/categories')
			.then((res) => res.json())
			.then((response) => {
				setCategories(response);
			});
	}, []);
	return (
		<List>
			{categories.map((item) => (
				<Item key={item.id}>
					<Category {...item} />
				</Item>
			))}
		</List>
	);
};
