import { mkdir, rm, writeFile, readFile, cp } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import assert from 'node:assert/strict';
const root='src/content/apps/__test-fixtures';
try {
  for(let i=0;i<9;i++){
    const dir=`${root}/fixture-${i}`; await mkdir(`${dir}/images`,{recursive:true});
    await cp('public/icon-192.png',`${dir}/images/example.png`);
    await writeFile(`${dir}/index.md`,`---\ntitle: Fixture ${i}\ndescription: Test entry\norigin: recommended\ntags: [测试]\nicon: ./images/example.png\n---\n\n## 图文测试\n\n![示例图片](./images/example.png)\n`);
  }
  execFileSync('npm',['run','build'],{stdio:'inherit',env:{...process.env,ASTRO_TELEMETRY_DISABLED:'1'}});
  const first=JSON.parse(await readFile('dist/catalog/1.json','utf8'));
  const second=JSON.parse(await readFile('dist/catalog/2.json','utf8'));
  const index=JSON.parse(await readFile('dist/search-index.json','utf8'));
  assert.equal(first.length,9); assert.equal(second.length,2); assert.equal(index.length,11);
  assert.equal(new Set([...first,...second].map(a=>a.id)).size,11);
  const html=await readFile('dist/apps/__test-fixtures/fixture-0/index.html','utf8');
  assert.match(html,/图文测试/); assert.match(html,/alt="示例图片"/); assert.match(html,/_astro\//);
  console.log('分页、搜索索引和 Markdown 相对图片构建检查通过。');
} finally { await rm(root,{recursive:true,force:true}); execFileSync('npm',['run','build'],{stdio:'inherit',env:{...process.env,ASTRO_TELEMETRY_DISABLED:'1'}}); }
