"use client";

import { useEffect, useState } from "react";

export const TypingText = ({ fullText, velocity }: {fullText: string, velocity?: number})=>{
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        if(index < fullText.length){
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText[index])
                setIndex(index + 1);
            }, velocity || 100);
            return () => clearTimeout(timeout);
        }
    },[index, fullText])

    return text;
}