import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import SprkDatePickerInput from './SprkDatePickerInput/SprkDatePickerInput';
import SprkSelectionInput from './SprkSelectionInput/SprkSelectionInput';
import SprkRevealInput from './SprkRevealInput/SprkRevealInput';
import SprkTextInput from './SprkTextInput/SprkTextInput';

export default {
  title: 'Base|Inputs',
  decorators: [withKnobs],
  component: SprkTextInput,
  parameters: {
    jest: [
      'SprkErrorContainer',
      'SprkInputIconCheck',
    ]
  },
};

export const textInput = () => (
  <SprkTextInput
    label={text('label', 'Text Input Label')}
    name="text-input-label"
    valid={boolean('valid', true)}
    disabled={boolean('disabled', false)}
    errorMessage="There is an error on this field."
  />
);

textInput.story = {
  name: 'Text Input',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const hugeTextInput = () => (
  <SprkTextInput
    type="hugeTextInput"
    label={text('label', 'Text Input Label')}
    name="text-input-label"
    valid={boolean('valid', true)}
    disabled={boolean('disabled', false)}
    placeholder="Huge Text Placeholder"
    errorMessage="There is an error on this field."
  />
);

hugeTextInput.story = {
  name: 'Huge Text Input',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const checkboxes = () => (
  <SprkSelectionInput
    groupLabel="Checkbox Input"
    choices={[
      {
        label: 'Checkbox Item 1',
        name: 'check[]',
        value: 'item-1',
      },
      {
        label: 'Checkbox Item 2',
        name: 'check[]',
        value: 'item-2',
      },
      {
        label: 'Checkbox Item 3',
        name: 'check[]',
        value: 'item-2',
      },
    ]}
    variant="checkbox"
  />
);

checkboxes.story = {
  name: 'Checkboxes',
  parameters: {
    jest: [
      'SprkSelectionInput',
    ]
  },
};

export const radioButtons = () => (
  <SprkSelectionInput
    groupLabel="Radio Group Label"
    choices={[
      {
        label: 'Radio Item 1',
        name: 'radio[]',
        value: 'item-1',
      },
      {
        label: 'Radio Item 2',
        name: 'radio[]',
        value: 'item-2',
      },
      {
        label: 'Radio Item 3',
        name: 'radio[]',
        value: 'item-2',
      },
    ]}
    variant="radio"
  />
);

radioButtons.story = {
  name: 'Radio Buttons',
  parameters: {
    jest: [
      'SprkSelectionInput',
    ]
  },
};

export const selectBox = () => (
  <SprkSelectionInput
    choices={[
      {
        label: 'Option 1',
        value: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'option-2',
      },
      {
        label: 'Option 3',
        value: 'option-3',
      },
      {
        label: 'Grouped Options',
        options: [
          {
            label: 'Grouped Option 1',
            value: 'grouped-option-1',
          },
          {
            label: 'Grouped Option 2',
            value: 'grouped-option-2',
          },
          {
            label: 'Grouped Option 3',
            value: 'grouped-option-3',
          },
        ],
      },
    ]}
    name="name"
    variant="select"
    label="Select Box Label"
  />
);

select.story = {
  name: 'Select',
  parameters: {
    jest: [
      'SprkSelectionInput',
    ]
  },
};

export const hugeSelect = () => (
  <SprkSelectionInput
    label="Select Box Label"
    choices={[
      {
        label: 'Option 1',
        value: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'option-2',
      },
      {
        label: 'Option 3',
        value: 'option-3',
      },
      {
        label: 'Grouped Options',
        options: [
          {
            label: 'Grouped Option 1',
            value: 'grouped-option-1',
          },
          {
            label: 'Grouped Option 2',
            value: 'grouped-option-2',
          },
          {
            label: 'Grouped Option 3',
            value: 'grouped-option-3',
          },
        ],
      },
    ]}
    variant="hugeSelect"
    name="select"
    valid
    erorMessage="There is an error in the field."
    defaultValue=""
  />
);

hugeSelect.story = {
  name: 'Huge Select',
  parameters: {
    jest: [
      'SprkSelectionInput',
    ]
  },
};

export const textarea = () => (
  <SprkTextInput label="Description" name="description" type="textarea" />
);

textarea.story = {
  name: 'Textarea',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const ssnInput = () => (
  <SprkRevealInput
    label="Social Security Number"
    toggleLabel="Show SSN"
    name="ssn"
  />
);

ssnInput.story = {
  name: 'SSN Input',
  parameters: {
    jest: [
      'SprkRevealInput',
    ]
  },
};

export const searchInput = () => (
  <SprkTextInput label="Search" name="Search" placeholder="Search" />
);

searchInput.story = {
  name: 'Search Input',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  }
};

export const inlineSearchInput = () => (
  <SprkTextInput
    leadingIcon="search"
    hiddenLabel
    name="InlineSearch"
    placeholder="Search"
  />
);

inlineSearchInput.story = {
  name: 'Inline Search Input',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const monetaryInput = () => (
  <SprkTextInput label="Payment" textIcon name="monetary" placeholder="0.00" />
);

monetaryInput.story = {
  name: 'Monetary Input',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const percentageInput = () => (
  <SprkTextInput
    label="Percentage"
    iconRight
    leadingIcon="percent"
    narrowWidth
    name="percentage"
    type="tel"
  />
);

export const passwordInput = () => (
  <SprkRevealInput
    label="Password"
    toggleLabel="Show Password"
    name="password-1"
  />
);

passwordInput.story = {
  name: 'Password Input',
  parameters: {
    jest: [
      'SprkRevealInput',
    ]
  },
};

export const helperText = () => (
  <SprkTextInput
    label="Text Input"
    name="helper-text-example"
    helperText="This is my helper text."
  />
);

helperText.story = {
  name: 'Helper Text',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const phoneNumberInput = () => (
  <SprkTextInput
    label="Phone Number"
    name="phone"
    placeholder="(000) 000-0000"
    errorMessage="Incorrect phone number."
  />
);

phoneNumberInput.story = {
  name: 'Phone Number Input',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const dateInput = () => (
  <SprkTextInput
    label="Date"
    name="date"
    placeholder="01/01/2019"
    errorMessage="Incorrect date."
  />
);

dateInput.story = {
  name: 'Date Input',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const datePicker = () => (
  <SprkDatePickerInput
    name="date"
    placeholder={text('placeholder', '01/01/2019')}
    errorMessage="Incorrect date."
    label={text('label', 'Date')}
    valid={boolean('valid', true)}
    disabled={boolean('disabled', false)}
  />
);

datePicker.story = {
  name: 'Date Picker',
  parameters: {
    jest: [
      'SprkDatePickerInput',
    ]
  },
};