import { motion } from 'framer-motion'

type StatCardProps = {
  value: string
  label: string
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5 shadow-lg shadow-black/20"
    >
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-300">{label}</p>
    </motion.div>
  )
}

export default StatCard
