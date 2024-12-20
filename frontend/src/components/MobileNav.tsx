import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-green-600" />
            </SheetTrigger>
            <SheetContent className="space-y-3 bg-white">
                <SheetHeader>
                <SheetTitle>
                    <span>
                        Welcome to Foodify!
                    </span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-green-500 hover:bg-green-300">
                        Log In    
                    </Button>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;