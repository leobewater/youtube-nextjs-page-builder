'use client';

import { MdTextFields } from 'react-icons/md';
import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '../FormElements';

const type: ElementsType = 'TextField';

const extraAttributes = {
  label: 'Text field',
  helperText: 'Helper text',
  required: false,
  placeHolder: 'Value here...',
};

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: MdTextFields,
    label: 'Text Field',
  },
  designerComponent: DesignerComponent,
  formComponent: () => <div>Form Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
};

// extend FormElementInstance with extraAttributes
type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  // use CustomInstance instead
  const element = elementInstance as CustomInstance;

  return <div className="text-white">{element.extraAttributes?.label}</div>;
}
