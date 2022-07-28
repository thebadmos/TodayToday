import React from "react";
import { Field } from "formik";

export default function Checkbox(props) {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <label>
          <input
            {...field}
            type="checkbox"
            name={field?.name}
            checked={field?.value?.includes(props.value)}
            onChange={() => {
              const set = new Set(field.value);
              console.log(field);
              if (set.has(props.value)) {
                set.delete(props.value);
              } else {
                set.add(props.value);
              }
              field.onChange(field.name)(Array.from(set));
              form.setFieldTouched(field.name, true);
            }}
            style={{
              width: 20,
              height: 20,
              marginRight: 5,
            }}
          />
          {props.title}
        </label>
      )}
    </Field>
  );
}
