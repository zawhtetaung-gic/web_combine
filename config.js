module.exports = [
  {
    name: "Car License Renewal",
    services: [
      {
        type: "frontend",
        path: "D:/license_project/car_agent",
        command: "npm run dev",
        port: 5173,
      },
      {
        type: "backend",
        path: "D:/license_project/backend-api/license_service_system",
        command: "php artisan serve --port",
        port: 8000,
      },
    ],
  },

  {
    name: "Car Rental Admin Panel",
    services: [
      {
        type: "backend",
        path: "D:/car-rental-admin/ojt2026-car-rental-admin-site",
        command: "php artisan serve --port",
        port: 8001,
      },
    ],
  },

  {
    name: "Kentoku Apt Mgt System",
    services: [
      {
        type: "frontend",
        path: "D:/Kentoku-Apt-Mgt-Sys/Kentoku-Apt-Mgt-Sys/frontend",
        command: "npm run serve -- --port",
        port: 8080,
      },
      {
        type: "backend",
        path: "D:/Kentoku-Apt-Mgt-Sys/Kentoku-Apt-Mgt-Sys/backend",
        command: "php artisan serve --port",
        port: 8002,
      },
    ],
  },
];
