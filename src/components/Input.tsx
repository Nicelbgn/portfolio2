type InputProps = {
    type:string,
    placeholder:string
    _class:string
}


export default function Input({type,placeholder,_class}:InputProps){
    return <input type={type} placeholder={placeholder} className={_class} />
}