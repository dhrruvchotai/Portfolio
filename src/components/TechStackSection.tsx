
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const TechStackSection = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Flutter', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'Java', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Express.js', level: 80 },
    { name: 'Firebase', level: 70 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'MS SQL Server', level: 70 }
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
    hidden: { opacity: 0, y: 20 },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border border-border/50 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-muted-foreground font-mono">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
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
