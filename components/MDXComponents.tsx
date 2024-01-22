import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import AutoLinkedHeading from './AutoLinkedHeader'

// Expose a component globally by adding it here
export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  h1: (props) => <AutoLinkedHeading tag="h1" {...props} />,
  h2: (props) => <AutoLinkedHeading tag="h2" {...props} />,
  h3: (props) => <AutoLinkedHeading tag="h3" {...props} />,
  h4: (props) => <AutoLinkedHeading tag="h4" {...props} />,
  h5: (props) => <AutoLinkedHeading tag="h5" {...props} />,
  h6: (props) => <AutoLinkedHeading tag="h6" {...props} />,
  pre: Pre,
  BlogNewsletterForm,
}
