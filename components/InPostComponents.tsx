import React, { ReactNode } from 'react'

interface CaptionProps {
  text: string
}

export const Caption: React.FC<CaptionProps> = ({ text }) => {
  return (
    <div className="mono flex flex-row items-start tracking-tighter">
      <span className="main-gradient inline-block bg-clip-text font-bold italic text-transparent">
        {'//'}&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      <span>{text}</span>
    </div>
  )
}

interface HighlightProps {
  text: string
}

export const Highlight: React.FC<HighlightProps> = ({ text }) => {
  return <span className="highlight main-gradient">{text}</span>
}

interface TabsProps {
  children: ReactNode
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  return (
    <div>
      <div>
        {/* Render a Tab for each child */}
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child) ? <div key={index}>{child.props.title}</div> : null
        )}
      </div>

      {React.Children.map(children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  )
}
