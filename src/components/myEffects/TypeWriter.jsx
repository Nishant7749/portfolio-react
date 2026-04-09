import { useState, useEffect } from "react"

function TypeWriter() {
    const words = ["Web Developer", "Software Engineer", "Intellectual"]

    const [displayedText, setDisplayedText] = useState('')
    const [index, setIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
       const timeout = setTimeout(() => {

            if (isDeleting) {  
                setDisplayedText(words[index].substring(0, displayedText.length - 1))  //start typing
            }
            else {
                setDisplayedText(words[index].substring(0, displayedText.length + 1))   //start deleting
            }

            if (!isDeleting && displayedText === words[index]) {
                 setTimeout(() => {
                    setIsDeleting(true)
                 }, 1000);
            }

            if (isDeleting && displayedText === '') {
                setIsDeleting(false)
                setIndex(prev => (prev+1)%words.length)
            }

        }, isDeleting ? 50 : 100);

        return ()=> clearTimeout(timeout)
    }, [index, displayedText, isDeleting])

return(
    <>
    <div>
        {displayedText}<span>|</span>
    </div>
    </>
)
}

export default TypeWriter