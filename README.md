# react-html5-form

React component that uses HTML5's form element validation and render props.

```javascript
import Form from 'react-html5-form';

class YourComponent extends Component {
  render() {
    return (
      <Form
        render={({isFormValid}) => (
          <input type="text" />
          <input type="button" disabled={!isFormValid}>
            Submit
          </input>
        )}
      />
    );
  }
}
```
