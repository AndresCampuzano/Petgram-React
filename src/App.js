import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyles } from './GlobalStyles';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<ListOfCategories />
			<ListOfPhotoCards />
		</>
	);
};

export default App;
