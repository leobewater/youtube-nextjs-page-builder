import { TextFieldFormElement } from './fields/TextField';

export type ElementsType = 'TextField';

export type SubmitFunction = (key: string, value: string) => void;

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FormElementInstance;

  designerBtnElement: {
    icon: React.ElementType;
    label: string;
  };

  designerComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>; // component showing on designer

  formComponent: React.FC<{
    elementInstance: FormElementInstance;
    submitValue?: SubmitFunction;
    isInvalid?: boolean;
    defaultValue?: string;
  }>; // element form component for form preview

  propertiesComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>; // properties form for element's sidebar

  // validate form field
  validate: (formElement: FormElementInstance, currentValue: string) => boolean;
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};

// use ElementsType as array key
type FormElementsType = {
  [key in ElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
};

// Setting all these up so we can do this with type hint
//FormElements['TextField'].designerBtnElement
