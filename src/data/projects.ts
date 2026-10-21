export interface Project {
  id: string;
  title: string;
  category: string;
  impactMetric: string;
  description: string;
  businessHighlights: string[];
  techTags: string[];
  inquirySubject: string;
}

export const projects: Project[] = [
  {
    id: "ventas-mayorista",
    title: "Plataforma de Ventas Mayorista",
    category: "Comercio Electrónico B2B",
    impactMetric: "+30% ventas digitales en 60 días",
    description: "Desarrollo integral de tienda online autoadministrable que digitalizó el proceso de pedidos de punta a punta, permitiendo a los clientes comprar las 24 hs sin intervención manual.",
    businessHighlights: [
      "Catálogo de precios dinámicos por volumen de compra",
      "Pasarela de cobros online con acreditación automática",
      "Panel simple para actualizar stock en un clic desde el celular"
    ],
    techTags: ["React", "Node.js", "Pasarela de Pagos", "Tailwind CSS"],
    inquirySubject: "Consulta sobre Plataforma de Ventas / E-commerce"
  },
  {
    id: "gestion-turnos",
    title: "Sistema de Gestión de Turnos",
    category: "Automatización & Operaciones",
    impactMetric: "15 horas semanales de trabajo manual ahorradas",
    description: "Plataforma web a medida que automatizó la coordinación de reservas de clientes, eliminando las consultas repetitivas y las ausencias no avisadas.",
    businessHighlights: [
      "Reserva online de turnos 100% autogestionada por el usuario",
      "Notificaciones y recordatorios automáticos por email",
      "Tablero de control de ingresos y horarios de mayor concurrencia"
    ],
    techTags: ["Astro", "React", "PostgreSQL", "Automatizaciones"],
    inquirySubject: "Consulta sobre Sistema de Gestión de Turnos"
  },
  {
    id: "dashboard-metricas",
    title: "Dashboard Operativo & Control de Stock",
    category: "Sistemas Internos & Dashboards",
    impactMetric: "Visualización en tiempo real y 0 discrepancias de stock",
    description: "Panel interno centralizado para monitorear ventas, despachos e inventario en tiempo real, reemplazando múltiples planillas de cálculo dispersas.",
    businessHighlights: [
      "Filtros avanzados por fecha, cliente y estado de entrega",
      "Exportación automática de reportes ejecutivos en PDF y Excel",
      "Diseño adaptado para uso ágil tanto en tablet como en PC de escritorio"
    ],
    techTags: ["TypeScript", "React", "APIs REST", "Gráficos / UI"],
    inquirySubject: "Consulta sobre Dashboard o Sistema Interno"
  }
];
