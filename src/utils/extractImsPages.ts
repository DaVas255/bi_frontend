const extractPages = (
  structureItems: any[]
): { href: string; title: string }[] => {
  let pages: { href: string; title: string }[] = []

  if (!Array.isArray(structureItems)) {
    return pages
  }

  for (const item of structureItems) {
    if (item && typeof item === 'object') {
      if (
        item.href &&
        typeof item.href === 'string' &&
        item.href !== '' &&
        item.title &&
        typeof item.title === 'string'
      ) {
        pages.push({ href: item.href, title: item.title })
      }

      if (Array.isArray(item.subitems) && item.subitems.length > 0) {
        pages = pages.concat(extractPages(item.subitems))
      }
    }
  }

  return pages
}

export default extractPages
