import { Component, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/xadrez.png',
      alt: 'Projeto Java',
      title: 'Jogo de Xadrez em Java',
      with: '100px',
      height: '51px',
      description: '<p>Projeto de um jogo de Xadrez feito através da linguagem Java</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/MatheusFolster/chess-system-java',
        },
      ],
    },
  ]);
}
