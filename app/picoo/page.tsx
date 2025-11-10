export default function Picoo() {
  return (
    <main>
      <section className="picoo-home">
        <div className="picoologotext">
          <img src="/images/picooimg.png" className = "picoo1logo"alt="Picoo image" />
          <p>A simple, user friendly website that helps primary schools teachers create a quiz fast and efortless.</p>
        </div>
        <img src="/images/picoo.gif"  className="picoogif" alt="Picoo gif" />
      </section>

      <section className="row1">
        <div className="project_overview">
          <h1>Project Overview</h1>
          <img src="/images/picoo_device.png" alt="Picoo device image" />
        </div>
        <div className="project_overview_description">
          <p>The project focused on creating an additional service to already existing brand and website giving
            the opportunity for primary school teachers to create their own quiz in case if existing quizzes don’t fit them.
            The project goal was to increase the sales of picoo devices by implementing an additional usefull feature for users.</p>
          <div className="row2">
            <div className="client-role-timeline-tools">
              <h4>Client:</h4>
              <h4>Role:</h4>
              <h4>Timeline:</h4>
              <h4>Tools:</h4>
            </div>
            <div className="client-role-timeline-tools-description">
              <p>Iris Soute (CEO of Picoo company)</p>
              <p>UI/UX designer and Developer</p>
              <p>10 weeks</p>
              <p>Figma, JavaScript, HTML and CSS</p>
            </div>
          </div>
        </div>
      </section>

      <section className="column1picoo">
        <div className="challenge-strategy-row">
          <aside className="challenge_column">
            <div className="heading-and-icon-row">
              <img src="/images/challengeicon.png" alt="Challenge icon" />
              <h2>The challenge</h2>
            </div>
            <ul>
              <li>Teachers are too limited in resources to test childrens' knowledge</li>
              <li>Teachers don’t have high technical skills</li>
              <li>Picoo is known in a limited amount of schools in the Netherlands</li>
              <li>Finish everything till deadline</li>
            </ul>
          </aside>
          <aside className="strategy_column">
            <div className="heading-and-icon-row">
              <img src="/images/strategyicon.png" alt="Strategy icon" />
              <h2>The strategy</h2>
            </div>
            <ul>
              <li>Conducting a lot of research</li>
              <li>Talk directly to users (teachers) and listen to their opinion</li>
              <li>Designing a UI/UX friendly website</li>
              <li>Choosing the best place to put it in existing website</li>
              <li>Develop both app and website</li>
            </ul>
          </aside>
        </div>
        <div className="figma-redirection-text">
            <p>If you need to see a bunch of iterations made on website prototype <a href="https://www.figma.com/design/CO27QrqCry2HPvK8FDJGsM/Picoo-prototype?node-id=0-1&t=GSdxOt4Q0qH0Cbqu-1" target="_blank">Click here! </a>
            and you will be redirected to our Figma</p>
          </div>
      </section>

      <section className="impact-results-column">
        <h1>Impact & Results</h1>
        <p className="impact-results-text">The creating quiz idea delivered significant results for Picoo company, as it became an efficient and fast way for teachers
        to test children’s knowledge during classes, leading to Picoo’s growth and increased profitability.</p>
        <aside className="impact-boxes">
          <div className="box1">
            <h3>30%</h3>
            <p>Increase of selling of picoo sets  in 2025 comparing to 2024</p>
          </div>
          <div className="box2">
            <h3>50+</h3>
            <p>Schools  have collaborated with Picoo not just from NL but also from Belgium and Germany</p>
          </div>
          <div className="box3">
            <h3>300+</h3>
            <p>satisfied teachers in the Netherlands, Germany and Belgium</p>
          </div>
        </aside>
        <aside className="quotes-column">
          <p>“Creating my own quizzes in Picoo is incredibly easy.  It turns assessment into an active game instead of a written test.”  
          <strong> - Sanne de Vries, teacher.</strong></p>
          <p>“I use Picoo to build short quizzes that combine physical challenges with subject questions. It’s simple to adjust difficulty levels, and I can instantly see which topics need extra attention.” 
          <strong> - Lotte van den Berg, teacher.</strong></p>
          <p>“Designing my own quizzes with Picoo saves so much time. I can reuse or edit questions for different groups, and it keeps lessons dynamic. The children get excited every time they hear we’re doing a Picoo quiz.” 
          <strong>-  Anouk Janssen, teacher</strong></p>
        </aside>
      </section>
    </main>
  );
}