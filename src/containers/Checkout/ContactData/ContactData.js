import React from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';

class ContactData extends React.Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  };

  render() {
    return (
      <div className={styles.ContactData}>
        <h4>Enter Your Contact Data</h4>
        <form>
          <div className={styles.Input}>
            <p>Your Name:</p>
            <input type="text" name="" placeholder="Peter" />
          </div>
          <div className={styles.Input}>
            <p>Your Email:</p>
            <input type="email" name="email" placeholder="peter1@gmail.com" />
          </div>
          <div className={styles.Input}>
            <p>Your Address:</p>
            <input
              type="text"
              name="street"
              placeholder="8335 James Ave. Opp, AL"
            />
          </div>
          <div className={styles.Input}>
            <p>Your Postal Code:</p>
            <input type="text" name="postal" placeholder="01841" />
          </div>
          <Button btnType="Success" className={styles.uppercase}>
            Order
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
