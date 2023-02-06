import { useState,useEffect } from "react";
import React from 'react'
const PREFIX ="data"

export default function useLocalStorage(key,intialValue) {
    const PrefixedKey=PREFIX +key
   
    const[value,setValue]=useState(()=>{
        const jsonValue = typeof localStorage !== "undefined"? localStorage.getItem(PrefixedKey):""
        if(jsonValue !== null){
            return JSON.parse(jsonValue)
        }
        if(typeof intialValue === "function"){
            return intialValue()
        }
        else{
            return intialValue
        }
    }) 
    useEffect(()=>{
   localStorage.setItem(PrefixedKey,JSON.stringify(value))
    },[PrefixedKey,value])

  return [value,setValue]
}