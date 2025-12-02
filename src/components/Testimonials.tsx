import { Star, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    window.open('https://wa.me/553291722485?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20energia%20solar', '_blank');
  };
  const testimonials = [
    {
      name: "Ninico da Retífica",
      location: "Visconde do Rio Branco, MG",
      text: "Era um projeto complicado de ser feito por questões envolvendo a estrutura da nossa empresa e sombras no local. Demonstraram dominar com maestria o que fazem e foi um sucesso.",
      rating: 5,
      savings: "R$ 5.000/mês",
    },
    {
      name: "Dr. Henrique Sabioni - Clínica PATAS",
      location: "Ubá, MG",
      text: "Sou responsável por uma clínica veterinária que tinha uma conta mensal de energia por volta de R$2.500,00, então contratei a Solis pra resolver esse alto custo de energia. Fui muito bem atendido pelo responsável, Lucas, que prontamente me apresentou um projeto muito bem esclarecido, com imagens aéreas, mostrando sombras, ou seja, um projeto muito bem detalhado. Infelizmente, depois de mais ou menos 1 ano, um equipamento estragou como qualquer coisa pode estragar, contudo o atendimento pós-venda do Lucas e do Rafael foi excepcional, me colocando em constante contato com os fornecedores do equipamento e a garantia cobriu todos os custos. Ainda conseguiram fazer o fornecedor me ressarcir pelo tempo que fiquei sem gerar energia. Isso é um grande diferencial,  pois qualquer equipamento está apto a estragar, porém poucos profissionais estão dispostos a dar suporte nesse momento de problema.",
      rating: 5,
      savings: "R$ 2.500/mês",
    },
    {
      name: "Luciano Machado",
      location: "Visconde do Rio Branco, MG",
      text: "Obrigado a toda a equipe da Solis que me ajudou a realizar esse sonho da energia solar, ajudando não só ao meu bolso como ao meio ambiente também. Parabéns!",
      rating: 5,
      savings: "R$ 650/mês",
    },
    {
      name: "Juninho Lamas",
      location: "Visconde do Rio Branco, MG",
      text: "Então tá, por falta de tempo eu fui adiando a instalação do sistema fotovoltaico na minha casa e fui perdendo dinheiro. Um dia sabendo que não tinha tempo e que deveria parar de adiar eu chamei um cara super bacana que acabou virando amigo que se chama Lucas, ele veio aqui e me passou uma confiança sem igual e puxou pra si a responsabilidade de resolver a minha demanda sem que eu tivesse um real de trabalho. Resultado que duas contas de mais de R$400,00 uma e mais de R$200,00 hoje, caiu pra menos de R$150,00 somadas e ainda com sobra para mais consumo que planejamos previamente. Sensacional o resultado e eu super recomendo esse cara. Tô falando desse cara Lucas Morfório",
      rating: 5,
      savings: "R$ 600/mês",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-neutral-600">
            Mais de 500 clientes satisfeitos economizando todos os meses
          </p>
        </div>

      <div className="grid md:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary opacity-20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-solar-yellow text-solar-yellow" />
                ))}
              </div>

              <p className="text-neutral-700 mb-6 leading-relaxed">{testimonial.text}</p>

              <div className="pt-6 border-t border-border">
                <div className="font-semibold text-foreground mb-1">{testimonial.name}</div>
                <div className="text-sm text-neutral-600 mb-3">{testimonial.location}</div>
                <div className="inline-flex items-center gap-2 bg-solar-green-light text-primary px-3 py-1 rounded-full text-sm font-medium">
                  <TrendingDown className="w-4 h-4" />
                  Economia: {testimonial.savings}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional CTA */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Sua história de economia começa aqui
          </h3>
          <p className="text-lg text-neutral-600 mb-6">
            Centenas de famílias já estão vivendo com mais tranquilidade. Você pode ser a próxima!
          </p>
          <Button size="lg" onClick={handleCTAClick} className="group">
            Quero minha simulação gratuita
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const TrendingDown = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
    />
  </svg>
);

export default Testimonials;
