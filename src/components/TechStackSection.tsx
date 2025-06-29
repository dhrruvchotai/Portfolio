
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const TechStackSection = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'JavaScript', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Dart', level: 88 },
        { name: 'C', level: 75 }
      ]
    },
    {
      category: 'Frontend Development',
      items: [
        { name: 'React.js', level: 85 },
        { name: 'Flutter', level: 90 },
        { name: 'HTML/CSS', level: 88 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Framer Motion', level: 80 }
      ]
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Node.js', level: 82 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 78 },
        { name: 'MS SQL Server', level: 75 },
        { name: 'Firebase', level: 85 }
      ]
    },
    {
      category: 'Tools & Technologies',
      items: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'Data Structures & Algorithms', level: 85 },
        { name: 'Problem Solving', level: 90 },
        { name: 'API Development', level: 80 },
        { name: 'Package Development', level: 75 }
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
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set across modern development technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-8 h-full border border-border/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-6 text-foreground border-b border-border/20 pb-3">
                  {skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
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
