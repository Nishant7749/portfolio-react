import { useState, useEffect, use } from "react"

function TypeWriter() {

    const words = ["Frontend Developer", "Backend Developer", "Software Engineer"]

    const [displayedText, setDisplayedText] = useState('')
    const [index, setIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {

        const timeout = setTimeout(() => {

            if (isDeleting) {
                setDisplayedText(words[index].substring(0, displayedText.length - 1))
            }
            else {
                setDisplayedText(words[index].substring(0, displayedText.length + 1))
            }

            if (isDeleting && displayedText === '') {
                
                    setIsDeleting(false)
                    setIndex(prev => (prev + 1) % words.length)
            
            }

            if (!isDeleting && displayedText === words[index]) {
                setTimeout(() => {
                          setIsDeleting(true)
                }, 500);
            }

        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout)

    }, [displayedText, index, isDeleting])


    return (
        <>
            <div>
                {displayedText}<span>|</span>
            </div>
        </>
    )
}

export default TypeWriter