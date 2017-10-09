import React from 'react';
import Typed from 'typed.js';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class TypingName extends React.Component{
  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings: strings,
      //set to loop typing infinitely
      typeSpeed: 60,
      backSpeed: 60
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap">
        <h1>Typed.js</h1>
        <div className="type-wrap">
          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
        </div>
        <button onClick={() => this.typed.destroy()}>Destroy</button>
      </div>
    );
  }
}

ReactDOM.render(
  <TypingName
    strings={[
      '<strong>Ethan Wham</strong>'
    ]}
  />,
  document.getElementById('typeName')
);

export default TypingName;