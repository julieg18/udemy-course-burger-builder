import React from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 2,
        bacon: 2,
        cheese: 2,
        meat: 1,
      },
    };
  }

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
