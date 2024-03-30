module.exports = (/** @type {import('plop').NodePlopAPI} */ plop) => {

  // create new components
  plop.setGenerator("create-component", {
    description: "Create a new component at src/components",
    prompts: [{
      type: "list",
      name: 'atomic',
      choices: ["atoms", "molecules", "organisms"],
      message: "Choose the atomic design stage:"
    },
    {
      type: "input",
      name: 'name',
      message: "Enter the component name:"
    },
    {
      type: "list",
      name: 'pattern',
      message: "Choose a pattern?",
      choices: [{ name: "component", value: "component.tsx" }, { name: "compound", value: "compound.ts" }]
    }
    ],
    actions: () => [{
      type: "add",
      path: './src/components/{{ atomic }}/{{ pascalCase name }}/index.tsx',
      templateFile: 'templates/plop/components/{{pattern}}.hbs'
    },
    {
      type: "add",
      path: "./src/components/{{ atomic }}/{{ pascalCase name }}/interface.ts",
      templateFile: "templates/plop/components/interface.ts.hbs"
    },
    {
      type: "add",
      path: "./src/components/{{ atomic }}/{{ pascalCase name }}/{{ name }}.stories.tsx",
      templateFile: 'templates/plop/components/stories.tsx.hbs',
    },
    {
      type: "add",
      path: "./src/components/{{ atomic }}/{{ pascalCase name }}/styles.module.scss",
      templateFile: 'templates/plop/components/styles.scss.hbs',
    }
    ]
  });

  //  create compound components
  plop.setGenerator('create-compound-components', {
    description: "Compose a component at src/components/*/**",
    prompts: [{
      type: "list",
      name: 'atomic',
      choices: ["atoms", "molecules", "organisms"],
      message: "Choose the atomic design stage:"
    },
    {
      type: "input",
      name: 'name',
      message: "Enter the name of the component you want to compose:"
    },
    {
      type: "input",
      name: 'compound-name',
      message: "Enter the name compound component name:"
    }
    ],
    actions: [{
      type: "add",
      templateFile: 'templates/plop/components/compound-component.tsx.hbs',
      path: "./src/components/{{atomic}}/{{pascalCase name}}/{{pascalCase compound-name}}/index.tsx"
    },
    {
      type: "add",
      templateFile: 'templates/plop/components/interface.ts.hbs',
      path: "./src/components/{{atomic}}/{{pascalCase name}}/{{pascalCase compound-name}}/interface.ts"
    },
    {
      type: "add",
      templateFile: 'templates/plop/components/styles.scss.hbs',
      path: "./src/components/{{atomic}}/{{pascalCase name}}/{{pascalCase compound-name}}/styles.module.scss",
    }
    ]
  });
};
