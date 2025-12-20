const Loader = () => {
    return (
        <div className="relative rounded-xl bg-neutral-900 border border-white/5 p-5 overflow-hidden animate-pulse">
            {/* Top glowing line */}
            <div className="absolute top-0 left-0 h-0.5 w-full bg-primary" />

            {/* Title */}
            <div className="h-4 w-2/3 bg-white/10 rounded mb-3" />

            {/* Content */}
            <div className="space-y-2 mb-4">
                <div className="h-3 w-full bg-white/10 rounded" />
                <div className="h-3 w-5/6 bg-white/10 rounded" />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
                <div className="h-3 w-24 bg-white/10 rounded" />
                <div className="flex gap-2">
                    <div className="h-4 w-4 bg-white/10 rounded" />
                    <div className="h-4 w-4 bg-white/10 rounded" />
                </div>
            </div>
        </div>
    )
}

const LoaderSkeliton = () => {
    return (
        <div className="max-w-6xl p-4 mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
                <Loader key={i} />
            ))}
        </div>
    )
}

export default LoaderSkeliton
