import { Route, Routes } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import NoteDetailPage from './pages/NoteDetailPage'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/notes/:id" element={<NoteDetailPage />} />
            </Routes>
        </div>
    )
}

export default App
