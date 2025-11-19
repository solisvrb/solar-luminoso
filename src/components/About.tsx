import { Award, Shield, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Garantia Total",
      description: "25 anos de garantia nos equipamentos e 5 anos na instalação",
    },
    {
      icon: Award,
      title: "Qualidade Certificada",
      description: "Equipamentos de marcas líderes mundiais em energia solar",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais certificados e com anos de experiência",
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sobre Nós
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Somos especialistas em energia solar com mais de 10 anos de experiência no mercado.
            Nossa missão é tornar a energia limpa acessível para todos, combinando tecnologia de
            ponta com atendimento personalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-solar-green-light rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
