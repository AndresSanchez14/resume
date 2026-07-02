import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LenguageSwitchService {
  dataToFillResume: any = {
    navMenu: {
      home: '',
      skills: '',
      aboutMe: '',
      qualifications: '',
      experience: '',
      projects: '',
      contact: ''
    },
    shortIntroduction: {
      title: '',
      description: '',
      buttons: {
        downloadCVText: '',
        sendEmailText: ''
      }
    }
  }

  constructor() { }

  getDataToFillResume(lenguage: string): any {
    if (lenguage === 'english') {
      return {
        navMenu: {
          education: 'Education',
          skills: 'Skills',
          aboutMe: 'About',
          qualifications: 'Qualifications',
          experience: 'Work Experience',
          projects: 'Projects',
          contact: 'Contact'
        },
        shortIntroduction: {
          title: 'Hi!! , I am Andrés Sánchez',
          description: `Developer with 3 years of experience building
          scalable web applications on AWS cloud and modern full stack solutions with Angular, NestJs, Spring Boot and other technologies. Passionate about technology and continuous learning, I am always looking for new challenges to keep growing professionally.`,
          buttons: {
            downloadCVText: 'Download CV',
            sendEmailText: 'Email me'
          }
        },
        contactInfo: {
          contactTitle: 'Contact',
          emailLabel: 'Email',
          email: 'asanchesvera@yahoo.es',
          phoneLabel: 'Phone',
          phone: '+57 322 214 8659',
          locationLabel: 'Location',
          location: 'Bogotá, Colombia',
          linkedinLabel: 'LinkedIn',
          linkedin: 'https://www.linkedin.com/in/andressanchezvera/',
          githubLabel: 'GitHub',
          github: 'https://github.com/AndresSanchez14'
        },
        educationInfo: {
          educationTitle: 'Education',
          educationList: [
            {
              degree: 'Electronics engineering',
              institution: 'Universidad Cooperativa de Colombia',
              year: '2015 - 2020'
            },
            {
              degree: 'Technologist in analysis and development of information systems',
              institution: 'SENA',
              year: '2022 - 2024'
            },
            {
              degree: 'Front End Developer',
              institution: 'BIT - Bogotá Institute of Technology',
              year: '2023'
            }
          ]
        },
        skillsInfo: {
          skillsTitle: 'Skills',
          languageTitle: 'Programming languages',
          languageList: [
            'Python',
            'TypeScript',
            'JavaScript',
            'SQL',
            'Java'
          ],
          frontEndTitle: 'Frontend Technologies',
          frontEndList: [
            'Angular',
            'React',
            'Bootstrap',
            'Material Design'
          ],
          backEndTitle: 'Backend Technologies',
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
          experienceTitle: 'Work Experience',
          experienceList: [
            {
              position: 'Middle Cloud Developer/Full Stack Developer',
              company: 'Bank of Bogota',
              duration: '10/2023 - current',
              tasks: [
                'Developed and maintained web applications using Angular and other technologies.',
                'Collaborated with cross-functional teams to design and implement new features.',
                'Participated in code reviews and provided constructive feedback to team members.'
              ]
            },
            {
              position: 'Data Analyst',
              company: 'Inxait',
              duration: '04/2023 - 10/2023',
              tasks: [
                'Analyzed and interpreted complex data sets to provide insights and recommendations.',
                'Created data visualizations and reports to communicate findings to stakeholders.',
                'Collaborated with cross-functional teams to identify business opportunities and optimize processes.'
              ]
            }
          ]
        }
      }
    }
    return {
      navMenu: {
        education: 'Educación',
        skills: 'Habilidades',
        aboutMe: 'Acerca de mí',
        qualifications: 'Trayectoria',
        experience: 'Experiencia Laboral',
        projects: 'Proyectos',
        contact: 'Contacto'
      },
      shortIntroduction: {
        title: 'Hola!, soy Andrés Sánchez',
        description:`Desarrollador con 3 años de experiencia construyendo aplicaciones web escalables en la nube AWS
                    y soluciones full stack moderanas con Angular , NestJs, Spring Boot y otras tecnologías.
                    Apasionado por la tecnología y el aprendizaje continuo, siempre estoy buscando nuevos desafíos
                    para seguir creciendo profesionalmente.`,
        buttons: {
          downloadCVText: 'Descargar CV',
          sendEmailText: 'Contactarme'
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
            year: '2023'
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
            position: 'Desarrollador Middle Cloud/Full Stack',
            company: 'Banco de Bogotá',
            duration: '10/2023 - actualidad',
            tasks: [
              'Desarrollé y mantuve aplicaciones web utilizando Angular y otras tecnologías.',
              'Colaboré con equipos multifuncionales para diseñar e implementar nuevas funcionalidades.',
              'Participé en revisiones de código y proporcioné retroalimentación constructiva a los miembros del equipo.'
            ]
          },
          {
            position: 'Analista de Datos',
            company: 'Inxait',
            duration: '04/2023 - 10/2023',
            tasks: [
              'Analicé e interpreté conjuntos de datos complejos para proporcionar insights y recomendaciones.',
              'Creé visualizaciones de datos e informes para comunicar hallazgos a los interesados.',
              'Colaboré con equipos multifuncionales para identificar oportunidades de negocio y optimizar procesos.'
            ]
          }
        ]
      }
    }
  }
}
