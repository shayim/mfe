import { mount } from 'marketing/marketing'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default () => {
  const ref = useRef()
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname)
          history.push(nextPathname)
      }
    })

    history.listen(onParentNavigate)
  })

  return <div ref={ref}></div>
}
