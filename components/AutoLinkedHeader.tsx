'use client'

import { usePathname } from 'next/navigation'
import CustomLink from './Link'
import React from 'react'

interface AutoLinkedHeadingProps {
  tag: keyof JSX.IntrinsicElements
  id?: string
  children?: React.ReactNode
}

// This is necessary to extract text from the children of the node
// which actually looks like this:
// "children": [
//   "<CustomLink />",
//   "Introduction"
// ]
const getTextContent = (children: React.ReactNode): string => {
  let text = ''
  React.Children.forEach(children, (child) => {
    if (typeof child === 'string') {
      text += child
    }
  })
  return text
}

const AutoLinkedHeading: React.FC<AutoLinkedHeadingProps> = ({
  tag: Tag,
  id,
  children,
  ...props
}) => {
  const path = usePathname()
  const textContent = getTextContent(children)

  return (
    <Tag id={id} className="heading-anchor" {...props}>
      <CustomLink href={`${path}#${id}`} aria-label={`Link to ${id}`}>
        {textContent}
      </CustomLink>
    </Tag>
  )
}

export default AutoLinkedHeading
