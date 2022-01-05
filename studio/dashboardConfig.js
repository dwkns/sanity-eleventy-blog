export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61d59125fe1fba38e80629ab',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ck193jhf',
                  apiId: 'b7b72b92-c782-4cbb-9599-b563f25298b2'
                },
                {
                  buildHookId: '61d59126f348b445eb5e2851',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-q8z3xmz2',
                  apiId: '6f18d944-0648-4994-a1a8-14478b042c84'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dwkns/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-q8z3xmz2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
