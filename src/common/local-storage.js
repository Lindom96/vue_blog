function saveToLocal(key, value) {
  let vuecms = window.localStorage.__vuecms__
  if (!vuecms) {
    vuecms = {'username':'admin123','password':'123456'}
  } else {
    vuecms = JSON.parse(vuecms)
  }
  vuecms[key] = value
  window.localStorage.__vuecms__ = JSON.stringify(vuecms)
}

function loadFromLocal(key, def) {
  let vuecms = window.localStorage.__vuecms__
  if (!vuecms) {
    return def
  }
  vuecms = JSON.parse(vuecms)
  if (!vuecms) {
    return def
  }
  let result = vuecms[key]
  return result || def
}

export { saveToLocal, loadFromLocal }