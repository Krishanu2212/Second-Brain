interface InputProps {
    ref: any,
    type: "text" | "dropdown" | "textbox" | "password",
    options?: ['Select', 'X', "Youtube", "Text", "Audio", "Image"],
    name: string,
    placeholder: string
}

export const Input = ( props: InputProps) => {
    if(props.type === "text" || props.type === "password") return (
        <div className="px-4 py-2">
            <label className="py-1 text-lg">{props.name}</label>
            <div><input ref={props.ref} type={props.type} name={props.name} className="w-96 h-10 border-none rounded-xl bg-gray-300 px-4 focus:border-5" placeholder={props.placeholder}/></div>
        </div>
    ); else if(props.type === "dropdown" && props.options) return (
        <div className="px-4 py-2">
            <label className="py-1 text-lg">Select {props.name}</label>
            <div>
                <select ref={props.ref} className="w-96 h-10 border-none rounded-xl bg-gray-300 px-4 focus:border-5">
                    {props.options.map((opt) => (
                        <option>{opt}</option>
                    ))}
                </select>
            </div>
        </div>
    ); else if(props.type === "textbox") return (
        <div className="px-4 py-2">
            <label className="py-1 text-lg">{props.name}</label>
            <div><textarea ref={props.ref} name={props.name} className="w-96 h-30 border-none rounded-xl bg-gray-300 p-2 focus:border-5" placeholder={props.placeholder}/></div>
        </div>
    )
}