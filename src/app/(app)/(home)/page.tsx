import {Navbar} from './navbar';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Page() {
  return (
    <><div className="p-4" >
      <div className="flex flex-col gap-y-4">
        <Button variant="elevated">I am a button</Button>
      <Input placeholder="I am an input" />
      <Progress value={50} />
      <Textarea placeholder="I am a textarea" />
      <Checkbox  />
    </div>
    </div></>
    
    
  );
};