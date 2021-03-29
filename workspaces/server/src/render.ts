import type { HelmetData } from 'react-helmet';

export const render = (content: string, header: HelmetData) => {
  return `
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    ${header.title.toString()}
    ${header.meta.toString()}
  </head>
  <body>
    <div id="root">${content}</div>
    <script type="text/javascript" charset="utf-8" src="static/js/bundle.js" async></script>
  </body>
</html>
`;
};
