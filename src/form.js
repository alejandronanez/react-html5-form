import * as React from 'react';
import * as cx from 'classnames';
import { FormHTMLAttributes } from 'react';

export class HTML5Form extends React.Component {
  constructor() {
    this.formElement = null;
    this.state = {
      isFormInvalid: true
    };
  }

  componentDidMount() {
    this.checkValidity();
  }

  checkValidity = () => {
    this.setState({ isFormInvalid: !this.formElement.checkValidity() });
  };

  render() {
    const { className, onSubmit, render, ...restProps } = this.props;
    const { isFormInvalid } = this.state;
    const FormClassName = cx('appointment-creator__form', className);

    return (
      <form
        {...restProps}
        onSubmit={onSubmit}
        className={FormClassName}
        ref={form => {
          this.formElement = form;
        }}
      >
        {this.props.render({
          isFormInvalid,
          checkValidity: this.checkValidity
        })}
      </form>
    );
  }
}

HTML5Form.defaultProps = {
  className: '',
  render(params) {},
  onSubmit() {}
};
