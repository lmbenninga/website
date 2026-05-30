// app.jsx — Social Limits landing page

const { useState, useEffect, useRef } = React;

// ─────────────────────────────────────────────────────────────
// Brand mark
// ─────────────────────────────────────────────────────────────
function BrandMark({ color = '#fff', logoSize = 22 }) {
  return (
    <span className="brand-mark" style={{ color }}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: logoSize + 8, height: logoSize + 8,
        borderRadius: 8,
        background: '#fff',
        boxShadow: '0 4px 12px -4px rgba(0,0,80,0.25)',
        flexShrink: 0,
      }}>
        <img
          src={(typeof window !== 'undefined' && window.__resources && window.__resources.brandLogo) || 'assets/social-limits-logo.png'}
          alt="Social Limits"
          style={{ maxWidth: '85%', maxHeight: '85%', width: 'auto', height: 'auto', objectFit: 'contain', display:'block' }}
        />
      </span>
      <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: '-0.01em' }}>Social Limits</span>
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// Nav
// ─────────────────────────────────────────────────────────────
const NAV_LINKS = [
  ['How it works', '#how'],
  ['Why it works', '#science'],
  ['Our story',    '/our-story'],
  ['Reviews',      '#reviews'],
  ['Partners',     '#partners'],
];

function Nav() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    document.body.dataset.navOpen = open ? 'true' : 'false';
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    const t = setTimeout(() => firstLinkRef.current && firstLinkRef.current.focus(), 50);
    return () => {
      window.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setTimeout(() => toggleRef.current && toggleRef.current.focus(), 0);
  };

  return (
    <header className="nav">
      <div className="nav-inner glass-dark" style={{ background:'rgba(10,10,40,0.32)' }}>
        <BrandMark/>
        <div className="nav-links">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} className="nav-link" href={href}>{label}</a>
          ))}
        </div>
        <a className="nav-cta" href="#download">Get the app</a>
        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-drawer"
          onClick={() => setOpen(v => !v)}
        >
          <span className="nav-toggle-icon"><span/></span>
        </button>
      </div>

      <div
        id="nav-drawer"
        className="nav-drawer"
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="nav-drawer-links">
          {NAV_LINKS.map(([label, href], i) => (
            <a
              key={href}
              ref={i === 0 ? firstLinkRef : null}
              className="nav-link"
              href={href}
              onClick={close}
            >
              {label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="#download" onClick={close}>Get the app</a>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero-bg"/>
      <div className="shell" style={{ paddingTop: 'clamp(96px, 13vh, 132px)', paddingBottom: 'clamp(20px, 3.5vh, 48px)', display:'grid', gridTemplateColumns:'1fr', gap: 32, position:'relative' }}>
        <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1.1fr) minmax(0,0.9fr)', gap: 'clamp(20px, 3vw, 40px)', alignItems:'center' }} className="hero-grid">
          <div>
            <span className="chip chip-dark" style={{ marginBottom: 'clamp(10px, 1.5vh, 20px)' }}>
              <span className="dot" style={{ background:'#7DFFA8' }}/>
              v3.1.2 · Liquid Glass UI now live
            </span>

            <h1 className="h-display" style={{ marginTop: 0, marginBottom: 'clamp(10px, 1.5vh, 20px)', fontSize: 'clamp(40px, min(9vw, 11vh), 100px)' }}>
              Move more.<br/>
              <span className="gradient-text">Scroll less.</span>
            </h1>

            <p className="body-l" style={{ maxWidth: 520, color: 'rgba(255,255,255,0.82)', marginBottom: 'clamp(14px, 2.5vh, 28px)' }}>
              Your social apps stay locked every morning. They unlock when you hit your step goal.
              A simple behavioural switch that puts movement before the feed.
            </p>

            <div style={{ display:'flex', gap: 14, alignItems:'center', flexWrap:'wrap' }}>
              <a href="https://apps.apple.com/au/app/social-limits-screen-time-app/id6471964510" target="_blank" rel="noopener" className="btn btn-glass">
                <IconApple size={20}/>
                Download on the App Store
              </a>
              <a href="#how" className="btn" style={{ color:'rgba(255,255,255,0.85)' }}>
                See how it works <IconArrowRight size={16}/>
              </a>
            </div>

            <div className="hero-stats" style={{ marginTop: 'clamp(14px, 2.5vh, 36px)', display:'flex', gap: 'clamp(20px, 4vw, 36px)', alignItems:'center', flexWrap:'wrap' }}>
              <div>
                <div style={{ fontSize: 'clamp(18px, 2.5vh, 28px)', fontWeight: 800, letterSpacing:'-0.025em' }}>20k+</div>
                <div style={{ fontSize: 12, color:'rgba(255,255,255,0.6)', fontWeight: 500, marginTop: 2 }}>Users</div>
              </div>
              <div className="hero-stats-sep" style={{ width: 1, height: 32, background:'rgba(255,255,255,0.18)' }}/>
              <div>
                <div style={{ fontSize: 'clamp(18px, 2.5vh, 28px)', fontWeight: 800, letterSpacing:'-0.025em' }}>4.5<span style={{ opacity:.5, fontSize: 'clamp(14px, 2vh, 20px)' }}>/5</span></div>
                <div style={{ fontSize: 12, color:'rgba(255,255,255,0.6)', fontWeight: 500, marginTop: 2 }}>App Store ratings</div>
              </div>
              <div className="hero-stats-sep" style={{ width: 1, height: 32, background:'rgba(255,255,255,0.18)' }}/>
              <div>
                <div style={{ fontSize: 'clamp(18px, 2.5vh, 28px)', fontWeight: 800, letterSpacing:'-0.025em' }}>2.4B+</div>
                <div style={{ fontSize: 12, color:'rgba(255,255,255,0.6)', fontWeight: 500, marginTop: 2 }}>Steps tracked</div>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div style={{ display:'flex', justifyContent:'center', position:'relative' }}>
            <div style={{
              position:'absolute', inset: '-40px',
              background: 'radial-gradient(closest-side, rgba(123,91,255,0.5), transparent 70%)',
              filter: 'blur(40px)',
            }}/>
            <img
              src={(typeof window !== 'undefined' && window.__resources && window.__resources.heroPhone) || 'assets/hero-phone.png'}
              alt="Social Limits app — step ring and blocked apps"
              className="float hero-phone-img"
              style={{
                position: 'relative',
                display: 'block',
                width: 'auto',
                height: 'auto',
                maxWidth: 312,
                maxHeight: 'calc(100dvh - 172px)',
                filter: 'drop-shadow(0 50px 80px rgba(0,0,80,0.45)) drop-shadow(0 20px 40px rgba(0,0,120,0.35))',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { order: -1; }
          .hero-phone-img { max-width: 200px !important; max-height: 32vh !important; }
          .hero-stats { display: none !important; }
        }
        @media (max-width: 560px) {
          .hero-stats-sep { display: none; }
          .hero-stats { gap: 24px 28px; }
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Problem strip — quantified
// ─────────────────────────────────────────────────────────────
function Problem() {
  const stats = [
    { v: '6 hrs', l: 'average daily screen time for a young adult', s: 'That\'s ~15 years over a lifetime' },
    { v: '2×', l: 'higher anxiety & depression risk at ≥4 hrs/day', s: 'Morning phone use is the primary trigger' },
    { v: '20%', l: 'less daily movement in high-screen students', s: 'Cutting 1 hr → 3× more daily movement' },
  ];
  return (
    <section style={{ background: '#08081F', color:'#fff' }} data-screen-label="02 Problem">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow" style={{ color:'#7B5BFF' }}>The problem</span>
          <h2 className="h-1">Screen-heavy mornings are reshaping how we feel all day.</h2>
        </div>

        <div className="grid-3">
          {stats.map((s, i) => (
            <div key={i} style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 28, padding: '36px 28px',
            }}>
              <div style={{ fontSize: 80, fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1,
                background: 'linear-gradient(180deg,#fff 0%, #7B5BFF 120%)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>{s.v}</div>
              <div style={{ marginTop: 18, fontSize: 17, fontWeight: 500, lineHeight: 1.4 }}>{s.l}</div>
              <div style={{ marginTop: 14, fontSize: 13, color:'rgba(255,255,255,0.55)' }}>{s.s}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, fontSize: 12, color:'rgba(255,255,255,0.45)' }}>
          Sources: Data Reportal Global Digital Report 2024 · CDC NCHS Data Brief 513 (2024) · Pedersen et al., JAMA Pediatrics (2022)
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// How It Works — 4 steps
// ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { n: '01', t: 'Wake', Icon: IconMoon, d: 'You set the list — Instagram, TikTok, X, Reddit, whatever pulls you in.' },
    { n: '02', t: 'Move', Icon: IconShoe, d: 'Pick a daily step goal that feels right.' },
    { n: '03', t: 'Unlock', Icon: IconBolt, d: 'Hit your goal and the apps unlock for the rest of the day.' },
    { n: '04', t: 'Nudge', Icon: IconBell, d: 'A gentle reminder if you go quiet by mid-morning. No guilt, no streaks-or-die.' },
  ];

  return (
    <section id="how" style={{ background:'#fff' }} data-screen-label="03 How it works">
      <div className="shell">
        <div className="section-head">
          <span className="chip">How it works</span>
          <h2 className="h-1">One switch in your morning. The rest takes care of itself.</h2>
          <p className="body-l" style={{ color:'var(--rich-grey)', maxWidth: 640 }}>
            Social Limits doesn't try to shame you off your phone. It replaces the morning dopamine
            hit with a small, satisfying physical one — and gets out of the way.
          </p>
        </div>

        <div className="grid-4">
          {steps.map((s) => (
            <article key={s.n} className="card how-card" style={{ padding: 'clamp(20px, 4vw, 28px)', display:'flex', flexDirection:'column', gap: 20, minHeight: 280 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: 'var(--faded-blue)', color: 'var(--electric-blue)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  <s.Icon size={22}/>
                </div>
                <span className="mono" style={{ fontSize: 12, fontWeight: 600, color: 'var(--rich-grey)' }}>{s.n}</span>
              </div>
              <div>
                <h3 className="h-3" style={{ margin: '0 0 10px' }}>{s.t}</h3>
                <p className="body" style={{ color:'var(--rich-grey)', margin: 0 }}>{s.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .how-card { min-height: auto !important; }
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Product showcase — split visual / copy / second phone
// ─────────────────────────────────────────────────────────────
function Showcase() {
  const phoneRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmall = () => window.innerWidth < 900;

    const update = () => {
      const sec = sectionRef.current;
      const phone = phoneRef.current;
      if (!sec || !phone) return;
      if (prefersReducedMotion || isSmall()) {
        phone.style.transform = '';
        return;
      }
      const rect = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = vh + rect.height;
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / total));
      const rotate = (progress - 0.5) * 16;
      const ty = (0.5 - progress) * 60;
      const scale = 1 + Math.sin(progress * Math.PI) * 0.04;
      phone.style.transform = `translateY(${ty}px) rotate(${rotate}deg) scale(${scale})`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section ref={sectionRef} className="blue-surface" data-screen-label="04 Showcase">
      <div className="shell" style={{ display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap: 'clamp(40px, 8vw, 80px)', alignItems:'center' }} >
        <div>
          <span className="chip chip-dark" style={{ marginBottom: 24 }}>
            <span className="dot" style={{ background:'#7DFFA8' }}/>
            The unlock moment
          </span>
          <h2 className="h-1" style={{ marginBottom: 24 }}>
            The reward<br/>comes <span className="gradient-text">after</span> the movement.
          </h2>
          <p className="body-l" style={{ color:'rgba(255,255,255,0.82)', marginBottom: 36, maxWidth: 520 }}>
            Most habit apps stack friction on the wrong side. Social Limits flips it: pleasure comes
            second, after a small physical act.
          </p>

          <ul style={{ listStyle:'none', padding:0, margin:0, display:'grid', gap: 16 }}>
            {[
              ['Apple Health integration', 'Steps sync automatically — no extra device, no setup.'],
              ['You pick the apps', 'Lock anything from the App Store. Keep messengers open.'],
              ['Streaks that respect rest days', 'Build momentum without punishing a slow day.'],
            ].map(([t, d], i) => (
              <li key={i} style={{ display:'flex', gap: 14 }}>
                <div style={{
                  flexShrink: 0, width: 28, height: 28, borderRadius: 999,
                  background:'rgba(255,255,255,0.18)', border:'1px solid rgba(255,255,255,0.3)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  <IconCheck size={14} stroke="#fff" sw={2.4}/>
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{t}</div>
                  <div style={{ fontSize: 14, color:'rgba(255,255,255,0.72)', marginTop: 2 }}>{d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display:'flex', justifyContent:'center', perspective: '1200px' }}>
          <div
            ref={phoneRef}
            className="phone"
            style={{
              width: 'min(290px, 76vw)',
              transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
              willChange: 'transform',
            }}
          >
            <div className="phone-screen">
              <PhoneUnlocked/>
              <div className="phone-notch"/>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .blue-surface .shell { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Benefits — 6 outcomes
// ─────────────────────────────────────────────────────────────
function Benefits() {
  const items = [
    { Icon: IconMoon,    t: 'Better sleep',     d: 'Break the late-night scroll cycle by changing the morning that feeds it.' },
    { Icon: IconBolt,    t: 'Sharper focus',    d: 'Mornings without infinite feeds leave more bandwidth for the work that matters.' },
    { Icon: IconHeart,   t: 'Calmer mood',      d: 'Light movement before stimulation is one of the most reliable mood boosters in the literature.' },
    { Icon: IconShield,  t: 'Less anxiety',     d: 'Less morning social comparison, less FOMO bleeding into the rest of the day.' },
    { Icon: IconSpark,   t: 'More productivity',d: 'Start with intention. Start with steps. Decide what you scroll, not the other way around.' },
    { Icon: IconRoutine, t: 'Stronger habits',  d: 'A daily checkpoint your body can feel — not an abstract screen-time number you ignore.' },
  ];
  return (
    <section style={{ background:'var(--pale-grey)' }} data-screen-label="05 Benefits">
      <div className="shell">
        <div className="section-head">
          <span className="chip">Benefits</span>
          <h2 className="h-1">Six things people notice within a week.</h2>
        </div>
        <div className="grid-3">
          {items.map((b, i) => (
            <div key={i} className="card" style={{ padding: 32 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background:'var(--electric-blue)', color:'#fff',
                display:'flex', alignItems:'center', justifyContent:'center',
                marginBottom: 22,
              }}>
                <b.Icon size={20} sw={1.8}/>
              </div>
              <h3 className="h-3" style={{ margin:'0 0 10px' }}>{b.t}</h3>
              <p className="body" style={{ color:'var(--rich-grey)', margin: 0 }}>{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Science / Evidence
// ─────────────────────────────────────────────────────────────
function Science() {
  const studies = [
    {
      n: '01',
      t: 'Limiting social media reduces loneliness and depression',
      d: 'A randomised controlled trial found that restricting social media to 30 minutes a day significantly reduced loneliness and depressive symptoms in university students after three weeks.',
      cite: 'Hunt et al., Journal of Social and Clinical Psychology, 2018',
    },
    {
      n: '02',
      t: 'Regular physical activity significantly lowers depression risk',
      d: 'A systematic review found regular physical activity is significantly associated with lower depression risk — with benefits observed even below the recommended 150 minutes per week.',
      cite: 'Mammen & Faulkner, American Journal of Preventive Medicine, 2013',
    },
    {
      n: '03',
      t: 'Scrolling correlates with anxiety in young people',
      d: 'Higher social media scrolling and posting among adolescents is associated with increased anxiety and behavioural problems, reinforcing the value of early behavioural intervention.',
      cite: 'Choi, Christiaans & Duerden, 2025',
    },
  ];
  return (
    <section id="science" style={{ background:'#fff' }} data-screen-label="06 Science">
      <div className="shell">
        <div className="section-head">
          <span className="chip">Why it works</span>
          <h2 className="h-1">Two behaviours. Both well-studied.</h2>
          <p className="body-l" style={{ color:'var(--rich-grey)', maxWidth: 640 }}>
            Social Limits isn't a wellness vibe — it stacks two of the most-validated behavioural levers
            in the literature. Move more. Scroll less. The pairing is the product.
          </p>
        </div>

        <div style={{ display:'grid', gap: 0, borderTop:'1px solid rgba(8,8,31,0.08)' }}>
          {studies.map((s, i) => (
            <div key={i} style={{
              display:'grid', gridTemplateColumns:'80px 1fr 280px', gap: 32,
              padding: '36px 0', borderBottom:'1px solid rgba(8,8,31,0.08)',
              alignItems:'baseline',
            }} className="study-row">
              <div className="mono" style={{ fontSize: 14, fontWeight: 600, color:'var(--electric-blue)' }}>{s.n}</div>
              <div>
                <h3 className="h-3" style={{ margin:'0 0 12px', maxWidth: 560 }}>{s.t}</h3>
                <p className="body" style={{ color:'var(--rich-grey)', margin: 0, maxWidth: 620 }}>{s.d}</p>
              </div>
              <div className="body-s" style={{ color:'var(--rich-grey)', textAlign:'right' }}>{s.cite}</div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 44, padding: '24px 28px', borderRadius: 20,
          background:'var(--faded-blue)', color:'var(--electric-blue-deep)',
          display:'flex', gap: 20, alignItems:'center', flexWrap:'wrap', justifyContent:'space-between',
        }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing:'.08em', textTransform:'uppercase', opacity:.7 }}>The intervention window</div>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing:'-0.015em', marginTop: 6 }}>
              75% of mental health conditions emerge before age 25.
            </div>
          </div>
          <div className="body-s" style={{ opacity:.7 }}>Orygen, 2024</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .study-row { grid-template-columns: 60px 1fr !important; }
          .study-row > div:last-child { grid-column: 2; text-align: left !important; margin-top: 8px; }
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Reviews
// ─────────────────────────────────────────────────────────────
function Reviews() {
  const reviews = [
    { q: 'I no longer start my day scrolling through social media. The shift in my mornings is real.', a: 'Mari Mahima', r: 5 },
    { q: "It's become part of my daily routine. Hitting the step goal genuinely feels like the better start.", a: 'Miarad97', r: 5 },
    { q: 'It helps break patterns and habits that aren\'t serving you. Simple idea, well executed.', a: 'Tczbbrcb', r: 4 },
  ];

  return (
    <section id="reviews" style={{ background:'var(--pale-grey)' }} data-screen-label="07 Reviews">
      <div className="shell">
        <div className="section-head" style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end', maxWidth:'none', flexWrap:'wrap', gap: 20 }}>
          <div style={{ display:'flex', flexDirection:'column', gap: 20, maxWidth: 640 }}>
            <span className="chip">Reviews</span>
            <h2 className="h-1">Real people. Real mornings.</h2>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap: 14 }}>
            <div style={{ display:'flex', gap: 2, color:'#FFB800' }}>
              {[0,1,2,3,4].map(i => <IconStar key={i} size={20}/>)}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>4.5 / 5</div>
              <div className="body-s" style={{ color:'var(--rich-grey)' }}>40 reviews · App Store</div>
            </div>
          </div>
        </div>

        <div className="grid-3">
          {reviews.map((r, i) => (
            <div key={i} className="card" style={{ padding: 32, display:'flex', flexDirection:'column', gap: 20 }}>
              <IconQuote size={32} stroke="var(--electric-blue)" fill="var(--electric-blue)"/>
              <p className="body-l" style={{ margin: 0, fontWeight: 500, color:'var(--ink)', lineHeight: 1.45 }}>
                {r.q}
              </p>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop: 'auto', paddingTop: 12, borderTop:'1px solid rgba(8,8,31,0.06)' }}>
                <span style={{ fontWeight: 600, fontSize: 14 }}>{r.a}</span>
                <div style={{ display:'flex', gap: 2, color:'#FFB800' }}>
                  {Array.from({length: r.r}).map((_, i) => <IconStar key={i} size={14}/>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Partners — logo wall
// ─────────────────────────────────────────────────────────────
function Partners() {
  return (
    <section id="partners" style={{ background:'#fff' }} data-screen-label="08 Partners">
      <div className="shell">
        <div className="section-head" style={{ alignItems:'center', textAlign:'center', margin:'0 auto var(--s-7)' }}>
          <span className="chip">Partnerships</span>
          <h2 className="h-1" style={{ maxWidth: 820 }}>A few of the brands we've worked with.</h2>
        </div>

        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24,
          borderRadius: 32, padding: 8, background:'var(--pale-grey)',
        }} className="logo-wall">
          <a href="/hoka" style={{ textDecoration: 'none' }}><LogoCell><HokaLogo/></LogoCell></a>
          <LogoCell><GarminLogo/></LogoCell>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .logo-wall { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function LogoCell({ children }) {
  return (
    <div style={{
      background:'#fff', borderRadius: 26,
      minHeight: 140,
      display:'flex', alignItems:'center', justifyContent:'center',
      padding: 32,
      boxShadow:'inset 0 0 0 1px rgba(8,8,31,0.04)',
    }}>
      {children}
    </div>
  );
}

function HokaLogo() {
  return (
    <div style={{
      fontFamily: 'Poppins, system-ui, sans-serif',
      fontWeight: 900,
      fontSize: 'clamp(22px, 2.4vw, 32px)',
      letterSpacing: '-0.04em',
      color: 'var(--rich-grey)',
      lineHeight: 1,
      display: 'inline-flex',
      alignItems: 'baseline',
      fontStyle: 'italic',
      opacity: 0.75,
    }}>
      HOKA
      <span style={{
        display: 'inline-block',
        width: 5, height: 5,
        borderRadius: 999,
        background: 'currentColor',
        marginLeft: 3,
        transform: 'translateY(-2px)',
      }}/>
    </div>
  );
}

function GarminLogo() {
  return (
    <div style={{
      display:'inline-flex', alignItems:'center', gap: 10,
      color: 'var(--rich-grey)', opacity: 0.75,
    }}>
      <svg viewBox="0 0 64 56" width="22" height="auto" style={{ flexShrink: 0 }} aria-hidden>
        <path d="M32 4 L60 52 L4 52 Z" fill="currentColor"/>
        <path d="M32 22 L46 46 L18 46 Z" fill="#fff"/>
      </svg>
      <span style={{
        fontFamily: 'Poppins, system-ui, sans-serif',
        fontWeight: 700,
        fontSize: 'clamp(18px, 2vw, 26px)',
        letterSpacing: '0.06em',
        lineHeight: 1,
      }}>GARMIN</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Download CTA
// ─────────────────────────────────────────────────────────────
function DownloadCTA() {
  return (
    <section id="download" className="blue-surface" data-screen-label="09 Download" style={{ padding: '120px 0' }}>
      {/* Big background type */}
      <div style={{ position:'absolute', inset: 0, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', pointerEvents:'none' }}>
        <div style={{
          fontSize: 'clamp(140px, 22vw, 360px)', fontWeight: 900, letterSpacing:'-0.05em',
          color:'rgba(255,255,255,0.04)', lineHeight: 0.9, whiteSpace:'nowrap',
        }}>MOVE MORE</div>
      </div>

      <div className="shell" style={{ position:'relative', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', gap: 32 }}>
        <span className="chip chip-dark"><span className="dot" style={{ background:'#7DFFA8' }}/> Free to try</span>
        <h2 className="h-display" style={{ margin: 0, maxWidth: 1000 }}>
          Tomorrow morning,<br/><span className="gradient-text">earn your feed.</span>
        </h2>
        <p className="body-l" style={{ color:'rgba(255,255,255,0.82)', maxWidth: 560, margin: 0 }}>
          Download Social Limits, set a step goal, and lock the apps that hijack your morning.
          The next 24 hours will already feel different.
        </p>
        <div style={{ display:'flex', gap: 14, flexWrap:'wrap', justifyContent:'center' }}>
          <a href="https://apps.apple.com/au/app/social-limits-screen-time-app/id6471964510" target="_blank" rel="noopener" className="btn btn-glass" style={{ padding: '18px 32px', fontSize: 16 }}>
            <IconApple size={22}/>
            Download on the App Store
          </a>
          <a href="#how" className="btn" style={{ padding: '18px 28px', fontSize: 16, color:'rgba(255,255,255,0.85)' }}>
            How it works <IconArrowRight size={16}/>
          </a>
        </div>
        <div style={{ fontSize: 13, color:'rgba(255,255,255,0.55)' }}>
          iPhone & Apple Vision · Free with optional Pro · No ads, ever
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background:'#08081F', color:'#fff', padding: '60px 0 40px' }}>
      <div className="shell">
        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap: 40, paddingBottom: 40, borderBottom:'1px solid rgba(255,255,255,0.1)' }} className="footer-grid">
          <div>
            <BrandMark/>
            <p className="body-s" style={{ color:'rgba(255,255,255,0.55)', maxWidth: 320, marginTop: 18 }}>
              Move more. Scroll less. Social Limits links social media access to physical steps —
              a small daily switch that rewires the morning.
            </p>
          </div>

          <FooterCol title="Product" links={[
            ['How it works', '#how'],
            ['Why it works', '#science'],
            ['Reviews', '#reviews'],
            ['Partners', '#partners'],
          ]}/>
          <FooterCol title="Company" links={[
            ['Our story', '/our-story'],
            ['Case Study', '/hoca'],
            ['Contact', 'mailto:sociallimitsb@gmail.com'],
            ['Twitter / X', 'https://twitter.com/sociallimits'],
          ]}/>
          <FooterCol title="Legal" links={[
            ['Privacy Policy', '/privacy-policy'],
            ['Terms (Apple EULA)', '#'],
          ]}/>
        </div>

        <div style={{ paddingTop: 24, display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap: 16, fontSize: 12, color:'rgba(255,255,255,0.45)' }}>
          <div>© 2025 Social Limits Pty Ltd. Made with movement.</div>
          <div>Available on App Store & Google Play</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.55)', marginBottom: 16 }}>{title}</div>
      <ul style={{ listStyle:'none', padding: 0, margin: 0, display:'flex', flexDirection:'column', gap: 10 }}>
        {links.map(([t, href]) => (
          <li key={t}><a href={href} className="body-s" style={{ color:'rgba(255,255,255,0.85)' }}>{t}</a></li>
        ))}
      </ul>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// App
// ─────────────────────────────────────────────────────────────
function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Problem/>
      <HowItWorks/>
      <Showcase/>
      <Science/>
      <Reviews/>
      <Partners/>
      <DownloadCTA/>
      <Footer/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
