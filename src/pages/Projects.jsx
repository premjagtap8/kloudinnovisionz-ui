import { useMemo, useState } from 'react'
import './Projects.css'
import desividesi from '../assets/desividesi (1).webp'
import paiwala from "../assets/Capture.webp"
import rishta from "../assets/rishta (2).webp"
import shine from "../assets/shine.webp"
import marinejewels from "../assets/marinejewels.webp"
import laiba from "../assets/laiba.webp"
import priya from "../assets/priya.webp"
import faith from "../assets/faith.webp"
import hospital from "../assets/hospital (1).webp"
import meraveg from "../assets/meraveg-project.webp"
import netlinks from "../assets/netlinks.webp"
import organic from "../assets/organic (2).webp"
import parkar from "../assets/parkar (2).webp"
import sanjivani from "../assets/sanjivani.webp"
import school from "../assets/school.webp"
import sigma from "../assets/sigma (2).webp"
import yaaymina from "../assets/yaaymina.webp"
import zaincomputers from "../assets/zaincomputers.webp"
import qrsproject from "../assets/qrsproject.webp"
import bollywoodfest from "../assets/bollywoodfest (1).webp"

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'static', label: 'Static Development' },
  { key: 'dynamic', label: 'Dynamic Development' },
  { key: 'ecommerce', label: 'Ecommerce Development' },
  { key: 'webapp', label: 'Web App Development' },
]

const CATEGORY_LABELS = {
  static: 'Static',
  dynamic: 'Dynamic',
  ecommerce: 'Ecommerce',
  webapp: 'Web App',
}

// A project with `image: null` shows a blue title card until you add a screenshot,
// e.g. import it above and set `image: hospitalShot`
const PROJECTS = [
  { id: 1, title: 'Desividesi', url: 'https://desividesi.in/', categories: ['ecommerce', 'dynamic'], image: desividesi },
  { id: 2, title: 'Hospital', url: 'https://aitibbiamumbai.in/site/login', categories: ['dynamic', 'webapp'], image: null },
  { id: 3, title: 'Paiwala Interiors', url: 'http://paiwalainteriors.com/', categories: ['dynamic', 'webapp'], image: paiwala },
  { id: 4, title: 'Rishta Mubarak', url: 'https://rishtamubarak.com/', categories: ['dynamic', 'webapp'], image: rishta },
  { id: 5, title: 'Shining Angels', url: 'https://shiningangels.org/', categories: ['dynamic', 'webapp'], image: shine },
  { id: 6, title: 'Marine Jewels', url: 'http://marinejewels.in/', categories: ['static'], image: marinejewels },
  { id: 7, title: 'Laiba Interiors', url: 'http://laibainteriors.com/', categories: ['static'], image: laiba },
  { id: 8, title: 'Priya Saini', url: 'http://priyasainiofficial.com/', categories: ['static'], image: priya },
  { id: 9, title: 'Faith Glass', url: 'http://faithglass.in/', categories: ['static'], image: faith },
  { id: 10, title: 'Hospital', url: 'https://kloudinnovisionz.com/hospital/', categories: ['dynamic', 'webapp'], image: hospital },
  { id: 11, title: 'Mera Veg', url: 'https://meraveg.com/', categories: ['static'], image: meraveg },
  { id: 12, title: 'Netlink India', url: 'http://www.netlinkindia.net/', categories: ['static'], image: netlinks },
  { id: 13, title: 'Organic Harvest', url: 'http://organicharvestarabia.com/', categories: ['ecommerce', 'dynamic'], image: organic },
  { id: 14, title: 'Parker Impex', url: 'http://www.parkarimpex.com', categories: ['static'], image: parkar },
  { id: 15, title: 'Sanjivani', url: 'https://sanjivani.org.in/', categories: ['dynamic', 'static'], image: sanjivani },
  { id: 16, title: 'School', url: 'https://kloudschools.in/site/login', categories: ['webapp', 'dynamic'], image: school },
  { id: 17, title: 'Sigma9', url: 'http://sigma9.in/vendor', categories: ['static'], image: sigma },
  { id: 18, title: 'Yaaymina', url: 'http://www.yaaymina.com/yaaymina_new/', categories: ['ecommerce', 'dynamic'], image: yaaymina },
  { id: 19, title: 'Zain Computers', url: 'http://zaincomputers.com/', categories: ['static'], image: zaincomputers },
  { id: 20, title: 'QRS', url: 'https://qrs.net.in/', categories: ['static'], image: qrsproject },
  { id: 21, title: 'Bollywoodfest', url: 'http://www.bollywoodfest.com/', categories: ['static'], image: bollywoodfest },
]

function ArrowIcon() {
  return (
    <svg
      className="projects-btn__icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')

  const counts = useMemo(() => {
    const result = { all: PROJECTS.length }
    FILTERS.slice(1).forEach(({ key }) => {
      result[key] = PROJECTS.filter((p) => p.categories.includes(key)).length
    })
    return result
  }, [])

  const visible = useMemo(
    () => (active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(active))),
    [active],
  )

  return (
    <section className="projects">
      <div className="projects__container">
        <header className="projects__header">
          <span className="projects__eyebrow">Our Work</span>
          <h1 className="projects__title">
            Our <span className="projects__accent">Projects</span>
          </h1>
        </header>

        {/* Filter buttons (aria-pressed), not tabs: there are no tab panels to switch between */}
        <div className="projects__filters" role="group" aria-label="Filter projects">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              aria-pressed={active === key}
              className="projects__filter"
              onClick={() => setActive(key)}
            >
              {label}
              <span className="projects__count">{counts[key]}</span>
            </button>
          ))}
        </div>

        {/* Announces the new result count to screen readers when a filter changes */}
        <p className="projects__sr" role="status" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
        </p>

        <div className="projects__grid" key={active}>
          {visible.map((project, index) => (
            <article
              className="project-card"
              key={project.id}
              style={{ animationDelay: `${Math.min(index, 11) * 45}ms` }}
            >
              <div className="project-card__media">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="project-card__placeholder" aria-hidden="true">
                    {project.title}
                  </div>
                )}
                <div className="project-card__tags">
                  {project.categories.map((c) => (
                    <span className="project-card__tag" key={c}>
                      {CATEGORY_LABELS[c]}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card__body">
                <h2 className="project-card__title">{project.title}</h2>
                <a
                  className="projects-btn"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live (opens in a new tab)`}
                >
                  View Live
                  <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
