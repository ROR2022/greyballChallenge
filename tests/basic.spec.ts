import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  // Navegar a la página principal de tu app Next.js
  await page.goto('http://localhost:3000/');

  // Verificar que la página tiene el título correcto
  await expect(page).toHaveTitle(/Home Page Title/);

  // Opcional: tomar una captura de pantalla
  await page.screenshot({ path: 'homepage.png' });
});
