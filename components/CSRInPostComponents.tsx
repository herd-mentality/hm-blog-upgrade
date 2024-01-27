'use client'

import React, { useState, ReactElement } from 'react'

interface TabsProps {
  children: ReactElement<TabProps>[] | ReactElement<TabProps>
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const childArray = React.Children.toArray(children) as ReactElement<TabProps>[]
  const defaultActiveTab = childArray[0]?.props.label || ''

  const [activeTab, setActiveTab] = useState(defaultActiveTab)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
    e.preventDefault()
    setActiveTab(newActiveTab)
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="flex border-b border-gray-300">
        {childArray.map((child) => (
          <button
            key={child.props['data-label']}
            className={`${
              activeTab === child.props['data-label'] ? 'border-b-2 border-purple-500' : ''
            } flex-1 py-2 font-medium text-gray-700`}
            onClick={(e) => handleClick(e, child.props['data-label'])}
          >
            {child.props['data-label']}
          </button>
        ))}
      </div>
      <div className="py-4">
        {childArray.map((child) => {
          if (child.props['data-label'] === activeTab) {
            return <div key={child.props['data-label']}>{child.props.children}</div>
          }
          return null
        })}
      </div>
    </div>
  )
}

interface TabProps {
  label: string
  children: React.ReactNode
}

const Tab: React.FC<TabProps> = ({ label, children }) => {
  return (
    <div data-label={label} className="hidden">
      {children}
    </div>
  )
}
export { Tabs, Tab }
