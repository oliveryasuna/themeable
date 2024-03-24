import babelPluginTester from 'babel-plugin-tester';
import plugin from '../src';

babelPluginTester({
  plugin: plugin,
  fixtures: 'fixtures'
});
