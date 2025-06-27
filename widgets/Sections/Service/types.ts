enum ServiceId {
  MOBILE_APPS = "mobile_apps",
  LANDING = "landing",
  MULTI_PAGE_SITE = "multi_page_site",
  ECOMMERCE = "ecommerce",
  WEB_SERVICE = "web_service",
  SITE_IMPROVEMENTS = "site_improvements",
  DATA_ANALYTICS = "data_analytics",
  INTEGRATIONS = "integrations",
}

interface Service {
  id: ServiceId;
  title: string;
  duration: string;
  image: string;
  description1: string;
  description2: string;
}

const services: Service[] = [
  {
    id: ServiceId.MOBILE_APPS,
    title: "Мобильные приложения",
    duration: "от 120 дней",
    image: "/assets/services/1.png",
    description1:
      "Создадим мобильные приложения, которое поможет автоматизировать процессы и укрепить связь с клиентами",
    description2:
      "мы Спроектируем удобный и интуитивно понятный UX. Реализуем все функциональные возможности: от интеграций до аналитики.",
  },
  {
    id: ServiceId.LANDING,
    title: "Лендинг",
    duration: "10-14 дней",
    image: "/assets/services1.png",
    description1:
      "Разработка одностраничного сайта для презентации продукта, услуги, компании, эксперта или события",
    description2:
      "Мы проработаем структуру и тексты с акцентом на UX и сторителлинг, создадим дизайн и сверстаем сайт",
  },
  {
    id: ServiceId.MULTI_PAGE_SITE,
    title: "Многостраничный сайт",
    duration: "30-40 дней",
    image: "/assets/services/3.png",
    description1:
      "Разработка многостраничного сайта  поможет рассказать о продукте и вашем бизнесе в онлайн пространсве",
    description2:
      "Мы проработаем карту сайта, спроектируем взаимодействие с пользователем, разработаем UX и дизайн-концепцию, а также сверстаем сайт на подходящей для вас CMS",
  },
  {
    id: ServiceId.ECOMMERCE,
    title: "Интернет-магазин",
    duration: "30-40 дней",
    image: "/assets/services/4.png",
    description1:
      "Разрабатываем интернет-магазины, которые привлекают клиентов и увеличивают продажи.",
    description2:
      "Создаем удобную структуру, ориентированную на конверсию. Интегрируем платежные системы, аналитику",
  },
  {
    id: ServiceId.WEB_SERVICE,
    title: "Веб-сервис",
    duration: "30-40 дней",
    image: "/assets/services/5.png",
    description1:
      "Создаем функциональные веб-сервисы, которые упрощают процессы, автоматизируют задачи и помогают бизнесу расти",
    description2:
      "Спроектируем удобный интерфейс. Реализуем ключевые функции, Поддержим интеграцию с другими сервисами для seamless-опыта.",
  },
  {
    id: ServiceId.SITE_IMPROVEMENTS,
    title: "Доработка сайтов и приложений",
    duration: "30-40 дней",
    image: "/assets/services/6.png",
    description1:
      "Обновляем и улучшаем уже существующие продукты, чтобы они соответствовали современным требованиям.",
    description2:
      "Оптимизируем производительность и безопасность. Добавляем новые функции и Улучшаем дизайн, пользовательский опыт.",
  },
  {
    id: ServiceId.DATA_ANALYTICS,
    title: "Аналитика данных",
    duration: "30-40 дней",
    image: "/assets/services/7.png",
    description1:
      "Помогаем понять, как пользователи взаимодействуют с вашими продуктами, и на основе данных принимаем лучшие решения.",
    description2:
      "Устанавливаем системы аналитики. Предоставляем подробные отчеты и рекомендации. Настраиваем инструменты для анализа поведения пользователей.",
  },
  {
    id: ServiceId.INTEGRATIONS,
    title: "Интеграции",
    duration: "30-40 дней",
    image: "/assets/services/8.png",
    description1:
      "Помогаем понять, как пользователи взаимодействуют с вашими продуктами, и на основе данных принимаем лучшие решения.",
    description2:
      "Устанавливаем системы аналитики. Предоставляем подробные отчеты и рекомендации. Настраиваем инструменты для анализа поведения пользователей.",
  },
];

export { services, ServiceId };
