export function PortfolioStatsCard() {
  return (
    <article className="stats-card" aria-label="Portfolio statistics">
      <ul className="stats-card__list">
        <li className="stats-card__item">
          <svg className="stats-card__icon" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor" />
            <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor" />
            <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor" />
            <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor" />
          </svg>

          <div className="stats-card__copy">
            <p className="stats-card__value">35+</p>
            <p className="stats-card__label">Projects completed</p>
          </div>
        </li>

        <li className="stats-card__item">
          <svg className="stats-card__icon" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M12 2.8 14.84 8.55l6.35.92-4.59 4.48 1.08 6.32L12 17.28l-5.68 2.99 1.08-6.32-4.59-4.48 6.35-.92L12 2.8Z" />
          </svg>

          <div className="stats-card__copy">
            <p className="stats-card__value">4.9</p>
            <p className="stats-card__label">Average rating</p>
          </div>
        </li>
      </ul>
    </article>
  );
}

export function ExperienceCard() {
  return (
    <article className="experience-card" aria-label="Three plus years of experience">
      <div className="experience-card__number">3+</div>
      <p className="experience-card__label">Years of<br />experience</p>
    </article>
  );
}
