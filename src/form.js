import * as React from 'react';
import * as cx from 'classnames';
import { FormHTMLAttributes } from 'react';

// export interface FormProps {
//   className?: string;
//   render: Function;
//   onSubmit: Function;
// }

// export interface RenderProps {
//   isFormInvalid: boolean;
//   checkValidity: any;
// }

// interface State {
//   isFormInvalid: boolean;
// }

// type Props = FormProps & FormHTMLAttributes<HTMLFormElement>;

export class HTML5Form extends React.Component {
  state = {
    isFormInvalid: true
  };

  formElement: any = null;

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
  render(params: RenderProps) {},
  onSubmit() {}
};
