export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
      <div className="space-y-1">
        <p className="text-violet-700 font-medium text-sm/5">Used space</p>
        <p className="text-violet-500 text-sm/5">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-violet-100">
        <div className="h-2 w-4/5 rounded-full bg-violet-600"></div>
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-semibold text-violet-500 hover:text-violet-700"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-semibold text-violet-700 hover:text-violet-900"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
