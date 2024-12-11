'use client'

// import { useRouter } from 'next/navigation'
// import { useState, useTransition } from 'react'
import { addEntry } from '@/app/_actions'
import { useRef, useState } from 'react'

const GuestbookEntryForm = () => {
  const [validationError, setValidationError] = useState('')
  const formRef = useRef(null)
  // const router = useRouter()
  // const [isPending, startTransition] = useTransition()
  // const [isFetching, setIsFetching] = useState(false)
  // const isMutating = isFetching || isPending

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   const form = event.currentTarget
  //   const formData = new FormData(form)
  //   const { name, message } = Object.fromEntries(formData)

  //   if (!name || !message) return

  //   setIsFetching(true)

  //   const { error } = await fetch('/api/guestbook', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, message }),
  //   })

  //   console.log(error)

  //   form.reset()
  //   setIsFetching(false)
  //   startTransition(() => {
  //     router.refresh()
  //   })
  // }

  const action = async (data) => {
    const result = await addEntry(data)
    if (result?.error) {
      setValidationError(result?.error)
    } else {
      setValidationError('')
      formRef.current.reset()
    }
  }

  return (
    <form
      className="flex max-w-sm flex-col gap-y-3 text-sm"
      // onSubmit={handleSubmit}
      action={action}
      ref={formRef}
    >
      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="rounded border bg-transparent px-3 py-1 dark:border-gray-600"
      />
      {validationError?.name && (
        <p className="text-sm text-red-400">
          {validationError?.name._errors.join(' ,')}
        </p>
      )}
      <input
        type="text"
        name="message"
        placeholder="Your message..."
        className="rounded border bg-transparent px-3 py-1 dark:border-gray-600"
      />
      {validationError?.message && (
        <p className="text-sm text-red-400">
          {validationError?.message._errors.join(' ,')}
        </p>
      )}
      <button
        type="submit"
        // disabled={isMutating}
        className="rounded bg-black px-3 py-1 text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        Add
      </button>
    </form>
  )
}

export default GuestbookEntryForm
