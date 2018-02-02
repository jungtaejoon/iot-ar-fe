export function contextConverter ({currentPage, perPage, filter, sortBy, sortDesc}) {
  const page = currentPage
  const size = perPage
  const sort = sortBy + ',' + (sortDesc ? 'desc' : 'asc')
  const obj = {
    page,
    size,
    sort
  }
  // eslint-disable-next-line
  return $.param(obj)
}
