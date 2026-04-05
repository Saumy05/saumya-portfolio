import { motion } from 'framer-motion'

type SectionTitleProps = {
  eyebrow?: string
  title: string
  subtitle?: string
}

function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="mb-10"
    >
      {eyebrow && (
        <p className="mb-3 text-sm uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-slate-300">{subtitle}</p>}
    </motion.div>
  )
}

export default SectionTitle
