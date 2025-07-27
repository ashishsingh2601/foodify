import { Button } from "@/components/ui/button";
import { FormDescription, FormItem, FormField } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";

const MenuSection = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Menu</h2>
        <FormDescription>
          Create your menu. Give each item a name and a price.
        </FormDescription>
      </div>

      <FormField
        control={control}
        name="menuItems"
        render={() => (
          <FormItem className="flex flex-col gap-3">
            {fields.map((field, index) => (
              <MenuItemInput
                key={field.id}
                index={index}
                removeMenuItem={() => remove(index)}
              />
            ))}
          </FormItem>
        )}
      />
      <Button
        type="button"
        onClick={() => append({ name: "", price: "" })}
      >Add Item</Button>
    </div>
  );
};

export default MenuSection;
