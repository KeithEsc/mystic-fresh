"use client"
import {
  useState,
  useEffect
} from "react"
import {
  toast,
  Toaster
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import {
  z
} from "zod"
import {
  cn
} from "@/lib/utils"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import {
  Textarea
} from "@/components/ui/textarea"
import {
  format
} from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import {
  Calendar
} from "@/components/ui/calendar"
import {
  Calendar as CalendarIcon, Check, X
} from "lucide-react"


// Replace with your Google App Script Web App URL
const GOOGLE_APP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwm8KOMlQ7LI_zyhiqJLO_Fk2Tu2DL8uBXVoUwQwb7HTsfU4Va7eysSXq0RAK-zVDnVSA/exec";

const formSchema = z.object({
  Name: z.string().min(1, "Name is required."),
  Email: z.string().email("Invalid email address."),
  Phone: z.string(),
  About: z.string(),
  Date: z.coerce.date()
});

export default function MyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "Date": new Date()
    },
  })

  useEffect(() => {
    // Reset submission state on form value changes to allow a new submission
    const subscription = form.watch(() => {
      setIsSubmitted(false);
      setIsError(false);
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  async function onSubmit(values: z.infer < typeof formSchema > ) {
    setIsSubmitted(false);
    setIsError(false);
    const loadingToast = toast.loading('Submitting form...');
    setIsSubmitting(true);
    
    const dateFormattedValues = {
      ...values,
      Date: format(values.Date, "MM/dd/yyyy")
    };

    try {
      await fetch(GOOGLE_APP_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // This is crucial for Google App Script to work without CORS errors
        cache: 'no-cache',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dateFormattedValues),
      });

      toast.dismiss(loadingToast);
      toast.success('Form submitted successfully!');
      form.reset();
      setIsSubmitted(true);

    } catch (error) {
      toast.dismiss(loadingToast);
      console.error("Form submission error", error);
      toast.error('Failed to submit the form. Please try again.');
      setIsError(true);

    } finally {
      setIsSubmitting(false);
    }
  }

  const renderButtonContent = () => {
    if (isSubmitting) {
      return "Submitting...";
    }
    if (isSubmitted) {
      return (
        <span className="flex items-center gap-2">
          Submitted! <Check className="h-4 w-4" />
        </span>
      );
    }
    if (isError) {
      return (
        <span className="flex items-center gap-2">
          Failed <X className="h-4 w-4" />
        </span>
      );
    }
    return "Submit";
  };

  const getButtonClass = () => {
    if (isSubmitting) {
      return "bg-[var(--color-dark-blue)] cursor-not-allowed";
    }
    if (isSubmitted) {
      return "bg-green-700";
    }
    if (isError) {
      return "bg-red-500";
    }
    return "bg-[var(--color-dark-blue)]";
  };


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
        
        <FormField
          control={form.control}
          name="Name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input 
                placeholder="Name"
className="bg-white"
                type="text"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
      control={form.control}
      name="Date"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Desired Booking Date</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
       
          <FormMessage />
        </FormItem>
      )}
    />
        
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input 
                placeholder="Email address"
                type="email"
className="bg-white"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
          <FormField
            control={form.control}
            name="Phone"
            render={({ field }) => (
              <FormItem className="flex flex-col">
              <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Phone Number" 
                    type="tel"
                    className="bg-white"
                    {...field} 
                  />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />
            
        <FormField
          control={form.control}
          name="About"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell us about your hair goals</FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  className="resize-none bg-white"
                  {...field}

                />
              </FormControl>
              <FormDescription>Tell us what style you’re looking for, any concerns, or special requests.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
      
        <Button 
          className={cn("w-full transition-colors", getButtonClass())} 
          type="submit"
          disabled={isSubmitting || isSubmitted}
        >
          {renderButtonContent()}
        </Button>
      </form>
      <Toaster />
    </Form>
  )
}
