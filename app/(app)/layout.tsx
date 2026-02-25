import { MobileFrame } from '@/components/mobile-frame'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MobileFrame>{children}</MobileFrame>
}