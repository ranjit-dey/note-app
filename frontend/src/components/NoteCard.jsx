import { Pencil, Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import api from '../utils/axios.js'
import { formatDate } from '../utils/formatDate.js'



const NoteCard = ({ note, setNotes }) => {
    const handleDelete = async (e, id) => {
        e.preventDefault()
        if (!window.confirm('Are you want to delete ?')) return
        try {
            await api.delete(`/notes/${id}`)
            setNotes((prev) => prev.filter((note) => note._id !== id))
            toast.success('Note deleted successfully')
        } catch (error) {
            console.log('Error in handleDelete:', error)
            toast.error('Failed to delete note')
        }
    }


    return (
        <Link
            to={`/notes/${note._id}`}
            className="relative rounded-xl bg-neutral-900 border border-white/5 p-5 transition hover:border-white/10 overflow-hidden"
        >
            {/* Top Accent Line */}
            <div
                className="absolute top-0 left-0 h-0.5 w-full
                      bg-primary"
            />

            {/* Title */}
            <h3 className="text-base font-semibold text-white mb-1 truncate">{note.title}</h3>

            {/* Content */}
            <p className="text-sm text-white/70 line-clamp-2 mb-4">{note.content}</p>

            {/* Footer */}
            <div className="flex items-end justify-between">
                <span className="text-xs text-white/40">
                    {formatDate(new Date(note.createdAt))}
                </span>

                <div className="flex gap-3">
                    <button
                        // onClick={handleUpdate}
                        className="text-gray-400 hover:text-emerald-400 transition duration-300 bg-gray-400/20 p-2 rounded-sm"
                        aria-label="Edit note"
                    >
                        <Pencil className="size-4" />
                    </button>

                    <button
                        onClick={(e) => {
                            handleDelete(e, note._id)
                        }}
                        className="text-primary hover:text-red-400 transition duration-300 bg-primary/20 p-2 rounded-sm"
                        aria-label="Delete note"
                    >
                        <Trash2 className="size-4" />
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default NoteCard
