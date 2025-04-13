export type FormField =
  | {
      type: "text" | "email" | "password";
      label: string;
      model: string;
      required: boolean;
      minLength?: number;
    }
  | {
      type: "select";
      label: string;
      model: string;
      options: string[];
      required: boolean;
    }
  | {
      type: "checkbox";
      label: string;
      model: string;
      required: boolean;
    };

export type FormSchema = {
  fields: FormField[];
};
