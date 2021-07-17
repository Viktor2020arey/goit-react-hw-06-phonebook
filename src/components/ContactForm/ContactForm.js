import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Jason Statham"
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="123-45-67"
          />
        </label>
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
