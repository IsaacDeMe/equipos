import React from 'react';
import { motion } from 'framer-motion';

const InfoSection = () => {
  const infoItems = [
    {
      title: "Detalles del evento",
      text: "",
      details: [
        "El evento se realizara en Do-Box FC",
        "La fecha del evento será el 9 de agosto",
        "Constará de 3 wods",
      ]

    },
    {
      title: "Formato de Equipos",
      text: "Equipos mixtos de 3 personas (2 Chicas + 1 Chico ó 2 Chicos + 1 Chica)",
      text: 'El precio por equipos será de 24 euros con el pack de atleta normal',
    },
     {
      title: "Que lleva el pack de atleta",
      details: [
        "Una bolsita con el logo",
        "Frutos secos",
        "Un plátano",
        "Una pegatina",
        "Una medalla",

      ]
    },
       {
      title: "Premios",
      details: [
        "Trofeos de la competición",


      ]
    },
   
        {
      title: "Estandares SCALED",
      text: "Estos son los estandares de la categoria scaled",
      details: [
        "Barra: 30/20 snatch, 40/25 clean & Jerk",
        "DB 15/10 Kg",
        "Kb 16/12 Kg",
        "WB 14/8 lb",
        "Movimientos como: simples, shuttle run, burpees, step overs/ups",
        "Gimnasticos: Ring Rows, Rodillas al pecho,",

      ]
    },
          {
      title: "Estandares RX",
      text: "Estos son los estandares de la categoria RX",
      details: [
        "Barra: 43/25 snatch, 60/35  clean & Jerk",
        "DB 22.5/15 Kg",
        "Kb 24/16 Kg",
        "WB 20/14 lb",
        "Movimientos como: dobles, shuttle run, burpees, box jump overs",
        "Gimnasticos: C2B, T2B,",

      ]
    },
     {
      title: "Información de Pago",
      text: "Apunta a tu equipo respondiendo las preguntas del formulario. El pago de 24€ por equipo se realizará mediante BIZUM al número 642 571 133. En el concepto, por favor, indica el nombre de tu equipo. Solo se devolverá el dinero en caso de cancelamiento del evento.",
      details: [
        "Coste: 24€ por equipo.",
        "Método: BIZUM.",
        "Número: 642 571 133.",
        "Concepto: Nombre de tu equipo.",
        "Todo lo recaudado será para ayudar a Isaac Delfa a competir en los CrossFit Games. Por si os intersa, tendremos parada para reservar vuestra camiseta, aunque si quereis tenerla para el dia de la competición, corre! Reservala ya en el boton de abajo",
        
      ],
      link: "https://isaacgames.es",
      linkText: "Camiseta",
    },
    {
      title: "¿Te quieres apuntar?",
      text: "¡Genial! Haz clic en el enlace de abajo para acceder al formulario de inscripción. ¡No te quedes fuera!",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSerN5IsY4LZSgX-4jktT5yNVFdWFhxMnbuVuIL2KMLw4Ft3Cw/viewform",
      linkText: "Formulario de Inscripción"
    },
      {
      title: "¿No puedes competir, pero quieres colaborar?",
      text: "Puedes hacerme un donativo, cualquier ayuda es bienvenida",
      link: "https://gofund.me/91ae41ec",
      linkText: "Gofundme"
    }
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