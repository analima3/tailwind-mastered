import { Button } from '@/components/Button'
import { formatBytes } from '@/utils/format-bytes'
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { VariantProps, tv } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
    deleteButton: '',
  },
  variants: {
    state: {
      progress: {
        container: '',
      },
      complete: {
        container: 'border-violete-500',
      },
      error: {
        container: 'bg-error-25 border-error-300',
        icon: 'border-error-50 bg-error-100 text-error-600',
        deleteButton: 'text-error-700 hover:text-error-900',
      },
    },
  },
  defaultVariants: {
    state: 'progress',
  },
})

interface FileItemProps extends VariantProps<typeof fileItem> {
  file: File
}

export function FileItem({ state, file }: FileItemProps) {
  const { container, icon, deleteButton } = fileItem({ state })

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-col flex-1 items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-error-700 truncate block">
              Upload failed, please try again.
            </span>
            <span className="text-sm font-medium text-error-600">
              {file.name}
            </span>
          </div>

          <button className="text-sm font-semibold text-error-700 hover:text-error-900">
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-col flex-1 items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">
              {file.name}
            </span>
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {formatBytes(file.size)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
              <div
                className="h-2 rounded-full bg-violet-600 dark:bg-violet-300"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-400">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
