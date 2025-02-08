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

interface SearchbarProps {
  onSearch: (term: string) => void;
}

function Searchbar({ onSearch }: SearchbarProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          Search: "",
        },
      });

      function onSubmit(values: z.infer<typeof formSchema>) {
        onSearch(values.Search);
      }

      function onError(errors: Record<string, any>) {
        const firstError = errors.Search?.message;
        if (firstError) {
          alert(firstError);
        }
      }

    return ( 
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit, onError)} 
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
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <button type="submit" className="hidden">Submit</button>
        </form>
      </Form>
    );
}

export default Searchbar;