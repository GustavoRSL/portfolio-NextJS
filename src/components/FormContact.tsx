"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Nome deve ter no mínimo 3 caracteres.",
    })
    .max(50, {
      message: "Nome deve ter no máximo 50 caracteres.",
    })
    .nonempty({ message: "Nome é obrigatório." }),

  email: z
    .string()
    .email({
      message: "Email inválido.",
    })
    .nonempty({
      message: "Email é obrigatório.",
    }),

  message: z
    .string()
    .min(5, {
      message: "Mensagem deve ter no mínimo 5 caracteres.",
    })
    .max(50, {
      message: "Mensagem deve ter no máximo 50 caracteres.",
    })
    .nonempty({
      message: "Mensagem é obrigatória.",
    }),
});

export default function FormContact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent("Formulário de Contato Portfolio");
    const body = encodeURIComponent(
      `Nome: ${data.name}\nMensagem: ${data.message}`
    );
    const mailtoLink = `mailto:d7gustavoreissouzalima@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }

  return (
    <div className="bg-card/50 backdrop-blur-lg border border-white/20 rounded-lg p-6 shadow-lg w-full md:w-full min-h-[23rem]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Nome */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary text-base">Nome</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    autoComplete="off"
                    placeholder="Digite seu nome"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary text-base">Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    autoComplete="off"
                    placeholder="Digite seu email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Mensagem */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary text-base">
                  Mensagem
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Digite sua mensagem" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </Form>
    </div>
  );
}
