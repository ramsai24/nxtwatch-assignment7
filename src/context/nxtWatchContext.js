import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  themeChange: () => {},
})

export default NxtWatchContext
