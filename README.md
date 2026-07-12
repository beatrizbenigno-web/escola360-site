# Escola360 - Dashboard de Acompanhamento Escolar 

**Escola360** é uma plataforma web de acompanhamento escolar desenvolvida como componente curricular das disciplinas de Projeto Integrado e Desenvolvimento para a Web do curso de **Análise e Desenvolvimento de Sistemas (ADS)** da **Universidade Federal do Cariri (UFCA / UAB)**
O sistema propõe-se a resolver os gargalos da comunicação fragmentada e do controle físico/manual nas instituições de ensino, atuando como um elo digital integrado e centralizado em tempo real para toda a comunidade escolar.

---

## Objetivo do Projeto

Centralizar as informações acadêmicas dos alunos e facilitar a comunicação dinâmica entre a escola, pais, professores e gestores. A plataforma visa promover maior transparência, reduzir a sobrecarga administrativa e estimular o engajamento familiar de forma organizada e contínua no processo educacional.

---

## Público-Alvo e Perfis de Acesso

O sistema é projetado em formato de *Single Page Application (SPA)* com menus laterais customizados, atendendo a quatro perfis principais de usuários:

| Perfil | Função | Escopo de Acesso |
| :--- | :--- | :--- |
| **Gestor** | Administração geral | Acesso macro a todos os módulos, controle de permissões, cadastros e gráficos de evasão/frequência. |
| **Professor** | Gestão acadêmica | Lançamento automatizado de notas e frequências, relatórios em PDF e agendas das turmas sob sua tutela. |
| **Aluno** | Consulta acadêmica | Visualização de boletim com indicadores de desempenho, mural de avisos e calendário de avaliações. |
| **Responsável** | Acompanhamento | Acompanhamento de notas/faltas dos dependentes (com suporte a múltiplos alunos) e canal direto com a escola. |

---

## Estrutura de Pastas

O repositório adota a seguinte arquitetura de diretórios para garantir manutenibilidade e a separação correta de escopos:

```text
ESCOLA360/
│
├── css/
│   └── style.css      # Folhas de estilo 
├── img/
│   └── ...            # Armazenamento de identidades visuais e ícones (ex: logo do chapéu)
│
├── js/
│   └── ...            # Diretório reservado para scripts de interatividade futura
│
├── paginas/           # Diretório reservado às páginas html da aplicação
│   └── login.html
│   └── funcionalidades.html      
│   └── sobre-nos.html
│   └── suporte.html
│   └── dashboard.html
│
└── index.html         # Página de entrada do sistema (Landing Page)
```
---

## AUTORES

- BEATRIZ BENIGNO DE VASCONCELOS - MAT. 2025013076
- ALDEMIR FERREIRA DA SILVA JÚNIOR - MAT. 2025012892
- FRANCISCO SAVIO SOUSA DA CUNHA - MAT. 2025013352
- FRANCISCO DIOGO DE SOUSA SILVA - MAT. 2025013307
- JOÃO PAULO LIMA DAVID - MAT. 2025013441
