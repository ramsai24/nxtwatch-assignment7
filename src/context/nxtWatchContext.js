import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  themeChange: () => {},
  selectionLeftMenuNav: '',
  updateLeftMenuNav: () => {},
})

export default NxtWatchContext
