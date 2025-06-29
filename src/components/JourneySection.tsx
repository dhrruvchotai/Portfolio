
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const JourneySection = () => {
  const journeyItems = [
    {
      year: '2023 - Present',
      title: 'B.Tech in Computer Science Engineering',
      institution: 'Darshan University',
      description: 'Currently pursuing Computer Science Engineering with a CGPA of 9.06. Actively involved in coding competitions and technical projects.',
      icon: '🎓',
      type: 'education'
    },
    {
      year: '2023 - Present',
      title: 'DSA Teaching Assistant',
      institution: 'Darshan University',
      description: 'Teaching Data Structures and Algorithms to 120+ students, helping them understand complex concepts and problem-solving techniques.',
      icon: '👨‍🏫',
      type: 'experience'
    },
    {
      year: '2023',
      title: 'Flutter Developer Intern',
      institution: 'Digital Guruji',
      description: 'Developed the Tone Generator App using Flutter, gaining hands-on experience in mobile app development and audio processing.',
      icon: '💼',
      type: 'experience'
    },
    {
      year: '2023',
      title: 'Hackathon Winner',
      institution: 'ADAA Jaipur',
      description: 'Built an E-commerce Clothing Website during a hackathon using the MERN stack, showcasing full-stack development skills.',
      icon: '🏆',
      type: 'achievement'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="journey" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The path that led me to where I am today
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block" />

          {journeyItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex items-start mb-12 md:mb-16"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 z-10 -translate-x-1/2" />
              
              <Card className="flex-1 md:ml-16 p-6 hover:shadow-xl transition-all duration-300 border border-border/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="text-4xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-sm text-primary font-mono bg-primary/10 px-2 py-1 rounded">
                        {item.year}
                      </span>
                    </div>
                    
                    <p className="text-lg text-muted-foreground font-medium mb-2">
                      {item.institution}
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
