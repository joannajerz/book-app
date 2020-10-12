import React, { useState, useEffect, useCallback } from 'react'
import { Button } from 'antd'
import { Book } from '../models/Book'

interface BookDescriptionProps {
    book: Book,
} 

const BookDescription = ({ book }: BookDescriptionProps) => {
    const splitLength = 200
    const [isExpanded, setIsExpanded] = useState(false)
    const [shortenedText, setshortenedText] = useState('')

    useEffect(() => {
        if (book.description.length > splitLength) {
                setshortenedText(book.description.slice(0, splitLength))
        }
        else {
                setshortenedText(book.description)
        }
    }, [book, setshortenedText, splitLength])
    
    const handleToggle = useCallback(() => {
        setIsExpanded(!isExpanded)
    }, [setIsExpanded, isExpanded ])

    return <div >
        <div>
            {
            isExpanded 
                ? book.description
                : shortenedText
            }
        </div>
        <Button onClick={handleToggle}>
            {isExpanded?'Less':'More'}
        </Button>
      </div >
    
  }
  export default BookDescription;