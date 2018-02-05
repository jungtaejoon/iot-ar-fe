export function contextConverter ({currentPage, perPage, filter, sortBy, sortDesc}, defaultSortBy) {
  const page = currentPage - 1
  const size = perPage
  const sort = (sortBy || defaultSortBy) + ',' + (sortDesc ? 'desc' : 'asc')
  const obj = {
    filter,
    page,
    size,
    sort
  }
  // eslint-disable-next-line
  return $.param(obj)
}
