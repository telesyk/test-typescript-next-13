'use client'

import React, { useEffect, useState } from 'react'
import { minify } from 'csso'
import { FaCopy, FaCheck, FaFileCode, FaTrash } from 'react-icons/fa6'
import Notification from './notifications/NotificationItem'
import TestCSSCode from './TestCSSCode'

const nameInputCSS = 'cssInput'

function MinifyCSSTool() {
  const [state, setState] = useState({
    inputCSS: '',
    outputCSS: '',
    notificationMessage: '',
    notificationType: '',
    isNotificationVisible: false,
    isFieldEmpty: true,
    isNotificationInClipbboard: false,
  })

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (state.isNotificationVisible) {
        setState(prevState => {
          return {
            ...prevState,
            isNotificationVisible: false,
            notificationMessage: '',
            notificationType: '',
            isNotificationInClipbboard: false,
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
        isNotificationInClipbboard: false,
      }
    })
  }

  const handleClearInputCSS = () => {
    setState(prevState => {
      return {
        ...prevState,
        inputCSS: '',
        outputCSS: '',
        isFieldEmpty: !prevState.isFieldEmpty,
        isNotificationInClipbboard: false,
        isNotificationVisible:
          prevState.outputCSS.length > 0 && prevState.inputCSS.length > 0,
        notificationMessage: 'The code has been cleared',
        notificationType: 'info',
      }
    })
  }

  const handleMinifyCode = () => {
    const minifiedCss = minify(state.inputCSS).css
    setState(prevState => {
      return {
        ...prevState,
        outputCSS: minifiedCss,
        isNotificationVisible: true,
        notificationMessage:
          minifiedCss.length === 0
            ? 'There is no any CSS to minimize'
            : 'CSS minimized',
        notificationType: minifiedCss.length === 0 ? 'warn' : 'success',
      }
    })
  }

  const handleCopyCSS = async () => {
    try {
      setState(prevState => {
        return {
          ...prevState,
          isNotificationVisible: true,
          notificationMessage: 'CSS copied!',
          notificationType: 'success',
          isNotificationInClipbboard: true,
        }
      })
      await navigator.clipboard.writeText(state.outputCSS)
    } catch (err) {
      console.error('Failed to copy: ', err)
      setState(prevState => {
        return {
          ...prevState,
          isNotificationVisible: true,
          notificationMessage: 'Failed to copy',
          notificationType: 'error',
          isNotificationInClipbboard: false,
        }
      })
    }
  }

  const handleNotification = () => {
    setState(prevState => {
      return {
        ...prevState,
        isNotificationVisible: !prevState.isNotificationVisible,
        isNotificationInClipbboard: false,
      }
    })
  }

  const {
    inputCSS,
    outputCSS,
    isFieldEmpty,
    isNotificationVisible,
    notificationMessage,
    notificationType,
    isNotificationInClipbboard,
  } = state

  return (
    <>
      <div className="flex justify-between mt-6 mb-2">
        <div className="py-2 flex gap-2 items-center">
          <button
            onClick={handleMinifyCode}
            type="button"
            className="flex items-center gap-2 px-6 py-3 rounded-sm transition-all bg-teal-800 text-stone-100 hover:bg-teal-700"
          >
            <FaFileCode />
            <span>Minify CSS</span>
          </button>
        </div>
        <div className="flex items-center justify-end gap-2">
          {outputCSS.length !== 0 && (
            <>
              {notificationMessage.length > 0 && isNotificationInClipbboard ? (
                <div className="p-3 rounded-sm transition-all bg-sky-800/25 text-stone-100 hover:bg-sky-700">
                  <FaCheck />
                </div>
              ) : (
                <button
                  onClick={handleCopyCSS}
                  type="button"
                  title="Copy code"
                  className="p-3 rounded-sm transition-all bg-sky-800/25 text-stone-100 hover:bg-sky-700"
                >
                  <FaCopy />
                </button>
              )}
            </>
          )}
          {!isFieldEmpty && (
            <button
              onClick={handleClearInputCSS}
              type="button"
              title="Clear code"
              className="p-3 rounded-sm transition-all bg-sky-800/25 text-stone-100 hover:bg-sky-700"
            >
              <FaTrash />
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap gap-3 justify-between items-start">
        <div className="w-full basis-full lg:basis-1/2">
          <form className="w-full">
            <label
              htmlFor={nameInputCSS}
              className="inline-block my-4 text-zinc-100"
            >
              Input CSS
            </label>
            <textarea
              className="w-full min-h-[360px] max-h-screen p-4 rounded-md border-2 border-sky-800 bg-slate-800 text-zinc-100 focus:outline-none focus:border-sky-700"
              name={nameInputCSS}
              id={nameInputCSS}
              onChange={handleInputCSSChange}
              value={inputCSS}
            ></textarea>
          </form>
        </div>
        <div className="w-full basis-full lg:basis-1/2">
          <p className="my-4 text-zinc-100">Output CSS</p>
          <div className="max-h-96 overflow-auto my-2 p-4 rounded-md bg-slate-700">
            {outputCSS}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 right-0 p-8 flex flex-col-reverse gap-4">
        {isNotificationVisible && notificationMessage.length > 0 && (
          <Notification
            id="1"
            handleClick={handleNotification}
            children={notificationMessage}
            options={{ type: notificationType }}
          />
        )}
      </div>

      <TestCSSCode />
    </>
  )
}

export default MinifyCSSTool
