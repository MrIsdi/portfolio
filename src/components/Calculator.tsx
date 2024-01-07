"use client"
import { useState } from "react"
export default function Calculactor(){
    const array: string[] = [
        "C", "(", ")", "*",
        "7", "8", "9", "/",
        "4", "5", "6", "+",
        "1", "2", "3", "-",
        ".", "0", "00", "="
    ]
    const [nilai, setNilai] = useState("0")
    const handleBtn = (data: string) =>{
        if(nilai == "0"){
            setNilai(data)
        }else{
            setNilai(nilai + data)
        }
    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setNilai(e.target.value)
    }
    const handleClear = () =>{
        setNilai("0")
    }
    const handleResult = () =>{
        setNilai(eval(nilai))
    }
    return(
        <>
        <form action="">
            <input type="text" name="" value={nilai} id="" className="w-full h-20 mb-2 rounded-2xl text-3xl text-end pe-4" onChange={handleInput} />
            <div className="grid grid-cols-4 gap-2">
                {
                    array.map((ar, i)=>(
                        ar == "C" ? 
                        <button 
                            key={i} 
                            type="button" 
                            className="aspect-square rounded-2xl text-2xl bg-[#eeeeee] text-[#FFA33C] font-bold shadow-lg"
                            onClick={handleClear}>
                            {ar}
                        </button>:
                        (ar == "="?
                        <button 
                            key={i} 
                            type="button" 
                            className="aspect-square rounded-2xl text-2xl bg-[#00ADB5] text-[#eeeeee] font-bold shadow-lg"
                            onClick={handleResult}>
                            {ar}
                        </button>:
                        (ar == "." || ar == "00" || ar == "0" || ar == "1" || ar == "2" || ar == "3" || ar == "4" || ar == "5" || ar == "6" || ar == "7" || ar == "8" || ar == "9" ?
                        <button 
                            key={i} 
                            type="button" 
                            className="aspect-square rounded-2xl text-2xl bg-[#eeeeee] text-[#222831] font-bold shadow-lg"
                            onClick={()=>handleBtn(ar)}>
                            {ar}
                        </button>:
                        <button 
                            key={i} 
                            type="button" 
                            className="aspect-square rounded-2xl text-2xl bg-[#eeeeee] text-[#00ADB5] font-bold shadow-lg"
                            onClick={()=>handleBtn(ar)}>
                            {ar}
                        </button>
                        )
                        )
                    ))
                }
            </div>
        </form>
        </>
    )
}