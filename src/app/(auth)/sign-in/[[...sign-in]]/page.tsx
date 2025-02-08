'use client';
import { signInSchema } from "@/schema/signInSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

export default function SignInForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleSubmit = async (data: z.infer<typeof signInSchema>) => {
    setLoading(true);
    const result = await signIn('credentials', {
      redirect: false,
      username: data.username,
      password: data.password,
    });

    if (result?.error) {
      toast({
        title: 'Error',
        description: "Invalid username or password",
        variant: 'destructive',
      });
      setLoading(false);
    } else if (result?.url) {
      toast({
        title: 'Success',
        description: "Successfully logged in",
        variant: 'default',
      });
      setLoading(false);
      router.replace('/admin');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white">
            Welcome Back to <span className="text-[#88f9f9]">ResourceCse</span>
          </h1>
          <p className="text-gray-300 text-sm">Sign in to continue</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-200">Username</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-200">Password</FormLabel>
                  <FormControl>
                    <Input 
                      type="password" 
                      {...field} 
                      className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

          

            <Button disabled={loading}
              className="w-full bg-[#61afb2] hover:bg-[#b0d7d3] text-white font-semibold py-2 rounded-lg transition"
              type="submit"
            >
              Sign In
            </Button>
          </form>
        </Form>

       
      </div>
    </div>
  );
}
