
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const TechStackSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        'JavaScript',
        'Java', 
        'Python',
        'Dart',
        'C'
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        'React.js',
        'Flutter',
        'HTML/CSS',
        'Tailwind CSS',
        'Framer Motion'
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'MS SQL Server',
        'Firebase'
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        'Git & GitHub',
        'Data Structures & Algorithms',
        'Problem Solving',
        'API Development',
        'Package Development'
      ]
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="tech" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across modern development technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <Card className="p-8 h-full border border-border/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-6 text-foreground border-b border-border/20 pb-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-muted/50 hover:bg-muted/80 rounded-full border border-border/30 transition-all duration-200 cursor-default"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
