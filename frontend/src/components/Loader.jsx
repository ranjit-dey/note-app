import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const Loader = () => {
    return (
        <div className="h-100 flex flex-col items-center justify-center">
            <span className="loading loading-spinner loading-xl"></span>
            <Link
                to={'/'}
                className="flex gap-2 items-center justify-start bg-base-100 px-4 py-2 rounded-full hover:text-green-400 transition-all duration-300 "
            >
                <ArrowLeft className="size-4" />
                Back to Notes
            </Link>
        </div>
    )
}

export default Loader
