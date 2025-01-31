import { Loader2 } from "lucide-react"
import { Button } from "./ui/button"

const LoadingButton = () => {
  return (
    <div>
      <Button disabled>
        <Loader2  className="animate-spin mr-2 h-4 w-4"/>
        Loading
      </Button>
    </div>
  )
}

export default LoadingButton
