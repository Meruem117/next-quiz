export function jsonToQuery(obj: any) {
  if (obj) {
    let query = ""
    for (let i in obj) {
      let value = obj[i]
      if (Array.isArray(value)) {
        value = value.join(",")
      }
      query += `&${i}=${value}`
    }
    query = query.replace('&', '?')
    return query
  } else {
    return ""
  }
}