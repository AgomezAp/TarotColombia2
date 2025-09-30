import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full',
  },
  {
    path: 'bienvenida',
    loadComponent: () =>
      import('./components/welcome/welcome.component').then(
        (m) => m.WelcomeComponent
      ),
  },
  {
    path: 'cartas/:theme',
    loadComponent: () =>
      import('./components/cards/cards.component').then(
        (m) => m.CardsComponent
      ),
  },
  {
    path: 'descripcion-cartas',
    loadComponent: () =>
      import('./components/description/description.component').then(
        (m) => m.DescriptionComponent
      ),
  },
  {
    path: 'informacion',
    loadComponent: () =>
      import('./components/additional-info/additional-info.component').then(
        (m) => m.AdditionalInfoComponent
      ),
  },
  {
    path: 'particulas',
    loadComponent: () =>
      import('./shared/particles/particles.component').then(
        (m) => m.ParticlesComponent
      ),
  },
  {
    path: 'agradecimiento',
    loadComponent: () =>
      import('./components/agradecimiento/agradecimiento.component').then(
        (m) => m.AgradecimientoComponent
      ),
  },
  {
    path: 'terminos-y-condiciones',
    loadComponent: () =>
      import(
        './components/terminos-condiciones/terminos-condiciones.component'
      ).then((m) => m.TerminosCondicionesComponent),
  },
  {
    path: '**',
    redirectTo: 'bienvenida',
  }
];