
import * as React from "react"
import { cn } from "@/lib/utils"

interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  currentStep: number
}

const Steps = React.forwardRef<HTMLDivElement, StepsProps>(
  ({ className, currentStep = 1, children, ...props }, ref) => {
    // Count total steps
    const totalSteps = React.Children.count(children)
    
    // Create an array of step numbers from 1 to totalSteps
    const stepNumbers = Array.from({ length: totalSteps }, (_, i) => i + 1)
    
    return (
      <div 
        ref={ref}
        className={cn(
          "flex flex-col",
          className
        )}
        {...props}
      >
        {/* Progress bar */}
        <div className="flex flex-col sm:flex-row items-center relative pb-8">
          {stepNumbers.map((step, index) => (
            <React.Fragment key={step}>
              {/* Step circle */}
              <div className="flex flex-col items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium z-10
                    ${step < currentStep ? 'bg-medrush-blue text-white' : 
                      step === currentStep ? 'bg-medrush-blue text-white' : 
                      'bg-gray-200 text-gray-600'}`}
                >
                  {step < currentStep ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    step
                  )}
                </div>
                
                {/* Step label - show below on mobile, beside on desktop */}
                <div className="sm:absolute sm:top-10 mt-2 sm:mt-0 text-xs sm:text-sm font-medium text-center px-2
                  ${step === currentStep ? 'text-medrush-blue' : 'text-gray-600'}">
                  {React.Children.toArray(children)[index]}
                </div>
              </div>

              {/* Connector line between steps */}
              {index < stepNumbers.length - 1 && (
                <div className="hidden sm:block h-[2px] flex-1 mx-2
                  ${step < currentStep ? 'bg-medrush-blue' : 'bg-gray-200'}">
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    )
  }
)

Steps.displayName = "Steps"

export { Steps }
