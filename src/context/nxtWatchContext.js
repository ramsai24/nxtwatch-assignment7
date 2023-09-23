import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  themeChange: () => {},
  selectionLeftMenuNav: '',
  updateLeftMenuNav: () => {},
  savedVideosList: '',
  updateSavedVideosList: () => {},
})

export default NxtWatchContext
