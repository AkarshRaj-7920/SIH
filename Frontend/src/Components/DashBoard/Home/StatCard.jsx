import React from 'react'
import { HiTrendingUp } from 'react-icons/hi'
import { MdGroups2 } from 'react-icons/md'

const StatCard = ({ label, value, change, detail, icon: Icon = MdGroups2, accent = 'green' }) => {
  const accentStyles = accent === 'amber'
    ? 'bg-amber-50 text-amber-700'
    : accent === 'blue'
      ? 'bg-sky-50 text-sky-700'
      : 'bg-emerald-50 text-emerald-700'

  return (
    <div
  className="
    group relative overflow-hidden
    rounded-2xl
    border border-[#BFE8E0]
    bg-gradient-to-br from-white via-[#F3FBFF] to-[#E8F8F3]
    p-5
    shadow-sm
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-xl
  "
>
  {/* Decorative Gradient */}
  <div
    className="
      pointer-events-none absolute
      -right-12 -top-12
      h-36 w-36
      rounded-full
      bg-gradient-to-br
      from-[#4BB8FA]/30
      to-[#32C48D]/20
      blur-xl
      transition-all duration-500
      group-hover:scale-150
    "
  />

  <div
    className="
      pointer-events-none absolute
      -bottom-16 -left-10
      h-32 w-32
      rounded-full
      bg-[#C4E2F5]/40
      blur-2xl
    "
  />

  {/* Top Section */}
  <div className="relative flex items-center justify-between">

    {/* Icon */}
    <div
      className="
        flex h-12 w-12
        items-center justify-center
        rounded-xl
        bg-gradient-to-br
        from-[#2C5EAD]
        to-[#1591DC]
        text-white
        shadow-md shadow-[#1591DC]/25
        transition-all duration-300
        group-hover:scale-105
        group-hover:shadow-lg
      "
    >
      <Icon size={22} />
    </div>

    {/* Growth Badge */}
    <span
      className="
        flex items-center gap-1.5
        rounded-full
        border border-emerald-200
        bg-emerald-50
        px-3 py-1.5
        text-xs font-bold
        text-emerald-600
      "
    >
      <HiTrendingUp size={15} />
      {change}
    </span>
  </div>

  {/* Content */}
  <div className="relative mt-6">

    {/* Label */}
    <p className="text-sm font-medium text-slate-500">
      {label}
    </p>

    {/* Value */}
    <h3
      className="
        mt-1
        text-3xl font-extrabold
        tracking-tight
        bg-gradient-to-r
        from-[#2C5EAD]
        via-[#1591DC]
        to-[#18A878]
        bg-clip-text
        text-transparent
      "
    >
      {value}
    </h3>

    {/* Detail */}
    <p className="mt-2 text-xs font-medium text-slate-400">
      {detail}
    </p>
  </div>

  {/* Bottom Accent */}
  <div
    className="
      absolute bottom-0 left-0
      h-1
      w-full
      bg-gradient-to-r
      from-[#2C5EAD]
      via-[#1591DC]
      to-[#32C48D]
      opacity-70
      transition-all duration-300
      group-hover:h-1.5
      group-hover:opacity-100
    "
  />
</div>
  )
}

export default StatCard