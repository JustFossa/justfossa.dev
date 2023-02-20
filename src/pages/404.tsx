import {motion} from "framer-motion"

const NotFound = () => {
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.95}}
            transition={{ease: "easeOut", duration: 0.5}}
            className="flex flex-col items-center justify-start mt-24 overflow-hidden"
        ><div>
        <h1 className="text-3xl dark:text-white font-medium mb-4">Hmm... Thinking... 🤔</h1>
        <p className="text dark:text-gray-300 font-light tracking-wide mb-12">It appears that what you&apos;re looking for isn&apos;t here.</p>
    </div>
        </motion.div>

    )
}

export default NotFound;