import React, { useState } from 'react'
import '../App.css'

export default function CipherApp() {
    const [text, updateText] = useState("")
    const [key, updateKey] = useState(null)
    const [etext, setEText] = useState("")
    const [isencrypt, setIsEncrypt] = useState(true)
    const [isError, setIsError] = useState(false)
    const store = useState([])
    const submitForm = () => {
        console.log('text', text, typeof key)
        if (
            text === "" ||
            key === null ||
            key === undefined ||
            key === ""
        ) {
            setIsError(true)
            setEText("Please fill the input fields correctly")
        } else if (!/^[^\d]*$/.test(text)) {
            setIsError(true)
            setEText("Numbers are not allowed")
        }
        else {
            setIsError(false)
            isencrypt ? encrypt(): decrypt()
        }
    }
    const encrypt = () => {
        let encryptedText = ""
        
        const alpha = "abcdefghijklmnopqrstuvwxyz"
        text.toLowerCase()
        // console.log('test', text, key, typeof key)
        for (let i = 0; i < text.length; i++) {
            const char = text[i]
            const indexOfChar = alpha.indexOf(char)
            let newIndex = indexOfChar + Number(key)
            if (newIndex % 26 < 0) {
                newIndex += 26
            }
            encryptedText += alpha[newIndex]
        }
        setEText(encryptedText)
        store.push(text)
            // updateText("")
            // updateKey("")
        // return encryptedText
    }
    const decrypt = () => {
        let encryptedText = ""
        const alpha = "abcdefghijklmnopqrstuvwxyz"
        text.toLowerCase()
        // console.log('test', text, key, typeof key)
        for (let i = 0; i < text.length; i++) {
            const char = text[i]
            const indexOfChar = alpha.indexOf(char)
            let newIndex = indexOfChar + Number(-key)
            if (newIndex % 26 < 0) {
                newIndex += 26
            }
            encryptedText += alpha[newIndex]
        }
        setEText(encryptedText)
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
                <div className='btn' onClick={() => {submitForm()}}>
                    Encrypt
                </div>
                {!isError ? <p className='prompt'>Encrypted Text: <span className='decrypt'>{etext}</span></p>: <p className='error-p'>Error: {etext}</p>}
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
                {!isError ? <p className='prompt'>Decrypted Text: <span className='decrypt'>{etext}</span></p>: <p className='error-p'>Error: {etext}</p>}
                <p className='prompt'>Already decrypted? <span className='decrypt' onClick={() => {setIsEncrypt(true)}}>Encrypt</span></p>
            </form>}
        </div>
    </div>
  )
}
