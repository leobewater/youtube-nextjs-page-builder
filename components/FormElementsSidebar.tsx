import SidebarBtnElement from './SidebarBtnElement';
import { FormElements } from './FormElements';
import { Separator } from './ui/separator';

const FormElementsSidebar = () => {
  const style =
    'text-sm text-muted-foreground col-span-1 md:col-span-2 my-2 place-self-start';
  return (
    <div>
      <p className="text-sm text-foreground/70">Drag and drop elements</p>
      <Separator className="my-2" />
      <div className="grid grid-cols-1 md:grid-col2 space-y-4 gap-2 place-items-center">
        <p className={style}>Layout Elements</p>
        <SidebarBtnElement formElement={FormElements.TitleField} />
        <SidebarBtnElement formElement={FormElements.SubtitleField} />
        <SidebarBtnElement formElement={FormElements.ParagraphField} />
        <SidebarBtnElement formElement={FormElements.SeparatorField} />
        <SidebarBtnElement formElement={FormElements.SpacerField} />

        <p className={style}>Form Elements</p>
        <SidebarBtnElement formElement={FormElements.TextField} />
        <SidebarBtnElement formElement={FormElements.NumberField} />
        <SidebarBtnElement formElement={FormElements.TextareaField} />
        <SidebarBtnElement formElement={FormElements.DateField} />
        <SidebarBtnElement formElement={FormElements.SelectField} />
        <SidebarBtnElement formElement={FormElements.CheckboxField} />
      </div>
    </div>
  );
};

export default FormElementsSidebar;
