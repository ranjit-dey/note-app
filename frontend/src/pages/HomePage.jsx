import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import LoaderSkeliton from '../components/LoaderSkeliton'
import Navbar from '../components/Navbar'
import NoteCard from '../components/NoteCard'
import RateLimitedUI from '../components/RateLimitedUI'
import api from '../utils/axios'
import NoNoteFound from '../components/NoNoteFound'

const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false)
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await api.get('/notes')
                console.log(response.data)

                setNotes(response.data)
                setIsRateLimited(false)
            } catch (error) {
                console.log('Error fetching notes', error.message)

                if (error.response?.status === 429) {
                    setIsRateLimited(true)
                } else {
                    toast.error('Failed to load notes')
                }
            } finally {
                setLoading(false)
            }
        }



        fetchNotes()
    }, [])

    return (
        <div className="min-h-screen">
            <Navbar />
            {isRateLimited && <RateLimitedUI />}
            <div className="max-w-6xl mx-auto p-4 mt-6">
                {loading && (
                    <div>
                        <LoaderSkeliton />
                    </div>
                )}
                {notes.length === 0 && !loading && !isRateLimited && <NoNoteFound />}
                {notes.length > 0 && !isRateLimited && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notes.map((note) => (
                            <NoteCard key={note._id} note={note} setNotes={setNotes} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage
