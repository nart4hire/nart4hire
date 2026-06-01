const hasVisited = (): boolean => {
  if (localStorage.getItem('hasVisited') === 'true') {
    return true
  }
  return false
}

const setVisited = (): void => {
  localStorage.setItem('hasVisited', 'true')
}

export {
  hasVisited,
  setVisited,
}
