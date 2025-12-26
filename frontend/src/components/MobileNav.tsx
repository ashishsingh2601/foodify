import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-green-600" />
            </SheetTrigger>
            <SheetContent className="space-y-3 bg-white">
                <SheetHeader>
                    <SheetTitle>
                        {
                            isAuthenticated ? <span className="flex items-center font-bold gap-2">
                                <CircleUserRound className="text-orange-600" />
                                {user?.name}
                            </span> : <span>
                                Welcome to Foodify!
                            </span>
                        }

                    </SheetTitle>
                    <Separator />
                    <SheetDescription className="flex flex-col gap-3">
                        {isAuthenticated ? <MobileNavLinks /> : <Button onClick={() => loginWithRedirect()} className="flex-1 font-bold bg-green-500 hover:bg-green-300">
                            Log In
                        </Button>}

                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;
