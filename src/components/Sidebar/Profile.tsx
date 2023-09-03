import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-start gap-3">
      <img
        src="https://github.com/analima3.png"
        className="w-10 h-10 rounded-full"
        alt="user profile picture"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Ana Lima</span>
        <span className="truncate text-sm text-zinc-500">
          af.rl@hotmail.com
        </span>
      </div>

      <button type="button" className="ml-auto p-2 rounded-md hover:bg-zinc-50">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  )
}
