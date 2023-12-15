import { ArrowCounterClockwise, Trash } from "@phosphor-icons/react"
import axios from "axios"
import { useEffect, useState } from "react"

export default function HistoryMenu() {
    const [reload, setReaload] = useState(false)
    const [history, setHistory] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL_DATABASE_JSON}/history`)
            .then((e) => setHistory(e.data))
            .catch(err => console.error(err))
    }, [reload])

    function clearHistory(id) {
        axios.delete(`${import.meta.env.VITE_URL_DATABASE_JSON}/history/${id}`)
            .then((e) => {
                console.log(e);
                setReaload(!reload)
            })
            .catch(err => console.log(err))
    }

    return (
        <section
            className="absolute right-0 bg-white/10 dark:bg-slate-500/10 backdrop-blur-sm bottom-0 top-0 px-6 py-10 w-96 max-h-screen overflow-hidden"
            style={{animation: "slide-left 1s ease-in-out both"}}
        >
            <div
                className="flex justify-between items-center"
            >
                <h3
                    className="dark:text-white text-zinc-900 text-2xl font-bold"
                >
                    Histórico
                </h3>
                <div
                    className="flex gap-2 items-center"
                >
                    <button
                        onClick={() => setReaload(!reload)}
                        type="button"
                        title="Atualizar histórico"
                        className="dark:text-white text-zinc-800"
                    >
                        <ArrowCounterClockwise size={18} />
                    </button>
                </div>
            </div>

            <ul
                className="flex flex-col gap-2 my-6 overflow-y-auto h-[90%]"
            >
                {
                    history.sort((a, b) => b.id - a.id).map((history, i) => <ContentHistory equation={history.equation} id={history.id} result={history.result} key={i} clearHistory={clearHistory} />)
                }
                {
                    history.length == 0 && (
                        <p
                            className="dark:text-white text-zinc-900 w-full text-center"
                        >
                            O histórico está vazio. {" "}
                            <button className="underline" onClick={() => setReaload(!reload)}
                                type="button"
                                title="Atualizar histórico"
                            >
                                Atualizar
                            </button>
                        </p>
                    )
                }
            </ul>
        </section>
    )
}

function ContentHistory({ id, equation, result, clearHistory }) {
    return (
        <li
            className="py-1 pr-8 flex relative group flex-col gap-1 items-end dark:text-white text-zinc-900 hover:bg-slate-500/20 transition-colors duration-300"
            id={id}
        >
            <span
                className="text-base"
            >
                {equation}
            </span>
            <span
                className="text-2xl font-semibold"
            >
                = {result}
            </span>

            <button
                onClick={()=>clearHistory(id)}
                type="button"
                title="Apagar registro"
                className="absolute left-3 top-3 hidden group-hover:block dark:text-white text-zinc-900"
            >
                <Trash size={18} />
            </button>
        </li>
    )
}