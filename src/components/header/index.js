import { E } from "@/library"

export const header = (...child) => {
  const header = E({
    tag: 'header',
    className: 'w-full bg-purple-900 mb-4 flex items-center justify-between px-3 py-3',
    child
  })
  return header
}