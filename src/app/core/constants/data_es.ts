export const data_es = {
  navMenu: {
    education: 'Educación',
    skills: 'Habilidades',
    aboutMe: 'Acerca_de_mí',
    experience: 'Experiencia_Laboral',
    projects: 'Proyectos',
    contact: 'Contacto'
  },
  shortIntroduction: {
    name: 'Andrés Sánchez',
    title: 'Hola!, soy Andrés Sánchez',
    description: `Ingeniero electrónico y desarrollador Cloud/Full Stack con experiencia en Angular,
                  NestJS, Spring Boot y AWS. Manejo bases de datos relacionales y cuento con conocimiento amplio
                  de múltiples frameworks del mercado, tanto en Front-end como en Back-end. Mi experiencia liderando
                  personal y planificando proyectos me ha permitido desempeñarme con un alto nivel de responsabilidad,
                  liderazgo y creatividad, impulsando un mejor ambiente laboral y el cumplimiento de metas empresariales.`,
    role: 'Desarrollador Cloud & Full Stack',
    buttons: {
      downloadCVText: 'descargarCV',
      sendEmailText: 'contactarme'
    }
  },
  contactInfo: {
    contactTitle: 'Contacto',
    emailLabel: 'Correo',
    email: 'asanchesvera@yahoo.es',
    phoneLabel: 'Teléfono',
    phone: '+57 322 214 8659',
    locationLabel: 'Ubicación',
    location: 'Bogotá, Colombia',
    linkedinLabel: 'LinkedIn',
    linkedin: 'https://www.linkedin.com/in/andressanchezvera/',
    githubLabel: 'GitHub',
    github: 'https://github.com/AndresSanchez14'
  },
  educationInfo: {
    educationTitle: 'Educación',
    educationList: [
      {
        degree: 'Ingeniería de electrónica',
        institution: 'Universidad Cooperativa de Colombia',
        year: '2015 - 2020'
      },
      {
        degree: 'Tecnologo en análisis y desarrollo de sistemas de información',
        institution: 'SENA',
        year: '2022 - 2024'
      },
      {
        degree: 'Front End Developer',
        institution: 'BIT - Bogotá Institute of Technology',
        year: '2023-2023'
      },
      {
        degree: 'Cursos de especialización en desarrollo web y tecnologías modernas',
        institution: 'Udemy',
        year: '2023 - actualidad'
      }
    ]
  },
  skillsInfo: {
    skillsTitle: 'Habilidades',
    languageTitle: 'Lenguajes de programación',
    languageList: [
      'Python',
      'TypeScript',
      'JavaScript',
      'SQL',
      'Java'
    ],
    frontEndTitle: 'Tecnologías Frontend',
    frontEndList: [
      'Angular',
      'React',
      'Bootstrap',
      'Material Design'
    ],
    backEndTitle: 'Tecnologías Backend',
    backEndList: [
      'NestJs',
      'Express',
      'Spring Boot',
      'Flask',
    ],
    cloudTitle: 'Cloud',
    cloudList: [
      'AWS',
      'Lambda',
      'S3',
      'Api Gateway',
      'Cognito',
      'DynamoDB',
      'ECS'
    ]
  },
  workExperienceInfo: {
    experienceTitle: 'Experiencia Laboral',
    experienceList: [
      {
        position: 'Middle Software Developer',
        company: 'Banco de Bogotá',
        duration: '11/2025 - actualidad',
        tasks: [
          'Desarrollo de aplicaciones web frontend utilizando Angular con TypeScript, implementando componentes reutilizables con Stencil.js para mantener consistencia en el diseño del banco.',
          'Construcción de APIs RESTful con Node.js, Express.js, NestJS y Spring Boot, implementando arquitectura hexagonal y arquitectura de microservicios.',
          'Implementación de funciones serverless utilizando AWS Lambda integradas con Amazon API Gateway para exposición segura de servicios, con conexión a S3 y CloudFront.'
        ]
      },
      {
        position: 'Junior Software Developer',
        company: 'Banco de Bogotá',
        duration: '10/2023 - 11/2025',
        tasks: [
          'Desarrollo y mantenimiento de aplicaciones web utilizando Angular y otras tecnologías.',
          'Participación en revisiones de código, aportando retroalimentación constructiva al equipo.',
          'Apoyo en infraestructura de software y procesos del área.'
        ]
      },
      {
        position: 'Analista de Datos',
        company: 'Inxait',
        duration: '04/2023 - 10/2023',
        tasks: [
          'Creación de algoritmos y funciones en SQL Server y Python para la estandarización de datos.',
          'Modelamiento de bases de datos relacionales (MER) en SQL Server.',
          'Análisis e interpretación de conjuntos de datos para generar insights y recomendaciones.'
        ]
      }
    ]
  }
}
