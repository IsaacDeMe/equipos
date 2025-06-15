import React from 'react';
import { motion } from 'framer-motion';

const InfoSection = () => {
  const infoItems = [
    {
      title: "Detalles del evento",
      details: [
        "El evento se realizará en Do-Box FC",
        "La fecha del evento será el 9 de agosto",
        "Constará de 3 WODs",
        "Equipos mixtos de 3 personas (2 Chicas + 1 Chico o 2 Chicos + 1 Chica)",
        "El precio por equipo será de 25 euros con el pack de atleta normal",
      ],
      text: "¿Qué lleva el pack de atleta?",
      extraDetails: [
        "Una bolsita con el logo",
        "Frutos secos",
        "Un plátano",
        "Una pegatina",
        "Una medalla",
      ],
    },
    {
      title: "Pagos y premios",
      text: "Información de Pago:",
      details: [
        "Coste: 25€ por equipo",
        "Método: BIZUM",
        "Número: 633 20 79 05",
        "Concepto: Nombre de tu equipo",
        "Todo lo recaudado será para ayudar a Isaac Delfa a competir en los CrossFit Games.",
      ],
      extraText: "¡Reserva tu camiseta para el día de la competición!",
      link: "https://isaacgames.es",
      linkText: "Reserva tu camiseta",
    },
    {
      title: "Estandares SCALED",
      text: "Estos son los estándares de la categoría SCALED:",
      details: [
        "Barra: 30/20 snatch, 40/25 clean & jerk",
        "DB: 15/10 Kg",
        "KB: 16/12 Kg",
        "WB: 14/8 lb",
        "Movimientos: simples, shuttle run, burpees, step overs/ups",
        "Gimnásticos: Ring Rows, Rodillas al pecho",
      ],
    },
    {
      title: "Estandares RX",
      text: "Estos son los estándares de la categoría RX:",
      details: [
        "Barra: 43/25 snatch, 60/35 clean & jerk",
        "DB: 22.5/15 Kg",
        "KB: 24/16 Kg",
        "WB: 20/14 lb",
        "Movimientos: dobles, shuttle run, burpees, box jump overs",
        "Gimnásticos: C2B, T2B",
      ],
    },
    {
      title: "¿Te quieres apuntar?",
      text: "¡Genial! Haz clic en el enlace de abajo para inscribirte.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSerN5IsY4LZSgX-4jktT5yNVFdWFhxMnbuVuIL2KMLw4Ft3Cw/viewform",
      linkText: "Formulario de Inscripción",
    },
    {
      title: "¿No puedes competir, pero quieres colaborar?",
      text: "Puedes hacerme un donativo. ¡Cualquier ayuda es bienvenida!",
      link: "https://gofund.me/91ae41ec",
      linkText: "Gofundme",
    },
  ];

  return (
    <motion.section
      id="informacion"
      className="py-12 md:py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-permanent-marker text-radioactive-green text-center mb-12 md:mb-16">
          Información del Evento
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-xl shadow-xl border border-border hover:shadow-2xl hover:border-radioactive-green/50 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-permanent-marker text-radioactive-green">{item.title}</h3>
                <p className="text-muted-foreground font-roboto leading-relaxed mt-2">{item.text}</p>
              </div>
              {item.details && (
                <ul className="list-disc list-inside text-muted-foreground font-roboto space-y-1 pl-4 mb-4">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
              {item.extraDetails && (
                <ul className="list-disc list-inside text-muted-foreground font-roboto space-y-1 pl-4 mb-4">
                  {item.extraDetails.map((extra, i) => (
                    <li key={i}>{extra}</li>
                  ))}
                </ul>
              )}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-radioactive-green text-black font-permanent-marker py-2 px-4 rounded-lg hover:bg-opacity-80 transition-colors self-start"
                >
                  {item.linkText}
                </a>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-xl md:text-2xl font-roboto text-gray-300 mb-4">
            Este evento es más que una competición, es una oportunidad para unirnos como comunidad, disfrutar del CrossFit y apoyar una gran causa.
          </p>
          <p className="text-2xl md:text-3xl font-permanent-marker text-radioactive-green">
            ¡Te esperamos para vivir una jornada épica!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InfoSection;
