'use client';

import { MdTextFields } from 'react-icons/md';
import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '../FormElements';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { z } from 'zod';

const type: ElementsType = 'TextField';

const extraAttributes = {
  label: 'Text field',
  helperText: 'Helper text',
  required: false,
  placeHolder: 'Value here...',
};

const propertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
});

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
  propertiesComponent: PropertiesComponent,
};

// extend FormElementInstance with extraAttributes
type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function PropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { label, required, placeHolder, helperText } = element.extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full">
      Form Properties for {label}
    </div>
  );
}

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  // use CustomInstance instead
  const element = elementInstance as CustomInstance;
  const { label, required, placeHolder, helperText } = element.extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Input readOnly disabled placeholder={placeHolder} />
      {helperText && (
        <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>
      )}
    </div>
  );
}
