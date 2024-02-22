import { HTMLInputTypeAttribute } from 'react';
export interface InputBox {
    type: HTMLInputTypeAttribute,
    label: String,
    min?: HTMLInputTypeAttribute,
    // onSubmit: (value: string) => void;
}