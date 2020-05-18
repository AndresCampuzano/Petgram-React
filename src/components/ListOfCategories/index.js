import React, { useState, useEffect } from 'react';

import { Category } from '../Category';
import { List, Item } from './styles';
// import { categories as mockCategories } from '../../../api/db.json';

function useCategoriesData() {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		window
			.fetch('https://clongram-api-j2hwstk1d.now.sh/categories')
			.then((res) => res.json())
			.then((response) => {
				setCategories(response);
				setLoading(false);
			});
	}, []);
	return { categories, loading };
}

export const ListOfCategories = () => {
	const { categories, loading } = useCategoriesData(); //data from API
	const [showFixed, setShowFixed] = useState(false);

	useEffect(() => {
		const onScroll = (e) => {
			const newShowFixed = window.scrollY > 200;
			showFixed != newShowFixed && setShowFixed(newShowFixed);
		};
		document.addEventListener('scroll', onScroll);

		return () => document.removeEventListener('scroll', onscroll);
	}, [showFixed]);

	const renderList = (fixed) => (
		<List fixed={fixed}>
			{categories.map((data) => (
				<Item key={data.id}>
					<Category {...data} />
				</Item>
			))}
		</List>
	);

	return (
		<>
			{renderList()}
			{showFixed && renderList(true)}
		</>
	);
};
