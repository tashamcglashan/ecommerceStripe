import Link from "next/link";

import { 
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
 } from "@/components/ui/sheet";
 import {ScrollArea} from "@/components/ui/scroll-area";

interface NavbarItem {
   href:string[]
   children: React.ReactNode;// Add your props here
}
interface Props {
   items:NavbarItem[]
   open: boolean
   onOpenChange: (open: boolean) => void;// Add your props here
}

export const NavbarSidebar = ({ 
    items, 
    open, 
    onOpenChange }: 
    Props) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}> 
          <SheetContent
          side="left"
          className="p-0 transition-none"
          >
            <SheetHeader className="p-4 border-b">
                <div className="flex items-center">
                    <SheetTitle>
                        Menu
                    </SheetTitle>
                </div>

            </SheetHeader>
            <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                {items.map((item, index) => (
               <Link
                 key={item.href}
                 href={item.href}
                 className="w-full text-left p4 hover:bg-black hover:text-white flex items-center
                 text-base font-medium"
                 onClick={() => onOpenChange(false)}// Close the sidebar when an item is clicked
                 >
                    {item.children}
               </Link>
            ))}
               <div className="border-t">
                <Link href="/sign-in"  className="w-full text-left p4 hover:bg-black hover:text-white flex items-center
                 text-base font-medium"
                 >
                Log In
                </Link>

                <Link href="/sign-up"  className="w-full text-left p4 hover:bg-black hover:text-white flex items-center
                 text-base font-medium"
                 >
                Start Selling
                </Link>
               </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
    );
};