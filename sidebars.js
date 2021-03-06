module.exports = {
  docs: [
    "intro",
    {
      type: 'category',
      label: 'Instalação',
      items: [
        {
          type: "category",
          label: "Ambiente",
          items: [
            "Instalacao/Docker/docker",
            "Instalacao/Docker/dockercompose",
            "Instalacao/Docker/postinstall",
          ],
        },
        "Instalacao/building",
        "Instalacao/Desenvolvimento/Node/node",
        "Instalacao/Desenvolvimento/Python/python",
      ],
    },
    {
      type: 'category',
      label: 'Projeto',
      items: [
        {
          type: "category",
          label: "Estrutura",
          items: [
            "Projeto/Estrutura/desenvolvimento",
            "Projeto/Estrutura/producao",
            "Projeto/Estrutura/teste",
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Manual do Usuário',
      items: [
        "Manual de Uso/manual",
      ],
    },
  ],
};
