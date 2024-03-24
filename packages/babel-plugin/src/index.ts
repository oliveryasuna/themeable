import type * as Babel from '@babel/core';
import type {NodePath, ParserOptions, PluginObj} from '@babel/core';
import type {ParserPlugin} from '@babel/parser';
import type {CallExpression, JSXAttribute, JSXOpeningElement, JSXSpreadAttribute, Program} from '@babel/types';
import {CSS_PROP} from '@oliveryasuna/themeable-runtime';

export default (({types: babel}: (typeof Babel)): PluginObj => ({
  name: '@themeable',
  manipulateOptions: ((_, parserOpts: ParserOptions): void => {
    const plugins: ParserPlugin[] = parserOpts.plugins!;

    if(
        plugins.some((plug: ParserPlugin): boolean => {
          const plugin: ParserPlugin = (Array.isArray(plug) ? plug[0] : plug);

          return (plugin === 'typescript' || plugin === 'jsx');
        })
    ) {
      return;
    }

    plugins.push('jsx');
  }),
  // TODO: Type-safe state.
  visitor: {
    Program: ((path: NodePath<Program>, state: any): void => {
      state.root = path;
      state.importsAdded = false;
    }),
    JSXOpeningElement: ((path: NodePath<JSXOpeningElement>, state: any): void => {
      const [cssProp, cssPropIndex]: [(JSXAttribute | undefined), number] =
          (path.node.attributes
                  .filter((node: (JSXAttribute | JSXSpreadAttribute)): boolean => (('name' in node) && (node.name.name === CSS_PROP)))
                  .map((node: (JSXAttribute | JSXSpreadAttribute), index: number): [JSXAttribute, number] => [(node as JSXAttribute), index])[0]
              ?? [undefined, -1]);

      if(!cssProp) {
        return;
      }

      if(!babel.isJSXExpressionContainer(cssProp.value)) {
        return;
      }

      if(!babel.isCallExpression(cssProp.value.expression)) {
        return;
      }

      const expression: CallExpression = cssProp.value.expression;

      if(!babel.isIdentifier(expression.callee)) {
        return;
      }

      if(expression.callee.name !== 'css') {
        return;
      }

      if(expression.arguments.length !== 1) {
        return;
      }
      if(!babel.isObjectExpression(expression.arguments[0])) {
        return;
      }

      path.node.attributes.push(babel.jsxAttribute(
          babel.jsxIdentifier('style'),
          babel.jsxExpressionContainer(
              babel.callExpression(
                  expression,
                  [babel.callExpression(babel.identifier('useTheme'), [])]
              )
          )
      ));
      path.node.attributes.splice(cssPropIndex, 1);

      if(!state.importsAdded) {
        state.root.unshiftContainer(
            'body',
            [
              babel.importDeclaration([babel.importSpecifier(babel.identifier('css'), babel.identifier('css'))], babel.stringLiteral('@oliveryasuna/themeable-theme')),
              babel.importDeclaration([babel.importSpecifier(babel.identifier('useTheme'), babel.identifier('useTheme'))], babel.stringLiteral('@oliveryasuna/themeable-context'))
            ]
        );

        state.importsAdded = true;
      }
    })
  }
}));
