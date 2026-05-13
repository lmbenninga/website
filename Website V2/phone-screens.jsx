// phone-screens.jsx — App mockup screens for Social Limits

const phoneStyles = {
  screen: {
    width: '100%', height: '100%',
    background: 'linear-gradient(180deg, #F4F5FA 0%, #EAEBF3 100%)',
    color: '#0A0A1F',
    fontFamily: '-apple-system, "SF Pro", "Poppins", system-ui',
    padding: '54px 18px 0',
    position: 'relative',
    overflow: 'hidden',
  },
  statusRow: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    fontSize: 13, fontWeight: 600, padding: '0 12px',
    position: 'absolute', top: 18, left: 0, right: 0,
  },
};

// — Home screen: step progress + locked apps
function PhoneHome() {
  return (
    <div style={phoneStyles.screen}>
      <div style={phoneStyles.statusRow}>
        <span>9:41</span>
        <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
          <svg width="16" height="10" viewBox="0 0 18 12"><rect x="0" y="7" width="3" height="5" rx=".5" fill="#0A0A1F"/><rect x="5" y="4" width="3" height="8" rx=".5" fill="#0A0A1F"/><rect x="10" y="1" width="3" height="11" rx=".5" fill="#0A0A1F"/></svg>
          <svg width="22" height="10" viewBox="0 0 24 12"><rect x="0.5" y="0.5" width="20" height="11" rx="3" stroke="#0A0A1F" strokeOpacity=".4" fill="none"/><rect x="2" y="2" width="13" height="8" rx="1.5" fill="#0A0A1F"/></svg>
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 14 }}>
        <div>
          <div style={{ fontSize: 12, opacity: .55, fontWeight: 500 }}>Tuesday, May 13</div>
          <div style={{ fontSize: 18, fontWeight: 700, marginTop: 2, letterSpacing: '-0.02em' }}>Good morning, Lino</div>
        </div>
        <div style={{ width: 30, height: 30, borderRadius: 999, background: 'linear-gradient(135deg,#7B5BFF,#0000FF)' }}/>
      </div>

      {/* Big progress card */}
      <div style={{
        marginTop: 16,
        background: '#fff',
        borderRadius: 26,
        padding: '20px 18px 22px',
        boxShadow: '0 1px 0 rgba(255,255,255,.9) inset, 0 14px 32px -16px rgba(0,0,80,.18)',
      }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: '#0000FF' }}>Today's goal</span>
          <span style={{ fontSize: 11, fontWeight: 600, color: '#58595B' }}>6,000 steps</span>
        </div>
        <div style={{ display:'flex', justifyContent:'center', margin: '14px 0 4px' }}>
          <ProgressRing value={0.62}/>
        </div>
        <div style={{ textAlign:'center' }}>
          <div style={{ fontSize: 12, color:'#58595B', fontWeight: 500 }}>2,310 steps to go</div>
        </div>
      </div>

      {/* Locked apps */}
      <div style={{
        marginTop: 14,
        background: '#fff',
        borderRadius: 22,
        padding: '14px 14px 12px',
        boxShadow: '0 1px 0 rgba(255,255,255,.9) inset, 0 10px 26px -16px rgba(0,0,80,.16)',
      }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding: '0 4px 10px' }}>
          <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
            <div style={{ width: 22, height: 22, borderRadius: 8, background:'#0000FF', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <svg width="11" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700 }}>Locked until goal</span>
          </div>
          <span style={{ fontSize: 11, color:'#58595B', fontWeight: 600 }}>4 apps</span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 10 }}>
          {[
            { name:'Instagram', bg:'linear-gradient(135deg,#FFC371 0%,#FF5F6D 40%,#7367F0 100%)', glyph:'IG' },
            { name:'TikTok', bg:'#000', glyph:'TT' },
            { name:'X', bg:'#000', glyph:'X' },
            { name:'Reddit', bg:'#FF4500', glyph:'R' },
          ].map((a,i)=>(
            <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 4, opacity:.85 }}>
              <div style={{
                position:'relative', width: 50, height: 50, borderRadius: 14,
                background: a.bg, color:'#fff',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize: 16, fontWeight: 800, letterSpacing: '-.02em',
                filter: 'saturate(.4) brightness(.85)',
              }}>
                {a.glyph}
                <div style={{
                  position:'absolute', inset:0, borderRadius: 14,
                  background: 'rgba(10,10,20,.45)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>
                </div>
              </div>
              <span style={{ fontSize: 9.5, fontWeight: 500, color:'#0A0A1F' }}>{a.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Streak chip */}
      <div style={{ marginTop: 12, display:'flex', gap: 8 }}>
        <div style={{ flex:1, background:'#fff', borderRadius: 16, padding: '10px 12px', display:'flex', alignItems:'center', gap: 10, boxShadow:'0 6px 20px -10px rgba(0,0,80,.15)' }}>
          <div style={{ width: 26, height: 26, borderRadius: 999, background:'#CCCCFF', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <span style={{ fontSize: 13 }}>🔥</span>
          </div>
          <div style={{ lineHeight: 1.15 }}>
            <div style={{ fontSize: 13, fontWeight: 700 }}>12-day streak</div>
            <div style={{ fontSize: 10, color:'#58595B' }}>Keep moving</div>
          </div>
        </div>
        <div style={{ flex:1, background:'#0000FF', borderRadius: 16, padding: '10px 12px', color:'#fff', display:'flex', alignItems:'center', gap: 10 }}>
          <div style={{ width: 26, height: 26, borderRadius: 999, background:'rgba(255,255,255,.18)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>
          </div>
          <div style={{ lineHeight: 1.15 }}>
            <div style={{ fontSize: 13, fontWeight: 700 }}>+18 today</div>
            <div style={{ fontSize: 10, opacity:.8 }}>vs. yesterday</div>
          </div>
        </div>
      </div>

      {/* Home indicator */}
      <div style={{ position:'absolute', bottom: 8, left: '50%', transform:'translateX(-50%)', width: 120, height: 4, borderRadius:999, background:'#0A0A1F', opacity:.8 }}/>
    </div>
  );
}

// — Unlocked screen: goal hit
function PhoneUnlocked() {
  return (
    <div style={{ ...phoneStyles.screen, background:'linear-gradient(180deg,#0000FF 0%,#5A4BFF 70%,#7B5BFF 100%)', color:'#fff' }}>
      <div style={{ ...phoneStyles.statusRow, color:'#fff' }}>
        <span>10:24</span>
        <span style={{ display:'inline-flex', gap: 4, alignItems:'center' }}>
          <svg width="16" height="10" viewBox="0 0 18 12"><rect x="0" y="7" width="3" height="5" rx=".5" fill="#fff"/><rect x="5" y="4" width="3" height="8" rx=".5" fill="#fff"/><rect x="10" y="1" width="3" height="11" rx=".5" fill="#fff"/></svg>
          <svg width="22" height="10" viewBox="0 0 24 12"><rect x="0.5" y="0.5" width="20" height="11" rx="3" stroke="#fff" strokeOpacity=".5" fill="none"/><rect x="2" y="2" width="16" height="8" rx="1.5" fill="#fff"/></svg>
        </span>
      </div>

      {/* Decorative blur ball */}
      <div style={{ position:'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: 999, background:'radial-gradient(circle, rgba(255,255,255,.4), transparent 60%)', filter:'blur(20px)' }}/>

      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', height:'calc(100% - 60px)', justifyContent:'center', position:'relative' }}>
        <div style={{
          width: 96, height: 96, borderRadius: 999,
          background: 'linear-gradient(135deg, rgba(255,255,255,.35), rgba(255,255,255,.08))',
          backdropFilter:'blur(14px)', WebkitBackdropFilter:'blur(14px)',
          border: '1px solid rgba(255,255,255,.45)',
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:'inset 0 1px 0 rgba(255,255,255,.6), 0 10px 30px rgba(0,0,80,.4)',
          marginBottom: 22,
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5 9 17.5 20 6.5"/></svg>
        </div>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing:'.18em', textTransform:'uppercase', opacity: .85 }}>Goal unlocked</div>
        <div style={{ fontSize: 30, fontWeight: 800, marginTop: 8, letterSpacing:'-0.025em', lineHeight: 1 }}>6,247 steps</div>
        <div style={{ fontSize: 14, opacity:.85, marginTop: 10, maxWidth: 220 }}>Nice. Your apps are unlocked for the day. Enjoy, then close it.</div>

        <div style={{
          marginTop: 28,
          padding:'12px 22px', borderRadius: 999,
          background:'linear-gradient(135deg, rgba(255,255,255,.3), rgba(255,255,255,.08))',
          border:'1px solid rgba(255,255,255,.45)',
          backdropFilter:'blur(14px)', WebkitBackdropFilter:'blur(14px)',
          boxShadow:'inset 0 1px 0 rgba(255,255,255,.6)',
          fontSize: 13, fontWeight: 600,
        }}>
          Open social apps  →
        </div>
      </div>

      <div style={{ position:'absolute', bottom: 8, left: '50%', transform:'translateX(-50%)', width: 120, height: 4, borderRadius:999, background:'#fff', opacity:.7 }}/>
    </div>
  );
}

function ProgressRing({ value = 0.6, size = 168, stroke = 14 }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - value);
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <defs>
        <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0000FF"/>
          <stop offset="100%" stopColor="#7B5BFF"/>
        </linearGradient>
      </defs>
      <circle cx={size/2} cy={size/2} r={r} stroke="#F1F2F2" strokeWidth={stroke} fill="none"/>
      <circle cx={size/2} cy={size/2} r={r} stroke="url(#ring-grad)" strokeWidth={stroke} fill="none"
        strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round"/>
      <g style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}>
        <text x="50%" y="46%" textAnchor="middle" fill="#0A0A1F" fontSize="36" fontWeight="800" fontFamily="Poppins" letterSpacing="-0.04em">3,690</text>
        <text x="50%" y="62%" textAnchor="middle" fill="#58595B" fontSize="11" fontWeight="500" fontFamily="Poppins">steps today</text>
      </g>
    </svg>
  );
}

Object.assign(window, { PhoneHome, PhoneUnlocked });
