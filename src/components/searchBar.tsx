"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import Input from "@/components/ui/InputField"

const formSchema = z.object({
  Search: z.string().regex(/^[a-zA-Z0-9 ]*$/, { message: "No special characters allowed." }),
});



function Searchbar() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Search: "",
    },
  });

 

  return (
    <Form {...form}>
      <form
       
        className="w-full max-w-md"
      >
        <FormField
          control={form.control}
          name="Search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Search products..."
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />
        <button type="submit" className="hidden">Submit</button>
      </form>
    </Form>
  );
}

export default Searchbar;
