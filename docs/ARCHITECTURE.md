# Arquitectura del Sistema - IA Entrevistador Gerencial

## Visión General

El sistema está diseñado siguiendo una arquitectura de microservicios para garantizar escalabilidad, mantenibilidad y flexibilidad.

## Componentes Principales

### 1. Frontend (Cliente Web)
- **Tecnología**: React/Next.js
- **Responsabilidades**:
  - Interfaz de usuario intuitiva
  - Gestión de sesiones de entrevista
  - Visualización de resultados
  - Upload de CVs

### 2. API Gateway
- **Tecnología**: Kong/Express Gateway
- **Responsabilidades**:
  - Enrutamiento de peticiones
  - Autenticación y autorización
  - Rate limiting
  - Logging centralizado

### 3. Servicio de Procesamiento de CV
- **Tecnología**: Python/FastAPI
- **Responsabilidades**:
  - Extracción de texto de PDFs
  - Parsing de información estructurada
  - Normalización de datos

### 4. Motor de IA
- **Tecnología**: LangChain + OpenAI API
- **Responsabilidades**:
  - Generación de preguntas personalizadas
  - Análisis de respuestas
  - Evaluación de competencias

### 5. Base de Conocimiento
- **Tecnología**: Vector Database (Pinecone/Weaviate)
- **Responsabilidades**:
  - Almacenamiento de PDFs procesados
  - Búsqueda semántica
  - Recuperación de contexto relevante

### 6. Base de Datos Principal
- **Tecnología**: PostgreSQL
- **Responsabilidades**:
  - Datos de usuarios y candidatos
  - Resultados de evaluaciones
  - Configuraciones del sistema

## Flujo de Datos

1. **Upload de CV**: Usuario → Frontend → API Gateway → Servicio CV
2. **Generación de Entrevista**: Servicio CV → Motor IA → Base Conocimiento
3. **Evaluación**: Respuestas → Motor IA → Base de Datos
4. **Reportes**: Base de Datos → API Gateway → Frontend

## Seguridad

- **Autenticación**: JWT tokens
- **Encriptación**: TLS 1.3 para comunicaciones
- **Almacenamiento**: Encriptación en reposo para datos sensibles
- **Compliance**: GDPR ready

## Escalabilidad

- Contenedores Docker para todos los servicios
- Orquestación con Kubernetes
- Auto-scaling basado en carga
- CDN para assets estáticos
