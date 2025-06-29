
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Calendar } from 'lucide-react';

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'Tone Generator Application',
      description: 'Comprehensive audio tone generation application developed during Digital Guruji internship. Features multiple frequency options, waveform generation, and advanced audio processing capabilities.',
      tech: ['Flutter', 'Dart', 'Audio Processing', 'Mobile Development'],
      featured: true,
      year: '2024',
      category: 'Mobile Application',
      link: null,
      github: '#'
    },
    {
      title: 'NoCodeAPIConnector Package',
      description: 'Flutter package designed to simplify API integration without extensive coding. Streamlines API handling for Flutter developers with intuitive configuration and automated request management.',
      tech: ['Flutter', 'Dart', 'Package Development', 'API Integration'],
      featured: true,
      year: '2024',
      category: 'Open Source Package',
      link: null,
      github: '#'
    },
    {
      title: 'E-commerce Clothing Platform',
      description: 'Full-stack e-commerce solution developed during ADAA Jaipur hackathon. Features modern UI with smooth animations, complete shopping cart functionality, and responsive design.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Framer Motion'],
      featured: true,
      year: '2024',
      category: 'Web Application',
      link: null,
      github: '#'
    },
    {
      title: 'Interactive Flip Memory Game',
      description: 'Engaging memory game built with vanilla JavaScript featuring multiple difficulty levels, score tracking, and smooth gameplay mechanics.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Game Development'],
      featured: true,
      year: '2023',
      category: 'Web Game',
      link: 'https://dugames.aswdc.in/FlipGame/index.html',
      github: '#'
    },
    {
      title: 'Tic Tac Toe Multiplayer',
      description: 'Flutter-based multiplayer tic-tac-toe game with comprehensive user profiles, avatar customization, and real-time gameplay functionality.',
      tech: ['Flutter', 'Dart', 'Firebase', 'Real-time Database'],
      featured: false,
      year: '2023',
      category: 'Mobile Game',
      link: null,
      github: 'https://github.com/dhrruvchotai/Tic-Tac-Toe'
    },
    {
      title: 'Friday Voice Assistant',
      description: 'Intelligent voice assistant powered by Python with natural language processing, speech recognition, and task automation capabilities.',
      tech: ['Python', 'Speech Recognition', 'NLP', 'AI/ML'],
      featured: false,
      year: '2023',
      category: 'AI Application',
      link: null,
      github: 'https://github.com/dhrruvchotai/Friday'
    },
    {
      title: 'Memory Card Challenge',
      description: 'Interactive memory enhancement game featuring multiple difficulty levels, timer functionality, and progressive scoring system.',
      tech: ['JavaScript', 'CSS3', 'HTML5', 'Local Storage'],
      featured: false,
      year: '2023',
      category: 'Web Game',
      link: null,
      github: '#'
    }
  ];

  const displayedProjects = showAll ? projects : projects.filter(p => p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of development expertise across various technologies and domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {displayedProjects.map((project, index) => (
            <motion.div key={`${project.title}-${index}`} variants={itemVariants}>
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border border-border/50 backdrop-blur-sm group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.category}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  {project.link && (
                    <Button
                      size="sm"
                      onClick={() => window.open(project.link, '_blank')}
                      className="flex-1 text-xs"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Live Demo
                    </Button>
                  )}
                  {project.github && project.github !== '#' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.github, '_blank')}
                      className={project.link ? '' : 'flex-1'}
                    >
                      <Github size={14} className="mr-1" />
                      Code
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            size="lg"
            className="px-8"
          >
            {showAll ? 'Show Featured Projects' : 'View All Projects'}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
