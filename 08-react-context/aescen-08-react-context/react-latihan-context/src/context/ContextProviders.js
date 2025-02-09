import React from 'react'

export default function ContextProviders({ providers, children }) {
  const renderProvider = (providers, children) => {
    const [provider, ...theRestProviders] = providers

    if (provider) {
      return React.cloneElement(
        provider,
        null,
        renderProvider(theRestProviders, children)
      )
    }
    return children
  }

  return renderProvider(providers, children)
}
