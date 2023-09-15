'use client'

import {
  LifeBuoy,
  Settings,
  BarChart2,
  CheckSquare,
  Flag,
  Home,
  Layers,
  Users,
  Search,
  Menu,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { Input } from '../Form/Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible.Root className="flex flex-col gap-6 lg:h-screen border-b border-zinc-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 p-4 fixed top-0 right-0 left-0 data-[state=open]:bottom-0 z-20 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
      <div className="flex items-center justify-between">
        <Logo />

        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content asChild forceMount>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="sidebarContent"
              initial={{ y: '-6%', opacity: 0 }}
              exit={{ y: '-6%', opacity: 0, transition: { duration: 0.2 } }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex-1 flex flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
            >
              <Input.Root>
                <Input.Prefix>
                  <Search className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>

                <Input.Control placeholder="Search" />
              </Input.Root>

              <nav className="flex flex-col gap-0.5">
                <NavItem title="Home" icon={Home} />
                <NavItem title="Dashboard" icon={BarChart2} />
                <NavItem title="Projects" icon={Layers} />
                <NavItem title="Tasks" icon={CheckSquare} />
                <NavItem title="Reporting" icon={Flag} />
                <NavItem title="Users" icon={Users} />
              </nav>

              <div className="mt-auto flex flex-col gap-6">
                <nav className="space-y-0.5">
                  <NavItem title="Support" icon={LifeBuoy} />
                  <NavItem title="Settings" icon={Settings} />
                </nav>

                <UsedSpaceWidget />

                <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

                <Profile />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
