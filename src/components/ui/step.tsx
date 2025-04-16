
import * as React from "react"
import { cn } from "@/lib/utils"

const Step = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex-1 text-center",
      className
    )}
    {...props}
  />
))
Step.displayName = "Step"

export { Step }
