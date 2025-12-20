import { Zap } from 'lucide-react'

const RateLimitedUI = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-5">
            <div
                className="flex items-start sm:items-center max-w-6xl mx-auto
                bg-accent-content/30 border border-accent
                rounded-lg p-4 sm:p-5 gap-4"
            >
                {/* Icon */}
                <div
                    className="bg-accent-content flex items-center justify-center
                  rounded-full shrink-0
                  size-12 sm:size-20"
                >
                    <Zap className="size-6 sm:size-10 text-accent" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                    <h1 className="font-semibold text-base sm:text-lg leading-tight">
                        Rate Limit Reached
                    </h1>

                    <p className="text-sm sm:text-md text-white/80 leading-snug mt-1">
                        You've made too many requests in a short period. Please wait a moment.
                    </p>

                    <span className="block text-xs sm:text-sm text-white/50 mt-1">
                        Try again in a few seconds for the best experience
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RateLimitedUI
