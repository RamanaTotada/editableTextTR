import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {text: '', isButtonClick: false}

  onChangeEditValue = event => {
    this.setState({text: event.target.value})
  }

  changeButtonValue = () => {
    this.setState(prevState => ({isButtonClick: !prevState.isButtonClick}))
  }

  render() {
    const {text, isButtonClick} = this.state
    const buttonValue = isButtonClick ? 'Edit' : 'Save'
    return (
      <div className="main-container">
        <div className="editable-container">
          <h1>Editable Text Input</h1>
          <div className="button-container">
            {isButtonClick ? (
              <p className="input-value">{text}</p>
            ) : (
              <input
                type="text"
                onChange={this.onChangeEditValue}
                value={text}
                className="input-value"
              />
            )}

            <button
              type="button"
              className="button-style"
              onClick={this.changeButtonValue}
            >
              {buttonValue}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText
