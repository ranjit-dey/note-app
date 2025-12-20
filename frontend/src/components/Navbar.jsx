import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <header className="bg-base-300 border-b border-base-content/10">
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-primary tracking-tight">note-app.</h1>
                    <div className="flex items-center gap-4">
                        <Link to="/create" className="btn btn-primary rounded-full">
                            <Plus className="size-5" />
                            Create
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
