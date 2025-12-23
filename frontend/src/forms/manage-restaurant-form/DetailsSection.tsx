import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
    const { control } = useFormContext();

    return (
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-semibold">Details</h2>
                <FormDescription>
                    Enter details about your restaurant
                </FormDescription>
            </div>
            <FormField 
                control={control}
                name="restaurantName"
                render={({field}) => <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input {...field} className="bg-white" />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                </FormItem>}
            />
            <div className="flex gap-4">
                <FormField 
                    control={control}
                    name="cityName"
                    render={({field}) => <FormItem className="flex-1">
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                    </FormItem>}
                />
                <FormField 
                    control={control}
                    name="countryName"
                    render={({field}) => <FormItem className="flex-1">
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                    </FormItem>}
                />
            </div>
            <FormField 
                    control={control}
                    name="deliveryPrice"
                    render={({field}) => <FormItem className="max-w-[25%]">
                        <FormLabel>Delivery Price (₹)</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white" placeholder="50"/>
                        </FormControl>
                        <FormMessage className="text-red-500" />
                    </FormItem>}
            />
            <FormField 
                    control={control}
                    name="estimatedDeliveryTime"
                    render={({field}) => <FormItem className="max-w-[25%]">
                        <FormLabel>Estimated Delivery Time (minutes)</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white" placeholder="15"/>
                        </FormControl>
                        <FormMessage className="text-red-500" />
                    </FormItem>}
            />
        </div>
    );
};

export default DetailsSection;
