import { Select } from '@/components/Form/Select'
import { FileInput } from '@/components/Form/FileInput'
import { Input } from '@/components/Form/Input'
import { SettingsTabs } from '@/components/SettingsTabs'
import { Bold, Italic, Link2, List, ListOrdered, Mail } from 'lucide-react'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { countries } from '@/utils/countries'
import { timezones } from '@/utils/timezone'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <SettingsTabs />

      <div className="flex flex-col">
        <div className="flex items-start lg:items-center justify-between flex-col lg:flex-row gap-4 border-b border-zinc-200 dark:border-zinc-700 pt-8 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 w-full flex flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm text-zinc-700 font-medium dark:text-zinc-300 hidden lg:block"
            >
              Name
            </label>

            <label
              htmlFor="firstName"
              className="text-sm text-zinc-700 font-medium dark:text-zinc-300 lg:sr-only"
            >
              First name
            </label>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Oliva" />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm text-zinc-700 font-medium dark:text-zinc-300 lg:sr-only"
                >
                  Last name
                </label>
                <Input.Root>
                  <Input.Control id="lastName" defaultValue="Rhye" />
                </Input.Root>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label
              htmlFor="email"
              className="text-sm text-zinc-700 font-medium dark:text-zinc-300"
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

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label
              htmlFor="photo"
              className="text-sm text-zinc-700 font-medium dark:text-zinc-300"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex flex-col lg:flex-row lg:items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control accept="image/png, image/jpeg" />
            </FileInput.Root>
          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label
              htmlFor="role"
              className="text-sm text-zinc-700 font-medium dark:text-zinc-300"
            >
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="Softawe Developer" />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label
              htmlFor="country"
              className="text-sm text-zinc-700 font-medium dark:text-zinc-300"
            >
              Country
            </label>

            <Select placeholder="Select a country">
              {Object.entries(countries).map(([code, title]) => (
                <SelectItem key={code} text={title} value={code} />
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label
              htmlFor="timezone"
              className="text-sm text-zinc-700 font-medium dark:text-zinc-300"
            >
              Timezone
            </label>

            <Select placeholder="Select a timezone">
              {timezones.map(({ abbr, text, value }) => (
                <SelectItem key={value} text={text} value={abbr} />
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label
              htmlFor="bio"
              className="text-sm text-zinc-700 font-medium dark:text-zinc-300"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3">
                <Select defaultValue="normal" placeholder="">
                  <SelectItem text="Normal text" value="normal" />
                  <SelectItem text="Markdown" value="md" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="w-4 h-4 text-zinc-400" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Italic className="w-4 h-4 text-zinc-400" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Link2 className="w-4 h-4 text-zinc-400" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <List className="w-4 h-4 text-zinc-400" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="w-4 h-4 text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label
              htmlFor="projects"
              className="text-sm text-zinc-700 font-medium dark:text-zinc-300"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control
                multiple
                accept="text/plain, application/pdf"
              />

              <FileInput.FileListPreview />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </>
  )
}
