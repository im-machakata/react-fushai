import React, { HTMLInputTypeAttribute } from 'react';

interface InputBoxProps {
    type: HTMLInputTypeAttribute,
    label: String,
    // onSubmit: (value: string) => void;
}

interface InputBoxState {
    value: string;
}

class InputBox extends React.Component<InputBoxProps, InputBoxState> {
    constructor(props: InputBoxProps) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // this.props.onSubmit(this.state.value);
    }

    render() {
        return (
            <section contentEditable="true" onChange={this.handleChange}>
                <div className="input-label">{this.props.label}</div>
                <input type={this.props.type} className='input-item' />
            </section>
        );
    }
}

export default InputBox;
