import {IoSend} from 'react-icons/io5'
import { useState } from 'react'
import axios from 'axios'
import {ImSpinner2} from "react-icons/im"

const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export const ContactForm = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [sending, setSending] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(email === "" || message === "") return setError("Please fill out all fields")
        if(!emailRegex.test(email)) return setError("Hmm, that doesn't look like an email.")
        setSending(true)

        let response = await axios.post("/api/send", {email, message})

        if(response.data.result === "FIELD_EMPTY") return setError("Please fill out all fields!")
        if (response.data.result === "DISCORD_API_ERROR") return setError("Something went wrong...");

        setSending(false);

        setMessage("");
        setEmail("");
        return setError("Thanks for reaching out!");

    }

    return (
        <div className="dark:bg-white/5 border-slate-700/20 border-[1px] w-full pb-4  flex justify-start md:row-start-1 flex-col md:col-span-2 md:row-span-4 rounded-md">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <h1 className="dark:text-slate-400/60  font-bold text-sm px-4 py-2 mt-2">EMAIL</h1>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="dark:bg-white/10 bg-gray-400/30 self-center w-[95%] p-2 dark:placeholder:text-gray-400/40 dark:text-gray-300 text-sm rounded-md" type="text" placeholder="example@gmail.com" />
                <h1 className="dark:text-slate-400/60 font-bold text-sm px-4 py-2 mt-2">MESSAGE</h1>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="dark:bg-white/10 bg-gray-400/30 self-center w-[95%] p-2 dark:placeholder:text-gray-400/40 dark:text-gray-300 text-sm rounded-md" placeholder="Hi JustFossa, what's up?" />
                <div className="flex flex-row items-center w-full mt-4">
                    <h1 className="dark:text-gray-400/80 px-4 text-sm w-52 md:w-auto">{error}</h1>
                    <button type="submit" disabled={sending} className="flex items-center text-md dark:bg-violet-700/60 hover:opacity-70  w-24 ml-auto mr-2 px-4 h-10 dark:border-none border-black border-[1px] dark:text-white rounded-full">Send {!sending ? <IoSend className="ml-auto" size={20} /> : <ImSpinner2 className="ml-auto animate-spin" />}</button>
                </div>
            </form>
        </div>  
    )
}
