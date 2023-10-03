import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  themeChange: () => {},
  selectionLeftMenuNav: '',
  updateLeftMenuNav: () => {},
  savedVideosList: '',
  updateSavedVideosList: () => {},
  pathList: [],
  home: false,
  gaming: false,
  trending: false,
  saved: false,
  makeRed: '',

  updateMakeRed: () => {},
  update: () => {},
})

export default NxtWatchContext
