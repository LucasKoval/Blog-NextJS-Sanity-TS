import Image from 'next/image'

export default function StudioLogo(props: any) {
  const { renderDefault, title } = props

  return (
    <div className="flex items-center">
      <Image
        src="/nextjs-logo.webp"
        alt="logo"
        height={50}
        width={50}
        className="rounded-full object-cover"
      />

      <>{props.renderDefault(props)}</>
    </div>
  )
}
