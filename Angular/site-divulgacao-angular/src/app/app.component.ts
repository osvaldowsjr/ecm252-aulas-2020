import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site-divulgacao-angular';
  cursos = [
    { nome: "Engenharia de alimentos", descricao: "A graduação em Engenharia de Alimentos da Mauá oferece um intenso programa prático que leva o aluno desde as primeiras séries para os laboratórios didáticos e de pesquisa e de processamento em pequena escala. O campus conta ainda com uma instalação semi-industrial capaz de simular a produção de diversos produtos, semelhante ao que fazem as indústrias de alimentos." },
    { nome: "Engenharia Mecanica", descricao: "A Engenharia Mecânica trabalha por soluções para satisfazer necessidades da sociedade com tecnologias apropriadas. Para isso, ela projeta e desenvolve processos de fabricação de produtos consumidos no cotidiano, de máquinas e equipamentos industriais e de instalações industriais e de geração ou transformação de energia." },
    { nome: "Engenharia Controle e automação", descricao: "Os alunos do curso de Engenharia de Controle da Mauá têm conhecimentos de Mecânica, Eletrônica e Computação para atuarem e se desenvolverem em novas áreas, entre as quais se destacam: Máquinas e Dispositivos Inteligentes, Robótica, Sistemas Autônomos, Integração de Sistemas Automatizados, Automação da Manufatura, Automação Predial e Controle de Processos" },
    { nome: "Engenharia Quimica", descricao: "O Engenheiro Químico pode atuar em indústrias, nas quais a química se faz presente, em empresas de serviços e consultorias; laboratórios; institutos de pesquisas; instituições públicas e universidades. Nesses setores ele pode atender várias áreas de atuação, como engenheiro de: projeto, produto, processo, produção, desenvolvimento, manutenção, segurança, qualidade, aplicações, assistência técnica, suprimentos e vendas; diversos cargos em nível de gerência, pesquisador e professor." },
    { nome: "Engenharia da Computação", descricao: "A graduação em Engenharia de Computação da Mauá oferece aos alunos uma formação com base nos conceitos fundamentais da Engenharia, até a formação especializada em Sistemas Embarcados, Software, Infraestrutura e Segurança, Ciência de Dados e suas inter-relações." },
    { nome: "Engenharia civil", descricao: "O curso tem uma área de atuação ampla que exige do profissional uma formação diversificada e pronto para atender obras distintas: construção de edifícios residenciais, ferrovias, aeroportos ou faça o planejamento de sistemas de saneamento básico para cidades, podendo trabalhar com arquitetos e ambientalistas em grandes construções" },
    { nome: "Engenharia elétrica", descricao: "A Mauá oferece a seu aluno de Engenheira Elétrica uma formação que, além de fortemente alicerçada nos conceitos fundamentais da Engenharia, permeia e entrelaça as áreas de Conversão de Energia, Regulamentação, Proteção, Distribuição e Energias Alternativas. Embora científico e tecnológico, o curso de Engenharia Elétrica também dá aos seus alunos a base para um pensamento humanístico e social que faz do profissional um elemento de atuação diferenciada na sociedade." },
    { nome: "Engenharia eletronica", descricao: "A Mauá oferece a seu aluno de Engenheira Eletrônica uma formação com base nos conceitos fundamentais da Engenharia com as áreas de Telecomunicações, Sistemas Computacionais, Eletrônica e Automação de Processos Industriais. Embora científica e tecnológica, a formação também valoriza os aspectos humanísticos e sociais que tornam o profissional um elemento de atuação diferenciada para a sociedade" },
    { nome: "Engenharia produção", descricao: "O Engenheiro de Produção planeja, projeta e gerencia sistemas organizacionais que envolvem recursos humanos, materiais, tecnológicos, financeiros e ambientais. Alia conhecimentos técnicos e gerenciais para otimizar o uso de recursos produtivos e diminuir os custos de produção de bens e serviços." }];
    alunos=[];

    onAdicionarAluno(aluno){
      this.alunos = [aluno, ...this.alunos]
    }
    onAdicionarCurso(curso) {
      this.cursos = [curso, ...this.cursos];
      }
}
