import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone de conhecimento de Java',
    },
    {
      src: 'assets/icons/knowledge/python.svg',
      alt: 'Ícone de conhecimento de Python',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular',
    },
    {
      src: 'assets/icons/knowledge/database-sql.svg',
      alt: 'Ícone de conhecimento de SQL',
    },
    {
      src: 'assets/icons/knowledge/aws.svg',
      alt: 'Ícone de conhecimento de AWS',
    },
  ])
}
