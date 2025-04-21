export default function Home() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Add smooth scrolling for navigation links
    const handleNavClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });
    
    // Clean up event listeners
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);
  
  return (
    <div className={styles.container} ref={containerRef}>
      <Head>
        <title>Alex Morgan | Portfolio</title>
        <meta name="description" content="Minimalist portfolio of Alex Morgan" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </Head>
      
      <nav className={styles.nav}>
        <Link href="#intro" passHref>
          <span>Intro</span>
        </Link>
        <Link href="#projects" passHref>
          <span>Projects</span>
        </Link>
        <Link href="#contact" passHref>
          <span>Contact</span>
        </Link>
      </nav>
      
      <main>
        <section id="intro" className={`${styles.section} ${styles.intro}`}>
          <div className={styles.sectionNumber}>01</div>
          <div className={styles.tag}>Designer & Developer</div>
          <h1 className={styles.title}>Alex Morgan</h1>
          <p className={styles.description}>
            I create minimal and functional digital experiences, focusing on clean aesthetics and intuitive user interfaces.
          </p>
          <p className={styles.description}>
            Currently based in Montreal, working at the intersection of design and technology.
          </p>
        </section>
        
        <section id="projects" className={`${styles.section} ${styles.projects}`}>
          <div className={styles.sectionNumber}>02</div>
          <h2 className={styles.sectionTitle}>Selected Projects</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <h3 className={styles.projectTitle}>Monochrome</h3>
              <p className={styles.projectDesc}>A black and white photography platform with custom image processing.</p>
              <Link href="/projects/monochrome" passHref>
                <span className={styles.viewLink}>View Project</span>
              </Link>
            </div>
            
            <div className={styles.projectCard}>
              <h3 className={styles.projectTitle}>Minimalist E-commerce</h3>
              <p className={styles.projectDesc}>Clean, focused shopping experience for a fashion brand.</p>
              <Link href="/projects/ecommerce" passHref>
                <span className={styles.viewLink}>View Project</span>
              </Link>
            </div>
            
            <div className={styles.projectCard}>
              <h3 className={styles.projectTitle}>Type System</h3>
              <p className={styles.projectDesc}>Custom typography framework for responsive web applications.</p>
              <Link href="/projects/type-system" passHref>
                <span className={styles.viewLink}>View Project</span>
              </Link>
            </div>
          </div>
        </section>
        
        <section id="contact" className={`${styles.section} ${styles.contact}`}>
          <div className={styles.sectionNumber}>03</div>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.description}>
            Interested in working together? Feel free to reach out through any of the platforms below.
          </p>
          
          <div className={styles.contactLinks}>
            <a href="mailto:hello@alexmorgan.com" className={styles.contactLink}>
              hello@alexmorgan.com
            </a>
            <a href="https://twitter.com/alexmorgan" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              Twitter
            </a>
            <a href="https://linkedin.com/in/alexmorgan" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              LinkedIn
            </a>
            <a href="https://github.com/alexmorgan" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
