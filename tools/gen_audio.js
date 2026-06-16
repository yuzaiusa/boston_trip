const fs=require("fs"), {execSync}=require("child_process");
const code=fs.readFileSync("assets/js/content.js","utf8");
eval(code+"\n;this.__T=TRIP;");
const sites=this.__T.sites;
const VOICE={en:"en-US-AriaNeural", zh:"zh-CN-XiaoxiaoNeural"};
const jobs=[];
Object.keys(sites).forEach(id=>{ const s=sites[id]; if(!s.story) return;
  ["en","zh"].forEach(lang=>{ jobs.push({id,lang,text:s.story[lang]}); });
});
console.log("generating", jobs.length, "audio files...");
let okc=0;
for(const j of jobs){
  const dest="assets/audio/"+j.id+"-"+j.lang+".mp3";
  fs.writeFileSync("/tmp/tts.txt", j.text);
  try{
    execSync(`edge-tts --voice ${VOICE[j.lang]} --rate=-8% --file /tmp/tts.txt --write-media ${JSON.stringify(dest)}`,{stdio:"pipe"});
    const sz=fs.existsSync(dest)?fs.statSync(dest).size:0;
    if(sz>1000){ okc++; console.log("OK", dest, Math.round(sz/1024)+"KB"); }
    else console.log("SMALL/FAIL", dest, sz);
  }catch(e){ console.log("ERR", dest, (e.message||"").slice(0,80)); }
}
console.log("DONE_AUDIO", okc+"/"+jobs.length);
