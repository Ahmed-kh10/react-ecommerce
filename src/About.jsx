import './About.css';

const categories = [
  {
    id: 1,
    label: "Men's Clothes",
    tag: 'New Season',
    emoji: '👔',
    count: '240+ Items',
    desc: 'Sharp fits, premium fabrics — from casual tees to formal suits.',
    accent: 'cat-men',
  },
  {
    id: 2,
    label: "Women's Clothes",
    tag: 'Trending',
    emoji: '👗',
    count: '380+ Items',
    desc: 'Elegant, bold, and effortlessly stylish — for every occasion.',
    accent: 'cat-women',
  },
  {
    id: 3,
    label: 'Shoes',
    tag: 'Best Sellers',
    emoji: '👟',
    count: '150+ Items',
    desc: 'Step up your game — sneakers, heels, loafers and more.',
    accent: 'cat-shoes',
  },
];

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '770+', label: 'Products' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Support' },
];

function About() {
  return (
    <div className="about">
      {/* Background layers */}
      <div className="about-bg" aria-hidden="true">
        <div className="bg-orb orb-a" />
        <div className="bg-orb orb-b" />
        <div className="bg-orb orb-c" />
        <div className="bg-dots" />
      </div>

      {/* ── Hero Section ── */}
      <section className="about-hero">
        <div className="hero-eyebrow">
          <span className="eyebrow-line" />
          Our Story
          <span className="eyebrow-line" />
        </div>

        <h1 className="hero-title">
          Fashion That <br />
          <span className="highlight">Speaks for You</span>
        </h1>

        <p className="hero-sub">
          Ellol Store was built on a single idea — everyone deserves to look
          extraordinary without breaking the bank. We bring you curated
          collections across menswear, womenswear, and footwear, delivered
          straight to your door.
        </p>

        {/* Stats row */}
        <div className="stats-row">
          {stats.map((s, i) => (
            <div
              className="stat-item"
              key={i}
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider" aria-hidden="true">
        <span>What We Offer</span>
      </div>

      {/* ── Categories Section ── */}
      <section className="categories-section">
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <div
              className={`cat-card ${cat.accent}`}
              key={cat.id}
              style={{ animationDelay: `${0.6 + i * 0.15}s` }}
            >
              {/* Top row */}
              <div className="cat-top">
                <span className="cat-tag">{cat.tag}</span>
                <span className="cat-emoji" aria-hidden="true">
                  {cat.emoji}
                </span>
              </div>

              {/* Content */}
              <div className="cat-body">
                <h3>{cat.label}</h3>
                <p>{cat.desc}</p>
              </div>

              {/* Footer */}
              <div className="cat-footer">
                <span className="cat-count">{cat.count}</span>
                <button className="cat-btn" type="button">
                  Shop Now <span className="arrow">→</span>
                </button>
              </div>

              {/* Decorative number */}
              <span className="cat-num" aria-hidden="true">
                0{cat.id}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mission Strip ── */}
      <section className="mission-strip">
        <div className="mission-inner">
          <div className="mission-icon" aria-hidden="true">
            ✦
          </div>
          <p>
            We're committed to <strong>sustainable sourcing</strong>, fast
            delivery, and a shopping experience that feels personal — because
            every customer matters.
          </p>
          <div className="mission-icon" aria-hidden="true">
            ✦
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
