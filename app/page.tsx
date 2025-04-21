<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minimalist Portfolio</title>
  <style>
    /* Global Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    
    body {
      background-color: #ffffff;
      color: #000000;
      line-height: 1.6;
    }
    
    .container {
      height: 100vh;
      overflow-y: scroll;
      scroll-snap-type: y mandatory;
    }
    
    section {
      height: 100vh;
      scroll-snap-align: start;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2rem;
      position: relative;
    }
    
    h1 {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 1rem;
    }
    
    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }
    
    p {
      font-size: 1.25rem;
      max-width: 600px;
      margin-bottom: 2rem;
    }
    
    .nav {
      position: fixed;
      top: 2rem;
      right: 2rem;
      z-index: 100;
    }
    
    .nav a {
      color: #000;
      text-decoration: none;
      margin-left: 1.5rem;
      font-weight: 500;
      transition: opacity 0.3s ease;
    }
    
    .nav a:hover {
      opacity: 0.7;
    }
    
    /* Intro Section */
    .intro {
      background-color: #ffffff;
    }
    
    .tag {
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 1rem;
    }
    
    /* Projects Section */
    .projects {
      background-color: #f2f2f2;
    }
    
    .project-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
    }
    
    .project-card {
      background-color: #ffffff;
      padding: 1.5rem;
      border: 1px solid #000;
      transition: transform 0.3s ease;
    }
    
    .project-card:hover {
      transform: translateY(-5px);
    }
    
    .project-title {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    
    .project-desc {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    
    .view-link {
      color: #000;
      text-decoration: none;
      border-bottom: 1px solid #000;
      padding-bottom: 2px;
      font-weight: 500;
      transition: opacity 0.3s ease;
    }
    
    .view-link:hover {
      opacity: 0.7;
    }
    
    /* Contact Section */
    .contact {
      background-color: #ffffff;
    }
    
    .contact-links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .contact-link {
      font-size: 1.25rem;
      color: #000;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: opacity 0.3s ease;
    }
    
    .contact-link:hover {
      opacity: 0.7;
    }
    
    .section-number {
      position: absolute;
      top: 2rem;
      left: 2rem;
      font-size: 1rem;
      font-weight: 500;
    }
    
    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }
      
      h2 {
        font-size: 1.75rem;
      }
      
      .project-grid {
        grid-template-columns: 1fr;
      }
      
      .nav {
        position: fixed;
        top: auto;
        bottom: 1rem;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.9);
        padding: 1rem;
      }
    }
  </style>
</head>
<body>
  <nav class="nav">
    <a href="#intro">Intro</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
  
  <div class="container">
    <section id="intro" class="intro">
      <div class="section-number">01</div>
      <div class="tag">Designer & Developer</div>
      <h1>Alex Morgan</h1>
      <p>I create minimal and functional digital experiences, focusing on clean aesthetics and intuitive user interfaces.</p>
      <p>Currently based in Montreal, working at the intersection of design and technology.</p>
    </section>
    
    <section id="projects" class="projects">
      <div class="section-number">02</div>
      <h2>Selected Projects</h2>
      <div class="project-grid">
        <div class="project-card">
          <h3 class="project-title">Monochrome</h3>
          <p class="project-desc">A black and white photography platform with custom image processing.</p>
          <a href="#" class="view-link">View Project</a>
        </div>
        
        <div class="project-card">
          <h3 class="project-title">Minimalist E-commerce</h3>
          <p class="project-desc">Clean, focused shopping experience for a fashion brand.</p>
          <a href="#" class="view-link">View Project</a>
        </div>
        
        <div class="project-card">
          <h3 class="project-title">Type System</h3>
          <p class="project-desc">Custom typography framework for responsive web applications.</p>
          <a href="#" class="view-link">View Project</a>
        </div>
      </div>
    </section>
    
    <section id="contact" class="contact">
      <div class="section-number">03</div>
      <h2>Get In Touch</h2>
      <p>Interested in working together? Feel free to reach out through any of the platforms below.</p>
      
      <div class="contact-links">
        <a href="mailto:hello@alexmorgan.com" class="contact-link">
          hello@alexmorgan.com
        </a>
        <a href="https://twitter.com/alexmorgan" class="contact-link">
          Twitter
        </a>
        <a href="https://linkedin.com/in/alexmorgan" class="contact-link">
          LinkedIn
        </a>
        <a href="https://github.com/alexmorgan" class="contact-link">
          GitHub
        </a>
      </div>
    </section>
  </div>
  
  <script>
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  </script>
</body>
</html>
