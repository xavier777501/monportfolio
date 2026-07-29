export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-bg">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-faint) 1px, transparent 1px), linear-gradient(90deg, var(--color-faint) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,157,61,0.08), transparent 70%)',
        }}
      />
    </div>
  )
}
