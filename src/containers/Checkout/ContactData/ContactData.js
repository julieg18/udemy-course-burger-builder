import React from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import { updateObject, checkValidity } from '../../../shared/utility';
import { purchaseBurger, initIngredients } from '../../../store/actions/index';

class ContactData extends React.Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Peter Smith',
        },
        label: 'Your Name:',
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: '35 Till Street',
        },
        label: 'Your Street:',
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: '20693',
        },

        label: 'Your Postal Code:',
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'United States Of America',
        },
        label: 'Your Country:',
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'peter01@gmail.com',
        },
        label: 'Your Email:',
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ],
        },
        label: 'Your Delivery Methods:',
        value: 'fastest',
        validation: {},
        valid: true,
      },
    },
    formIsValid: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const { ingredients, totalPrice, userId } = this.props;
    const order = {
      ingredients,
      price: totalPrice,
      orderData: formData,
      userId,
    };
    this.props.onOrderBurger(order, this.props.idToken);
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(
      this.state.orderForm[inputIdentifier],
      {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.orderForm[inputIdentifier].validation,
        ),
        touched: true,
      },
    );
    const updatedOrderForm = updateObject(this.state.orderForm, {
      [inputIdentifier]: updatedFormElement,
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      orderForm: updatedOrderForm,
      formIsValid,
    });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => {
          return (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              label={formElement.config.label}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={(event) =>
                this.inputChangedHandler(event, formElement.id)
              }
            />
          );
        })}
        <Button
          btnType="Success"
          className={styles.uppercase}
          disabled={!this.state.formIsValid}
          clicked={this.props.onInitIngredients}
        >
          Order
        </Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    console.log(this.props.onInitIngredients);
    console.log(this.props.onOrderBurger);
    return (
      <div className={styles.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { ingredients, totalPrice } = state.burgerBuilder;
  const { idToken, userId } = state.auth;
  return {
    ingredients,
    totalPrice,
    loading: state.order.loading,
    idToken,
    userId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onOrderBurger: (orderData, idToken) =>
      dispatch(purchaseBurger(orderData, idToken)),
    onInitIngredients: () => dispatch(initIngredients()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withErrorHandler(ContactData, axios));
