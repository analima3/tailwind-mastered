'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type RootProps = ComponentProps<'div'>

interface FileInputContextType {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
  onDeleteFile: (fileName: string) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  const onFilesSelected = (files: File[], multiple: boolean) => {
    if (multiple) {
      setFiles((prevState) => [...prevState, ...files])

      return
    }

    setFiles(files)
  }

  function onDeleteFile(fileName: string) {
    const newFiles = files.filter((file) => file.name !== fileName)

    setFiles(newFiles)
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected, onDeleteFile }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
