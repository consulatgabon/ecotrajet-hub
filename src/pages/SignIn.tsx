
import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { ArrowRight, Mail, Apple } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AuthLayout from "@/components/auth/AuthLayout";

const signInSchema = z.object({
  email: z.string().email({ message: "Veuillez saisir une adresse e-mail valide" }),
  password: z.string().min(1, { message: "Veuillez saisir votre mot de passe" }),
});

type SignInFormValues = z.infer<typeof signInSchema>;

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Check if there's a redirect path in the location state
  const from = location.state?.from || "/dashboard";

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: SignInFormValues) {
    console.log(data);
    // Set authentication state in localStorage (In a real app, this would involve a backend)
    localStorage.setItem('isAuthenticated', 'true');
    
    toast.success("Connexion réussie!");
    setTimeout(() => {
      // Navigate to the redirect path or dashboard
      navigate(from);
    }, 1000);
  }

  return (
    <AuthLayout
      title="Connexion"
      subtitle="Connectez-vous à votre compte EcoTrajet"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="votre@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Mot de passe</FormLabel>
                  <Link 
                    to="/forgot-password" 
                    className="text-xs text-eco-green hover:underline"
                  >
                    Mot de passe oublié?
                  </Link>
                </div>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Se connecter <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </Form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Ou se connecter avec
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <Button variant="outline" className="w-full">
            <Mail className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button variant="outline" className="w-full">
            <Apple className="mr-2 h-4 w-4" />
            Apple
          </Button>
        </div>
      </div>

      <p className="text-center mt-6 text-sm text-muted-foreground">
        Pas encore de compte ?{" "}
        <Link to="/signup" className="text-eco-green hover:underline font-medium">
          S'inscrire
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignIn;
