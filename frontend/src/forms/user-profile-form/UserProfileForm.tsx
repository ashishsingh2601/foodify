import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, "Name is required"),
    addressLine1: z.string().min(1, "Address Line 1 is required"),
    country: z.string().min(1, "Country is required"),
    city: z.string().min(1, "City is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
    onSave: (userProfileData: UserFormData) => void;
    isLoading: boolean;
    currentUser: User;
}

const userProfileForm = ({ onSave, isLoading, currentUser }: Props) => {
    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: currentUser,
    });

    useEffect(() => {
        form.reset(currentUser);
    }, [currentUser, form])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSave)} className="space-y-3 bg-gray-50 rounded md:p-9">
                <div>
                    <h2 className="text-2xl font-bold">User Profile</h2>
                    <FormDescription>
                        View and modify your information
                    </FormDescription>
                </div>
                <FormField control={form.control} name="email" render={({field}) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field} disabled className="bg-white rounded" /> 
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                 )} />
                <FormField control={form.control} name="name" render={({field}) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white rounded" /> 
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <div className="flex flex-col md:flex-row gap-3">
                    <FormField control={form.control} name="addressLine1" render={({field}) => (
                        <FormItem className="flex-1">
                            <FormLabel>Address Line 1</FormLabel>
                            <FormControl>
                                <Input {...field} className="bg-white rounded" /> 
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="country" render={({field}) => (
                        <FormItem className="flex-1">
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                                <Input {...field} className="bg-white rounded" /> 
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="city" render={({field}) => (
                        <FormItem className="flex-1">
                            <FormLabel>City</FormLabel>
                            <FormControl>
                                <Input {...field} className="bg-white rounded" /> 
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                </div>
                {
                    isLoading ? <LoadingButton /> : <Button type="submit" className="hover:bg-gray-300 bg-orange-500 rounded">Submit</Button>
                }
            </form>
        </Form>
    )
}

export default userProfileForm;