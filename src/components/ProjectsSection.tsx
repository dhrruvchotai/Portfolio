
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ArrowUp } from 'lucide-react';

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'Tone Generator App',
      description: 'Built using Flutter for Digital Guruji Internship. A comprehensive audio tone generation application with multiple frequency options.',
      tech: ['Flutter', 'Dart', 'Audio Processing'],
      featured: true,
      link: '#',
      github: '#'
    },
    {
      title: 'NoCodeAPIConnector Package',
      description: 'Flutter package to handle APIs without writing actual code. Simplifies API integration for Flutter developers.',
      tech: ['Flutter', 'Dart', 'Package Development'],
      featured: true,
      link: '#',
      github: '#'
    },
    {
      title: 'E-commerce Clothing Website',
      description: 'Built during hackathon for ADAA Jaipur using MERN stack with Framer Motion for smooth animations.',
      tech: ['React', 'Node.js', 'MongoDB', 'Framer Motion'],
      featured: true,
      link: '#',
      github: '#'
    },
    {
      title: 'Flip Game',
      description: 'A JavaScript-based flip memory game with engaging gameplay and smooth interactions.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      featured: true,
      link: 'https://dugames.aswdc.in/FlipGame/index.html',
      github: '#'
    },
    {
      title: 'Tic Tac Toe Multiplayer',
      description: 'Flutter-based multiplayer tic-tac-toe game with avatar and profile support for enhanced user experience.',
      tech: ['Flutter', 'Dart', 'Firebase'],
      featured: false,
      link: '#',
      github: '#'
    },
    {
      title: 'Memory Card Game',
      description: 'Interactive memory card game built with vanilla JavaScript featuring multiple difficulty levels.',
      tech: ['JavaScript', 'CSS', 'HTML'],
      featured: false,
      link: '#',
      github: '#'
    },
    {
      title: 'Friday Voice Assistant',
      description: 'Python-based voice assistant with natural language processing and task automation capabilities.',
      tech: ['Python', 'Speech Recognition', 'NLP'],
      featured: false,
      link: '#',
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
            A showcase of my development journey and technical expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {displayedProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border border-border/50 backdrop-blur-sm group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUp className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 transition-all duration-300 rotate-45" size={20} />
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  {project.link !== '#' && (
                    <Button
                      size="sm"
                      onClick={() => window.open(project.link, '_blank')}
                      className="flex-1"
                    >
                      View Live
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} />
                  </Button>
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
            {showAll ? 'Show Less' : 'See More Projects'}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
