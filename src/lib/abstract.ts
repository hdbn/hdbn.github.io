import katex from 'katex';

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** The LaTeX that abstracts use in running text, as plain HTML. */
function textHtml(text: string): string {
  return escapeHtml(text)
    .replace(/\\(?:emph|textit)\{([^{}]*)\}/g, '<em>$1</em>')
    .replace(/\\textbf\{([^{}]*)\}/g, '<strong>$1</strong>')
    .replace(/\\(?:texttt|textsf|textrm|mbox|text)\{([^{}]*)\}/g, '$1')
    .replace(/``/g, '“')
    .replace(/''/g, '”')
    .replace(/---/g, '—')
    .replace(/--/g, '–')
    .replace(/~/g, '&nbsp;')
    .replace(/\\([&%#_{}$])/g, '$1')
    .replace(/\\ /g, ' ');
}

/**
 * An abstract as HTML: its `$…$` (and `$$…$$`, `\(…\)`) mathematics set by
 * KaTeX when the site is built, so no script runs for it in the browser, and
 * the rest with LaTeX's quotes, dashes and emphasis made plain. A formula
 * KaTeX cannot read is shown as written.
 */
export function abstractHtml(abstract: string): string {
  const parts = abstract.split(/(\$\$[\s\S]+?\$\$|\$[^$]+?\$|\\\([\s\S]+?\\\))/);
  return parts
    .map((part, i) => {
      if (i % 2 === 0) return textHtml(part);
      const display = part.startsWith('$$');
      const tex = part.startsWith('\\(') ? part.slice(2, -2) : part.slice(display ? 2 : 1, display ? -2 : -1);
      return katex.renderToString(tex, { throwOnError: false, displayMode: false, output: 'html' });
    })
    .join('');
}
