import './App.css';

import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
		<div>
			<Header title="red0ne" btnText="Sign In"/>
			<Main />
		</div>
  );
}

export default App;
