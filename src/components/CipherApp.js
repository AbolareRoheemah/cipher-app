import React, { useState } from 'react'
import '../App.css'

export default function CipherApp() {
    const [text, updateText] = useState("")
    const [key, updateKey] = useState(null)
    const [etext, setEText] = useState("")
    const [isencrypt, setIsEncrypt] = useState(true)
    // const submitForm = () => {
    //     console.log('text', text)
    // }
    const encrypt = () => {
        let encryptedText = ""
        // const text = text.toLowerCase()
        // const key = Number(key)
        // console.log('test', /^[^\d]*$/.test(text), text, key)
        if (
            text !== "" ||
            key !== null ||
            /^[^\d]*$/.test(text) ||
            key !== undefined
        ) {
            const alpha = "abcdefghijklmnopqrstuvwxyz"
            text.toLowerCase()
            Number(key)
            // console.log('test', text, key, typeof key)
            for (let i = 0; i < text.length; i++) {
                const char = text[i]
                // console.log('test7', char)
                const indexOfChar = alpha.indexOf(char)
                // console.log('test8', indexOfChar, typeof key)
                let newIndex = indexOfChar + Number(key)
                // console.log('newindex', newIndex)
                if (newIndex % 26 < 0) {
                    newIndex += 26
                }
                encryptedText += alpha[newIndex]
                // console.log('test88', encryptedText)
            }
            setEText(encryptedText)
            updateText("")
            updateKey("")
        } else {
            setEText("Please fill the input fields")
        }
        // return encryptedText
    }
    const decrypt = () => {
        let encryptedText = ""
        // const text = text.toLowerCase()
        // const key = Number(-key)
        if (text !== "" || key !== null) {
            const alpha = "abcdefghijklmnopqrstuvwxyz"
            for (let i = 0; i < text.length; i++) {
                const char = text[i]
                const indexOfChar = alpha.indexOf(char)
                let newIndex = indexOfChar + key
                if (newIndex % 26 < 0) {
                    newIndex += 26
                }
                encryptedText = encryptedText + alpha[newIndex]
            }
            setEText(encryptedText)
            updateText("")
            updateKey("")
        } else {
            setEText("Please fill the input fields")
            console.log('error', etext)
        }
        // return encryptedText
    }
  return (
    <div className="cipher-ctn">
        <div>
          <div className="before">
            <div className="sec2-img"></div>
          </div>
        </div>
        <div className="sec2-text-ctn">
            <p class="why">Caesar Cipher Text Encryption/Decryption Application</p>
            {isencrypt && <form className='form-ctn'>
                <div className="input-field">
                    <label for="text">Text</label>
                    <input name="Text" className="input" onChange={(e) => {updateText(e.target.value)}}/>
                </div>
                <div className="input-field">
                    <label for="key">Key</label>
                    <input name="Key" className="input" type='number' onChange={(e) => {updateKey(e.target.value)}}/>
                </div>
                <div className='btn' onClick={() => {encrypt()}}>
                    Encrypt
                </div>
                <p className='prompt'>Encrypted Text: <span className='decrypt'>{etext}</span></p>
                <p className='prompt'>Already encrypted? <span className='decrypt' onClick={() => {setIsEncrypt(false)}}>Decrypt</span></p>
            </form>}
            {!isencrypt && <form className='form-ctn'>
            <div className="input-field">
                    <label for="text">Text</label>
                    <input name="Text" className="input" onChange={(e) => {updateText(e.target.value)}}/>
                </div>
                <div className="input-field">
                    <label for="key">Key</label>
                    <input name="Key" className="input" type='number' onChange={(e) => {updateKey(e.target.value)}}/>
                </div>
                <div className='btn' onClick={() => {decrypt()}}>
                    Decrypt
                </div>
                <p className='prompt'>Decrypted Text: <span className='decrypt'>{etext}</span></p>
                <p className='prompt'>Already decrypted? <span className='decrypt' onClick={() => {setIsEncrypt(true)}}>Encrypt</span></p>
            </form>}
        </div>
    </div>
  )
}
