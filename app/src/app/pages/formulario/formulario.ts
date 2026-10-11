import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-formulario-page',
  template: `
    <section class="formulario-page" aria-labelledby="formulario-title">
      <h2 id="formulario-title">Formulário</h2>
      <p>Esta página está preparada para receber o formulário.</p>
    </section>
  `,
  styles: `
    .formulario-page {
      margin: 0 auto;
      padding: 3rem 1.25rem;
      max-width: 600px;
    }

    h2 {
      margin: 0 0 1rem;
      font-size: 2rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioPage {}
