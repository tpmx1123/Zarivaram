/** Single source of truth for in-page anchors (Home). Use `/#` so links work from /store too. */
export const PRIMARY_NAV = [
  { href: '/#collections', label: 'Collections' },
  { href: '/#mayabazar', label: 'Mayabazar Events', navLabel: 'Mayabazar' },
  { href: '/#diaries', label: 'Diaries of Abhilasha', navLabel: 'Diaries' },
  { href: '/#about', label: 'Heritage & Craft', navLabel: 'About' },
]

export const STORE_ROUTE = {
  to: '/store',
  label: 'Store',
}

export const REQUEST_VIEWING = {
  href: '/#private-viewing',
  label: 'Request Viewing',
}

export function navLinkText(link) {
  return link.navLabel ?? link.label
}
