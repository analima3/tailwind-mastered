import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-start gap-3">
      <img
        src="https://github.com/analima3.png"
        className="w-10 h-10 rounded-full"
        alt="user profile picture"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Ana Lima
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          af.rl@hotmail.com
        </span>
      </div>

      <Button type="button" variant="ghost" className="ml-auto">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </Button>
    </div>
  )
}
