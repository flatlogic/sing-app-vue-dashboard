import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { createRequire } from 'node:module'
import test from 'node:test'

const require = createRequire(import.meta.url)
const testUtilsRequire = createRequire(require.resolve('@vue/test-utils'))
const beautify = testUtilsRequire('js-beautify')
const beautifyRequire = createRequire(testUtilsRequire.resolve('js-beautify'))

test('Vue Test Utils HTML formatter preserves nested markup and attributes', () => {
  const result = beautify.html('<section><button disabled="disabled">Save</button><p>Hello</p></section>', {
    indent_size: 2
  })
  assert.equal(result, '<section><button disabled="disabled">Save</button>\n  <p>Hello</p>\n</section>')
})

test('formatter glob expansion preserves sync API and ignore patterns', context => {
  const directory = mkdtempSync(path.join(tmpdir(), 'sing-vue-glob-'))
  context.after(() => rmSync(directory, { recursive: true, force: true }))
  mkdirSync(path.join(directory, 'nested'))
  writeFileSync(path.join(directory, 'app.js'), 'const app = true')
  writeFileSync(path.join(directory, 'nested', 'skip.js'), 'const skip = true')
  writeFileSync(path.join(directory, 'style.css'), 'body {}')
  const glob = beautifyRequire('glob')
  assert.deepEqual(glob.globSync('**/*.js', { cwd: directory, ignore: ['nested/**'] }), ['app.js'])
})

test('EditorConfig still matches brace globs and normalizes formatting properties', context => {
  const directory = mkdtempSync(path.join(tmpdir(), 'sing-vue-editorconfig-'))
  context.after(() => rmSync(directory, { recursive: true, force: true }))
  writeFileSync(path.join(directory, '.editorconfig'), 'root = true\n\n[*.{js,vue}]\nindent_style = space\nindent_size = 2\n')
  const editorconfig = beautifyRequire('editorconfig')
  const properties = editorconfig.parseSync(path.join(directory, 'Component.vue'))
  assert.equal(properties.indent_style, 'space')
  assert.equal(properties.indent_size, 2)
  assert.equal(properties.tab_width, 2)
})
