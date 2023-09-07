import { FileInput } from '@/components/Form/FileInput'
import { Input } from '@/components/Form/Input'
import { SettingsTabs } from '@/components/SettingsTabs'
import { Mail } from 'lucide-react'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pt-8 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-4 py-2 rounded-lg text-sm font-semibold shadow-sm text-zinc-700 border border-zinc-300 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-semibold shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 w-full flex flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid gap-3 grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm text-zinc-700 font-medium"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Oliva" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Rhye" />
              </Input.Root>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="email"
              className="text-sm text-zinc-700 font-medium"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="w-5 h-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control id="email" defaultValue="af.rl@hotmail.com" />
            </Input.Root>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="photo"
              className="text-sm text-zinc-700 font-medium"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="role" className="text-sm text-zinc-700 font-medium">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="Softawe Developer" />
            </Input.Root>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="country"
              className="text-sm text-zinc-700 font-medium"
            >
              Country
            </label>
            <div>Select</div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="timezone"
              className="text-sm text-zinc-700 font-medium"
            >
              Timezone
            </label>
            <div>Select</div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="bio" className="text-sm text-zinc-700 font-medium">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div>Editor</div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="projects"
              className="text-sm text-zinc-700 font-medium"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control multiple />

              <FileInput.FileListPreview />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="px-4 py-2 rounded-lg text-sm font-semibold shadow-sm text-zinc-700 border border-zinc-300 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-semibold shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
