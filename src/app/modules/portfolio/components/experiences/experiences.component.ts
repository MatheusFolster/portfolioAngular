import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Projetos pessoais GitHub',
        p: '2023 | Atualmente' 
      },
      text: "<p>Tenho projetos no GitHub em Java, onde desenvolvi um jogo de xadrez e um projeto de Java Web; um portfólio em JavaScript com HTML e CSS e esse portfólio em Angular.</p> <p>Além disso,"
    },
    {
      summary: {
        strong: 'Estagiário Contabilidade',
        p: 'Marinha do Brasil | Nov 2021 - Mar 2023' 
      },
      text: "<p>Fui responsável pela elaboração de planilhas de desconto de IRRF, bem como outros impostos na dedução de pagamento de espólios militares.</p>"
    },
    {
      summary: {
        strong: 'Estagiário Contabilidade',
        p: 'Marinha do Brasil | Nov 2021 - Mar 2023' 
      },
      text: "<p>Elaborei ofícios para os órgãos públicos responsáveis pelas respectivas demandas processuais.</p>"
    },
  ])
}
