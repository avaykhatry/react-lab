import "./Cv.css";

export default function Cv() {
  return (
    <>
      <div className="name">
        <div className="name-inner inner">
          <div className="header">Avaya Khatri</div>
          <div className="flex">
            <a href="">avaya@gmail.com</a>
            <a href="">https://www.avk.com</a>
            <span>Kathmandu, Nepal</span>
          </div>
        </div>
      </div>

      <div className="pro-sum">
        <div className="pro-sum-inner inner">
          <div className="title">PROFESSIONAL SUMMARY</div>
          <div>
            A product designer with expertise leading end-to-end design
            processes from scratch, specializing in mobile and responsive web
            design, and thriving in cross-functional environment.
          </div>
        </div>
      </div>

      <div className="exp">
        <div className="exp-inner inner">
          <div className="title">EXPERIENCE</div>
          <div className="exp-inner-header subtitle">
            <div>Product Designer, Marqeta (B2B Fintech)</div>
            <div>Jun 2024 - Present</div>
          </div>
          <ul>
            <li>
              Directed the design of Money Movement SDK, collaborating with an
              agile cross-functional team, and managing the full design process
              from competitive research to mockup, and handoff.
            </li>
            <li>
              Managed a diverse group of stakeholders, aligning goals and design
              decisions through research data and strategic communication to
              ensure cohesive project development.
            </li>
          </ul>
        </div>
      </div>
      <div className="edu">
        <div className="edu-inner inner">
          <div className="title">EDUCATION</div>
          <div className="edu-inner-header subtitle">
            <div>B.S., Information Technology</div>
            <div>Apr 2022 - Apr 2026</div>
          </div>
          <div>Westcliff University (GPA 3.99)</div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-inner inner">
          <div className="title">SKILLS</div>
          <div>React, SQL, JS, HTML, CSS, Figma</div>
        </div>
      </div>
    </>
  );
}
