'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import { sendMail } from "@/lib/actions/mail.actions"
import { useToast } from "../ui/use-toast"
import { ToastAction } from "../ui/toast"

const formSchema = z.object({
  name: z.string().min(2, { message: 'Votre nom doit contenir un minimun de 2 caractères.' }).max(50, { message: 'Votre nom doit contenir un maximun de 50 caractères.' }),
  email: z.string().min(2, { message: 'Votre email doit contenir un minimun de 2 caractères.' }).max(50, { message: 'Votre email doit contenir un maximun de 50 caractères.' }),
  subject: z.string().min(2, { message: 'Votre sujet doit contenir un minimun de 2 caractères.' }).max(100, { message: 'Votre sujet doit contenir un maximun de 100 caractères.' }),
  message: z.string().min(2, { message: 'Votre message doit contenir un minimun de 2 caractères.' }).max(1000, { message: 'Votre message doit contenir un maximun de 1000 caractères.' }),
})

const FormContact = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await sendMail(values);
      form.reset();
      toast({
        variant: 'success',
        title: "Votre message a été envoyé avec succès !",
      })
    } catch (error) {
      toast({
        variant: 'destructive',
        title: "Erreur lors de l'envoie du message !",
        action: <ToastAction altText="Try again">Réessayer</ToastAction>,
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="font-montserrat space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-lg">Votre nom</FormLabel>
              <FormControl>
                <Input type="text" placeholder="John Doe" {...field} className="bg-transparent border border-black rounded-none h-16 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:font-light placeholder:text-base text-base p-4" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-lg">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="johndoe@company.com" {...field} className="bg-transparent border border-black rounded-none h-16 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:font-light placeholder:text-base text-base p-4" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-lg">Sujet</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Sujet du message" {...field} className="bg-transparent border border-black rounded-none h-16 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:font-light placeholder:text-base text-base p-4" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-lg">Comment puis-je vous aider ?</FormLabel>
              <FormControl>
                <Textarea placeholder="Ecrivez votre message ici..." {...field} className="bg-transparent border border-black rounded-none min-h-28 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:font-light placeholder:text-base text-base p-4" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex lg:justify-end">
          <Button type="submit" className="font-bold bg-black rounded-none w-full h-12 hover:bg-zinc-900 duration-300 lg:w-fit px-10">Valider</Button>
        </div>
      </form>
    </Form>
  )
}

export default FormContact