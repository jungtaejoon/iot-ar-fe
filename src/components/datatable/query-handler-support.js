import '../../vendors/jquery/dist/jquery.min'

export function queryConverter ({limit, offset, order, sort}) {
  const page = offset / limit
  const size = limit
  sort = sort + ',' + (order || 'asc')
  const obj = {
    page,
    size,
    sort
  }
  // eslint-disable-next-line
  return $.param(obj)
}
