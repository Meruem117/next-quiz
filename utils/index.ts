export function jsonToQuery(obj: any): string {
  if (obj) {
    let query = ''
    for (let i in obj) {
      let value = obj[i]
      if (Array.isArray(value)) {
        value = value.join(',')
      }
      query += `&${i}=${value}`
    }
    query = query.replace('&', '?')
    return query
  } else {
    return ''
  }
}

export function convertUsername(name: string): string {
  const arr = name.split(' ')
  if (arr.length > 1) {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
      res += arr[i].charAt(0).toUpperCase()
    }
    return res
  }
  return name.charAt(0).toUpperCase()
}