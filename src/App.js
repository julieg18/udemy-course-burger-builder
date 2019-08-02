import React from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './containers/Layout/Layout';
import './App.module.css';

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
