import { useMemo, useState } from 'react'
import './Projects.css'
import dcaipl from "../assets/dcaipl.png"
import paiwalagroup from '../assets/paiwalagroup.png'
import sahanahomes from '../assets/sahanahomes.png'
import inventors from '../assets/pawpaa.png'
import caudatetech from '../assets/caudatetech.png'
import thediethubbysayantani from '../assets/thediethubbysayantani.png'
import asadecor from '../assets/asadecor.png'
import dolcevitaevents from '../assets/dolcevitaevents.png'
import navhealthclinic from '../assets/navhealthclinicc.png'
import acewfm from '../assets/acewfm.png'
import bookyourresearch from '../assets/bookyourresearch.png'
import pawpaa from '../assets/pawpaa.png'
import lifecaretrust from '../assets/lifecaretrust.png'
import biohackingindia from '../assets/biohackingindia.png'
import msvmarine from '../assets/msvmarines.png'
import paiwala from "../assets/Capture.webp"
import mpowerminds from '../assets/mpowerminds.png'
import urbanacres from '../assets/urbanacres.png'
import communicure from '../assets/communicure.png'
import dockair from '../assets/dockair.png'
import zaidinfotech from '../assets/zaidinfotech.png'

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

// Drop each screenshot into src/assets/ with the same file name as its import
// (e.g. sahanahomes.webp) and it will load.
const PROJECTS = [
  { id: 1, title: 'DCAIPL', url: 'https://www.dcaipl.com/', categories: ['static'], image: dcaipl },
  { id: 2, title: 'Paiwala Group', url: 'https://www.paiwalagroup.com/', categories: ['static'], image: paiwalagroup },
  { id: 3, title: 'Sahana Homes', url: 'https://www.sahanahomes.in/', categories: ['static'], image: sahanahomes },
  { id: 4, title: 'Inventors', url: 'https://www.inventors.co.in/', categories: ['static'], image: inventors },
  { id: 5, title: 'Caudate Tech', url: 'https://www.caudatetech.com/', categories: ['static'], image: caudatetech },
  { id: 6, title: 'The Diet Hub by Sayantani', url: 'https://www.thediethubbysayantani.in/', categories: ['static'], image: thediethubbysayantani },
  { id: 7, title: 'Asa Decor', url: 'https://www.asadecor.co.in/', categories: ['static'], image: asadecor },
  { id: 8, title: 'Dolce Vita Events', url: 'https://www.dolcevitaevents.gr/', categories: ['static'], image: dolcevitaevents },
  { id: 9, title: 'Nav Health Clinic', url: 'https://www.navhealthclinic.com/', categories: ['static'], image: navhealthclinic },
  { id: 10, title: 'ACE WFM', url: 'https://www.acewfm.com/', categories: ['static'], image: acewfm },
  { id: 11, title: 'Book Your Research', url: 'https://www.bookyourresearch.com/', categories: ['dynamic', 'webapp'], image: bookyourresearch },
  { id: 12, title: 'Pawpaa', url: 'https://www.pawpaa.com/', categories: ['ecommerce', 'dynamic'], image: pawpaa },
  { id: 13, title: 'Life Care Trust', url: 'https://www.lifecaretrust.org/', categories: ['static'], image: lifecaretrust },
  { id: 14, title: 'Biohacking India', url: 'https://www.biohackingindia.in/', categories: ['static'], image: biohackingindia },
  { id: 15, title: 'MSV Marine', url: 'https://www.msv-marine.com/', categories: ['static'], image: msvmarine },
  { id: 16, title: 'Paiwala Interiors', url: 'https://www.paiwalainteriors.com/', categories: ['dynamic', 'webapp'], image: paiwala },
  { id: 17, title: 'MPower Minds', url: 'https://www.mpowerminds.com/', categories: ['static'], image: mpowerminds },
  { id: 18, title: 'Urban Acres', url: 'https://www.urbanacres.in/', categories: ['static'], image: urbanacres },
  { id: 19, title: 'Communicure', url: 'https://www.communicure.com/', categories: ['static'], image: communicure },
  { id: 20, title: 'Dockair Exiim', url: 'https://dockairexiim.com/', categories: ['static'], image: dockair },
  { id: 21, title: 'Zaid Infotech', url: 'https://zaidinfotech.in/', categories: ['ecommerce'], image: zaidinfotech },
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
