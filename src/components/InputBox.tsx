import React, { HTMLInputTypeAttribute } from 'react';

interface InputBoxProps {
    type: HTMLInputTypeAttribute,
    label: String,
    min?: HTMLInputTypeAttribute,
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
            <section className="flex justify-start flex-col mb-3 input-box" onChange={this.handleChange}>
                <div className="input-label">{this.props.label}</div>
                <input type={this.props.type} min={this.props.min == null ? 1 : this.props.min} className="input-item" />
            </section>
        );
    }
}

export default InputBox;
