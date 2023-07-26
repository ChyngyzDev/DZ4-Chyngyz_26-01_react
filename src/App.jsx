import React from 'react';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      phoneNumber: '',
      email: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { userName, phoneNumber, email } = this.state;
    alert(`User Name: ${userName}\nPhone Number: ${phoneNumber}\nEmail: ${email}`);
  };

  render() {
    return (
      <div className='registration-cssave'>
        <form className='block' onSubmit={this.handleSubmit}>
        <div><h3 class="text1">Форма регистрации</h3></div>
          <div className='block2'>
            <label htmlFor="userName">ФИО: </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
            />
          </div>
          <div className='block2'>
            <label htmlFor="phoneNumber">Номер телефона: </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </div>
          <div className='block2'>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <button className='btn' type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
