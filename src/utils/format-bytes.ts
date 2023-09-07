export function formatBytes(bytes: number) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

  const { value, unitIndex } = units.reduce(
    (current, _, index) => {
      if (current.value >= 1024 && index < units.length - 1) {
        return { value: current.value / 1024, unitIndex: current.unitIndex + 1 }
      }

      return current
    },
    { value: bytes, unitIndex: 0 },
  )

  return `${value.toFixed(1)} ${units[unitIndex]}`
}
