'use client'

import React, { useEffect, useRef, useState } from 'react'
import { minify } from 'csso'
import Notification from './Notification'
import { FaCopy, FaCheck, FaFileCode, FaTrash } from 'react-icons/fa6'

const nameInputCSS = 'cssInput'

function CSSForm() {
  const [state, setState] = useState({
    inputCSS: '',
    outputCSS: '',
    notificationMessage: '',
    isNotificationVisible: false,
    isFieldEmpty: true,
  })
  const inputCSSRef = useRef(null)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (state.isNotificationVisible) {
        setState(prevState => {
          return {
            ...prevState,
            isNotificationVisible: !prevState.isNotificationVisible,
            notificationMessage: '',
          }
        })
      }
    }, 3000)
    return () => {
      window.clearTimeout(timer)
    }
  }, [state.isNotificationVisible])

  const handleInputCSSChange = (e: any) => {
    e.preventDefault()
    setState(prevState => {
      return {
        ...prevState,
        inputCSS: e.target.value,
        isFieldEmpty: e.target.value === '',
      }
    })
  }

  const handleClearInputCSS = () => {
    setState(prevState => {
      return {
        ...prevState,
        isNotificationVisible: !prevState.isNotificationVisible,
        inputCSS: '',
        outputCSS: '',
        isFieldEmpty: !prevState.isFieldEmpty,
      }
    })

    if (inputCSSRef && inputCSSRef.current) inputCSSRef.current.value = ''
  }

  const handleMinifyCode = () => {
    const minifiedCss = minify(state.inputCSS).css
    setState(prevState => {
      return {
        ...prevState,
        outputCSS: minifiedCss,
        notificationMessage: 'The code has been minified',
      }
    })
  }

  const handleCopyCSS = () => {
    setState(prevState => {
      return {
        ...prevState,
        isNotificationVisible: !prevState.isNotificationVisible,
        notificationMessage: 'CSS has been copied!',
      }
    })
  }

  const handleNotification = () => {
    setState(prevState => {
      return {
        ...prevState,
        isNotificationVisible: !prevState.isNotificationVisible,
      }
    })
  }

  const {
    outputCSS,
    isFieldEmpty,
    isNotificationVisible,
    notificationMessage,
  } = state

  return (
    <>
      <form action="">
        <div className="py-2 flex gap-2 items-center">
          <button
            onClick={handleMinifyCode}
            type="button"
            className="button-submit"
          >
            <FaFileCode />
            <span>Minify CSS</span>
          </button>
        </div>
        <label
          htmlFor={nameInputCSS}
          className="inline-block mb-4 mt-8 text-zinc-100"
        >
          Input CSS
        </label>
        <div className="relative">
          <div className="absolute -top-[52px] right-1 flex items-center justify-end gap-2">
            {outputCSS.length !== 0 && (
              <button
                onClick={handleCopyCSS}
                type="button"
                className="p-3 rounded-sm transition-all bg-sky-800/25 text-stone-100 hover:bg-sky-700"
              >
                {isNotificationVisible ? <FaCheck /> : <FaCopy />}
              </button>
            )}
            {!isFieldEmpty && (
              <button
                onClick={handleClearInputCSS}
                type="button"
                className="p-3 rounded-sm transition-all bg-sky-800/25 text-stone-100 hover:bg-sky-700"
              >
                <FaTrash />
              </button>
            )}
          </div>
          <textarea
            className="w-full h-64 p-4 rounded-md border-2 border-sky-800 bg-slate-800 text-zinc-100 focus:outline-none focus:border-sky-700"
            name={nameInputCSS}
            id={nameInputCSS}
            ref={inputCSSRef}
            onChange={handleInputCSSChange}
          ></textarea>
        </div>
      </form>
      <p className="text-zinc-100 py-4">Output CSS</p>
      <div className="max-h-96 overflow-auto my-2 p-4 rounded-md bg-slate-700">
        {outputCSS}
      </div>
      {isNotificationVisible && notificationMessage.length > 0 && (
        <Notification
          handleClick={handleNotification}
          text={notificationMessage}
        />
      )}
    </>
  )
}

export default CSSForm
