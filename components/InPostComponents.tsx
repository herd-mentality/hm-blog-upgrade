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
