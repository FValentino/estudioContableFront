import { MessageSquare } from "lucide-react";
import { Controller, type Control, type FieldError, type FieldValues, type Path } from "react-hook-form";

interface Props<T extends FieldValues = FieldValues> {
  name: Path<T>;
  control: Control<T>; 
  placeHolder: string;
  error?: FieldError;
  rows?: number; 
}

export function TextAreaForm<T extends FieldValues = FieldValues>({
  name,
  control,
  placeHolder,
  error,
  rows = 4, 
}: Props<T>) {

  return (
    <div className="w-[90%] flex flex-col mt-2 relative">
      <MessageSquare className="absolute left-3 top-5 -translate-y-1/2 h-5 w-5 text-white" />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            placeholder={placeHolder}
            id={name}
            rows={rows}
            {...field}
            className={`border rounded-lg px-2 py-1 pl-10 resize-none w-full ${error ? "border-red-500" : "border-gray-300"}`}
          />
        )}
      />
      {error && <p className="font-bold ms-4 text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
