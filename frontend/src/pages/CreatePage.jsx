
import { ArrowLeft, CircleX } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import api from '../utils/axios.js'

const CreatePage = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title.trim() || !content.trim()) {
            toast.error('fill all fields')
            return
        }

        setLoading(true)
        try {
            await api.post('/notes', {
                title,
                content,
            })
            toast.success('Notes created successfully')
            navigate('/')
        } catch (error) {
            if (error?.response?.status === 429) {
                toast.error('Relax', { duration: 4000, icon: '👻' })
            } else {
                toast.error('Failed to create note')
            }
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="max-w-6xl mx-auto p-4">
            <div>
                <Link
                    to={'/'}
                    className="flex gap-2 items-center justify-start hover:text-green-400 transition-all duration-300 "
                >
                    <ArrowLeft className="size-4" />
                    Back to Notes
                </Link>
            </div>
            <form
                onSubmit={handleSubmit}
                className="mt-5 w-full max-w-2xl mx-auto rounded-2xl flex flex-col justify-center items-start p-6 gap-5 "
            >
                <h1 className="text-2xl font-bold">Create New Note</h1>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="title">Title</label>
                    <div className="relative w-full">
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            placeholder="Note title"
                            className="w-full rounded-full outline outline-primary/50 py-2 px-3"
                        />

                        <CircleX
                            onClick={() => {
                                setTitle('')
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
                        value={content}
                        onChange={(e) => {
                            setContent(e.target.value)
                        }}
                        className="rounded-xl h-50 outline outline-primary/50 py-2 px-3"
                        placeholder="Note desciption"
                    />
                </div>
                <div className="flex w-full justify-end">
                    <button type="submit" className="btn btn-primary rounded-lg" disabled={loading}>
                        {loading ? 'Creating note..' : 'Create note'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreatePage
