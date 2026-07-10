export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05060a]">
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] animate-blob rounded-full bg-violet-600/30 blur-[120px]" />
      <div className="animation-delay-2000 absolute top-1/3 -right-32 h-[28rem] w-[28rem] animate-blob rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="animation-delay-4000 absolute bottom-0 left-1/4 h-[26rem] w-[26rem] animate-blob rounded-full bg-fuchsia-600/20 blur-[120px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}
