
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code, Database, Wrench, Globe } from 'lucide-react';

const TechStackSection = () => {
  const techStacks = [
    {
      category: 'Languages',
      technologies: ['JavaScript', 'Java', 'C', 'Python', 'Dart'],
      color: 'from-blue-500 to-cyan-500',
      icon: Code
    },
    {
      category: 'Frameworks & Libraries',
      technologies: ['Flutter', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
      color: 'from-purple-500 to-pink-500',
      icon: Globe
    },
    {
      category: 'Databases',
      technologies: ['MongoDB', 'MS SQL Server', 'Firebase'],
      color: 'from-green-500 to-emerald-500',
      icon: Database
    },
    {
      category: 'Tools & Others',
      technologies: ['Git', 'GitHub', 'DSA', 'Algorithms', 'Problem Solving'],
      color: 'from-orange-500 to-red-500',
      icon: Wrench
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
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {techStacks.map((stack, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border border-border/50 backdrop-blur-sm">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stack.color} mb-4 flex items-center justify-center`}>
                  <stack.icon className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {stack.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                      whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
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
