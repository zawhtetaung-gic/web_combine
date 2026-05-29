module.exports = [
  {
    name: "Car license renewal frontend",
    path: "D:/license_project/car_agent",
    command: "npm run dev",
    port: 5173,
  },
  {
    name: "Car license renewal backend",
    path: "D:/license_project/backend-api/license_service_system",
    command: "php artisan serve --port",
    port: 8000,
  },
  {
    name: "Car rental admin panel",
    path: "D:/car-rental-admin/ojt2026-car-rental-admin-site",
    command: "php artisan serve --port",
    port: 8001,
  },
];
