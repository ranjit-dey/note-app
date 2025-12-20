import mongoose from 'mongoose'

import Note from '../models/Note.js'
export const getAllNotes = async (_, res) => {
    try {
        const notes = await Note.find().sort({ updatedAt: -1 }) // -1 will sort desc (newest first)
        res.status(200).json(notes)
    } catch (error) {
        console.error('Error in getAllNotes controller')
        res.status(500).json({ message: 'Notes fetch unsuccessfull..' })
    }
}

export const getNoteById = async (req, res) => {
    try {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid note ID' })
        }
        const note = await Note.findById(id)
        res.status(200).json(note)
    } catch (error) {
        onsole.error('Error in getNoteById controller')
        res.status(500).json({ message: 'Note fetching failed..' })
    }
}

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body
        const note = new Note({ title: title, content: content })

        const savedNote = await note.save()
        res.status(201).json(savedNote)
    } catch (error) {
        console.error('Error in createNote controller')
        res.status(500).json({ message: 'Note creation failed..' })
    }
}

export const updateNote = async (req, res) => {
    try {
        const { id } = req.params
        const { title, content } = req.body

        // 🔐 Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid note ID' })
        }

        const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true })

        if (!updatedNote) return res.status(404).json({ message: 'Note not found' })

        res.status(200).json(updatedNote)
    } catch (error) {
        console.error('Error in updatedNote controller')
        res.status(500).json({ message: 'Note updation failed..' })
    }
}

export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params
        // 🔐 Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid note ID' })
        }
        const deletedNote = await Note.findByIdAndDelete(id, { new: true })
        if (!deletedNote) return res.status(404).json({ message: 'Note not found' })
        res.status(200).json(deletedNote)
    } catch (error) {
        console.error('Error in deleteNote controller')
        res.status(500).json({ message: 'Note deletion failed..' })
    }
}
