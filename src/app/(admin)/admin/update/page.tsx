"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { coursecodes, defaultValues, materialTypes, semesters, years } from "@/constants";
import { useState } from "react";
import { updateMaterial } from "@/lib/actions/material.action";

const formSchema = z.object({
  coursecode: z.string(),
  coursename: z.string(),
  sem: z.number().min(1).max(4),
  year: z.number().min(1).max(2),
  materialType: z.string(),
  title: z.string(),
  material: z.string(),
});

const UpdateForm = () => {
  const { toast } = useToast();
  const [material, setMaterial] = useState(defaultValues);
  const [isSubmitting, setisSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const handleInputChange = (field: keyof z.infer<typeof formSchema>, value: string | number) => {
    let parsedValue: string | number = value;
    if (field === 'sem' || field === 'year') {
      parsedValue = Number(value);
      if (isNaN(parsedValue)) {
        console.error(`Invalid value for ${field}:`, value);
        return; 
      }
    }
    setMaterial((prevState) => ({
      ...prevState,
      [field]: parsedValue,
    }));
    form.setValue(field, parsedValue); 
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setisSubmitting(true);
    try {
      console.log("State variable material: ",material); 
      await updateMaterial(material);
      toast({
        title: 'Success',
        description: "Successfully updated material",
        variant: 'default',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: "Error submitting the form",
        variant: 'destructive',
      });
      console.log(error);
    }
    setisSubmitting(false);
  }
  const router = useRouter();
  return (
    <>
    <div className="w-3/5 flex justify-evenly m-auto pt-2">
      <button 
        className="customButton" type="button" onClick={() => router.push("/")}
      >
        Home
      </button>
      <button 
        className="customButton" type="button" onClick={() => router.back()}
        >
        Go Back
      </button>
      <button
        className="customButton"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-gray-200 p-6 space-y-8 m-auto w-3/5 my-4 rounded-lg">
        <h1 className="text-bold text-2xl ">Update material details</h1>
        <FormField
          control={form.control}
          name="coursecode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Code</FormLabel>
              <Select onValueChange={(value: string) => handleInputChange('coursecode', value)} defaultValue={material.coursecode}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course code" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {coursecodes.map((coursecode) => (
                    <SelectItem key={coursecode} value={coursecode}>
                      {coursecode}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="coursename"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Course name goes here" 
                  value={material.coursename} 
                  onChange={(e) => handleInputChange('coursename', e.target.value)} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-2/5">
            <FormField
              control={form.control}
              name="sem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Semester of course</FormLabel>
                  <Select onValueChange={(value: string) => handleInputChange('sem', parseInt(value))} defaultValue={String(material.sem)}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select semester" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {semesters.map((sem) => (
                        <SelectItem key={sem} value={String(sem)}>
                          {sem}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full md:w-2/5">
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year</FormLabel>
                  <Select onValueChange={(value: string) => handleInputChange('year', parseInt(value))} defaultValue={String(material.year)}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {years.map((y) => (
                        <SelectItem key={y} value={String(y)}>
                          {y}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="materialType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Material Type</FormLabel>
              <Select onValueChange={(value: string) => handleInputChange('materialType', value)} defaultValue={material.materialType}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a material type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {materialTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title of material you're posting</FormLabel>
              <FormControl>
                <Input
                placeholder="Title goes here"
                value={material.title}
                onChange={(e) => handleInputChange('title', e.target.value)} 
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="material"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Material</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Material goes here" 
                  value={material.material} 
                  onChange={(e) => handleInputChange('material', e.target.value)} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button className="customButton" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save material'}
        </button>
      </form>
    </Form>
    </>
  );
};

export default UpdateForm;