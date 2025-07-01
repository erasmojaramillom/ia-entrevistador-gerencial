export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Revoluciona tu Proceso de Selección Gerencial
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Utiliza el poder de la inteligencia artificial para generar entrevistas
          personalizadas y evaluar 20 competencias gerenciales clave en solo 1 hora.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/register" className="btn-primary text-lg px-8 py-3">
            Comenzar Gratis
          </a>
          <a href="/demo" className="btn-secondary text-lg px-8 py-3">
            Ver Demo
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Evaluación Integral</h3>
          <p className="text-gray-600">
            Analiza 20 competencias gerenciales esenciales de manera objetiva y consistente.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Ahorro de Tiempo</h3>
          <p className="text-gray-600">
            Reduce el tiempo de evaluación de días a horas con entrevistas automatizadas de 1 hora.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Insights Accionables</h3>
          <p className="text-gray-600">
            Obtén reportes detallados con recomendaciones basadas en datos para tomar mejores decisiones.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu proceso de selección?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Únete a las empresas líderes que ya confían en nuestra plataforma.
        </p>
        <a href="/contact" className="btn-primary text-lg px-8 py-3">
          Solicitar Información
        </a>
      </section>
    </div>
  );
}
