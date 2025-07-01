# IA Entrevistador Gerencial 🤖💼

## 🎯 Misión del MVP

Desarrollar una plataforma SaaS impulsada por inteligencia artificial que automatice y optimice el proceso de evaluación de candidatos gerenciales, generando entrevistas personalizadas de 1 hora de duración para evaluar 20 competencias gerenciales clave, basándose en el análisis del CV del candidato y un corpus especializado de documentos PDF.

## 📋 Descripción del Proyecto

Esta plataforma revoluciona el proceso de selección gerencial mediante:

- **Análisis Inteligente de CV**: Procesamiento automático del currículum para identificar experiencias relevantes
- **Evaluación Integral**: Cobertura de 20 competencias gerenciales esenciales
- **Entrevistas Personalizadas**: Generación dinámica de preguntas adaptadas al perfil del candidato
- **Base de Conocimiento Especializada**: Corpus de PDFs con mejores prácticas y metodologías de evaluación
- **Duración Optimizada**: Entrevistas estructuradas de 1 hora para máxima eficiencia

## 🚀 Características Principales

### Para Reclutadores
- Ahorro significativo de tiempo en el proceso de selección
- Evaluaciones consistentes y objetivas
- Informes detallados de competencias
- Integración con sistemas ATS existentes

### Para Candidatos
- Experiencia de entrevista justa y estandarizada
- Retroalimentación detallada sobre competencias
- Preparación guiada para roles gerenciales

## 🎖️ Competencias Gerenciales Evaluadas

1. **Liderazgo Estratégico**
2. **Toma de Decisiones**
3. **Comunicación Efectiva**
4. **Gestión de Equipos**
5. **Pensamiento Analítico**
6. **Innovación y Creatividad**
7. **Gestión del Cambio**
8. **Orientación a Resultados**
9. **Inteligencia Emocional**
10. **Negociación y Persuasión**
11. **Planificación y Organización**
12. **Resolución de Problemas**
13. **Gestión del Tiempo**
14. **Desarrollo de Talento**
15. **Visión de Negocio**
16. **Adaptabilidad**
17. **Ética Profesional**
18. **Gestión de Conflictos**
19. **Trabajo Colaborativo**
20. **Orientación al Cliente**

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 14+ (App Router), TypeScript, Tailwind CSS, Supabase Auth
- **Backend**: FastAPI, Python 3.12, Uvicorn, SQLAlchemy
- **IA/ML**: OpenAI API, LangChain, Vector Databases
- **Base de Datos**: PostgreSQL + Vector Store (Pinecone/Weaviate)
- **Procesamiento de Documentos**: PyPDF2, Tesseract OCR
- **Infraestructura**: Docker, Kubernetes, AWS/GCP
- **Herramientas**: pnpm (monorepo), Prettier, Black, ESLint

## 🏃‍♂️ Instrucciones de Arranque Local

### Prerrequisitos
- Node.js 18+ y pnpm 8+
- Python 3.12
- Docker y Docker Compose
- Git

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/erasmojaramillom/ia-entrevistador-gerencial.git
   cd ia-entrevistador-gerencial
   ```

2. **Instalar dependencias del monorepo**
   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno**
   ```bash
   # Frontend
   cp apps/frontend/.env.example apps/frontend/.env.local
   # Backend
   cp apps/backend/.env.example apps/backend/.env
   ```

4. **Iniciar servicios con Docker Compose**
   ```bash
   cd infra
   docker-compose up -d
   ```

5. **Iniciar aplicaciones en modo desarrollo**
   ```bash
   # En la raíz del proyecto
   pnpm dev
   ```

### URLs de Desarrollo
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

## 📊 Arquitectura del Sistema

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Frontend Web  │────▶│   API Gateway   │────▶│  Servicio IA    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                │                         │
                                ▼                         ▼
                        ┌─────────────────┐     ┌─────────────────┐
                        │   Base Datos    │     │  Vector Store   │
                        │   Candidatos    │     │   (PDFs)        │
                        └─────────────────┘     └─────────────────┘
```

## 📁 Estructura del Proyecto

```
ia-entrevistador-gerencial/
├── apps/
│   ├── frontend/          # Next.js + Tailwind CSS
│   └── backend/           # FastAPI + Python 3.12
├── packages/              # Paquetes compartidos
├── infra/                 # Docker Compose e IaC
├── docs/                  # Documentación
├── tests/                 # Tests E2E
└── .github/workflows/     # CI/CD pipelines
```

## 🚦 Roadmap MVP

### Fase 1: Fundación (Semanas 1-2)
- [x] Configuración del entorno de desarrollo
- [x] Diseño de arquitectura base
- [x] Configuración de repositorio y CI/CD

### Fase 2: Core Backend (Semanas 3-4)
- [ ] Procesamiento de CV
- [ ] Integración con LLM
- [ ] Sistema de gestión de PDFs

### Fase 3: Generación de Entrevistas (Semanas 5-6)
- [ ] Motor de generación de preguntas
- [ ] Sistema de evaluación de competencias
- [ ] Algoritmo de personalización

### Fase 4: Frontend y UX (Semanas 7-8)
- [ ] Interfaz de usuario
- [ ] Dashboard de resultados
- [ ] Sistema de reportes

### Fase 5: Testing y Lanzamiento (Semanas 9-10)
- [ ] Pruebas exhaustivas
- [ ] Optimización de rendimiento
- [ ] Despliegue en producción

## 🧪 Testing

```bash
# Tests unitarios
pnpm test

# Tests con coverage
pnpm test:coverage

# Linting
pnpm lint

# Formateo de código
pnpm format
```

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Por favor, lee nuestras [guías de contribución](CONTRIBUTING.md) antes de enviar un PR.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

Para más información sobre el proyecto, por favor contacta al equipo de desarrollo.

---

**IA Entrevistador Gerencial** - Transformando la evaluación de talento gerencial con inteligencia artificial 🚀
