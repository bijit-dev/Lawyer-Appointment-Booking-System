// import toast from 'react-hot-toast'

import { toast } from "react-toastify"

export const getBookings = () => {
    let bookings = []
    const storedBookings = localStorage.getItem('bookings')
    if (storedBookings) {
        bookings = JSON.parse(storedBookings)
        
    }
    return bookings
}
export const addBook = lawer => {
    let bookings = getBookings()
    const isExist = bookings.find(b => b.id === lawer.id)
    if (isExist) return toast.error('Already Booking!');

    bookings.push(lawer)
    localStorage.setItem('bookings', JSON.stringify(bookings))
    toast.success('Successfull Booking!');
}

export const removeFavorite = id => {
    let bookings = getBookings()
    const remaining = bookings.filter(b => b.id !== id)
    localStorage.setItem('bookings', JSON.stringify(remaining))
    
}