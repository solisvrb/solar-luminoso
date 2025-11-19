import { FileSearch, Wrench, Zap, CheckCircle } from "lucide-react";
import installationImage from "@/assets/installation-process.jpg";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileSearch,
      title: "1. Análise e Projeto",
      description:
        "Avaliamos seu consumo de energia e projetamos o sistema ideal para suas necessidades",
    },
    {
      icon: Wrench,
      title: "2. Instalação Profissional",
      description:
        "Nossa equipe certificada instala os painéis com os mais altos padrões de qualidade",
    },
    {
      icon: Zap,
      title: "3. Ativação e Monitoramento",
      description:
        "Conectamos seu sistema à rede e você começa a economizar imediatamente",
    },
    {
      icon: CheckCircle,
      title: "4. Suporte Contínuo",
      description:
        "Acompanhamos o desempenho do sistema e oferecemos suporte sempre que necessário",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Como Funciona
          </h2>
          <p className="text-lg text-neutral-600">
            Do primeiro contato até a economia na sua conta de luz, todo o processo é simples e
            transparente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 group hover:translate-x-2 transition-transform"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-solar-green-light rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <step.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative lg:order-first">
            <img
              src={installationImage}
              alt="Processo de instalação de painéis solares"
              className="rounded-2xl shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl max-w-xs">
              <p className="text-sm font-medium">Processo completo em</p>
              <p className="text-3xl font-bold">30-45 dias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
