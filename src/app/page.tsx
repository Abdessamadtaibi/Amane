"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowRight,
  Camera,
  ChevronRight,
  Eye,
  Layers,
  LayoutDashboard,
  Lock,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { AnimatedGrid } from "@/components/landing/AnimatedGrid";
import { AnimatedNumber } from "@/components/landing/AnimatedNumber";
import { Reveal, RevealStagger, revealItemVariants } from "@/components/landing/Reveal";
import { Spotlight } from "@/components/landing/Spotlight";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function LandingPage() {
  return (
    <div className="bg-zinc-950 text-zinc-50 selection:bg-emerald-400/30 selection:text-emerald-100">
      <Navbar />
      <Hero />
      <Process />
      <AppSteps />
      <Features />
      <Stats />
      <FinalCTA />
      <Footer />
    </div>
  );
}

// =====================================================================
// NAVBAR — sticky, transparent au top, solide sur scroll
// =====================================================================
function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-zinc-950/60 border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9">
            <Image
              src="/logo.png"
              alt="AMANE logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-lg tracking-tight">AMANE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#problem" className="hover:text-zinc-100 transition-colors">Le défi</a>
          <a href="#process" className="hover:text-zinc-100 transition-colors">Comment ça marche</a>
          <a href="#features" className="hover:text-zinc-100 transition-colors">La plateforme</a>
        </nav>

        <Link
          href="/login"
          className="group relative inline-flex items-center gap-1.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-100 px-4 py-2 text-sm font-medium transition-colors"
        >
          Accéder au portail
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </header>
  );
}

// =====================================================================
// HERO — black, grid, spotlight, gradient text, mockup card animé
// =====================================================================
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/background.png)" }}
      />
      {/* Dark gradient overlay — opaque on left, transparent on right so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40" />

      <AnimatedGrid />
      <Spotlight color="rgba(16,185,129,0.18)" size={800} />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full"
      >
        <div className="max-w-4xl">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm px-3 py-1 text-xs text-zinc-400 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Plateforme de dépistage dermatologique assistée par IA
          </motion.div>

          {/* Headline — gradient + staggered reveal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
              className="block"
            >
              Le dépistage
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: easeOut }}
              className="block"
            >
              dermatologique
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease: easeOut }}
              className="block mt-2 bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent pb-2"
            >
              réinventé.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: easeOut }}
            className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed"
          >
            Une IA explicable. Un médecin spécialiste. Une chaîne humaine.
            Pour les zones les plus reculées du Maroc, là où chaque jour compte.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: easeOut }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/login"
              className="group relative inline-flex items-center gap-2 rounded-full bg-white text-zinc-950 px-6 py-3 font-medium hover:bg-zinc-100 transition-all hover:shadow-[0_8px_32px_rgba(255,255,255,0.15)]"
            >
              Accéder au portail
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/[0.03] px-6 py-3 text-zinc-300 font-medium transition-colors"
            >
              Découvrir le projet
              <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}

// =====================================================================
// PROCESS — 3 étapes (Relais → IA → Médecin)
// =====================================================================
function Process() {
  return (
    <section id="process" className="relative py-32 px-6 lg:px-10 max-w-7xl mx-auto">
      <Reveal>
        <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4">
          Comment ça marche
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">
          Trois rôles. Une seule chaîne. Zéro décision automatique.
        </h2>
        <p className="mt-6 text-lg text-zinc-400 max-w-2xl">
          L&apos;IA ne décide jamais seule. Elle propose. Le médecin tranche. Tout est tracé.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <ProcessStep
          n="01"
          icon={<Camera size={24} strokeWidth={1.8} />}
          title="Capture terrain"
          desc="Le relais (instituteur, infirmier, pharmacien) photographie la lésion via l'app mobile et remplit les symptômes."
          delay={0}
          color="emerald"
        />
        <ProcessStep
          n="02"
          icon={<Sparkles size={24} strokeWidth={1.8} />}
          title="Analyse IA explicable"
          desc="Deux IA combinées : ResNet18 spécialisé sur 10 000 lésions + Gemini multimodal. Heatmap Grad-CAM pour expliquer."
          delay={0.15}
          color="blue"
        />
        <ProcessStep
          n="03"
          icon={<Stethoscope size={24} strokeWidth={1.8} />}
          title="Validation médicale"
          desc="Un dermatologue distant examine le cas, voit la heatmap, et tranche. Sa décision est immutable et tracée."
          delay={0.3}
          color="violet"
        />
      </div>
    </section>
  );
}

function ProcessStep({
  n, icon, title, desc, delay, color,
}: {
  n: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
  color: "emerald" | "blue" | "violet";
}) {
  const colorClasses = {
    emerald: "from-emerald-500/20 to-emerald-700/10 text-emerald-400 border-emerald-500/20",
    blue: "from-blue-500/20 to-blue-700/10 text-blue-400 border-blue-500/20",
    violet: "from-violet-500/20 to-violet-700/10 text-violet-400 border-violet-500/20",
  }[color];

  return (
    <Reveal delay={delay}>
      <div className="relative">
        <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${colorClasses} border flex items-center justify-center mx-auto z-10`}>
          {icon}
        </div>
        <div className="text-center mt-6">
          <span className="text-xs text-zinc-500 font-mono tracking-wider">{n}</span>
          <h3 className="mt-2 text-xl font-semibold text-zinc-100">{title}</h3>
          <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{desc}</p>
        </div>
      </div>
    </Reveal>
  );
}

// =====================================================================
// APP STEPS — roadmap with 4 screens
// =====================================================================
const steps = [
  {
    n: "01",
    title: "Capture par le relais",
    desc: "L'instituteur ou l'infirmier photographie la lésion et renseigne les symptômes via l'application mobile. Le cas est immédiatement transmis.",
    img: "/1.png",
  },
  {
    n: "02",
    title: "Analyse IA double validation",
    desc: "ResNet18 et Gemini analysent la lésion en parallèle. Une heatmap Grad-CAM est générée pour expliquer visuellement la décision de l'IA.",
    img: "/2.png",
  },
  {
    n: "03",
    title: "Validation médicale à distance",
    desc: "Le dermatologue reçoit le cas dans sa file d'attente, examine l'image, la heatmap et l'analyse IA, puis prend une décision éclairée.",
    img: "/3.png",
  },
  {
    n: "04",
    title: "Suivi et traçabilité",
    desc: "Chaque décision est horodatée et enregistrée dans un journal immutable. Le patient reçoit une notification du résultat via l'application.",
    img: "/4.png",
  },
];

function AppSteps() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} id="app-steps" className="relative py-32 px-6 lg:px-10 max-w-7xl mx-auto overflow-hidden">
      <Reveal>
        <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4">
          L&apos;application
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">
          Du terrain au diagnostic, en quatre étapes.
        </h2>
        <p className="mt-6 text-lg text-zinc-400 max-w-2xl">
          Une chaîne continue, du relais jusqu&apos;au médecin spécialiste.
        </p>
      </Reveal>

      <div className="relative mt-20">
        <div className="space-y-24 md:space-y-32 relative">
          {/* Vertical line — aligned with timeline dots */}
          <motion.div
            className="absolute left-[18px] md:left-[-9px] top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-emerald-500/20 to-transparent hidden md:block origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />

          {steps.map((step, i) => (
            <StepCard key={step.n} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof steps[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <div ref={ref}>
      <motion.div
        className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Timeline dot with pulse */}
        <motion.div
          className="absolute left-[18px] md:left-[-9px] top-0 w-[18px] h-[18px] hidden md:block"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.15 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-emerald-500"
            animate={inView ? { scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] } : {}}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 rounded-full bg-emerald-500 border-[3px] border-zinc-950" />
        </motion.div>

        {/* Left: step info */}
        <motion.div
          className={`pl-14 md:pl-10 ${index % 2 === 0 ? "md:order-2" : ""}`}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <motion.span
              className="text-emerald-400/60 text-sm font-mono font-semibold tracking-wider"
              initial={{ opacity: 0, y: -8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {step.n}
            </motion.span>
            <motion.div
              className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
          <motion.h3
            className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {step.title}
          </motion.h3>
          <motion.p
            className="mt-4 text-zinc-400 leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {step.desc}
          </motion.p>
        </motion.div>

        {/* Right: screen image */}
        <motion.div
          className={`relative ${index % 2 === 0 ? "md:order-1" : ""}`}
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="relative mx-auto max-w-[180px] md:max-w-[200px]">
            <motion.div
              className="absolute -inset-4 bg-emerald-500/5 rounded-[32px] blur-2xl"
              animate={inView ? { opacity: [0.3, 0.7, 0.3] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              animate={inView ? { y: [0, -6, 0] } : {}}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={step.img}
                alt={step.title}
                width={320}
                height={640}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// =====================================================================
// FEATURES — split layout: mockup + feature grid
// =====================================================================
function Features() {
  return (
    <section id="features" className="relative py-32 px-6 lg:px-10 max-w-7xl mx-auto">
      <Reveal>
        <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4">
          La plateforme
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">
          Conçue pour la confiance.
        </h2>
        <p className="mt-6 text-lg text-zinc-400 max-w-2xl">
          Chaque détail technique est au service d&apos;un seul objectif : permettre à
          un médecin distant de prendre une décision juste, rapidement.
        </p>
      </Reveal>

      <div className="mt-16 grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        {/* Left: dashboard mockup */}
        <Reveal className="lg:col-span-2 lg:sticky lg:top-32">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-sm overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-rose-500/60" />
                  <div className="w-2 h-2 rounded-full bg-amber-500/60" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                </div>
                <span className="flex-1 text-center text-[10px] text-zinc-500 font-mono tracking-tight">
                  amane.ma / medecin
                </span>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-900/40 to-rose-900/40 flex items-center justify-center text-[10px] text-zinc-400">
                    IA
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-zinc-100">Mélanome suspect</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 font-semibold">CRITIQUE</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full w-[84%] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
                      </div>
                      <span className="text-[10px] text-zinc-500 tabular-nums">84%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-900/40 to-violet-900/40 flex items-center justify-center text-[10px] text-zinc-400">
                    IA
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-zinc-100">Naevus bénin</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full w-[96%] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
                      </div>
                      <span className="text-[10px] text-zinc-500 tabular-nums">96%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-900/40 to-orange-900/40 flex items-center justify-center text-[10px] text-zinc-400">
                    IA
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-zinc-100">Carcinome basocellulaire</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full w-[72%] bg-gradient-to-r from-amber-400 to-orange-400 rounded-full" />
                      </div>
                      <span className="text-[10px] text-zinc-500 tabular-nums">72%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: features list */}
        <div className="lg:col-span-3 space-y-4">
          <FeatureCard
            icon={<Eye />}
            title="Heatmap explicable"
            desc="Chaque diagnostic IA est accompagné d'une visualisation Grad-CAM superposable à l'image. Le médecin voit exactement où l'IA a regardé et peut comparer en un clic."
            highlight
          />
          <FeatureCard
            icon={<Layers />}
            title="Double IA — ResNet18 + Gemini"
            desc="Un réseau de neurones spécialisé (10 000 lésions entraînées) croise son analyse avec Gemini multimodal. En cas de désaccord, le médecin reçoit une alerte explicite."
          />
          <FeatureCard
            icon={<Lock />}
            title="Anonymisation totale des données"
            desc="Aucun nom de patient stocké. Un identifiant unique anonyme par cas. Conformité RGPD et loi 09-08 sur la protection des données au Maroc."
          />
          <FeatureCard
            icon={<Workflow />}
            title="Audit immutable et traçabilité"
            desc="Chaque action — upload, analyse IA, validation médecin — est enregistrée dans un journal append-only horodaté. Traçabilité médico-légale complète."
          />
          <FeatureCard
            icon={<Zap />}
            title="Transmission en temps réel"
            desc="Le médecin reçoit le cas dès l'upload du relais sur le terrain. Polling automatique, latence inférieure à 3 secondes. Notification immédiate."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon, title, desc, highlight = false,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  highlight?: boolean;
}) {
  return (
    <Reveal>
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={`group relative rounded-2xl border p-5 transition-all ${
          highlight
            ? "border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.04] to-white/[0.02]"
            : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20"
        }`}
      >
        {highlight && (
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        )}
        <div className="relative flex items-start gap-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
            highlight ? "bg-emerald-500/15 text-emerald-400" : "bg-white/5 text-zinc-300"
          }`}>
            {icon}
          </div>
          <div>
            <h3 className="text-base font-semibold text-zinc-100">{title}</h3>
            <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">{desc}</p>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

// =====================================================================
// STATS — projet
// =====================================================================
function Stats() {
  return (
    <section className="relative py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto relative rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/[0.05] via-zinc-900/80 to-blue-500/[0.05] backdrop-blur-sm overflow-hidden p-12 lg:p-20">
        <div className="absolute inset-0 pointer-events-none">
          <AnimatedGrid gap={24} dotColor="rgba(16,185,129,0.05)" />
        </div>
        <div className="relative">
          <Reveal>
            <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4">
              Ce qu&apos;AMANE apporte
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">
              Des chiffres. Pas des promesses.
            </h2>
          </Reveal>

          <RevealStagger className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatBig value={87} suffix="%" label="Concordance IA / médecin" />
            <StatBig value={1200} suffix="+" label="Consultations traitées" />
            <StatBig value={2.8} suffix="s" label="Latence d'analyse" decimals={1} />
            <StatBig value={12} suffix=" / 12" label="Régions du Maroc couvertes" />
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}

function StatBig({
  value, suffix, label, decimals = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  return (
    <motion.div variants={revealItemVariants}>
      <div className="text-5xl md:text-6xl font-semibold tracking-tight bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
        <AnimatedNumber value={value} suffix={suffix} decimals={decimals} duration={2} />
      </div>
      <p className="mt-3 text-sm text-zinc-400">{label}</p>
    </motion.div>
  );
}

// =====================================================================
// FINAL CTA — accès portail
// =====================================================================
function FinalCTA() {
  return (
    <section className="relative py-32 px-6 lg:px-10 max-w-7xl mx-auto">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Prêt à examiner les{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              cas du jour ?
            </span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400">
            Identifiez-vous selon votre profil pour accéder à votre portail dédié.
          </p>
        </div>
      </Reveal>

      <RevealStagger className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        <CTACard
          icon={<Stethoscope size={28} className="text-emerald-400" />}
          title="Espace médecin"
          desc="File d'attente intelligente, workspace de validation, heatmap superposable, second avis Gemini."
          href="/login?role=medecin"
          accent="emerald"
        />
        <CTACard
          icon={<LayoutDashboard size={28} className="text-violet-400" />}
          title="Espace administrateur"
          desc="Vue d'ensemble, statistiques temps réel, carte du Maroc, journal d'audit complet."
          href="/login?role=admin"
          accent="violet"
        />
      </RevealStagger>
    </section>
  );
}

function CTACard({
  icon, title, desc, href, accent,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
  accent: "emerald" | "violet";
}) {
  const ringClass = accent === "emerald"
    ? "hover:ring-emerald-500/30"
    : "hover:ring-violet-500/30";
  const glowClass = accent === "emerald"
    ? "from-emerald-500/10"
    : "from-violet-500/10";

  return (
    <motion.div variants={revealItemVariants}>
      <Link
        href={href}
        className={`group relative block rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] p-7 transition-all hover:ring-2 ${ringClass} overflow-hidden`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${glowClass} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
        <div className="relative">
          <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-zinc-100">{title}</h3>
          <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{desc}</p>
          <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-200 group-hover:text-white">
            Se connecter
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// =====================================================================
// FOOTER — minimal
// =====================================================================
function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="relative w-7 h-7">
            <Image
              src="/logo.png"
              alt="AMANE logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-medium text-sm">AMANE</span>
        </div>
        <p className="text-xs text-zinc-500">
          Plateforme de dépistage dermatologique &middot; Maroc
        </p>
      </div>
    </footer>
  );
}
