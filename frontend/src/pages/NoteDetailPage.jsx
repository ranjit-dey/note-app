import { ArrowLeft, CircleX, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate, useParams } from 'react-router-dom'
import api from '../utils/axios.js'
import Loader from '../components/Loader.jsx'

const NodeDetailPage = () => {
    const [note, setNote] = useState('')
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const res = await api.get(`/notes/${id}`)
                setNote(res.data)
            } catch (error) {
                toast.error('Can not fetch note', error)
            } finally {
                setLoading(false)
            }
        }
        fetchNote()
    }, [id])

    const handleDelete = async () => {
        if (!window.confirm('Are you sure to delete this note?')) return
        try {
            await api.delete(`/notes/${id}`)
            toast.success('Note deleted successfully')
            navigate('/')
        } catch (error) {
            console.log('Error in handleDelete', error)
            toast.error('Failed to delete note')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!note.title.trim() || !note.content.trim()) {
            toast.error(` All fields should be filled`)
        }

        setSaving(true)

        try {
            await api.put(`/notes/${id}`, note)
            toast.success('Note updated successfully')

            navigate('/')
        } catch (error) {
            console.log('Error in updatenotes', error)
            toast.error('Error in note updation')
        } finally {
            setSaving(false)
        }
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            {loading ? <Loader /> : <>
            <div className="flex justify-between items-center">
                <Link
                    to={'/'}
                    className="flex gap-2 items-center justify-start hover:text-green-400 transition-all duration-300 "
                >
                    <ArrowLeft className="size-4" />
                    Back to Notes
                </Link>

                <button
                    className="btn btn-error rounded-full flex items-center gap-2"
                    onClick={handleDelete}
                >
                    <Trash2 size={16} />
                    Delete Note
                </button>
            </div>

            <form
                onSubmit={(e) => {
                    handleSubmit(e)
                }}
                className="mt-5 w-full mx-auto rounded-2xl flex flex-col justify-center items-start pt-6 gap-5 "
            >
                <h1 className="text-2xl font-bold">Create New Note</h1>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="title">Title</label>
                    <div className="relative w-full">
                        <input
                            type="text"
                            id="title"
                            value={note.title}
                            onChange={(e) => {
                                setNote({ ...note, title: e.target.value })
                            }}
                            placeholder="Note title"
                            className="w-full rounded-full outline outline-primary/50 py-2 px-3"
                        />

                        <CircleX
                            onClick={() => {
                                setNote({ ...note, title: '' })
                            }}
                            size={20}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-red-400 cursor-pointer"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="content">Content</label>
                    <textarea
                        type="text"
                        id="content"
                        value={note.content}
                        onChange={(e) => {
                            setNote({ ...note, content: e.target.value })
                        }}
                        className="rounded-xl h-50 outline outline-primary/50 py-2 px-3"
                        placeholder="Note desciption"
                    />
                </div>
                <div className="flex w-full justify-end">
                    <button type="submit" className="btn btn-primary rounded-lg" disabled={saving}>
                        {saving ? 'Saving..' : 'Save Changes'}
                    </button>
                </div>
            </form>
            </>}
        </div>
    )
}

export default NodeDetailPage
